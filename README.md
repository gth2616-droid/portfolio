# Teenieping — 전유빈 포트폴리오 초안

제공 작업물로 구성한 반응형 포트폴리오입니다. 본문은 무채색 편집 구조를 유지하고, 실제 제품·패키지·디지털 작업물을 컬러로 배치했습니다. 사용자 요청에 따라 다운로드 후 Chrome에서 실행할 수 있는 독립 HTML을 제공합니다.

## 구성과 역할 표기

표지 → 제품 소개와 담당 범위 → 배지 제작 시트 → 싱글팩 → 풀박스 → 리미티드 → 다이소 딱지 → 파우치 디스플레이 박스 → 딱지 파우치 → 케이스·활용 → AI 이미지 연출 → 상세페이지·SNS·프로모션 → 제작·브랜드 적용 → 담당 범위 요약 → 전체 작업 자료.

입사 전 대표·실장의 선행 기획, SAMG Entertainment 원작 IP, 전유빈의 패키지·배지 디자인과 케이스 컨택·OEM 소통 전담을 구분했습니다. 후기·사용 장면은 사용자 설명에 따라 ChatGPT 생성 후 Photoshop 후보정한 AI 연출 이미지로 표기합니다. 실제 고객 후기나 성과 수치로 제시하지 않습니다.

## 실행과 다운로드본 생성

Node.js 20.19+ 또는 22.12+가 필요합니다. 검증 환경은 Node.js 24입니다.

```sh
cd /workspace/portfolio
npm ci
npm run dev -- --port 8000 --strictPort
```

```sh
npm run build
node scripts/export-preview.mjs
```

최종 다운로드본은 `.validation/teenieping-portfolio-draft.html`입니다. 이미지와 Three.js를 포함한 약 28MiB의 단일 HTML이며, 네트워크 연결 없이 실행됩니다. 로컬 서버 응답이 곧 사용자에게 노출된 앱 미리보기를 뜻하지는 않습니다. `.validation`의 이전 단계 산출물은 비교용입니다.

## 인터랙션

- 6개 유형, 15종 패키지의 평면/입체 전환. 디자인 버튼 전환 시 회전·전환 단계·확대 배율 유지
- 약 2초 접힘, 드래그·방향키 회전, 휠 확대/축소, 정면·뒷면·측면·바닥과 초기 시점
- 디스플레이 박스 상단 분리 진열형 전환
- 배지 PDF 앞면/공통 뒷면 전환
- 상세페이지 휴대폰 내부 스크롤과 원본 확대
- 11개 SNS 카드의 제품·활용 / 출시 이벤트 / 후기 콘셉트 묶음 전환
- 이미지·가이드·제품 사양 모달, 키보드 닫기 및 이전/다음
- ZIP의 84개 파일 + 별도 배지 제작 PDF, 총 85개 자료의 분류·검색 아카이브

대표 작업은 본문에, 추가 구도·버전은 펼침 영역과 자료 모음에 배치합니다. 72종 표기는 제품 자료 기준이며, 제작 PDF의 반복 배치 수를 고유 디자인 수로 계산하지 않았습니다.

## 주요 파일

- `src/main.js`, `src/style.css`: 콘텐츠와 레이아웃, 디자인 선택·SNS·배지·모달·아카이브
- `src/package-viewer.js`: 상자 전개도와 접힘·회전, 내부 날개 간격 및 진열형
- `src/retail-viewer.js`: 얇은 다이소 팩·앞뒤 인쇄 실링 파우치
- `src/print-material.js`: 공유 텍스처 로더, 면 경계의 빨간 칼선 제거 재질
- `src/package-data.js`, `src/retail-data.js`: 15종 패키지 구성
- `src/content-data.js`, `src/content-assets/`: 최적화한 웹용 작업물
- `scripts/prepare-package-assets.py`, `scripts/prepare-retail-assets.py`: 제공 전개도에서 면별 텍스처 재생성
- `scripts/prepare-portfolio-assets.py`: 85개 자료의 웹용 사본, 출처 대장과 콘텐츠 데이터 재생성
- `docs/portfolio-asset-coverage.json`: 전체 원본 ID·파일·분류·사용 대응
- `docs/패키지_치수대장.md`: 제공 사양·인수인계 규격·추정 치수 및 수납 가정

## 원본과 규격

원본 ZIP·PDF·PNG는 `/workspace/teenieping-materials`에 보존합니다. 이미지 최적화본과 배지 대표 샘플은 웹 표시용 사본이며, 원본 디자인을 덮어쓰지 않습니다. 상세페이지는 전체 흐름을 보존한 긴 이미지로 표시합니다. 로고는 원본 비율·색상을 유지합니다.

싱글팩 120×140×40mm와 파우치 120×130mm·상하 실링15mm는 제공 사양입니다. 풀박스·리미티드는 인수인계 기록을 유지했습니다. 다이소 약200×245×4mm, 파우치 디스플레이 약250×146×127mm와 파우치 두께 약12mm는 사용자 요청에 따라 잡은 목업용 추정치입니다. 다이소 후면은 제공 자료가 없어 무지로 표시합니다. 3D 목업은 생산용 종이 두께·공차·발주 규격의 정밀 검증을 뜻하지 않습니다.

## 검증

`npm run build`와 다운로드할 독립 HTML에서 다음을 확인했습니다.

- 원본 85개 자료 대응, 표시 이미지 전체 디코딩, 빈 이미지 자리 제거
- 기존·추가 패키지 15종 선택과 평면/입체·회전·휠 확대 및 진열형 동작
- 상세페이지 전체 스크롤, SNS 11개 카드 전환, 배지 앞뒤 전환
- 가이드 6페이지·원본 사양 모달, Escape 닫기·포커스 복귀
- 자료 분류·검색·검색 결과 없음 상태
- 320·375·768·1024·1440px 페이지 가로 넘침과 모바일 메뉴
- 브라우저 오류 및 외부 네트워크 요청 없음

검토용 스크린샷과 실행 결과는 `.validation/portfolio-draft-results.json` 및 `.validation/draft-*.png`에 저장합니다.

## PDF 벡터 확대와 개별 배지 3D

현재 다운로드본은 `.validation/teenieping-vector-badges.html`(약 99MB)입니다. 원본 PDF의 벡터와 포함 이미지를 함께 넣어 이전 초안보다 파일이 커졌습니다. 별도 네트워크 연결이나 파일 폴더 없이 단독 실행합니다.

- `scripts/prepare-vector-assets.py`: 배지 제작 PDF 2페이지, 브랜드 가이드 6페이지, PDF 호환 카피라이트 자료 1페이지의 그리기 명령을 SVG로 보존하고 gzip으로 포장합니다. 고정 크기의 페이지 스크린샷을 확대하지 않습니다.
- SVG 내의 CMYK 이미지가 브라우저에서 검게 표시되는 문제는 원본 PDF 이미지 객체를 식별해 MuPDF의 RGB 변환을 적용한 뒤 원래 픽셀 치수의 lossless WebP로 기록해 해결합니다. 벡터 경로는 변경하지 않습니다. PDF 자체에 포함된 비트맵의 원래 해상도 한계까지 없애는 것은 아닙니다.
- `src/vector-source.js`: SVG 원본을 읽고, 선택 배지의 앞뒤 영역을 확대 배율에 맞는 1024/2048/4096px 텍스처로 다시 그립니다. 3D 얼굴에 목록 썸네일을 사용하지 않습니다.
- `src/badge-viewer.js`: 지름 약54mm, 두께2mm의 원형 앞뒤 인쇄면과 어두운 자석층·종이 가장자리를 가진 회전 모델입니다. 앞면/뒷면/옆면·초기 시점, 드래그·방향키 회전과 휠·버튼 확대를 지원합니다.
- `src/vector-data.js`, `src/vector-assets/`: 제작 시트 80개 배치의 앞뒤 매핑, 384px 목록 사본과 원본 벡터 페이지.
- `docs/badge-vector-source-map.json`: 원본 PDF·페이지 치수, 행/열 및 앞뒤 추출 좌표를 기록합니다. 80개 배치에는 반복이 포함되며 80종의 고유 디자인으로 주장하지 않습니다.

PDF 확대 창에서 SVG를 50~400% 크기로 표시합니다. 배지 제작 시트·브랜드 가이드·카피라이트 자료 모두 같은 원본 벡터 확대 방식을 사용합니다. 배지 목록의 각 항목을 누르면 선택 배지의 3D 목업이 열립니다.

`.validation/check-vector-badges.py`로 다운로드할 독립 HTML에서 80개 384px 썸네일 디코딩, 시트 여러 위치의 개별 앞뒤·옆면 모델, 핑크색 공통 뒷면, 확대 시 텍스처 해상도 증가, SVG 2+6+1페이지 225% 확대, PC/모바일 조작, 기존 패키지 접힘과 외부 요청·브라우저 오류 없음을 확인했습니다.

## 대용량 다운로드가 실패할 때

`scripts/export-download-parts.py`는 검증한 독립 HTML을 다시 압축해 24MiB 이하의 바이너리 자료 파일 3개와 약6KB 실행 HTML로 나눕니다. `.validation/portfolio-download/portfolio.html`을 Chrome에서 열고 `portfolio-data-1.bin`부터 `portfolio-data-3.bin`까지 선택합니다. 서버·ZIP 해제·이미지 재압축은 필요 없습니다. 파일명이 브라우저에 의해 바뀌어도 크기와 SHA-256으로 식별하고, 원본 HTML의 전체 SHA-256을 확인한 뒤 실행합니다.

`.validation/check-download-parts.py`로 자료 누락 안내, 역순 파일 선택, 정확한 원본 복원, 85개 자료·80개 배지 위치·6종 패키지와 배지 뒷면 3D를 확인했습니다. 관리형 테스트 Chromium은 `file://` 탐색을 정책상 차단하므로, 테스트는 로컬 문서에서 File API로 자료를 선택하는 경로를 사용했습니다. 실행 HTML 자체는 로컬 파일 fetch를 사용하지 않습니다.

## GitHub에서 웹사이트로 확인하기

GitHub 저장소 `gth2616-droid/portfolio`의 `main`에 소스를, `gh-pages`에 빌드한 웹사이트를 저장합니다. Vite의 상대 경로 설정으로 `/portfolio/` 아래에서도 이미지·3D 텍스처·벡터 자료가 동작합니다.

GitHub에서 최초 한 번 **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: gh-pages / (root) → Save**를 선택합니다. 이후에는 같은 주소에서 확인합니다.

`https://gth2616-droid.github.io/portfolio/`

변경 내용을 커밋한 뒤 다음 명령으로 소스와 웹사이트를 함께 갱신합니다.

```sh
npm run deploy
```

원격 main을 덮어쓰는 강제 push는 하지 않습니다. 원격 변경을 포함하지 않거나 미커밋 변경이 있으면 배포를 중단합니다. `node_modules`, 로컬 검증 결과와 대용량 다운로드 HTML은 올리지 않습니다. 웹에서는 자료를 별도 파일로 필요한 시점에 가져오므로 99MB HTML 다운로드나 자료 파일 선택이 필요 없습니다.
