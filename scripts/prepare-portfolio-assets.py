"""Create optimized presentation copies and a complete source-to-section ledger."""
from pathlib import Path
from PIL import Image,ImageOps,ImageCms
import io
import json
root=Path(__file__).resolve().parents[1];materials=Path('/workspace/teenieping-materials');sources=materials/'extracted';out=root/'src/content-assets';out.mkdir(parents=True,exist_ok=True)
rows=json.loads((materials/'reports/inventory.json').read_text());assets=[]
sections={'01_로고_브랜드가이드':'brand','02_캐릭터_카피라이트':'brand','04_패키지_지기구조':'packaging','05_제품사진_목업_3D':'product','06_상세페이지':'digital','07_인스타그램_카드뉴스':'digital','08_광고_홍보':'promotion','10_프로젝트설명_크레딧':'production','11_출처확인_보류':'usage'}
titles={
'A001':'카피라이트 가이드','A002':'전체 제품 라인업','A003':'프린세스 캐치! 티니핑 로고','A004':'로고·카피라이트 가이드 6페이지',
'A005':'리미티드 2종 라인업','A006':'이클립스핑 리미티드','A007':'다이아나핑 리미티드','A008':'리미티드 구성','A009':'리미티드 대표 비주얼',
'A010':'다이아나핑 싱글팩','A011':'이클립스핑 싱글팩','A012':'다이아나핑 패키지 다른 각도','A013':'이클립스핑 패키지 다른 각도','A014':'하츄핑 패키지 다른 각도','A015':'하츄핑 싱글팩','A016':'싱글팩 3종 구성','A017':'싱글팩 3종 라인업','A018':'이클립스핑 제품 이미지','A019':'하츄핑 제품 이미지','A020':'다이아나핑 제품 이미지','A021':'싱글팩 대표 비주얼','A022':'다이아나핑 팩·케이스·배지','A023':'이클립스핑 팩·케이스·배지','A024':'하츄핑 팩·케이스·배지',
'A025':'후기 콘셉트 카드 01','A026':'후기 콘셉트 카드 02','A027':'후기 콘셉트 카드 03','A028':'후기 콘셉트 카드 04','A029':'상품 상세페이지 전체','A030':'AI 제품 연출 비주얼','A031':'출시 이벤트 표지','A032':'3가지 배지 타입 안내','A033':'3가지 케이스 안내','A034':'이벤트 참여 안내','A035':'제품 활용 소개 카드','A036':'다이어리 꾸미기 카드','A037':'싱글팩 소개 카드','A038':'제품 홍보 포스터',
'A039':'다이소 골드 타입','A040':'다이소 샤이닝 타입','A041':'다이소 스파클 타입','A042':'하츄핑 파우치 앞뒤','A043':'다이아나핑 파우치 앞뒤','A044':'이클립스핑 파우치 앞뒤','A045':'하츄핑 디스플레이 전개도','A046':'다이아나핑 디스플레이 전개도','A047':'이클립스핑 디스플레이 전개도','A048':'리미티드 1+1 이벤트','A049':'다이아나핑 리미티드 전개도','A050':'이클립스핑 리미티드 전개도','A051':'하츄핑 싱글팩 전개도','A052':'다이아나핑 싱글팩 전개도','A053':'이클립스핑 싱글팩 전개도','A054':'물류용 카톤박스 인쇄 그래픽','A055':'크리스탈 케이스 보호 파우치','A056':'풀박스 전개도',
'A057':'블루 케이스 · 보관 연출','A058':'다이아나핑 · 제품 구성 연출','A059':'핑크 케이스 · 침실 연출','A060':'블루 케이스 · 생활 공간 연출','A061':'핑크 케이스 · 선반 전시','A062':'자석 배지 · 보드 활용','A063':'핑크 케이스 · 전시 연출','A064':'퍼플 케이스 · 배지 넣기','A065':'블루 케이스 · 배지 넣기','A066':'다이아나핑 · 탁상 구성','A067':'퍼플 케이스 · 사용 연출','A068':'핑크 케이스 · 탁상 구성','A069':'핑크 케이스 · 보관 연출 01','A070':'핑크 케이스 · 보관 연출 02','A071':'아이 놀이 콘셉트 01','A072':'아이 놀이 콘셉트 02','A073':'아이 놀이 콘셉트 03','A074':'아이 놀이 콘셉트 04','A075':'아이 놀이 콘셉트 05','A076':'이클립스핑 · 후기 콘셉트','A077':'다이아나핑 · 후기 콘셉트','A078':'블루 크리스탈 케이스','A079':'핑크 크리스탈 케이스','A080':'퍼플 크리스탈 케이스','A081':'제공 제품 사양','A082':'풀박스 제품 이미지','A083':'풀박스 구성','A084':'풀박스 대표 비주얼'}
def save(im,key,max_size=(1300,1300),quality=82):
 im=ImageOps.exif_transpose(im)
 profile=im.info.get('icc_profile')
 if profile and im.mode in ['RGB','CMYK','LAB']:
  im=ImageCms.profileToProfile(im,ImageCms.ImageCmsProfile(io.BytesIO(profile)),ImageCms.createProfile('sRGB'),renderingIntent=1,outputMode='RGB')
 im.thumbnail(max_size,Image.Resampling.LANCZOS)
 if im.mode not in ['RGB','RGBA']:im=im.convert('RGBA' if 'transparency' in im.info else 'RGB')
 name=key+'.webp';im.save(out/name,'WEBP',quality=quality,method=6);return name,im.size
for row in rows:
 aid=row['id'];group=sections[row['category']];credit='';num=int(aid[1:])
 if 57<=num<=80 or 25<=num<=28 or aid=='A030':credit='ChatGPT 이미지 생성 · Adobe Photoshop 후보정'
 if 57<=num<=80:group='usage'
 if aid in ['A054','A055','A081']:group='production'
 a=dict(id=aid,title=titles[aid],group=group,source=row['path'],credit=credit,kind='image',pages=[])
 if row['extension'] in ['.jpg','.png']:
  im=Image.open(sources/row['path']);size=im.size if aid=='A038' else (780,15000) if aid=='A029' else (1300,1300)
  name,wh=save(im,aid,size,96 if aid=='A038' else 86 if aid=='A029' else 82);a.update(file=name,width=wh[0],height=wh[1])
  if aid=='A038':a['previewFile']=save(Image.open(sources/row['path']),aid+'-preview',(1600,1600),94)[0]
  if aid=='A029':a['previewFile']=save(Image.open(sources/row['path']).crop((0,0,1708,2000)),aid+'-preview',(500,650))[0]
 elif aid=='A001':
  a.update(file=save(Image.open(materials/'reports/copyright-ai-preview.png'),aid)[0],kind='document')
 elif aid=='A004':
  a.update(file=save(Image.open(materials/'reports/brand-guide-page-1.png'),aid)[0],kind='document')
  for i in range(1,7):a['pages'].append(save(Image.open(materials/f'reports/brand-guide-page-{i}.png'),f'guide-{i}')[0])
 else:
  a.update(file=None,kind='text',text=(sources/row['path']).read_text())
 assets.append(a)
front=Image.open(materials/'badges/page-1.png');back=Image.open(materials/'badges/page-2.png')
assets.append(dict(id='B001',title='배지 제작 시트 · 앞면과 공통 뒷면',group='badge',source='260417_티니핑3종딱지(최종칼선).pdf',credit='',kind='document',file=save(front,'badge-front',(1600,1600),90)[0],pages=[save(front,'badge-front',(1600,1600),90)[0],save(back,'badge-back',(1600,1600),90)[0]]))
samples=[]
# Representative finished circles, not a fabricated list of 72 unique items.
for i,(x,y) in enumerate([(109,73),(434,73),(652,73),(869,73),(976,73),(1085,73)]):
 name,_=save(front.crop((x-55,y-55,x+55,y+55)),f'badge-sample-{i+1}',(220,220),90);samples.append(name)

# User-provided final thumbnails are preserved as original sRGB JPEG files.
additional=[{'id': 'T001', 'title': '하츄핑 디스플레이 박스 대표 비주얼', 'group': 'product', 'source': 'src/content-assets/파우치거치박스_하츄핑.jpg', 'credit': '', 'kind': 'image', 'width': 1000, 'height': 1000, 'file': '파우치거치박스_하츄핑.jpg', 'pages': []}, {'id': 'T002', 'title': '다이아나핑 디스플레이 박스 대표 비주얼', 'group': 'product', 'source': 'src/content-assets/파우치거치박스_다이아나핑.jpg', 'credit': '', 'kind': 'image', 'width': 1000, 'height': 1000, 'file': '파우치거치박스_다이아나핑.jpg', 'pages': []}, {'id': 'T003', 'title': '이클립스핑 디스플레이 박스 대표 비주얼', 'group': 'product', 'source': 'src/content-assets/파우치거치박스_이클립스핑.jpg', 'credit': '', 'kind': 'image', 'width': 1000, 'height': 1000, 'file': '파우치거치박스_이클립스핑.jpg', 'pages': []}, {'id': 'T004', 'title': '딱지 파우치 3종 대표 비주얼', 'group': 'product', 'source': 'src/content-assets/레이어 0.jpg', 'credit': '', 'kind': 'image', 'width': 1000, 'height': 1000, 'file': '레이어 0.jpg', 'pages': []}]
assets.extend(additional)
coverage={'source_files':len(rows)+1+len(additional),'archive_items':len(assets),'all_source_ids':[a['id'] for a in assets],'mapping':[{k:a[k] for k in ['id','source','group','kind','title']} for a in assets]}
(root/'docs/portfolio-asset-coverage.json').write_text(json.dumps(coverage,ensure_ascii=False,indent=2))
def url(name):return "new URL('./content-assets/"+name+"',import.meta.url).href"
lines=['// Optimized presentation copies. Full provenance: docs/portfolio-asset-coverage.json.','export const contentAssets = [']
for a in assets:
 b={k:v for k,v in a.items() if k not in ['file','pages','previewFile']};s=json.dumps(b,ensure_ascii=False)[:-1]
 s+=', "src":'+(url(a['file']) if a['file'] else 'null')+', "pages":['+','.join(url(n) for n in a['pages'])+']'
 if a.get('previewFile'):s+=', "preview":'+url(a['previewFile'])
 lines.append(s+'},')
lines+= ['];','export const badgeSamples = ['+','.join(url(n) for n in samples)+'];']
(root/'src/content-data.js').write_text('\n'.join(lines));print('Prepared',len(assets),'source entries;',sum(p.stat().st_size for p in out.glob('*.webp'))//1024,'KiB optimized artwork')
