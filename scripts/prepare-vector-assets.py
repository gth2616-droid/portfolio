"""Preserve PDF drawing operations as SVG, and map individual badge faces.
Raster images already embedded in the PDF retain their original embedded data.
No screenshot is used as the source for zoomed documents or 3D face textures.
"""
from pathlib import Path
import fitz,gzip,json,re,base64,sys
import numpy as np
from PIL import ImageChops
from PIL import Image
from io import BytesIO
root=Path(__file__).resolve().parents[1];materials=Path('/workspace/teenieping-materials');out=root/'src/vector-assets';out.mkdir(parents=True,exist_ok=True)
documents={
 'B001':materials/'originals/260417_티니핑3종딱지(최종칼선).pdf',
 'A004':materials/'extracted/로고_카피라이트_가이드라인.pdf',
 'A001':materials/'extracted/COPYRIGHT.ai'}

def browser_color_svg(svg,doc,page):
 # MuPDF SVG export writes CMYK JPEG samples in inverted Adobe form. Browsers
 # decode these differently (black background). Map them to the original PDF
 # image object and convert that object's ICC/CMYK pixels through MuPDF to RGB.
 # Encode losslessly at the original pixel dimensions; vector paths are untouched.
 candidates={};encoded={}
 for entry in page.get_images():
  xref=entry[0]
  if xref in encoded:continue
  pix=fitz.Pixmap(doc,xref)
  if not pix.colorspace or pix.colorspace.n!=4:continue
  key=(pix.width,pix.height)
  raw=Image.frombytes('CMYK',key,pix.samples)
  signature=np.asarray(raw.resize((16,16)),dtype=np.float32)
  candidates.setdefault(key,[]).append((xref,signature));encoded[xref]=None
 def replace(match):
  uri=match.group(0);payload=base64.b64decode(uri.split(',',1)[1]);image=Image.open(BytesIO(payload))
  if image.mode!='CMYK':return uri
  signature=np.asarray(ImageChops.invert(image).resize((16,16)),dtype=np.float32)
  possible=candidates.get(image.size,[])
  if not possible:raise ValueError('No original CMYK image for SVG object')
  xref,_=min(possible,key=lambda candidate:float(np.mean((candidate[1]-signature)**2)))
  if encoded[xref] is None:
   source=fitz.Pixmap(doc,xref);rgb=fitz.Pixmap(fitz.csRGB,source)
   im=Image.frombytes('RGB',(rgb.width,rgb.height),rgb.samples);buffer=BytesIO();im.save(buffer,'WEBP',lossless=True,method=4)
   encoded[xref]='data:image/webp;base64,'+base64.b64encode(buffer.getvalue()).decode()
  return encoded[xref]
 return re.sub(r'data:image/(?:png|jpeg);base64,\s*[A-Za-z0-9+/=\s]+',replace,svg)

manifest={};lines=['// Original PDF vector drawing operations and original embedded raster images.','export const vectorDocuments = {']
for key,path in documents.items():
 doc=fitz.open(path);pages=[]
 for i,page in enumerate(doc):
  name=f'{key}-{i+1}.svg.gz'
  if '--catalog-only' not in sys.argv or not (out/name).exists():
   svg=browser_color_svg(page.get_svg_image(text_as_path=True),doc,page).encode();(out/name).write_bytes(gzip.compress(svg,compresslevel=9,mtime=0))
  pages.append(dict(file=name,width=page.rect.width,height=page.rect.height))
 manifest[key]=dict(source=path.name,pages=pages)
 lines.append(json.dumps(key)+':{pages:['+','.join('{url:'+f"new URL('./vector-assets/{p['file']}',import.meta.url).href"+',width:'+str(p['width'])+',height:'+str(p['height'])+'}' for p in pages)+']},')
 print(key,'preserved',len(pages),'vector pages',flush=True)
lines.append('};')
pdf=fitz.open(documents['B001']);front,back=pdf[0],pdf[1]
cutlines=[]
for d in back.get_drawings():
 r=d['rect']
 if d['type']=='s' and 150<r.width<155 and abs(r.width-r.height)<.1:cutlines.append(r)
cutlines.sort(key=lambda r:(round(r.y0/20),r.x0));assert len(cutlines)==80
front_images=[]
for image in front.get_image_info():
 r=fitz.Rect(image['bbox'])
 if 155<r.width<177 and 155<r.height<177:front_images.append(r)
config=json.loads((root/'scripts/badge-catalog-config.json').read_text());types={t['id']:t for t in config['types']};duplicates={int(k):v for k,v in config['duplicates'].items()};pt=72/25.4;print_size=config['printDiameterMM']*pt;bleed=config['bleedPerSideMM']*pt
badges=[];positions=[]
for i,r in enumerate(cutlines):
 row,col=divmod(i,10);expected=fitz.Point((r.x0+r.x1)/2,(r.y0+r.y1)/2+6)
 # Locate the frame center, then use a 60mm print circle and remove exactly
 # 3mm per edge. Do not derive the finished surface from a bitmap's bleed bounds.
 candidates=[v for v in front_images if abs((v.x0+v.x1)/2-expected.x)<12 and abs((v.y0+v.y1)/2-expected.y)<12]
 assert candidates,(row,col)
 f=min(candidates,key=lambda v:abs((v.x0+v.x1)/2-expected.x)+abs((v.y0+v.y1)/2-expected.y))
 cx=(f.x0+f.x1)/2;cy=(f.y0+f.y1)/2;print_box=fitz.Rect(cx-print_size/2,cy-print_size/2,cx+print_size/2,cy+print_size/2);clip=fitz.Rect(print_box.x0+bleed,print_box.y0+bleed,print_box.x1-bleed,print_box.y1-bleed);size=clip.width
 pix=front.get_pixmap(matrix=fitz.Matrix(384/size,384/size),clip=clip,alpha=False);im=Image.open(BytesIO(pix.tobytes('png')));im=im.resize((384,384),Image.Resampling.LANCZOS);name=f'badge-{i+1:02}.webp';im.save(out/name,'WEBP',quality=94,method=6)
 br=fitz.Rect(r)  # Reverse PDF already contains the 54mm finished cut circle.
 typ='gold' if col>=7 else 'sparkle' if i+1 in config['sparklePositions'] else 'shining'
 badge=dict(id=f'badge-{i+1:02}',sourcePosition=i+1,type=typ,typeLabel=types[typ]['label'],typeDescription=types[typ]['description'],row=row+1,column=col+1,frontPrint=list(print_box),bleedMM=config['bleedPerSideMM'],finishedDiameterMM=config['finishedDiameterMM'],front=list(clip),back=list(br),thumbnail=name)
 if i+1 in duplicates:badge['duplicateOf']=f'badge-{duplicates[i+1]:02}'
 positions.append(badge)
 if i+1 not in duplicates:badges.append(badge)
badges.sort(key=lambda b:([t['id'] for t in config['types']].index(b['type']),b['sourcePosition']))
for typ in types:
 group=[b for b in badges if b['type']==typ];assert len(group)==24,(typ,len(group))
 for ordinal,b in enumerate(group,1):b.update(typeIndex=ordinal,label=f"{types[typ]['label']} {ordinal:02}")
(root/'docs/badge-vector-source-map.json').write_text(json.dumps(dict(documents=manifest,types=config['types'],badges=badges,printPositions=positions,duplicateMapping=config['duplicates'],trim=dict(printDiameterMM=60,finishedDiameterMM=54,bleedPerSideMM=3),notes=[config['deduplicationBasis'],'Back cutline coordinates already describe the finished 54mm face; do not trim an additional 3mm.','Only the 3D reverse removes the magenta cutline strokes; original vector reference is unchanged.']),ensure_ascii=False,indent=2))
lines.append('export const badgeRepresentativeIds = '+json.dumps([f'badge-{i:02}' for i in config['representativePositions']])+';')
lines.append('export const badgeTypes = '+json.dumps(config['types'],ensure_ascii=False)+';')
lines.append('export const badgeDesigns = [')
for b in badges:
 meta={k:v for k,v in b.items() if k!='thumbnail'};lines.append(json.dumps(meta,ensure_ascii=False)[:-1]+',thumbnail:'+f"new URL('./vector-assets/{b['thumbnail']}',import.meta.url).href"+'},')
lines.append('];');(root/'src/vector-data.js').write_text('\n'.join(lines))
print('Prepared 72 unique badges in 3 types, 8 duplicate positions mapped, and',sum(len(d['pages']) for d in manifest.values()),'vector pages;',sum(p.stat().st_size for p in out.glob('*'))//1024,'KiB',flush=True)
