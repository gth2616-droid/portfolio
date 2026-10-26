"""Apply the latest three-page Daiso PDF without regenerating unrelated artwork."""
from pathlib import Path
import gzip, hashlib, json, re
from collections import deque
import fitz
import numpy as np
from PIL import Image, ImageOps

ROOT=Path(__file__).resolve().parents[1]
PDF=ROOT/'src/content-assets/다이소딱지.pdf'
HERO=ROOT/'src/content-assets/다이소딱지.jpg'
MAPPING=[('daiso-1','A039','골드',2,'#efa0c3'),('daiso-2','A040','샤이닝',1,'#f5d4bb'),('daiso-3','A041','스파클',0,'#9dd4eb')]

def locate_hole(page):
 pix=page.get_pixmap(matrix=fitz.Matrix(2,2),alpha=False)
 a=np.frombuffer(pix.samples,dtype=np.uint8).reshape(pix.height,pix.width,3)
 x0,x1=int(pix.width*.42),int(pix.width*.58);y0,y1=int(pix.height*.025),int(pix.height*.09)
 mask=np.all(a[y0:y1,x0:x1]>252,axis=2);seen=set();components=[]
 for y,x in np.argwhere(mask):
  start=(int(y),int(x))
  if start in seen:continue
  queue=deque([start]);seen.add(start);points=[]
  while queue:
   cy,cx=queue.popleft();points.append((cy,cx))
   for ny,nx in [(cy-1,cx),(cy+1,cx),(cy,cx-1),(cy,cx+1)]:
    if 0<=ny<mask.shape[0] and 0<=nx<mask.shape[1] and mask[ny,nx] and (ny,nx) not in seen:seen.add((ny,nx));queue.append((ny,nx))
  if len(points)>50:components.append(points)
 if not components:raise ValueError('Could not identify the circular header hole')
 points=max(components,key=len);ys,xs=zip(*points);left,right=x0+min(xs),x0+max(xs)+1;top,bottom=y0+min(ys),y0+max(ys)+1
 return [(left+right)/2/pix.width,(top+bottom)/2/pix.height,(right-left)/2/pix.width]

def relief(page):
 found=[]
 for d in page.get_drawings():
  r=d['rect'];items=d['items']
  if r.y0>110 and 70<r.width<180 and abs(r.width-r.height)<1 and len(items)==4 and all(i[0]=='c' for i in items):
   if not any(abs(r.x0-f[0])<.5 and abs(r.y0-f[1])<.5 for f in found):found.append(tuple(r))
 if len(found)!=6:raise ValueError(f'Expected six round badge outlines, found {len(found)}')
 return [dict(u=(r[0]+r[2])/2/page.rect.width,v=(r[1]+r[3])/2/page.rect.height,r=(r[2]-r[0])/2/page.rect.width) for r in found]

def run():
 doc=fitz.open(PDF)
 if len(doc)!=3:raise ValueError('Expected three PDF pages')
 retail=ROOT/'src/retail-data.js';retail_text=retail.read_text();content=ROOT/'src/content-data.js';content_text=content.read_text();vector=ROOT/'src/vector-data.js';vector_text=vector.read_text();audit=[]
 for vid,aid,label,index,stock in MAPPING:
  page=doc[index];w,h=page.rect.width,page.rect.height
  pix=page.get_pixmap(matrix=fitz.Matrix(1536/w,1536/w),alpha=False)
  texture=ROOT/f'src/package-assets/{vid}/front.png';pix.save(texture)
  image=Image.frombytes('RGB',(pix.width,pix.height),pix.samples);image.thumbnail((1000,1600),Image.Resampling.LANCZOS);image.save(ROOT/f'src/content-assets/{aid}.webp','WEBP',quality=94,method=6)
  svg=page.get_svg_image(text_as_path=True);(ROOT/f'src/vector-assets/{aid}-1.svg.gz').write_bytes(gzip.compress(svg.encode(),mtime=0))
  seam=next(d['rect'].height for d in page.get_drawings() if d['rect'].width>w-1 and d['rect'].y0<1 and 100<d['rect'].height<180)
  meta=dict(id=vid,group='daiso',label=label,stock=stock,shape='retail-card',dimensions=[round(w*25.4/72,3),round(h*25.4/72,3),4],dimensionNote='PDF 페이지 기준 156 × 252 mm · 두께 약 4 mm 추정 · 완성 치수 미확인 · 후면 무지',title='다이소 딱지',hole=locate_hole(page),sealLines=[seam/h],badgeRelief=relief(page),cleanCutlines=False,source='다이소딱지.pdf',sourcePage=index+1)
  replacement=json.dumps(meta,ensure_ascii=False)[:-1]+', "textures":{"front":new URL(\'./package-assets/'+vid+'/front.png\',import.meta.url).href}},'
  retail_text=re.sub(r'^\{"id": "'+vid+r'".*$',lambda _:replacement,retail_text,flags=re.M)
  info=dict(id=aid,title='다이소 '+label+' 타입 · PDF 인쇄 원본',group='packaging',source='다이소딱지.pdf · '+str(index+1)+'페이지',credit='',kind='document',width=image.width,height=image.height)
  replacement=json.dumps(info,ensure_ascii=False)[:-1]+', "src":new URL(\'./content-assets/'+aid+'.webp\',import.meta.url).href, "pages":[], "original":new URL(\'./content-assets/다이소딱지.pdf\',import.meta.url).href+\'#page='+str(index+1)+'\'},'
  content_text=re.sub(r'^\{"id": "'+aid+r'".*$',lambda _:replacement,content_text,flags=re.M)
  entry='"'+aid+'":{pages:[{url:new URL(\'./vector-assets/'+aid+'-1.svg.gz\',import.meta.url).href,width:'+str(w)+',height:'+str(h)+'}]},'
  if re.search(r'^"'+aid+r'":',vector_text,re.M):vector_text=re.sub(r'^"'+aid+r'":.*$',lambda _:entry,vector_text,flags=re.M)
  else:vector_text=vector_text.replace('export const vectorDocuments = {','export const vectorDocuments = {\n'+entry)
  audit.append(dict(**meta,pdfRectPoints=list(page.rect),trimBoxPoints=list(page.trimbox),texturePixels=[pix.width,pix.height],asset=info))
 new_hero='"id": "T005"' not in content_text
 if HERO.exists():
  im=ImageOps.exif_transpose(Image.open(HERO));width,height=im.size;im.thumbnail((1200,1200),Image.Resampling.LANCZOS);im.save(ROOT/'src/content-assets/daiso-lineup-preview.webp','WEBP',quality=94,method=6,icc_profile=im.info.get('icc_profile',b''))
  entry=json.dumps(dict(id='T005',title='다이소 딱지 3종 대표 비주얼',group='product',source='src/content-assets/다이소딱지.jpg',credit='',kind='image',width=width,height=height),ensure_ascii=False)[:-1]+', "src":new URL(\'./content-assets/다이소딱지.jpg\',import.meta.url).href, "preview":new URL(\'./content-assets/daiso-lineup-preview.webp\',import.meta.url).href, "pages":[]},'
  if new_hero:content_text=content_text.replace('\n];\nexport const badgeSamples','\n'+entry+'\n];\nexport const badgeSamples')
  else:content_text=re.sub(r'^\{"id": "T005".*$',lambda _:entry,content_text,flags=re.M)
 retail.write_text(retail_text);content.write_text(content_text);vector.write_text(vector_text)
 (ROOT/'src/package-assets/daiso-pdf-source-map.json').write_text(json.dumps(dict(source=str(PDF.relative_to(ROOT)),sha256=hashlib.sha256(PDF.read_bytes()).hexdigest(),variants=audit),ensure_ascii=False,indent=2))
 coverage=ROOT/'docs/portfolio-asset-coverage.json';data=json.loads(coverage.read_text());pdf_sources=data.setdefault('additional_document_sources',[]);new_doc='src/content-assets/다이소딱지.pdf' not in pdf_sources
 if new_doc:pdf_sources.append('src/content-assets/다이소딱지.pdf')
 data['source_files']+=int(new_doc)+int(new_hero and HERO.exists())
 for row in audit:
  item=next(a for a in data['mapping'] if a['id']==row['asset']['id']);item.update({k:row['asset'][k] for k in item})
 if HERO.exists():
  info=dict(id='T005',source='src/content-assets/다이소딱지.jpg',group='product',kind='image',title='다이소 딱지 3종 대표 비주얼')
  if 'T005' not in data['all_source_ids']:data['all_source_ids'].append('T005');data['mapping'].append(info)
 data['archive_items']=len(data['all_source_ids']);coverage.write_text(json.dumps(data,ensure_ascii=False,indent=2))
 print('Prepared PDF artwork, vector zoom, page proportions and six badge relief positions for all three Daiso types.')

if __name__=='__main__':run()
