"""Pre-render finished badge faces for quick 3D opening; retain vector zoom sources."""
from pathlib import Path
from io import BytesIO
import fitz,json,re
from PIL import Image
root=Path(__file__).resolve().parents[1];out=root/'src/badge-textures';out.mkdir(parents=True,exist_ok=True)
audit=json.loads((root/'docs/badge-vector-source-map.json').read_text());doc=fitz.open('/workspace/teenieping-materials/originals/260417_티니핑3종딱지(최종칼선).pdf');front,back=doc[0],doc[1]
# Remove only the 80 magenta cut-circle paint blocks in this in-memory copy.
stream=back.read_contents().decode('latin1');pattern=r'q 1 0 0 1 [-\d.]+ [-\d.]+ cm\s+0 0 m\s+0 -42\.191[^qQ]*?-152\.788[^qQ]*?h\s+S\s+Q'
stream,n=re.subn(pattern,'',stream);assert n==80,n
xref=doc.get_new_xref();doc.update_object(xref,'<<>>');doc.update_stream(xref,stream.encode('latin1'));back.set_contents(xref)
def render(page,rectangle,size,name):
 r=fitz.Rect(rectangle);pix=page.get_pixmap(matrix=fitz.Matrix(size/r.width,size/r.height),clip=r,alpha=False)
 im=Image.open(BytesIO(pix.tobytes('png'))).resize((size,size),Image.Resampling.LANCZOS)
 im.save(out/name,'WEBP',quality=96 if size==1024 else 99,method=4)
 return name
shared=audit['printPositions'][0]['back'];backs={str(size):render(back,shared,size,f'common-back-{size}.webp') for size in [1024,2048]}
entries=[]
for i,b in enumerate(audit['badges']):
 files={str(size):render(front,b['front'],size,f"{b['id']}-front-{size}.webp") for size in [1024,2048]};entries.append((b['id'],files))
 if (i+1)%12==0:print('Prepared',i+1,'of',len(audit['badges']),'fronts',flush=True)
def url(name):return f"new URL('./badge-textures/{name}',import.meta.url).href"
lines=['// Finished 54mm faces rendered from original PDF; original SVG remains for larger zoom.','export const badgeTextureSources = {']
for bid,files in entries:lines.append(json.dumps(bid)+':{'+','.join(json.dumps(size)+':'+url(name) for size,name in files.items())+'},')
lines+=['};','export const commonBadgeBack = {'+','.join(json.dumps(size)+':'+url(name) for size,name in backs.items())+',rectangle:'+json.dumps(shared)+'};']
(root/'src/badge-texture-data.js').write_text('\n'.join(lines));print('Texture files:',len(entries)*2+2,'total KiB:',sum(p.stat().st_size for p in out.iterdir())//1024,flush=True)
