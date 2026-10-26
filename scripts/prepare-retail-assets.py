"""Extract additional packaging artwork; retain supplied originals and record provenance."""
from pathlib import Path
from PIL import Image,ImageDraw
import json
root=Path(__file__).resolve().parents[1];src=Path('/workspace/teenieping-materials/extracted/지기구조');out=root/'src/package-assets';variants=[]
colors=['#efa0c3','#b6a1ca','#755695'];characters=['하츄핑','다이아나핑','이클립스핑'];types=['골드','샤이닝','스파클']
for i in range(3):
 for group in ['daiso','display','pouch']:
  key=f'{group}-{i+1}';dest=out/key;dest.mkdir(parents=True,exist_ok=True)
  v=dict(id=key,group=group,label=types[i] if group=='daiso' else characters[i],stock=colors[i])
  if group=='daiso':
   filename=f'다이소딱지-0{i+1}.png';im=Image.open(src/filename).convert('RGBA')
   # A supplied front artwork, not a carton dieline. No reverse artwork is invented.
   parts={'front':([0,0,585,im.height],None)}
   v.update(shape='retail-card',dimensions=[200,200*im.height/585,4],dimensionNote='추정 약 200 × 245 × 4 mm · 배지 지름과 원본 비율 기준 · 후면 무지',title='다이소 딱지',hole=[292/585,29/im.height,15/585],sealLines=[131/im.height])
  elif group=='pouch':
   filename=f'딱지파우치-0{i+1}.png';im=Image.open(src/filename).convert('RGBA')
   parts={'front':([12,128,353,498],None),'back':([423,128,764,498],None)}
   v.update(shape='pouch',dimensions=[120,130,12],dimensionNote='120 × 130 mm · 상하 실링 15 mm · 내용물 두께 약 12 mm 추정',title='딱지 파우치',hole=[.5,21/370,7/341],sealLines=[43/370,326/370])
  else:
   filename=f'딱지파우치_디스플레이박스-0{i+1}.png';im=Image.open(src/filename).convert('RGBA')
   parts={'front':([1331,542,2023,947],None),'left':([979,542,1331,947],None),'back':([288,542,979,947],None),'right':([2023,542,2373,947],None),'glue':([245,542,288,947],[(43,0),(0,13),(0,365),(43,405)]),'lid':([1331,190,2023,542],None),'lid-tuck':([1331,119,2023,190],[(0,71),(0,55),(5,25),(23,5),(55,0),(637,0),(669,5),(687,25),(692,55),(692,71)]),'dust-left-top':([979,330,1331,542],[(0,212),(5,196),(55,0),(333,0),(343,200),(352,212)]),'dust-right-top':([2023,330,2373,542],[(0,212),(10,0),(288,0),(342,196),(350,212)]),'bottom-front':([1331,947,2023,1154],[(0,0),(692,0),(679,15),(679,207),(546,207),(516,176),(346,176),(346,185),(324,207),(36,207)]),'bottom-back':([288,947,979,1154],[(0,0),(691,0),(679,15),(679,207),(546,207),(516,176),(346,176),(346,185),(324,207),(36,207)]),'dust-left-bottom':([979,947,1331,1123],[(0,0),(352,0),(176,176),(66,176)]),'dust-right-bottom':([2023,947,2373,1123],[(0,0),(350,0),(174,176),(66,176)])}
   factor=250/692
   v.update(shape='display',dimensions=[250,405*factor,352*factor],dimensionNote='추정 약 250 × 146 × 127 mm · 파우치 20개 수납과 전개도 비율 기준',title='딱지 파우치 디스플레이 박스',heights=dict(tuck=71*factor,dustTop=212*factor,bottom=207*factor,dustBottom=176*factor,glue=43*factor),bottomMain=[[0,0],[100,0],[516/692*100,176/207*100],[50,176/207*100],[50,185/207*100],[324/692*100,100],[36/692*100,100]],bottomTab=[[100,0],[679/692*100,15/207*100],[679/692*100,100],[546/692*100,100],[516/692*100,176/207*100]],diagonal=[176/692,176/207],tearHeight=257/405)
  for pid,(box,poly) in parts.items():
   crop=im.crop(box)
   if poly:
    mask=Image.new('L',crop.size);ImageDraw.Draw(mask).polygon(poly,fill=255);crop.putalpha(mask)
   crop.save(dest/(pid+'.png'))
  v.update(source=filename,parts=parts);variants.append(v)
(out/'retail-source-maps.json').write_text(json.dumps(variants,ensure_ascii=False,indent=2))
lines=['// Extracted from supplied retail packaging artwork. See retail-source-maps.json.','export const retailVariants = [']
for v in variants:
 meta={k:value for k,value in v.items() if k!='parts'}
 lines.append(json.dumps(meta,ensure_ascii=False)[:-1]+', "textures": {'+','.join(json.dumps(pid)+f":new URL('./package-assets/{v['id']}/{pid}.png',import.meta.url).href" for pid in v['parts'])+'}},')
lines.append('];');(root/'src/retail-data.js').write_text('\n'.join(lines));print('Prepared',len(variants),'additional designs')

# Reapply the latest PDF after legacy source-image preparation.
if (root/'src/content-assets/다이소딱지.pdf').exists():
 import subprocess,sys
 subprocess.run([sys.executable,str(root/'scripts/prepare-daiso-pdf.py')],check=True)
