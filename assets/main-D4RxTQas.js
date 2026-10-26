import"./modulepreload-polyfill-B5Qt9EMX.js";const Co=["A079","A078","A080","A061","A062","A064","A071","A076"],Mc=[...Co,...Array.from({length:24},(i,e)=>"A"+String(e+57).padStart(3,"0")).filter(i=>!Co.includes(i))];function yc(i,e){return`<section class="section concept-section" id="experience">${e("09","홍보·컨셉 이미지.","ChatGPT로 100% 생성하고 Adobe Photoshop으로 후보정한 컨셉 이미지입니다.","PROMOTION & CONCEPT")}<div class="concept-gallery-meta"><span>24 IMAGES</span><span>클릭하여 확대 ↗</span></div><div class="concept-image-grid" id="concept-image-grid">${Mc.map((t,n)=>`<div class="concept-gallery-item" ${n>=Co.length?"data-concept-extra hidden":""}>${i(t,{caption:!1,creditTag:!1})}</div>`).join("")}</div><button class="concept-gallery-toggle" id="concept-gallery-toggle" aria-expanded="false" aria-controls="concept-image-grid">전체 이미지 24개 보기 +</button></section>`}function Sc(){const i=document.querySelector("#concept-gallery-toggle");i.onclick=()=>{const e=i.getAttribute("aria-expanded")!=="true";document.querySelectorAll("[data-concept-extra]").forEach(t=>t.hidden=!e),i.setAttribute("aria-expanded",String(e)),i.textContent=e?"이미지 접기 −":"전체 이미지 24개 보기 +",e||i.scrollIntoView({block:"nearest"})}}const Rc={back:'<path d="m14 5-7 7 7 7"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',bag:'<path d="M5 7h14l1 14H4L5 7Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',comment:'<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8v.5Z"/>',send:'<path d="m22 2-7 20-4-9L2 9l20-7Z"/><path d="M22 2 11 13"/>',bookmark:'<path d="M6 3h12v19l-6-4-6 4V3Z"/>',more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',check:'<path d="m5 12 4 4L19 6"/>',chevron:'<path d="m9 5 7 7-7 7"/>'},un=i=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Rc[i]||""}</svg>`,Cr=i=>i.toLocaleString("ko-KR")+"원",yn={single:{name:"싱글팩",price:5e3,image:"A021",characters:["하츄핑","다이아나핑","이클립스핑"],contents:"랜덤 배지 3개 + 크리스탈 케이스 1개"},full:{name:"풀박스",price:18e3,image:"A084",characters:["싱글팩 3종 세트"],contents:"싱글팩 3개 · 배지 9개 + 케이스 3개"},limited:{name:"리미티드 에디션",price:33e3,image:"A009",characters:["다이아나핑","이클립스핑"],contents:"싱글팩 5개 · 배지 15개 + 케이스 5개"}},Ec=()=>'<div class="phone-status" aria-hidden="true"><span>9:41</span><div><svg viewBox="0 0 18 12" width="18" height="12"><path d="M1 8h3v4H1zm4-2h3v6H5zm4-3h3v9H9zm4-3h3v12h-3z" fill="currentColor"/></svg><svg viewBox="0 0 18 14" width="18" height="14"><path d="M2 5a11 11 0 0 1 14 0M5 8a6 6 0 0 1 8 0M8 11a2 2 0 0 1 2 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><svg viewBox="0 0 29 14" width="27" height="13"><rect x="1" y="1" width="23" height="12" rx="3" fill="none" stroke="currentColor" opacity=".4"/><rect x="3" y="3" width="19" height="8" rx="1.5" fill="currentColor"/><path d="M26 5v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div></div>';function oa(i,e){return`<div class="phone-stage" aria-label="${e}"><div class="device device-iphone-14-pro device-black"><div class="device-frame"><div class="device-screen">${Ec()}${i}<div class="phone-home-indicator" aria-hidden="true"></div></div></div><div class="device-stripe" aria-hidden="true"></div><div class="device-header" aria-hidden="true"></div><div class="device-sensors" aria-hidden="true"></div><div class="device-btns" aria-hidden="true"></div><div class="device-power" aria-hidden="true"></div><div class="device-home" aria-hidden="true"></div></div></div>`}function Ac(i){return`<div class="shop-app"><div class="detail-screen shop-scroll" tabindex="0" role="region" aria-label="상품 판매 페이지, 휴대폰 안에서 세로 스크롤"><header class="shop-header"><span class="shop-brand">TEENIEPING<span>MYSTERY BADGE</span></span><span class="shop-official">공식 라이선스 제품</span><button class="phone-icon-button" data-shop-cart aria-label="장바구니 열기">${un("bag")}<span class="shop-cart-count" hidden>0</span></button></header><div class="shop-product-gallery"><button class="shop-image-button" id="shop-image-open" data-open-asset="A021" aria-label="싱글팩 상품 이미지 크게 보기"><img id="shop-product-image" src="${i("A021").src}" width="1000" height="1000" alt="싱글팩 상품 대표 이미지" loading="lazy"/></button><div class="shop-gallery-options" role="group" aria-label="상품 구성 선택">${Object.entries(yn).map(([e,t],n)=>`<button data-shop-group="${e}" aria-pressed="${n===0}">${t.name}</button>`).join("")}</div></div><div class="shop-product-info"><p class="shop-category">캐릭터 완구 · 수집형 자석 배지</p><h3 id="shop-product-title">프린세스 캐치! 티니핑<br/>미스터리 뱃지 싱글팩</h3><p class="shop-price" id="shop-price">5,000<span>원</span></p><p class="shop-contents" id="shop-contents">${yn.single.contents}</p><dl class="shop-facts"><div><dt>브랜드</dt><dd>프린세스 캐치! 티니핑</dd></div><div><dt>배지 타입</dt><dd>골드 · 스파클 · 샤이닝</dd></div><div><dt>제품 구성</dt><dd>옵션에서 캐릭터와 구성 선택</dd></div></dl><button class="shop-inline-options" data-shop-open="options">캐릭터 · 수량 선택 ${un("chevron")}</button></div><nav class="shop-detail-tabs" aria-label="판매 페이지 정보 이동"><button data-shop-section="shop-detail" aria-pressed="true">상품상세</button><button data-shop-section="shop-composition" aria-pressed="false">구성 안내</button><button data-shop-section="shop-delivery" aria-pressed="false">구매 안내</button></nav><section id="shop-detail" class="shop-detail"><img src="${i("A029").src}" alt="티니핑 미스터리 뱃지 상세페이지 전체" loading="lazy" width="${i("A029").width}" height="${i("A029").height}"/></section><section class="shop-information" id="shop-composition"><h4>상품 구성 안내</h4>${Object.values(yn).map(e=>`<div><strong>${e.name}</strong><p>${e.contents}</p><span>${Cr(e.price)}</span></div>`).join("")}</section><section class="shop-information" id="shop-delivery"><h4>구매 전 확인해주세요</h4><p>배지는 랜덤 구성입니다. 패키지 캐릭터와 배지 구성은 다를 수 있습니다.</p><p>배송·교환·반품 조건은 실제 판매처 안내를 확인해주세요.</p></section><p class="shop-copyright">© SAMG. All rights reserved.</p></div><div class="shop-purchase-bar"><button class="phone-icon-button shop-wish" data-phone-like aria-label="상품 찜하기" aria-pressed="false">${un("heart")}</button><button data-shop-open="cart">장바구니</button><button class="shop-buy" data-shop-open="buy">구매하기</button></div><div class="shop-toast" role="status" aria-live="polite" hidden></div><div class="shop-sheet-layer" hidden><section class="shop-sheet" role="dialog" aria-labelledby="shop-sheet-title"><header><h4 id="shop-sheet-title">상품 옵션 선택</h4><button class="phone-icon-button" data-shop-close aria-label="옵션 선택 닫기">${un("close")}</button></header><label for="shop-pack">상품 구성</label><select id="shop-pack">${Object.entries(yn).map(([e,t])=>`<option value="${e}">${t.name} · ${Cr(t.price)}</option>`).join("")}</select><label for="shop-character">캐릭터</label><select id="shop-character">${yn.single.characters.map(e=>`<option>${e}</option>`).join("")}</select><div class="shop-selection"><div><strong id="shop-selected-name">싱글팩 · 하츄핑</strong><span id="shop-selected-unit">5,000원</span></div><div class="shop-quantity"><button data-shop-quantity="-1" aria-label="수량 줄이기">−</button><output id="shop-quantity" aria-live="polite">1</output><button data-shop-quantity="1" aria-label="수량 늘리기">+</button></div></div><div class="shop-total"><span>총 상품금액</span><strong id="shop-total">5,000원</strong></div><p class="shop-demo-note">포트폴리오 시연 화면 · 실제 주문·결제는 진행되지 않습니다.</p><button class="shop-confirm" id="shop-confirm">선택 완료</button></section></div></div>`}function Tc(i){return`<div class="social-app"><header class="social-app-header"><span>게시물</span><span>TEENIEPING DESIGN</span></header><div class="social-feed" tabindex="0" role="region" aria-label="SNS 게시물 미리보기, 휴대폰 안에서 스크롤"><div class="social-post-author"><div class="social-avatar"><img src="${i("A003").src}" alt=""/></div><div><strong>티니핑 미스터리 뱃지</strong><span>제품 디자인 · 콘텐츠 포트폴리오</span></div><span class="social-more" aria-hidden="true">${un("more")}</span></div><button class="social-image-button" id="social-image-open" data-open-asset="A030" aria-label="현재 인스타 게시물 크게 보기"><img id="social-image" src="${i("A030").src}" alt="제품 연출 인스타그램 게시물" loading="lazy"/></button><div class="social-post-actions"><button class="phone-icon-button" data-phone-like aria-pressed="false" aria-label="게시물 좋아요">${un("heart")}</button><span aria-hidden="true">${un("comment")}</span><span aria-hidden="true">${un("send")}</span><button class="phone-icon-button social-save" data-phone-like aria-pressed="false" aria-label="게시물 저장">${un("bookmark")}</button></div><div class="social-post-caption"><strong id="social-title">제품 연출 인스타그램 게시물</strong><span id="social-credit">ChatGPT 생성 · Photoshop 후보정</span><p>모으고, 붙이고, 간직하는 티니핑 미스터리 뱃지.</p><span class="social-hashtags">#티니핑 #미스터리뱃지 #패키지디자인</span></div></div><div class="social-bottom-label">DESIGN CONTENT / PORTFOLIO</div></div>`}function Lc(i,e,t){return`<section class="section" id="digital">${t("10","판매 화면과<br/>SNS 콘텐츠.","판매 페이지의 상품 선택부터 제품 상세정보, SNS 콘텐츠까지 모바일 화면으로 구성했습니다.","DIGITAL COMMUNICATION")}<article class="digital-row"><div class="digital-copy"><p class="eyebrow">01 / MOBILE COMMERCE</p><h3>상품을 고르고,<br/>자세히 살펴보는 판매 화면.</h3><p>대표 상품 이미지, 구성별 가격, 캐릭터 옵션과 수량 선택을 판매 화면으로 구현했습니다. 아래로 스크롤하면 제작한 상세페이지 전체가 이어집니다.</p><ul class="plain-list"><li>싱글팩 5,000원 · 풀박스 18,000원 · 리미티드 33,000원</li><li>구성·캐릭터·수량 선택과 금액 합산</li><li>상품상세·구성 안내·구매 안내</li></ul><button class="outline-button" data-open-asset="A029">상세페이지 원본 전체 확대 ↗</button><p class="small-note">포트폴리오용으로 재구성한 판매 UI입니다. 실제 주문·결제는 진행되지 않습니다. 상세페이지의 후기·사용 장면은 ChatGPT 생성·Photoshop 후보정 이미지입니다.</p></div><div class="phone-position">${oa(Ac(i),"상품 판매 페이지 휴대폰 목업")}<p class="caption">휴대폰 안에서 스크롤 · 상품 구성과 옵션을 선택해보세요.</p></div></article><article class="digital-row social-row"><div class="digital-copy"><p class="eyebrow">02 / INSTAGRAM</p><h3>인스타그램 게시물.</h3><p>제품 홍보와 활용을 위한 인스타그램 콘텐츠입니다.</p><div class="social-groups" role="group" aria-label="SNS 콘텐츠 묶음"><button data-social-group="intro" aria-pressed="true">제품·활용</button><button data-social-group="event" aria-pressed="false">출시 이벤트</button><button data-social-group="reviews" aria-pressed="false">후기 콘셉트</button></div><p id="social-description" class="small-note">제품 연출 · 싱글팩 소개 · 제품 활용 · 다이어리 꾸미기.</p></div><div class="phone-position">${oa(Tc(i),"SNS 콘텐츠 휴대폰 목업")}<div class="carousel-controls"><button id="slide-prev" aria-label="이전 SNS 카드">←</button><span id="slide-count" aria-live="polite">1 / 4</span><button id="slide-next" aria-label="다음 SNS 카드">→</button></div></div></article><div class="promotion-heading"><p class="eyebrow">03 / POSTER & PROMOTION</p><h3>제품 홍보와 이벤트 비주얼.</h3></div><div class="image-grid poster-grid">${e("A038")}${e("A048")}</div></section>`}function Uc(i){document.querySelectorAll(".phone-stage").forEach(R=>{const S=R.closest(".phone-position"),_=()=>R.style.setProperty("--device-scale",String(Math.min(1.075,Math.max(.5,(S.clientWidth-12)/428))));new ResizeObserver(_).observe(S),_()}),document.querySelectorAll("[data-phone-like]").forEach(R=>R.onclick=()=>R.setAttribute("aria-pressed",String(R.getAttribute("aria-pressed")!=="true")));const e=document.querySelector(".shop-app"),t=e.querySelector(".shop-scroll"),n=e.querySelector(".shop-sheet-layer"),r=e.querySelector("#shop-pack"),o=e.querySelector("#shop-character");let s="single",a=1,c="options",l=0,u=null,h;const d=R=>e.querySelector(R);function f(R){clearTimeout(h),d(".shop-toast").textContent=R,d(".shop-toast").hidden=!1,h=setTimeout(()=>d(".shop-toast").hidden=!0,3500)}function v(){const R=yn[s];d("#shop-product-image").src=i(R.image).src,d("#shop-product-image").alt=R.name+" 상품 대표 이미지",d("#shop-image-open").dataset.openAsset=R.image,d("#shop-image-open").setAttribute("aria-label",R.name+" 상품 이미지 크게 보기"),d("#shop-product-title").innerHTML="프린세스 캐치! 티니핑<br/>미스터리 뱃지 "+R.name,d("#shop-price").innerHTML=R.price.toLocaleString("ko-KR")+"<span>원</span>",d("#shop-contents").textContent=R.contents,r.value=s,e.querySelectorAll("[data-shop-group]").forEach(S=>S.setAttribute("aria-pressed",String(S.dataset.shopGroup===s))),d("#shop-selected-name").textContent=R.name+" · "+o.value,d("#shop-selected-unit").textContent=Cr(R.price),d("#shop-quantity").textContent=a,d("#shop-total").textContent=Cr(R.price*a),d('[data-shop-quantity="-1"]').disabled=a<=1,d('[data-shop-quantity="1"]').disabled=a>=99}function x(R){s=R,o.innerHTML=yn[s].characters.map(S=>`<option>${S}</option>`).join(""),a=1,v()}function m(){n.hidden=!0,t.inert=!1,d(".shop-purchase-bar").inert=!1,u?.focus({preventScroll:!0})}function p(R){c=R,u=document.activeElement,n.hidden=!1,t.inert=!0,d(".shop-purchase-bar").inert=!0,d("#shop-confirm").textContent=c==="cart"?"장바구니 담기":c==="buy"?"선택 상품 확인":"선택 완료",v(),r.focus({preventScroll:!0})}e.querySelectorAll("[data-shop-group]").forEach(R=>R.onclick=()=>x(R.dataset.shopGroup)),r.onchange=()=>x(r.value),o.onchange=v,e.querySelectorAll("[data-shop-quantity]").forEach(R=>R.onclick=()=>{a=Math.max(1,Math.min(99,a+Number(R.dataset.shopQuantity))),v()}),e.querySelectorAll("[data-shop-open]").forEach(R=>R.onclick=()=>p(R.dataset.shopOpen)),d("[data-shop-close]").onclick=m,n.onclick=R=>{R.target===n&&m()},e.addEventListener("keydown",R=>{R.key==="Escape"&&!n.hidden&&(R.preventDefault(),R.stopPropagation(),m())}),d("#shop-confirm").onclick=()=>{c==="cart"?(l+=a,d(".shop-cart-count").hidden=!1,d(".shop-cart-count").textContent=l,f(yn[s].name+" "+a+"개를 장바구니에 담았습니다.")):f(c==="buy"?"선택 상품을 확인했습니다. 실제 주문·결제는 진행되지 않습니다.":"상품 옵션을 선택했습니다."),m()},d("[data-shop-cart]").onclick=()=>f(l?"장바구니에 "+l+"개의 상품이 있습니다.":"장바구니가 비어 있습니다."),e.querySelectorAll("[data-shop-section]").forEach(R=>R.onclick=()=>{const S=document.getElementById(R.dataset.shopSection);t.scrollTo({top:(S.getBoundingClientRect().top-t.getBoundingClientRect().top)/(Number(e.closest(".phone-stage").style.getPropertyValue("--device-scale"))||1)+t.scrollTop-104,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),e.querySelectorAll("[data-shop-section]").forEach(_=>_.setAttribute("aria-pressed",String(_===R)))}),v()}function Cc(){return'<header class="header"><a class="site-name" href="#cover">전유빈<span>PRODUCT & PACKAGE DESIGNER</span></a><button class="menu-toggle" aria-expanded="false" aria-controls="main-nav">메뉴 열기</button><nav id="main-nav" aria-label="섹션 이동"><a href="#overview">프로젝트</a><a href="#badges">배지 디자인</a><a href="#single">패키지</a><a href="#experience">홍보·컨셉</a><a href="#digital">디지털 콘텐츠</a><a href="#archive">작업 자료</a></nav></header>'}function Pc(i,e){return`
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
 <div class="cover-visual">${e("A002",{caption:!1,eager:!0})}<div class="cover-caption"><span>제품·패키지 전체 라인업</span><span>PACKAGE DESIGN / VISUAL DIRECTION</span></div></div>
</section>
<section class="section project-overview" id="overview">
 <div class="overview-intro"><p class="eyebrow">01 — PROJECT & MY ROLE</p><h2>디자인부터 제작 소통까지,<br/>한 사람이 연결한 작업.</h2><p>랜덤 배지를 수집하고, 자석으로 놀고,<br class="desktop-break"/> 크리스탈 케이스에 보관·전시하는 완구입니다.</p><p class="planning-credit">대표와 실장이 입사 전에 기획한 제품으로,<br/>신입 입사 후 수습기간을 마치고 제작에 참여했습니다.</p></div>
 <div class="role-list"><article><span>01</span><div><h3>패키지·배지 디자인 전담</h3><p>전체 패키지 그래픽과 제품에 들어가는 배지 디자인.</p></div></article><article><span>02</span><div><h3>케이스 공급처 컨택</h3><p>구성품 케이스의 공급처 컨택과 제품 구성 실무.</p></div></article><article><span>03</span><div><h3>OEM 제작사 소통</h3><p>디자인을 인쇄·생산으로 연결하는 제작 커뮤니케이션.</p></div></article><article><span>04</span><div><h3>제품 비주얼·판매 콘텐츠</h3><p>상세페이지, SNS, 프로모션과 AI 연출 이미지 제작.</p></div></article></div>
 <div class="project-facts"><div><span>PACKAGE TYPES</span><p><strong>6</strong>개 유형</p></div><div><span>PACKAGE DESIGNS</span><p><strong>15</strong>개 디자인</p></div><div><span>BADGE COLLECTION</span><p><strong>72</strong>종 라인업</p></div><div class="ip-credit"><span>PROJECT CREDIT</span><p>선행 기획 · 대표·실장<br/>디자인·제작 소통 · 전유빈<br/>원작 IP · SAMG Entertainment</p></div></div>
</section>`}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ts="180",Dc=0,sa=1,Ic=2,ul=1,Nc=2,cn=3,mn=0,yt=1,Ot=2,En=0,li=1,aa=2,la=3,ca=4,Fc=5,kn=100,Oc=101,kc=102,Bc=103,zc=104,Gc=200,Vc=201,Hc=202,Wc=203,Po=204,Do=205,Xc=206,qc=207,Yc=208,Zc=209,Kc=210,Jc=211,jc=212,Qc=213,$c=214,Io=0,No=1,Fo=2,ui=3,Oo=4,ko=5,Bo=6,zo=7,hl=0,eu=1,tu=2,fn=0,nu=1,iu=2,ru=3,ou=4,su=5,au=6,lu=7,dl=300,hi=301,di=302,Go=303,Vo=304,Or=306,Ho=1e3,zn=1001,Wo=1002,Pt=1003,cu=1004,Qi=1005,kt=1006,Wr=1007,Sn=1008,Qt=1009,fl=1010,pl=1011,Ni=1012,Ls=1013,Gn=1014,dn=1015,Xi=1016,Us=1017,Cs=1018,Fi=1020,ml=35902,gl=35899,vl=1021,_l=1022,Xt=1023,Oi=1026,ki=1027,bl=1028,Ps=1029,xl=1030,Ds=1031,Is=1033,Sr=33776,Rr=33777,Er=33778,Ar=33779,Xo=35840,qo=35841,Yo=35842,Zo=35843,Ko=36196,Jo=37492,jo=37496,Qo=37808,$o=37809,es=37810,ts=37811,ns=37812,is=37813,rs=37814,os=37815,ss=37816,as=37817,ls=37818,cs=37819,us=37820,hs=37821,ds=36492,fs=36494,ps=36495,ms=36283,gs=36284,vs=36285,_s=36286,uu=3200,hu=3201,wl=0,du=1,hn="",Mt="srgb",fi="srgb-linear",Pr="linear",et="srgb",Xn=7680,ua=519,fu=512,pu=513,mu=514,Ml=515,gu=516,vu=517,_u=518,bu=519,ha=35044,da="300 es",Zt=2e3,Dr=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xr=Math.PI/180,bs=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function xu(i,e){return(i%e+e)%e}function qr(i,e,t){return(1-t)*i+t*e}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const d=o[s+0],f=o[s+1],v=o[s+2],x=o[s+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==v){let m=1-a;const p=c*d+l*f+u*v+h*x,R=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const T=Math.sqrt(S),A=Math.atan2(T,p*R);m=Math.sin(m*A)/T,a=Math.sin(a*A)/T}const _=a*R;if(c=c*m+d*_,l=l*m+f*_,u=u*m+v*_,h=h*m+x*_,m===1-a){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=o[s],d=o[s+1],f=o[s+2],v=o[s+3];return e[t]=a*v+u*h+c*f-l*d,e[t+1]=c*v+u*d+l*h-a*f,e[t+2]=l*v+u*f+a*d-c*h,e[t+3]=u*v-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(o/2),d=c(n/2),f=c(r/2),v=c(o/2);switch(s){case"XYZ":this._x=d*u*h+l*f*v,this._y=l*f*h-d*u*v,this._z=l*u*v+d*f*h,this._w=l*u*h-d*f*v;break;case"YXZ":this._x=d*u*h+l*f*v,this._y=l*f*h-d*u*v,this._z=l*u*v-d*f*h,this._w=l*u*h+d*f*v;break;case"ZXY":this._x=d*u*h-l*f*v,this._y=l*f*h+d*u*v,this._z=l*u*v+d*f*h,this._w=l*u*h-d*f*v;break;case"ZYX":this._x=d*u*h-l*f*v,this._y=l*f*h+d*u*v,this._z=l*u*v-d*f*h,this._w=l*u*h+d*f*v;break;case"YZX":this._x=d*u*h+l*f*v,this._y=l*f*h+d*u*v,this._z=l*u*v-d*f*h,this._w=l*u*h-d*f*v;break;case"XZY":this._x=d*u*h-l*f*v,this._y=l*f*h-d*u*v,this._z=l*u*v+d*f*h,this._w=l*u*h+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(o-l)*f,this._z=(s-r)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(o+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(o-l)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(s-r)/f,this._x=(o+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+s*a+r*l-o*c,this._y=r*u+s*c+o*a-n*l,this._z=o*u+s*l+n*c-r*a,this._w=s*u-n*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*o+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=s*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*n),u=2*(a*t-o*r),h=2*(o*n-s*t);return this.x=t+c*l+s*h-a*u,this.y=n+c*u+a*l-o*h,this.z=r+c*h+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-n*c,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yr.copy(this).projectOnVector(e),this.sub(Yr)}reflect(e){return this.sub(Yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new N,fa=new qi;class We{constructor(e,t,n,r,o,s,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,c,l)}set(e,t,n,r,o,s,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=n,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],v=n[8],x=r[0],m=r[3],p=r[6],R=r[1],S=r[4],_=r[7],T=r[2],A=r[5],U=r[8];return o[0]=s*x+a*R+c*T,o[3]=s*m+a*S+c*A,o[6]=s*p+a*_+c*U,o[1]=l*x+u*R+h*T,o[4]=l*m+u*S+h*A,o[7]=l*p+u*_+h*U,o[2]=d*x+f*R+v*T,o[5]=d*m+f*S+v*A,o[8]=d*p+f*_+v*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-n*o*u+n*a*c+r*o*l-r*s*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*s-a*l,d=a*c-u*o,f=l*o-s*c,v=t*h+n*d+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*l-u*n)*x,e[2]=(a*n-r*s)*x,e[3]=d*x,e[4]=(u*t-r*c)*x,e[5]=(r*o-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(s*t-n*o)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zr.makeScale(e,t)),this}rotate(e){return this.premultiply(Zr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new We;function yl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wu(){const i=Bi("canvas");return i.style.display="block",i}const pa={};function zi(i){i in pa||(pa[i]=!0,console.warn(i))}function Mu(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const ma=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ga=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yu(){const i={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===et&&(r.r=pn(r.r),r.g=pn(r.g),r.b=pn(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===et&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hn?Pr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return zi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return zi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fi]:{primaries:e,whitePoint:n,transfer:Pr,toXYZ:ma,fromXYZ:ga,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:ma,fromXYZ:ga,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}const Je=yu();function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qn;class Su{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qn===void 0&&(qn=Bi("canvas")),qn.width=e.width,qn.height=e.height;const r=qn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=qn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=pn(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pn(t[n]/255)*255):t[n]=pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ru=0;class Ns{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Kr(r[s].image)):o.push(Kr(r[s]))}else o=Kr(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function Kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Su.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eu=0;const Jr=new N;class gt extends _i{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=zn,r=zn,o=kt,s=Sn,a=Xt,c=Qt,l=gt.DEFAULT_ANISOTROPY,u=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=bi(),this.name="",this.source=new Ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jr).x}get height(){return this.source.getSize(Jr).y}get depth(){return this.source.getSize(Jr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ho:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ho:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=dl;gt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],v=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,_=(f+1)/2,T=(p+1)/2,A=(u+d)/4,U=(h+x)/4,P=(v+m)/4;return S>_&&S>T?S<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(S),r=A/n,o=U/n):_>T?_<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(_),n=A/r,o=P/r):T<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(T),n=U/o,r=P/o),this.set(n,r,o,t),this}let R=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(m-v)/R,this.y=(h-x)/R,this.z=(d-u)/R,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Au extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:n.depth},o=new gt(r);this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ns(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Au{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sl extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tu extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,zt):zt.fromBufferAttribute(o,s),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$i.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$i.copy(n.boundingBox)),$i.applyMatrix4(e.matrixWorld),this.union($i)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),er.subVectors(this.max,Si),Yn.subVectors(e.a,Si),Zn.subVectors(e.b,Si),Kn.subVectors(e.c,Si),vn.subVectors(Zn,Yn),_n.subVectors(Kn,Zn),Un.subVectors(Yn,Kn);let t=[0,-vn.z,vn.y,0,-_n.z,_n.y,0,-Un.z,Un.y,vn.z,0,-vn.x,_n.z,0,-_n.x,Un.z,0,-Un.x,-vn.y,vn.x,0,-_n.y,_n.x,0,-Un.y,Un.x,0];return!jr(t,Yn,Zn,Kn,er)||(t=[1,0,0,0,1,0,0,0,1],!jr(t,Yn,Zn,Kn,er))?!1:(tr.crossVectors(vn,_n),t=[tr.x,tr.y,tr.z],jr(t,Yn,Zn,Kn,er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rn=[new N,new N,new N,new N,new N,new N,new N,new N],zt=new N,$i=new xi,Yn=new N,Zn=new N,Kn=new N,vn=new N,_n=new N,Un=new N,Si=new N,er=new N,tr=new N,Cn=new N;function jr(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){Cn.fromArray(i,o);const a=r.x*Math.abs(Cn.x)+r.y*Math.abs(Cn.y)+r.z*Math.abs(Cn.z),c=e.dot(Cn),l=t.dot(Cn),u=n.dot(Cn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Lu=new xi,Ri=new N,Qr=new N;class Fs{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lu.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ri.subVectors(e,this.center);const t=Ri.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ri,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ri.copy(e.center).add(Qr)),this.expandByPoint(Ri.copy(e.center).sub(Qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const on=new N,$r=new N,nr=new N,bn=new N,eo=new N,ir=new N,to=new N;class Uu{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$r.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),bn.copy(this.origin).sub($r);const o=e.distanceTo(t)*.5,s=-this.direction.dot(nr),a=bn.dot(this.direction),c=-bn.dot(nr),l=bn.lengthSq(),u=Math.abs(1-s*s);let h,d,f,v;if(u>0)if(h=s*c-a,d=s*a-c,v=o*u,h>=0)if(d>=-v)if(d<=v){const x=1/u;h*=x,d*=x,f=h*(h+s*d+2*a)+d*(s*h+d+2*c)+l}else d=o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*c)+l;else d=-o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-v?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-c),o),f=-h*h+d*(d+2*c)+l):d<=v?(h=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-c),o),f=-h*h+d*(d+2*c)+l);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($r).addScaledVector(nr,d),f}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),r=on.dot(on)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,c=n+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,r,o){eo.subVectors(t,e),ir.subVectors(n,e),to.crossVectors(eo,ir);let s=this.direction.dot(to),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;bn.subVectors(this.origin,e);const c=a*this.direction.dot(ir.crossVectors(bn,ir));if(c<0)return null;const l=a*this.direction.dot(eo.cross(bn));if(l<0||c+l>s)return null;const u=-a*bn.dot(to);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,r,o,s,a,c,l,u,h,d,f,v,x,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,c,l,u,h,d,f,v,x,m)}set(e,t,n,r,o,s,a,c,l,u,h,d,f,v,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=v,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Jn.setFromMatrixColumn(e,0).length(),o=1/Jn.setFromMatrixColumn(e,1).length(),s=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=s*u,f=s*h,v=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+v*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=v+f*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,v=l*u,x=l*h;t[0]=d+x*a,t[4]=v*a-f,t[8]=s*l,t[1]=s*h,t[5]=s*u,t[9]=-a,t[2]=f*a-v,t[6]=x+d*a,t[10]=s*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,v=l*u,x=l*h;t[0]=d-x*a,t[4]=-s*h,t[8]=v+f*a,t[1]=f+v*a,t[5]=s*u,t[9]=x-d*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){const d=s*u,f=s*h,v=a*u,x=a*h;t[0]=c*u,t[4]=v*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-v,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,f=s*l,v=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=v*h+f,t[1]=h,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+v,t[10]=d-x*h}else if(e.order==="XZY"){const d=s*c,f=s*l,v=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=s*u,t[9]=f*h-v,t[2]=v*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cu,e,Pu)}lookAt(e,t,n){const r=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),xn.crossVectors(n,Tt),xn.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),xn.crossVectors(n,Tt)),xn.normalize(),rr.crossVectors(Tt,xn),r[0]=xn.x,r[4]=rr.x,r[8]=Tt.x,r[1]=xn.y,r[5]=rr.y,r[9]=Tt.y,r[2]=xn.z,r[6]=rr.z,r[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],v=n[2],x=n[6],m=n[10],p=n[14],R=n[3],S=n[7],_=n[11],T=n[15],A=r[0],U=r[4],P=r[8],y=r[12],w=r[1],L=r[5],k=r[9],z=r[13],W=r[2],Y=r[6],X=r[10],oe=r[14],q=r[3],he=r[7],_e=r[11],Ee=r[15];return o[0]=s*A+a*w+c*W+l*q,o[4]=s*U+a*L+c*Y+l*he,o[8]=s*P+a*k+c*X+l*_e,o[12]=s*y+a*z+c*oe+l*Ee,o[1]=u*A+h*w+d*W+f*q,o[5]=u*U+h*L+d*Y+f*he,o[9]=u*P+h*k+d*X+f*_e,o[13]=u*y+h*z+d*oe+f*Ee,o[2]=v*A+x*w+m*W+p*q,o[6]=v*U+x*L+m*Y+p*he,o[10]=v*P+x*k+m*X+p*_e,o[14]=v*y+x*z+m*oe+p*Ee,o[3]=R*A+S*w+_*W+T*q,o[7]=R*U+S*L+_*Y+T*he,o[11]=R*P+S*k+_*X+T*_e,o[15]=R*y+S*z+_*oe+T*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],v=e[3],x=e[7],m=e[11],p=e[15];return v*(+o*c*h-r*l*h-o*a*d+n*l*d+r*a*f-n*c*f)+x*(+t*c*f-t*l*d+o*s*d-r*s*f+r*l*u-o*c*u)+m*(+t*l*h-t*a*f-o*s*h+n*s*f+o*a*u-n*l*u)+p*(-r*a*u-t*c*h+t*a*d+r*s*h-n*s*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],v=e[12],x=e[13],m=e[14],p=e[15],R=h*m*l-x*d*l+x*c*f-a*m*f-h*c*p+a*d*p,S=v*d*l-u*m*l-v*c*f+s*m*f+u*c*p-s*d*p,_=u*x*l-v*h*l+v*a*f-s*x*f-u*a*p+s*h*p,T=v*h*c-u*x*c-v*a*d+s*x*d+u*a*m-s*h*m,A=t*R+n*S+r*_+o*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/A;return e[0]=R*U,e[1]=(x*d*o-h*m*o-x*r*f+n*m*f+h*r*p-n*d*p)*U,e[2]=(a*m*o-x*c*o+x*r*l-n*m*l-a*r*p+n*c*p)*U,e[3]=(h*c*o-a*d*o-h*r*l+n*d*l+a*r*f-n*c*f)*U,e[4]=S*U,e[5]=(u*m*o-v*d*o+v*r*f-t*m*f-u*r*p+t*d*p)*U,e[6]=(v*c*o-s*m*o-v*r*l+t*m*l+s*r*p-t*c*p)*U,e[7]=(s*d*o-u*c*o+u*r*l-t*d*l-s*r*f+t*c*f)*U,e[8]=_*U,e[9]=(v*h*o-u*x*o-v*n*f+t*x*f+u*n*p-t*h*p)*U,e[10]=(s*x*o-v*a*o+v*n*l-t*x*l-s*n*p+t*a*p)*U,e[11]=(u*a*o-s*h*o-u*n*l+t*h*l+s*n*f-t*a*f)*U,e[12]=T*U,e[13]=(u*x*r-v*h*r+v*n*d-t*x*d-u*n*m+t*h*m)*U,e[14]=(v*a*r-s*x*r-v*n*c+t*x*c+s*n*m-t*a*m)*U,e[15]=(s*h*r-u*a*r+u*n*c-t*h*c-s*n*d+t*a*d)*U,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*s,0,l*c-r*a,u*c+r*s,o*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,h=a+a,d=o*l,f=o*u,v=o*h,x=s*u,m=s*h,p=a*h,R=c*l,S=c*u,_=c*h,T=n.x,A=n.y,U=n.z;return r[0]=(1-(x+p))*T,r[1]=(f+_)*T,r[2]=(v-S)*T,r[3]=0,r[4]=(f-_)*A,r[5]=(1-(d+p))*A,r[6]=(m+R)*A,r[7]=0,r[8]=(v+S)*U,r[9]=(m-R)*U,r[10]=(1-(d+x))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=Jn.set(r[0],r[1],r[2]).length();const s=Jn.set(r[4],r[5],r[6]).length(),a=Jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const l=1/o,u=1/s,h=1/a;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=u,Gt.elements[5]*=u,Gt.elements[6]*=u,Gt.elements[8]*=h,Gt.elements[9]*=h,Gt.elements[10]*=h,t.setFromRotationMatrix(Gt),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=Zt,c=!1){const l=this.elements,u=2*o/(t-e),h=2*o/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let v,x;if(c)v=o/(s-o),x=s*o/(s-o);else if(a===Zt)v=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===Dr)v=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=Zt,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r);let v,x;if(c)v=1/(s-o),x=s/(s-o);else if(a===Zt)v=-2/(s-o),x=-(s+o)/(s-o);else if(a===Dr)v=-1/(s-o),x=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Jn=new N,Gt=new lt,Cu=new N(0,0,0),Pu=new N(1,1,1),xn=new N,rr=new N,Tt=new N,va=new lt,_a=new qi;class $t{constructor(e=0,t=0,n=0,r=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(va,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _a.setFromEuler(this),this.setFromQuaternion(_a,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class Rl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Du=0;const ba=new N,jn=new qi,sn=new lt,or=new N,Ei=new N,Iu=new N,Nu=new qi,xa=new N(1,0,0),wa=new N(0,1,0),Ma=new N(0,0,1),ya={type:"added"},Fu={type:"removed"},Qn={type:"childadded",child:null},no={type:"childremoved",child:null};class vt extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new N,t=new $t,n=new qi,r=new N(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new We}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(xa,e)}rotateY(e){return this.rotateOnAxis(wa,e)}rotateZ(e){return this.rotateOnAxis(Ma,e)}translateOnAxis(e,t){return ba.copy(e).applyQuaternion(this.quaternion),this.position.add(ba.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xa,e)}translateY(e){return this.translateOnAxis(wa,e)}translateZ(e){return this.translateOnAxis(Ma,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?or.copy(e):or.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Ei,or,this.up):sn.lookAt(or,Ei,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),jn.setFromRotationMatrix(sn),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ya),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fu),no.child=e,this.dispatchEvent(no),no.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ya),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,e,Iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,Nu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];o(e.shapes,h)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(o(e.animations,c))}}if(t){const a=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),f=s(e.animations),v=s(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}vt.DEFAULT_UP=new N(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new N,an=new N,io=new N,ln=new N,$n=new N,ei=new N,Sa=new N,ro=new N,oo=new N,so=new N,ao=new st,lo=new st,co=new st;class Ht{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Vt.subVectors(r,t),an.subVectors(n,t),io.subVectors(e,t);const s=Vt.dot(Vt),a=Vt.dot(an),c=Vt.dot(io),l=an.dot(an),u=an.dot(io),h=s*l-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,v=(s*u-a*c)*d;return o.set(1-f-v,v,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(e,t,n,r,o,s,a,c){return this.getBarycoord(e,t,n,r,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,ln.x),c.addScaledVector(s,ln.y),c.addScaledVector(a,ln.z),c)}static getInterpolatedAttribute(e,t,n,r,o,s){return ao.setScalar(0),lo.setScalar(0),co.setScalar(0),ao.fromBufferAttribute(e,t),lo.fromBufferAttribute(e,n),co.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ao,o.x),s.addScaledVector(lo,o.y),s.addScaledVector(co,o.z),s}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),an.subVectors(e,t),Vt.cross(an).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Vt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;$n.subVectors(r,n),ei.subVectors(o,n),ro.subVectors(e,n);const c=$n.dot(ro),l=ei.dot(ro);if(c<=0&&l<=0)return t.copy(n);oo.subVectors(e,r);const u=$n.dot(oo),h=ei.dot(oo);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(n).addScaledVector($n,s);so.subVectors(e,o);const f=$n.dot(so),v=ei.dot(so);if(v>=0&&f<=v)return t.copy(o);const x=f*l-c*v;if(x<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(ei,a);const m=u*v-f*h;if(m<=0&&h-u>=0&&f-v>=0)return Sa.subVectors(o,r),a=(h-u)/(h-u+(f-v)),t.copy(r).addScaledVector(Sa,a);const p=1/(m+x+d);return s=x*p,a=d*p,t.copy(n).addScaledVector($n,s).addScaledVector(ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function uo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=xu(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=uo(s,o,e+1/3),this.g=uo(s,o,e),this.b=uo(s,o,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Mt){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=El[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Je.workingToColorSpace(bt.copy(this),e),Math.round(qe(bt.r*255,0,255))*65536+Math.round(qe(bt.g*255,0,255))*256+Math.round(qe(bt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(bt.copy(this),t);const n=bt.r,r=bt.g,o=bt.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let c,l;const u=(a+s)/2;if(a===s)c=0,l=0;else{const h=s-a;switch(l=u<=.5?h/(s+a):h/(2-s-a),s){case n:c=(r-o)/h+(r<o?6:0);break;case r:c=(o-n)/h+2;break;case o:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Mt){Je.workingToColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,r=bt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(sr);const n=qr(wn.h,sr.h,t),r=qr(wn.s,sr.s,t),o=qr(wn.l,sr.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ze;Ze.NAMES=El;let Ou=0;class Yi extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=li,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Po,this.blendDst=Do,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Po&&(n.blendSrc=this.blendSrc),this.blendDst!==Do&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ua&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const c=o[a];delete c.metadata,s.push(c)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pi extends Yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new N,ar=new Me;let ku=0;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ku++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ha,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),o=Rt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ha&&(e.usage=this.usage),e}}class Al extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tl extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bu=0;const Nt=new lt,ho=new vt,ti=new N,Lt=new xi,Ai=new xi,mt=new N;class Bt extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yl(e)?Tl:Al)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new We().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return ho.lookAt(e),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ht(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];Lt.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Ai.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Lt.min,Ai.min),Lt.expandByPoint(mt),mt.addVectors(Lt.max,Ai.max),Lt.expandByPoint(mt)):(Lt.expandByPoint(Ai.min),Lt.expandByPoint(Ai.max))}Lt.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)mt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)mt.fromBufferAttribute(a,l),c&&(ti.fromBufferAttribute(e,l),mt.add(ti)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new N,c[P]=new N;const l=new N,u=new N,h=new N,d=new Me,f=new Me,v=new Me,x=new N,m=new N;function p(P,y,w){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),d.fromBufferAttribute(o,P),f.fromBufferAttribute(o,y),v.fromBufferAttribute(o,w),u.sub(l),h.sub(l),f.sub(d),v.sub(d);const L=1/(f.x*v.y-v.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(L),a[P].add(x),a[y].add(x),a[w].add(x),c[P].add(m),c[y].add(m),c[w].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let P=0,y=R.length;P<y;++P){const w=R[P],L=w.start,k=w.count;for(let z=L,W=L+k;z<W;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new N,_=new N,T=new N,A=new N;function U(P){T.fromBufferAttribute(r,P),A.copy(T);const y=a[P];S.copy(y),S.sub(T.multiplyScalar(T.dot(y))).normalize(),_.crossVectors(A,y);const L=_.dot(c[P])<0?-1:1;s.setXYZW(P,S.x,S.y,S.z,L)}for(let P=0,y=R.length;P<y;++P){const w=R[P],L=w.start,k=w.count;for(let z=L,W=L+k;z<W;z+=3)U(e.getX(z+0)),U(e.getX(z+1)),U(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new N,o=new N,s=new N,a=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,v=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[v++]=l[f++]}return new jt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const o=e.morphAttributes;for(const l in o){const u=[],h=o[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ra=new lt,Pn=new Uu,lr=new Fs,Ea=new N,cr=new N,ur=new N,hr=new N,fo=new N,dr=new N,Aa=new N,fr=new N;class ut extends vt{constructor(e=new Bt,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){dr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],h=o[c];u!==0&&(fo.fromBufferAttribute(h,e),s?dr.addScaledVector(fo,u):dr.addScaledVector(fo.sub(t),u))}t.add(dr)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(o),Pn.copy(e.ray).recast(e.near),!(lr.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(lr,Ea)===null||Pn.origin.distanceToSquared(Ea)>(e.far-e.near)**2))&&(Ra.copy(o).invert(),Pn.copy(e.ray).applyMatrix4(Ra),!(n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pn)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,x=d.length;v<x;v++){const m=d[v],p=s[m.materialIndex],R=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=R,T=S;_<T;_+=3){const A=a.getX(_),U=a.getX(_+1),P=a.getX(_+2);r=pr(this,p,e,n,l,u,h,A,U,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=v,p=x;m<p;m+=3){const R=a.getX(m),S=a.getX(m+1),_=a.getX(m+2);r=pr(this,s,e,n,l,u,h,R,S,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,x=d.length;v<x;v++){const m=d[v],p=s[m.materialIndex],R=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=R,T=S;_<T;_+=3){const A=_,U=_+1,P=_+2;r=pr(this,p,e,n,l,u,h,A,U,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=v,p=x;m<p;m+=3){const R=m,S=m+1,_=m+2;r=pr(this,s,e,n,l,u,h,R,S,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function zu(i,e,t,n,r,o,s,a){let c;if(e.side===yt?c=n.intersectTriangle(s,o,r,!0,a):c=n.intersectTriangle(r,o,s,e.side===mn,a),c===null)return null;fr.copy(a),fr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(fr);return l<t.near||l>t.far?null:{distance:l,point:fr.clone(),object:i}}function pr(i,e,t,n,r,o,s,a,c,l){i.getVertexPosition(a,cr),i.getVertexPosition(c,ur),i.getVertexPosition(l,hr);const u=zu(i,e,t,n,cr,ur,hr,Aa);if(u){const h=new N;Ht.getBarycoord(Aa,cr,ur,hr,h),r&&(u.uv=Ht.getInterpolatedAttribute(r,a,c,l,h,new Me)),o&&(u.uv1=Ht.getInterpolatedAttribute(o,a,c,l,h,new Me)),s&&(u.normal=Ht.getInterpolatedAttribute(s,a,c,l,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new N,materialIndex:0};Ht.getNormal(cr,ur,hr,d.normal),u.face=d,u.barycoord=h}return u}class Zi extends Bt{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const c=[],l=[],u=[],h=[];let d=0,f=0;v("z","y","x",-1,-1,n,t,e,s,o,0),v("z","y","x",1,-1,n,t,-e,s,o,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function v(x,m,p,R,S,_,T,A,U,P,y){const w=_/U,L=T/P,k=_/2,z=T/2,W=A/2,Y=U+1,X=P+1;let oe=0,q=0;const he=new N;for(let _e=0;_e<X;_e++){const Ee=_e*L-z;for(let $=0;$<Y;$++){const Te=$*w-k;he[x]=Te*R,he[m]=Ee*S,he[p]=W,l.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[p]=A>0?1:-1,u.push(he.x,he.y,he.z),h.push($/U),h.push(1-_e/P),oe+=1}}for(let _e=0;_e<P;_e++)for(let Ee=0;Ee<U;Ee++){const $=d+Ee+Y*_e,Te=d+Ee+Y*(_e+1),Fe=d+(Ee+1)+Y*(_e+1),Ue=d+(Ee+1)+Y*_e;c.push($,Te,Ue),c.push(Te,Fe,Ue),q+=6}a.addGroup(f,q,y),f+=q,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function wt(i){const e={};for(let t=0;t<i.length;t++){const n=mi(i[t]);for(const r in n)e[r]=n[r]}return e}function Gu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ll(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Vu={clone:mi,merge:wt};var Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=Wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=Gu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ul extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Zt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new N,Ta=new Me,La=new Me;class Ut extends Ul{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,Ta,La),t.subVectors(La,Ta)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class Xu extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ut(ni,ii,e,t);r.layers=this.layers,this.add(r);const o=new Ut(ni,ii,e,t);o.layers=this.layers,this.add(o);const s=new Ut(ni,ii,e,t);s.layers=this.layers,this.add(s);const a=new Ut(ni,ii,e,t);a.layers=this.layers,this.add(a);const c=new Ut(ni,ii,e,t);c.layers=this.layers,this.add(c);const l=new Ut(ni,ii,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,c]=t;for(const l of t)this.remove(l);if(e===Zt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Cl extends gt{constructor(e=[],t=hi,n,r,o,s,a,c,l,u){super(e,t,n,r,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qu extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Cl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zi(5,5,5),o=new gn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:En});o.uniforms.tEquirect.value=t;const s=new ut(r,o),a=t.minFilter;return t.minFilter===Sn&&(t.minFilter=kt),new Xu(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}class Ct extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yu={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,v=.005;l.inputState.pinching&&d>f+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yu)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Os extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zu extends gt{constructor(e=null,t=1,n=1,r,o,s,a,c,l=Pt,u=Pt,h,d){super(null,s,a,c,l,u,r,o,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mo=new N,Ku=new N,Ju=new We;class Fn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=mo.subVectors(n,t).cross(Ku.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ju.getNormalMatrix(e),r=this.coplanarPoint(mo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new Fs,ju=new Me(.5,.5),mr=new N;class ks{constructor(e=new Fn,t=new Fn,n=new Fn,r=new Fn,o=new Fn,s=new Fn){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zt,n=!1){const r=this.planes,o=e.elements,s=o[0],a=o[1],c=o[2],l=o[3],u=o[4],h=o[5],d=o[6],f=o[7],v=o[8],x=o[9],m=o[10],p=o[11],R=o[12],S=o[13],_=o[14],T=o[15];if(r[0].setComponents(l-s,f-u,p-v,T-R).normalize(),r[1].setComponents(l+s,f+u,p+v,T+R).normalize(),r[2].setComponents(l+a,f+h,p+x,T+S).normalize(),r[3].setComponents(l-a,f-h,p-x,T-S).normalize(),n)r[4].setComponents(c,d,m,_).normalize(),r[5].setComponents(l-c,f-d,p-m,T-_).normalize();else if(r[4].setComponents(l-c,f-d,p-m,T-_).normalize(),t===Zt)r[5].setComponents(l+c,f+d,p+m,T+_).normalize();else if(t===Dr)r[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(e){Dn.center.set(0,0,0);const t=ju.distanceTo(e.center);return Dn.radius=.7071067811865476+t,Dn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(mr.x=r.normal.x>0?e.max.x:e.min.x,mr.y=r.normal.y>0?e.max.y:e.min.y,mr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pl extends gt{constructor(e,t,n=Gn,r,o,s,a=Pt,c=Pt,l,u=Oi,h=1){if(u!==Oi&&u!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,o,s,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ns(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Dl extends gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kr extends Bt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const o=[],s=[],a=[],c=[],l=new N,u=new Me;s.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),s.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(s[d]/e+1)/2,u.y=(s[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Br extends Bt{constructor(e=1,t=1,n=1,r=32,o=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),o=Math.floor(o);const u=[],h=[],d=[],f=[];let v=0;const x=[],m=n/2;let p=0;R(),s===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function R(){const _=new N,T=new N;let A=0;const U=(t-e)/n;for(let P=0;P<=o;P++){const y=[],w=P/o,L=w*(t-e)+e;for(let k=0;k<=r;k++){const z=k/r,W=z*c+a,Y=Math.sin(W),X=Math.cos(W);T.x=L*Y,T.y=-w*n+m,T.z=L*X,h.push(T.x,T.y,T.z),_.set(Y,U,X).normalize(),d.push(_.x,_.y,_.z),f.push(z,1-w),y.push(v++)}x.push(y)}for(let P=0;P<r;P++)for(let y=0;y<o;y++){const w=x[y][P],L=x[y+1][P],k=x[y+1][P+1],z=x[y][P+1];(e>0||y!==0)&&(u.push(w,L,z),A+=3),(t>0||y!==o-1)&&(u.push(L,k,z),A+=3)}l.addGroup(p,A,0),p+=A}function S(_){const T=v,A=new Me,U=new N;let P=0;const y=_===!0?e:t,w=_===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),v++;const L=v;for(let k=0;k<=r;k++){const W=k/r*c+a,Y=Math.cos(W),X=Math.sin(W);U.x=y*X,U.y=m*w,U.z=y*Y,h.push(U.x,U.y,U.z),d.push(0,w,0),A.x=Y*.5+.5,A.y=X*.5*w+.5,f.push(A.x,A.y),v++}for(let k=0;k<r;k++){const z=T+k,W=L+k;_===!0?u.push(W,W+1,z):u.push(W+1,W,z),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),o=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const o=n.length;let s;t?s=t:s=e*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-s,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===s)return r/(o-1);const u=n[r],d=n[r+1]-u,f=(s-u)/d;return(r+f)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const s=this.getPoint(r),a=this.getPoint(o),c=t||(s.isVector2?new Me:new N);return c.copy(a).sub(s).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new N,r=[],o=[],s=[],a=new N,c=new lt;for(let f=0;f<=e;f++){const v=f/e;r[f]=this.getTangentAt(v,new N)}o[0]=new N,s[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),s[f]=s[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(qe(r[f-1].dot(r[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,v))}s[f].crossVectors(r[f],o[f])}if(t===!0){let f=Math.acos(qe(o[0].dot(o[e]),-1,1));f/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(f=-f);for(let v=1;v<=e;v++)o[v].applyMatrix4(c.makeRotationAxis(r[v],f*v)),s[v].crossVectors(r[v],o[v])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Bs extends tn{constructor(e=0,t=0,n=1,r=1,o=0,s=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Me){const n=t,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);const a=this.aStartAngle+e*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Qu extends Bs{constructor(e,t,n,r,o,s){super(e,t,n,n,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}}function zs(){let i=0,e=0,t=0,n=0;function r(o,s,a,c){i=o,e=a,t=-3*o+3*s-2*a-c,n=2*o-2*s+a+c}return{initCatmullRom:function(o,s,a,c,l){r(s,a,l*(a-o),l*(c-s))},initNonuniformCatmullRom:function(o,s,a,c,l,u,h){let d=(s-o)/l-(a-o)/(l+u)+(a-s)/u,f=(a-s)/u-(c-s)/(u+h)+(c-a)/h;d*=u,f*=u,r(s,a,d,f)},calc:function(o){const s=o*o,a=s*o;return i+e*o+t*s+n*a}}}const gr=new N,go=new zs,vo=new zs,_o=new zs;class $u extends tn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new N){const n=t,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e;let a=Math.floor(s),c=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%o]:(gr.subVectors(r[0],r[1]).add(r[0]),l=gr);const h=r[a%o],d=r[(a+1)%o];if(this.closed||a+2<o?u=r[(a+2)%o]:(gr.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=gr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),go.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,v,x,m),vo.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,v,x,m),_o.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,v,x,m)}else this.curveType==="catmullrom"&&(go.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),vo.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),_o.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(go.calc(c),vo.calc(c),_o.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ua(i,e,t,n,r){const o=(n-e)*.5,s=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+o+s)*c+(-3*t+3*n-2*o-s)*a+o*i+t}function eh(i,e){const t=1-i;return t*t*e}function th(i,e){return 2*(1-i)*i*e}function nh(i,e){return i*i*e}function Pi(i,e,t,n){return eh(i,e)+th(i,t)+nh(i,n)}function ih(i,e){const t=1-i;return t*t*t*e}function rh(i,e){const t=1-i;return 3*t*t*i*e}function oh(i,e){return 3*(1-i)*i*i*e}function sh(i,e){return i*i*i*e}function Di(i,e,t,n,r){return ih(i,e)+rh(i,t)+oh(i,n)+sh(i,r)}class Il extends tn{constructor(e=new Me,t=new Me,n=new Me,r=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Me){const n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(Di(e,r.x,o.x,s.x,a.x),Di(e,r.y,o.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ah extends tn{constructor(e=new N,t=new N,n=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new N){const n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(Di(e,r.x,o.x,s.x,a.x),Di(e,r.y,o.y,s.y,a.y),Di(e,r.z,o.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nl extends tn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lh extends tn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fl extends tn{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){const n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(Pi(e,r.x,o.x,s.x),Pi(e,r.y,o.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ch extends tn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(Pi(e,r.x,o.x,s.x),Pi(e,r.y,o.y,s.y),Pi(e,r.z,o.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ol extends tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const n=t,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,c=r[s===0?s:s-1],l=r[s],u=r[s>r.length-2?r.length-1:s+1],h=r[s>r.length-3?r.length-1:s+2];return n.set(Ua(a,c.x,l.x,u.x,h.x),Ua(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Me().fromArray(r))}return this}}var xs=Object.freeze({__proto__:null,ArcCurve:Qu,CatmullRomCurve3:$u,CubicBezierCurve:Il,CubicBezierCurve3:ah,EllipseCurve:Bs,LineCurve:Nl,LineCurve3:lh,QuadraticBezierCurve:Fl,QuadraticBezierCurve3:ch,SplineCurve:Ol});class uh extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xs[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=n){const s=r[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-s/c;return a.getPointAt(l,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,o=this.curves;r<o.length;r++){const s=o[r],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,c=s.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new xs[r.type]().fromJSON(r))}return this}}class ws extends uh{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Nl(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const o=new Fl(this.currentPoint.clone(),new Me(e,t),new Me(n,r));return this.curves.push(o),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,o,s){const a=new Il(this.currentPoint.clone(),new Me(e,t),new Me(n,r),new Me(o,s));return this.curves.push(a),this.currentPoint.set(o,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ol(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,o,s){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,o,s),this}absarc(e,t,n,r,o,s){return this.absellipse(e,t,n,n,r,o,s),this}ellipse(e,t,n,r,o,s,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,o,s,a,c),this}absellipse(e,t,n,r,o,s,a,c){const l=new Bs(e,t,n,r,o,s,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gs extends ws{constructor(e){super(e),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new ws().fromJSON(r))}return this}}function hh(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let o=kl(i,0,r,t,!0);const s=[];if(!o||o.next===o.prev)return s;let a,c,l;if(n&&(o=gh(i,e,o,t)),i.length>80*t){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let d=t;d<r;d+=t){const f=i[d],v=i[d+1];f<a&&(a=f),v<c&&(c=v),f>u&&(u=f),v>h&&(h=v)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Gi(o,s,t,a,c,l,0),s}function kl(i,e,t,n,r){let o;if(r===Ah(i,e,t,n)>0)for(let s=e;s<t;s+=n)o=Ca(s/n|0,i[s],i[s+1],o);else for(let s=t-n;s>=e;s-=n)o=Ca(s/n|0,i[s],i[s+1],o);return o&&gi(o,o.next)&&(Hi(o),o=o.next),o}function Hn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(gi(t,t.next)||at(t.prev,t,t.next)===0)){if(Hi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Gi(i,e,t,n,r,o,s){if(!i)return;!s&&o&&wh(i,n,r,o);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(o?fh(i,n,r,o):dh(i)){e.push(c.i,i.i,l.i),Hi(i),i=l.next,a=l.next;continue}if(i=l,i===a){s?s===1?(i=ph(Hn(i),e),Gi(i,e,t,n,r,o,2)):s===2&&mh(i,e,t,n,r,o):Gi(Hn(i),e,t,n,r,o,1);break}}}function dh(i){const e=i.prev,t=i,n=i.next;if(at(e,t,n)>=0)return!1;const r=e.x,o=t.x,s=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(r,o,s),h=Math.min(a,c,l),d=Math.max(r,o,s),f=Math.max(a,c,l);let v=n.next;for(;v!==e;){if(v.x>=u&&v.x<=d&&v.y>=h&&v.y<=f&&Ti(r,a,o,c,s,l,v.x,v.y)&&at(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function fh(i,e,t,n){const r=i.prev,o=i,s=i.next;if(at(r,o,s)>=0)return!1;const a=r.x,c=o.x,l=s.x,u=r.y,h=o.y,d=s.y,f=Math.min(a,c,l),v=Math.min(u,h,d),x=Math.max(a,c,l),m=Math.max(u,h,d),p=Ms(f,v,e,t,n),R=Ms(x,m,e,t,n);let S=i.prevZ,_=i.nextZ;for(;S&&S.z>=p&&_&&_.z<=R;){if(S.x>=f&&S.x<=x&&S.y>=v&&S.y<=m&&S!==r&&S!==s&&Ti(a,u,c,h,l,d,S.x,S.y)&&at(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=f&&_.x<=x&&_.y>=v&&_.y<=m&&_!==r&&_!==s&&Ti(a,u,c,h,l,d,_.x,_.y)&&at(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=x&&S.y>=v&&S.y<=m&&S!==r&&S!==s&&Ti(a,u,c,h,l,d,S.x,S.y)&&at(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=R;){if(_.x>=f&&_.x<=x&&_.y>=v&&_.y<=m&&_!==r&&_!==s&&Ti(a,u,c,h,l,d,_.x,_.y)&&at(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ph(i,e){let t=i;do{const n=t.prev,r=t.next.next;!gi(n,r)&&zl(n,t,t.next,r)&&Vi(n,r)&&Vi(r,n)&&(e.push(n.i,t.i,r.i),Hi(t),Hi(t.next),t=i=r),t=t.next}while(t!==i);return Hn(t)}function mh(i,e,t,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&Sh(s,a)){let c=Gl(s,a);s=Hn(s,s.next),c=Hn(c,c.next),Gi(s,e,t,n,r,o,0),Gi(c,e,t,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function gh(i,e,t,n){const r=[];for(let o=0,s=e.length;o<s;o++){const a=e[o]*n,c=o<s-1?e[o+1]*n:i.length,l=kl(i,a,c,n,!1);l===l.next&&(l.steiner=!0),r.push(yh(l))}r.sort(vh);for(let o=0;o<r.length;o++)t=_h(r[o],t);return t}function vh(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function _h(i,e){const t=bh(i,e);if(!t)return e;const n=Gl(t,i);return Hn(n,n.next),Hn(t,t.next)}function bh(i,e){let t=e;const n=i.x,r=i.y;let o=-1/0,s;if(gi(i,t))return t;do{if(gi(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>o&&(o=h,s=t.x<t.next.x?t:t.next,h===n))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0;t=s;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Bl(r<l?n:o,r,c,l,r<l?o:n,r,t.x,t.y)){const h=Math.abs(r-t.y)/(n-t.x);Vi(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&xh(s,t)))&&(s=t,u=h)}t=t.next}while(t!==a);return s}function xh(i,e){return at(i.prev,i,e.prev)<0&&at(e.next,i,i.next)<0}function wh(i,e,t,n){let r=i;do r.z===0&&(r.z=Ms(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Mh(r)}function Mh(i){let e,t=1;do{let n=i,r;i=null;let o=null;for(e=0;n;){e++;let s=n,a=0;for(let l=0;l<t&&(a++,s=s.nextZ,!!s);l++);let c=t;for(;a>0||c>0&&s;)a!==0&&(c===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,c--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,t*=2}while(e>1);return i}function Ms(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function yh(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Bl(i,e,t,n,r,o,s,a){return(r-s)*(e-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(r-s)*(n-a)}function Ti(i,e,t,n,r,o,s,a){return!(i===s&&e===a)&&Bl(i,e,t,n,r,o,s,a)}function Sh(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Rh(i,e)&&(Vi(i,e)&&Vi(e,i)&&Eh(i,e)&&(at(i.prev,i,e.prev)||at(i,e.prev,e))||gi(i,e)&&at(i.prev,i,i.next)>0&&at(e.prev,e,e.next)>0)}function at(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function gi(i,e){return i.x===e.x&&i.y===e.y}function zl(i,e,t,n){const r=_r(at(i,e,t)),o=_r(at(i,e,n)),s=_r(at(t,n,i)),a=_r(at(t,n,e));return!!(r!==o&&s!==a||r===0&&vr(i,t,e)||o===0&&vr(i,n,e)||s===0&&vr(t,i,n)||a===0&&vr(t,e,n))}function vr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _r(i){return i>0?1:i<0?-1:0}function Rh(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&zl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Vi(i,e){return at(i.prev,i,i.next)<0?at(i,e,i.next)>=0&&at(i,i.prev,e)>=0:at(i,e,i.prev)<0||at(i,i.next,e)<0}function Eh(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gl(i,e){const t=ys(i.i,i.x,i.y),n=ys(e.i,e.x,e.y),r=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function Ca(i,e,t,n){const r=ys(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Hi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ys(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ah(i,e,t,n){let r=0;for(let o=e,s=t-n;o<t;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}class Th{static triangulate(e,t,n=2){return hh(e,t,n)}}class Kt{static area(e){const t=e.length;let n=0;for(let r=t-1,o=0;o<t;r=o++)n+=e[r].x*e[o].y-e[o].x*e[r].y;return n*.5}static isClockWise(e){return Kt.area(e)<0}static triangulateShape(e,t){const n=[],r=[],o=[];Pa(e),Da(n,e);let s=e.length;t.forEach(Pa);for(let c=0;c<t.length;c++)r.push(s),s+=t[c].length,Da(n,t[c]);const a=Th.triangulate(n,r);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Pa(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Da(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Vs extends Bt{constructor(e=new Gs([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];s(l)}this.setAttribute("position",new ht(r,3)),this.setAttribute("uv",new ht(o,2)),this.computeVertexNormals();function s(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:Lh;let S,_=!1,T,A,U,P;p&&(S=p.getSpacedPoints(u),_=!0,d=!1,T=p.computeFrenetFrames(u,!1),A=new N,U=new N,P=new N),d||(m=0,f=0,v=0,x=0);const y=a.extractPoints(l);let w=y.shape;const L=y.holes;if(!Kt.isClockWise(w)){w=w.reverse();for(let se=0,te=L.length;se<te;se++){const ee=L[se];Kt.isClockWise(ee)&&(L[se]=ee.reverse())}}function z(se){const ee=10000000000000001e-36;let D=se[0];for(let Q=1;Q<=se.length;Q++){const ne=Q%se.length,ie=se[ne],V=ie.x-D.x,ce=ie.y-D.y,b=V*V+ce*ce,g=Math.max(Math.abs(ie.x),Math.abs(ie.y),Math.abs(D.x),Math.abs(D.y)),C=ee*g*g;if(b<=C){se.splice(ne,1),Q--;continue}D=ie}}z(w),L.forEach(z);const W=L.length,Y=w;for(let se=0;se<W;se++){const te=L[se];w=w.concat(te)}function X(se,te,ee){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(te,ee)}const oe=w.length;function q(se,te,ee){let D,Q,ne;const ie=se.x-te.x,V=se.y-te.y,ce=ee.x-se.x,b=ee.y-se.y,g=ie*ie+V*V,C=ie*b-V*ce;if(Math.abs(C)>Number.EPSILON){const B=Math.sqrt(g),Z=Math.sqrt(ce*ce+b*b),G=te.x-V/B,ye=te.y+ie/B,le=ee.x-b/Z,xe=ee.y+ce/Z,ve=((le-G)*b-(xe-ye)*ce)/(ie*b-V*ce);D=G+ie*ve-se.x,Q=ye+V*ve-se.y;const ae=D*D+Q*Q;if(ae<=2)return new Me(D,Q);ne=Math.sqrt(ae/2)}else{let B=!1;ie>Number.EPSILON?ce>Number.EPSILON&&(B=!0):ie<-Number.EPSILON?ce<-Number.EPSILON&&(B=!0):Math.sign(V)===Math.sign(b)&&(B=!0),B?(D=-V,Q=ie,ne=Math.sqrt(g)):(D=ie,Q=V,ne=Math.sqrt(g/2))}return new Me(D/ne,Q/ne)}const he=[];for(let se=0,te=Y.length,ee=te-1,D=se+1;se<te;se++,ee++,D++)ee===te&&(ee=0),D===te&&(D=0),he[se]=q(Y[se],Y[ee],Y[D]);const _e=[];let Ee,$=he.concat();for(let se=0,te=W;se<te;se++){const ee=L[se];Ee=[];for(let D=0,Q=ee.length,ne=Q-1,ie=D+1;D<Q;D++,ne++,ie++)ne===Q&&(ne=0),ie===Q&&(ie=0),Ee[D]=q(ee[D],ee[ne],ee[ie]);_e.push(Ee),$=$.concat(Ee)}let Te;if(m===0)Te=Kt.triangulateShape(Y,L);else{const se=[],te=[];for(let ee=0;ee<m;ee++){const D=ee/m,Q=f*Math.cos(D*Math.PI/2),ne=v*Math.sin(D*Math.PI/2)+x;for(let ie=0,V=Y.length;ie<V;ie++){const ce=X(Y[ie],he[ie],ne);be(ce.x,ce.y,-Q),D===0&&se.push(ce)}for(let ie=0,V=W;ie<V;ie++){const ce=L[ie];Ee=_e[ie];const b=[];for(let g=0,C=ce.length;g<C;g++){const B=X(ce[g],Ee[g],ne);be(B.x,B.y,-Q),D===0&&b.push(B)}D===0&&te.push(b)}}Te=Kt.triangulateShape(se,te)}const Fe=Te.length,Ue=v+x;for(let se=0;se<oe;se++){const te=d?X(w[se],$[se],Ue):w[se];_?(U.copy(T.normals[0]).multiplyScalar(te.x),A.copy(T.binormals[0]).multiplyScalar(te.y),P.copy(S[0]).add(U).add(A),be(P.x,P.y,P.z)):be(te.x,te.y,0)}for(let se=1;se<=u;se++)for(let te=0;te<oe;te++){const ee=d?X(w[te],$[te],Ue):w[te];_?(U.copy(T.normals[se]).multiplyScalar(ee.x),A.copy(T.binormals[se]).multiplyScalar(ee.y),P.copy(S[se]).add(U).add(A),be(P.x,P.y,P.z)):be(ee.x,ee.y,h/u*se)}for(let se=m-1;se>=0;se--){const te=se/m,ee=f*Math.cos(te*Math.PI/2),D=v*Math.sin(te*Math.PI/2)+x;for(let Q=0,ne=Y.length;Q<ne;Q++){const ie=X(Y[Q],he[Q],D);be(ie.x,ie.y,h+ee)}for(let Q=0,ne=L.length;Q<ne;Q++){const ie=L[Q];Ee=_e[Q];for(let V=0,ce=ie.length;V<ce;V++){const b=X(ie[V],Ee[V],D);_?be(b.x,b.y+S[u-1].y,S[u-1].x+ee):be(b.x,b.y,h+ee)}}}H(),j();function H(){const se=r.length/3;if(d){let te=0,ee=oe*te;for(let D=0;D<Fe;D++){const Q=Te[D];ge(Q[2]+ee,Q[1]+ee,Q[0]+ee)}te=u+m*2,ee=oe*te;for(let D=0;D<Fe;D++){const Q=Te[D];ge(Q[0]+ee,Q[1]+ee,Q[2]+ee)}}else{for(let te=0;te<Fe;te++){const ee=Te[te];ge(ee[2],ee[1],ee[0])}for(let te=0;te<Fe;te++){const ee=Te[te];ge(ee[0]+oe*u,ee[1]+oe*u,ee[2]+oe*u)}}n.addGroup(se,r.length/3-se,0)}function j(){const se=r.length/3;let te=0;me(Y,te),te+=Y.length;for(let ee=0,D=L.length;ee<D;ee++){const Q=L[ee];me(Q,te),te+=Q.length}n.addGroup(se,r.length/3-se,1)}function me(se,te){let ee=se.length;for(;--ee>=0;){const D=ee;let Q=ee-1;Q<0&&(Q=se.length-1);for(let ne=0,ie=u+m*2;ne<ie;ne++){const V=oe*ne,ce=oe*(ne+1),b=te+D+V,g=te+Q+V,C=te+Q+ce,B=te+D+ce;ze(b,g,C,B)}}}function be(se,te,ee){c.push(se),c.push(te),c.push(ee)}function ge(se,te,ee){je(se),je(te),je(ee);const D=r.length/3,Q=R.generateTopUV(n,r,D-3,D-2,D-1);E(Q[0]),E(Q[1]),E(Q[2])}function ze(se,te,ee,D){je(se),je(te),je(D),je(te),je(ee),je(D);const Q=r.length/3,ne=R.generateSideWallUV(n,r,Q-6,Q-3,Q-2,Q-1);E(ne[0]),E(ne[1]),E(ne[3]),E(ne[1]),E(ne[2]),E(ne[3])}function je(se){r.push(c[se*3+0]),r.push(c[se*3+1]),r.push(c[se*3+2])}function E(se){o.push(se.x),o.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Uh(t,n,e)}static fromJSON(e,t){const n=[];for(let o=0,s=e.shapes.length;o<s;o++){const a=t[e.shapes[o]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new xs[r.type]().fromJSON(r)),new Vs(n,e.options)}}const Lh={generateTopUV:function(i,e,t,n,r){const o=e[t*3],s=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new Me(o,s),new Me(a,c),new Me(l,u)]},generateSideWallUV:function(i,e,t,n,r,o){const s=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],f=e[r*3+1],v=e[r*3+2],x=e[o*3],m=e[o*3+1],p=e[o*3+2];return Math.abs(a-u)<Math.abs(s-l)?[new Me(s,1-c),new Me(l,1-h),new Me(d,1-v),new Me(x,1-p)]:[new Me(a,1-c),new Me(u,1-h),new Me(f,1-v),new Me(m,1-p)]}};function Uh(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const o=i[n];t.shapes.push(o.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ki extends Bt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,f=[],v=[],x=[],m=[];for(let p=0;p<u;p++){const R=p*d-s;for(let S=0;S<l;S++){const _=S*h-o;v.push(_,-R,0),x.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let R=0;R<a;R++){const S=R+l*p,_=R+l*(p+1),T=R+1+l*(p+1),A=R+1+l*p;f.push(S,_,A),f.push(_,T,A)}this.setIndex(f),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ii extends Bt{constructor(e=new Gs([new Me(0,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],o=[],s=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(s,2));function l(u){const h=r.length/3,d=u.extractPoints(t);let f=d.shape;const v=d.holes;Kt.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=v.length;m<p;m++){const R=v[m];Kt.isClockWise(R)===!0&&(v[m]=R.reverse())}const x=Kt.triangulateShape(f,v);for(let m=0,p=v.length;m<p;m++){const R=v[m];f=f.concat(R)}for(let m=0,p=f.length;m<p;m++){const R=f[m];r.push(R.x,R.y,0),o.push(0,0,1),s.push(R.x,R.y)}for(let m=0,p=x.length;m<p;m++){const R=x[m],S=R[0]+h,_=R[1]+h,T=R[2]+h;n.push(S,_,T),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ch(t,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const s=t[e.shapes[r]];n.push(s)}return new Ii(n,e.curveSegments)}}function Ch(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Vl extends Yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ph extends Yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dh extends Yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ih{constructor(e,t,n){const r=this;let o=!1,s=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],v=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Nh=new Ih;class Hs{constructor(e){this.manager=e!==void 0?e:Nh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Hs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ri=new WeakMap;class Fh extends Hs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=bo.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let h=ri.get(s);h===void 0&&(h=[],ri.set(s,h)),h.push({onLoad:t,onError:r})}return s}const a=Bi("img");function c(){u(),t&&t(this);const h=ri.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}ri.delete(this),o.manager.itemEnd(e)}function l(h){u(),r&&r(h),bo.remove(`image:${e}`);const d=ri.get(this)||[];for(let f=0;f<d.length;f++){const v=d[f];v.onError&&v.onError(h)}ri.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),bo.add(`image:${e}`,a),o.manager.itemStart(e),a.src=e,a}}class Oh extends Hs{constructor(e){super(e)}load(e,t,n,r){const o=new gt,s=new Fh(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class Hl extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Wl extends Hl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const xo=new lt,Ia=new N,Na=new N;class kh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ia.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ia),Na.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Na),t.updateMatrixWorld(),xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ws extends Ul{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bh extends kh{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ss extends Hl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Bh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zh extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Fa(i,e,t,n){const r=Gh(n);switch(t){case vl:return i*e;case bl:return i*e/r.components*r.byteLength;case Ps:return i*e/r.components*r.byteLength;case xl:return i*e*2/r.components*r.byteLength;case Ds:return i*e*2/r.components*r.byteLength;case _l:return i*e*3/r.components*r.byteLength;case Xt:return i*e*4/r.components*r.byteLength;case Is:return i*e*4/r.components*r.byteLength;case Sr:case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Er:case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qo:case Zo:return Math.max(i,16)*Math.max(e,8)/4;case Xo:case Yo:return Math.max(i,8)*Math.max(e,8)/2;case Ko:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case es:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ts:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ns:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case is:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case rs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case os:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ss:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case as:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ls:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case us:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ds:case fs:case ps:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ms:case gs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vs:case _s:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gh(i){switch(i){case Qt:case fl:return{byteLength:1,components:1};case Ni:case pl:case Xi:return{byteLength:2,components:1};case Us:case Cs:return{byteLength:2,components:4};case Gn:case Ls:case dn:return{byteLength:4,components:1};case ml:case gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ts}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ts);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xl(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Vh(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<h.length;f++){const v=h[d],x=h[f];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,v=h.length;f<v;f++){const x=h[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:o,update:s}}var Hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,td=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ud=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Id=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Od=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,af=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,df=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_f=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Af=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,If=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ff=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Of=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Hh,alphahash_pars_fragment:Wh,alphamap_fragment:Xh,alphamap_pars_fragment:qh,alphatest_fragment:Yh,alphatest_pars_fragment:Zh,aomap_fragment:Kh,aomap_pars_fragment:Jh,batching_pars_vertex:jh,batching_vertex:Qh,begin_vertex:$h,beginnormal_vertex:ed,bsdfs:td,iridescence_fragment:nd,bumpmap_pars_fragment:id,clipping_planes_fragment:rd,clipping_planes_pars_fragment:od,clipping_planes_pars_vertex:sd,clipping_planes_vertex:ad,color_fragment:ld,color_pars_fragment:cd,color_pars_vertex:ud,color_vertex:hd,common:dd,cube_uv_reflection_fragment:fd,defaultnormal_vertex:pd,displacementmap_pars_vertex:md,displacementmap_vertex:gd,emissivemap_fragment:vd,emissivemap_pars_fragment:_d,colorspace_fragment:bd,colorspace_pars_fragment:xd,envmap_fragment:wd,envmap_common_pars_fragment:Md,envmap_pars_fragment:yd,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Nd,envmap_vertex:Rd,fog_vertex:Ed,fog_pars_vertex:Ad,fog_fragment:Td,fog_pars_fragment:Ld,gradientmap_pars_fragment:Ud,lightmap_pars_fragment:Cd,lights_lambert_fragment:Pd,lights_lambert_pars_fragment:Dd,lights_pars_begin:Id,lights_toon_fragment:Fd,lights_toon_pars_fragment:Od,lights_phong_fragment:kd,lights_phong_pars_fragment:Bd,lights_physical_fragment:zd,lights_physical_pars_fragment:Gd,lights_fragment_begin:Vd,lights_fragment_maps:Hd,lights_fragment_end:Wd,logdepthbuf_fragment:Xd,logdepthbuf_pars_fragment:qd,logdepthbuf_pars_vertex:Yd,logdepthbuf_vertex:Zd,map_fragment:Kd,map_pars_fragment:Jd,map_particle_fragment:jd,map_particle_pars_fragment:Qd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:ef,morphinstance_vertex:tf,morphcolor_vertex:nf,morphnormal_vertex:rf,morphtarget_pars_vertex:of,morphtarget_vertex:sf,normal_fragment_begin:af,normal_fragment_maps:lf,normal_pars_fragment:cf,normal_pars_vertex:uf,normal_vertex:hf,normalmap_pars_fragment:df,clearcoat_normal_fragment_begin:ff,clearcoat_normal_fragment_maps:pf,clearcoat_pars_fragment:mf,iridescence_pars_fragment:gf,opaque_fragment:vf,packing:_f,premultiplied_alpha_fragment:bf,project_vertex:xf,dithering_fragment:wf,dithering_pars_fragment:Mf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:Rf,shadowmap_pars_vertex:Ef,shadowmap_vertex:Af,shadowmask_pars_fragment:Tf,skinbase_vertex:Lf,skinning_pars_vertex:Uf,skinning_vertex:Cf,skinnormal_vertex:Pf,specularmap_fragment:Df,specularmap_pars_fragment:If,tonemapping_fragment:Nf,tonemapping_pars_fragment:Ff,transmission_fragment:Of,transmission_pars_fragment:kf,uv_pars_fragment:Bf,uv_pars_vertex:zf,uv_vertex:Gf,worldpos_vertex:Vf,background_vert:Hf,background_frag:Wf,backgroundCube_vert:Xf,backgroundCube_frag:qf,cube_vert:Yf,cube_frag:Zf,depth_vert:Kf,depth_frag:Jf,distanceRGBA_vert:jf,distanceRGBA_frag:Qf,equirect_vert:$f,equirect_frag:ep,linedashed_vert:tp,linedashed_frag:np,meshbasic_vert:ip,meshbasic_frag:rp,meshlambert_vert:op,meshlambert_frag:sp,meshmatcap_vert:ap,meshmatcap_frag:lp,meshnormal_vert:cp,meshnormal_frag:up,meshphong_vert:hp,meshphong_frag:dp,meshphysical_vert:fp,meshphysical_frag:pp,meshtoon_vert:mp,meshtoon_frag:gp,points_vert:vp,points_frag:_p,shadow_vert:bp,shadow_frag:xp,sprite_vert:wp,sprite_frag:Mp},Re={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Yt={basic:{uniforms:wt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:wt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:wt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:wt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:wt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:wt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:wt([Re.points,Re.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:wt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:wt([Re.common,Re.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:wt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:wt([Re.sprite,Re.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:wt([Re.common,Re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:wt([Re.lights,Re.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Yt.physical={uniforms:wt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const br={r:0,b:0,g:0},In=new $t,yp=new lt;function Sp(i,e,t,n,r,o,s){const a=new Ze(0);let c=o===!0?0:1,l,u,h=null,d=0,f=null;function v(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:e).get(_)),_}function x(S){let _=!1;const T=v(S);T===null?p(a,c):T&&T.isColor&&(p(T,1),_=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,_){const T=v(_);T&&(T.isCubeTexture||T.mapping===Or)?(u===void 0&&(u=new ut(new Zi(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:mi(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),In.copy(_.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yp.makeRotationFromEuler(In)),u.material.toneMapped=Je.getTransfer(T.colorSpace)!==et,(h!==T||d!==T.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new ut(new Ki(2,2),new gn({name:"BackgroundMaterial",uniforms:mi(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Je.getTransfer(T.colorSpace)!==et,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,_){S.getRGB(br,Ll(i)),n.buffers.color.setClear(br.r,br.g,br.b,_,s)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,_=1){a.set(S),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:x,addToRenderList:m,dispose:R}}function Rp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let o=r,s=!1;function a(w,L,k,z,W){let Y=!1;const X=h(z,k,L);o!==X&&(o=X,l(o.object)),Y=f(w,z,k,W),Y&&v(w,z,k,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,_(w,L,k,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function h(w,L,k){const z=k.wireframe===!0;let W=n[w.id];W===void 0&&(W={},n[w.id]=W);let Y=W[L.id];Y===void 0&&(Y={},W[L.id]=Y);let X=Y[z];return X===void 0&&(X=d(c()),Y[z]=X),X}function d(w){const L=[],k=[],z=[];for(let W=0;W<t;W++)L[W]=0,k[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:z,object:w,attributes:{},index:null}}function f(w,L,k,z){const W=o.attributes,Y=L.attributes;let X=0;const oe=k.getAttributes();for(const q in oe)if(oe[q].location>=0){const _e=W[q];let Ee=Y[q];if(Ee===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(Ee=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(Ee=w.instanceColor)),_e===void 0||_e.attribute!==Ee||Ee&&_e.data!==Ee.data)return!0;X++}return o.attributesNum!==X||o.index!==z}function v(w,L,k,z){const W={},Y=L.attributes;let X=0;const oe=k.getAttributes();for(const q in oe)if(oe[q].location>=0){let _e=Y[q];_e===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor));const Ee={};Ee.attribute=_e,_e&&_e.data&&(Ee.data=_e.data),W[q]=Ee,X++}o.attributes=W,o.attributesNum=X,o.index=z}function x(){const w=o.newAttributes;for(let L=0,k=w.length;L<k;L++)w[L]=0}function m(w){p(w,0)}function p(w,L){const k=o.newAttributes,z=o.enabledAttributes,W=o.attributeDivisors;k[w]=1,z[w]===0&&(i.enableVertexAttribArray(w),z[w]=1),W[w]!==L&&(i.vertexAttribDivisor(w,L),W[w]=L)}function R(){const w=o.newAttributes,L=o.enabledAttributes;for(let k=0,z=L.length;k<z;k++)L[k]!==w[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function S(w,L,k,z,W,Y,X){X===!0?i.vertexAttribIPointer(w,L,k,W,Y):i.vertexAttribPointer(w,L,k,z,W,Y)}function _(w,L,k,z){x();const W=z.attributes,Y=k.getAttributes(),X=L.defaultAttributeValues;for(const oe in Y){const q=Y[oe];if(q.location>=0){let he=W[oe];if(he===void 0&&(oe==="instanceMatrix"&&w.instanceMatrix&&(he=w.instanceMatrix),oe==="instanceColor"&&w.instanceColor&&(he=w.instanceColor)),he!==void 0){const _e=he.normalized,Ee=he.itemSize,$=e.get(he);if($===void 0)continue;const Te=$.buffer,Fe=$.type,Ue=$.bytesPerElement,H=Fe===i.INT||Fe===i.UNSIGNED_INT||he.gpuType===Ls;if(he.isInterleavedBufferAttribute){const j=he.data,me=j.stride,be=he.offset;if(j.isInstancedInterleavedBuffer){for(let ge=0;ge<q.locationSize;ge++)p(q.location+ge,j.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<q.locationSize;ge++)m(q.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let ge=0;ge<q.locationSize;ge++)S(q.location+ge,Ee/q.locationSize,Fe,_e,me*Ue,(be+Ee/q.locationSize*ge)*Ue,H)}else{if(he.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)p(q.location+j,he.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let j=0;j<q.locationSize;j++)m(q.location+j);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let j=0;j<q.locationSize;j++)S(q.location+j,Ee/q.locationSize,Fe,_e,Ee*Ue,Ee/q.locationSize*j*Ue,H)}}else if(X!==void 0){const _e=X[oe];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(q.location,_e);break;case 3:i.vertexAttrib3fv(q.location,_e);break;case 4:i.vertexAttrib4fv(q.location,_e);break;default:i.vertexAttrib1fv(q.location,_e)}}}}R()}function T(){P();for(const w in n){const L=n[w];for(const k in L){const z=L[k];for(const W in z)u(z[W].object),delete z[W];delete L[k]}delete n[w]}}function A(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const k in L){const z=L[k];for(const W in z)u(z[W].object),delete z[W];delete L[k]}delete n[w.id]}function U(w){for(const L in n){const k=n[L];if(k[w.id]===void 0)continue;const z=k[w.id];for(const W in z)u(z[W].object),delete z[W];delete k[w.id]}}function P(){y(),s=!0,o!==r&&(o=r,l(o.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:m,disableUnusedAttributes:R}}function Ep(i,e,t){let n;function r(l){n=l}function o(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function s(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let v=0;v<h;v++)f+=u[v];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<l.length;v++)s(l[v],u[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x]*d[x];t.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ap(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(U){return!(U!==Xt&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){const P=U===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Qt&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==dn&&!P)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:T,maxSamples:A}}function Tp(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new Fn,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||v===null||v.length===0||o&&!m)o?u(null):l();else{const R=o?0:n,S=R*4;let _=p.clippingState||null;c.value=_,_=u(v,d,S,f);for(let T=0;T!==S;++T)_[T]=t[T];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,v!==!0||m===null){const p=f+x*4,R=d.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=f;S!==x;++S,_+=4)s.copy(h[S]).applyMatrix4(R,a),s.normal.toArray(m,_),m[_+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Lp(i){let e=new WeakMap;function t(s,a){return a===Go?s.mapping=hi:a===Vo&&(s.mapping=di),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===Go||a===Vo)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new qu(c.height);return l.fromEquirectangularTexture(i,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const si=4,Oa=[.125,.215,.35,.446,.526,.582],Bn=20,wo=new Ws,ka=new Ze;let Mo=null,yo=0,So=0,Ro=!1;const On=(1+Math.sqrt(5))/2,oi=1/On,Ba=[new N(-On,oi,0),new N(On,oi,0),new N(-oi,0,On),new N(oi,0,On),new N(0,On,-oi),new N(0,On,oi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Up=new N;class za{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,o={}){const{size:s=256,position:a=Up}=o;Mo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ha(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Va(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo,yo,So),this._renderer.xr.enabled=Ro,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hi||e.mapping===di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Xi,format:Xt,colorSpace:fi,depthBuffer:!1},r=Ga(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ga(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(o)),this._blurMaterial=Pp(o,e,t)}return r}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,wo)}_sceneToCubeUV(e,t,n,r,o){const c=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ka),h.toneMapping=fn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const x=new pi({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),m=new ut(new Zi,x);let p=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,p=!0):(x.color.copy(ka),p=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(c.up.set(0,l[S],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[S],o.y,o.z)):_===1?(c.up.set(0,0,l[S]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[S],o.z)):(c.up.set(0,l[S],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[S]));const T=this._cubeSize;xr(r,_*T,S>2?T:0,T,T),h.setRenderTarget(r),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=R}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===hi||e.mapping===di;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ha()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Va());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new ut(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,wo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Ba[(r-o-1)%Ba.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ut(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Bn-1),x=o/v,m=isFinite(o)?1+Math.floor(u*x):Bn;m>Bn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bn}`);const p=[];let R=0;for(let U=0;U<Bn;++U){const P=U/x,y=Math.exp(-P*P/2);p.push(y),U===0?R+=y:U<m&&(R+=2*y)}for(let U=0;U<p.length;U++)p[U]=p[U]/R;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-n;const _=this._sizeLods[r],T=3*_*(r>S-si?r-S+si:0),A=4*(this._cubeSize-_);xr(t,T,A,3*_,2*_),c.setRenderTarget(t),c.render(h,wo)}}function Cp(i){const e=[],t=[],n=[];let r=i;const o=i-si+1+Oa.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let c=1/a;s>i-si?c=Oa[s-i+si-1]:s===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,v=6,x=3,m=2,p=1,R=new Float32Array(x*v*f),S=new Float32Array(m*v*f),_=new Float32Array(p*v*f);for(let A=0;A<f;A++){const U=A%3*2/3-1,P=A>2?0:-1,y=[U,P,0,U+2/3,P,0,U+2/3,P+1,0,U,P,0,U+2/3,P+1,0,U,P+1,0];R.set(y,x*v*A),S.set(d,m*v*A);const w=[A,A,A,A,A,A];_.set(w,p*v*A)}const T=new Bt;T.setAttribute("position",new jt(R,x)),T.setAttribute("uv",new jt(S,m)),T.setAttribute("faceIndex",new jt(_,p)),e.push(T),r>si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ga(i,e,t){const n=new Vn(i,e,t);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Pp(i,e,t){const n=new Float32Array(Bn),r=new N(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Va(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ha(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Xs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Go||c===Vo,u=c===hi||c===di;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new za(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new za(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Ip(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&zi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Np(i,e,t,n){const r={},o=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",s),delete r[d.id];const f=o.get(d);f&&(e.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,v=h.attributes.position;let x=0;if(f!==null){const R=f.array;x=f.version;for(let S=0,_=R.length;S<_;S+=3){const T=R[S+0],A=R[S+1],U=R[S+2];d.push(T,A,A,U,U,T)}}else if(v!==void 0){const R=v.array;x=v.version;for(let S=0,_=R.length/3-1;S<_;S+=3){const T=S+0,A=S+1,U=S+2;d.push(T,A,A,U,U,T)}}else return;const m=new(yl(d)?Tl:Al)(d,1);m.version=x;const p=o.get(h);p&&e.remove(p),o.set(h,m)}function u(h){const d=o.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Fp(i,e,t){let n;function r(d){n=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function c(d,f){i.drawElements(n,f,o,d*s),t.update(f,n,1)}function l(d,f,v){v!==0&&(i.drawElementsInstanced(n,f,o,d*s,v),t.update(f,n,v))}function u(d,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];t.update(m,n,1)}function h(d,f,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/s,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,x,0,v);let p=0;for(let R=0;R<v;R++)p+=f[R]*x[R];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Op(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function kp(i,e,t){const n=new WeakMap,r=new st;function o(s,a,c){const l=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),v===!0&&(S=2),x===!0&&(S=3);let _=a.attributes.position.count*S,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const A=new Float32Array(_*T*4*h),U=new Sl(A,_,T,h);U.type=dn,U.needsUpdate=!0;const P=S*4;for(let w=0;w<h;w++){const L=m[w],k=p[w],z=R[w],W=_*T*4*w;for(let Y=0;Y<L.count;Y++){const X=Y*P;f===!0&&(r.fromBufferAttribute(L,Y),A[W+X+0]=r.x,A[W+X+1]=r.y,A[W+X+2]=r.z,A[W+X+3]=0),v===!0&&(r.fromBufferAttribute(k,Y),A[W+X+4]=r.x,A[W+X+5]=r.y,A[W+X+6]=r.z,A[W+X+7]=0),x===!0&&(r.fromBufferAttribute(z,Y),A[W+X+8]=r.x,A[W+X+9]=r.y,A[W+X+10]=r.z,A[W+X+11]=z.itemSize===4?r.w:1)}}d={count:h,texture:U,size:new Me(_,T)},n.set(a,d),a.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const v=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function Bp(i,e,t,n){let r=new WeakMap;function o(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function s(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:s}}const ql=new gt,Wa=new Pl(1,1),Yl=new Sl,Zl=new Tu,Kl=new Cl,Xa=[],qa=[],Ya=new Float32Array(16),Za=new Float32Array(9),Ka=new Float32Array(4);function wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=Xa[r];if(o===void 0&&(o=new Float32Array(r),Xa[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zr(i,e){let t=qa[e];t===void 0&&(t=new Int32Array(e),qa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Wp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Ka.set(n),i.uniformMatrix2fv(this.addr,!1,Ka),pt(t,n)}}function Xp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Za.set(n),i.uniformMatrix3fv(this.addr,!1,Za),pt(t,n)}}function qp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Ya.set(n),i.uniformMatrix4fv(this.addr,!1,Ya),pt(t,n)}}function Yp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function Jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function jp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function tm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Wa.compareFunction=Ml,o=Wa):o=ql,t.setTexture2D(e||o,r)}function nm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Zl,r)}function im(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Kl,r)}function rm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Yl,r)}function om(i){switch(i){case 5126:return zp;case 35664:return Gp;case 35665:return Vp;case 35666:return Hp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return Zp;case 35668:case 35672:return Kp;case 35669:case 35673:return Jp;case 5125:return jp;case 36294:return Qp;case 36295:return $p;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return rm}}function sm(i,e){i.uniform1fv(this.addr,e)}function am(i,e){const t=wi(e,this.size,2);i.uniform2fv(this.addr,t)}function lm(i,e){const t=wi(e,this.size,3);i.uniform3fv(this.addr,t)}function cm(i,e){const t=wi(e,this.size,4);i.uniform4fv(this.addr,t)}function um(i,e){const t=wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hm(i,e){const t=wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dm(i,e){const t=wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fm(i,e){i.uniform1iv(this.addr,e)}function pm(i,e){i.uniform2iv(this.addr,e)}function mm(i,e){i.uniform3iv(this.addr,e)}function gm(i,e){i.uniform4iv(this.addr,e)}function vm(i,e){i.uniform1uiv(this.addr,e)}function _m(i,e){i.uniform2uiv(this.addr,e)}function bm(i,e){i.uniform3uiv(this.addr,e)}function xm(i,e){i.uniform4uiv(this.addr,e)}function wm(i,e,t){const n=this.cache,r=e.length,o=zr(t,r);ft(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||ql,o[s])}function Mm(i,e,t){const n=this.cache,r=e.length,o=zr(t,r);ft(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Zl,o[s])}function ym(i,e,t){const n=this.cache,r=e.length,o=zr(t,r);ft(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Kl,o[s])}function Sm(i,e,t){const n=this.cache,r=e.length,o=zr(t,r);ft(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Yl,o[s])}function Rm(i){switch(i){case 5126:return sm;case 35664:return am;case 35665:return lm;case 35666:return cm;case 35674:return um;case 35675:return hm;case 35676:return dm;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return vm;case 36294:return _m;case 36295:return bm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Sm}}class Em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=om(t.type)}}class Am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rm(t.type)}}class Tm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function Ja(i,e){i.seq.push(e),i.map[e.id]=e}function Lm(i,e,t){const n=i.name,r=n.length;for(Eo.lastIndex=0;;){const o=Eo.exec(n),s=Eo.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){Ja(t,l===void 0?new Em(a,i,e):new Am(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Tm(a),Ja(t,h)),t=h}}}class Tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);Lm(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function ja(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Um=37297;let Cm=0;function Pm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const Qa=new We;function Dm(i){Je._getMatrix(Qa,Je.workingColorSpace,i);const e=`mat3( ${Qa.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Pr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $a(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+Pm(i.getShaderSource(e),a)}else return o}function Im(i,e){const t=Dm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nm(i,e){let t;switch(e){case nu:t="Linear";break;case iu:t="Reinhard";break;case ru:t="Cineon";break;case ou:t="ACESFilmic";break;case au:t="AgX";break;case lu:t="Neutral";break;case su:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wr=new N;function Fm(){Je.getLuminanceCoefficients(wr);const i=wr.x.toFixed(4),e=wr.y.toFixed(4),t=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Om(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function km(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Li(i){return i!==""}function el(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rs(i){return i.replace(zm,Vm)}const Gm=new Map;function Vm(i,e){let t=Xe[e];if(t===void 0){const n=Gm.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rs(t)}const Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(i){return i.replace(Hm,Wm)}function Wm(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function il(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function qm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hi:case di:e="ENVMAP_TYPE_CUBE";break;case Or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ym(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case di:e="ENVMAP_MODE_REFRACTION";break}return e}function Zm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hl:e="ENVMAP_BLENDING_MULTIPLY";break;case eu:e="ENVMAP_BLENDING_MIX";break;case tu:e="ENVMAP_BLENDING_ADD";break}return e}function Km(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jm(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const c=Xm(t),l=qm(t),u=Ym(t),h=Zm(t),d=Km(t),f=Om(t),v=km(o),x=r.createProgram();let m,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Li).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Li).join(`
`),p.length>0&&(p+=`
`)):(m=[il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),p=[il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==fn?Nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Im("linearToOutputTexel",t.outputColorSpace),Fm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),s=Rs(s),s=el(s,t),s=tl(s,t),a=Rs(a),a=el(a,t),a=tl(a,t),s=nl(s),a=nl(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===da?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===da?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=R+m+s,_=R+p+a,T=ja(r,r.VERTEX_SHADER,S),A=ja(r,r.FRAGMENT_SHADER,_);r.attachShader(x,T),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function U(L){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(x)||"",z=r.getShaderInfoLog(T)||"",W=r.getShaderInfoLog(A)||"",Y=k.trim(),X=z.trim(),oe=W.trim();let q=!0,he=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,T,A);else{const _e=$a(r,T,"vertex"),Ee=$a(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+_e+`
`+Ee)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||oe==="")&&(he=!1);he&&(L.diagnostics={runnable:q,programLog:Y,vertexShader:{log:X,prefix:m},fragmentShader:{log:oe,prefix:p}})}r.deleteShader(T),r.deleteShader(A),P=new Tr(r,x),y=Bm(r,x)}let P;this.getUniforms=function(){return P===void 0&&U(this),P};let y;this.getAttributes=function(){return y===void 0&&U(this),y};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(x,Um)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=A,this}let jm=0;class Qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $m(e),t.set(e,n)),n}}class $m{constructor(e){this.id=jm++,this.code=e,this.usedTimes=0}}function e0(i,e,t,n,r,o,s){const a=new Rl,c=new Qm,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,w,L,k,z){const W=k.fog,Y=z.geometry,X=y.isMeshStandardMaterial?k.environment:null,oe=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),q=oe&&oe.mapping===Or?oe.image.height:null,he=v[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const _e=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ee=_e!==void 0?_e.length:0;let $=0;Y.morphAttributes.position!==void 0&&($=1),Y.morphAttributes.normal!==void 0&&($=2),Y.morphAttributes.color!==void 0&&($=3);let Te,Fe,Ue,H;if(he){const Qe=Yt[he];Te=Qe.vertexShader,Fe=Qe.fragmentShader}else Te=y.vertexShader,Fe=y.fragmentShader,c.update(y),Ue=c.getVertexShaderID(y),H=c.getFragmentShaderID(y);const j=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),be=z.isInstancedMesh===!0,ge=z.isBatchedMesh===!0,ze=!!y.map,je=!!y.matcap,E=!!oe,se=!!y.aoMap,te=!!y.lightMap,ee=!!y.bumpMap,D=!!y.normalMap,Q=!!y.displacementMap,ne=!!y.emissiveMap,ie=!!y.metalnessMap,V=!!y.roughnessMap,ce=y.anisotropy>0,b=y.clearcoat>0,g=y.dispersion>0,C=y.iridescence>0,B=y.sheen>0,Z=y.transmission>0,G=ce&&!!y.anisotropyMap,ye=b&&!!y.clearcoatMap,le=b&&!!y.clearcoatNormalMap,xe=b&&!!y.clearcoatRoughnessMap,ve=C&&!!y.iridescenceMap,ae=C&&!!y.iridescenceThicknessMap,ue=B&&!!y.sheenColorMap,Pe=B&&!!y.sheenRoughnessMap,De=!!y.specularMap,Se=!!y.specularColorMap,Ve=!!y.specularIntensityMap,I=Z&&!!y.transmissionMap,de=Z&&!!y.thicknessMap,we=!!y.gradientMap,Ce=!!y.alphaMap,fe=y.alphaTest>0,re=!!y.alphaHash,Ne=!!y.extensions;let He=fn;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(He=i.toneMapping);const nt={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:Te,fragmentShader:Fe,defines:y.defines,customVertexShaderID:Ue,customFragmentShaderID:H,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ge,batchingColor:ge&&z._colorsTexture!==null,instancing:be,instancingColor:be&&z.instanceColor!==null,instancingMorph:be&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:fi,alphaToCoverage:!!y.alphaToCoverage,map:ze,matcap:je,envMap:E,envMapMode:E&&oe.mapping,envMapCubeUVHeight:q,aoMap:se,lightMap:te,bumpMap:ee,normalMap:D,displacementMap:d&&Q,emissiveMap:ne,normalMapObjectSpace:D&&y.normalMapType===du,normalMapTangentSpace:D&&y.normalMapType===wl,metalnessMap:ie,roughnessMap:V,anisotropy:ce,anisotropyMap:G,clearcoat:b,clearcoatMap:ye,clearcoatNormalMap:le,clearcoatRoughnessMap:xe,dispersion:g,iridescence:C,iridescenceMap:ve,iridescenceThicknessMap:ae,sheen:B,sheenColorMap:ue,sheenRoughnessMap:Pe,specularMap:De,specularColorMap:Se,specularIntensityMap:Ve,transmission:Z,transmissionMap:I,thicknessMap:de,gradientMap:we,opaque:y.transparent===!1&&y.blending===li&&y.alphaToCoverage===!1,alphaMap:Ce,alphaTest:fe,alphaHash:re,combine:y.combine,mapUv:ze&&x(y.map.channel),aoMapUv:se&&x(y.aoMap.channel),lightMapUv:te&&x(y.lightMap.channel),bumpMapUv:ee&&x(y.bumpMap.channel),normalMapUv:D&&x(y.normalMap.channel),displacementMapUv:Q&&x(y.displacementMap.channel),emissiveMapUv:ne&&x(y.emissiveMap.channel),metalnessMapUv:ie&&x(y.metalnessMap.channel),roughnessMapUv:V&&x(y.roughnessMap.channel),anisotropyMapUv:G&&x(y.anisotropyMap.channel),clearcoatMapUv:ye&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(y.sheenRoughnessMap.channel),specularMapUv:De&&x(y.specularMap.channel),specularColorMapUv:Se&&x(y.specularColorMap.channel),specularIntensityMapUv:Ve&&x(y.specularIntensityMap.channel),transmissionMapUv:I&&x(y.transmissionMap.channel),thicknessMapUv:de&&x(y.thicknessMap.channel),alphaMapUv:Ce&&x(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(D||ce),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(ze||Ce),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:ze&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===et,decodeVideoTextureEmissive:ne&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ot,flipSided:y.side===yt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ne&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&y.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function p(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)w.push(L),w.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(R(w,y),S(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function R(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const w=v[y.type];let L;if(w){const k=Yt[w];L=Vu.clone(k.uniforms)}else L=y.uniforms;return L}function T(y,w){let L;for(let k=0,z=u.length;k<z;k++){const W=u[k];if(W.cacheKey===w){L=W,++L.usedTimes;break}}return L===void 0&&(L=new Jm(i,w,y,o),u.push(L)),L}function A(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function U(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:A,releaseShaderCache:U,programs:u,dispose:P}}function t0(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,c){i.get(s)[a]=c}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function n0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ol(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(h,d,f,v,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,v,x,m){const p=s(h,d,f,v,x,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,v,x,m){const p=s(h,d,f,v,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||n0),n.length>1&&n.sort(d||rl),r.length>1&&r.sort(d||rl)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:c,finish:u,sort:l}}function i0(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new ol,i.set(n,[s])):r>=o.length?(s=new ol,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function r0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ze};break;case"SpotLight":t={position:new N,direction:new N,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function o0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let s0=0;function a0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function l0(i){const e=new r0,t=o0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,o=new lt,s=new lt;function a(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,v=0,x=0,m=0,p=0,R=0,S=0,_=0,T=0,A=0,U=0;l.sort(a0);for(let y=0,w=l.length;y<w;y++){const L=l[y],k=L.color,z=L.intensity,W=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*z,h+=k.g*z,d+=k.b*z;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],z);U++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const oe=L.shadow,q=t.get(L);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=L.shadow.matrix,R++}n.directional[f]=X,f++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(k).multiplyScalar(z),X.distance=W,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[x]=X;const oe=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,oe.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=oe.matrix,L.castShadow){const q=t.get(L);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=Y,_++}x++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(k).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const oe=L.shadow,q=t.get(L);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,q.shadowCameraNear=oe.camera.near,q.shadowCameraFar=oe.camera.far,n.pointShadow[v]=q,n.pointShadowMap[v]=Y,n.pointShadowMatrix[v]=L.shadow.matrix,S++}n.point[v]=X,v++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(z),X.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==v||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==R||P.numPointShadows!==S||P.numSpotShadows!==_||P.numSpotMaps!==T||P.numLightProbes!==U)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=U,P.directionalLength=f,P.pointLength=v,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=R,P.numPointShadows=S,P.numSpotShadows=_,P.numSpotMaps=T,P.numLightProbes=U,n.version=s0++)}function c(l,u){let h=0,d=0,f=0,v=0,x=0;const m=u.matrixWorldInverse;for(let p=0,R=l.length;p<R;p++){const S=l[p];if(S.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(S.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),s.identity(),o.copy(S.matrixWorld),o.premultiply(m),s.extractRotation(o),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),v++}else if(S.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function sl(i){const e=new l0(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function s(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function c0(i){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new sl(i),e.set(r,[a])):o>=s.length?(a=new sl(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const u0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function d0(i,e,t){let n=new ks;const r=new Me,o=new Me,s=new st,a=new Ph({depthPacking:hu}),c=new Dh,l={},u=t.maxTextureSize,h={[mn]:yt,[yt]:mn,[Ot]:Ot},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:u0,fragmentShader:h0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Bt;v.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ut(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul;let p=this.type;this.render=function(A,U,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=i.getRenderTarget(),w=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(En),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=p!==cn&&this.type===cn,W=p===cn&&this.type!==cn;for(let Y=0,X=A.length;Y<X;Y++){const oe=A[Y],q=oe.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const he=q.getFrameExtents();if(r.multiply(he),o.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/he.x),r.x=o.x*he.x,q.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/he.y),r.y=o.y*he.y,q.mapSize.y=o.y)),q.map===null||z===!0||W===!0){const Ee=this.type!==cn?{minFilter:Pt,magFilter:Pt}:{};q.map!==null&&q.map.dispose(),q.map=new Vn(r.x,r.y,Ee),q.map.texture.name=oe.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const _e=q.getViewportCount();for(let Ee=0;Ee<_e;Ee++){const $=q.getViewport(Ee);s.set(o.x*$.x,o.y*$.y,o.x*$.z,o.y*$.w),k.viewport(s),q.updateMatrices(oe,Ee),n=q.getFrustum(),_(U,P,q.camera,oe,this.type)}q.isPointLightShadow!==!0&&this.type===cn&&R(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,w,L)};function R(A,U){const P=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vn(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(U,null,P,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(U,null,P,f,x,null)}function S(A,U,P,y){let w=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)w=L;else if(w=P.isPointLight===!0?c:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const k=w.uuid,z=U.uuid;let W=l[k];W===void 0&&(W={},l[k]=W);let Y=W[z];Y===void 0&&(Y=w.clone(),W[z]=Y,U.addEventListener("dispose",T)),w=Y}if(w.visible=U.visible,w.wireframe=U.wireframe,y===cn?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:h[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=i.properties.get(w);k.light=P}return w}function _(A,U,P,y,w){if(A.visible===!1)return;if(A.layers.test(U.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===cn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const z=e.update(A),W=A.material;if(Array.isArray(W)){const Y=z.groups;for(let X=0,oe=Y.length;X<oe;X++){const q=Y[X],he=W[q.materialIndex];if(he&&he.visible){const _e=S(A,he,y,w);A.onBeforeShadow(i,A,U,P,z,_e,q),i.renderBufferDirect(P,null,z,_e,A,q),A.onAfterShadow(i,A,U,P,z,_e,q)}}}else if(W.visible){const Y=S(A,W,y,w);A.onBeforeShadow(i,A,U,P,z,Y,null),i.renderBufferDirect(P,null,z,Y,A,null),A.onAfterShadow(i,A,U,P,z,Y,null)}}const k=A.children;for(let z=0,W=k.length;z<W;z++)_(k[z],U,P,y,w)}function T(A){A.target.removeEventListener("dispose",T);for(const P in l){const y=l[P],w=A.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}const f0={[Io]:No,[Fo]:Bo,[Oo]:zo,[ui]:ko,[No]:Io,[Bo]:Fo,[zo]:Oo,[ko]:ui};function p0(i,e){function t(){let I=!1;const de=new st;let we=null;const Ce=new st(0,0,0,0);return{setMask:function(fe){we!==fe&&!I&&(i.colorMask(fe,fe,fe,fe),we=fe)},setLocked:function(fe){I=fe},setClear:function(fe,re,Ne,He,nt){nt===!0&&(fe*=He,re*=He,Ne*=He),de.set(fe,re,Ne,He),Ce.equals(de)===!1&&(i.clearColor(fe,re,Ne,He),Ce.copy(de))},reset:function(){I=!1,we=null,Ce.set(-1,0,0,0)}}}function n(){let I=!1,de=!1,we=null,Ce=null,fe=null;return{setReversed:function(re){if(de!==re){const Ne=e.get("EXT_clip_control");re?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),de=re;const He=fe;fe=null,this.setClear(He)}},getReversed:function(){return de},setTest:function(re){re?j(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(re){we!==re&&!I&&(i.depthMask(re),we=re)},setFunc:function(re){if(de&&(re=f0[re]),Ce!==re){switch(re){case Io:i.depthFunc(i.NEVER);break;case No:i.depthFunc(i.ALWAYS);break;case Fo:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case Oo:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=re}},setLocked:function(re){I=re},setClear:function(re){fe!==re&&(de&&(re=1-re),i.clearDepth(re),fe=re)},reset:function(){I=!1,we=null,Ce=null,fe=null,de=!1}}}function r(){let I=!1,de=null,we=null,Ce=null,fe=null,re=null,Ne=null,He=null,nt=null;return{setTest:function(Qe){I||(Qe?j(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Qe){de!==Qe&&!I&&(i.stencilMask(Qe),de=Qe)},setFunc:function(Qe,nn,qt){(we!==Qe||Ce!==nn||fe!==qt)&&(i.stencilFunc(Qe,nn,qt),we=Qe,Ce=nn,fe=qt)},setOp:function(Qe,nn,qt){(re!==Qe||Ne!==nn||He!==qt)&&(i.stencilOp(Qe,nn,qt),re=Qe,Ne=nn,He=qt)},setLocked:function(Qe){I=Qe},setClear:function(Qe){nt!==Qe&&(i.clearStencil(Qe),nt=Qe)},reset:function(){I=!1,de=null,we=null,Ce=null,fe=null,re=null,Ne=null,He=null,nt=null}}}const o=new t,s=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],v=null,x=!1,m=null,p=null,R=null,S=null,_=null,T=null,A=null,U=new Ze(0,0,0),P=0,y=!1,w=null,L=null,k=null,z=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,oe=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=oe>=1):q.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=oe>=2);let he=null,_e={};const Ee=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),Te=new st().fromArray(Ee),Fe=new st().fromArray($);function Ue(I,de,we,Ce){const fe=new Uint8Array(4),re=i.createTexture();i.bindTexture(I,re),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<we;Ne++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(de+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return re}const H={};H[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),j(i.DEPTH_TEST),s.setFunc(ui),ee(!1),D(sa),j(i.CULL_FACE),se(En);function j(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function me(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function be(I,de){return h[I]!==de?(i.bindFramebuffer(I,de),h[I]=de,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function ge(I,de){let we=f,Ce=!1;if(I){we=d.get(de),we===void 0&&(we=[],d.set(de,we));const fe=I.textures;if(we.length!==fe.length||we[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ne=fe.length;re<Ne;re++)we[re]=i.COLOR_ATTACHMENT0+re;we.length=fe.length,Ce=!0}}else we[0]!==i.BACK&&(we[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(we)}function ze(I){return v!==I?(i.useProgram(I),v=I,!0):!1}const je={[kn]:i.FUNC_ADD,[Oc]:i.FUNC_SUBTRACT,[kc]:i.FUNC_REVERSE_SUBTRACT};je[Bc]=i.MIN,je[zc]=i.MAX;const E={[Gc]:i.ZERO,[Vc]:i.ONE,[Hc]:i.SRC_COLOR,[Po]:i.SRC_ALPHA,[Kc]:i.SRC_ALPHA_SATURATE,[Yc]:i.DST_COLOR,[Xc]:i.DST_ALPHA,[Wc]:i.ONE_MINUS_SRC_COLOR,[Do]:i.ONE_MINUS_SRC_ALPHA,[Zc]:i.ONE_MINUS_DST_COLOR,[qc]:i.ONE_MINUS_DST_ALPHA,[Jc]:i.CONSTANT_COLOR,[jc]:i.ONE_MINUS_CONSTANT_COLOR,[Qc]:i.CONSTANT_ALPHA,[$c]:i.ONE_MINUS_CONSTANT_ALPHA};function se(I,de,we,Ce,fe,re,Ne,He,nt,Qe){if(I===En){x===!0&&(me(i.BLEND),x=!1);return}if(x===!1&&(j(i.BLEND),x=!0),I!==Fc){if(I!==m||Qe!==y){if((p!==kn||_!==kn)&&(i.blendEquation(i.FUNC_ADD),p=kn,_=kn),Qe)switch(I){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case aa:i.blendFunc(i.ONE,i.ONE);break;case la:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ca:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case la:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ca:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}R=null,S=null,T=null,A=null,U.set(0,0,0),P=0,m=I,y=Qe}return}fe=fe||de,re=re||we,Ne=Ne||Ce,(de!==p||fe!==_)&&(i.blendEquationSeparate(je[de],je[fe]),p=de,_=fe),(we!==R||Ce!==S||re!==T||Ne!==A)&&(i.blendFuncSeparate(E[we],E[Ce],E[re],E[Ne]),R=we,S=Ce,T=re,A=Ne),(He.equals(U)===!1||nt!==P)&&(i.blendColor(He.r,He.g,He.b,nt),U.copy(He),P=nt),m=I,y=!1}function te(I,de){I.side===Ot?me(i.CULL_FACE):j(i.CULL_FACE);let we=I.side===yt;de&&(we=!we),ee(we),I.blending===li&&I.transparent===!1?se(En):se(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),o.setMask(I.colorWrite);const Ce=I.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(I){w!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),w=I)}function D(I){I!==Dc?(j(i.CULL_FACE),I!==L&&(I===sa?i.cullFace(i.BACK):I===Ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),L=I}function Q(I){I!==k&&(X&&i.lineWidth(I),k=I)}function ne(I,de,we){I?(j(i.POLYGON_OFFSET_FILL),(z!==de||W!==we)&&(i.polygonOffset(de,we),z=de,W=we)):me(i.POLYGON_OFFSET_FILL)}function ie(I){I?j(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function V(I){I===void 0&&(I=i.TEXTURE0+Y-1),he!==I&&(i.activeTexture(I),he=I)}function ce(I,de,we){we===void 0&&(he===null?we=i.TEXTURE0+Y-1:we=he);let Ce=_e[we];Ce===void 0&&(Ce={type:void 0,texture:void 0},_e[we]=Ce),(Ce.type!==I||Ce.texture!==de)&&(he!==we&&(i.activeTexture(we),he=we),i.bindTexture(I,de||H[I]),Ce.type=I,Ce.texture=de)}function b(){const I=_e[he];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(I){Te.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Te.copy(I))}function Pe(I){Fe.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Fe.copy(I))}function De(I,de){let we=l.get(de);we===void 0&&(we=new WeakMap,l.set(de,we));let Ce=we.get(I);Ce===void 0&&(Ce=i.getUniformBlockIndex(de,I.name),we.set(I,Ce))}function Se(I,de){const Ce=l.get(de).get(I);c.get(de)!==Ce&&(i.uniformBlockBinding(de,Ce,I.__bindingPointIndex),c.set(de,Ce))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,_e={},h={},d=new WeakMap,f=[],v=null,x=!1,m=null,p=null,R=null,S=null,_=null,T=null,A=null,U=new Ze(0,0,0),P=0,y=!1,w=null,L=null,k=null,z=null,W=null,Te.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:j,disable:me,bindFramebuffer:be,drawBuffers:ge,useProgram:ze,setBlending:se,setMaterial:te,setFlipSided:ee,setCullFace:D,setLineWidth:Q,setPolygonOffset:ne,setScissorTest:ie,activeTexture:V,bindTexture:ce,unbindTexture:b,compressedTexImage2D:g,compressedTexImage3D:C,texImage2D:ve,texImage3D:ae,updateUBOMapping:De,uniformBlockBinding:Se,texStorage2D:le,texStorage3D:xe,texSubImage2D:B,texSubImage3D:Z,compressedTexSubImage2D:G,compressedTexSubImage3D:ye,scissor:ue,viewport:Pe,reset:Ve}}function m0(i,e,t,n,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,g){return f?new OffscreenCanvas(b,g):Bi("canvas")}function x(b,g,C){let B=1;const Z=ce(b);if((Z.width>C||Z.height>C)&&(B=C/Math.max(Z.width,Z.height)),B<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const G=Math.floor(B*Z.width),ye=Math.floor(B*Z.height);h===void 0&&(h=v(G,ye));const le=g?v(G,ye):h;return le.width=G,le.height=ye,le.getContext("2d").drawImage(b,0,0,G,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+ye+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function R(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(b,g,C,B,Z=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=g;if(g===i.RED&&(C===i.FLOAT&&(G=i.R32F),C===i.HALF_FLOAT&&(G=i.R16F),C===i.UNSIGNED_BYTE&&(G=i.R8)),g===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.R8UI),C===i.UNSIGNED_SHORT&&(G=i.R16UI),C===i.UNSIGNED_INT&&(G=i.R32UI),C===i.BYTE&&(G=i.R8I),C===i.SHORT&&(G=i.R16I),C===i.INT&&(G=i.R32I)),g===i.RG&&(C===i.FLOAT&&(G=i.RG32F),C===i.HALF_FLOAT&&(G=i.RG16F),C===i.UNSIGNED_BYTE&&(G=i.RG8)),g===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RG8UI),C===i.UNSIGNED_SHORT&&(G=i.RG16UI),C===i.UNSIGNED_INT&&(G=i.RG32UI),C===i.BYTE&&(G=i.RG8I),C===i.SHORT&&(G=i.RG16I),C===i.INT&&(G=i.RG32I)),g===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RGB8UI),C===i.UNSIGNED_SHORT&&(G=i.RGB16UI),C===i.UNSIGNED_INT&&(G=i.RGB32UI),C===i.BYTE&&(G=i.RGB8I),C===i.SHORT&&(G=i.RGB16I),C===i.INT&&(G=i.RGB32I)),g===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),C===i.UNSIGNED_INT&&(G=i.RGBA32UI),C===i.BYTE&&(G=i.RGBA8I),C===i.SHORT&&(G=i.RGBA16I),C===i.INT&&(G=i.RGBA32I)),g===i.RGB&&(C===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),C===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),g===i.RGBA){const ye=Z?Pr:Je.getTransfer(B);C===i.FLOAT&&(G=i.RGBA32F),C===i.HALF_FLOAT&&(G=i.RGBA16F),C===i.UNSIGNED_BYTE&&(G=ye===et?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function _(b,g){let C;return b?g===null||g===Gn||g===Fi?C=i.DEPTH24_STENCIL8:g===dn?C=i.DEPTH32F_STENCIL8:g===Ni&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Gn||g===Fi?C=i.DEPTH_COMPONENT24:g===dn?C=i.DEPTH_COMPONENT32F:g===Ni&&(C=i.DEPTH_COMPONENT16),C}function T(b,g){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Pt&&b.minFilter!==kt?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function A(b){const g=b.target;g.removeEventListener("dispose",A),P(g),g.isVideoTexture&&u.delete(g)}function U(b){const g=b.target;g.removeEventListener("dispose",U),w(g)}function P(b){const g=n.get(b);if(g.__webglInit===void 0)return;const C=b.source,B=d.get(C);if(B){const Z=B[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(b),Object.keys(B).length===0&&d.delete(C)}n.remove(b)}function y(b){const g=n.get(b);i.deleteTexture(g.__webglTexture);const C=b.source,B=d.get(C);delete B[g.__cacheKey],s.memory.textures--}function w(b){const g=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(g.__webglFramebuffer[B]))for(let Z=0;Z<g.__webglFramebuffer[B].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[B][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[B]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[B])}else{if(Array.isArray(g.__webglFramebuffer))for(let B=0;B<g.__webglFramebuffer.length;B++)i.deleteFramebuffer(g.__webglFramebuffer[B]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let B=0;B<g.__webglColorRenderbuffer.length;B++)g.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[B]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const C=b.textures;for(let B=0,Z=C.length;B<Z;B++){const G=n.get(C[B]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),s.memory.textures--),n.remove(C[B])}n.remove(b)}let L=0;function k(){L=0}function z(){const b=L;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),L+=1,b}function W(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function Y(b,g){const C=n.get(b);if(b.isVideoTexture&&ie(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&C.__version!==b.version){const B=b.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(C,b,g);return}}else b.isExternalTexture&&(C.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+g)}function X(b,g){const C=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&C.__version!==b.version){H(C,b,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+g)}function oe(b,g){const C=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&C.__version!==b.version){H(C,b,g);return}t.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+g)}function q(b,g){const C=n.get(b);if(b.version>0&&C.__version!==b.version){j(C,b,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+g)}const he={[Ho]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[Wo]:i.MIRRORED_REPEAT},_e={[Pt]:i.NEAREST,[cu]:i.NEAREST_MIPMAP_NEAREST,[Qi]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},Ee={[fu]:i.NEVER,[bu]:i.ALWAYS,[pu]:i.LESS,[Ml]:i.LEQUAL,[mu]:i.EQUAL,[_u]:i.GEQUAL,[gu]:i.GREATER,[vu]:i.NOTEQUAL};function $(b,g){if(g.type===dn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===kt||g.magFilter===Wr||g.magFilter===Qi||g.magFilter===Sn||g.minFilter===kt||g.minFilter===Wr||g.minFilter===Qi||g.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,he[g.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,he[g.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,he[g.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,_e[g.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,_e[g.minFilter]),g.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ee[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Pt||g.minFilter!==Qi&&g.minFilter!==Sn||g.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Te(b,g){let C=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",A));const B=g.source;let Z=d.get(B);Z===void 0&&(Z={},d.set(B,Z));const G=W(g);if(G!==b.__cacheKey){Z[G]===void 0&&(Z[G]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,C=!0),Z[G].usedTimes++;const ye=Z[b.__cacheKey];ye!==void 0&&(Z[b.__cacheKey].usedTimes--,ye.usedTimes===0&&y(g)),b.__cacheKey=G,b.__webglTexture=Z[G].texture}return C}function Fe(b,g,C){return Math.floor(Math.floor(b/C)/g)}function Ue(b,g,C,B){const G=b.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,C,B,g.data);else{G.sort((ae,ue)=>ae.start-ue.start);let ye=0;for(let ae=1;ae<G.length;ae++){const ue=G[ye],Pe=G[ae],De=ue.start+ue.count,Se=Fe(Pe.start,g.width,4),Ve=Fe(ue.start,g.width,4);Pe.start<=De+1&&Se===Ve&&Fe(Pe.start+Pe.count-1,g.width,4)===Se?ue.count=Math.max(ue.count,Pe.start+Pe.count-ue.start):(++ye,G[ye]=Pe)}G.length=ye+1;const le=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ae=0,ue=G.length;ae<ue;ae++){const Pe=G[ae],De=Math.floor(Pe.start/4),Se=Math.ceil(Pe.count/4),Ve=De%g.width,I=Math.floor(De/g.width),de=Se,we=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ve,I,de,we,C,B,g.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function H(b,g,C){let B=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(B=i.TEXTURE_3D);const Z=Te(b,g),G=g.source;t.bindTexture(B,b.__webglTexture,i.TEXTURE0+C);const ye=n.get(G);if(G.version!==ye.__version||Z===!0){t.activeTexture(i.TEXTURE0+C);const le=Je.getPrimaries(Je.workingColorSpace),xe=g.colorSpace===hn?null:Je.getPrimaries(g.colorSpace),ve=g.colorSpace===hn||le===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ae=x(g.image,!1,r.maxTextureSize);ae=V(g,ae);const ue=o.convert(g.format,g.colorSpace),Pe=o.convert(g.type);let De=S(g.internalFormat,ue,Pe,g.colorSpace,g.isVideoTexture);$(B,g);let Se;const Ve=g.mipmaps,I=g.isVideoTexture!==!0,de=ye.__version===void 0||Z===!0,we=G.dataReady,Ce=T(g,ae);if(g.isDepthTexture)De=_(g.format===ki,g.type),de&&(I?t.texStorage2D(i.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,De,ae.width,ae.height,0,ue,Pe,null));else if(g.isDataTexture)if(Ve.length>0){I&&de&&t.texStorage2D(i.TEXTURE_2D,Ce,De,Ve[0].width,Ve[0].height);for(let fe=0,re=Ve.length;fe<re;fe++)Se=Ve[fe],I?we&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,ue,Pe,Se.data):t.texImage2D(i.TEXTURE_2D,fe,De,Se.width,Se.height,0,ue,Pe,Se.data);g.generateMipmaps=!1}else I?(de&&t.texStorage2D(i.TEXTURE_2D,Ce,De,ae.width,ae.height),we&&Ue(g,ae,ue,Pe)):t.texImage2D(i.TEXTURE_2D,0,De,ae.width,ae.height,0,ue,Pe,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){I&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,De,Ve[0].width,Ve[0].height,ae.depth);for(let fe=0,re=Ve.length;fe<re;fe++)if(Se=Ve[fe],g.format!==Xt)if(ue!==null)if(I){if(we)if(g.layerUpdates.size>0){const Ne=Fa(Se.width,Se.height,g.format,g.type);for(const He of g.layerUpdates){const nt=Se.data.subarray(He*Ne/Se.data.BYTES_PER_ELEMENT,(He+1)*Ne/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,He,Se.width,Se.height,1,ue,nt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Se.width,Se.height,ae.depth,ue,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,De,Se.width,Se.height,ae.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Se.width,Se.height,ae.depth,ue,Pe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,De,Se.width,Se.height,ae.depth,0,ue,Pe,Se.data)}else{I&&de&&t.texStorage2D(i.TEXTURE_2D,Ce,De,Ve[0].width,Ve[0].height);for(let fe=0,re=Ve.length;fe<re;fe++)Se=Ve[fe],g.format!==Xt?ue!==null?I?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,ue,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,De,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?we&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,ue,Pe,Se.data):t.texImage2D(i.TEXTURE_2D,fe,De,Se.width,Se.height,0,ue,Pe,Se.data)}else if(g.isDataArrayTexture)if(I){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,De,ae.width,ae.height,ae.depth),we)if(g.layerUpdates.size>0){const fe=Fa(ae.width,ae.height,g.format,g.type);for(const re of g.layerUpdates){const Ne=ae.data.subarray(re*fe/ae.data.BYTES_PER_ELEMENT,(re+1)*fe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,ae.width,ae.height,1,ue,Pe,Ne)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ue,Pe,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,ue,Pe,ae.data);else if(g.isData3DTexture)I?(de&&t.texStorage3D(i.TEXTURE_3D,Ce,De,ae.width,ae.height,ae.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ue,Pe,ae.data)):t.texImage3D(i.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,ue,Pe,ae.data);else if(g.isFramebufferTexture){if(de)if(I)t.texStorage2D(i.TEXTURE_2D,Ce,De,ae.width,ae.height);else{let fe=ae.width,re=ae.height;for(let Ne=0;Ne<Ce;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,De,fe,re,0,ue,Pe,null),fe>>=1,re>>=1}}else if(Ve.length>0){if(I&&de){const fe=ce(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Ce,De,fe.width,fe.height)}for(let fe=0,re=Ve.length;fe<re;fe++)Se=Ve[fe],I?we&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ue,Pe,Se):t.texImage2D(i.TEXTURE_2D,fe,De,ue,Pe,Se);g.generateMipmaps=!1}else if(I){if(de){const fe=ce(ae);t.texStorage2D(i.TEXTURE_2D,Ce,De,fe.width,fe.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Pe,ae)}else t.texImage2D(i.TEXTURE_2D,0,De,ue,Pe,ae);m(g)&&p(B),ye.__version=G.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function j(b,g,C){if(g.image.length!==6)return;const B=Te(b,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+C);const G=n.get(Z);if(Z.version!==G.__version||B===!0){t.activeTexture(i.TEXTURE0+C);const ye=Je.getPrimaries(Je.workingColorSpace),le=g.colorSpace===hn?null:Je.getPrimaries(g.colorSpace),xe=g.colorSpace===hn||ye===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ve=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let re=0;re<6;re++)!ve&&!ae?ue[re]=x(g.image[re],!0,r.maxCubemapSize):ue[re]=ae?g.image[re].image:g.image[re],ue[re]=V(g,ue[re]);const Pe=ue[0],De=o.convert(g.format,g.colorSpace),Se=o.convert(g.type),Ve=S(g.internalFormat,De,Se,g.colorSpace),I=g.isVideoTexture!==!0,de=G.__version===void 0||B===!0,we=Z.dataReady;let Ce=T(g,Pe);$(i.TEXTURE_CUBE_MAP,g);let fe;if(ve){I&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Ve,Pe.width,Pe.height);for(let re=0;re<6;re++){fe=ue[re].mipmaps;for(let Ne=0;Ne<fe.length;Ne++){const He=fe[Ne];g.format!==Xt?De!==null?I?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,0,0,He.width,He.height,De,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,Ve,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,0,0,He.width,He.height,De,Se,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,Ve,He.width,He.height,0,De,Se,He.data)}}}else{if(fe=g.mipmaps,I&&de){fe.length>0&&Ce++;const re=ce(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Ve,re.width,re.height)}for(let re=0;re<6;re++)if(ae){I?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ue[re].width,ue[re].height,De,Se,ue[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ve,ue[re].width,ue[re].height,0,De,Se,ue[re].data);for(let Ne=0;Ne<fe.length;Ne++){const nt=fe[Ne].image[re].image;I?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,0,0,nt.width,nt.height,De,Se,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,Ve,nt.width,nt.height,0,De,Se,nt.data)}}else{I?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,De,Se,ue[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ve,De,Se,ue[re]);for(let Ne=0;Ne<fe.length;Ne++){const He=fe[Ne];I?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,0,0,De,Se,He.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,Ve,De,Se,He.image[re])}}}m(g)&&p(i.TEXTURE_CUBE_MAP),G.__version=Z.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function me(b,g,C,B,Z,G){const ye=o.convert(C.format,C.colorSpace),le=o.convert(C.type),xe=S(C.internalFormat,ye,le,C.colorSpace),ve=n.get(g),ae=n.get(C);if(ae.__renderTarget=g,!ve.__hasExternalTextures){const ue=Math.max(1,g.width>>G),Pe=Math.max(1,g.height>>G);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,G,xe,ue,Pe,g.depth,0,ye,le,null):t.texImage2D(Z,G,xe,ue,Pe,0,ye,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,Z,ae.__webglTexture,0,Q(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,Z,ae.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(b,g,C){if(i.bindRenderbuffer(i.RENDERBUFFER,b),g.depthBuffer){const B=g.depthTexture,Z=B&&B.isDepthTexture?B.type:null,G=_(g.stencilBuffer,Z),ye=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=Q(g);ne(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,G,g.width,g.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,G,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,G,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,b)}else{const B=g.textures;for(let Z=0;Z<B.length;Z++){const G=B[Z],ye=o.convert(G.format,G.colorSpace),le=o.convert(G.type),xe=S(G.internalFormat,ye,le,G.colorSpace),ve=Q(g);C&&ne(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,xe,g.width,g.height):ne(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,xe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,xe,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=n.get(g.depthTexture);B.__renderTarget=g,(!B.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y(g.depthTexture,0);const Z=B.__webglTexture,G=Q(g);if(g.depthTexture.format===Oi)ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(g.depthTexture.format===ki)ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ze(b){const g=n.get(b),C=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const B=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),B){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,B.removeEventListener("dispose",Z)};B.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=B}if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");const B=b.texture.mipmaps;B&&B.length>0?ge(g.__webglFramebuffer[0],b):ge(g.__webglFramebuffer,b)}else if(C){g.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[B]),g.__webglDepthbuffer[B]===void 0)g.__webglDepthbuffer[B]=i.createRenderbuffer(),be(g.__webglDepthbuffer[B],b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,G)}}else{const B=b.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),be(g.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(b,g,C){const B=n.get(b);g!==void 0&&me(B.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&ze(b)}function E(b){const g=b.texture,C=n.get(b),B=n.get(g);b.addEventListener("dispose",U);const Z=b.textures,G=b.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=g.version,s.memory.textures++),G){C.__webglFramebuffer=[];for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer[le]=[];for(let xe=0;xe<g.mipmaps.length;xe++)C.__webglFramebuffer[le][xe]=i.createFramebuffer()}else C.__webglFramebuffer[le]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer=[];for(let le=0;le<g.mipmaps.length;le++)C.__webglFramebuffer[le]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(ye)for(let le=0,xe=Z.length;le<xe;le++){const ve=n.get(Z[le]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),s.memory.textures++)}if(b.samples>0&&ne(b)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const xe=Z[le];C.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[le]);const ve=o.convert(xe.format,xe.colorSpace),ae=o.convert(xe.type),ue=S(xe.internalFormat,ve,ae,xe.colorSpace,b.isXRRenderTarget===!0),Pe=Q(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ue,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,C.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),be(C.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),$(i.TEXTURE_CUBE_MAP,g);for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)me(C.__webglFramebuffer[le][xe],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe);else me(C.__webglFramebuffer[le],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(g)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let le=0,xe=Z.length;le<xe;le++){const ve=Z[le],ae=n.get(ve);let ue=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ae.__webglTexture),$(ue,ve),me(C.__webglFramebuffer,b,ve,i.COLOR_ATTACHMENT0+le,ue,0),m(ve)&&p(ue)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,B.__webglTexture),$(le,g),g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)me(C.__webglFramebuffer[xe],b,g,i.COLOR_ATTACHMENT0,le,xe);else me(C.__webglFramebuffer,b,g,i.COLOR_ATTACHMENT0,le,0);m(g)&&p(le),t.unbindTexture()}b.depthBuffer&&ze(b)}function se(b){const g=b.textures;for(let C=0,B=g.length;C<B;C++){const Z=g[C];if(m(Z)){const G=R(b),ye=n.get(Z).__webglTexture;t.bindTexture(G,ye),p(G),t.unbindTexture()}}}const te=[],ee=[];function D(b){if(b.samples>0){if(ne(b)===!1){const g=b.textures,C=b.width,B=b.height;let Z=i.COLOR_BUFFER_BIT;const G=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(b),le=g.length>1;if(le)for(let ve=0;ve<g.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const xe=b.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ve]);const ae=n.get(g[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,C,B,0,0,C,B,Z,i.NEAREST),c===!0&&(te.length=0,ee.length=0,te.push(i.COLOR_ATTACHMENT0+ve),b.depthBuffer&&b.resolveDepthBuffer===!1&&(te.push(G),ee.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let ve=0;ve<g.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ve]);const ae=n.get(g[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const g=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Q(b){return Math.min(r.maxSamples,b.samples)}function ne(b){const g=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ie(b){const g=s.render.frame;u.get(b)!==g&&(u.set(b,g),b.update())}function V(b,g){const C=b.colorSpace,B=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||C!==fi&&C!==hn&&(Je.getTransfer(C)===et?(B!==Xt||Z!==Qt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),g}function ce(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=oe,this.setTextureCube=q,this.rebindTextures=je,this.setupRenderTarget=E,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ne}function g0(i,e){function t(n,r=hn){let o;const s=Je.getTransfer(r);if(n===Qt)return i.UNSIGNED_BYTE;if(n===Us)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fl)return i.BYTE;if(n===pl)return i.SHORT;if(n===Ni)return i.UNSIGNED_SHORT;if(n===Ls)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Xi)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===_l)return i.RGB;if(n===Xt)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===bl)return i.RED;if(n===Ps)return i.RED_INTEGER;if(n===xl)return i.RG;if(n===Ds)return i.RG_INTEGER;if(n===Is)return i.RGBA_INTEGER;if(n===Sr||n===Rr||n===Er||n===Ar)if(s===et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Sr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Sr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xo||n===qo||n===Yo||n===Zo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Xo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===Jo||n===jo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ko||n===Jo)return s===et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===jo)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qo||n===$o||n===es||n===ts||n===ns||n===is||n===rs||n===os||n===ss||n===as||n===ls||n===cs||n===us||n===hs)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Qo)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===es)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ts)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ns)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===is)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rs)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===os)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ss)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===as)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ls)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cs)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===us)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hs)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ds||n===fs||n===ps)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===ds)return s===et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fs)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ps)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ms||n===gs||n===vs||n===_s)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===ms)return o.COMPRESSED_RED_RGTC1_EXT;if(n===gs)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vs)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_s)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const v0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class b0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Dl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gn({vertexShader:v0,fragmentShader:_0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x0 extends _i{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,v=null;const x=typeof XRWebGLBinding<"u",m=new b0,p={},R=t.getContextAttributes();let S=null,_=null;const T=[],A=[],U=new Me;let P=null;const y=new Ut;y.viewport=new st;const w=new Ut;w.viewport=new st;const L=[y,w],k=new zh;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=T[H];return j===void 0&&(j=new po,T[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=T[H];return j===void 0&&(j=new po,T[H]=j),j.getGripSpace()},this.getHand=function(H){let j=T[H];return j===void 0&&(j=new po,T[H]=j),j.getHandSpace()};function Y(H){const j=A.indexOf(H.inputSource);if(j===-1)return;const me=T[j];me!==void 0&&(me.update(H.inputSource,H.frame,l||s),me.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",oe);for(let H=0;H<T.length;H++){const j=A[H];j!==null&&(A[H]=null,T[H].disconnect(j))}z=null,W=null,m.reset();for(const H in p)delete p[H];e.setRenderTarget(S),f=null,d=null,h=null,r=null,_=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",X),r.addEventListener("inputsourceschange",oe),R.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,be=null,ge=null;R.depth&&(ge=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=R.stencil?ki:Oi,be=R.stencil?Fi:Gn);const ze={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:o};h=this.getBinding(),d=h.createProjectionLayer(ze),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Vn(d.textureWidth,d.textureHeight,{format:Xt,type:Qt,depthTexture:new Pl(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Vn(f.framebufferWidth,f.framebufferHeight,{format:Xt,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(a),Ue.setContext(r),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(H){for(let j=0;j<H.removed.length;j++){const me=H.removed[j],be=A.indexOf(me);be>=0&&(A[be]=null,T[be].disconnect(me))}for(let j=0;j<H.added.length;j++){const me=H.added[j];let be=A.indexOf(me);if(be===-1){for(let ze=0;ze<T.length;ze++)if(ze>=A.length){A.push(me),be=ze;break}else if(A[ze]===null){A[ze]=me,be=ze;break}if(be===-1)break}const ge=T[be];ge&&ge.connect(me)}}const q=new N,he=new N;function _e(H,j,me){q.setFromMatrixPosition(j.matrixWorld),he.setFromMatrixPosition(me.matrixWorld);const be=q.distanceTo(he),ge=j.projectionMatrix.elements,ze=me.projectionMatrix.elements,je=ge[14]/(ge[10]-1),E=ge[14]/(ge[10]+1),se=(ge[9]+1)/ge[5],te=(ge[9]-1)/ge[5],ee=(ge[8]-1)/ge[0],D=(ze[8]+1)/ze[0],Q=je*ee,ne=je*D,ie=be/(-ee+D),V=ie*-ee;if(j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(V),H.translateZ(ie),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ge[10]===-1)H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ce=je+ie,b=E+ie,g=Q-V,C=ne+(be-V),B=se*E/b*ce,Z=te*E/b*ce;H.projectionMatrix.makePerspective(g,C,B,Z,ce,b),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Ee(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let j=H.near,me=H.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(me=m.depthFar)),k.near=w.near=y.near=j,k.far=w.far=y.far=me,(z!==k.near||W!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,W=k.far),k.layers.mask=H.layers.mask|6,y.layers.mask=k.layers.mask&3,w.layers.mask=k.layers.mask&5;const be=H.parent,ge=k.cameras;Ee(k,be);for(let ze=0;ze<ge.length;ze++)Ee(ge[ze],be);ge.length===2?_e(k,y,w):k.projectionMatrix.copy(y.projectionMatrix),$(H,k,be)};function $(H,j,me){me===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(me.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=bs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(H){return p[H]};let Te=null;function Fe(H,j){if(u=j.getViewerPose(l||s),v=j,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let be=!1;me.length!==k.cameras.length&&(k.cameras.length=0,be=!0);for(let E=0;E<me.length;E++){const se=me[E];let te=null;if(f!==null)te=f.getViewport(se);else{const D=h.getViewSubImage(d,se);te=D.viewport,E===0&&(e.setRenderTargetTextures(_,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(_))}let ee=L[E];ee===void 0&&(ee=new Ut,ee.layers.enable(E),ee.viewport=new st,L[E]=ee),ee.matrix.fromArray(se.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(se.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(te.x,te.y,te.width,te.height),E===0&&(k.matrix.copy(ee.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),be===!0&&k.cameras.push(ee)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const E=h.getDepthInformation(me[0]);E&&E.isValid&&E.texture&&m.init(E,r.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let E=0;E<me.length;E++){const se=me[E].camera;if(se){let te=p[se];te||(te=new Dl,p[se]=te);const ee=h.getCameraImage(se);te.sourceTexture=ee}}}}for(let me=0;me<T.length;me++){const be=A[me],ge=T[me];be!==null&&ge!==void 0&&ge.update(be,j,l||s)}Te&&Te(H,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),v=null}const Ue=new Xl;Ue.setAnimationLoop(Fe),this.setAnimationLoop=function(H){Te=H},this.dispose=function(){}}}const Nn=new $t,w0=new lt;function M0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ll(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,R,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),h(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(o(m,p),v(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,R,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const R=e.get(p),S=R.envMap,_=R.envMapRotation;S&&(m.envMap.value=S,Nn.copy(_),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),m.envMapRotation.value.setFromMatrix4(w0.makeRotationFromEuler(Nn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,R,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const R=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function y0(i,e,t,n){let r={},o={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,S){const _=S.program;n.uniformBlockBinding(R,_)}function l(R,S){let _=r[R.id];_===void 0&&(v(R),_=u(R),r[R.id]=_,R.addEventListener("dispose",m));const T=S.program;n.updateUBOMapping(R,T);const A=e.render.frame;o[R.id]!==A&&(d(R),o[R.id]=A)}function u(R){const S=h();R.__bindingPointIndex=S;const _=i.createBuffer(),T=R.__size,A=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,_),_}function h(){for(let R=0;R<a;R++)if(s.indexOf(R)===-1)return s.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const S=r[R.id],_=R.uniforms,T=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,U=_.length;A<U;A++){const P=Array.isArray(_[A])?_[A]:[_[A]];for(let y=0,w=P.length;y<w;y++){const L=P[y];if(f(L,A,y,T)===!0){const k=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let Y=0;Y<z.length;Y++){const X=z[Y],oe=x(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,k+W,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,W),W+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(R,S,_,T){const A=R.value,U=S+"_"+_;if(T[U]===void 0)return typeof A=="number"||typeof A=="boolean"?T[U]=A:T[U]=A.clone(),!0;{const P=T[U];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return T[U]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function v(R){const S=R.uniforms;let _=0;const T=16;for(let U=0,P=S.length;U<P;U++){const y=Array.isArray(S[U])?S[U]:[S[U]];for(let w=0,L=y.length;w<L;w++){const k=y[w],z=Array.isArray(k.value)?k.value:[k.value];for(let W=0,Y=z.length;W<Y;W++){const X=z[W],oe=x(X),q=_%T,he=q%oe.boundary,_e=q+he;_+=he,_e!==0&&T-_e<oe.storage&&(_+=T-_e),k.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=oe.storage}}}const A=_%T;return A>0&&(_+=T-A),R.__size=_,R.__cache={},this}function x(R){const S={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(S.boundary=4,S.storage=4):R.isVector2?(S.boundary=8,S.storage=8):R.isVector3||R.isColor?(S.boundary=16,S.storage=12):R.isVector4?(S.boundary=16,S.storage=16):R.isMatrix3?(S.boundary=48,S.storage=48):R.isMatrix4?(S.boundary=64,S.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),S}function m(R){const S=R.target;S.removeEventListener("dispose",m);const _=s.indexOf(S.__bindingPointIndex);s.splice(_,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(const R in r)i.deleteBuffer(r[R]);s=[],r={},o={}}return{bind:c,update:l,dispose:p}}class qs{constructor(e={}){const{canvas:t=wu(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=s;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const R=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let T=!1;this._outputColorSpace=Mt;let A=0,U=0,P=null,y=-1,w=null;const L=new st,k=new st;let z=null;const W=new Ze(0);let Y=0,X=t.width,oe=t.height,q=1,he=null,_e=null;const Ee=new st(0,0,X,oe),$=new st(0,0,X,oe);let Te=!1;const Fe=new ks;let Ue=!1,H=!1;const j=new lt,me=new N,be=new st,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function je(){return P===null?q:1}let E=n;function se(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ts}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",fe,!1),E===null){const F="webgl2";if(E=se(F,M),E===null)throw se(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let te,ee,D,Q,ne,ie,V,ce,b,g,C,B,Z,G,ye,le,xe,ve,ae,ue,Pe,De,Se,Ve;function I(){te=new Ip(E),te.init(),De=new g0(E,te),ee=new Ap(E,te,e,De),D=new p0(E,te),ee.reversedDepthBuffer&&d&&D.buffers.depth.setReversed(!0),Q=new Op(E),ne=new t0,ie=new m0(E,te,D,ne,ee,De,Q),V=new Lp(_),ce=new Dp(_),b=new Vh(E),Se=new Rp(E,b),g=new Np(E,b,Q,Se),C=new Bp(E,g,b,Q),ae=new kp(E,ee,ie),le=new Tp(ne),B=new e0(_,V,ce,te,ee,Se,le),Z=new M0(_,ne),G=new i0,ye=new c0(te),ve=new Sp(_,V,ce,D,C,f,c),xe=new d0(_,C,ee),Ve=new y0(E,Q,ee,D),ue=new Ep(E,te,Q),Pe=new Fp(E,te,Q),Q.programs=B.programs,_.capabilities=ee,_.extensions=te,_.properties=ne,_.renderLists=G,_.shadowMap=xe,_.state=D,_.info=Q}I();const de=new x0(_,E);this.xr=de,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const M=te.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=te.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(X,oe,!1))},this.getSize=function(M){return M.set(X,oe)},this.setSize=function(M,F,K=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,oe=F,t.width=Math.floor(M*q),t.height=Math.floor(F*q),K===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(X*q,oe*q).floor()},this.setDrawingBufferSize=function(M,F,K){X=M,oe=F,q=K,t.width=Math.floor(M*K),t.height=Math.floor(F*K),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,F,K,J){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,F,K,J),D.viewport(L.copy(Ee).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy($)},this.setScissor=function(M,F,K,J){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,F,K,J),D.scissor(k.copy($).multiplyScalar(q).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(M){D.setScissorTest(Te=M)},this.setOpaqueSort=function(M){he=M},this.setTransparentSort=function(M){_e=M},this.getClearColor=function(M){return M.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,K=!0){let J=0;if(M){let O=!1;if(P!==null){const pe=P.texture.format;O=pe===Is||pe===Ds||pe===Ps}if(O){const pe=P.texture.type,Ae=pe===Qt||pe===Gn||pe===Ni||pe===Fi||pe===Us||pe===Cs,Ie=ve.getClearColor(),Le=ve.getClearAlpha(),Be=Ie.r,Ge=Ie.g,Oe=Ie.b;Ae?(v[0]=Be,v[1]=Ge,v[2]=Oe,v[3]=Le,E.clearBufferuiv(E.COLOR,0,v)):(x[0]=Be,x[1]=Ge,x[2]=Oe,x[3]=Le,E.clearBufferiv(E.COLOR,0,x))}else J|=E.COLOR_BUFFER_BIT}F&&(J|=E.DEPTH_BUFFER_BIT),K&&(J|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ve.dispose(),G.dispose(),ye.dispose(),ne.dispose(),V.dispose(),ce.dispose(),C.dispose(),Se.dispose(),Ve.dispose(),B.dispose(),de.dispose(),de.removeEventListener("sessionstart",qt),de.removeEventListener("sessionend",$s),Tn.stop()};function we(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=Q.autoReset,F=xe.enabled,K=xe.autoUpdate,J=xe.needsUpdate,O=xe.type;I(),Q.autoReset=M,xe.enabled=F,xe.autoUpdate=K,xe.needsUpdate=J,xe.type=O}function fe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function re(M){const F=M.target;F.removeEventListener("dispose",re),Ne(F)}function Ne(M){He(M),ne.remove(M)}function He(M){const F=ne.get(M).programs;F!==void 0&&(F.forEach(function(K){B.releaseProgram(K)}),M.isShaderMaterial&&B.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,K,J,O,pe){F===null&&(F=ge);const Ae=O.isMesh&&O.matrixWorld.determinant()<0,Ie=gc(M,F,K,J,O);D.setMaterial(J,Ae);let Le=K.index,Be=1;if(J.wireframe===!0){if(Le=g.getWireframeAttribute(K),Le===void 0)return;Be=2}const Ge=K.drawRange,Oe=K.attributes.position;let Ye=Ge.start*Be,$e=(Ge.start+Ge.count)*Be;pe!==null&&(Ye=Math.max(Ye,pe.start*Be),$e=Math.min($e,(pe.start+pe.count)*Be)),Le!==null?(Ye=Math.max(Ye,0),$e=Math.min($e,Le.count)):Oe!=null&&(Ye=Math.max(Ye,0),$e=Math.min($e,Oe.count));const ct=$e-Ye;if(ct<0||ct===1/0)return;Se.setup(O,J,Ie,K,Le);let it,tt=ue;if(Le!==null&&(it=b.get(Le),tt=Pe,tt.setIndex(it)),O.isMesh)J.wireframe===!0?(D.setLineWidth(J.wireframeLinewidth*je()),tt.setMode(E.LINES)):tt.setMode(E.TRIANGLES);else if(O.isLine){let ke=J.linewidth;ke===void 0&&(ke=1),D.setLineWidth(ke*je()),O.isLineSegments?tt.setMode(E.LINES):O.isLineLoop?tt.setMode(E.LINE_LOOP):tt.setMode(E.LINE_STRIP)}else O.isPoints?tt.setMode(E.POINTS):O.isSprite&&tt.setMode(E.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)zi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))tt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ke=O._multiDrawStarts,rt=O._multiDrawCounts,Ke=O._multiDrawCount,Et=Le?b.get(Le).bytesPerElement:1,Wn=ne.get(J).currentProgram.getUniforms();for(let At=0;At<Ke;At++)Wn.setValue(E,"_gl_DrawID",At),tt.render(ke[At]/Et,rt[At])}else if(O.isInstancedMesh)tt.renderInstances(Ye,ct,O.count);else if(K.isInstancedBufferGeometry){const ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,rt=Math.min(K.instanceCount,ke);tt.renderInstances(Ye,ct,rt)}else tt.render(Ye,ct)};function nt(M,F,K){M.transparent===!0&&M.side===Ot&&M.forceSinglePass===!1?(M.side=yt,M.needsUpdate=!0,ji(M,F,K),M.side=mn,M.needsUpdate=!0,ji(M,F,K),M.side=Ot):ji(M,F,K)}this.compile=function(M,F,K=null){K===null&&(K=M),p=ye.get(K),p.init(F),S.push(p),K.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),M!==K&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const J=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const pe=O.material;if(pe)if(Array.isArray(pe))for(let Ae=0;Ae<pe.length;Ae++){const Ie=pe[Ae];nt(Ie,K,O),J.add(Ie)}else nt(pe,K,O),J.add(pe)}),p=S.pop(),J},this.compileAsync=function(M,F,K=null){const J=this.compile(M,F,K);return new Promise(O=>{function pe(){if(J.forEach(function(Ae){ne.get(Ae).currentProgram.isReady()&&J.delete(Ae)}),J.size===0){O(M);return}setTimeout(pe,10)}te.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Qe=null;function nn(M){Qe&&Qe(M)}function qt(){Tn.stop()}function $s(){Tn.start()}const Tn=new Xl;Tn.setAnimationLoop(nn),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(M){Qe=M,de.setAnimationLoop(M),M===null?Tn.stop():Tn.start()},de.addEventListener("sessionstart",qt),de.addEventListener("sessionend",$s),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(F),F=de.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,F,P),p=ye.get(M,S.length),p.init(F),S.push(p),j.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Fe.setFromProjectionMatrix(j,Zt,F.reversedDepth),H=this.localClippingEnabled,Ue=le.init(this.clippingPlanes,H),m=G.get(M,R.length),m.init(),R.push(m),de.enabled===!0&&de.isPresenting===!0){const pe=_.xr.getDepthSensingMesh();pe!==null&&Vr(pe,F,-1/0,_.sortObjects)}Vr(M,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(he,_e),ze=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ze&&ve.addToRenderList(m,M),this.info.render.frame++,Ue===!0&&le.beginShadows();const K=p.state.shadowsArray;xe.render(K,M,F),Ue===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const pe=F.cameras;if(O.length>0)for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++){const Le=pe[Ae];ta(J,O,M,Le)}ze&&ve.render(M);for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++){const Le=pe[Ae];ea(m,M,Le,Le.viewport)}}else O.length>0&&ta(J,O,M,F),ze&&ve.render(M),ea(m,M,F);P!==null&&U===0&&(ie.updateMultisampleRenderTarget(P),ie.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(_,M,F),Se.resetDefaultState(),y=-1,w=null,S.pop(),S.length>0?(p=S[S.length-1],Ue===!0&&le.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Vr(M,F,K,J){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Fe.intersectsSprite(M)){J&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);const Ae=C.update(M),Ie=M.material;Ie.visible&&m.push(M,Ae,Ie,K,be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Fe.intersectsObject(M))){const Ae=C.update(M),Ie=M.material;if(J&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),be.copy(M.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),be.copy(Ae.boundingSphere.center)),be.applyMatrix4(M.matrixWorld).applyMatrix4(j)),Array.isArray(Ie)){const Le=Ae.groups;for(let Be=0,Ge=Le.length;Be<Ge;Be++){const Oe=Le[Be],Ye=Ie[Oe.materialIndex];Ye&&Ye.visible&&m.push(M,Ae,Ye,K,be.z,Oe)}}else Ie.visible&&m.push(M,Ae,Ie,K,be.z,null)}}const pe=M.children;for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++)Vr(pe[Ae],F,K,J)}function ea(M,F,K,J){const O=M.opaque,pe=M.transmissive,Ae=M.transparent;p.setupLightsView(K),Ue===!0&&le.setGlobalState(_.clippingPlanes,K),J&&D.viewport(L.copy(J)),O.length>0&&Ji(O,F,K),pe.length>0&&Ji(pe,F,K),Ae.length>0&&Ji(Ae,F,K),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function ta(M,F,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Vn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Xi:Qt,minFilter:Sn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const pe=p.state.transmissionRenderTarget[J.id],Ae=J.viewport||L;pe.setSize(Ae.z*_.transmissionResolutionScale,Ae.w*_.transmissionResolutionScale);const Ie=_.getRenderTarget(),Le=_.getActiveCubeFace(),Be=_.getActiveMipmapLevel();_.setRenderTarget(pe),_.getClearColor(W),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),ze&&ve.render(K);const Ge=_.toneMapping;_.toneMapping=fn;const Oe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),Ue===!0&&le.setGlobalState(_.clippingPlanes,J),Ji(M,K,J),ie.updateMultisampleRenderTarget(pe),ie.updateRenderTargetMipmap(pe),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let $e=0,ct=F.length;$e<ct;$e++){const it=F[$e],tt=it.object,ke=it.geometry,rt=it.material,Ke=it.group;if(rt.side===Ot&&tt.layers.test(J.layers)){const Et=rt.side;rt.side=yt,rt.needsUpdate=!0,na(tt,K,J,ke,rt,Ke),rt.side=Et,rt.needsUpdate=!0,Ye=!0}}Ye===!0&&(ie.updateMultisampleRenderTarget(pe),ie.updateRenderTargetMipmap(pe))}_.setRenderTarget(Ie,Le,Be),_.setClearColor(W,Y),Oe!==void 0&&(J.viewport=Oe),_.toneMapping=Ge}function Ji(M,F,K){const J=F.isScene===!0?F.overrideMaterial:null;for(let O=0,pe=M.length;O<pe;O++){const Ae=M[O],Ie=Ae.object,Le=Ae.geometry,Be=Ae.group;let Ge=Ae.material;Ge.allowOverride===!0&&J!==null&&(Ge=J),Ie.layers.test(K.layers)&&na(Ie,F,K,Le,Ge,Be)}}function na(M,F,K,J,O,pe){M.onBeforeRender(_,F,K,J,O,pe),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(_,F,K,J,M,pe),O.transparent===!0&&O.side===Ot&&O.forceSinglePass===!1?(O.side=yt,O.needsUpdate=!0,_.renderBufferDirect(K,F,J,O,M,pe),O.side=mn,O.needsUpdate=!0,_.renderBufferDirect(K,F,J,O,M,pe),O.side=Ot):_.renderBufferDirect(K,F,J,O,M,pe),M.onAfterRender(_,F,K,J,O,pe)}function ji(M,F,K){F.isScene!==!0&&(F=ge);const J=ne.get(M),O=p.state.lights,pe=p.state.shadowsArray,Ae=O.state.version,Ie=B.getParameters(M,O.state,pe,F,K),Le=B.getProgramCacheKey(Ie);let Be=J.programs;J.environment=M.isMeshStandardMaterial?F.environment:null,J.fog=F.fog,J.envMap=(M.isMeshStandardMaterial?ce:V).get(M.envMap||J.environment),J.envMapRotation=J.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",re),Be=new Map,J.programs=Be);let Ge=Be.get(Le);if(Ge!==void 0){if(J.currentProgram===Ge&&J.lightsStateVersion===Ae)return ra(M,Ie),Ge}else Ie.uniforms=B.getUniforms(M),M.onBeforeCompile(Ie,_),Ge=B.acquireProgram(Ie,Le),Be.set(Le,Ge),J.uniforms=Ie.uniforms;const Oe=J.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=le.uniform),ra(M,Ie),J.needsLights=_c(M),J.lightsStateVersion=Ae,J.needsLights&&(Oe.ambientLightColor.value=O.state.ambient,Oe.lightProbe.value=O.state.probe,Oe.directionalLights.value=O.state.directional,Oe.directionalLightShadows.value=O.state.directionalShadow,Oe.spotLights.value=O.state.spot,Oe.spotLightShadows.value=O.state.spotShadow,Oe.rectAreaLights.value=O.state.rectArea,Oe.ltc_1.value=O.state.rectAreaLTC1,Oe.ltc_2.value=O.state.rectAreaLTC2,Oe.pointLights.value=O.state.point,Oe.pointLightShadows.value=O.state.pointShadow,Oe.hemisphereLights.value=O.state.hemi,Oe.directionalShadowMap.value=O.state.directionalShadowMap,Oe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Oe.spotShadowMap.value=O.state.spotShadowMap,Oe.spotLightMatrix.value=O.state.spotLightMatrix,Oe.spotLightMap.value=O.state.spotLightMap,Oe.pointShadowMap.value=O.state.pointShadowMap,Oe.pointShadowMatrix.value=O.state.pointShadowMatrix),J.currentProgram=Ge,J.uniformsList=null,Ge}function ia(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Tr.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function ra(M,F){const K=ne.get(M);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function gc(M,F,K,J,O){F.isScene!==!0&&(F=ge),ie.resetTextureUnits();const pe=F.fog,Ae=J.isMeshStandardMaterial?F.environment:null,Ie=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:fi,Le=(J.isMeshStandardMaterial?ce:V).get(J.envMap||Ae),Be=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ge=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Oe=!!K.morphAttributes.position,Ye=!!K.morphAttributes.normal,$e=!!K.morphAttributes.color;let ct=fn;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ct=_.toneMapping);const it=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,tt=it!==void 0?it.length:0,ke=ne.get(J),rt=p.state.lights;if(Ue===!0&&(H===!0||M!==w)){const xt=M===w&&J.id===y;le.setState(J,M,xt)}let Ke=!1;J.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==rt.state.version||ke.outputColorSpace!==Ie||O.isBatchedMesh&&ke.batching===!1||!O.isBatchedMesh&&ke.batching===!0||O.isBatchedMesh&&ke.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ke.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ke.instancing===!1||!O.isInstancedMesh&&ke.instancing===!0||O.isSkinnedMesh&&ke.skinning===!1||!O.isSkinnedMesh&&ke.skinning===!0||O.isInstancedMesh&&ke.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ke.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ke.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ke.instancingMorph===!1&&O.morphTexture!==null||ke.envMap!==Le||J.fog===!0&&ke.fog!==pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==Ge||ke.morphTargets!==Oe||ke.morphNormals!==Ye||ke.morphColors!==$e||ke.toneMapping!==ct||ke.morphTargetsCount!==tt)&&(Ke=!0):(Ke=!0,ke.__version=J.version);let Et=ke.currentProgram;Ke===!0&&(Et=ji(J,F,O));let Wn=!1,At=!1,Mi=!1;const ot=Et.getUniforms(),Dt=ke.uniforms;if(D.useProgram(Et.program)&&(Wn=!0,At=!0,Mi=!0),J.id!==y&&(y=J.id,At=!0),Wn||w!==M){D.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ot.setValue(E,"projectionMatrix",M.projectionMatrix),ot.setValue(E,"viewMatrix",M.matrixWorldInverse);const St=ot.map.cameraPosition;St!==void 0&&St.setValue(E,me.setFromMatrixPosition(M.matrixWorld)),ee.logarithmicDepthBuffer&&ot.setValue(E,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ot.setValue(E,"isOrthographic",M.isOrthographicCamera===!0),w!==M&&(w=M,At=!0,Mi=!0)}if(O.isSkinnedMesh){ot.setOptional(E,O,"bindMatrix"),ot.setOptional(E,O,"bindMatrixInverse");const xt=O.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),ot.setValue(E,"boneTexture",xt.boneTexture,ie))}O.isBatchedMesh&&(ot.setOptional(E,O,"batchingTexture"),ot.setValue(E,"batchingTexture",O._matricesTexture,ie),ot.setOptional(E,O,"batchingIdTexture"),ot.setValue(E,"batchingIdTexture",O._indirectTexture,ie),ot.setOptional(E,O,"batchingColorTexture"),O._colorsTexture!==null&&ot.setValue(E,"batchingColorTexture",O._colorsTexture,ie));const It=K.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&ae.update(O,K,Et),(At||ke.receiveShadow!==O.receiveShadow)&&(ke.receiveShadow=O.receiveShadow,ot.setValue(E,"receiveShadow",O.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Dt.envMap.value=Le,Dt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&F.environment!==null&&(Dt.envMapIntensity.value=F.environmentIntensity),At&&(ot.setValue(E,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&vc(Dt,Mi),pe&&J.fog===!0&&Z.refreshFogUniforms(Dt,pe),Z.refreshMaterialUniforms(Dt,J,q,oe,p.state.transmissionRenderTarget[M.id]),Tr.upload(E,ia(ke),Dt,ie)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Tr.upload(E,ia(ke),Dt,ie),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ot.setValue(E,"center",O.center),ot.setValue(E,"modelViewMatrix",O.modelViewMatrix),ot.setValue(E,"normalMatrix",O.normalMatrix),ot.setValue(E,"modelMatrix",O.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const xt=J.uniformsGroups;for(let St=0,Hr=xt.length;St<Hr;St++){const Ln=xt[St];Ve.update(Ln,Et),Ve.bind(Ln,Et)}}return Et}function vc(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function _c(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,F,K){const J=ne.get(M);J.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ne.get(M.texture).__webglTexture=F,ne.get(M.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const K=ne.get(M);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0};const bc=E.createFramebuffer();this.setRenderTarget=function(M,F=0,K=0){P=M,A=F,U=K;let J=!0,O=null,pe=!1,Ae=!1;if(M){const Le=ne.get(M);if(Le.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(E.FRAMEBUFFER,null),J=!1;else if(Le.__webglFramebuffer===void 0)ie.setupRenderTarget(M);else if(Le.__hasExternalTextures)ie.rebindTextures(M,ne.get(M.texture).__webglTexture,ne.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Oe=M.depthTexture;if(Le.__boundDepthTexture!==Oe){if(Oe!==null&&ne.has(Oe)&&(M.width!==Oe.image.width||M.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(M)}}const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ae=!0);const Ge=ne.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?O=Ge[F][K]:O=Ge[F],pe=!0):M.samples>0&&ie.useMultisampledRTT(M)===!1?O=ne.get(M).__webglMultisampledFramebuffer:Array.isArray(Ge)?O=Ge[K]:O=Ge,L.copy(M.viewport),k.copy(M.scissor),z=M.scissorTest}else L.copy(Ee).multiplyScalar(q).floor(),k.copy($).multiplyScalar(q).floor(),z=Te;if(K!==0&&(O=bc),D.bindFramebuffer(E.FRAMEBUFFER,O)&&J&&D.drawBuffers(M,O),D.viewport(L),D.scissor(k),D.setScissorTest(z),pe){const Le=ne.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+F,Le.__webglTexture,K)}else if(Ae){const Le=F;for(let Be=0;Be<M.textures.length;Be++){const Ge=ne.get(M.textures[Be]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Be,Ge.__webglTexture,K,Le)}}else if(M!==null&&K!==0){const Le=ne.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Le.__webglTexture,K)}y=-1},this.readRenderTargetPixels=function(M,F,K,J,O,pe,Ae,Ie=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){D.bindFramebuffer(E.FRAMEBUFFER,Le);try{const Be=M.textures[Ie],Ge=Be.format,Oe=Be.type;if(!ee.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-J&&K>=0&&K<=M.height-O&&(M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ie),E.readPixels(F,K,J,O,De.convert(Ge),De.convert(Oe),pe))}finally{const Be=P!==null?ne.get(P).__webglFramebuffer:null;D.bindFramebuffer(E.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(M,F,K,J,O,pe,Ae,Ie=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le)if(F>=0&&F<=M.width-J&&K>=0&&K<=M.height-O){D.bindFramebuffer(E.FRAMEBUFFER,Le);const Be=M.textures[Ie],Ge=Be.format,Oe=Be.type;if(!ee.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ye),E.bufferData(E.PIXEL_PACK_BUFFER,pe.byteLength,E.STREAM_READ),M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ie),E.readPixels(F,K,J,O,De.convert(Ge),De.convert(Oe),0);const $e=P!==null?ne.get(P).__webglFramebuffer:null;D.bindFramebuffer(E.FRAMEBUFFER,$e);const ct=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Mu(E,ct,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ye),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,pe),E.deleteBuffer(Ye),E.deleteSync(ct),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,K=0){const J=Math.pow(2,-K),O=Math.floor(M.image.width*J),pe=Math.floor(M.image.height*J),Ae=F!==null?F.x:0,Ie=F!==null?F.y:0;ie.setTexture2D(M,0),E.copyTexSubImage2D(E.TEXTURE_2D,K,0,0,Ae,Ie,O,pe),D.unbindTexture()};const xc=E.createFramebuffer(),wc=E.createFramebuffer();this.copyTextureToTexture=function(M,F,K=null,J=null,O=0,pe=null){pe===null&&(O!==0?(zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=O,O=0):pe=0);let Ae,Ie,Le,Be,Ge,Oe,Ye,$e,ct;const it=M.isCompressedTexture?M.mipmaps[pe]:M.image;if(K!==null)Ae=K.max.x-K.min.x,Ie=K.max.y-K.min.y,Le=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,Ge=K.min.y,Oe=K.isBox3?K.min.z:0;else{const It=Math.pow(2,-O);Ae=Math.floor(it.width*It),Ie=Math.floor(it.height*It),M.isDataArrayTexture?Le=it.depth:M.isData3DTexture?Le=Math.floor(it.depth*It):Le=1,Be=0,Ge=0,Oe=0}J!==null?(Ye=J.x,$e=J.y,ct=J.z):(Ye=0,$e=0,ct=0);const tt=De.convert(F.format),ke=De.convert(F.type);let rt;F.isData3DTexture?(ie.setTexture3D(F,0),rt=E.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ie.setTexture2DArray(F,0),rt=E.TEXTURE_2D_ARRAY):(ie.setTexture2D(F,0),rt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,F.unpackAlignment);const Ke=E.getParameter(E.UNPACK_ROW_LENGTH),Et=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Wn=E.getParameter(E.UNPACK_SKIP_PIXELS),At=E.getParameter(E.UNPACK_SKIP_ROWS),Mi=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,it.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,it.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Be),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ge),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Oe);const ot=M.isDataArrayTexture||M.isData3DTexture,Dt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const It=ne.get(M),xt=ne.get(F),St=ne.get(It.__renderTarget),Hr=ne.get(xt.__renderTarget);D.bindFramebuffer(E.READ_FRAMEBUFFER,St.__webglFramebuffer),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let Ln=0;Ln<Le;Ln++)ot&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ne.get(M).__webglTexture,O,Oe+Ln),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ne.get(F).__webglTexture,pe,ct+Ln)),E.blitFramebuffer(Be,Ge,Ae,Ie,Ye,$e,Ae,Ie,E.DEPTH_BUFFER_BIT,E.NEAREST);D.bindFramebuffer(E.READ_FRAMEBUFFER,null),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||ne.has(M)){const It=ne.get(M),xt=ne.get(F);D.bindFramebuffer(E.READ_FRAMEBUFFER,xc),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,wc);for(let St=0;St<Le;St++)ot?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,It.__webglTexture,O,Oe+St):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,It.__webglTexture,O),Dt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,xt.__webglTexture,pe,ct+St):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,xt.__webglTexture,pe),O!==0?E.blitFramebuffer(Be,Ge,Ae,Ie,Ye,$e,Ae,Ie,E.COLOR_BUFFER_BIT,E.NEAREST):Dt?E.copyTexSubImage3D(rt,pe,Ye,$e,ct+St,Be,Ge,Ae,Ie):E.copyTexSubImage2D(rt,pe,Ye,$e,Be,Ge,Ae,Ie);D.bindFramebuffer(E.READ_FRAMEBUFFER,null),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Dt?M.isDataTexture||M.isData3DTexture?E.texSubImage3D(rt,pe,Ye,$e,ct,Ae,Ie,Le,tt,ke,it.data):F.isCompressedArrayTexture?E.compressedTexSubImage3D(rt,pe,Ye,$e,ct,Ae,Ie,Le,tt,it.data):E.texSubImage3D(rt,pe,Ye,$e,ct,Ae,Ie,Le,tt,ke,it):M.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,pe,Ye,$e,Ae,Ie,tt,ke,it.data):M.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,pe,Ye,$e,it.width,it.height,tt,it.data):E.texSubImage2D(E.TEXTURE_2D,pe,Ye,$e,Ae,Ie,tt,ke,it);E.pixelStorei(E.UNPACK_ROW_LENGTH,Ke),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Et),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Wn),E.pixelStorei(E.UNPACK_SKIP_ROWS,At),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Mi),pe===0&&F.generateMipmaps&&E.generateMipmap(rt),D.unbindTexture()},this.initRenderTarget=function(M){ne.get(M).__webglFramebuffer===void 0&&ie.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ie.setTextureCube(M,0):M.isData3DTexture?ie.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ie.setTexture2DArray(M,0):ie.setTexture2D(M,0),D.unbindTexture()},this.resetState=function(){A=0,U=0,P=null,D.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Jl=":root{font-family:Arial,Apple SD Gothic Neo,Malgun Gothic,sans-serif;color:#292929;background:#fff;font-synthesis:none}*{box-sizing:border-box}body{margin:0}button,input{font:inherit}button{cursor:pointer;color:inherit;background:#fff;border:1px solid #aaa;min-height:44px;padding:10px 17px;font-size:12px}button:disabled{opacity:.45;cursor:default}button:focus-visible,input:focus-visible,[tabindex]:focus-visible,a:focus-visible{outline:3px solid #333;outline-offset:4px}a{color:inherit}h1,p,dl,dd{margin:0}#fold-app{max-width:1240px;margin:auto;padding:0 48px}.demo-header{display:flex;justify-content:space-between;gap:20px;padding:25px 0;border-bottom:1px solid #ddd;font-size:10px;line-height:1.8}.demo-header span{letter-spacing:1px}.demo-intro{display:flex;align-items:end;justify-content:space-between;gap:30px;padding:42px 0 30px}.overline{font-size:11px;color:#666;margin-bottom:14px}h1{font-size:29px;font-weight:500;letter-spacing:-.6px}.demo-intro>div>p:last-child{font-size:13px;line-height:1.9;color:#555;margin-top:16px}dl{font-size:11px;line-height:1.8}dl>div{display:flex;gap:20px;padding:5px 0}dt{color:#666;min-width:55px}.viewer{border:1px solid #c8c8c8;background:#fafafa}.viewer-top,.viewer-bottom{display:flex;justify-content:space-between;gap:20px;padding:18px 22px;font-size:11px;line-height:1.7}.viewer-top{border-bottom:1px solid #e3e3e3}.viewer-top span:last-child{color:#666}.viewer-bottom{border-top:1px solid #e3e3e3}.stage{height:530px;position:relative;perspective:1800px;overflow:hidden;touch-action:pan-y;-webkit-user-select:none;user-select:none}.stage[data-state=folded]{cursor:grab}.stage.dragging{cursor:grabbing}.rig{position:absolute;top:50%;left:50%;width:0;height:0;transform-style:preserve-3d}.turntable{position:absolute;left:-120px;top:-140px;width:240px;height:280px;transform-style:preserve-3d}.package-root{width:240px;height:280px;position:relative;transform-style:preserve-3d}.panel{position:absolute;transform-style:preserve-3d}.paper,.paper-inside{position:absolute;inset:0;backface-visibility:hidden;pointer-events:none}.paper{transform:translateZ(.12px)}.paper>img{display:block;width:100%;height:100%;pointer-events:none}.paper-inside{background:#fff9fc;transform:rotateY(180deg) translateZ(.12px)}.front{width:240px;height:280px;left:0;top:0}.left{width:80px;height:280px;left:-80px;top:0;transform-origin:right center}.back{width:240px;height:280px;left:-240px;top:0;transform-origin:right center}.right{width:80px;height:280px;left:240px;top:0;transform-origin:left center}.glue{width:30.4px;height:280px;left:-30.4px;top:0;transform-origin:right center}.glue .paper-inside{clip-path:polygon(100% 0,0 3%,0 85%,18% 92%,100% 100%)}.lid{width:240px;height:80px;left:0;top:-80px;transform-origin:center bottom}.lid-tuck{width:240px;height:30.4px;left:0;top:-30.4px;transform-origin:center bottom}.lid-tuck .paper-inside{border-radius:20px 20px 0 0}.dust-left-top,.dust-right-top{width:80px;height:55.8px;left:0;top:-55.8px;transform-origin:center bottom}.dust-left-top .paper-inside,.dust-right-top .paper-inside{clip-path:polygon(0 100%,0 75%,12% 55%,18% 0,90% 0,100% 100%)}.bottom-front,.bottom-back{width:240px;height:66.4px;left:0;top:280px;transform-origin:center top}.bottom-front .paper-inside,.bottom-back .paper-inside{clip-path:polygon(0 0,100% 0,97% 100%,66% 60%,49.5% 60%,49.5% 72%,40% 72%,33% 100%,4% 100%)}.dust-left-bottom,.dust-right-bottom{width:80px;height:44.6px;left:0;top:280px;transform-origin:center top}.dust-left-bottom .paper-inside,.dust-right-bottom .paper-inside{clip-path:polygon(0 0,100% 0,78% 38%,65% 100%,27% 100%)}.package-shadow{position:absolute;left:calc(50% - 105px);top:calc(50% + 165px);width:210px;height:12px;border-radius:50%;background:#333;filter:blur(11px);opacity:0;pointer-events:none}.main-controls{display:flex;justify-content:center;gap:12px;padding:25px 0}.primary{background:#303030;color:#fff;border-color:#303030;min-width:185px}.detail-controls{display:flex;justify-content:space-between;align-items:end;gap:35px;border-top:1px solid #ddd;padding:25px 0}.scrubber{flex:1;max-width:430px}.scrubber label{font-size:11px;display:block;margin-bottom:15px}.scrubber input{width:100%;accent-color:#444;min-height:26px;margin:0}.rotation-controls{display:flex;gap:7px;flex-wrap:wrap}.rotation-controls button{font-size:11px;padding:10px 12px}.demo-notes{padding:0 0 35px;font-size:11px;color:#555;line-height:1.9}.demo-notes p+p{margin-top:10px}.demo-notes strong{color:#333;margin-right:9px}@media(max-width:700px){#fold-app{padding:0 20px}.demo-header{font-size:9px;padding:17px 0;gap:12px}.demo-intro{display:block;padding:28px 0 22px}h1{font-size:25px}.demo-intro>div>p:last-child{font-size:12px}.demo-intro dl{font-size:10px;margin-top:18px}.demo-intro dl>div{padding:2px 0}.overline{font-size:10px}.viewer-top,.viewer-bottom{padding:13px 12px;font-size:10px;gap:10px}.viewer-top{flex-wrap:wrap}.viewer-top span:last-child{font-size:9px}.stage{height:390px;perspective:1100px}.main-controls{gap:8px;padding:20px 0}.main-controls button{font-size:11px;padding:10px 12px}.primary{min-width:160px}.detail-controls{display:block;padding:20px 0}.scrubber{max-width:none}.rotation-controls{margin-top:20px;justify-content:center;gap:6px}.rotation-controls button{font-size:10px;padding:10px}.demo-notes{font-size:10px}.package-shadow{top:calc(50% + 110px);width:130px;left:calc(50% - 65px)}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important}}.render-filters{position:absolute;pointer-events:none}.paper>img,.paper-inside>img{position:absolute;inset:0;width:100%;height:100%;display:block}.paper>.ink-original{opacity:calc(1 - var(--clean-mix,0))}.paper>.ink-clean{opacity:var(--clean-mix,0);filter:url(#no-cutlines)}.paper-inside{background:none!important;clip-path:none!important;border-radius:0!important}.paper-inside>img{transform:scaleX(-1);filter:url(#paper-stock)}.bottom-backing{position:absolute;left:0;top:279.1px;width:240px;height:80px;background:#efa0c3;transform-origin:center top;transform:rotateX(-90deg);backface-visibility:hidden;opacity:var(--base-opacity,0)}.bottom-main,.diagonal-hinge{position:absolute;inset:0;transform-style:preserve-3d}.diagonal-hinge{transform-origin:100% 0}.bottom-main .paper>img,.bottom-main .paper-inside>img{clip-path:polygon(0 0,100% 0,78.47% 77.66%,65.78% 59.57%,49.56% 59.57%,49.56% 72.34%,40.12% 72.34%,32.74% 100%,3.83% 100%)}.diagonal-hinge .paper>img,.diagonal-hinge .paper-inside>img{clip-path:polygon(100% 0,96.16% 12.77%,98.82% 36.17%,97.05% 100%,78.47% 77.66%)}.bottom-backing{background:none;backface-visibility:visible;transform-style:preserve-3d;top:279.5px}.base-outside,.base-inside{position:absolute;inset:0;backface-visibility:hidden}.base-outside{background:#efa0c3;transform:translateZ(.12px)}.base-inside{background:#f8c4dc;transform:rotateY(180deg) translateZ(.12px)}",jl=":host{font-family:inherit;color:#51455b;container-type:inline-size}button,input{font:inherit}button{border:1px solid #dcd5e1;border-radius:2px;background:#fff;color:#6e6476;font-size:11px;font-weight:400;min-height:44px;transition:background .15s}button:not(:disabled):hover{border-color:#92839f;background:#f5f2f7}button:focus-visible,input:focus-visible,[tabindex]:focus-visible{outline:2px solid #96805a;outline-offset:3px}.model-name{font-size:16px;font-weight:400;color:#5c4f66}.dimensions{color:#85798d;font-size:10px;line-height:1.8}.viewer{border:1px solid #ddd6e3;border-radius:0;background:#f7f7f5;overflow:hidden}.viewer-top,.viewer-bottom{padding:13px 16px;border-color:#e3dce8;color:#83738d;font-size:10px;gap:10px}.viewer-top{flex-wrap:wrap}.viewer-top span:last-child{color:#95859f}.stage{height:390px;background:#f7f7f5}.primary{background:#403447;color:#fff;border-color:#403447;min-width:175px}.primary:not(:disabled):hover{border-color:#403447;background:#605168;color:#fff}.main-controls{gap:8px;padding:20px 0}.detail-controls{border-color:#e3dce8;gap:20px;padding:20px 0}.scrubber label{color:#85798d}.scrubber input{accent-color:#927ba1}.rotation-controls{gap:6px}.rotation-controls button{padding:8px 12px}.demo-notes{color:#97869f;font-size:10px;line-height:1.9}.viewer-bottom{min-height:52px}#progress-text{color:#9279a1}@container (max-width:740px){.detail-controls{display:block}.scrubber{max-width:none}.rotation-controls{margin-top:15px;justify-content:flex-start}.stage{height:360px}.model-name{font-size:15px}}@container (max-width:400px){.stage{height:300px}.viewer-top,.viewer-bottom{font-size:9px;padding:12px}.main-controls{justify-content:flex-start}.main-controls button{padding:9px 11px;font-size:10px}.primary{min-width:152px}.rotation-controls button{padding:8px 10px;font-size:10px}.demo-notes{font-size:9px}}@media(prefers-reduced-motion:reduce){*{transition:none!important}}",Ao=new Map;function Ql(i){return Ao.has(i)||Ao.set(i,new Oh().loadAsync(i).then(e=>(e.colorSpace=hn,e.minFilter=kt,e.magFilter=kt,e.generateMipmaps=!1,e))),Ao.get(i)}const S0=`varying vec2 vUv;varying vec3 vNormal;
void main(){vUv=uv;vNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,R0=`precision highp float;
uniform sampler2D printMap;uniform vec2 texSize;uniform vec3 stock;uniform float clean;
uniform vec4 edges[16];uniform int edgeCount;varying vec2 vUv;varying vec3 vNormal;
float edgeDistance(vec2 p,vec2 a,vec2 b){vec2 ab=b-a;float t=clamp(dot(p-a,ab)/max(dot(ab,ab),0.0001),0.0,1.0);return length(p-a-ab*t);}
float outlineDistance(vec2 uv){float d=10000.0;for(int i=0;i<16;i++){if(i<edgeCount)d=min(d,edgeDistance(uv*texSize,edges[i].xy*texSize,edges[i].zw*texSize));}return d;}
bool cutInk(vec3 c){return c.r>0.88&&c.g<0.49&&c.r-c.g>0.34&&(c.r-c.b>0.22||(c.r>0.96&&c.g<0.18));}
void main(){vec4 c=texture2D(printMap,vUv);if(c.a<0.15)discard;
 float nearEdge=10000.0;for(int i=0;i<16;i++){if(i<edgeCount)nearEdge=min(nearEdge,edgeDistance(vUv*texSize,edges[i].xy*texSize,edges[i].zw*texSize));}
 bool whiteMargin=min(c.r,min(c.g,c.b))>0.97;
 if(clean>0.0&&nearEdge<6.5&&(nearEdge<2.5||cutInk(c.rgb)||whiteMargin)){
  vec3 sum=vec3(0.0);float count=0.0;
  for(int radius=1;radius<=3;radius++){for(int n=0;n<8;n++){float angle=float(n)*0.785398163;vec2 offset=vec2(cos(angle),sin(angle))*float(radius*3)/texSize;vec4 sampleColor=texture2D(printMap,clamp(vUv+offset,vec2(0.0),vec2(1.0)));
   if(sampleColor.a>0.95&&outlineDistance(clamp(vUv+offset,vec2(0.0),vec2(1.0)))>3.5&&!cutInk(sampleColor.rgb)&&min(sampleColor.r,min(sampleColor.g,sampleColor.b))<0.97){sum+=sampleColor.rgb;count+=1.0;}
  }}vec3 fixedColor=count>0.0?sum/count:stock;c.rgb=mix(c.rgb,fixedColor,clean);
 }
 if(!gl_FrontFacing)c.rgb=vec3(1.0,0.975,0.985);
 float light=0.92+0.08*abs(dot(normalize(vNormal),normalize(vec3(-0.4,0.8,1.0))));
 gl_FragColor=vec4(c.rgb*light,1.0);
}`;function $l(i,e,t){const n=e||[[0,0],[100,0],[100,100],[0,100]],r=Array.from({length:16},()=>new st);n.forEach(([a,c],l)=>{const[u,h]=n[(l+1)%n.length];r[l].set(a/100,1-c/100,u/100,1-h/100)});const o=new gn({vertexShader:S0,fragmentShader:R0,side:Ot,depthTest:!0,depthWrite:!0,toneMapped:!1,uniforms:{printMap:{value:i},texSize:{value:new Me(i.image.width,i.image.height)},stock:{value:new N},clean:{value:0},edges:{value:r},edgeCount:{value:n.length}}}),s=new Ze(t).convertLinearToSRGB();return o.uniforms.stock.value=new N(s.r,s.g,s.b),o}const To=i=>Math.max(0,Math.min(1,i)),E0=i=>i*i*(3-2*i);let A0=0;function T0(i,e,t={}){const n=e[0],r=n.shape==="pouch",o=`retail-${++A0}`,[s,a,c]=n.dimensions,l=`${n.label} ${n.title}`,u=i.attachShadow({mode:"open"}),h=D=>u.querySelector(D),d=D=>u.querySelectorAll(D);u.innerHTML=`<style>${Jl}
 :host{display:block;min-width:0;font-family:Arial,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;color:#292929}.model-name{font-size:17px;margin:0 0 9px;font-weight:600}.dimensions{font-size:11px;margin:0 0 18px;color:#555;line-height:1.8}.stage{height:470px;touch-action:pan-y}.stage canvas{display:block;width:100%;height:100%}.main-controls{padding:20px 0;flex-wrap:wrap}.scrubber{max-width:360px}.demo-notes{padding-bottom:0}.demo-notes p{margin:0}.viewer-bottom{min-height:55px}.render-error{padding:35px;font-size:12px;line-height:1.9}
 @media(max-width:700px){.stage{height:370px}.model-name{font-size:15px}.dimensions{font-size:10px}.detail-controls{display:block}.scrubber{max-width:none}.rotation-controls{margin-top:18px}.viewer-top{font-size:9px}.demo-notes{font-size:10px}}
 ${jl}</style><div class="widget"><h4 class="model-name">${l}</h4><p class="dimensions">${n.dimensionNote}</p>
 <section class="viewer" aria-label="${l} 입체 목업"><div class="viewer-top"><span id="view-state">01 / 평면 그래픽</span><span id="view-hint">자료를 불러오는 중</span></div><div class="stage" tabindex="0" role="group" aria-label="${l}. 입체 상태에서 드래그 회전, 휠 확대·축소가 가능합니다." data-state="loading"></div><div class="viewer-bottom"><span id="phase-text" aria-live="polite">자료를 불러오는 중</span><span id="progress-text">0%</span></div></section>
 <div class="main-controls"><button id="fold-toggle" class="primary" disabled>3D 목업으로 보기</button><button id="flat-reset" disabled>평면 그래픽으로 초기화</button></div>
 <div class="detail-controls"><div class="scrubber"><label for="${o}">${r?"앞뒤 인쇄면 → 실링 파우치":"전면 그래픽 → 입체 진열 팩"}</label><input id="${o}" class="fold-progress" type="range" min="0" max="100" step="1" value="0" disabled /></div><div class="rotation-controls" role="group" aria-label="패키지 시점"><button data-view="front" disabled>정면</button><button data-view="back" disabled>뒷면</button><button data-view="side" disabled>측면</button><button data-view="bottom" disabled>바닥</button><button data-view="reset" disabled>초기 시점</button></div></div>
 <div class="demo-notes"><p>${r?"제공된 앞·뒷면으로 봉투를 만들고, 상하 실링과 중앙의 볼륨을 표현했습니다.":"제공 전면 그래픽으로 얇은 진열 팩과 원형 배지의 높이감을 표현했습니다. 후면은 자료가 없어 무지로 표시합니다."}</p><p>약 2초 입체 전환 · 드래그 회전 · 휠 확대/축소 · 초기 시점에서 배율 복원.</p></div></div>`;const f=h(".stage"),v=h("#fold-toggle"),x=h(".fold-progress");let m=t.progress??0,p=t.rx??-12,R=t.ry??-28,S=t.zoom??1,_,T,A,U,P,y,w,L=!1,k=!1,z=!1,W=0,Y=!1,X=0,oe=0;const q=[],he=[],_e=[],Ee=[];i.dataset.variant=n.id,i.dataset.state="loading",i.dataset.dimensions=n.dimensions.join(",");function $(D){const Q=new Vl({color:D,roughness:.5,metalness:.03,side:Ot});return q.push(Q),Q}function Te(D){const Q=$l(D,null,n.stock),ne=Q.uniforms.edges.value;let ie=Q.uniforms.edgeCount.value;for(const g of n.sealLines)ne[ie++].set(0,1-g,1,1-g);const[V,ce,b]=n.hole;for(let g=0;g<8;g++){const C=g*Math.PI/4,B=(g+1)*Math.PI/4;ne[ie++].set(V+b*Math.cos(C),1-ce+b*s/a*Math.sin(C),V+b*Math.cos(B),1-ce+b*s/a*Math.sin(B))}return Q.uniforms.edgeCount.value=ie,q.push(Q),Q}function Fe(D=a/2,Q=-a/2,ne=!1){const ie=new Gs;if(ie.moveTo(-s/2,D),ie.lineTo(s/2,D),ie.lineTo(s/2,Q),ie.lineTo(-s/2,Q),ie.closePath(),ne){const[V,ce,b]=n.hole,g=new ws;g.absarc((V-.5)*s,a/2-ce*a,b*s,0,Math.PI*2,!0),ie.holes.push(g)}return ie}function Ue(D){const Q=D.getAttribute("position"),ne=[];for(let ie=0;ie<Q.count;ie++)ne.push(Q.getX(ie)/s+.5,Q.getY(ie)/a+.5);return D.setAttribute("uv",new ht(ne,2)),he.push(D),D}function H(D,Q,ne,ie=!1){const V=new ut(Ue(Q),ne);D.add(V);const ce=Q.getAttribute("position"),b=[];for(let g=0;g<ce.count;g++){const C=ce.getX(g),B=ce.getY(g),Z=To((a/2-15-B)/(a-30)),G=To(C/s+.5);b.push(r?.16+(ie?c/2*Math.pow(Math.max(0,Math.sin(Math.PI*G)*Math.sin(Math.PI*Z)),.8):0):c/2+.02)}return _e.push({mesh:V,depth:b}),V}function j(D){T=new Os,T.background=new Ze("#f7f7f5"),T.add(new Wl("#ffffff","#b7acb5",2));const Q=new Ss("#ffffff",2.2);Q.position.set(-120,200,300),T.add(Q),A=new Ut(30,1,10,5e3),U=new Ct,T.add(U),P=new Ct,y=new Ct,U.add(P,y);const ne=Te(D.front),ie=D.back?Te(D.back):$("#f6f1f3");for(const[b,g]of[[P,ne],[y,ie]])if(r){H(b,new Ii(Fe(a/2,a/2-15,!0),48),g);const C=new Ki(s,a-30,56,48);H(b,C,g,!0),H(b,new Ii(Fe(-a/2+15,-a/2),8),g)}else H(b,new Ii(Fe(a/2,-a/2,!0),64),g);const V=new Vs(Fe(a/2,-a/2,!0),{depth:r?.3:c,bevelEnabled:!1,curveSegments:48,steps:1});V.translate(0,0,-(r?.3:c)/2),he.push(V);const ce=new pi;if(ce.visible=!1,q.push(ce),w=new ut(V,[ce,$(r?n.stock:"#e2d5dc")]),U.add(w),!r){const b=D.front,g=n.badgeRelief||[420,590].flatMap(C=>[120,290,460].map(B=>({u:B/585,v:C/b.image.height,r:80/585})));for(const C of g){const B=C.r*s,Z=(C.u-.5)*s,G=a/2-C.v*a,ye=new kr(B,64),le=ye.getAttribute("position"),xe=[];for(let Pe=0;Pe<le.count;Pe++)xe.push((le.getX(Pe)+Z)/s+.5,(le.getY(Pe)+G)/a+.5);ye.setAttribute("uv",new ht(xe,2)),he.push(ye);const ve=new Ct,ae=new ut(ye,Te(b));ae.position.z=.85,ve.add(ae);const ue=new Br(B,B,1.6,64,1,!0);ue.rotateX(Math.PI/2),he.push(ue),ve.add(new ut(ue,$(n.badgeRelief?"#dfdce1":n.group==="daiso"?"#dac28d":n.stock))),ve.position.set(Z,G,0),P.add(ve),Ee.push(ve)}}}function me(){W&&cancelAnimationFrame(W),W=0,Y=!1,f.classList.remove("dragging"),f.removeAttribute("aria-busy"),v.disabled=!L}function be(){if(!L||k)return;const D=E0(m),Q=Math.PI/180;for(const{mesh:Z,depth:G}of _e){const ye=Z.geometry.getAttribute("position");for(let le=0;le<ye.count;le++)ye.setZ(le,G[le]*D);ye.needsUpdate=!0,Z.geometry.computeVertexNormals()}P.position.x=r?-s*.6*(1-D):0,y.position.x=r?s*.6*(1-D):0,y.rotation.y=Math.PI*D,y.visible=r||m>.001,w.scale.z=D,w.visible=m>.001;for(const Z of Ee)Z.visible=m>.001,Z.position.z=(c/2+.85)*D,Z.scale.z=D;q.forEach(Z=>{Z.uniforms?.clean&&(Z.uniforms.clean.value=n.cleanCutlines===!1?0:D)}),U.rotation.set(-p*D*Q,R*D*Q,0,"XYZ");const ne=f.clientWidth,ie=f.clientHeight,V=ne/ie,ce=Math.tan(A.fov*Q/2),b=Math.max(a/2/ce,s*(r?2.25:1.1)/2/ce/V)*1.16,g=Math.hypot(s,a,c)/2/Math.sin(A.fov*Q/2)*1.15;A.aspect=V,A.position.z=(b+(g-b)*D)/S,A.updateProjectionMatrix(),_.render(T,A);const C=m>=.999,B=m<=.001;i.dataset.state=f.dataset.state=B?"flat":C?"folded":"partial",h("#view-state").textContent=B?"01 / 평면 그래픽":C?"03 / 입체 패키지":"02 / 입체 전환",h("#view-hint").textContent=C?"드래그 회전 · 휠 확대/축소":"휠 확대/축소",h("#phase-text").textContent=B?r?"앞면 · 뒷면 인쇄 그래픽":"전면 인쇄 그래픽":C?"완성 · 드래그로 회전":r?"앞뒤 면 조립 · 실링과 볼륨 형성":"진열 팩 · 배지 높이감 형성",h("#progress-text").textContent=Math.round(m*100)+"%",x.value=Math.round(m*100),x.setAttribute("aria-valuetext",`${C?"입체 목업":"평면에서 입체로 전환"}, ${Math.round(m*100)}퍼센트`),v.textContent=C?"평면 그래픽으로 보기":B?"3D 목업으로 보기":"이어서 3D로 보기",d("[data-view]").forEach(Z=>Z.disabled=!C)}function ge(){L&&!k&&(_.setSize(f.clientWidth,f.clientHeight,!1),be())}async function ze(){if(!(z||k)){z=!0;try{_=new qs({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"}),_.setPixelRatio(Math.min(devicePixelRatio,1.5)),f.append(_.domElement);const D=Object.fromEntries(await Promise.all(Object.entries(n.textures).map(async([Q,ne])=>[Q,await Ql(ne)])));if(k)return;if(n.badgeRelief)for(const Q of Object.values(D))Q.generateMipmaps=!0,Q.minFilter=Sn,Q.anisotropy=Math.min(8,_.capabilities.getMaxAnisotropy()),Q.needsUpdate=!0;j(D),L=!0,v.disabled=x.disabled=h("#flat-reset").disabled=!1,ge()}catch(D){i.dataset.state=f.dataset.state="error",h("#phase-text").textContent="3D 표시 실패",f.innerHTML='<p class="render-error">3D 화면을 표시할 수 없습니다. 최신 Chrome 또는 Safari에서 다시 열어주세요.</p>',console.error(D)}}}function je(D){if(!L)return;me();const Q=m;if(matchMedia("(prefers-reduced-motion: reduce)").matches){m=D,be();return}v.disabled=!0,f.setAttribute("aria-busy","true");const ne=performance.now(),ie=Math.max(1,2e3*Math.abs(D-Q)),V=ce=>{const b=To((ce-ne)/ie);m=Q+(D-Q)*b,be(),b<1?W=requestAnimationFrame(V):(me(),be())};W=requestAnimationFrame(V)}v.onclick=()=>je(m>=.999?0:1),h("#flat-reset").onclick=()=>{p=-12,R=-28,S=1,je(0)},x.oninput=()=>{me(),m=Number(x.value)/100,be()};const E={front:[0,0],back:[0,180],side:[0,-82],bottom:[85,30],reset:[-12,-28]};d("[data-view]").forEach(D=>D.onclick=()=>{[p,R]=E[D.dataset.view],D.dataset.view==="reset"&&(S=1),be()}),f.onpointerdown=D=>{m<.999||W||(Y=!0,X=D.clientX,oe=D.clientY,f.setPointerCapture(D.pointerId),f.classList.add("dragging"))},f.onpointermove=D=>{Y&&(R+=(D.clientX-X)*.5,p=Math.max(-90,Math.min(90,p-(D.clientY-oe)*.35)),X=D.clientX,oe=D.clientY,be())},f.onpointerup=f.onpointercancel=()=>{Y=!1,f.classList.remove("dragging")},f.onkeydown=D=>{m<.999||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(D.key)||(D.preventDefault(),D.key==="ArrowLeft"&&(R-=10),D.key==="ArrowRight"&&(R+=10),D.key==="ArrowUp"&&(p=Math.max(-90,p-10)),D.key==="ArrowDown"&&(p=Math.min(90,p+10)),be())},f.addEventListener("wheel",D=>{if(!L||W)return;D.preventDefault();const Q=D.deltaY*(D.deltaMode===1?16:D.deltaMode===2?f.clientHeight:1);S=Math.max(.65,Math.min(2.5,S*Math.exp(-Math.max(-200,Math.min(200,Q))*.0015))),be()},{passive:!1});const se=new ResizeObserver(ge);se.observe(f);const te=new IntersectionObserver(D=>{D.some(Q=>Q.isIntersecting)&&(ze(),te.disconnect())},{rootMargin:"500px"});te.observe(i);const ee={getState(){return{progress:m,rx:p,ry:R,zoom:S}},setView(D,Q){p=D,R=Q,be()},setBackground(D){T&&(T.background.set(D),be())},destroy(){k=!0,me(),te.disconnect(),se.disconnect(),he.forEach(D=>D.dispose()),q.forEach(D=>D.dispose()),_?.dispose(),u.innerHTML=""}};return i.viewer=ee,ee}const al=i=>Math.max(0,Math.min(1,i)),L0=i=>i*i*(3-2*i);let U0=0;function ec(i,e,t={}){if(["retail-card","pouch"].includes(e[0].shape))return T0(i,e,t);const n=i.attachShadow({mode:"open"}),r=++U0,o=e[0],s=V=>n.querySelector(V),a=V=>n.querySelectorAll(V),c=o.title?`${o.label} ${o.title}`:o.group==="full"?"풀박스":`${o.label} ${o.group==="single"?"싱글팩":"리미티드 에디션"}`;n.innerHTML=`<style>${Jl}
 :host{display:block;min-width:0;font-family:Arial,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;color:#292929}.model-name{font-size:17px;margin:0 0 9px;font-weight:600}.dimensions{font-size:11px;margin:0 0 18px;color:#555}.stage{height:470px;touch-action:pan-y}.stage canvas{display:block;width:100%;height:100%}.main-controls{padding:20px 0;flex-wrap:wrap}.scrubber{max-width:360px}.demo-notes{padding-bottom:0}.demo-notes p{margin:0}.render-error{padding:35px;font-size:12px;line-height:1.9}.viewer-bottom{min-height:55px}
 @media(max-width:700px){.stage{height:370px}.model-name{font-size:15px}.dimensions{font-size:10px}.detail-controls{display:block}.scrubber{max-width:none}.rotation-controls{margin-top:18px}.viewer-top{font-size:9px}.demo-notes{font-size:10px}}
 ${jl}</style><div class="widget"><h4 class="model-name">${c}</h4><p class="dimensions">${o.dimensionNote||`${o.dimensions.join(" × ")} mm · ${o.group==="single"?"제공 사양 기준":"인수인계 규격 기록 기준"}`}</p>
 <section class="viewer" aria-label="${c} 전개도 접힘 뷰어"><div class="viewer-top"><span id="view-state">01 / 평면 전개도</span><span id="view-hint">자료를 불러오는 중</span></div><div class="stage" tabindex="0" role="group" aria-label="${c}. 마우스 휠로 확대·축소하고, 접은 후 드래그 또는 방향키로 회전할 수 있습니다." data-state="loading"></div><div class="viewer-bottom"><span id="phase-text" aria-live="polite">자료를 불러오는 중</span><span id="progress-text">0%</span></div></section>
 <div class="main-controls"><button id="fold-toggle" class="primary" disabled>접어서 3D로 보기</button><button id="flat-reset" disabled>전개도로 초기화</button>${o.shape==="display"?'<button id="display-toggle" disabled aria-pressed="false">진열형으로 보기</button>':""}</div>
 <div class="detail-controls"><div class="scrubber"><label for="fold-progress-${r}">접힘 단계 직접 살펴보기</label><input id="fold-progress-${r}" class="fold-progress" type="range" min="0" max="100" step="1" value="0" disabled aria-valuetext="평면 전개도, 0퍼센트"/></div><div class="rotation-controls" role="group" aria-label="완성된 패키지 시점"><button data-view="front" disabled>정면</button><button data-view="back" disabled>뒷면</button><button data-view="side" disabled>측면</button><button data-view="bottom" disabled>바닥</button><button data-view="reset" disabled>초기 시점</button></div></div>
 <div class="demo-notes"><p>전개도 → 약 2초 접힘 → 드래그 회전 · 휠 확대/축소 → 다시 펼치기. 칼선은 펼친 전개도에서만 표시합니다.</p><p>제공 그래픽과 규격 기록을 바탕으로 한 시각적 시연입니다. 생산용 조립·접착 순서와 종이 두께의 정밀 검증은 별도입니다.</p></div></div>`;const l=s(".stage"),u=s("#fold-toggle"),h=s(".fold-progress"),[d,f,v]=o.dimensions,{tuck:x,dustTop:m,bottom:p,dustBottom:R,glue:S}=o.heights;let _,T,A,U,P,y,w=!1,L=!1,k=!1,z=t.progress??0,W=0,Y=t.rx??-12,X=t.ry??-28,oe=t.zoom??1,q=!1,he=0,_e=0,Ee=t.displayOpen??!1;const $={},Te=[],Fe=[],Ue=[],H=(V,ce)=>L0(al((z-V)/(ce-V)));i.dataset.variant=o.id,i.dataset.state="loading",i.dataset.dimensions=o.dimensions.join(",");function j(){W&&cancelAnimationFrame(W),W=0,q=!1,l.classList.remove("dragging"),l.removeAttribute("aria-busy"),u.disabled=!w}function me(V,ce,b,g=0,C=0,B=0){const Z=b||[[0,0],[100,0],[100,100],[0,100]],G=Z.map(([ae,ue])=>new Me(g+V*ae/100-B,-C-ce*ue/100)),ye=Kt.triangulateShape(G,[]),le=[],xe=[];for(const ae of ye){let[ue,Pe,De]=ae;const Se=G[ue],Ve=G[Pe],I=G[De];(Ve.x-Se.x)*(I.y-Se.y)-(Ve.y-Se.y)*(I.x-Se.x)<0&&([Pe,De]=[De,Pe]);for(const de of[ue,Pe,De])le.push(G[de].x,G[de].y,0),xe.push(Z[de][0]/100,1-Z[de][1]/100)}const ve=new Bt;return ve.setAttribute("position",new ht(le,3)),ve.setAttribute("uv",new ht(xe,2)),ve.computeVertexNormals(),Fe.push(ve),ve}function be(V,ce){const b=$l(V,ce,o.stock);return Te.push(b),b}function ge(V,ce,b,g,C=0,B=0){const Z=new Ct;if(ce.add(Z),$[V]=Z,o.shape==="display"&&["front","left","right"].includes(V)){const G=o.tearHeight*100,ye=V==="front"?[[0,G],[100,G],[100,100],[0,100]]:V==="left"?[[0,0],[100,G],[100,100],[0,100]]:[[0,G],[100,0],[100,100],[0,100]],le=V==="front"?[[0,0],[100,0],[100,G],[0,G]]:V==="left"?[[0,0],[100,0],[100,G]]:[[0,0],[100,0],[0,G]];Z.add(new ut(me(b,g,ye,C,B),be(ze[V],ye)));const xe=new ut(me(b,g,le,C,B),be(ze[V],le));Z.add(xe),Ue.push(xe)}else if(V==="bottom-front"||V==="bottom-back"){Z.add(new ut(me(b,g,o.bottomMain),be(ze[V],o.bottomMain)));const G=new Ct;G.position.x=b,Z.add(G),G.add(new ut(me(b,g,o.bottomTab,0,0,b),be(ze[V],o.bottomTab))),$[V+"-tab"]=G}else Z.add(new ut(me(b,g,null,C,B),be(ze[V])));return Z}let ze={};function je(){T=new Os,T.background=new Ze("#f7f7f5"),A=new Ut(30,1,10,5e3),A.position.z=1e3,U=new Ct,T.add(U),P=new Ct,P.position.set(-d/2,f/2,v/2),U.add(P);const V=ge("left",P,v,f,-v,0),ce=ge("back",V,d,f,-d,0);ce.position.x=-v;const b=ge("glue",ce,S,f,-S,0);b.position.x=-d;const g=ge("right",P,v,f);g.position.x=d,ge("front",P,d,f);const C=ge("lid",P,d,v,0,-v),B=ge("lid-tuck",C,d,x,0,-x);B.position.y=v,ge("dust-left-top",V,v,m,-v,-m),ge("dust-right-top",g,v,m,0,-m);const Z=ge("dust-left-bottom",V,v,R,-v,0);Z.position.y=-f;const G=ge("dust-right-bottom",g,v,R);G.position.y=-f;const ye=ge("bottom-front",P,d,p);ye.position.y=-f,ge("bottom-back",ce,d,p).position.set(-d,-f,0);const xe=me(d,v),ve=new pi({color:o.stock,side:Ot});if(Te.push(ve),y=new ut(xe,ve),y.rotation.x=Math.PI/2,y.position.y=-f+(o.shape==="display"?1:.32),P.add(y),o.shape==="display"){const ae=new pi({color:"#fff9fc",side:yt});Te.push(ae),ve.side=mn,y.add(new ut(xe,ae))}}function E(){if(!w||L)return;const V=Math.PI/180;$.left.rotation.y=-90*V*H(.08,.32),$.back.rotation.y=-90*V*H(.26,.52),$.right.rotation.y=90*V*H(.4,.61),$.glue.rotation.y=-90*V*H(.5,.65);for(const ue of["dust-left-top","dust-right-top"])$[ue].rotation.x=-90*V*H(.61,.73);for(const ue of["dust-left-bottom","dust-right-bottom"])$[ue].rotation.x=90*V*H(.62,.73);$["bottom-back"].rotation.x=90*V*H(.69,.82),$["bottom-front"].rotation.x=90*V*H(.74,.87);const ce=new N(o.diagonal[0]*d,o.diagonal[1]*p,0).normalize();for(const ue of["bottom-front-tab","bottom-back-tab"])$[ue].quaternion.setFromAxisAngle(ce,Math.PI*H(.57,.74)),$[ue].position.z=-.35*H(.57,.74);$.lid.rotation.x=-90*V*H(.76,.94),$["lid-tuck"].rotation.x=-90*V*H(.87,.98);const b=H(.6,1);if($["dust-left-top"].position.y=$["dust-right-top"].position.y=-.4*b,$["dust-left-bottom"].position.y=$["dust-right-bottom"].position.y=-f+.6*b,$["bottom-back"].position.y=-f+.25*b,$.glue.position.set(-d+.65*b,0,0),$["lid-tuck"].position.set(0,v-.65*b,0),o.shape==="display"){const ue=Ee&&z>=.999;Ue.forEach(Pe=>Pe.visible=!ue);for(const Pe of["lid","dust-left-top","dust-right-top"])$[Pe].visible=!ue;s("#display-toggle").disabled=z<.999,s("#display-toggle").textContent=ue?"상단 닫힌 형태로 보기":"진열형으로 보기",s("#display-toggle").setAttribute("aria-pressed",String(ue))}y.visible=z>.88,Te.forEach(ue=>{ue.uniforms&&(ue.uniforms.clean.value=H(.03,.65))});const g=H(0,1);U.rotation.set(-Y*g*V,X*g*V,0,"XYZ"),U.position.set((d+S)/2*(1-g),-(v+x-p)/2*(1-g),0);const C=l.clientWidth,B=l.clientHeight,Z=C/B;A.aspect=Z;const G=Math.tan(A.fov*V/2),ye=Math.max((f+v+x+p)/2/G,(2*d+2*v+S)/2/G/Z)*1.13,le=Math.hypot(d,f,v)/2/Math.sin(A.fov*V/2)*1.12;A.position.z=(ye+(le-ye)*g)/oe,A.updateProjectionMatrix(),_.render(T,A);const xe=z>=.999,ve=z<=.001;l.dataset.state=i.dataset.state=ve?"flat":xe?"folded":"partial",s("#view-state").textContent=ve?"01 / 평면 전개도":xe?"03 / 입체 패키지":"02 / 접힘 과정",s("#view-hint").textContent=xe?"드래그 회전 · 휠 확대/축소":"휠 확대/축소 · 연결된 면 접기";const ae=ve?"평면 전개도":z<.61?"옆면과 뒷면 접기":z<.76?"안쪽 날개 접기":z<.9?"바닥과 덮개 접기":xe?"완성 · 드래그로 회전":"덮개 마무리";s("#phase-text").textContent=ae,s("#progress-text").textContent=Math.round(z*100)+"%",h.value=Math.round(z*100),h.setAttribute("aria-valuetext",ae+", "+Math.round(z*100)+"퍼센트"),u.textContent=xe?"전개도로 펼치기":ve?"접어서 3D로 보기":"이어서 접기",a("[data-view]").forEach(ue=>ue.disabled=!xe)}function se(){!_||!w||(_.setSize(l.clientWidth,l.clientHeight,!1),E())}async function te(){if(!(k||L)){k=!0;try{_=new qs({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"}),_.setPixelRatio(Math.min(devicePixelRatio,1.5)),l.append(_.domElement),_.domElement.addEventListener("webglcontextlost",ce=>{ce.preventDefault(),j(),s("#phase-text").textContent="3D 화면이 중단됐습니다. 페이지를 새로 열어주세요."});const V=await Promise.all(Object.entries(o.textures).map(async([ce,b])=>[ce,await Ql(b)]));if(L)return;ze=Object.fromEntries(V),je(),w=!0,u.disabled=h.disabled=s("#flat-reset").disabled=!1,se()}catch(V){i.dataset.state=l.dataset.state="error",l.innerHTML='<p class="render-error">이 브라우저에서 3D 화면을 표시할 수 없습니다. 최신 Chrome 또는 Safari에서 다시 열어주세요.</p>',s("#phase-text").textContent="3D 표시 실패",console.error(V)}}}function ee(V){if(!w)return;j();const ce=z;if(matchMedia("(prefers-reduced-motion: reduce)").matches||Math.abs(V-ce)<1e-4){z=V,E();return}const b=performance.now(),g=2e3*Math.abs(V-ce);u.disabled=!0,l.setAttribute("aria-busy","true");const C=B=>{const Z=al((B-b)/g);z=ce+(V-ce)*Z,E(),Z<1?W=requestAnimationFrame(C):(j(),E())};W=requestAnimationFrame(C)}u.onclick=()=>{Y=-12,X=-28,ee(z>=.999?0:1)},s("#flat-reset").onclick=()=>{Y=-12,X=-28,oe=1,ee(0)},h.oninput=()=>{j(),z=Number(h.value)/100,E()},s("#display-toggle")&&(s("#display-toggle").onclick=()=>{Ee=!Ee,E()});const D={front:[0,0],back:[0,180],side:[0,-90],bottom:[85,30],reset:[-12,-28]};a("[data-view]").forEach(V=>V.onclick=()=>{[Y,X]=D[V.dataset.view],V.dataset.view==="reset"&&(oe=1),E()}),l.onpointerdown=V=>{z<.999||W||(q=!0,he=V.clientX,_e=V.clientY,l.setPointerCapture(V.pointerId),l.classList.add("dragging"))},l.onpointermove=V=>{q&&(X+=(V.clientX-he)*.5,Y=Math.max(-90,Math.min(90,Y-(V.clientY-_e)*.35)),he=V.clientX,_e=V.clientY,E())},l.onpointerup=l.onpointercancel=()=>{q=!1,l.classList.remove("dragging")},l.onkeydown=V=>{z<.999||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(V.key)||(V.preventDefault(),V.key==="ArrowLeft"&&(X-=10),V.key==="ArrowRight"&&(X+=10),V.key==="ArrowUp"&&(Y=Math.max(-90,Y-10)),V.key==="ArrowDown"&&(Y=Math.min(90,Y+10)),E())},l.addEventListener("wheel",V=>{if(!w||W)return;V.preventDefault();const ce=V.deltaY*(V.deltaMode===1?16:V.deltaMode===2?l.clientHeight:1);oe=Math.max(.65,Math.min(2.5,oe*Math.exp(-Math.max(-200,Math.min(200,ce))*.0015))),E()},{passive:!1});const Q=new ResizeObserver(se);Q.observe(l);const ne=new IntersectionObserver(V=>{V.some(ce=>ce.isIntersecting)&&(te(),ne.disconnect())},{rootMargin:"500px"});ne.observe(i);const ie={getState(){return{progress:z,rx:Y,ry:X,zoom:oe,displayOpen:Ee}},getInteriorBounds(){if(!w)return null;P.updateWorldMatrix(!0,!0);const V=new lt().copy(P.matrixWorld).invert(),ce={};for(const b of["glue","lid-tuck"]){const g=new xi;$[b].traverse(C=>{if(!C.isMesh)return;const B=C.geometry.getAttribute("position");for(let Z=0;Z<B.count;Z++)g.expandByPoint(new N().fromBufferAttribute(B,Z).applyMatrix4(C.matrixWorld).applyMatrix4(V))}),ce[b]={min:g.min.toArray(),max:g.max.toArray()}}return ce},setBackground(V){T&&(T.background.set(V),E())},setView(V,ce){Y=V,X=ce,E()},projectBottom(){return w?(P.updateWorldMatrix(!0,!1),[[0,-f,0],[d,-f,0],[d,-f,-v],[0,-f,-v]].map(V=>{const ce=new N(...V).applyMatrix4(P.matrixWorld).project(A);return[(ce.x+1)/2*l.clientWidth,(1-ce.y)/2*l.clientHeight]})):[]},destroy(){L=!0,j(),ne.disconnect(),Q.disconnect(),Fe.forEach(V=>V.dispose()),Te.forEach(V=>V.dispose()),_?.dispose(),n.innerHTML=""}};return i.viewer=ie,ie}const C0=[{id:"single-pink",group:"single",label:"하츄핑",dimensions:[120,140,40],stock:"#efa0c3",shape:"single",heights:{tuck:15.163727959697733,dustTop:27.858942065491185,bottom:33.14861460957179,dustBottom:22.216624685138537,glue:15.163727959697733},bottomMain:[[0,0],[100,0],[78.46607669616519,77.6595744680851],[65.78171091445427,59.57446808510638],[49.557522123893804,59.57446808510638],[49.557522123893804,72.3404255319149],[40.117994100294986,72.3404255319149],[32.743362831858406,100],[3.8348082595870205,100]],bottomTab:[[100,0],[96.16519174041298,12.76595744680851],[98.82005899705014,36.17021276595745],[97.05014749262537,100],[78.46607669616519,77.6595744680851]],diagonal:[.2153392330383481,.776595744680851],source:"싱글팩-01.png",textures:{front:new URL(""+new URL("front-e5GXidIH.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-DMiR0G3S.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-BRXMtE7b.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-CMX7rSdK.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGNCAYAAACIb4iHAAADWUlEQVR4nO3YTW6rQBAA4bblKyB5wf1PxgLJhyAbY2GCMWBqfqSqVV6yeJ86zTjDZRiGKK2+aRe/f0vsWOwTLiKGiIj7o4u+afNgV3AREcP90S3+IAn2KG4ehl0D3h/doQflNOxZ01vrMPYL7vD01tqFJX61e1rF5sbNe8Pm+NXu6Vba9NZ6m+zziS0KOO0WJx0rKbrmBuxJLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSixVddhLbsTWqptsNV0jIvqmze3Y1DjZKva2vjWopWqxxe9tXZO9P7rchs29JlvDWTtfg6L3tq6dzQ3Y0zUiYnzInntb7CrUN9laemFnq1BknyZb5N7WuQYR5a9CvZOd1jdtcXv7D1vyX2Gra1Da7i5iS53utwfsUtJ0P2JLnO7qZJ/gYqa79ZwtAvwVO1mH7Ofurk+w3B8Um7DThy0nePNkF8DJ0bvWYOE4Swo+/FfX5HRIBt6Nna3D+GUS8KHJ5gIfXoMc4J9uCqnBP19rUoJPuYOlAp92YZyDifdmp95u5x8aE/Ap6NOv4vdHh60F9t6AWAv0JcfKWhzqMgzDj6RtzW8a90e36z/umzbd66OFKe++KiV91zV/+GLn3S7ZGiw1gQ4R69f/vmnzYqeQeIIjltFJd3at8f3E+O/JUfdWEdiI1z6/HWtzcBFrsFTftP9gxWKfDdPpFrMGH7pMH7bSJzs2RJQ/2bFLRMQfLcG714zJpU8AAAAASUVORK5CYII=",import.meta.url).href,lid:new URL(""+new URL("lid-BCx3X8mq.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BNtBl9OP.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-CYDHFBH2.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-DIjeEmX6.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CqsAvOWF.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-BpulUVxU.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-DqrnRkT3.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-v27nUHFX.png",import.meta.url).href,import.meta.url).href}},{id:"single-lavender",group:"single",label:"다이아나핑",dimensions:[120,140,40],stock:"#b6a1ca",shape:"single",heights:{tuck:15.202020202020202,dustTop:27.92929292929293,bottom:33.23232323232323,dustBottom:22.272727272727273,glue:15.202020202020202},bottomMain:[[0,0],[100,0],[78.46607669616519,77.6595744680851],[65.78171091445427,59.57446808510638],[49.557522123893804,59.57446808510638],[49.557522123893804,72.3404255319149],[40.117994100294986,72.3404255319149],[32.743362831858406,100],[3.8348082595870205,100]],bottomTab:[[100,0],[96.16519174041298,12.76595744680851],[98.82005899705014,36.17021276595745],[97.05014749262537,100],[78.46607669616519,77.6595744680851]],diagonal:[.2153392330383481,.776595744680851],source:"싱글팩-02.png",textures:{front:new URL(""+new URL("front-Bk8Csp7z.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-DdBvJthX.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-BR6quRuh.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DYNtUgPc.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGMCAYAAABDM1siAAAET0lEQVR4nO3dzW7TQBiF4TMhoiwQu0gVigR3wf3fSxeRegUptMOChgbjOHbqY88rnXcLi0eTL/6ZxGmptaqVDrv9xX97/vFV2wUtvQ0B7x8f6un/1O12eewVnCRdfKnt2CGc9LZ6Y5odOwInDazeULNg3/PSTukm7AicNBPwvFFY50s7uk93/dgmcJ3K8fiGXeulndL2EnKN1Ruq1rOZbWX1htpKqmfQZitF2qyNmFKwroJ1VAXCFoGwQh26KgmrYH0F6ypYV8G6CtYVBltJ1wa5YXQWrCsMFnU0kIL1FayrYF0F6ypYV8G6CtZVsK6CdRWsq2BdYbDZN3AWrKtgXQXrKlhXwboK1lWwrjhY1MU36iN81MoqWF8YbL2742DL8cjBSqAxkIL1FayrYF0F6ypYV8E6yqc1zoJ1FayrYF0F64qDRZ1uUfuzImFRY6BgfQVrKYcuVzl0GcNgUT8nJAXrK1hXwboK1lWwroJ1FayrYF1xsLWCsKWAsMoYmMoYGAvWVbCugnUVrKtgLeVCxhgHSxoD1oNAT08crESaWQXrK1hLpONsTrfOOFjUzIq0sgrWFwib46wvEJZ0nCVdG6D+ugoKi3rgsr6Q3mA5KRgL1lWwroL1hDopoFY2ZzBfwboK1lWwroK1lJ1vY8G6CtZVsK6CdRWsI9RPBhSBsFKwvoJ1FayrYF1xsKTvG7A+UyB9hC8Fa4r1BiOtbHYRjWGwLx9BTy1tnvLni3xxsKTvIkokbK66jAXrKlhXwboK1hUHuyHd3bKeUyCNgUhY1Mxmk8NUIY0B6nmwzKwzDhY1syJhSYcu1lUX6tOaHGeNcbCoowHqpJA3mCnUtzylYH1hsKgfENl8AJ0Uyga0sqgxkEBY1CYHC/tMwpJuGFEXMqjHVVArK5GwpEOXRMLm2sBYsK6CdYQ63aIOXazPbl9AK1tJW56sN5iC9RWsKwwW9SBQyYNAplAnhWxyOAvWEeoNJgXri4PN97qMBesqWFcb/TmTIcKtLCYkFjG3yJVFhMF2726bn1vMykqv2MNuv7ZjVJiV7bu7bXpuMSsr0bD3jw+S/nmTNTsKrJVdGzCljST1jEJzDW0mNzm3vDGQGKPAXNnzXle3rbntfnHyNAqtdnEMWpzd/7Atr+7gG+yw2zc1t73YVlf36qGrpdW9iO2sbhPgwZXtnNVWB48+g7UAvoo9H4e1waNWtufoULQCevKFTOfMtih4NLZnHE4tBp60smuDJ4/BmuCbLr7XAt98p7AGeLbbmiXA78LePz4susKzrOxS4NnG4Ap4FvSst+IDYGkG8Oz7Bl3wnGNh2eRwvfGsOzIDq3wT2L591L28PENPAi/2FH53LKTbLuQX3Zjrm+Wxd8+r/cxFD7qM2a5adcuze7vfc6j7WxO/HNFZ5SJd3hRcHXvqDF10YZWbwZ4aWuVSa12BNK5XaJWkn9+/tI09ddjt669vnxnY1+pvSwkiXPbOs+0AAAAASUVORK5CYII=",import.meta.url).href,lid:new URL(""+new URL("lid-Dutmkx9N.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-CKc2vOVf.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-D0z99_53.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-DZhGv1a9.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CsI1X4sH.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CrG4jeDt.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-ogJ-mMfB.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-CUupCh0Q.png",import.meta.url).href,import.meta.url).href}},{id:"single-purple",group:"single",label:"이클립스핑",dimensions:[120,140,40],stock:"#755695",shape:"single",heights:{tuck:15.202020202020202,dustTop:27.92929292929293,bottom:33.23232323232323,dustBottom:22.272727272727273,glue:15.202020202020202},bottomMain:[[0,0],[100,0],[78.46607669616519,77.6595744680851],[65.78171091445427,59.57446808510638],[49.557522123893804,59.57446808510638],[49.557522123893804,72.3404255319149],[40.117994100294986,72.3404255319149],[32.743362831858406,100],[3.8348082595870205,100]],bottomTab:[[100,0],[96.16519174041298,12.76595744680851],[98.82005899705014,36.17021276595745],[97.05014749262537,100],[78.46607669616519,77.6595744680851]],diagonal:[.2153392330383481,.776595744680851],source:"싱글팩-03.png",textures:{front:new URL(""+new URL("front-BebZoQRK.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-BJJUt85G.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-DNKqWfXl.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DOd5pDR6.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGMCAYAAABDM1siAAAEaUlEQVR4nO2du27bQBBFL2klSJqkMuAARv7/w1wIcBekyUubxkpkmqQoiZe7B7intWEcjIa7M7NLuSulqBX294+TP/v29Yt2G7qMMif48PxUjr9zuNttL3tGTpImP2q77Jyc9D96S1hddoGcNBO9OVaRveWjvYSrZBfISSsJnrJI1vnRXsKobCtyQ/7J1vpoF9NLuynJWtGb5HAS2Said4adpHIi2i691Nd2uITIusDIdgLJFoFku44kS1q6yh+QrBRZHxhZ1tIlkGwi6wQjWw4g2XQKTjCyqNUAtc5KIFlUp5Di20lkXUTWRWRdRNZFZF1E1kIhySqyPiLrAiOLasUz5HDBiixqPqvI+sDIolYD5QEzElkXkXURWRccWdLRkkSSRW23qPsGiawLVGQVWQ+stkYk2YzpjUTWBUcWVc9mNTCCkUVtt6wzBYFkUZGVQLKFtM6yLvuSIitF1kdkLWQiYySyLiLrIrIuIusisi4i6yKyLjCyhdSKp1NwElkXkXURWReRdYA6rZEi6wMjm0M7FzlacpETRicY2aSBC1RkJZAsqkRMbeAksi4wsqhNQYqsB9R2m5x1gpFF5WzeYXQSWQeoTgH1IlCWLhf56mwnkXURWReRdRFZBz1pu9UdSVYkWVIhc0jDaCSyLiLrIrIuIusisi4i6yKyLiLrIrIO8s8fnETWRWRdcGRRx6EiyZJOxSWSbHLWSGQtoFaDPGBGImsB9YApsj4wsh3qvoFAsqz3FFCyAsmiHrBMEZ1E1kVkXWBkUess6g0QVCGTHcxJZF1E1gVHlrQpSCRZ0g7WkV6qyAuXTjCyPSln80azi34HkkV9zQWrByPJoqou1GoggWRRVReqns1ExklkHaCGyRJIlrUakGoDKbI+IusAdQ7WvwPJ7t6DZDvS3ABVGxx+RdbDgdSK//kJkk3VZeNQQLIiRVaR9RFZF5G10HcgWZEiK5Asq7sl9WCH3yBZ1nGoIusjsi4i6yKyLiLrIrIuIusishZQxTepYWRFVpH1gZFFnd2yrkoJKNvVllgKLrIYkLKIvOVEFlV1CSzbdt6iLkccTxj394+1VRbBiazeyrabt+nBXHRS//D8JOnVQ9ZsKnAiK6LsSCo0yVRkm8xbThqc1gaEVOBEVhOyL9FtKm+LBve6jqnQKpNp0GLuvpFtObqzD9j+/rGpvB2VbTW6Z5eulqI7KTuIbhPCs5Ed7GrVhRfvYC0In5U9TYfawosiO7I6dKogfXEhM9jZthO+ZIo4kg4nf2YDLp0b1BS+6v5sTeGriu8awjddUK8hvFpbs4XwTbIPz0+bRniVyG4ivOZpzRnhm6VXP8KfEZZWEF59bjAUXistbDc5HA+e/SbHTJSvEraPj4bl5Yn0xcKbzLqGaSFdV8hvOpgby+VLuucqU8QR6W7JuKrqyHPY7o8sda+oPp8dRLmTpoeC1WWPnEh3mohyM7JH5qLclVIqKC3jRbRI0vdPn9uWPbK/fyw/PnxkyL5Q/gKnQS31mWptmAAAAABJRU5ErkJggg==",import.meta.url).href,lid:new URL(""+new URL("lid--WvKRmvn.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-Bf_4jwr7.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-BVLFq6Tn.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-j0Gldl1h.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-BDvY_-gu.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-h6fJxT8y.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-BIObAEvy.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-B5VtVAMG.png",import.meta.url).href,import.meta.url).href}},{id:"full-box",group:"full",label:"풀박스",dimensions:[127,146,125],stock:"#c9b9d8",shape:"full",heights:{tuck:18.33816425120773,dustTop:59.951690821256044,bottom:80.05314009661836,dustBottom:63.1256038647343,glue:17.280193236714975},bottomMain:[[0,0],[100,0],[50,78.4],[50,83.3],[36.1,100],[12.2,100],[7.8,95.2]],bottomTab:[[100,0],[96.1,15],[97.2,91.2],[93.6,100],[64.2,100],[50,78.4]],diagonal:[.5,.784],source:"풀박스.png",textures:{front:new URL(""+new URL("front-DxgCBSra.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-B66TpQTD.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-CZM9lG24.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DlVhPi0m.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-CQnXX3_1.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-CO3tq9Ga.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BYEAbdVL.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-KkK1Ws7B.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-D50KtCWr.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CB884Hev.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-VKOVXq2_.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-DWjBssOd.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-ByTnCZtZ.png",import.meta.url).href,import.meta.url).href}},{id:"limited-blue",group:"limited",label:"다이아나핑",dimensions:[209,146,125],stock:"#9fcde1",shape:"limited",heights:{tuck:18.38256658595642,dustTop:71.76271186440678,bottom:80.24697336561744,dustBottom:62.924939467312356,glue:17.322033898305087},bottomMain:[[0,0],[100,0],[69.93,78.41],[49.83,78.41],[49.83,83.26],[41.72,100],[4.73,100],[2.2,95.2]],bottomTab:[[100,0],[98.14,7.5],[99.49,15.86],[98.31,93.83],[96.79,100],[78.38,100],[69.93,78.41]],diagonal:[.3007,.7841],source:"리미티드에디션-01.png",textures:{front:new URL(""+new URL("front-2otkuX8h.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-CMJ_d1NQ.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-wqLkAjir.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DXKBYbHJ.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-CJCr71zt.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-CzDDMAwJ.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-DUmjOo3O.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-Bj0Dh9Oc.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-Q3POZwDJ.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-DxCSGxKt.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CWdBHUTi.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-Bb1hcE2j.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BYQrNlEn.png",import.meta.url).href,import.meta.url).href}},{id:"limited-purple",group:"limited",label:"이클립스핑",dimensions:[209,146,125],stock:"#aa9ccf",shape:"limited",heights:{tuck:18.38256658595642,dustTop:71.76271186440678,bottom:80.24697336561744,dustBottom:62.924939467312356,glue:17.322033898305087},bottomMain:[[0,0],[100,0],[69.93,78.41],[49.83,78.41],[49.83,83.26],[41.72,100],[4.73,100],[2.2,95.2]],bottomTab:[[100,0],[98.14,7.5],[99.49,15.86],[98.31,93.83],[96.79,100],[78.38,100],[69.93,78.41]],diagonal:[.3007,.7841],source:"리미티드에디션-02.png",textures:{front:new URL(""+new URL("front-CyY7EI6N.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-DCRdAkby.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-0rCWM6j1.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DQF4vOVd.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-B7axEelj.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-D8iIkkkk.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-DjM59GgK.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-4uccvSD8.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-B8s4zKWp.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-DbEP0n3K.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CwaMzh0v.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-DUqWrnmA.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-DZShgkQG.png",import.meta.url).href,import.meta.url).href}}],P0=[{id:"daiso-1",group:"daiso",label:"골드",stock:"#efa0c3",shape:"retail-card",dimensions:[156,252,4],dimensionNote:"PDF 페이지 기준 156 × 252 mm · 두께 약 4 mm 추정 · 완성 치수 미확인 · 후면 무지",title:"다이소 딱지",hole:[.4994350282485876,.0556333100069979,.024858757062146894],sealLines:[.18254000329300415],badgeRelief:[{u:.2940851103019957,v:.451894840211118,r:.14070510924886817},{u:.42171302061058896,v:.6236498277153891,r:.14070510924886817},{u:.8164319708260211,v:.4427111267226432,r:.14070511787540424},{u:.8171423143119133,v:.7236463117029215,r:.14070511787540424},{u:.5057638373261658,v:.30263870113800034,r:.14070511787540424},{u:.23012496124097345,v:.8107780350300792,r:.17275697812579602}],cleanCutlines:!1,source:"다이소딱지.pdf",sourcePage:3,textures:{front:new URL(""+new URL("front-cJB8hgW8.png",import.meta.url).href,import.meta.url).href}},{id:"display-1",group:"display",label:"하츄핑",stock:"#efa0c3",shape:"display",dimensions:[250,146.3150289017341,127.16763005780348],dimensionNote:"추정 약 250 × 146 × 127 mm · 파우치 20개 수납과 전개도 비율 기준",title:"딱지 파우치 디스플레이 박스",heights:{tuck:25.65028901734104,dustTop:76.58959537572255,bottom:74.78323699421965,dustBottom:63.58381502890174,glue:15.534682080924856},bottomMain:[[0,0],[100,0],[74.56647398843931,85.02415458937197],[50,85.02415458937197],[50,89.3719806763285],[46.82080924855491,100],[5.202312138728324,100]],bottomTab:[[100,0],[98.121387283237,7.246376811594203],[98.121387283237,100],[78.90173410404624,100],[74.56647398843931,85.02415458937197]],diagonal:[.2543352601156069,.8502415458937198],tearHeight:.6345679012345679,source:"딱지파우치_디스플레이박스-01.png",textures:{front:new URL(""+new URL("front-BIsDPo87.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-sAgV_f8P.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-5gk4WA1-.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DHm7xnd6.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGVCAYAAABn6ghxAAALIklEQVR4nO2dy44dRxnHf3V8bMdOHCeWhsTBwvbE4/gix5YnCCJE2LDgKXgCtjwFCzZ5DiTegD0IdrBBCAkhj0ABgRUsOdP9sejTPX3O9KWuXZfjv+SJ4+mu+vevv657VysRIUWdHNxq/vL0W8if/wXrC6hUzHbmHrwP/3yFvK5R33+I+vhTUYefIX/8DevoBo+/DS+/bv7h+CPUk++JunsMd4+3D17a7MnBLXh0A65egd/9He6/h7r3CHX4XLj7Gbz1zuT5Qc2e3dob8NUr5PolVkcP4PAZ6qfHwnsfzaahgDZQvZptzcn99+F/36AAfvwUdfQUdfdY+PC+U/rOZk8ObiGH14ENhWc34d5j+OSHyO3nohSs3rqI7YMs3Q8LsycHt5APr8K7l+FvL+HOdXj0CPXgB8jt53D52nlXnkqcWbPdrX1wA/XVK+TaJXh8BA8/hzvP4fpNkHE7IkAtsFJhzJ4c3NqKO/n8Y9S9J8gnX8AHR3AW81qqa0H5Mtvd2qsXUX/5Dzz9AHX/U7j7DDn6go27YYMatqWqWV28ACJmV7lr9sXhIdx5F548hjvPkAc/gstdeTdxg/UlAiKCUsopftfq5Wvkl786M9eT2v2HHc39vpMIclqjLl6wMtlqtcmv/RNMUtXOaawmM5i5ZVp3dHOQiDSlgqFU92PGrF8pqtPKKYXlzIoglbCC5kHTPa339+XMbkqCqrIvYMbN+m6Ut7F7WllXZgvGbCORpkazUXizA/FpW4wtThag9mnWvckxoba8rUWrVFCclR5RyALUp5p0lULqGpGRJqJu+Lu0S6SWnZNVl2ZLv6pqpGpaAqqSuF3xuhLUhU0oiCBVTV3VTdUsnMXjbLdGA5trSSynFVI1+TSkpzNwJ6vTThy6cGlrMv1LjvaA2WjSrEmDw4tmsiuHrEkR5uegaZVDFtAi4rUxOZFdYWR1tUDc7ilZnxq5AWmaHZGe2aVrshEVSBb06AYuEQolqytfdAcO2XOyPrVDN22zOzIzG7m8LZispkL1HMzNRmyM5xsGXh+fAKGQL1n9rnecwY98yerK6+CHgfIla0TCFzaDdPIl631SUfdATbr5kg0ijyXC/pBduibbH7I6T7s2e427tD9kgVkiPovuPSOrI93AnblLb8iGkh+zC1UOe0hWQ9rwJw7cU7ILVA57SlZHjnH7hmwo7bHZwDXZHpPVkEtNtudkA9ZkGZJNbM3h2XHbB2ZINhPlZ1Yp/MZtoGcgP7IxXsS3gR+ObIDZnGhhYHMzt82mWjlslN8Dlrxiv7Vko6Bmfc/m5EvWd7Xru67Jl2yQanfmTul3IHMm22nBmszkZhZAVlPe+GsmtD9kl26z50/WewfSk/Inm2oHMn+y3uVpnXhBZBPr7eZHNsEidVALrjfY13fFhy7cZ7X7Zr1BX7rVro/1LzqHlEO209ysoceGz1RSBZLVVOgOZL5kXYvU0G32fMmOPdU+azKXNkK+ZJUaBrhUOTqn/Mj6mqgI3UbIj6z2ttaR2wj5kU1Wxe0ckWrXPH+ySwx52pTt+ZMdayN0v/Qg5zUyi+9boKG+pXzDYPHPwhiOiOdLVluRYrscsskUDsXtdpJatVsO2bFqN9bwfYZkldr6CM5cHMX6/pnXcYPQWgNcOnin2cG8qpHNfvBS1UhdQyXNxxo2m9kHkeYm92sAdeki1DVUzR9V1UilqE8Vojb/z6r5fUStAV7/47/N54VEqNtN7HvGRi/a8XNEpmmtAeSb08YUva66Uss3GWfUmJ35gIhPgC4ZZVjO7mi3KJuk6rvYK3rLgPbBaglPds3bA3yq+BfbjYquEHRdXrhcPBzYftjLCYMxLTEW1kp6aZZPdlYh2sd5vlRhSWLJ2IUsyUKHyWdLUK3mCmYzZUp2I5ue7hLrFCB3ssCiDWoTFUAWrGiELncLIQvJxW5BZMGIhlYHcy9XzI1Kk8ZuB3OU8GxnblgFkgXvJYPNJEqGZHWv0KFHsasuvMuftAtM10eadvvI+G7k6KT56uuMwuDK2wNmTeh67mDO5Z0PWTx0a3Q7mD5G0QsgC2ZPvM76LA+j6IWQBe90m8MMYtdlTiG2vHZrbGLXhHBhZMGsGxJsCYsqkaypQrTKyDJmTV6Nihi7GZIFfboQrUeRKVlIhm572u6pGZOF6HR3ex59wpmThah0p3oUBZCF6LE7pJlujUFKCxguJAxaJUS3MLKQDN0CyYI5XR1yb2ZrWpmGmS5dqzmFxGUxW0O00iFTsmA4COfZiUb+GZOFMHRNh03LHaaPTbc9vsxh+hTotueUN0yfCt1N+tmQVXifWtI9zpyukBFZ0DSrjIbnNXO2WDVXHlnjpSUh2ru0L7abJByikV50t8Yo1EMtRMul8a1z+du7Shml7rco6x7iYhvfMenOpZ0sWQV6PYUU6G7F8EbJkm3VJzxqNgW6kOlOaLONb6OKKmTJQHGNb0kndqEoshulErvlkQ0auwYJRyeruh/zMt5AxPfBWe4xp3NtZ5N2OkeLYZgZ9IabjUKmj0mGbKupa7OeWgoxswQ9wgMZJEd2Sk5TS0axa6OdkHd/EUj7QDvD/Qcv8zBolRDdNpNCyEJydAsiC2Z0A84nQESyQ8NDc/K6v4FJI9151//UFWR/g1DNyELJgvEDYdzJzGUCREdmr1hBWLpt+mVNgJjSDfZi5XgemZIF4+EcXbou96C/1iFjsjbSpeswPN+qALIhYtd02HRABZBtFahksCVcEFkIVrPZEPb/IhAEa6jHDwPjdV1ar5UEMtHtgz9/6ApgtY4PGOYNN2RX29+tGU/Nc+59CbMVRzcBksy3a9S44c39F9Ahu0nMLHO7xTFDZ6URrEMaIGz28lovoWDTNa0GCHdk5z4Hk4Ias0JT3pl2BE2GOB3Unr0CqE/jfkNJV43ZavsLVUbFWOAB5P756ZYGAxo02/+UhZYWGiDJn2ynkC9g5jQBYiP/LwIFHD6NT9b7nEKoms0wj/hkDRTOrG1l5WuYPnZvwsisVc3mkfC6S7Rzo5kQ6H8+RRmkPZYXGT1gCpdt28CsSHPsCjkvULfK28H08LZt+ssLNudY5G5xir+YXcDw9OZiSxSrBvl4LQ1CVxpeR76NK43dfHRGEX0rFOG1Xu6b/2rWQluETT8S1r/OnVPD12COiyX7Mlwj45yfk/TCIKZ6V7s69y86J9uUEK4Pnepma1oX2ufZ97MctIL+A6uXmOHh24o1fGRD2IXtgFn9oLQhrPMC+5i8lLPWMWyoCbP6uS8Vw35bXd0Pi3M1DM+YNStUXQjrlMdhWl3dD9sEnEZkzHJ2iuHu3POUDd67XXboaHDuVt5ewx9+PXmiaQ03m6uGhsrjFQdXkF98OWu4Pc+qJ+nppqxu/vZPyJ1rWoZbwlZh4aG3vAIwMQy7YbGc6e4BMzUcQyt612lveBnCLVkPhu1k4rlfzkYhLKr5o3PabqUQlbDNiEwcwudyP6+x6jZJwlNtgw7PkoaninCdhoyDYfdqq5+CbnvWkbC94a60wKzxvXhI7OZu2lOIGhI23ZpohG37YB4Im1N26TA6EbZpE7v2bq0Nm47eg5+uuIdibdkRGQ8P3bxpn4McwUsJ3yMyQQmHGD5SgHInfN50yHkwD4a3FXrSzivhJdbIeCO81IIeL4aXXH3kbHjppVJOhmOs67I2HGsRmpXhmCvmzhu2GORYUtuGfz9tOLZZMDCcglkYM2wxyLGUzhveUUpmoTGsxginZhaAc4YBlEJNfbI1tl5896Gov75E/fxnyL9fpG0Wzgzzk2fpm4Ue4RzMApx857b8H5eAF6E0cD4wAAAAAElFTkSuQmCC",import.meta.url).href,lid:new URL(""+new URL("lid-TYOhicBo.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BMv_rRHh.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-BkN7rhR-.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-9lcNBxub.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-B8P4Zo5d.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-vlKUikdG.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-C5SjvFfc.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BTaT2_6E.png",import.meta.url).href,import.meta.url).href}},{id:"pouch-1",group:"pouch",label:"하츄핑",stock:"#efa0c3",shape:"pouch",dimensions:[120,130,12],dimensionNote:"120 × 130 mm · 상하 실링 15 mm · 내용물 두께 약 12 mm 추정",title:"딱지 파우치",hole:[.5,.05675675675675676,.020527859237536656],sealLines:[.11621621621621622,.8810810810810811],source:"딱지파우치-01.png",textures:{front:new URL(""+new URL("front-Bj9gZaBp.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-Bfy1hUOt.png",import.meta.url).href,import.meta.url).href}},{id:"daiso-2",group:"daiso",label:"샤이닝",stock:"#f5d4bb",shape:"retail-card",dimensions:[156,252,4],dimensionNote:"PDF 페이지 기준 156 × 252 mm · 두께 약 4 mm 추정 · 완성 치수 미확인 · 후면 무지",title:"다이소 딱지",hole:[.4994350282485876,.0556333100069979,.024858757062146894],sealLines:[.18254000329300415],badgeRelief:[{u:.4623773988067637,v:.7629677204422332,r:.16027520858446617},{u:.46360105569478016,v:.3048341796399552,r:.14070511787540424},{u:.1989986679248067,v:.8784434599989286,r:.14070510924886817},{u:.8050458403774752,v:.443804486978749,r:.14070511787540424},{u:.22499203425659584,v:.47790602702638735,r:.17275697812579602},{u:.7718533450221747,v:.6582774666151839,r:.17275697812579602}],cleanCutlines:!1,source:"다이소딱지.pdf",sourcePage:2,textures:{front:new URL(""+new URL("front-HIkvfS4e.png",import.meta.url).href,import.meta.url).href}},{id:"display-2",group:"display",label:"다이아나핑",stock:"#b6a1ca",shape:"display",dimensions:[250,146.3150289017341,127.16763005780348],dimensionNote:"추정 약 250 × 146 × 127 mm · 파우치 20개 수납과 전개도 비율 기준",title:"딱지 파우치 디스플레이 박스",heights:{tuck:25.65028901734104,dustTop:76.58959537572255,bottom:74.78323699421965,dustBottom:63.58381502890174,glue:15.534682080924856},bottomMain:[[0,0],[100,0],[74.56647398843931,85.02415458937197],[50,85.02415458937197],[50,89.3719806763285],[46.82080924855491,100],[5.202312138728324,100]],bottomTab:[[100,0],[98.121387283237,7.246376811594203],[98.121387283237,100],[78.90173410404624,100],[74.56647398843931,85.02415458937197]],diagonal:[.2543352601156069,.8502415458937198],tearHeight:.6345679012345679,source:"딱지파우치_디스플레이박스-02.png",textures:{front:new URL(""+new URL("front-BxlsOXbH.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-BdpBmYzh.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-TPXL9KdZ.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-BJrnwN5C.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGVCAYAAABn6ghxAAAMH0lEQVR4nO2dS48dRxXH/9Vzx4/xCwdNgmGSGFt+YcZOGIZEBAFZI+VTsGXLjhUfAfE5kPgALGHJBgRSVkgocSQERNbYk5nbdVj07b7V9/ajzqmq7qoa/ovEsruqzv31qVOnHt2tiAgx6sX+AQCgPHoTxaf/Bi7tQMVibG2cPrwN9cVrYKmx/Og7WD58j87vHePSX/+AxdwGlh8eQL08QQGg/OBbOD/6kJb3jnF697h17e5fJjb2xf4ByudfB/auYudP/4Q+vI3lk6dY3j+is7s/QHnlxmD5oMY2t/bZG1D/eg28cQn68WOcP/gezn7+AS1v3WHV59XYplM8vQ316hwFgLOfPYd+8j7O7h3T2VtP2gWY/cXZ2Bf7Bygf3QIA7ABYHt/B+eNDnD75MV6/c0RFUWD3yi7XLkOq+VFsY1/sH0C/vQe6eRnFP15CP7qJ5eFTnD79EU7fOUZ5+Tqpdf0g0lIrtzRqbHNrDyu/U1+7hOXhA3x1+BFO3/0+zm/eAYAWtxZFAnRJUIVqV2yNmprKO419sX/Q8rvzn9zH2aNn+OrxT3H65sMt44aloLXGTrFjX6RHi9o4/fYe6Noudv7+JZZH38D502c4+/b7OHn4cXWldPRQAJUaancBEHF+5apdw9jPH9yDfnATy+ffxdn99/Dqlx+jvHyj41KZ6t9IWkMVBTsCmFqo/57hi9/+ftg4ywbMjtUuTtClRlH7LcdgtbaqWP2R4IHikHSpVy3LVfgxZVxEGqQlPFTzEyczFqSgl6VTFV6NHXJFAkGXJZRC5dz2tTbeMx1ZVB2tXJLYc8eN9Zyc03Ip7meTkgUArQla1NFGjFVMBDauSCCQoKMpNQNZpRTKUpaJDWZdgpF8VOvhFyiK8ZFIGbdrcrK1dFlahzAiAmnyO63hBI6yLLFD6+YVCkCtK9AlQWsNKnWTW8w6Fdd6ndwQCHqpQVpX1Gu7DfrjxvalUo5SqIZfDQCaoPumP0bbQcja/D5C5YcKynqeNlsHk8jKWKXi+E1xWGEpK2O5gwOnPxLIOt7mRxYAM2EOo0zJCuT7ZuRLNmS8tak7X7L8eGvvtDbxNl+yAPgLFB6VOdkZlaCxAYd97ig2FG8TJMsVAxcn1gLDsTxFsiqg3wpibc+dK3xXGFIpukF4+bgRCZP1GMBd1VV3wmSZIYyTjPsYHFImGzLeutedMtm4lb6xIYd9l2Q8fbLsfsvCJb9t6ZMNmYxzj4eZy0o5kI1z5pAD2TiVj7FRjWTViYR+hRwcuMk4kJMbxLRSQ6CsyMY1OORENrw4N2J2YzmyPCMT2gw75Uc2lpEsP7KxjGTpkR2HFsdIlh5ZIOj2rZVsbkSaZK00M/6MyXLleSTLmey8I1nL2CB2eBwcmGTnfRfClrFzDw5DyrmDVZprDSxBskxUc3WzBMkC/L2sYLs5/RUnStaQd2ieDginTxYYoztPPMiD7NzqcvNoje1SO5/dOqWmMOi9jE7u43RdumS3T6n5e6+Ij0dd0iULIJocoeuOJk7WkPelUMcpRj5kgbhmu3mRtdJEs91uY2M6b2IoEzeIZHAwh91MyBqKZQKZH1kgjglknmRjUD7Gsid5QQe+kYOTsWnklGfAXi7IEfIhCyCeHAHZkTU0b46QM1lg3hwhb7JzKj9jY8kR8iMbMkfg3LX8yAIIliNw7prsJIekkAdl6gYb8jrsXuyXOEagfI3lDrv/f4mjrdj7r4xrL/ZLHAHMOuxmTtbQ1DlCUmQXALB3/crqowwaRACV5frDTpqqF4j3uJTxWZkOCXKEgTdLLADg6q296tXrunphff1/0oSyLEElNX+eUwsAePXlq4qqptXnAABQZTRRP1UbDZPvKtBPdwEApyengLGTRyDjowvs5oJpAdRbjm2DeG8lqX/YdhmCqr6TwBvOOukmFQ3kr8dsjWRD57+oKeLWRppk3TrQyInFVQvCJfwYvq4ikZuxHX7Vr9Xdc6DrlayNOzQXCupOxg16t5YUN85suIMVYQHdZMgCfa9tk34fMvAKefpk1xK8LDSg7+ZEVjgM899vZaWcyNaSDDlt37W6fuTCHMlO4bvjiU6OZGvJfdc6IxtoJmeyE8VdoJNuzmRryRc7ub5rXhs/WbX+Nuyi/gsArE++Sxo12+hfcNpsiRrC8ZOtNcuRVOFOXuJvnGQtWpjFBLPh+o+wjw4Jk12JS0o0GxbcRU8PAjWFBGXWJYdKF69PetYNxE2Gk756bcRn2XTDukP6HayliHw3M7LALL7bRThDskDYx1tbzWxkAFgTzpQsIE50OOr74GlayTdiNjaTvVumBL7LTtA72kqQ7AQhVLpdZSpBsoB8t5p/REPQUKVEyQLiH83r6XLfTZgsIKJLwCS+mzhZIFrfzYAsMKHv2mtkkUNYa6CVyEzcoBZre8Us538lMjOyLvI8wYyO7FBHYyxyYPYkPTqytboICx4EErXMLtJFOFqytUzCK2OZDik60CHcWaT12Znoya5V7916OmkxJPckJ8W9W9UkwuF992K9F7HyJxi/mkF4QrrpkV2LhKQkZS7iVHz9o5m+y17n8HXeIEL1nzcQz2y511/ELXyR79aXc5XSuoECRg0u6gu7LpvSd5vsRKlemy1fgWVaENYdqudMuwtG4wY2ahkbgzusy12kvVux77oo7b3bDY36bqBHqMaUPtlafYRFE0wPdBMkK/mmnWSC6Ug3QbLAIN1x32XIgW6iZIFpfVdAOGGygMh3p1ocSZwsVkvq4gVmQqiRLX2yY9FzkJv0jlgUi4as2nxgsUMjixwy35XMKJq39w1cHg3ZWkOEB41tfLeHbojZ8BDh6MjW6iJstyIDePBdnmrCynhJg5Wxbu4g2AFq1VG7RU5fV9mUzB2ESU6H8iUr9d3mH7lJzobyJduSJElvleETTo+s+AiA00DBV3pknZ4kYfrudpJj77uzkZUcnWpvgAj9SZKk09bINk54dp/lEG4ZK/Vdm5Gtv6w94dnJcjRykoOnoaxs1CO3LtgukT7ZUL5rpQHC6ZP1IqnvmhduKFqy8ql4gKxsjHDXYke0ZGuZhO3WDQJlZZUxloSRAFlTwsMRjDLSgh3iTcUF7mA7UNiEtPTcoDr4ZX+rQk4whwgXALCzKNx6/ESqyC52WLScQ5mQcAEARcFzAxe5tLKaihPUzjTGtqIDk3Dz1NJUZE0juFqHLpLN5QFZdJAk6o2xRJrfogdxRrjGWK1J/BiUS3TgEC4AoFyW8LbwH1AFAOilbj3gOKXvcipoQlcKGnioYlrfbTQQf9PLuvo0m+/WlaR85nsx9I8t32U4pNf+uv1EcwJi7YpPnOh0KR2yiPC9iEPKmGytmeiK9m7rHFQyaLh40mCc7ZNLGG3ercAP36uPRgIVLqYV0kFDcDmApDuY/PjKJJ0uYbIrKSnhwHS9kvW5cNwV4gaPUXPb9bLDWNdF2xEjiM/6JGxq/LDvREtDNgoaDXwTtjNWGB18E04qzrISGaVWtCSZjElXOKOcnKyLH4vOz7q4oIsfz3diDmAbLDLW6RUCZh0Aa+owezTgREXh98GMlmr5OrEU+r2IqvmPh7oGJqLbj7JKFpGb8uyinXU1c7uQS55eCXdUtTDrd12pbBF2rKwrHvc/Heogn4SbOhVQ0M0Frv/5d00jDRQHg0Ps/RCAgt66imu//k1jcEuOq4ZNcU+Ui2/+8W/QD270G+ygpmd7UgEAmwZvwfCxLuuBcNPBQhI25fK7Cxi/dwrC66C/WbmdsXVRABMSBt8rzDgbPeHNQWFywk3DFr+/awSblHAtG9J9icx8hNHvFUNZV1MuFsI2KWKnwVPJ5GCbz05OuJY5ZHOS73kJgz9TYBL2l8YQZNMae8KqmGHJs8MMwIJwc/X8S56T+7Dr7HaQcIu0h0jhYyrOI+xgtK91g0GDe/14ilXEHgX3Yd+riL0Gd/oxMPuSpwKg2IQtjA65Pjto8GBMnumUJ5/wgKZY+fZGeKpl+lHCYx1QknW5yNklpt4AsTa4i/QcuzViwnNtLQni8Lz7YGyD5960Yxk8t7EAw+AYjAUsDY7FWMDC4JiMBSqDVZ/BsRkLAOgzWMX8xNJnP3xCxacvcfKrX6D4z2dxGwusDT7/5Hn8xgJrg5MwFgA+v/su/Q9WZMQj4TblGgAAAABJRU5ErkJggg==",import.meta.url).href,lid:new URL(""+new URL("lid-COuQJ5cq.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-DPaUIvec.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-CoSWr-M4.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-DyMy9Evq.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-BusKU_Sv.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-z04hDaDz.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-_ytD71Kv.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BeN7Um8Y.png",import.meta.url).href,import.meta.url).href}},{id:"pouch-2",group:"pouch",label:"다이아나핑",stock:"#b6a1ca",shape:"pouch",dimensions:[120,130,12],dimensionNote:"120 × 130 mm · 상하 실링 15 mm · 내용물 두께 약 12 mm 추정",title:"딱지 파우치",hole:[.5,.05675675675675676,.020527859237536656],sealLines:[.11621621621621622,.8810810810810811],source:"딱지파우치-02.png",textures:{front:new URL(""+new URL("front-DBzll1nM.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-L1hydHCK.png",import.meta.url).href,import.meta.url).href}},{id:"daiso-3",group:"daiso",label:"스파클",stock:"#9dd4eb",shape:"retail-card",dimensions:[156,252,4],dimensionNote:"PDF 페이지 기준 156 × 252 mm · 두께 약 4 mm 추정 · 완성 치수 미확인 · 후면 무지",title:"다이소 딱지",hole:[.4994350282485876,.0556333100069979,.024858757062146894],sealLines:[.18254000329300415],badgeRelief:[{u:.42891849013810945,v:.6335768595626012,r:.14070510924886817},{u:.7992103682958098,v:.7354138030532318,r:.14070511787540424},{u:.49989282391590495,v:.3066383896098969,r:.14070511787540424},{u:.2882134067688495,v:.45751928530702396,r:.14070510924886817},{u:.8021180630486606,v:.4565510788604428,r:.14070511787540424},{u:.23666377206124453,v:.820601252657409,r:.17275697812579602}],cleanCutlines:!1,source:"다이소딱지.pdf",sourcePage:1,textures:{front:new URL(""+new URL("front-Bj2oMvo3.png",import.meta.url).href,import.meta.url).href}},{id:"display-3",group:"display",label:"이클립스핑",stock:"#755695",shape:"display",dimensions:[250,146.3150289017341,127.16763005780348],dimensionNote:"추정 약 250 × 146 × 127 mm · 파우치 20개 수납과 전개도 비율 기준",title:"딱지 파우치 디스플레이 박스",heights:{tuck:25.65028901734104,dustTop:76.58959537572255,bottom:74.78323699421965,dustBottom:63.58381502890174,glue:15.534682080924856},bottomMain:[[0,0],[100,0],[74.56647398843931,85.02415458937197],[50,85.02415458937197],[50,89.3719806763285],[46.82080924855491,100],[5.202312138728324,100]],bottomTab:[[100,0],[98.121387283237,7.246376811594203],[98.121387283237,100],[78.90173410404624,100],[74.56647398843931,85.02415458937197]],diagonal:[.2543352601156069,.8502415458937198],tearHeight:.6345679012345679,source:"딱지파우치_디스플레이박스-03.png",textures:{front:new URL(""+new URL("front-BQkxmqo-.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-BMoc_exG.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-CSOjSXRJ.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-Cgrnh9CU.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-CkRK4kjm.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-DRDMzO9U.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BnocQkHz.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-c5SOTFAq.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-zNUH0wdE.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CqZTE5i4.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CN3Aps6S.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-ZdskTHOy.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BX7ZqwhK.png",import.meta.url).href,import.meta.url).href}},{id:"pouch-3",group:"pouch",label:"이클립스핑",stock:"#755695",shape:"pouch",dimensions:[120,130,12],dimensionNote:"120 × 130 mm · 상하 실링 15 mm · 내용물 두께 약 12 mm 추정",title:"딱지 파우치",hole:[.5,.05675675675675676,.020527859237536656],sealLines:[.11621621621621622,.8810810810810811],source:"딱지파우치-03.png",textures:{front:new URL(""+new URL("front-wqKkdR0Z.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-BdUrXAp4.png",import.meta.url).href,import.meta.url).href}}],Wi=[{id:"A001",title:"카피라이트 가이드",group:"brand",source:"COPYRIGHT.ai",credit:"",kind:"document",src:new URL(""+new URL("A001-aoBPiBCZ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A002",title:"전체 제품 라인업",group:"product",source:"공통_썸네일.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A002-DpRrkLfO.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A003",title:"프린세스 캐치! 티니핑 로고",group:"brand",source:"로고.png",credit:"",kind:"image",width:1300,height:1300,src:new URL(""+new URL("A003-BrwH5VOQ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A004",title:"로고·카피라이트 가이드 6페이지",group:"brand",source:"로고_카피라이트_가이드라인.pdf",credit:"",kind:"document",src:new URL(""+new URL("A004-CiS58igM.webp",import.meta.url).href,import.meta.url).href,pages:[new URL(""+new URL("A004-CiS58igM.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-2-CHShFYa6.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-3-GMFbJFuS.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-4-CnCirEj-.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-5-BJauCt5m.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-6-CirN_2mo.webp",import.meta.url).href,import.meta.url).href]},{id:"A005",title:"리미티드 2종 라인업",group:"product",source:"리미티드/PNG/깨끗한 화이트 배경.png",credit:"",kind:"image",width:906,height:467,src:new URL(""+new URL("A005-p7ySwXBq.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A006",title:"이클립스핑 리미티드",group:"product",source:"리미티드/PNG/레이어 0.png",credit:"",kind:"image",width:820,height:673,src:new URL(""+new URL("A006-DYSxLsVP.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A007",title:"다이아나핑 리미티드",group:"product",source:"리미티드/PNG/레이어 11.png",credit:"",kind:"image",width:819,height:675,src:new URL(""+new URL("A007-Bqti81fq.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A008",title:"리미티드 구성",group:"product",source:"리미티드/그룹.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A008-8m0baskg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A009",title:"리미티드 대표 비주얼",group:"product",source:"리미티드/대표이미지.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A009-2Q3wIW0u.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A010",title:"다이아나핑 싱글팩",group:"product",source:"싱글팩/PNG/다이아나핑.png",credit:"",kind:"image",width:629,height:815,src:new URL(""+new URL("A010-pRxLI05u.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A011",title:"이클립스핑 싱글팩",group:"product",source:"싱글팩/PNG/이클립스핑.png",credit:"",kind:"image",width:625,height:810,src:new URL(""+new URL("A011-kNaUbrmq.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A012",title:"다이아나핑 패키지 다른 각도",group:"product",source:"싱글팩/PNG/일반_다이아나핑 복사.png",credit:"",kind:"image",width:791,height:943,src:new URL(""+new URL("A012-MfjW-C-6.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A013",title:"이클립스핑 패키지 다른 각도",group:"product",source:"싱글팩/PNG/일반_이클립스핑 복사.png",credit:"",kind:"image",width:791,height:943,src:new URL(""+new URL("A013-pz2oFL1f.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A014",title:"하츄핑 패키지 다른 각도",group:"product",source:"싱글팩/PNG/일반_하츄핑 복사.png",credit:"",kind:"image",width:791,height:943,src:new URL(""+new URL("A014-J1z7cou1.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A015",title:"하츄핑 싱글팩",group:"product",source:"싱글팩/PNG/하츄핑.png",credit:"",kind:"image",width:625,height:809,src:new URL(""+new URL("A015-Gn2XwwUy.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A016",title:"싱글팩 3종 구성",group:"product",source:"싱글팩/그룹 (1).png",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A016-CKdJOEo_.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A017",title:"싱글팩 3종 라인업",group:"product",source:"싱글팩/그룹 (2).png",credit:"",kind:"image",width:1300,height:740,src:new URL(""+new URL("A017-GovsCjJl.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A018",title:"이클립스핑 제품 이미지",group:"product",source:"싱글팩/기본 (1).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A018-C5PmGReN.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A019",title:"하츄핑 제품 이미지",group:"product",source:"싱글팩/기본 (2).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A019-DftAen3R.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A020",title:"다이아나핑 제품 이미지",group:"product",source:"싱글팩/기본 (3).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A020-BUZgAKUi.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A021",title:"싱글팩 대표 비주얼",group:"product",source:"싱글팩/대표이미지.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A021-BPPnOR_h.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A022",title:"다이아나핑 팩·케이스·배지",group:"product",source:"싱글팩/케이스컷 (1).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A022--bcudOUP.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A023",title:"이클립스핑 팩·케이스·배지",group:"product",source:"싱글팩/케이스컷 (2).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A023-Da5aWh2m.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A024",title:"하츄핑 팩·케이스·배지",group:"product",source:"싱글팩/케이스컷 (3).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A024-Cpdu0FuV.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A025",title:"후기 콘셉트 카드 01",group:"digital",source:"인스타/01.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A025-D9KcDXUo.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A026",title:"후기 콘셉트 카드 02",group:"digital",source:"인스타/02.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A026-COucjxfY.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A027",title:"후기 콘셉트 카드 03",group:"digital",source:"인스타/03.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A027-CAyx-NZv.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A028",title:"후기 콘셉트 카드 04",group:"digital",source:"인스타/04.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A028-C49qTXT0.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A029",title:"상품 상세페이지 전체",group:"digital",source:"인스타/260609_티니핑상페_원본.png",credit:"",kind:"image",width:780,height:14964,src:new URL(""+new URL("A029-CqUbFD5y.webp",import.meta.url).href,import.meta.url).href,pages:[],preview:new URL(""+new URL("A029-preview-C9uso0yz.webp",import.meta.url).href,import.meta.url).href},{id:"A030",title:"제품 연출 인스타그램 게시물",group:"digital",source:"인스타/ChatGPT Image 2026년 7월 28일 오후 01_51_37 복사.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A030-sS0--Tka.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A031",title:"출시 이벤트 표지",group:"digital",source:"인스타/ㄹㄴㅇㄹ (2).jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A031-Ii4AWEDc.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A032",title:"3가지 배지 타입 안내",group:"digital",source:"인스타/ㄹㄴㅇㄹ (3).jpg",credit:"",kind:"image",width:1040,height:1300,src:new URL(""+new URL("A032-tl29_WZO.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A033",title:"3가지 케이스 안내",group:"digital",source:"인스타/ㄹㄴㅇㄹ (4).jpg",credit:"",kind:"image",width:1040,height:1300,src:new URL(""+new URL("A033-RLNAntI0.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A034",title:"이벤트 참여 안내",group:"digital",source:"인스타/ㄹㄴㅇㄹ (5).jpg",credit:"",kind:"image",width:1040,height:1300,src:new URL(""+new URL("A034-9iwMtlKo.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A035",title:"제품 활용 소개 카드",group:"digital",source:"인스타/인스타_카드뉴스.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A035-uLSoj6af.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A036",title:"다이어리 꾸미기 카드",group:"digital",source:"인스타/카드뉴스_다이어리.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A036-D1HHS67_.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A037",title:"싱글팩 소개 카드",group:"digital",source:"인스타/카드뉴스_싱글팩.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A037-tkA3JD3z.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A038",title:"제품 홍보 포스터",group:"promotion",source:"인스타/티니핑딱지_홍보포스터.jpg",credit:"",kind:"image",width:3508,height:4961,src:new URL(""+new URL("A038-BhGeEnbu.webp",import.meta.url).href,import.meta.url).href,pages:[],preview:new URL(""+new URL("A038-preview-Dc7fV8mM.webp",import.meta.url).href,import.meta.url).href},{id:"A039",title:"다이소 골드 타입 · PDF 인쇄 원본",group:"packaging",source:"다이소딱지.pdf · 3페이지",credit:"",kind:"document",width:990,height:1600,src:new URL(""+new URL("A039-ByQA37Uc.webp",import.meta.url).href,import.meta.url).href,pages:[],original:new URL(""+new URL("다이소딱지-OE3CwXSq.pdf",import.meta.url).href,import.meta.url).href+"#page=3"},{id:"A040",title:"다이소 샤이닝 타입 · PDF 인쇄 원본",group:"packaging",source:"다이소딱지.pdf · 2페이지",credit:"",kind:"document",width:990,height:1600,src:new URL(""+new URL("A040-D1srEEGR.webp",import.meta.url).href,import.meta.url).href,pages:[],original:new URL(""+new URL("다이소딱지-OE3CwXSq.pdf",import.meta.url).href,import.meta.url).href+"#page=2"},{id:"A041",title:"다이소 스파클 타입 · PDF 인쇄 원본",group:"packaging",source:"다이소딱지.pdf · 1페이지",credit:"",kind:"document",width:990,height:1600,src:new URL(""+new URL("A041-DxNNvji6.webp",import.meta.url).href,import.meta.url).href,pages:[],original:new URL(""+new URL("다이소딱지-OE3CwXSq.pdf",import.meta.url).href,import.meta.url).href+"#page=1"},{id:"A042",title:"하츄핑 파우치 앞뒤",group:"packaging",source:"지기구조/딱지파우치-01.png",credit:"",kind:"image",width:842,height:596,src:new URL(""+new URL("A042-DjoWZh-A.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A043",title:"다이아나핑 파우치 앞뒤",group:"packaging",source:"지기구조/딱지파우치-02.png",credit:"",kind:"image",width:842,height:596,src:new URL(""+new URL("A043-BqMDjPUQ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A044",title:"이클립스핑 파우치 앞뒤",group:"packaging",source:"지기구조/딱지파우치-03.png",credit:"",kind:"image",width:842,height:596,src:new URL(""+new URL("A044-Cdd4Gx2U.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A045",title:"하츄핑 디스플레이 전개도",group:"packaging",source:"지기구조/딱지파우치_디스플레이박스-01.png",credit:"",kind:"image",width:1300,height:633,src:new URL(""+new URL("A045-DXgJci11.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A046",title:"다이아나핑 디스플레이 전개도",group:"packaging",source:"지기구조/딱지파우치_디스플레이박스-02.png",credit:"",kind:"image",width:1300,height:633,src:new URL(""+new URL("A046-CKxmPAw8.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A047",title:"이클립스핑 디스플레이 전개도",group:"packaging",source:"지기구조/딱지파우치_디스플레이박스-03.png",credit:"",kind:"image",width:1300,height:633,src:new URL(""+new URL("A047-BnUd3Gbp.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A048",title:"리미티드 1+1 이벤트",group:"promotion",source:"지기구조/리미티드_이벤트.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A048-CuZ3BMFl.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A049",title:"다이아나핑 리미티드 전개도",group:"packaging",source:"지기구조/리미티드에디션-01.png",credit:"",kind:"image",width:1300,height:700,src:new URL(""+new URL("A049-CXTcNlLg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A050",title:"이클립스핑 리미티드 전개도",group:"packaging",source:"지기구조/리미티드에디션-02.png",credit:"",kind:"image",width:1300,height:700,src:new URL(""+new URL("A050-CmGRRcly.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A051",title:"하츄핑 싱글팩 전개도",group:"packaging",source:"지기구조/싱글팩-01.png",credit:"",kind:"image",width:1300,height:919,src:new URL(""+new URL("A051-CTRc-5WU.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A052",title:"다이아나핑 싱글팩 전개도",group:"packaging",source:"지기구조/싱글팩-02.png",credit:"",kind:"image",width:1300,height:919,src:new URL(""+new URL("A052-C2wYdsih.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A053",title:"이클립스핑 싱글팩 전개도",group:"packaging",source:"지기구조/싱글팩-03.png",credit:"",kind:"image",width:1300,height:919,src:new URL(""+new URL("A053-DXV-lyzb.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A054",title:"물류용 카톤박스 인쇄 그래픽",group:"production",source:"지기구조/카톤박스.png",credit:"",kind:"image",width:1300,height:321,src:new URL(""+new URL("A054-Dc4LGRjr.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A055",title:"크리스탈 케이스 보호 파우치",group:"production",source:"지기구조/케이스파우치.png",credit:"",kind:"image",width:1041,height:618,src:new URL(""+new URL("A055-BIEH9qdk.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A056",title:"풀박스 전개도",group:"packaging",source:"지기구조/풀박스.png",credit:"",kind:"image",width:1300,height:824,src:new URL(""+new URL("A056-E-Rtk_DU.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A057",title:"블루 케이스 · 보관 연출",group:"usage",source:"컨셉컷/34.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A057-DRiIUZpw.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A058",title:"다이아나핑 · 제품 구성 연출",group:"usage",source:"컨셉컷/36.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A058-BSPrGWIg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A059",title:"핑크 케이스 · 침실 연출",group:"usage",source:"컨셉컷/38.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A059-DThxwxuI.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A060",title:"블루 케이스 · 생활 공간 연출",group:"usage",source:"컨셉컷/39.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A060-DlDeSZt9.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A061",title:"핑크 케이스 · 선반 전시",group:"usage",source:"컨셉컷/42.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A061-Kpg24czI.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A062",title:"자석 배지 · 보드 활용",group:"usage",source:"컨셉컷/43.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A062-O9QQ2SKI.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A063",title:"핑크 케이스 · 전시 연출",group:"usage",source:"컨셉컷/44.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A063-DmpGhSYD.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A064",title:"퍼플 케이스 · 배지 넣기",group:"usage",source:"컨셉컷/47.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A064-B16JOuoc.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A065",title:"블루 케이스 · 배지 넣기",group:"usage",source:"컨셉컷/52.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A065-CUio22GL.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A066",title:"다이아나핑 · 탁상 구성",group:"usage",source:"컨셉컷/53.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A066-v93I7zu8.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A067",title:"퍼플 케이스 · 사용 연출",group:"usage",source:"컨셉컷/55.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A067-vZkd6QHF.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A068",title:"핑크 케이스 · 탁상 구성",group:"usage",source:"컨셉컷/56.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A068-CobA29q_.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A069",title:"핑크 케이스 · 보관 연출 01",group:"usage",source:"컨셉컷/58.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A069-CoNlK4mD.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A070",title:"핑크 케이스 · 보관 연출 02",group:"usage",source:"컨셉컷/59.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A070-BxP_7Cp7.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A071",title:"아이 놀이 콘셉트 01",group:"usage",source:"컨셉컷/66.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A071-DvRC7Omg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A072",title:"아이 놀이 콘셉트 02",group:"usage",source:"컨셉컷/69.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A072-MOTBjPqQ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A073",title:"아이 놀이 콘셉트 03",group:"usage",source:"컨셉컷/72.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A073-CpqFVpMW.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A074",title:"아이 놀이 콘셉트 04",group:"usage",source:"컨셉컷/73.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A074-DMI9jL2D.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A075",title:"아이 놀이 콘셉트 05",group:"usage",source:"컨셉컷/74.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A075-DYrQqjtt.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A076",title:"이클립스핑 · 후기 콘셉트",group:"usage",source:"컨셉컷/82.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A076-R1imCyhg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A077",title:"다이아나핑 · 후기 콘셉트",group:"usage",source:"컨셉컷/83.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A077-Bbn168Ce.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A078",title:"블루 크리스탈 케이스",group:"usage",source:"컨셉컷/기본_01.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A078-h4Am-4RB.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A079",title:"핑크 크리스탈 케이스",group:"usage",source:"컨셉컷/기본_02.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A079-DwHfTixV.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A080",title:"퍼플 크리스탈 케이스",group:"usage",source:"컨셉컷/기본_03.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A080-f2hsvjnf.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A081",title:"제공 제품 사양",group:"production",source:"티니핑미스터리뱃지_사양.txt",credit:"",kind:"text",text:`1. 딱지 스팩
재질: 종이&자석
규격: 원형 5.4 x 5.4
두깨: 2mm
중량: 하나당 중량 4g, 종이 420g, 자석: 20g
종류: 골드 스파클 샤이닝

딱지전면 인쇄 
1. 종이재질 : 아트지200g 
2. 인쇄도수 : 4도
3. 인쇄 코팅방식 : 유광코팅 
4. 홀로그램 : 박2도 

딱지후면 인쇄 
1. 종이재질 : 아트지150g 
2. 인쇄도수 : 4도인쇄 
3. 코팅방식 : 유광코팅
 
2. 인박스 패키지
ㄴ 딱지가 3개 포함되는 포장 파우치
ㄴ 크리스탈 케이스 한개가 포함되는 포장 파우치
가로: 120mm
세로: 140mm
폭: 40mm

3. 딱지 파우치
 가로: 120mm
 세로: 130mm
 실링: 상하단 15mm
 
4. 크리스탈 케이스
양쪽:100mm

1파레트 2400개 적재



1단(바닥) 적재 수량: 10상자 (가로 2줄, 세로 5줄 배치)

안전 권장 적재 (약 1.5m 높이): 9단 적재 ➔ 총 90상자

최대 적재 (약 1.95m 높이): 12단 적재 ➔ 총 120상자

2400개 1파레트`,src:null,pages:[]},{id:"A082",title:"풀박스 제품 이미지",group:"product",source:"풀박스/레이어 1.png",credit:"",kind:"image",width:610,height:670,src:new URL(""+new URL("A082-Cl9oaX5r.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A083",title:"풀박스 구성",group:"product",source:"풀박스/풀박스_단색배경.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A083-BhJsK5aL.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A084",title:"풀박스 대표 비주얼",group:"product",source:"풀박스/풀박스_이미지.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A084-vhist52g.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"B001",title:"배지 제작 시트 · 앞면과 공통 뒷면",group:"badge",source:"260417_티니핑3종딱지(최종칼선).pdf",credit:"",kind:"document",src:new URL(""+new URL("badge-front-BeRoCcsF.webp",import.meta.url).href,import.meta.url).href,pages:[new URL(""+new URL("badge-front-BeRoCcsF.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-back-BOkZlx0J.webp",import.meta.url).href,import.meta.url).href]},{id:"T001",title:"하츄핑 디스플레이 박스 대표 비주얼",group:"product",source:"src/content-assets/파우치거치박스_하츄핑.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("파우치거치박스_하츄핑-BuTbTgmn.jpg",import.meta.url).href,import.meta.url).href,pages:[]},{id:"T002",title:"다이아나핑 디스플레이 박스 대표 비주얼",group:"product",source:"src/content-assets/파우치거치박스_다이아나핑.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("파우치거치박스_다이아나핑-DwNBa4u_.jpg",import.meta.url).href,import.meta.url).href,pages:[]},{id:"T003",title:"이클립스핑 디스플레이 박스 대표 비주얼",group:"product",source:"src/content-assets/파우치거치박스_이클립스핑.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("파우치거치박스_이클립스핑-BmOv-EY1.jpg",import.meta.url).href,import.meta.url).href,pages:[]},{id:"T004",title:"딱지 파우치 3종 대표 비주얼",group:"product",source:"src/content-assets/레이어 0.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("레이어 0-Dm2w3Pjx.jpg",import.meta.url).href,import.meta.url).href,pages:[]},{id:"T005",title:"다이소 딱지 3종 대표 비주얼",group:"product",source:"src/content-assets/다이소딱지.jpg",credit:"",kind:"image",width:2e3,height:2e3,src:new URL(""+new URL("다이소딱지-CyOha_ZA.jpg",import.meta.url).href,import.meta.url).href,preview:new URL(""+new URL("daiso-lineup-preview-7pEQh-kq.webp",import.meta.url).href,import.meta.url).href,pages:[]}];new URL("data:image/webp;base64,UklGRtgPAABXRUJQVlA4IMwPAACwOQCdASpuAG4APjESiEKiISEXKu9kIAMEtABkC9Mm++b80Wv/2r8EflT8VfBHpfy5ec/+n9zvah/QfsB/rp0pfMJ+2/7Se8P/svUV/WvUG/qn+16yT0D/3Q9OD91vhA/tP/T9LbBSd+v6jwj8eHtz25/tPtxY+7Rf5T92v2fmr35/E/UI9gf7fxJduFZf0BfbP7B/0/Df1dPDvsAfq//v/XrvtfRvYC/P/qzf2//x8xP6H/ov2p+Av+e/3DrTejh+6DwOfbs7Oe/fBGCVP8fC7piJDMsQfRaK38Bm/iq4NmPjc71kUB+yA+u8f28Ay9cNTbH3VxNfKMB/URq4m6VeVZRgPOTiHe7SjhPHrGuvF7ESBKdis8bFWz41sEf1JVWoGq+YnuTI3uHl3c5hGOBgT+7/7igbZII8Qb/ZYX6X60z+AzVR14u6pW6byZSPfY5a85Klw9jLaJi29n9djD2hoMetVoyhIP6Eo9AhhQW7oZMa3W9h8fVEBXP+EsATQ+ZlD0mGpimf1Ogq2g+VBJl97W5xa5hhizn/OCunzySibq3RiUSx3oLyAJZXcnTI7+rhYFmPLtrH2H1G2C+5zstioE2UumJaQGr/PXdqSVOBG4Pa7mdFQAD+/3yAJ7YletVx1r23McXhuCK7eJj9sUKjPpeLXM7D//4lb5X8+cxJOi9OG2iV8kx4eCFI0z7VYAw6kLmSlkZGz7cKr/jl8vnJcohPBDnrgKDEcpIdhUdiobh0vWEX2gBMw/fbd6ctFswJLy8DJsw7cwrXiaUC2pmXlZpR+nR55aguGfWX+nmY0k2Ei7hYZMZbbB8tbFCxuog0hNMZAQr0RwCKU07sjZ0uI9b9lzc6jWsmzx8LEqV2fBfD1oTA9LrjGQAFNjvmzbYXpqlGLsNvQ9ax8kZCPWjGrjLMPOF8GHLXuPmQILo1tKKzMo2gMTdDc8CTR6cWXKyuktkWbsBOXWc8S0VdDoYhb1EqZdnrRgEk9iwVriH28BNdkBcVNul32+R95mbEu1t3gyM7XPo7SGH803il7McyPuMO++ZwRRxrJL0xZAY6w1Zm38Bb6boeK+x1PSlTWwGcTE9EdPNqCsLA8kf+du0DPlhhRd9mp5aXbj98r8fY+bHR3JC1wSja4OiemurefQ7c5FblA4e0B6VXFURBa30ng/76ji+YP00gvstdcRH93IaMIFliObUdeyORufK2hFOS9wAm+lf8iv8N59ECWWcJsRIC58yB3/2gjvjG8R7XXI12gMxvti7zeQpJobm60Rl7rW5Bx/HIUnKFgpux73/16X0ZgEKb4NLt7X5xcN/OLI7zHV/NY+rFdsP2A+9m7zpgbix/zlTFNs77xjvVEF13DelGI23OG1J1P+mE9KBaLsAdIRDtzMJNPCK/92xGmTW1llkpvTJcbA3ZhrNJSB3sGpFxGMpQ+TU7t6neWEelZFYo7XhcHsHSZmMkSrp4H2T8QJtqIwNGeIz5GEz6eoL7Es5n2XGferhHMb3fOpe5Ko6luM9yyb4tZhyCjnqlB+bI+hpVEtOA7khMQYndflMXnvbeG2EaiTMzfJg113iYwcxKaIZIOl5ChTgEvIc2ORYQjz7S9qQce8ko7hKMkSw3WHjOp66ilvcdvkeAKR83eUeMfPVPGGJaONDuZPu8MVibIOYZSsr/d+En28N1BdvybTF+Ea/kGi8P/j/vugVicSRPWUvlTzI/HQnCnb2W3VuXJZjwmcwzxKPMjgIUocXl/w+WvT1UnrgHtaIJr7fk1unG6SPnbhmZJ232eiWKJSa8Si2RsgRS39174OR2b62GXBw74H4T48bL5XKhK+x98QyagZSgDbdetOMYuq5XErq77s9jvCP3R9bqwojA3Uvs0JPEgrPIDQ/lJ/e3sb7ZBJf7X5LJKoINQIYxYoSW2rtIM1YIzIu13WxLMRFQedNe3pDXp9pV/6MSX594MH/ij38i+5w4dYpU30bTWekNcKNa60dWTHt0aym6E0SjekUkElAjX5q/fqkwQsvenbTT57ZuKoNmEcSHi/zuI0qSzIIkR31CCHktXukshfve0XxEexUUnM2N5Dh1clfJtjW25dCXQKSVmQXa7z8z2EHIgw2PVS33BEMP/du8P1rxFhVyrt2bhplbXeRGgFQU9LaOs5xN/aWKciHg9ivjMb8/LaHA/5EERrwms9POiz0MUfmcFMsFEo/BbU8h2px84n6lZfZJ0wf1CsGZ+UuF3mMOQg0wqXyVHQxsKQez6GbP1L+StbKjxT+/IpczRhdWdyZfn6R4p9em8CIxT5xFFY6LoX5/1QaksscW9yunlLGjZ/f/a7Jm4rBzeSI4f4fZdfxIVDJepL4rukFlRTN7bL7hjSn6e9z2Zd5ecDSvBArl/MK+6uvOldujNv7ZCqnHKHA8MwKBNzzjvwvbm16/dFKmtFUiX50wvdUkVv2MsuvPodP3Y6QQ2kENwMF4a3GhpMnU4K9dQo7lrnpp6+NWyoN5JT5c3+Rj079bwqYkXbM3iDg9lvPtCoz7stuDjj/tO/Qd1swEmLcDv3rPlheAXYEVQWI7bz9fnypPYN+3EYhZ0hjfRJMitcqL16sORGxihvSBlezl1TmFkBpGVCsrqXDHA09Da0bqp0aMLREibC9UO5lBO/wMpeh0OmpEtpmvNX8gOTV+HoklRT5otbx88W6YKSe6kXYiK/09uZc+sFNbWOz+rhVDuhmVRgwHmD53ue9KBD6qTmMdEmX6fBasoYkKXUzUs+FAd5iFtsj6zx2D1oaUq3JMHV9AQYIfEFlRWVq+CJtZxnVC2kp/9tL6xNOacLVuPOQBdOMU+TpZEXUMKUmf09YAwrtkAcKzTY2uRa1kG9HJmk7dXfC6OHi2lR2+cVZ0kf2PdPyy318kQ8hwahxbg8nqGxpmnH7EpPKAE2ItaYRtcy0uOBKjSVxYh4sytQyZ/EKQ3FV1z0joJfYXm7GmZ368vahWH/A/NjmRAFgU9pJ2RZCPu9UlDFjuTv9oJX1UbRxyB9LKtPndJOS7ay1SV0r1p/wMRT3ZY6t6KNeQj7KV7o8BGsJceYTL/4ytdRv/xmOzvvbGKsNNwQvS3HdpEyiDiBmuDKIhmqRV3tU6Kf/+bkez829vm2tPuR52g7Yag/vwk1NFtwzgIVa+lnF3zPVPf17cQWvInZUURZLGsoCJS0vBY7Py3tY/67KeGpoxeOxStTLS0V/qDy1Er71+qJpy4Nwz7i/qrLVobRSb3Xo1lU8BO7EIVci5Sa/E8CfgGyA+VZfFpuvPqr+S7DujFIQEbedXvkjseGcSw/924AV3+HWU64D7hY01FtPe1LwcjtTvQh5Z9+3vbIWAB18OEhlPwzy+sfAxMkAjZc1GHKu1C+T8ubpaWAiyVnpZMw/kl8tyBDy7KMf18rwM3KCXxWFsIcCtLqMM8qBZkvhRF46/ghEdvanejrM3ZKN7hoHyKwHTF8ww/9sgJFuJHq+V/Yjt8ePfHZNncrVaZlLQ6V6MJxoK5oeDgpn9sidSaE9843UuEh40b5L9QLVLkk99fF6X6EHTfzVW9q+rufvF56v7MJfsXT5bg7DriKRLwvOe15ans9zY6Iulb+frU4gAYXvEmkDujkd/46+v0NejyHJCbIVwOUOoM4NmTch27AO+ZyaVWH8iifmHpQpRflgNdyz176ZRlQFfVEmPEs/gNlg4da4Tq/Pf45rkYa3ognj/WhVwBq4Q3lU2U+R4DkUPwKXmg/24oDvG0fA4/4hzoDQ6TBTW7m/bV5XB+R9t6c7z2PMaOBrSW2c7JErWfrh0G73BrPU2NyctT9KSCyt+N670WsePWsH7mYUmywpnUMekrRew3guTkBi8XasnDorB4cn5Wv+hKtPch9ztETFZjcZJzhi+P5tPCqMMzem6beM0zsWRz8JARGtuQHWGbao4cRdSBIg6sfQvn+rj5kDhMVizjoJc1Hu7eZMRbdG/YiN6hjaoZVlaSKc883kV60CqECKpUyp8ndRwRCmWDyosTFaHE9r8bXomUAQLa/Qf9duWaH1Rf2ILDxf5UFwmuyb5+CHN68HSO3+0n+z76yEC+kmnOAsDpknFD7fxrNsETw95oarZlcx8drN9Ttl+jR55KKFbAQHqVr3ZyQaxGVD7L05+1dlsPDHVHQ3FjHMVdTFQXyTkEOphc+Zzq6c3L5Be43mEU4ThiA1ayExZr9gUfjuWyAYIPoR5S+S+kcAsgXViu53Nvlhf1DdkI4JzP3x986MsHKwImyacSZevgIT8EKr0hCQc+PkQspZe1j2Cn9GMgWRvMwryQZdBOfMh+np4LQ4AvHi6mtjCKI+caQ+hHV6ECLkpj9O/h2xFMwtszXZTlYtLA/vFbNVq7yKXhc3qTOGxI0bzlAJQgvQl4GYJiBDy0533CxoesNyJrtO5W/vc3a7N4lqXOtwMaQfi9x4B2IYauhkHxwEd+xdqyLsQS+Fva+zTaSu3sKaTKG3Hhgn3ComN4EQqvUfZZVnk2Tdqi27nbXgfIrGPNTFt29K9UX7iHuUN5Twy3awdbivngHJdZgfGPurcfEOW+nObxGL6bef7wQ68aOWeVF5S0zGSU/O9blxU6cPqcXATHA3sUVOwormKn309OaVQnW0KvEcpi9aVp8pyzdpnrITVHB74VRq5yC31r8hhUnahIB71UnNu+m/gSUwx+eIdpAnM+hxz4ZJRhGS/tZr5HYQr6UQbfCAw7C+n1NjtXPzeUL22gkvncYL9aIyulFCRSZuJlm16fBQzSHknQTEfTteZ7do90rG0ewK4yfWXEvsSiuuBs5llyyhshTeBfZ1V0PZSWRBP0vN1HTBGq6Gma0iT7Sz/NlZGxRne/O36OocU1BDK5F1h2Bjtqzuafjo3fLzKoJaKRvIZ8iLWwb/G2o7z4CzgkSr49Ir0+rbkObf/+eiCD3OhUPY5JUSermkCkdgehAcsTsyLmzYisV2Sz9kkDU8N1cIZx6h8FVgxqAPEqlkSlFG6JwjQbNnH5NXabJ7+hBaz5kD7HXi9fq/ft3rwlwd4GvkMhImQ/APuXd7+790GtEOHiXMLJPkBnMStq5cfVKK1R5O5anbhTBFyNE6g/BcI8MGdNrXXcwnqcqPgUy5DxSmSI8KGdRQR9hcpSoB4zZZ2HNTNs8aXZVGKF4brtit/zD2/nmnVY3mdaKUR7d6/QxDC9TMX953qpTtRRXsqH2EwZS3nthTU7ghbaD39iRZvY8DASmL51tENDYg+fqDyhi3MOOpLyYBj3SB/pshC8NlHjeM9kT1TtkXj7Zb/5lqeAsGcCrm6zVEPcKBtNhbDAcvr45CRGT39Qb5Fo5g62/A2FjMG8BIM+pqs62fteL+gAAMBeMcboTmzGQyx4DziXd1EYhc8miTnHrQAAAA=",import.meta.url).href,new URL(""+new URL("badge-sample-2-C9akOfRk.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-3-BacbPyRw.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-4-BljmGkla.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-5-DWGY2Bab.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-6-BSEwgY1Y.webp",import.meta.url).href,import.meta.url).href;const Lr={A041:{pages:[{url:new URL(""+new URL("A041-1.svg-SCjcESLS.gz",import.meta.url).href,import.meta.url).href,width:442.2049865722656,height:714.3309936523438}]},A040:{pages:[{url:new URL(""+new URL("A040-1.svg-B1q0RH1Z.gz",import.meta.url).href,import.meta.url).href,width:442.2049865722656,height:714.3309936523438}]},A039:{pages:[{url:new URL(""+new URL("A039-1.svg-BrZUBLIi.gz",import.meta.url).href,import.meta.url).href,width:442.2049865722656,height:714.3309936523438}]},B001:{pages:[{url:new URL(""+new URL("B001-1.svg-DLOshZ_2.gz",import.meta.url).href,import.meta.url).href,width:1842.52001953125,height:1388.97998046875},{url:new URL(""+new URL("B001-2.svg-DuMFJMti.gz",import.meta.url).href,import.meta.url).href,width:1836.8499755859375,height:1383.31005859375}]},A004:{pages:[{url:new URL(""+new URL("A004-1.svg-Dm4KXuBb.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-2.svg-BMoD3VSE.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-3.svg-CZujMGnP.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-4.svg-B-_pYSMP.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-5.svg-C_KC-hjD.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-6.svg-Coy9z03B.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625}]},A001:{pages:[{url:new URL(""+new URL("A001-1.svg-DdwMotaf.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625}]}},Es=[{id:"gold",label:"골드",description:"금색 링 · 클로버 보석 프레임"},{id:"sparkle",label:"스파클",description:"은색 링 · 하트 보석 프레임"},{id:"shining",label:"샤이닝",description:"캐릭터 컬러 링 · 원형 보석 프레임"}],en=[{id:"badge-08",sourcePosition:8,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:1,column:8,frontPrint:[1254.330319862666,34.01955173522468,1424.4090600201464,204.098291892705],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,42.523488743098696,1415.9051230122723,195.59435488483098],back:[1262.9755859375,36.71195983886719,1415.7635498046875,189.4999542236328],typeIndex:1,label:"골드 01",thumbnail:new URL(""+new URL("badge-08-DE-FqJsL.webp",import.meta.url).href,import.meta.url).href},{id:"badge-09",sourcePosition:9,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:1,column:9,frontPrint:[1421.5748266986036,34.01955173522468,1591.653566856084,204.098291892705],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,42.523488743098696,1583.1496298482098,195.59435488483098],back:[1430.2200927734375,36.71195983886719,1583.008056640625,189.4999542236328],typeIndex:2,label:"골드 02",thumbnail:new URL(""+new URL("badge-09-DmH9n4DQ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-10",sourcePosition:10,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:1,column:10,frontPrint:[1588.8187231829786,34.01942966491218,1758.897463340459,204.0981698223925],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,42.523366672786196,1750.3935263325848,195.59423281451848],back:[1597.4639892578125,36.71195983886719,1750.251953125,189.4999542236328],typeIndex:3,label:"골드 03",thumbnail:new URL(""+new URL("badge-10-BejpQ3og.webp",import.meta.url).href,import.meta.url).href},{id:"badge-18",sourcePosition:18,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:2,column:8,frontPrint:[1254.330319862666,198.42891452819345,1424.4090600201464,368.50765468567374],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,206.93285153606746,1415.9051230122723,360.0037176777997],back:[1262.9755859375,201.1211395263672,1415.7635498046875,353.90911865234375],typeIndex:4,label:"골드 04",thumbnail:new URL(""+new URL("badge-18-XlSUykBc.webp",import.meta.url).href,import.meta.url).href},{id:"badge-19",sourcePosition:19,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:2,column:9,frontPrint:[1421.5748266986036,198.42891452819345,1591.653566856084,368.50765468567374],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,206.93285153606746,1583.1496298482098,360.0037176777997],back:[1430.2200927734375,201.1211395263672,1583.008056640625,353.90911865234375],typeIndex:5,label:"골드 05",thumbnail:new URL(""+new URL("badge-19-DBne2Zis.webp",import.meta.url).href,import.meta.url).href},{id:"badge-20",sourcePosition:20,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:2,column:10,frontPrint:[1588.8187231829786,198.42879245788095,1758.897463340459,368.50753261536124],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,206.93272946575496,1750.3935263325848,360.0035956074872],back:[1597.4639892578125,201.1211395263672,1750.251953125,353.90911865234375],typeIndex:6,label:"골드 06",thumbnail:new URL(""+new URL("badge-20-CIL8-nl4.webp",import.meta.url).href,import.meta.url).href},{id:"badge-28",sourcePosition:28,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:3,column:8,frontPrint:[1254.330319862666,362.838345985713,1424.4090600201464,532.9170861431933],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,371.342282993587,1415.9051230122723,524.4131491353193],back:[1262.9755859375,365.53057861328125,1415.7635498046875,518.3185424804688],typeIndex:7,label:"골드 07",thumbnail:new URL(""+new URL("badge-28-CcBXr4M_.webp",import.meta.url).href,import.meta.url).href},{id:"badge-29",sourcePosition:29,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:3,column:9,frontPrint:[1421.5748266986036,362.838345985713,1591.653566856084,532.9170861431933],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,371.342282993587,1583.1496298482098,524.4131491353193],back:[1430.2200927734375,365.53057861328125,1583.008056640625,518.3185424804688],typeIndex:8,label:"골드 08",thumbnail:new URL(""+new URL("badge-29-Dd0k_HIo.webp",import.meta.url).href,import.meta.url).href},{id:"badge-30",sourcePosition:30,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:3,column:10,frontPrint:[1588.8187231829786,362.8382239154005,1758.897463340459,532.9169640728808],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,371.3421609232745,1750.3935263325848,524.4130270650068],back:[1597.4639892578125,365.53057861328125,1750.251953125,518.3185424804688],typeIndex:9,label:"골드 09",thumbnail:new URL(""+new URL("badge-30-DfvCrJrR.webp",import.meta.url).href,import.meta.url).href},{id:"badge-38",sourcePosition:38,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:4,column:8,frontPrint:[1254.330319862666,527.2477087786817,1424.4090600201464,697.326448936162],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,535.7516457865557,1415.9051230122723,688.822511928288],back:[1262.9755859375,529.9398803710938,1415.7635498046875,682.7278442382812],typeIndex:10,label:"골드 10",thumbnail:new URL(""+new URL("badge-38-Cg79xo4X.webp",import.meta.url).href,import.meta.url).href},{id:"badge-39",sourcePosition:39,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:4,column:9,frontPrint:[1421.5748266986036,527.2477087786817,1591.653566856084,697.326448936162],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,535.7516457865557,1583.1496298482098,688.822511928288],back:[1430.2200927734375,529.9398803710938,1583.008056640625,682.7278442382812],typeIndex:11,label:"골드 11",thumbnail:new URL(""+new URL("badge-39-B_YUpvKk.webp",import.meta.url).href,import.meta.url).href},{id:"badge-40",sourcePosition:40,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:4,column:10,frontPrint:[1588.8187231829786,527.2477087786817,1758.897463340459,697.326448936162],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,535.7516457865557,1750.3935263325848,688.822511928288],back:[1597.4639892578125,529.9398803710938,1750.251953125,682.7278442382812],typeIndex:12,label:"골드 12",thumbnail:new URL(""+new URL("badge-40-DBsTG2MC.webp",import.meta.url).href,import.meta.url).href},{id:"badge-48",sourcePosition:48,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:5,column:8,frontPrint:[1254.330319862666,691.6571326068067,1424.4090600201464,861.735872764287],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,700.1610696146807,1415.9051230122723,853.231935756413],back:[1262.9755859375,694.3494873046875,1415.7635498046875,847.137451171875],typeIndex:13,label:"골드 13",thumbnail:new URL(""+new URL("badge-48-rZmMYQXx.webp",import.meta.url).href,import.meta.url).href},{id:"badge-49",sourcePosition:49,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:5,column:9,frontPrint:[1421.5748266986036,691.6571326068067,1591.653566856084,861.735872764287],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,700.1610696146807,1583.1496298482098,853.231935756413],back:[1430.2200927734375,694.3494873046875,1583.008056640625,847.137451171875],typeIndex:14,label:"골드 14",thumbnail:new URL(""+new URL("badge-49-Dhx76ABa.webp",import.meta.url).href,import.meta.url).href},{id:"badge-50",sourcePosition:50,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:5,column:10,frontPrint:[1588.8187231829786,691.6571326068067,1758.897463340459,861.735872764287],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,700.1610696146807,1750.3935263325848,853.231935756413],back:[1597.4639892578125,694.3494873046875,1750.251953125,847.137451171875],typeIndex:15,label:"골드 15",thumbnail:new URL(""+new URL("badge-50-5Am-PpTX.webp",import.meta.url).href,import.meta.url).href},{id:"badge-58",sourcePosition:58,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:6,column:8,frontPrint:[1254.330319862666,856.0665564349317,1424.4090600201464,1026.145296592412],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,864.5704934428057,1415.9051230122723,1017.641359584538],back:[1262.9755859375,858.7587890625,1415.7635498046875,1011.5467529296875],typeIndex:16,label:"골드 16",thumbnail:new URL(""+new URL("badge-58-CbB1XB4w.webp",import.meta.url).href,import.meta.url).href},{id:"badge-59",sourcePosition:59,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:6,column:9,frontPrint:[1421.5748266986036,856.0665564349317,1591.653566856084,1026.145296592412],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,864.5704934428057,1583.1496298482098,1017.641359584538],back:[1430.2200927734375,858.7587890625,1583.008056640625,1011.5467529296875],typeIndex:17,label:"골드 17",thumbnail:new URL(""+new URL("badge-59-CELhVXQJ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-60",sourcePosition:60,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:6,column:10,frontPrint:[1588.8187231829786,856.0666785052442,1758.897463340459,1026.1454186627245],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,864.5706155131182,1750.3935263325848,1017.6414816548505],back:[1597.4639892578125,858.7587890625,1750.251953125,1011.5467529296875],typeIndex:18,label:"골드 18",thumbnail:new URL(""+new URL("badge-60-BAzuZeiE.webp",import.meta.url).href,import.meta.url).href},{id:"badge-68",sourcePosition:68,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:7,column:8,frontPrint:[1254.330319862666,1020.4759802630567,1424.4090600201464,1190.554720420537],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,1028.9799172709309,1415.9051230122723,1182.050783412663],back:[1262.9755859375,1023.1682739257812,1415.7635498046875,1175.956298828125],typeIndex:19,label:"골드 19",thumbnail:new URL(""+new URL("badge-68-D6yD2wXZ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-69",sourcePosition:69,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:7,column:9,frontPrint:[1421.5748266986036,1020.4759802630567,1591.653566856084,1190.554720420537],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,1028.9799172709309,1583.1496298482098,1182.050783412663],back:[1430.2200927734375,1023.1682739257812,1583.008056640625,1175.956298828125],typeIndex:20,label:"골드 20",thumbnail:new URL(""+new URL("badge-69-DZ9miDly.webp",import.meta.url).href,import.meta.url).href},{id:"badge-70",sourcePosition:70,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:7,column:10,frontPrint:[1588.8187231829786,1020.4761023333692,1758.897463340459,1190.5548424908495],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,1028.9800393412434,1750.3935263325848,1182.0509054829754],back:[1597.4639892578125,1023.1682739257812,1750.251953125,1175.956298828125],typeIndex:21,label:"골드 21",thumbnail:new URL(""+new URL("badge-70-DgXjk1az.webp",import.meta.url).href,import.meta.url).href},{id:"badge-78",sourcePosition:78,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:8,column:8,frontPrint:[1254.330319862666,1184.8853735736036,1424.4090600201464,1354.964113731084],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,1193.3893105814777,1415.9051230122723,1346.4601767232098],back:[1262.9755859375,1187.57763671875,1415.7635498046875,1340.36572265625],typeIndex:22,label:"골드 22",thumbnail:new URL(""+new URL("badge-78-Cd2vu3Y5.webp",import.meta.url).href,import.meta.url).href},{id:"badge-79",sourcePosition:79,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:8,column:9,frontPrint:[1421.5748266986036,1184.8853735736036,1591.653566856084,1354.964113731084],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,1193.3893105814777,1583.1496298482098,1346.4601767232098],back:[1430.2200927734375,1187.57763671875,1583.008056640625,1340.36572265625],typeIndex:23,label:"골드 23",thumbnail:new URL(""+new URL("badge-79-DRsnIm3D.webp",import.meta.url).href,import.meta.url).href},{id:"badge-80",sourcePosition:80,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:8,column:10,frontPrint:[1588.8187231829786,1184.885495643916,1758.897463340459,1354.9642358013964],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,1193.3894326517902,1750.3935263325848,1346.4602987935223],back:[1597.4639892578125,1187.57763671875,1750.251953125,1340.36572265625],typeIndex:24,label:"골드 24",thumbnail:new URL(""+new URL("badge-80-IkvXAdCT.webp",import.meta.url).href,import.meta.url).href},{id:"badge-03",sourcePosition:3,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:3,frontPrint:[418.042203407588,34.04199741393562,588.1209435650683,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,42.54593442180963,579.6170065571943,195.61680056354191],back:[426.7555236816406,36.71195983886719,579.5435180664062,189.4999542236328],typeIndex:1,label:"스파클 01",thumbnail:new URL(""+new URL("badge-03-C2Andf4t.webp",import.meta.url).href,import.meta.url).href},{id:"badge-04",sourcePosition:4,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:4,frontPrint:[584.8421912005567,34.04199741393562,754.920931358037,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,42.54593442180963,746.416994350163,195.61680056354191],back:[593.9993896484375,36.71195983886719,746.7874145507812,189.4999542236328],typeIndex:2,label:"스파클 02",thumbnail:new URL(""+new URL("badge-04-evTzyb21.webp",import.meta.url).href,import.meta.url).href},{id:"badge-05",sourcePosition:5,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:5,frontPrint:[752.1222204974317,34.04199741393562,922.200960654912,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,42.54593442180963,913.697023647038,195.61680056354191],back:[761.24365234375,36.71195983886719,914.0316162109375,189.4999542236328],typeIndex:3,label:"스파클 03",thumbnail:new URL(""+new URL("badge-05-COCRur_e.webp",import.meta.url).href,import.meta.url).href},{id:"badge-07",sourcePosition:7,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:7,frontPrint:[1086.824216347041,34.63428257018562,1256.9029565045214,204.71302272766593],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,43.13821957805963,1248.3990194966473,196.20908571979191],back:[1095.731689453125,36.71195983886719,1248.5196533203125,189.4999542236328],typeIndex:4,label:"스파클 04",thumbnail:new URL(""+new URL("badge-07-VA6G1nD3.webp",import.meta.url).href,import.meta.url).href},{id:"badge-13",sourcePosition:13,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:3,frontPrint:[418.042203407588,198.44202182799813,588.1209435650683,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,206.94595883587215,579.6170065571943,360.0168249776044],back:[426.7555236816406,201.1211395263672,579.5435180664062,353.90911865234375],typeIndex:5,label:"스파클 05",thumbnail:new URL(""+new URL("badge-13-BFRXnlsh.webp",import.meta.url).href,import.meta.url).href},{id:"badge-14",sourcePosition:14,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:4,frontPrint:[584.8421912005567,198.44202182799813,754.920931358037,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,206.94595883587215,746.416994350163,360.0168249776044],back:[593.9993896484375,201.1211395263672,746.7874145507812,353.90911865234375],typeIndex:6,label:"스파클 06",thumbnail:new URL(""+new URL("badge-14-DtQvtGMO.webp",import.meta.url).href,import.meta.url).href},{id:"badge-15",sourcePosition:15,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:5,frontPrint:[752.1222204974317,198.44202182799813,922.200960654912,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,206.94595883587215,913.697023647038,360.0168249776044],back:[761.24365234375,201.1211395263672,914.0316162109375,353.90911865234375],typeIndex:7,label:"스파클 07",thumbnail:new URL(""+new URL("badge-15-czov33Tv.webp",import.meta.url).href,import.meta.url).href},{id:"badge-17",sourcePosition:17,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:7,frontPrint:[1086.824216347041,198.53052280456063,1256.9029565045214,368.60926296204093],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,207.03445981243465,1248.3990194966473,360.1053259541669],back:[1095.731689453125,201.1211395263672,1248.5196533203125,353.90911865234375],typeIndex:8,label:"스파클 08",thumbnail:new URL(""+new URL("badge-17-QyXdOENZ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-24",sourcePosition:24,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:3,column:4,frontPrint:[584.8421912005567,362.8420386126661,754.920931358037,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,371.3459756205401,746.416994350163,524.4168417622724],back:[593.9993896484375,365.53057861328125,746.7874145507812,518.3185424804688],typeIndex:9,label:"스파클 09",thumbnail:new URL(""+new URL("badge-24-D06_EHHY.webp",import.meta.url).href,import.meta.url).href},{id:"badge-25",sourcePosition:25,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:3,column:5,frontPrint:[752.1222204974317,362.8420386126661,922.200960654912,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,371.3459756205401,913.697023647038,524.4168417622724],back:[761.24365234375,365.53057861328125,914.0316162109375,518.3185424804688],typeIndex:10,label:"스파클 10",thumbnail:new URL(""+new URL("badge-25-DtDCPFNy.webp",import.meta.url).href,import.meta.url).href},{id:"badge-27",sourcePosition:27,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:3,column:7,frontPrint:[1086.824216347041,363.2766089251661,1256.9029565045214,533.3553490826464],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,371.7805459330401,1248.3990194966473,524.8514120747724],back:[1095.731689453125,365.53057861328125,1248.5196533203125,518.3185424804688],typeIndex:11,label:"스파클 11",thumbnail:new URL(""+new URL("badge-27-Cd6A13TO.webp",import.meta.url).href,import.meta.url).href},{id:"badge-34",sourcePosition:34,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:4,column:4,frontPrint:[584.8421912005567,527.2420630267286,754.920931358037,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,535.7460000346026,746.416994350163,688.8168661763349],back:[593.9993896484375,529.9398803710938,746.7874145507812,682.7278442382812],typeIndex:12,label:"스파클 12",thumbnail:new URL(""+new URL("badge-34-Cd0ySSwt.webp",import.meta.url).href,import.meta.url).href},{id:"badge-35",sourcePosition:35,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:4,column:5,frontPrint:[752.1222204974317,527.2420630267286,922.200960654912,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,535.7460000346026,913.697023647038,688.8168661763349],back:[761.24365234375,529.9398803710938,914.0316162109375,682.7278442382812],typeIndex:13,label:"스파클 13",thumbnail:new URL(""+new URL("badge-35-DOwYXlfS.webp",import.meta.url).href,import.meta.url).href},{id:"badge-37",sourcePosition:37,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:4,column:7,frontPrint:[1086.824216347041,527.4719824603224,1256.9029565045214,697.5507226178026],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,535.9759194681964,1248.3990194966473,689.0467856099286],back:[1095.731689453125,529.9398803710938,1248.5196533203125,682.7278442382812],typeIndex:14,label:"스파클 14",thumbnail:new URL(""+new URL("badge-37-CbOkyFPI.webp",import.meta.url).href,import.meta.url).href},{id:"badge-44",sourcePosition:44,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:5,column:4,frontPrint:[584.8421912005567,691.6420264056349,754.920931358037,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,700.1459634135089,746.416994350163,853.2168295552411],back:[593.9993896484375,694.3494873046875,746.7874145507812,847.137451171875],typeIndex:15,label:"스파클 15",thumbnail:new URL(""+new URL("badge-44-B0QQhtl8.webp",import.meta.url).href,import.meta.url).href},{id:"badge-45",sourcePosition:45,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:5,column:5,frontPrint:[752.1222204974317,691.6420264056349,922.200960654912,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,700.1459634135089,913.697023647038,853.2168295552411],back:[761.24365234375,694.3494873046875,914.0316162109375,847.137451171875],typeIndex:16,label:"스파클 16",thumbnail:new URL(""+new URL("badge-45-DmxY66ow.webp",import.meta.url).href,import.meta.url).href},{id:"badge-47",sourcePosition:47,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:5,column:7,frontPrint:[1086.824216347041,691.9851050189161,1256.9029565045214,862.0638451763964],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,700.4890420267901,1248.3990194966473,853.5599081685224],back:[1095.731689453125,694.3494873046875,1248.5196533203125,847.137451171875],typeIndex:17,label:"스파클 17",thumbnail:new URL(""+new URL("badge-47-CeRviWJJ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-54",sourcePosition:54,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:6,column:4,frontPrint:[584.8421912005567,856.0420508196974,754.920931358037,1026.1207909771776],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,864.5459878275714,746.416994350163,1017.6168539693036],back:[593.9993896484375,858.7587890625,746.7874145507812,1011.5467529296875],typeIndex:18,label:"스파클 18",thumbnail:new URL(""+new URL("badge-54-B5s3ZlQK.webp",import.meta.url).href,import.meta.url).href},{id:"badge-55",sourcePosition:55,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:6,column:5,frontPrint:[752.1222204974317,856.0420508196974,922.200960654912,1026.1207909771776],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,864.5459878275714,913.697023647038,1017.6168539693036],back:[761.24365234375,858.7587890625,914.0316162109375,1011.5467529296875],typeIndex:19,label:"스파클 19",thumbnail:new URL(""+new URL("badge-55-DODeslOI.webp",import.meta.url).href,import.meta.url).href},{id:"badge-57",sourcePosition:57,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:6,column:7,frontPrint:[1086.824216347041,856.3358130267286,1256.9029565045214,1026.414553184209],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,864.8397500346026,1248.3990194966473,1017.9106161763349],back:[1095.731689453125,858.7587890625,1248.5196533203125,1011.5467529296875],typeIndex:20,label:"스파클 20",thumbnail:new URL(""+new URL("badge-57-BoHgYb2v.webp",import.meta.url).href,import.meta.url).href},{id:"badge-64",sourcePosition:64,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:7,column:4,frontPrint:[584.8421912005567,1020.4420141986036,754.920931358037,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,1028.9459512064777,746.416994350163,1182.0168173482098],back:[593.9993896484375,1023.1682739257812,746.7874145507812,1175.956298828125],typeIndex:21,label:"스파클 21",thumbnail:new URL(""+new URL("badge-64-9ht6MIZ6.webp",import.meta.url).href,import.meta.url).href},{id:"badge-65",sourcePosition:65,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:7,column:5,frontPrint:[752.1222204974317,1020.4420141986036,922.200960654912,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,1028.9459512064777,913.697023647038,1182.0168173482098],back:[761.24365234375,1023.1682739257812,914.0316162109375,1175.956298828125],typeIndex:22,label:"스파클 22",thumbnail:new URL(""+new URL("badge-65-DdkxeC42.webp",import.meta.url).href,import.meta.url).href},{id:"badge-74",sourcePosition:74,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:8,column:4,frontPrint:[584.8421912005567,1184.842038612666,754.920931358037,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,1193.3459756205402,746.416994350163,1346.4168417622723],back:[593.9993896484375,1187.57763671875,746.7874145507812,1340.36572265625],typeIndex:23,label:"스파클 23",thumbnail:new URL(""+new URL("badge-74-PcRnXs2E.webp",import.meta.url).href,import.meta.url).href},{id:"badge-75",sourcePosition:75,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:8,column:5,frontPrint:[752.1222204974317,1184.842038612666,922.200960654912,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,1193.3459756205402,913.697023647038,1346.4168417622723],back:[761.24365234375,1187.57763671875,914.0316162109375,1340.36572265625],typeIndex:24,label:"스파클 24",thumbnail:new URL(""+new URL("badge-75-Cu6sRJZU.webp",import.meta.url).href,import.meta.url).href},{id:"badge-01",sourcePosition:1,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:1,column:1,frontPrint:[83.60220859557624,34.04199741393562,253.68094875305655,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,42.54593442180963,245.17701174518254,195.61680056354191],back:[92.26741027832031,36.71195983886719,245.05540466308594,189.4999542236328],typeIndex:1,label:"샤이닝 01",thumbnail:new URL(""+new URL("badge-01-z9KiWMp0.webp",import.meta.url).href,import.meta.url).href},{id:"badge-02",sourcePosition:2,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:1,column:2,frontPrint:[250.88221500426766,34.04199741393562,420.96095516174796,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,42.54593442180963,412.45701815387395,195.61680056354191],back:[259.51129150390625,36.71195983886719,412.2992858886719,189.4999542236328],typeIndex:2,label:"샤이닝 02",thumbnail:new URL(""+new URL("badge-02-DHBRGsSq.webp",import.meta.url).href,import.meta.url).href},{id:"badge-06",sourcePosition:6,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:1,column:6,frontPrint:[919.7811255267286,34.82433841735359,1089.859865684209,204.9030785748339],bleedMM:3,finishedDiameterMM:54,front:[928.2850625346026,43.3282754252276,1081.3559286763348,196.39914156695988],back:[928.487548828125,36.71195983886719,1081.2755126953125,189.4999542236328],typeIndex:3,label:"샤이닝 03",thumbnail:new URL(""+new URL("badge-06-C_JSAFg0.webp",import.meta.url).href,import.meta.url).href},{id:"badge-11",sourcePosition:11,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:2,column:1,frontPrint:[83.60220859557624,198.44202182799813,253.68094875305655,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,206.94595883587215,245.17701174518254,360.0168249776044],back:[92.26741027832031,201.1211395263672,245.05540466308594,353.90911865234375],typeIndex:4,label:"샤이닝 04",thumbnail:new URL(""+new URL("badge-11-DHLpc7QZ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-12",sourcePosition:12,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:2,column:2,frontPrint:[250.88221500426766,198.44202182799813,420.96095516174796,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,206.94595883587215,412.45701815387395,360.0168249776044],back:[259.51129150390625,201.1211395263672,412.2992858886719,353.90911865234375],typeIndex:5,label:"샤이닝 05",thumbnail:new URL(""+new URL("badge-12-DCfR1xAr.webp",import.meta.url).href,import.meta.url).href},{id:"badge-16",sourcePosition:16,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:2,column:6,frontPrint:[919.7803625872755,198.7830786517286,1089.8591027447558,368.8618188092089],bleedMM:3,finishedDiameterMM:54,front:[928.2842995951495,207.28701565960262,1081.3551657368816,360.3578818013349],back:[928.487548828125,201.1211395263672,1081.2755126953125,353.90911865234375],typeIndex:6,label:"샤이닝 06",thumbnail:new URL(""+new URL("badge-16-CTzAvAez.webp",import.meta.url).href,import.meta.url).href},{id:"badge-21",sourcePosition:21,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:1,frontPrint:[83.60220859557624,362.8420386126661,253.68094875305655,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,371.3459756205401,245.17701174518254,524.4168417622724],back:[92.26741027832031,365.53057861328125,245.05540466308594,518.3185424804688],typeIndex:7,label:"샤이닝 07",thumbnail:new URL(""+new URL("badge-21-NIdd2ZW2.webp",import.meta.url).href,import.meta.url).href},{id:"badge-22",sourcePosition:22,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:2,frontPrint:[250.88221500426766,362.8420386126661,420.96095516174796,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,371.3459756205401,412.45701815387395,524.4168417622724],back:[259.51129150390625,365.53057861328125,412.2992858886719,518.3185424804688],typeIndex:8,label:"샤이닝 08",thumbnail:new URL(""+new URL("badge-22-BVzALAYL.webp",import.meta.url).href,import.meta.url).href},{id:"badge-23",sourcePosition:23,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:3,frontPrint:[418.042203407588,362.8420386126661,588.1209435650683,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,371.3459756205401,579.6170065571943,524.4168417622724],back:[426.7555236816406,365.53057861328125,579.5435180664062,518.3185424804688],typeIndex:9,label:"샤이닝 09",thumbnail:new URL(""+new URL("badge-23-3N0N0K4-.webp",import.meta.url).href,import.meta.url).href},{id:"badge-26",sourcePosition:26,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:6,frontPrint:[919.7803015521192,363.05091617614266,1089.8590417095995,533.129656333623],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,371.5548531840167,1081.3551047017254,524.625719325749],back:[928.487548828125,365.53057861328125,1081.2755126953125,518.3185424804688],typeIndex:10,label:"샤이닝 10",thumbnail:new URL(""+new URL("badge-26-BBKF5945.webp",import.meta.url).href,import.meta.url).href},{id:"badge-31",sourcePosition:31,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:1,frontPrint:[83.60220859557624,527.2420630267286,253.68094875305655,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,535.7460000346026,245.17701174518254,688.8168661763349],back:[92.26741027832031,529.9398803710938,245.05540466308594,682.7278442382812],typeIndex:11,label:"샤이닝 11",thumbnail:new URL(""+new URL("badge-31-CtwaKdwO.webp",import.meta.url).href,import.meta.url).href},{id:"badge-32",sourcePosition:32,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:2,frontPrint:[250.88221500426766,527.2420630267286,420.96095516174796,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,535.7460000346026,412.45701815387395,688.8168661763349],back:[259.51129150390625,529.9398803710938,412.2992858886719,682.7278442382812],typeIndex:12,label:"샤이닝 12",thumbnail:new URL(""+new URL("badge-32-DoB35F9k.webp",import.meta.url).href,import.meta.url).href},{id:"badge-33",sourcePosition:33,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:3,frontPrint:[418.042203407588,527.2420630267286,588.1209435650683,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,535.7460000346026,579.6170065571943,688.8168661763349],back:[426.7555236816406,529.9398803710938,579.5435180664062,682.7278442382812],typeIndex:13,label:"샤이닝 13",thumbnail:new URL(""+new URL("badge-33-C_vBQs8e.webp",import.meta.url).href,import.meta.url).href},{id:"badge-36",sourcePosition:36,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:6,frontPrint:[919.7803015521192,527.3186011126661,1089.8590417095995,697.3973412701464],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,535.8225381205401,1081.3551047017254,688.8934042622724],back:[928.487548828125,529.9398803710938,1081.2755126953125,682.7278442382812],typeIndex:14,label:"샤이닝 14",thumbnail:new URL(""+new URL("badge-36-BU5XfqNk.webp",import.meta.url).href,import.meta.url).href},{id:"badge-41",sourcePosition:41,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:1,frontPrint:[83.60220859557624,691.6420264056349,253.68094875305655,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,700.1459634135089,245.17701174518254,853.2168295552411],back:[92.26741027832031,694.3494873046875,245.05540466308594,847.137451171875],typeIndex:15,label:"샤이닝 15",thumbnail:new URL(""+new URL("badge-41-sv0NYG45.webp",import.meta.url).href,import.meta.url).href},{id:"badge-42",sourcePosition:42,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:2,frontPrint:[250.88221500426766,691.6420264056349,420.96095516174796,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,700.1459634135089,412.45701815387395,853.2168295552411],back:[259.51129150390625,694.3494873046875,412.2992858886719,847.137451171875],typeIndex:16,label:"샤이닝 16",thumbnail:new URL(""+new URL("badge-42-eAkGDu0d.webp",import.meta.url).href,import.meta.url).href},{id:"badge-43",sourcePosition:43,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:3,frontPrint:[418.0421881487989,691.6420264056349,588.1209283062792,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[426.54612515667293,700.1459634135089,579.6169912984052,853.2168295552411],back:[426.7555236816406,694.3494873046875,579.5435180664062,847.137451171875],typeIndex:17,label:"샤이닝 17",thumbnail:new URL(""+new URL("badge-43-B-R7zh4F.webp",import.meta.url).href,import.meta.url).href},{id:"badge-46",sourcePosition:46,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:6,frontPrint:[919.7803015521192,691.5863013079786,1089.8590417095995,861.6650414654589],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,700.0902383158526,1081.3551047017254,853.1611044575849],back:[928.487548828125,694.3494873046875,1081.2755126953125,847.137451171875],typeIndex:18,label:"샤이닝 18",thumbnail:new URL(""+new URL("badge-46-BqF9wPY3.webp",import.meta.url).href,import.meta.url).href},{id:"badge-52",sourcePosition:52,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:6,column:2,frontPrint:[250.88221500426766,856.0420508196974,420.96095516174796,1026.1207909771776],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,864.5459878275714,412.45701815387395,1017.6168539693036],back:[259.51129150390625,858.7587890625,412.2992858886719,1011.5467529296875],typeIndex:19,label:"샤이닝 19",thumbnail:new URL(""+new URL("badge-52-CGMpcjvJ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-56",sourcePosition:56,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:6,column:6,frontPrint:[919.7803015521192,856.7039770892286,1089.8590417095995,1026.782717246709],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,865.2079140971026,1081.3551047017254,1018.2787802388349],back:[928.487548828125,858.7587890625,1081.2755126953125,1011.5467529296875],typeIndex:20,label:"샤이닝 20",thumbnail:new URL(""+new URL("badge-56-Cvemc1GB.webp",import.meta.url).href,import.meta.url).href},{id:"badge-62",sourcePosition:62,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:7,column:2,frontPrint:[250.88221500426766,1020.4420141986036,420.96095516174796,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,1028.9459512064777,412.45701815387395,1182.0168173482098],back:[259.51129150390625,1023.1682739257812,412.2992858886719,1175.956298828125],typeIndex:21,label:"샤이닝 21",thumbnail:new URL(""+new URL("badge-62-DBFLMbtl.webp",import.meta.url).href,import.meta.url).href},{id:"badge-63",sourcePosition:63,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:7,column:3,frontPrint:[418.042203407588,1020.4420141986036,588.1209435650683,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,1028.9459512064777,579.6170065571943,1182.0168173482098],back:[426.7555236816406,1023.1682739257812,579.5435180664062,1175.956298828125],typeIndex:22,label:"샤이닝 22",thumbnail:new URL(""+new URL("badge-63-CuC8TDLf.webp",import.meta.url).href,import.meta.url).href},{id:"badge-72",sourcePosition:72,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:8,column:2,frontPrint:[250.88221500426766,1184.842038612666,420.96095516174796,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,1193.3459756205402,412.45701815387395,1346.4168417622723],back:[259.51129150390625,1187.57763671875,412.2992858886719,1340.36572265625],typeIndex:23,label:"샤이닝 23",thumbnail:new URL(""+new URL("badge-72-pm8cvWoA.webp",import.meta.url).href,import.meta.url).href},{id:"badge-73",sourcePosition:73,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:8,column:3,frontPrint:[418.042203407588,1184.842038612666,588.1209435650683,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,1193.3459756205402,579.6170065571943,1346.4168417622723],back:[426.7555236816406,1187.57763671875,579.5435180664062,1340.36572265625],typeIndex:24,label:"샤이닝 24",thumbnail:new URL(""+new URL("badge-73-BHFfZ8n8.webp",import.meta.url).href,import.meta.url).href}],tc=["badge-48","badge-07","badge-06"],Lo=new Map;function Ys(i,e=0){const t=`${i}:${e}`;return Lo.has(t)||Lo.set(t,(async()=>{const n=Lr[i]?.pages[e];if(!n)throw new Error("벡터 페이지가 없습니다.");const r=await fetch(n.url);if(!r.ok)throw new Error("벡터 자료를 불러오지 못했습니다.");const o=await r.arrayBuffer(),s=new Uint8Array(o,0,Math.min(2,o.byteLength)),a=s[0]===31&&s[1]===139?await new Response(new Blob([o]).stream().pipeThrough(new DecompressionStream("gzip"))).text():new TextDecoder().decode(o);if(!a.includes("<svg"))throw new Error("벡터 자료 형식이 올바르지 않습니다.");const c=new Blob([a],{type:"image/svg+xml"}),l=URL.createObjectURL(c);return{...n,text:a,url:l}})()),Lo.get(t)}async function D0(i,e,t=2048){const n=await Ys("B001",i==="front"?0:1),[r,o,s,a]=e;return(i==="back"?n.text.replace(/<path\b(?=[^>]*\bstroke="#ec148d")[^>]*\/>/g,""):n.text).replace(/<svg\b[^>]*>/,l=>l.replace(/\bwidth="[^"]*"/,`width="${t}"`).replace(/\bheight="[^"]*"/,`height="${t}"`).replace(/\bviewBox="[^"]*"/,`viewBox="${r} ${o} ${s-r} ${a-o}"`))}async function I0(i,e,t){const n=await D0(i,e,t),r=URL.createObjectURL(new Blob([n],{type:"image/svg+xml"}));try{const o=new Image;o.src=r,await o.decode();const s=document.createElement("canvas");s.width=s.height=t;const a=s.getContext("2d");return a.fillStyle="#fff",a.fillRect(0,0,t,t),a.drawImage(o,0,0,t,t),s}finally{URL.revokeObjectURL(r)}}const Zs={"badge-08":{1024:new URL(""+new URL("badge-08-front-1024-KpIUse9J.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-08-front-2048-B0ueNsAL.webp",import.meta.url).href,import.meta.url).href},"badge-09":{1024:new URL(""+new URL("badge-09-front-1024-BHzfL91Z.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-09-front-2048-BJEhTulG.webp",import.meta.url).href,import.meta.url).href},"badge-10":{1024:new URL(""+new URL("badge-10-front-1024-BW2trwVb.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-10-front-2048-Bc9u0csb.webp",import.meta.url).href,import.meta.url).href},"badge-18":{1024:new URL(""+new URL("badge-18-front-1024-CNW1vMsR.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-18-front-2048-CPbCMWiK.webp",import.meta.url).href,import.meta.url).href},"badge-19":{1024:new URL(""+new URL("badge-19-front-1024-BM_nQUe5.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-19-front-2048-BW8tpg_f.webp",import.meta.url).href,import.meta.url).href},"badge-20":{1024:new URL(""+new URL("badge-20-front-1024-p4kpyLL2.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-20-front-2048-bJ8sH0PZ.webp",import.meta.url).href,import.meta.url).href},"badge-28":{1024:new URL(""+new URL("badge-28-front-1024-DkkmqjkY.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-28-front-2048-DmYpVocG.webp",import.meta.url).href,import.meta.url).href},"badge-29":{1024:new URL(""+new URL("badge-29-front-1024-Du9vDwEk.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-29-front-2048-CoCzp3Rw.webp",import.meta.url).href,import.meta.url).href},"badge-30":{1024:new URL(""+new URL("badge-30-front-1024-B033RabT.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-30-front-2048-Bb5kSoGT.webp",import.meta.url).href,import.meta.url).href},"badge-38":{1024:new URL(""+new URL("badge-38-front-1024-DpVDNxCa.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-38-front-2048-Cd93ntsk.webp",import.meta.url).href,import.meta.url).href},"badge-39":{1024:new URL(""+new URL("badge-39-front-1024-B3wORdZZ.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-39-front-2048-bWtL5qRz.webp",import.meta.url).href,import.meta.url).href},"badge-40":{1024:new URL(""+new URL("badge-40-front-1024-BxS5sSER.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-40-front-2048-3vLTiwEC.webp",import.meta.url).href,import.meta.url).href},"badge-48":{1024:new URL(""+new URL("badge-48-front-1024-CJNlKfFY.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-48-front-2048-CgWRTIXa.webp",import.meta.url).href,import.meta.url).href},"badge-49":{1024:new URL(""+new URL("badge-49-front-1024-BpjpHbjD.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-49-front-2048-8b4N_RWO.webp",import.meta.url).href,import.meta.url).href},"badge-50":{1024:new URL(""+new URL("badge-50-front-1024-Cg9Y0Qrk.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-50-front-2048-dIzGrzgI.webp",import.meta.url).href,import.meta.url).href},"badge-58":{1024:new URL(""+new URL("badge-58-front-1024-CBNmS-xF.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-58-front-2048-fbuHwG8l.webp",import.meta.url).href,import.meta.url).href},"badge-59":{1024:new URL(""+new URL("badge-59-front-1024-DBMP3pN4.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-59-front-2048-BnJgSwbV.webp",import.meta.url).href,import.meta.url).href},"badge-60":{1024:new URL(""+new URL("badge-60-front-1024-DAu6kIVx.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-60-front-2048-DAm0m-yL.webp",import.meta.url).href,import.meta.url).href},"badge-68":{1024:new URL(""+new URL("badge-68-front-1024-Zay7iu5d.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-68-front-2048-7qg0CPLU.webp",import.meta.url).href,import.meta.url).href},"badge-69":{1024:new URL(""+new URL("badge-69-front-1024-B24upS42.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-69-front-2048-BhxVU_Jf.webp",import.meta.url).href,import.meta.url).href},"badge-70":{1024:new URL(""+new URL("badge-70-front-1024-BY3fLouq.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-70-front-2048-DiIJa36L.webp",import.meta.url).href,import.meta.url).href},"badge-78":{1024:new URL(""+new URL("badge-78-front-1024-DAVDWsnG.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-78-front-2048-BXfHiCla.webp",import.meta.url).href,import.meta.url).href},"badge-79":{1024:new URL(""+new URL("badge-79-front-1024-BGN3Ufjd.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-79-front-2048-k2eWYaPB.webp",import.meta.url).href,import.meta.url).href},"badge-80":{1024:new URL(""+new URL("badge-80-front-1024-hXkNobvI.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-80-front-2048-DWpcVu6X.webp",import.meta.url).href,import.meta.url).href},"badge-03":{1024:new URL(""+new URL("badge-03-front-1024-C4mgMaOK.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-03-front-2048-Cnu47AWC.webp",import.meta.url).href,import.meta.url).href},"badge-04":{1024:new URL(""+new URL("badge-04-front-1024-CnbsV_Du.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-04-front-2048-qQUdF-RN.webp",import.meta.url).href,import.meta.url).href},"badge-05":{1024:new URL(""+new URL("badge-05-front-1024-BK1JMTGK.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-05-front-2048-Cn29ylag.webp",import.meta.url).href,import.meta.url).href},"badge-07":{1024:new URL(""+new URL("badge-07-front-1024-DhU6U8TK.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-07-front-2048-sQI9D8t7.webp",import.meta.url).href,import.meta.url).href},"badge-13":{1024:new URL(""+new URL("badge-13-front-1024-DYatd-dM.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-13-front-2048-CEAQNZdd.webp",import.meta.url).href,import.meta.url).href},"badge-14":{1024:new URL(""+new URL("badge-14-front-1024-D6VfA9o9.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-14-front-2048-2xQS9duF.webp",import.meta.url).href,import.meta.url).href},"badge-15":{1024:new URL(""+new URL("badge-15-front-1024-D5OhrY35.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-15-front-2048-D0v682f_.webp",import.meta.url).href,import.meta.url).href},"badge-17":{1024:new URL(""+new URL("badge-17-front-1024-BX1G3WhZ.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-17-front-2048-CsbVNRek.webp",import.meta.url).href,import.meta.url).href},"badge-24":{1024:new URL(""+new URL("badge-24-front-1024-D-uglhuf.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-24-front-2048-BsS5Pp8E.webp",import.meta.url).href,import.meta.url).href},"badge-25":{1024:new URL(""+new URL("badge-25-front-1024-CdX7l5jG.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-25-front-2048-dTUwg1Ca.webp",import.meta.url).href,import.meta.url).href},"badge-27":{1024:new URL(""+new URL("badge-27-front-1024-BHYrAcBM.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-27-front-2048-uUtT3cPS.webp",import.meta.url).href,import.meta.url).href},"badge-34":{1024:new URL(""+new URL("badge-34-front-1024-ClMZs_kE.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-34-front-2048-DRlEwpXc.webp",import.meta.url).href,import.meta.url).href},"badge-35":{1024:new URL(""+new URL("badge-35-front-1024-UEQFWC5d.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-35-front-2048-DOaqPbYT.webp",import.meta.url).href,import.meta.url).href},"badge-37":{1024:new URL(""+new URL("badge-37-front-1024-Bq3Vf0HW.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-37-front-2048-Dj2fS0Jy.webp",import.meta.url).href,import.meta.url).href},"badge-44":{1024:new URL(""+new URL("badge-44-front-1024-BDTBzNew.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-44-front-2048-ClbV74RY.webp",import.meta.url).href,import.meta.url).href},"badge-45":{1024:new URL(""+new URL("badge-45-front-1024-DLIkZMkw.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-45-front-2048-BD75eSRJ.webp",import.meta.url).href,import.meta.url).href},"badge-47":{1024:new URL(""+new URL("badge-47-front-1024-Bi7ooV5u.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-47-front-2048-mfSTbZ_t.webp",import.meta.url).href,import.meta.url).href},"badge-54":{1024:new URL(""+new URL("badge-54-front-1024-BFqwQ0nQ.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-54-front-2048-Bgb_Lh7X.webp",import.meta.url).href,import.meta.url).href},"badge-55":{1024:new URL(""+new URL("badge-55-front-1024-eWyBVxQR.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-55-front-2048-BzmWv-oM.webp",import.meta.url).href,import.meta.url).href},"badge-57":{1024:new URL(""+new URL("badge-57-front-1024-DOzO59mb.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-57-front-2048--Kr1olAB.webp",import.meta.url).href,import.meta.url).href},"badge-64":{1024:new URL(""+new URL("badge-64-front-1024-CzY1z-KV.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-64-front-2048-hL7MgvcY.webp",import.meta.url).href,import.meta.url).href},"badge-65":{1024:new URL(""+new URL("badge-65-front-1024-DGkHGnLq.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-65-front-2048-CJxYZujb.webp",import.meta.url).href,import.meta.url).href},"badge-74":{1024:new URL(""+new URL("badge-74-front-1024-CqQphw2Z.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-74-front-2048-DkxezEtp.webp",import.meta.url).href,import.meta.url).href},"badge-75":{1024:new URL(""+new URL("badge-75-front-1024-bg76x8Pv.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-75-front-2048-DtDgAsNm.webp",import.meta.url).href,import.meta.url).href},"badge-01":{1024:new URL(""+new URL("badge-01-front-1024-Rf0vA4_c.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-01-front-2048-D7pAQUWe.webp",import.meta.url).href,import.meta.url).href},"badge-02":{1024:new URL(""+new URL("badge-02-front-1024-DQYPbUOD.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-02-front-2048-CCe2Bvw_.webp",import.meta.url).href,import.meta.url).href},"badge-06":{1024:new URL(""+new URL("badge-06-front-1024-TYfGWCmx.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-06-front-2048-Ynhsiupy.webp",import.meta.url).href,import.meta.url).href},"badge-11":{1024:new URL(""+new URL("badge-11-front-1024-D1wBHL3R.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-11-front-2048-DFUhUK2m.webp",import.meta.url).href,import.meta.url).href},"badge-12":{1024:new URL(""+new URL("badge-12-front-1024-DPeQizYg.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-12-front-2048-CFQDj-gp.webp",import.meta.url).href,import.meta.url).href},"badge-16":{1024:new URL(""+new URL("badge-16-front-1024-TuYGSdar.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-16-front-2048-Ck6c--d4.webp",import.meta.url).href,import.meta.url).href},"badge-21":{1024:new URL(""+new URL("badge-21-front-1024-1kDVbj8L.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-21-front-2048-CTcxE-c7.webp",import.meta.url).href,import.meta.url).href},"badge-22":{1024:new URL(""+new URL("badge-22-front-1024-LtsIAEx-.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-22-front-2048-DoB0dXSu.webp",import.meta.url).href,import.meta.url).href},"badge-23":{1024:new URL(""+new URL("badge-23-front-1024-DIKhfgya.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-23-front-2048-Uw-z3hgS.webp",import.meta.url).href,import.meta.url).href},"badge-26":{1024:new URL(""+new URL("badge-26-front-1024-06WPoV6P.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-26-front-2048-BEEp01DV.webp",import.meta.url).href,import.meta.url).href},"badge-31":{1024:new URL(""+new URL("badge-31-front-1024-YbFn3EaT.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-31-front-2048-D7KcZ8CM.webp",import.meta.url).href,import.meta.url).href},"badge-32":{1024:new URL(""+new URL("badge-32-front-1024-BvtusoLC.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-32-front-2048-CVqKL76h.webp",import.meta.url).href,import.meta.url).href},"badge-33":{1024:new URL(""+new URL("badge-33-front-1024-LiyEuZJF.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-33-front-2048-DB5j7dic.webp",import.meta.url).href,import.meta.url).href},"badge-36":{1024:new URL(""+new URL("badge-36-front-1024-D6uKaqAG.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-36-front-2048-Cx61lgEe.webp",import.meta.url).href,import.meta.url).href},"badge-41":{1024:new URL(""+new URL("badge-41-front-1024-Y5MqdqYL.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-41-front-2048-Dz6FTSld.webp",import.meta.url).href,import.meta.url).href},"badge-42":{1024:new URL(""+new URL("badge-42-front-1024-iwDr8O6d.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-42-front-2048-BLgVr4EK.webp",import.meta.url).href,import.meta.url).href},"badge-43":{1024:new URL(""+new URL("badge-43-front-1024-Q86y2L0w.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-43-front-2048-TzFOD1RF.webp",import.meta.url).href,import.meta.url).href},"badge-46":{1024:new URL(""+new URL("badge-46-front-1024-BIHOO1Sv.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-46-front-2048-Dwt7Do6h.webp",import.meta.url).href,import.meta.url).href},"badge-52":{1024:new URL(""+new URL("badge-52-front-1024-DGX89P1y.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-52-front-2048--m84a1UG.webp",import.meta.url).href,import.meta.url).href},"badge-56":{1024:new URL(""+new URL("badge-56-front-1024-DR97FmXY.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-56-front-2048-DxbzDKqN.webp",import.meta.url).href,import.meta.url).href},"badge-62":{1024:new URL(""+new URL("badge-62-front-1024-DNVOLObF.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-62-front-2048-BoN0f0Ba.webp",import.meta.url).href,import.meta.url).href},"badge-63":{1024:new URL(""+new URL("badge-63-front-1024-B0DSIIDw.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-63-front-2048-Dg8QiKtl.webp",import.meta.url).href,import.meta.url).href},"badge-72":{1024:new URL(""+new URL("badge-72-front-1024-Z3fekoR5.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-72-front-2048-SeS3STRw.webp",import.meta.url).href,import.meta.url).href},"badge-73":{1024:new URL(""+new URL("badge-73-front-1024-ByMaSXl-.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-73-front-2048-CKbiXRtk.webp",import.meta.url).href,import.meta.url).href}},vi={1024:new URL(""+new URL("common-back-1024-D9lGZeS6.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("common-back-2048-DZQ3Tiv6.webp",import.meta.url).href,import.meta.url).href,rectangle:[92.26741027832031,36.71195983886719,245.05540466308594,189.4999542236328]},Ft=new Map,N0=64*1024*1024,F0=new Set([vi[1024],vi[2048]]);function O0(){let i=0;for(const e of Ft.values())e.ready&&(i+=e.image.naturalWidth*e.image.naturalHeight*4);for(const[e,t]of Ft){if(i<=N0)break;!t.ready||F0.has(e)||(i-=t.image.naturalWidth*t.image.naturalHeight*4,Ft.delete(e))}}function Ks(i){if(Ft.has(i)){const n=Ft.get(i);return Ft.delete(i),Ft.set(i,n),n.promise}const e=new Image,t={image:e,ready:!1};return e.decoding="async",e.src=i,t.promise=e.decode().then(()=>(t.ready=!0,O0(),e)).catch(n=>{throw Ft.delete(i),n}),Ft.set(i,t),t.promise}function Uo(i,e,t=1024){const r=(e==="back"?vi:Zs[i.id])?.[t>1024?"2048":"1024"],o=Ft.get(r);return o?.ready?(Ft.delete(r),Ft.set(r,o),o.image):null}function nc(){return Ks(vi[1024])}function Js(i){return typeof i=="string"&&(i=en.find(e=>e.id===i)),i?Promise.all([Ks(Zs[i.id][1024]),nc()]):Promise.resolve()}function Mr(i,e,t){if(t<=2048){const n=e==="back"?vi:Zs[i.id];return Ks(n[t>1024?"2048":"1024"])}return I0(e,e==="back"?vi.rectangle:i.front,t)}const ll=Math.PI/180;function k0(i,e){const t=i.querySelector(".badge-3d-stage"),n=i.querySelector(".badge-3d-status");let r,o,s,a,c,l,u=!1,h=!1,d=null,f=0,v=0,x=1,m=!1,p=0,R=0,S=0,_=0,T=!1;const A=[],U=[];let P,y,w;function L(){r=new qs({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"}),r.setPixelRatio(Math.min(devicePixelRatio,2)),r.toneMapping=fn,r.outputColorSpace=Mt,t.append(r.domElement),o=new Os,o.background=new Ze("#f7f7f5"),o.add(new Wl("#ffffff","#d3cbd2",2));const $=new Ss("#ffffff",2);$.position.set(-70,95,150),o.add($);const Te=new Ss("#ffffff",.7);Te.position.set(100,-40,80),o.add(Te),s=new Ws(-64,64,32,-32,.1,1e3),a=new Ct,o.add(a),w=new Zu(new Uint8Array([255,255,255,255]),1,1),w.colorSpace=Mt,w.needsUpdate=!0;const Fe=new kr(27,192);A.push(Fe);for(const Ue of["front","back"]){const H=new pi({color:"#fff",toneMapped:!1,map:w});U.push(H);const j=new ut(Fe,H);j.position.z=Ue==="front"?1.005:-1.005,Ue==="back"&&(j.rotation.y=Math.PI),a.add(j),Ue==="front"?c=j:l=j}for(const[Ue,H,j]of[[1.6,0,"#454247"],[.2,.9,"#ede8ed"],[.2,-.9,"#ede8ed"]]){const me=new Br(26.98,26.98,Ue,192,1,!0);me.rotateX(Math.PI/2),A.push(me);const be=new Vl({color:j,roughness:.65,metalness:.05});U.push(be);const ge=new ut(me,be);ge.position.z=H,a.add(ge)}u=!0,s.position.z=120,r.compile(o,s),z()}function k(){if(!u||h)return;const $=t.clientWidth,Te=t.clientHeight;if(!$||!Te)return;const Fe=$/Te,Ue=Math.max(64,64/Fe);s.left=-Ue*Fe/2,s.right=Ue*Fe/2,s.top=Ue/2,s.bottom=-Ue/2,s.position.z=120,s.zoom=x,s.updateProjectionMatrix(),a.rotation.set(-f*ll,v*ll,0,"XYZ"),r.render(o,s),t.dataset.face=Math.abs((v%360+360)%360-180)<90?"back":"front",i.querySelector(".badge-zoom-value").textContent=Math.round(x*100)+"%"}function z(){r&&!h&&t.clientWidth&&t.clientHeight&&(r.setSize(t.clientWidth,t.clientHeight,!1),k(),d&&!T&&q())}function W(){const $=Math.min(t.clientWidth,t.clientHeight)*Math.min(devicePixelRatio,2)*x;return Math.min(r.capabilities.maxTextureSize,$>1500?4096:$>750?2048:1024)}function Y($){const Te=new gt($);return Te.needsUpdate=!0,Te.colorSpace=Mt,Te.anisotropy=Math.min(8,r.capabilities.getMaxAnisotropy()),Te}function X($,Te,Fe){$&&P?.image!==$&&(P?.dispose(),P=Y($),c.material.map=P,c.material.needsUpdate=!0,c.visible=!0),Te&&y?.image!==Te&&(y?.dispose(),y=Y(Te),l.material.map=y,l.material.needsUpdate=!0,l.visible=!0),_=Fe,t.dataset.state="ready",t.dataset.textureSize=String(Fe),t.removeAttribute("aria-busy"),k()}async function oe($,Te=!1,Fe=null){const Ue=en.find(j=>j.id===$);if(!Ue)return;const H=++S;d=Ue,Te&&(f=0,v=0,x=1),_=0,T=!0,i.dataset.badge=$,i.querySelector(".badge-selected-title").textContent=`${Ue.label} · ${Ue.typeDescription}`,e?.(Ue);try{u||L(),r.setSize(t.clientWidth,t.clientHeight,!1);const j=Uo(Ue,"front",2048)||Uo(Ue,"front")||(Fe?.complete&&Fe.naturalWidth?Fe:null),me=Uo(Ue,"back");c.visible=!!j,l.visible=!0,me||(y?.dispose(),y=null,l.material.map=w,l.material.needsUpdate=!0),j?(X(j,me,j.naturalWidth||j.width),n.textContent="드래그 회전 · 휠 확대/축소 · 앞면/뒷면 선택"):(t.dataset.state="loading",t.setAttribute("aria-busy","true"),n.textContent="인쇄면을 준비하는 중",k());const be=Math.max(W(),_),[ge,ze]=await Promise.all([Mr(Ue,"front",be),Mr(Ue,"back",be)]);if(h||H!==S)return;T=!1,X(ge,ze,be),n.textContent="드래그 회전 · 휠 확대/축소 · 앞면/뒷면 선택",q()}catch(j){if(H!==S||h)return;T=!1,t.removeAttribute("aria-busy"),_||(t.dataset.state="error"),n.textContent="배지 화면을 불러오지 못했습니다. 다시 선택해주세요.",console.error(j)}}async function q(){if(!u||!d||T)return;const $=W();if($<=_)return;const Te=d.id,Fe=++S,Ue=d;T=!0;try{const[H,j]=await Promise.all([Mr(Ue,"front",$),Mr(Ue,"back",$)]);if(h||Fe!==S||d.id!==Te)return;T=!1,X(H,j,$),n.textContent="드래그 회전 · 휠 확대/축소 · 앞면/뒷면 선택",q()}catch(H){Fe===S&&!h&&(T=!1,n.textContent="현재 인쇄면으로 표시 중입니다. 다시 확대하면 재시도합니다.",console.error(H))}}function he($){x=Math.max(.7,Math.min(2.8,$)),k(),q()}t.addEventListener("wheel",$=>{if(!u)return;$.preventDefault();const Te=$.deltaY*($.deltaMode===1?16:$.deltaMode===2?t.clientHeight:1);he(x*Math.exp(-Math.max(-200,Math.min(200,Te))*.0015))},{passive:!1}),t.onpointerdown=$=>{u&&(m=!0,p=$.clientX,R=$.clientY,t.setPointerCapture($.pointerId),t.classList.add("dragging"))},t.onpointermove=$=>{m&&(v+=($.clientX-p)*.5,f=Math.max(-90,Math.min(90,f-($.clientY-R)*.4)),p=$.clientX,R=$.clientY,k())},t.onpointerup=t.onpointercancel=()=>{m=!1,t.classList.remove("dragging")},t.onkeydown=$=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes($.key)&&($.preventDefault(),$.stopPropagation(),$.key==="ArrowLeft"&&(v-=10),$.key==="ArrowRight"&&(v+=10),$.key==="ArrowUp"&&(f=Math.max(-90,f-10)),$.key==="ArrowDown"&&(f=Math.min(90,f+10)),k())},i.querySelectorAll("[data-badge-view]").forEach($=>$.onclick=()=>{const Te=$.dataset.badgeView;Te==="front"&&(f=0,v=0),Te==="back"&&(f=0,v=180),Te==="edge"&&(f=-10,v=82),Te==="reset"&&(f=0,v=0,x=1),k()}),i.querySelector('[data-badge-zoom="in"]').onclick=()=>he(x*1.25),i.querySelector('[data-badge-zoom="out"]').onclick=()=>he(x/1.25);const _e=new ResizeObserver(z);_e.observe(t);const Ee={prepare(){!u&&!h&&L()},select:oe,getState(){return{badge:d?.id,rx:f,ry:v,zoom:x,resolution:_,loading:T}},destroy(){h=!0,S++,_e.disconnect(),P?.dispose(),y?.dispose(),w?.dispose(),A.forEach($=>$.dispose()),U.forEach($=>$.dispose()),r?.dispose(),r?.forceContextLoss(),t.replaceChildren()}};return i.badgeViewer=Ee,Ee}const js=[...C0,...P0],B0=new Map(Wi.map(i=>[i.id,i])),An=i=>B0.get(i),Wt=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ui=(i,e,t="",n="")=>`<div class="section-heading"><span class="section-number">${i}</span><div>${n?`<p class="eyebrow">${n}</p>`:""}<h2>${e}</h2>${t?`<p class="section-description">${t}</p>`:""}</div></div>`;function Rn(i,{caption:e=!0,cls:t="",eager:n=!1,preview:r=null,title:o=null,creditTag:s=!0}={}){const a=An(i),c=o||a.title;return`<figure class="work-image ${t}" data-asset="${i}"><button class="image-button" data-open-asset="${i}" aria-label="${Wt(c)} 크게 보기"><img src="${r||a.preview||a.src}" alt="${Wt(c)}" ${n?'fetchpriority="high"':'loading="lazy"'} decoding="async" width="${a.width||1e3}" height="${a.height||1e3}"/>${a.credit&&s?'<span class="ai-tag">AI 연출</span>':""}<span class="image-expand" aria-hidden="true">↗</span></button>${e?`<figcaption>${Wt(c)}${a.credit?"<span>ChatGPT 생성 · Photoshop 후보정</span>":""}</figcaption>`:""}</figure>`}const z0=(i,e="")=>`<div class="image-grid ${e}">${i.map(t=>Rn(t)).join("")}</div>`,G0=[{id:"single",num:"03",name:"싱글팩",tag:"기본 구성",description:"랜덤 배지 3개와 크리스탈 케이스 1개를 하나의 패키지에 담았습니다.",detail:"하츄핑·다이아나핑·이클립스핑의 캐릭터와 색상을 구분하고, 로고와 제품 정보의 위치는 공통된 틀로 연결했습니다.",contents:[["배지","3개"],["크리스탈 케이스","1개"]],hero:"A021",images:["A024","A022","A023"],captions:"캐릭터별 구성품",types:!0},{id:"full",num:"04",name:"풀박스",tag:"3종 한 박스",description:"싱글팩 3종을 한 번에 만나는 구성. 배지 9개와 케이스 3개를 담았습니다.",detail:"작은 팩의 디자인을 확장해 외부에서도 수집 구성과 제품 라인업이 보이도록 정리했습니다.",contents:[["싱글팩","3개"],["배지 / 케이스","9개 / 3개"]],hero:"A084",images:["A083"],captions:"제품 구성과 대표 비주얼"},{id:"limited",num:"05",name:"리미티드 에디션",tag:"5팩 구성",description:"배지 15개와 케이스 5개를 담은 리미티드 구성입니다.",detail:"다이아나핑과 이클립스핑의 컬러를 중심으로, 넓어진 패키지 면에서도 캐릭터와 수집 요소가 함께 읽히도록 구성했습니다.",contents:[["싱글팩","5개"],["배지 / 케이스","15개 / 5개"]],hero:"A009",images:["A008"],captions:"리미티드 2종과 대표 비주얼",types:!0},{id:"daiso",num:"06",name:"다이소 딱지",tag:"유통 채널 확장",description:"원형 자석 배지와 캐릭터 자석을 함께 담은 타입별 진열 팩입니다.",detail:"매대에서 타입과 구성을 바로 확인할 수 있도록, 골드·스파클·샤이닝의 컬러와 캐릭터 그래픽을 구분했습니다.",contents:[["구성","원형 배지 + 캐릭터 자석"],["타입","골드 · 샤이닝 · 스파클"]],hero:"T005",images:[],types:!0,flat:!0},{id:"display",num:"07",name:"딱지 파우치 디스플레이 박스",tag:"매대 진열",description:"개별 파우치 20개를 모아 담는 진열용 박스입니다.",detail:"운송·보관 시 닫힌 형태와, 상단 절취 후 제품을 꺼낼 수 있는 진열 형태를 같은 전개도에서 살펴볼 수 있습니다.",contents:[["딱지 파우치","20개"],["캐릭터","하츄핑 · 다이아나핑 · 이클립스핑"]],hero:"T001",images:[],types:!0,display:!0},{id:"pouch",num:"08",name:"딱지 파우치",tag:"개별 포장",description:"배지 3개를 담는 120 × 130mm 개별 포장입니다.",detail:"앞면에는 캐릭터와 제품 분위기를, 뒷면에는 구성·주의사항·제품 정보를 배치했습니다. 상하 실링과 걸이 구멍까지 함께 확인할 수 있습니다.",contents:[["배지","3개"],["상하 실링","각 15mm"]],hero:"T004",images:[],types:!0,flat:!0}],V0={"display-1":"T001","display-2":"T002","display-3":"T003"};function H0(i){const e=js.filter(t=>t.group===i.id);return`<section class="section package-section" id="${i.id}">${Ui(i.num,i.name,"",i.tag)}<div class="package-layout"><div class="product-overview"><div class="product-visual" data-product-visual>${Rn(i.hero)}</div><div class="product-copy"><p class="lead">${i.description}</p><p>${i.detail}</p><dl class="contents-list">${i.contents.map(([t,n])=>`<div><dt>${t}</dt><dd>${n}</dd></div>`).join("")}</dl><p class="small-note">담당: 패키지 그래픽 · 제품 정보 구성 · OEM 제작 소통</p></div></div><div class="package-interaction"><div class="interaction-heading"><h3>${i.flat?"평면 그래픽에서 입체 목업으로":"전개도에서 입체 패키지로"}</h3><p>${i.display?"접은 뒤 ‘진열형으로 보기’를 눌러 상단을 분리해보세요.":"드래그로 회전하고, 마우스 휠로 확대해보세요."}</p></div>${e.length>1?`<div class="design-selector" role="group" aria-label="${i.name} 디자인 선택">${e.map((t,n)=>`<button type="button" data-design="${t.id}" aria-pressed="${n===0}" aria-controls="${i.id}-viewer">${t.label}</button>`).join("")}</div>`:""}${i.id==="daiso"?'<button class="daiso-source-button" data-daiso-source data-open-asset="A039">PDF 인쇄 원본 확대 ↗</button>':""}<div id="${i.id}-viewer" class="package-viewer-mount" data-package="${i.id}" data-model="${e[0].id}"></div></div></div>${i.images.length?`<details class="work-details"><summary>${i.captions}<span>${i.images.length}개 이미지 +</span></summary>${z0(i.images)}</details>`:""}</section>`}const Qs={product:"제품 이미지",packaging:"패키지·전개도",badge:"배지 제작 시트",usage:"홍보·컨셉 이미지",digital:"상세페이지·SNS",promotion:"광고·프로모션",production:"제작·사양",brand:"브랜드 가이드"},W0=Wi.map(i=>`<article class="archive-card" data-library-group="${i.group}" data-library-title="${Wt(i.title+" "+i.source)}">${i.src?Rn(i.id,{caption:!1}):`<button class="document-button" data-open-asset="${i.id}"><span>SPECIFICATION</span><strong>제품 사양</strong><span>원본 기록 읽기 ↗</span></button>`}<h4>${Wt(i.title)}</h4><p>${Wt(Qs[i.group])}${i.credit?" · AI 연출":""}</p></article>`).join("");document.querySelector("#app").innerHTML=`
${Cc()}<main id="main">${Pc(An,Rn)}
<section class="section" id="badges"><div class="badge-introduction">${Ui("02","골드, 스파클, 샤이닝.<br/>72종의 배지 디자인.","골드·스파클·샤이닝의 3가지 타입, 제품 표기 기준 각 24종의 라인업입니다.","BADGE DESIGN")}<div class="badge-samples" aria-label="타입별 대표 배지 3D 보기">${tc.map(i=>en.find(e=>e.id===i)).map(i=>`<button class="badge-sample-button" data-badge-id="${i.id}" aria-label="하츄핑 ${i.typeLabel} 3D로 크게 보기"><img src="${i.thumbnail}" alt="하츄핑 ${i.typeLabel} 앞면" loading="lazy" width="384" height="384"/><span>하츄핑 · ${i.typeLabel} · 3D로 보기 ↗</span></button>`).join("")}</div></div><p class="badge-intro-copy">같은 타입 안의 반복 캐릭터를 정리해 총 72종으로 모았습니다. 인쇄 여분을 제외한 배지를 누르면 완성선 기준의 앞뒤를 3D로 볼 수 있습니다.</p><div class="badge-catalog-heading"><h3>타입별 배지 컬렉션</h3><p>골드 24종 · 스파클 24종 · 샤이닝 24종</p></div><div class="badge-type-controls segmented" role="group" aria-label="배지 타입 선택">${Es.map((i,e)=>`<button data-badge-type="${i.id}" aria-pressed="${e===0}" aria-controls="badge-catalog">${i.label} <span>24</span></button>`).join("")}</div><p class="badge-type-description" id="badge-type-description">${Es[0].description}</p><div class="badge-catalog" id="badge-catalog" aria-label="골드 배지 24종">${en.map(i=>`<button class="badge-catalog-item" data-badge-id="${i.id}" data-badge-type-item="${i.type}" ${i.type!=="gold"?"hidden":""} aria-label="${i.label}, 3D 목업 열기"><img src="${i.thumbnail}" alt="${i.label} 앞면" loading="lazy" width="384" height="384"/><span>${i.label} <span aria-hidden="true">↗</span></span></button>`).join("")}</div><details class="work-details badge-source-details" id="badge-source-details"><summary>제작 원본 PDF · 앞면과 공통 뒷면<span>인쇄용 원본 보기 +</span></summary><div class="segmented" role="group" aria-label="배지 제작 시트 면 선택"><button data-badge-side="0" aria-pressed="true">앞면 제작 시트</button><button data-badge-side="1" aria-pressed="false">공통 뒷면 시트</button></div><figure class="work-image badge-sheet"><button class="image-button" data-open-asset="B001" aria-label="원본 벡터 배지 제작 시트 확대"><img id="badge-sheet-image" src="${An("B001").pages[0]}" alt="배지 제작 시트 앞면" loading="lazy"/><span class="image-expand" aria-hidden="true">↗</span></button><figcaption id="badge-sheet-caption">제공 PDF · 앞면 제작 시트 · 원본 벡터 불러오는 중</figcaption></figure><p class="small-note">제작 원본은 반복과 인쇄 여분을 포함한 그대로 보존했습니다. 위 컬렉션과 3D 목업은 중복을 정리하고 완성선 기준으로 표시합니다.</p></details></section>
<div class="section-divider"><span>PACKAGE DESIGN</span><p>하나의 제품을, 여러 구성과 판매 방식으로.</p></div>
${G0.map(H0).join("")}
${yc(Rn,Ui)}
${Lc(An,Rn,Ui)}
<section class="section closing" id="closing">${Ui("11","하나의 IP를,<br/>일관된 제품 경험으로.","배지에서 패키지, 보관과 놀이, 판매 콘텐츠까지 연결한 작업입니다.","DELIVERED SCOPE")}<div class="closing-grid">${Rn("A021",{caption:!1})}<div><h3>전유빈 · 디자인 전담</h3><ul class="closing-scope"><li>전반적인 패키지·배지 디자인</li><li>구성품 케이스 컨택</li><li>OEM 제작사 커뮤니케이션</li><li>상세페이지·SNS·프로모션 비주얼</li><li>ChatGPT 이미지 생성·Photoshop 후보정</li></ul><div class="closing-credit"><p>선행 기획: 입사 전 대표·실장</p><p>원작 IP: SAMG Entertainment</p><p>© SAMG. All rights reserved.</p></div></div></div></section>
<section class="section archive" id="archive"><details id="asset-library"><summary><div><p class="eyebrow">WORK ARCHIVE</p><h2>전체 작업 자료</h2><p>대표 작업 외의 구도·버전과 제공 제작 자료까지 모았습니다.</p></div><span>${Wi.length}개 자료 펼치기 +</span></summary><div class="archive-tools"><label>분류<select id="library-filter"><option value="all">전체</option>${Object.entries(Qs).map(([i,e])=>`<option value="${i}">${e}</option>`).join("")}</select></label><label class="archive-search">검색<input id="library-search" type="search" placeholder="제품명 또는 작업명"/></label><span id="library-count" aria-live="polite">${Wi.length}개 자료</span></div><div class="archive-grid">${W0}</div><p id="library-empty" hidden>검색 결과가 없습니다. 다른 단어로 찾아보세요.</p><p class="small-note">제공된 제품·제작 자료와 추가 대표 이미지, 최신 다이소 PDF를 연결했습니다. 후기·사용 장면은 AI 연출 작업입니다.</p></details></section>
</main><footer class="footer"><a href="#cover">YUBIN JEON</a><p>티니핑 미스터리 뱃지 · 디자인 포트폴리오<br/>원작 IP © SAMG. All rights reserved.</p><a href="#cover">처음으로 ↑</a></footer>
<dialog id="asset-dialog" aria-labelledby="asset-dialog-title"><div class="dialog-toolbar"><div><span id="asset-dialog-category"></span><h2 id="asset-dialog-title"></h2></div><button id="asset-dialog-close" aria-label="이미지 확대 창 닫기">닫기 ×</button></div><div class="dialog-navigation"><button id="asset-prev" aria-label="같은 분류의 이전 자료">← 이전</button><span id="asset-dialog-credit"></span><button id="asset-next" aria-label="같은 분류의 다음 자료">다음 →</button></div><div class="dialog-content" id="asset-dialog-content"></div><p class="dialog-source" id="asset-dialog-source"></p></dialog>
<dialog id="badge-dialog" aria-labelledby="badge-dialog-title"><div class="dialog-toolbar"><div><span>BADGE · 3D MOCKUP</span><h2 id="badge-dialog-title">배지 앞뒤 3D 목업</h2></div><button id="badge-dialog-close" aria-label="배지 3D 목업 닫기">닫기 ×</button></div><div id="badge-viewer"><div class="badge-model-top"><strong class="badge-selected-title"></strong><span>완성 지름 54 mm · 두께 2 mm</span></div><div class="badge-3d-stage" tabindex="0" role="group" aria-label="배지 3D 모델. 드래그 또는 방향키로 회전하고 휠로 확대할 수 있습니다."></div><p class="badge-3d-status" aria-live="polite">인쇄면을 불러오는 중</p><div class="badge-model-controls"><div role="group" aria-label="배지 시점"><button data-badge-view="front">앞면</button><button data-badge-view="back">뒷면</button><button data-badge-view="edge">옆면·두께</button><button data-badge-view="reset">초기 시점</button></div><div role="group" aria-label="배지 확대 배율"><button data-badge-zoom="out" aria-label="배지 축소">−</button><span class="badge-zoom-value">100%</span><button data-badge-zoom="in" aria-label="배지 확대">+</button></div></div><div class="badge-model-navigation"><button data-badge-next="-1">← 이전 배지</button><span>인쇄 여분 3mm 제외 · 앞·뒷면 완성선 기준</span><button data-badge-next="1">다음 배지 →</button></div></div></dialog>`;Uc(An);Sc();const ai=document.querySelector(".menu-toggle");function ic(){ai.setAttribute("aria-expanded","false"),ai.textContent="메뉴 열기",document.querySelector(".header").classList.remove("menu-open")}ai.addEventListener("click",()=>{const i=ai.getAttribute("aria-expanded")!=="true";ai.setAttribute("aria-expanded",String(i)),ai.textContent=i?"메뉴 닫기":"메뉴 열기",document.querySelector(".header").classList.toggle("menu-open",i)});document.querySelectorAll("nav a").forEach(i=>i.addEventListener("click",ic));document.addEventListener("keydown",i=>{i.key==="Escape"&&ic()});document.querySelectorAll(".package-viewer-mount").forEach(i=>ec(i,js.filter(e=>e.id===i.dataset.model)));document.querySelectorAll(".design-selector").forEach(i=>i.addEventListener("click",e=>{const t=e.target.closest("button[data-design]");if(!t||t.getAttribute("aria-pressed")==="true")return;const n=i.closest(".package-section"),r=n.querySelector(".package-viewer-mount"),o=r.viewer.getState();r.viewer.destroy();const s=document.createElement("div");s.id=r.id,s.className=r.className,s.dataset.package=r.dataset.package,s.dataset.model=t.dataset.design,r.replaceWith(s),ec(s,js.filter(l=>l.id===t.dataset.design),o);const a=n.querySelector("[data-daiso-source]");a&&(a.dataset.openAsset={"daiso-1":"A039","daiso-2":"A040","daiso-3":"A041"}[t.dataset.design]),i.querySelectorAll("button").forEach(l=>l.setAttribute("aria-pressed",String(l===t)));const c=V0[t.dataset.design];c&&(n.querySelector("[data-product-visual]").innerHTML=Rn(c))}));let cl=0;async function rc(i){const e=++cl;document.querySelectorAll("[data-badge-side]").forEach(t=>t.setAttribute("aria-pressed",String(Number(t.dataset.badgeSide)===i)));try{const t=await Ys("B001",i);if(e!==cl)return;const n=document.querySelector("#badge-sheet-image");n.src=t.url,n.dataset.vector="true",n.alt=i?"배지 제작 시트 공통 뒷면":"배지 제작 시트 앞면",document.querySelector("#badge-sheet-caption").textContent=`제공 PDF · ${i?"공통 뒷면":"앞면"} 제작 시트 · 원본 벡터`}catch{document.querySelector("#badge-sheet-caption").textContent="원본 벡터를 불러오지 못했습니다. 다시 선택해주세요."}}document.querySelectorAll("[data-badge-side]").forEach(i=>i.addEventListener("click",()=>rc(Number(i.dataset.badgeSide))));const oc=new IntersectionObserver(i=>{i.some(e=>e.isIntersecting)&&(rc(0),oc.disconnect())},{rootMargin:"400px"});oc.observe(document.querySelector("#badge-sheet-image"));function sc(i){const e=Es.find(t=>t.id===i);if(e){document.querySelectorAll("[data-badge-type]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.badgeType===i))),document.querySelectorAll(".badge-catalog-item").forEach(t=>t.hidden=t.dataset.badgeTypeItem!==i),document.querySelector("#badge-type-description").textContent=e.description,document.querySelector("#badge-catalog").setAttribute("aria-label",`${e.label} 배지 24종`);for(const t of en.filter(n=>n.type===i).slice(0,4))Js(t).catch(()=>{})}}document.querySelectorAll("[data-badge-type]").forEach(i=>i.onclick=()=>sc(i.dataset.badgeType));const Ir=document.querySelector("#badge-dialog");let yr=null,ac=null,Nr=en[0].id;function lc(){return yr||(yr=k0(document.querySelector("#badge-viewer"),i=>{Nr=i.id}),yr.prepare()),yr}function cc(i){const e=en.find(r=>r.id===i);if(!e)return;Nr=i,sc(e.type);const t=!Ir.open;t&&(ac=document.activeElement,Ir.showModal(),document.body.classList.add("dialog-open"));const n=document.querySelector(`[data-badge-id="${i}"] img`);lc().select(i,t,n)}document.addEventListener("click",i=>{const e=i.target.closest("[data-badge-id]");e&&cc(e.dataset.badgeId)});document.querySelectorAll("[data-badge-next]").forEach(i=>i.onclick=()=>{const e=en.find(r=>r.id===Nr),t=en.filter(r=>r.type===e.type),n=t.findIndex(r=>r.id===Nr);cc(t[(n+Number(i.dataset.badgeNext)+t.length)%t.length].id)});document.querySelector("#badge-dialog-close").onclick=()=>Ir.close();Ir.addEventListener("close",()=>{document.body.classList.remove("dialog-open"),ac?.focus()});function X0(i){const e=i.target.closest("[data-badge-id]");e&&Js(e.dataset.badgeId).catch(()=>{})}for(const i of["pointerover","pointerdown","focusin"])document.addEventListener(i,X0,{passive:!0});nc().catch(()=>{});const uc=new IntersectionObserver(i=>{if(i.some(e=>e.isIntersecting)){lc();const e=[...tc,...en.filter(n=>n.type==="gold").slice(0,6).map(n=>n.id)];let t=Promise.resolve();for(const n of e)t=t.then(()=>Js(n)).catch(()=>{});uc.disconnect()}},{rootMargin:"700px"});uc.observe(document.querySelector("#badges"));const q0={intro:{ids:["A030","A037","A035","A036"],description:"제품 연출 · 싱글팩 소개 · 제품 활용 · 다이어리 꾸미기."},event:{ids:["A031","A032","A033","A034"],description:"출시 이벤트 표지부터 배지·케이스 소개와 참여 안내까지."},reviews:{ids:["A025","A026","A027","A028"],description:"후기 콘셉트 · ChatGPT 생성 / Photoshop 후보정 · 실제 고객 후기가 아닙니다."}};let As="intro",Ci=0;function Gr(i=0){const e=q0[As];Ci=(Ci+i+e.ids.length)%e.ids.length;const t=An(e.ids[Ci]);document.querySelector("#social-image").src=t.src,document.querySelector("#social-image").alt=t.title,document.querySelector("#social-image-open").dataset.openAsset=t.id,document.querySelector("#social-title").textContent=t.title,document.querySelector("#social-credit").textContent=t.credit?"AI 연출 · ChatGPT 생성 / Photoshop 후보정":As==="event"?"출시 이벤트 안내 디자인":"제품 소개·활용 콘텐츠",document.querySelector("#slide-count").textContent=`${Ci+1} / ${e.ids.length}`,document.querySelector("#social-description").textContent=e.description}document.querySelectorAll("[data-social-group]").forEach(i=>i.addEventListener("click",()=>{As=i.dataset.socialGroup,Ci=0,Gr(),document.querySelectorAll("[data-social-group]").forEach(e=>e.setAttribute("aria-pressed",String(e===i)))}));document.querySelector("#slide-prev").onclick=()=>Gr(-1);document.querySelector("#slide-next").onclick=()=>Gr(1);Gr();const Jt=document.querySelector("#asset-dialog");let hc=null,dc=null,Ur=0;async function fc(i){const e=An(i);if(!e)return;const t=++Ur;hc=i,document.querySelector("#asset-dialog-title").textContent=e.title,document.querySelector("#asset-dialog-category").textContent=Qs[e.group],document.querySelector("#asset-dialog-credit").textContent=e.credit?"AI 연출 · ChatGPT 생성 / Adobe Photoshop 후보정":"",document.querySelector("#asset-dialog-source").innerHTML=`제공 자료: ${Wt(e.source)}${e.original?` · <a href="${Wt(e.original)}" target="_blank" rel="noopener">PDF 원본 열기 ↗</a>`:""}`;const n=document.querySelector("#asset-dialog-content");if(n.innerHTML=e.kind==="text"?`<div class="source-text"><p>제공된 원본 사양 기록입니다. 단위와 중량 등이 모호한 항목은 최종 확정 사양으로 인용하지 않았습니다.</p><pre>${Wt(e.text)}</pre></div>`:Lr[i]?'<p class="vector-loading" role="status">PDF의 원본 벡터를 불러오는 중…</p>':(e.pages.length?e.pages:[e.src]).map((r,o)=>`<figure><img src="${r}" alt="${Wt(e.title)}${e.pages.length?" · "+(o+1)+"페이지":""}"/>${e.pages.length?`<figcaption>${o+1} / ${e.pages.length}</figcaption>`:""}</figure>`).join(""),n.scrollTop=0,Jt.open||(dc=document.activeElement,Jt.showModal(),document.body.classList.add("dialog-open")),Lr[i])try{const r=await Promise.all(Lr[i].pages.map((s,a)=>Ys(i,a)));if(t!==Ur||!Jt.open)return;n.innerHTML=`<div class="vector-zoom-controls"><span>PDF 원본 벡터 확대</span><button data-vector-zoom="out" aria-label="PDF 축소">−</button><output id="vector-zoom-value">100%</output><button data-vector-zoom="in" aria-label="PDF 확대">+</button><button data-vector-zoom="reset">화면에 맞춤</button></div><div class="vector-pages">${r.map((s,a)=>`<figure><img src="${s.url}" data-vector-source="${i}" alt="${Wt(e.title)} · ${a+1}페이지"/><figcaption>${a+1} / ${r.length}</figcaption></figure>`).join("")}</div>`;let o=1;n.querySelectorAll("[data-vector-zoom]").forEach(s=>s.onclick=()=>{o=s.dataset.vectorZoom==="reset"?1:Math.max(.5,Math.min(4,o*(s.dataset.vectorZoom==="in"?1.5:1/1.5))),n.querySelector(".vector-pages").style.width=o*100+"%",n.querySelector("#vector-zoom-value").textContent=Math.round(o*100)+"%"})}catch{t===Ur&&Jt.open&&(n.innerHTML='<p role="alert">원본 벡터를 불러오지 못했습니다. 창을 닫고 다시 열어주세요.</p>')}}function pc(){Jt.close()}document.addEventListener("click",i=>{const e=i.target.closest("[data-open-asset]");e&&fc(e.dataset.openAsset)});document.querySelector("#asset-dialog-close").onclick=pc;Jt.addEventListener("close",()=>{Ur++,document.body.classList.remove("dialog-open"),dc?.focus()});Jt.addEventListener("click",i=>{if(i.target===Jt){const e=Jt.getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&pc()}});function Fr(i){const e=An(hc),t=Wi.filter(r=>r.group===e.group),n=t.findIndex(r=>r.id===e.id);fc(t[(n+i+t.length)%t.length].id)}document.querySelector("#asset-prev").onclick=()=>Fr(-1);document.querySelector("#asset-next").onclick=()=>Fr(1);Jt.addEventListener("keydown",i=>{i.key==="ArrowRight"&&(i.preventDefault(),Fr(1)),i.key==="ArrowLeft"&&(i.preventDefault(),Fr(-1))});function mc(){const i=document.querySelector("#library-filter").value,e=document.querySelector("#library-search").value.trim().toLocaleLowerCase();let t=0;document.querySelectorAll(".archive-card").forEach(n=>{const r=(i==="all"||n.dataset.libraryGroup===i)&&n.dataset.libraryTitle.toLocaleLowerCase().includes(e);n.hidden=!r,r&&t++}),document.querySelector("#library-count").textContent=t+"개 자료",document.querySelector("#library-empty").hidden=t>0}document.querySelector("#library-filter").onchange=mc;document.querySelector("#library-search").oninput=mc;
