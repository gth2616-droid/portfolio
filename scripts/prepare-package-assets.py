"""Decompose supplied dielines into connected paper faces; preserve original artwork."""
from pathlib import Path
from PIL import Image,ImageDraw
import json,shutil
root=Path(__file__).resolve().parents[1];sources=Path('/workspace/teenieping-materials/extracted/지기구조');output=root/'src/package-assets'
variants=[]
# Rectangles in the original PNG coordinate system. Polygons are panel-local.
single=json.loads((root/'src/fold-assets/source-map.json').read_text())['coordinates']
configs=[
 ('single-pink','single','하츄핑',[120,140,40],'#efa0c3','싱글팩-01.png','single'),
 ('single-lavender','single','다이아나핑',[120,140,40],'#b6a1ca','싱글팩-02.png','single'),
 ('single-purple','single','이클립스핑',[120,140,40],'#755695','싱글팩-03.png','single'),
 ('full-box','full','풀박스',[127,146,125],'#c9b9d8','풀박스.png','full'),
 ('limited-blue','limited','다이아나핑',[209,146,125],'#9fcde1','리미티드에디션-01.png','limited'),
 ('limited-purple','limited','이클립스핑',[209,146,125],'#aa9ccf','리미티드에디션-02.png','limited')]
for key,group,name,dims,stock,filename,shape in configs:
 im=Image.open(sources/filename).convert('RGBA');dest=output/key;dest.mkdir(parents=True,exist_ok=True)
 if shape=='single':
  sx=im.width/1404;sy=im.height/993;parts={}
  for pid,(box,poly) in single.items():parts[pid]=([round(box[0]*sx),round(box[1]*sy),round(box[2]*sx),round(box[3]*sy)],[(round(x*sx),round(y*sy)) for x,y in poly] if poly else None)
  main=[(0,0),(339,0),(266,73),(223,56),(168,56),(168,68),(136,68),(111,94),(13,94)]
  tab=[(339,0),(326,12),(335,34),(329,94),(266,73)]
  mainpct=[[x/339*100,y/94*100] for x,y in main];tabpct=[[x/339*100,y/94*100] for x,y in tab]
  diag=[73/339,73/94]
 elif shape=='full':
  parts={'front':([944,465,1304,879],None),'left':([590,465,944,879],None),'back':([231,465,590,879],None),'right':([1304,465,1657,879],None),'glue':([182,465,231,879],[(49,0),(0,13),(0,350),(9,380),(49,414)]),'lid':([944,112,1304,465],None),'lid-tuck':([944,60,1304,112],[(0,52),(0,32),(7,13),(25,0),(332,0),(350,12),(360,32),(360,52)]),'dust-left-top':([590,295,944,465],[(0,170),(0,151),(12,137),(40,10),(49,0),(339,0),(354,170)]),'dust-right-top':([1304,295,1657,465],[(0,170),(16,0),(302,0),(313,10),(341,137),(353,151),(353,170)]),'bottom-front':([944,879,1304,1106],[(0,0),(360,0),(346,34),(350,207),(337,227),(231,227),(180,178),(180,189),(130,227),(44,227),(28,216)]),'bottom-back':([231,879,590,1106],[(0,0),(359,0),(345,34),(349,207),(336,227),(231,227),(178,178),(178,189),(130,227),(44,227),(28,216)]),'dust-left-bottom':([590,879,944,1058],[(0,0),(354,0),(175,179),(84,179)]),'dust-right-bottom':([1304,879,1657,1058],[(0,0),(353,0),(174,179),(83,179)])}
  mainpct=[[0,0],[100,0],[50,78.4],[50,83.3],[36.1,100],[12.2,100],[7.8,95.2]];tabpct=[[100,0],[96.1,15],[97.2,91.2],[93.6,100],[64.2,100],[50,78.4]];diag=[.5,.784]
 else:
  parts={'front':([1037,428,1629,841],None),'left':([682,428,1037,841],None),'back':([90,428,682,841],None),'right':([1629,428,1982,841],None),'glue':([41,428,90,841],[(49,0),(0,13),(0,350),(9,380),(49,413)]),'lid':([1037,74,1629,428],None),'lid-tuck':([1037,22,1629,74],[(0,52),(0,32),(8,12),(30,0),(562,0),(582,12),(592,32),(592,52)]),'dust-left-top':([682,225,1037,428],[(0,203),(0,184),(12,172),(48,10),(59,0),(337,0),(355,203)]),'dust-right-top':([1629,225,1982,428],[(0,203),(17,0),(295,0),(308,10),(341,172),(353,184),(353,203)]),'bottom-front':([1037,841,1629,1068],[(0,0),(592,0),(581,17),(589,36),(582,213),(573,227),(464,227),(414,178),(295,178),(295,189),(247,227),(28,227),(13,216)]),'bottom-back':([90,841,682,1068],[(0,0),(592,0),(581,17),(589,36),(582,213),(573,227),(464,227),(414,178),(295,178),(295,189),(247,227),(28,227),(13,216)]),'dust-left-bottom':([682,841,1037,1019],[(0,0),(355,0),(177,178),(84,178)]),'dust-right-bottom':([1629,841,1982,1019],[(0,0),(353,0),(175,178),(83,178)])}
  mainpct=[[0,0],[100,0],[69.93,78.41],[49.83,78.41],[49.83,83.26],[41.72,100],[4.73,100],[2.2,95.2]];tabpct=[[100,0],[98.14,7.5],[99.49,15.86],[98.31,93.83],[96.79,100],[78.38,100],[69.93,78.41]];diag=[.3007,.7841]
 for pid,(box,poly) in parts.items():
  crop=im.crop(box)
  if poly:
   mask=Image.new('L',crop.size);ImageDraw.Draw(mask).polygon(poly,fill=255);crop.putalpha(mask)
  crop.save(dest/(pid+'.png'))
 front=parts['front'][0];factor=dims[1]/(front[3]-front[1]);length=lambda pid,axis:(parts[pid][0][axis+2]-parts[pid][0][axis])*factor
 variants.append({'id':key,'group':group,'label':name,'dimensions':dims,'stock':stock,'shape':shape,'heights':{'tuck':length('lid-tuck',1),'dustTop':length('dust-left-top',1),'bottom':length('bottom-front',1),'dustBottom':length('dust-left-bottom',1),'glue':length('glue',0)},'bottomMain':mainpct,'bottomTab':tabpct,'diagonal':diag,'source':filename,'parts':parts})
(output/'source-maps.json').write_text(json.dumps(variants,ensure_ascii=False,indent=2))
lines=['// Source-derived panel textures and product dimensions.','export const packageVariants = [']
for v in variants:
 meta={k:value for k,value in v.items() if k!='parts'};line=json.dumps(meta,ensure_ascii=False)[:-1]+', "textures": {'
 line+=','.join(json.dumps(pid)+f":new URL('./package-assets/{v['id']}/{pid}.png',import.meta.url).href" for pid in v['parts'])+'}},';lines.append(line)
lines.append('];');(root/'src/package-data.js').write_text('\n'.join(lines))
print('Prepared',len(variants),'variants,',sum(len(v['parts']) for v in variants),'panel textures')
