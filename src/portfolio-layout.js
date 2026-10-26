export function renderHeader(){return `<header class="header"><a class="site-name" href="#cover">전유빈<span>PRODUCT & PACKAGE DESIGNER</span></a><button class="menu-toggle" aria-expanded="false" aria-controls="main-nav">메뉴 열기</button><nav id="main-nav" aria-label="섹션 이동"><a href="#overview">프로젝트</a><a href="#badges">배지 디자인</a><a href="#single">패키지</a><a href="#experience">홍보·컨셉</a><a href="#digital">디지털 콘텐츠</a><a href="#archive">작업 자료</a></nav></header>`;}
export function renderOpening(asset,photo){return `
<section class="section cover" id="cover">
 <div class="cover-copy">
  <p class="eyebrow">SELECTED WORK — 01</p>
  <p class="project-license">SAMG Entertainment 공식 라이선스 제품</p>
  <h1>티니핑<br/>미스터리 뱃지</h1>
  <p class="project-english">Teenieping Mystery Badge</p>
  <p class="cover-subtitle">패키지·배지 디자인부터 케이스 컨택,<br/> OEM 제작 소통까지 전담했습니다.</p>
  <div class="cover-credit"><span>DESIGNED BY</span><p>전유빈 <small>사내 유일 디자이너</small></p></div>
  <div class="cover-actions"><a class="project-link" href="#overview">프로젝트 살펴보기 <span aria-hidden="true">↓</span></a><a class="quiet-link" href="#single">전개도 · 3D 목업 ↗</a></div>
 </div>
 <div class="cover-visual">${photo('A002',{caption:false,eager:true})}<div class="cover-caption"><span>제품·패키지 전체 라인업</span><span>PACKAGE DESIGN / VISUAL DIRECTION</span></div></div>
</section>
<section class="section project-overview" id="overview">
 <div class="overview-intro"><p class="eyebrow">01 — PROJECT & MY ROLE</p><h2>디자인부터 제작 소통까지,<br/>한 사람이 연결한 작업.</h2><p>랜덤 배지를 수집하고, 자석으로 놀고,<br class="desktop-break"/> 크리스탈 케이스에 보관·전시하는 완구입니다.</p><p class="planning-credit">대표와 실장이 입사 전에 기획한 제품으로,<br/>신입 입사 후 수습기간을 마치고 제작에 참여했습니다.</p></div>
 <div class="role-list"><article><span>01</span><div><h3>패키지·배지 디자인 전담</h3><p>전체 패키지 그래픽과 제품에 들어가는 배지 디자인.</p></div></article><article><span>02</span><div><h3>케이스 공급처 컨택</h3><p>구성품 케이스의 공급처 컨택과 제품 구성 실무.</p></div></article><article><span>03</span><div><h3>OEM 제작사 소통</h3><p>디자인을 인쇄·생산으로 연결하는 제작 커뮤니케이션.</p></div></article><article><span>04</span><div><h3>제품 비주얼·판매 콘텐츠</h3><p>상세페이지, SNS, 프로모션과 AI 연출 이미지 제작.</p></div></article></div>
 <div class="project-facts"><div><span>PACKAGE TYPES</span><p><strong>6</strong>개 유형</p></div><div><span>PACKAGE DESIGNS</span><p><strong>15</strong>개 디자인</p></div><div><span>BADGE COLLECTION</span><p><strong>72</strong>종 라인업</p></div><div class="ip-credit"><span>PROJECT CREDIT</span><p>선행 기획 · 대표·실장<br/>디자인·제작 소통 · 전유빈<br/>원작 IP · SAMG Entertainment</p></div></div>
</section>`;}
