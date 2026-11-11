import"./modulepreload-polyfill-B5Qt9EMX.js";const Ua=["A079","A078","A080","A061","A062","A064","A071","A076"],yc=[...Ua,...Array.from({length:24},(i,e)=>"A"+String(e+57).padStart(3,"0")).filter(i=>!Ua.includes(i))];function Sc(i,e){return`<section class="section concept-section" id="experience">${e("09","홍보·컨셉 이미지.","ChatGPT로 100% 생성하고 Adobe Photoshop으로 후보정한 컨셉 이미지입니다.","PROMOTION & CONCEPT")}<div class="concept-gallery-meta"><span>24 IMAGES</span><span>클릭하여 확대 ↗</span></div><div class="concept-image-grid" id="concept-image-grid">${yc.map((t,n)=>`<div class="concept-gallery-item" ${n>=Ua.length?"data-concept-extra hidden":""}>${i(t,{caption:!1,creditTag:!1})}</div>`).join("")}</div><button class="concept-gallery-toggle" id="concept-gallery-toggle" aria-expanded="false" aria-controls="concept-image-grid">전체 이미지 24개 보기 +</button></section>`}function Rc(){const i=document.querySelector("#concept-gallery-toggle");i.onclick=()=>{const e=i.getAttribute("aria-expanded")!=="true";document.querySelectorAll("[data-concept-extra]").forEach(t=>t.hidden=!e),i.setAttribute("aria-expanded",String(e)),i.textContent=e?"이미지 접기 −":"전체 이미지 24개 보기 +",e||i.scrollIntoView({block:"nearest"})}}const Ec={back:'<path d="m14 5-7 7 7 7"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',bag:'<path d="M5 7h14l1 14H4L5 7Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',comment:'<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8v.5Z"/>',send:'<path d="m22 2-7 20-4-9L2 9l20-7Z"/><path d="M22 2 11 13"/>',bookmark:'<path d="M6 3h12v19l-6-4-6 4V3Z"/>',more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',check:'<path d="m5 12 4 4L19 6"/>',chevron:'<path d="m9 5 7 7-7 7"/>'},cn=i=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Ec[i]||""}</svg>`,Ur=i=>i.toLocaleString("ko-KR")+"원",Mn={single:{name:"싱글팩",price:5e3,image:"A021",characters:["하츄핑","다이아나핑","이클립스핑"],contents:"랜덤 배지 3개 + 크리스탈 케이스 1개"},full:{name:"풀박스",price:18e3,image:"A084",characters:["싱글팩 3종 세트"],contents:"싱글팩 3개 · 배지 9개 + 케이스 3개"},limited:{name:"리미티드 에디션",price:33e3,image:"A009",characters:["다이아나핑","이클립스핑"],contents:"싱글팩 5개 · 배지 15개 + 케이스 5개"}},Ac=()=>'<div class="phone-status" aria-hidden="true"><span>9:41</span><div><svg viewBox="0 0 18 12" width="18" height="12"><path d="M1 8h3v4H1zm4-2h3v6H5zm4-3h3v9H9zm4-3h3v12h-3z" fill="currentColor"/></svg><svg viewBox="0 0 18 14" width="18" height="14"><path d="M2 5a11 11 0 0 1 14 0M5 8a6 6 0 0 1 8 0M8 11a2 2 0 0 1 2 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><svg viewBox="0 0 29 14" width="27" height="13"><rect x="1" y="1" width="23" height="12" rx="3" fill="none" stroke="currentColor" opacity=".4"/><rect x="3" y="3" width="19" height="8" rx="1.5" fill="currentColor"/><path d="M26 5v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div></div>';function rs(i,e){return`<div class="phone-stage" aria-label="${e}"><div class="device device-iphone-14-pro device-black"><div class="device-frame"><div class="device-screen">${Ac()}${i}<div class="phone-home-indicator" aria-hidden="true"></div></div></div><div class="device-stripe" aria-hidden="true"></div><div class="device-header" aria-hidden="true"></div><div class="device-sensors" aria-hidden="true"></div><div class="device-btns" aria-hidden="true"></div><div class="device-power" aria-hidden="true"></div><div class="device-home" aria-hidden="true"></div></div></div>`}function Tc(i){return`<div class="shop-app"><div class="detail-screen shop-scroll" tabindex="0" role="region" aria-label="상품 판매 페이지, 휴대폰 안에서 세로 스크롤"><header class="shop-header"><span class="shop-brand">TEENIEPING<span>MYSTERY BADGE</span></span><span class="shop-official">공식 라이선스 제품</span><button class="phone-icon-button" data-shop-cart aria-label="장바구니 열기">${cn("bag")}<span class="shop-cart-count" hidden>0</span></button></header><div class="shop-product-gallery"><button class="shop-image-button" id="shop-image-open" data-open-asset="A021" aria-label="싱글팩 상품 이미지 크게 보기"><img id="shop-product-image" src="${i("A021").src}" width="1000" height="1000" alt="싱글팩 상품 대표 이미지" loading="lazy"/></button><div class="shop-gallery-options" role="group" aria-label="상품 구성 선택">${Object.entries(Mn).map(([e,t],n)=>`<button data-shop-group="${e}" aria-pressed="${n===0}">${t.name}</button>`).join("")}</div></div><div class="shop-product-info"><p class="shop-category">캐릭터 완구 · 수집형 자석 배지</p><h3 id="shop-product-title">프린세스 캐치! 티니핑<br/>미스터리 뱃지 싱글팩</h3><p class="shop-price" id="shop-price">5,000<span>원</span></p><p class="shop-contents" id="shop-contents">${Mn.single.contents}</p><dl class="shop-facts"><div><dt>브랜드</dt><dd>프린세스 캐치! 티니핑</dd></div><div><dt>배지 타입</dt><dd>골드 · 스파클 · 샤이닝</dd></div><div><dt>제품 구성</dt><dd>옵션에서 캐릭터와 구성 선택</dd></div></dl><button class="shop-inline-options" data-shop-open="options">캐릭터 · 수량 선택 ${cn("chevron")}</button></div><nav class="shop-detail-tabs" aria-label="판매 페이지 정보 이동"><button data-shop-section="shop-detail" aria-pressed="true">상품상세</button><button data-shop-section="shop-composition" aria-pressed="false">구성 안내</button><button data-shop-section="shop-delivery" aria-pressed="false">구매 안내</button></nav><section id="shop-detail" class="shop-detail"><img src="${i("A029").src}" alt="티니핑 미스터리 뱃지 상세페이지 전체" loading="lazy" width="${i("A029").width}" height="${i("A029").height}"/></section><section class="shop-information" id="shop-composition"><h4>상품 구성 안내</h4>${Object.values(Mn).map(e=>`<div><strong>${e.name}</strong><p>${e.contents}</p><span>${Ur(e.price)}</span></div>`).join("")}</section><section class="shop-information" id="shop-delivery"><h4>구매 전 확인해주세요</h4><p>배지는 랜덤 구성입니다. 패키지 캐릭터와 배지 구성은 다를 수 있습니다.</p><p>배송·교환·반품 조건은 실제 판매처 안내를 확인해주세요.</p></section><p class="shop-copyright">© SAMG. All rights reserved.</p></div><div class="shop-purchase-bar"><button class="phone-icon-button shop-wish" data-phone-like aria-label="상품 찜하기" aria-pressed="false">${cn("heart")}</button><button data-shop-open="cart">장바구니</button><button class="shop-buy" data-shop-open="buy">구매하기</button></div><div class="shop-toast" role="status" aria-live="polite" hidden></div><div class="shop-sheet-layer" hidden><section class="shop-sheet" role="dialog" aria-labelledby="shop-sheet-title"><header><h4 id="shop-sheet-title">상품 옵션 선택</h4><button class="phone-icon-button" data-shop-close aria-label="옵션 선택 닫기">${cn("close")}</button></header><label for="shop-pack">상품 구성</label><select id="shop-pack">${Object.entries(Mn).map(([e,t])=>`<option value="${e}">${t.name} · ${Ur(t.price)}</option>`).join("")}</select><label for="shop-character">캐릭터</label><select id="shop-character">${Mn.single.characters.map(e=>`<option>${e}</option>`).join("")}</select><div class="shop-selection"><div><strong id="shop-selected-name">싱글팩 · 하츄핑</strong><span id="shop-selected-unit">5,000원</span></div><div class="shop-quantity"><button data-shop-quantity="-1" aria-label="수량 줄이기">−</button><output id="shop-quantity" aria-live="polite">1</output><button data-shop-quantity="1" aria-label="수량 늘리기">+</button></div></div><div class="shop-total"><span>총 상품금액</span><strong id="shop-total">5,000원</strong></div><p class="shop-demo-note">포트폴리오 시연 화면 · 실제 주문·결제는 진행되지 않습니다.</p><button class="shop-confirm" id="shop-confirm">선택 완료</button></section></div></div>`}function Lc(i){return`<div class="social-app"><header class="social-app-header"><span>게시물</span><span>TEENIEPING DESIGN</span></header><div class="social-feed" tabindex="0" role="region" aria-label="SNS 게시물 미리보기, 휴대폰 안에서 스크롤"><div class="social-post-author"><div class="social-avatar"><img src="${i("A003").src}" alt=""/></div><div><strong>티니핑 미스터리 뱃지</strong><span>제품 디자인 · 콘텐츠 포트폴리오</span></div><span class="social-more" aria-hidden="true">${cn("more")}</span></div><button class="social-image-button" id="social-image-open" data-open-asset="A030" aria-label="현재 인스타 게시물 크게 보기"><img id="social-image" src="${i("A030").src}" alt="제품 연출 인스타그램 게시물" loading="lazy"/></button><div class="social-post-actions"><button class="phone-icon-button" data-phone-like aria-pressed="false" aria-label="게시물 좋아요">${cn("heart")}</button><span aria-hidden="true">${cn("comment")}</span><span aria-hidden="true">${cn("send")}</span><button class="phone-icon-button social-save" data-phone-like aria-pressed="false" aria-label="게시물 저장">${cn("bookmark")}</button></div><div class="social-post-caption"><strong id="social-title">제품 연출 인스타그램 게시물</strong><span id="social-credit">ChatGPT 생성 · Photoshop 후보정</span><p>모으고, 붙이고, 간직하는 티니핑 미스터리 뱃지.</p><span class="social-hashtags">#티니핑 #미스터리뱃지 #패키지디자인</span></div></div><div class="social-bottom-label">DESIGN CONTENT / PORTFOLIO</div></div>`}function Uc(i,e,t){return`<section class="section" id="digital">${t("10","판매 화면과<br/>SNS 콘텐츠.","판매 페이지의 상품 선택부터 제품 상세정보, SNS 콘텐츠까지 모바일 화면으로 구성했습니다.","DIGITAL COMMUNICATION")}<div class="digital-workspaces"><article class="digital-row"><div class="digital-copy"><p class="eyebrow">01 / MOBILE COMMERCE</p><h3>상품을 고르고,<br/>자세히 살펴보는 판매 화면.</h3><p>대표 상품 이미지, 구성별 가격, 캐릭터 옵션과 수량 선택을 판매 화면으로 구현했습니다. 아래로 스크롤하면 제작한 상세페이지 전체가 이어집니다.</p><ul class="plain-list"><li>싱글팩 5,000원 · 풀박스 18,000원 · 리미티드 33,000원</li><li>구성·캐릭터·수량 선택과 금액 합산</li><li>상품상세·구성 안내·구매 안내</li></ul><button class="outline-button" data-open-asset="A029">상세페이지 원본 전체 확대 ↗</button><p class="small-note">포트폴리오용으로 재구성한 판매 UI입니다. 실제 주문·결제는 진행되지 않습니다. 상세페이지의 후기·사용 장면은 ChatGPT 생성·Photoshop 후보정 이미지입니다.</p></div><div class="phone-position">${rs(Tc(i),"상품 판매 페이지 휴대폰 목업")}<p class="caption">휴대폰 안에서 스크롤 · 상품 구성과 옵션을 선택해보세요.</p></div></article><article class="digital-row social-row"><div class="digital-copy"><p class="eyebrow">02 / INSTAGRAM</p><h3>인스타그램 게시물.</h3><p>제품 홍보와 활용을 위한 인스타그램 콘텐츠입니다.</p><div class="social-groups" role="group" aria-label="SNS 콘텐츠 묶음"><button data-social-group="intro" aria-pressed="true">제품·활용</button><button data-social-group="event" aria-pressed="false">출시 이벤트</button><button data-social-group="reviews" aria-pressed="false">후기 콘셉트</button></div><p id="social-description" class="small-note">제품 연출 · 싱글팩 소개 · 제품 활용 · 다이어리 꾸미기.</p></div><div class="phone-position">${rs(Lc(i),"SNS 콘텐츠 휴대폰 목업")}<div class="carousel-controls"><button id="slide-prev" aria-label="이전 SNS 카드">←</button><span id="slide-count" aria-live="polite">1 / 4</span><button id="slide-next" aria-label="다음 SNS 카드">→</button></div></div></article></div><div class="promotion-heading"><p class="eyebrow">03 / POSTER & PROMOTION</p><h3>제품 홍보와 이벤트 비주얼.</h3></div><div class="image-grid poster-grid">${e("A038")}${e("A048")}</div></section>`}function Cc(i){document.querySelectorAll(".phone-stage").forEach(R=>{const S=R.closest(".phone-position"),_=()=>R.style.setProperty("--device-scale",String(Math.min(1.075,Math.max(.5,(S.clientWidth-12)/428))));new ResizeObserver(_).observe(S),_()}),document.querySelectorAll("[data-phone-like]").forEach(R=>R.onclick=()=>R.setAttribute("aria-pressed",String(R.getAttribute("aria-pressed")!=="true")));const e=document.querySelector(".shop-app"),t=e.querySelector(".shop-scroll"),n=e.querySelector(".shop-sheet-layer"),r=e.querySelector("#shop-pack"),a=e.querySelector("#shop-character");let o="single",s=1,c="options",l=0,u=null,d;const h=R=>e.querySelector(R);function f(R){clearTimeout(d),h(".shop-toast").textContent=R,h(".shop-toast").hidden=!1,d=setTimeout(()=>h(".shop-toast").hidden=!0,3500)}function v(){const R=Mn[o];h("#shop-product-image").src=i(R.image).src,h("#shop-product-image").alt=R.name+" 상품 대표 이미지",h("#shop-image-open").dataset.openAsset=R.image,h("#shop-image-open").setAttribute("aria-label",R.name+" 상품 이미지 크게 보기"),h("#shop-product-title").innerHTML="프린세스 캐치! 티니핑<br/>미스터리 뱃지 "+R.name,h("#shop-price").innerHTML=R.price.toLocaleString("ko-KR")+"<span>원</span>",h("#shop-contents").textContent=R.contents,r.value=o,e.querySelectorAll("[data-shop-group]").forEach(S=>S.setAttribute("aria-pressed",String(S.dataset.shopGroup===o))),h("#shop-selected-name").textContent=R.name+" · "+a.value,h("#shop-selected-unit").textContent=Ur(R.price),h("#shop-quantity").textContent=s,h("#shop-total").textContent=Ur(R.price*s),h('[data-shop-quantity="-1"]').disabled=s<=1,h('[data-shop-quantity="1"]').disabled=s>=99}function b(R){o=R,a.innerHTML=Mn[o].characters.map(S=>`<option>${S}</option>`).join(""),s=1,v()}function m(){n.hidden=!0,t.inert=!1,h(".shop-purchase-bar").inert=!1,u?.focus({preventScroll:!0})}function p(R){c=R,u=document.activeElement,n.hidden=!1,t.inert=!0,h(".shop-purchase-bar").inert=!0,h("#shop-confirm").textContent=c==="cart"?"장바구니 담기":c==="buy"?"선택 상품 확인":"선택 완료",v(),r.focus({preventScroll:!0})}e.querySelectorAll("[data-shop-group]").forEach(R=>R.onclick=()=>b(R.dataset.shopGroup)),r.onchange=()=>b(r.value),a.onchange=v,e.querySelectorAll("[data-shop-quantity]").forEach(R=>R.onclick=()=>{s=Math.max(1,Math.min(99,s+Number(R.dataset.shopQuantity))),v()}),e.querySelectorAll("[data-shop-open]").forEach(R=>R.onclick=()=>p(R.dataset.shopOpen)),h("[data-shop-close]").onclick=m,n.onclick=R=>{R.target===n&&m()},e.addEventListener("keydown",R=>{R.key==="Escape"&&!n.hidden&&(R.preventDefault(),R.stopPropagation(),m())}),h("#shop-confirm").onclick=()=>{c==="cart"?(l+=s,h(".shop-cart-count").hidden=!1,h(".shop-cart-count").textContent=l,f(Mn[o].name+" "+s+"개를 장바구니에 담았습니다.")):f(c==="buy"?"선택 상품을 확인했습니다. 실제 주문·결제는 진행되지 않습니다.":"상품 옵션을 선택했습니다."),m()},h("[data-shop-cart]").onclick=()=>f(l?"장바구니에 "+l+"개의 상품이 있습니다.":"장바구니가 비어 있습니다."),e.querySelectorAll("[data-shop-section]").forEach(R=>R.onclick=()=>{const S=document.getElementById(R.dataset.shopSection);t.scrollTo({top:(S.getBoundingClientRect().top-t.getBoundingClientRect().top)/(Number(e.closest(".phone-stage").style.getPropertyValue("--device-scale"))||1)+t.scrollTop-104,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),e.querySelectorAll("[data-shop-section]").forEach(_=>_.setAttribute("aria-pressed",String(_===R)))}),v()}function Pc(){return'<header class="header"><a class="site-name" href="#cover"><span class="site-monogram" aria-hidden="true">yj.</span><span class="site-identity">전유빈<span>PRODUCT & PACKAGE DESIGNER</span></span></a><button class="menu-toggle" aria-expanded="false" aria-controls="main-nav">메뉴 열기</button><nav id="main-nav" aria-label="섹션 이동"><a href="#overview">프로젝트</a><a href="#badges">배지 디자인</a><a href="#single">패키지</a><a href="#experience">홍보·컨셉</a><a href="#digital">디지털 콘텐츠</a><a href="#about">소개</a></nav></header>'}function Dc(i,e){return`
<section class="section cover" id="cover">
 <div class="cover-topline"><p>전유빈 · 제품과 패키지를 디자인합니다.</p><span>SELECTED PROJECT / 2026</span></div>
 <div class="cover-title-block"><div class="cover-project-label"><p class="eyebrow">TEENIEPING / PRODUCT & PACKAGE DESIGN</p><p class="project-license">SAMG Entertainment 공식 라이선스 제품</p></div><h1 lang="en" aria-label="Teenieping Mystery Badge"><span class="hero-line hero-italic"><span>Mystery</span></span><span class="hero-line hero-last"><span>Badge<span class="cover-period">.</span></span></span></h1></div>
 <div class="cover-spread">
  <div class="cover-visual">${e("A002",{caption:!1,eager:!0})}<div class="cover-caption"><span>제품·패키지 전체 라인업</span><span>01 — TEENIEPING</span></div></div>
  <aside class="cover-aside" aria-label="프로젝트와 담당 소개">
   <div class="cover-secondary">${e("T004",{caption:!1})}<p>PACKAGE / POUCH / BADGE</p></div>
   <div class="cover-notes"><p class="project-english">티니핑 미스터리 뱃지</p><p class="cover-subtitle">패키지·배지 디자인부터 케이스 컨택,<br/>OEM 제작 소통까지 전담했습니다.</p><div class="cover-credit"><span>DESIGNED BY</span><p>전유빈 <small>사내 유일 디자이너</small></p></div><div class="cover-actions"><a class="project-link" href="#overview">프로젝트 살펴보기 <span aria-hidden="true">↘</span></a><a class="quiet-link" href="#single">전개도 · 3D 목업 ↗</a></div></div>
  </aside>
 </div>
 <div class="cover-bottomline"><span>PACKAGE · BADGE · DIGITAL CONTENT</span><a href="#badges">컬렉션 살펴보기 <span aria-hidden="true">↘</span></a></div>
</section>
<section class="section project-overview" id="overview">
 <div class="overview-intro"><p class="eyebrow">01 — PROJECT & MY ROLE</p><h2>디자인부터 제작 소통까지,<br/>한 사람이 연결한 작업.</h2><p>랜덤 배지를 수집하고, 자석으로 놀고,<br class="desktop-break"/> 크리스탈 케이스에 보관·전시하는 완구입니다.</p><p class="planning-credit">대표와 실장이 입사 전에 기획한 제품으로,<br/>신입 입사 후 수습기간을 마치고 제작에 참여했습니다.</p></div>
 <div class="role-list"><article><span>01</span><div><h3>패키지·배지 디자인 전담</h3><p>전체 패키지 그래픽과 제품에 들어가는 배지 디자인.</p></div></article><article><span>02</span><div><h3>케이스 공급처 컨택</h3><p>구성품 케이스의 공급처 컨택과 제품 구성 실무.</p></div></article><article><span>03</span><div><h3>OEM 제작사 소통</h3><p>디자인을 인쇄·생산으로 연결하는 제작 커뮤니케이션.</p></div></article><article><span>04</span><div><h3>제품 비주얼·판매 콘텐츠</h3><p>상세페이지, SNS, 프로모션과 AI 연출 이미지 제작.</p></div></article></div>
 <div class="project-facts"><div><span>PACKAGE TYPES</span><p><strong>6</strong>개 유형</p></div><div><span>PACKAGE DESIGNS</span><p><strong>15</strong>개 디자인</p></div><div><span>BADGE COLLECTION</span><p><strong>72</strong>종 라인업</p></div><div class="ip-credit"><span>PROJECT CREDIT</span><p>선행 기획 · 대표·실장<br/>디자인·제작 소통 · 전유빈<br/>원작 IP · SAMG Entertainment</p></div></div>
</section>`}function Ic(i){return`<section class="section about-section" id="about" aria-labelledby="about-name">
    ${i("11","관찰하고 정리하는<br/>디자이너 전유빈입니다.","","ABOUT ME")}
    <div class="about-layout">
      <div class="about-intro">
        <h3 id="about-name">전유빈 <span>JEON YUBIN</span></h3>
        <p class="about-role">제품 · 패키지 디자이너</p>
        <p>제품의 특징을 관찰하고, 필요한 정보를 읽기 쉽게 정리합니다. 패키지와 배지 디자인부터 판매 콘텐츠 제작, OEM 제작 소통까지 맡아왔습니다.</p>
        <p>화면에서 보이는 디자인뿐 아니라, 실제 제품으로 만들어지는 과정의 세부 사항도 확인하며 작업합니다.</p>
      </div>
      <div class="about-details">
        <div class="about-block">
          <h3>경력 <span>EXPERIENCE</span></h3>
          <ol class="about-career">
            <li><p class="about-date">2025.10 — 2026.10</p><h4>에스제이 이노베이션</h4><p class="about-position">제품·패키지 디자인 · 사내 유일 디자이너</p><p>티니핑 미스터리 뱃지의 패키지·배지 디자인, 구성품 케이스 컨택과 OEM 제작사 소통을 전담했습니다. 상세페이지와 SNS 콘텐츠, 홍보 비주얼도 제작했습니다.</p></li>
            <li><p class="about-date">2022 — 2024</p><h4>후지필름 사진관</h4><p class="about-position">촬영 · 사진 편집</p></li>
          </ol>
        </div>
        <div class="about-facts">
          <div class="about-block"><h3>학력 <span>EDUCATION</span></h3><p class="about-date">2022.03 — 2025.02</p><h4>경인여자대학교</h4><p>광고디자인과</p></div>
          <div class="about-block"><h3>자격 <span>CERTIFICATION</span></h3><p class="about-date">2021</p><h4>GTQ 그래픽기술자격 1급</h4></div>
        </div>
        <div class="about-block about-tools"><h3>사용 도구 <span>TOOLS</span></h3><p>Illustrator · Photoshop · InDesign · Figma</p><p class="about-workflow">AI 이미지 제작: ChatGPT 생성 · Photoshop 후보정</p></div>
      </div>
    </div>
  </section>`}const as={cover:["01","Selected work"],overview:["01","The project"],badges:["02","Badge collection"],single:["03","Single pack"],full:["04","Full box"],limited:["05","Limited edition"],daiso:["06","Retail edition"],display:["07","Display box"],pouch:["08","Badge pouch"],experience:["09","Visual stories"],digital:["10","Digital experience"],about:["11","Behind the work"]};function Nc(){const i=matchMedia("(prefers-reduced-motion: reduce)"),e=new Set,t=(l,u,d={})=>{if(!l||i.matches)return;const h=l.animate(u,{duration:650,easing:"cubic-bezier(.22,1,.36,1)",...d});return e.add(h),h.finished.then(()=>e.delete(h),()=>e.delete(h)),h},n=l=>t(l,[{opacity:.12,transform:"translateY(34px)"},{opacity:1,transform:"translateY(0)"}]),r=new WeakSet,a=new IntersectionObserver(l=>{for(const{target:u,isIntersecting:d}of l)!d||r.has(u)||(r.add(u),a.unobserve(u),u.matches(".section-heading")?u.querySelectorAll(".eyebrow,.english-section-title,.korean-section-title,.section-description").forEach((h,f)=>{t(h,[{opacity:.1,transform:"translateY(30px)"},{opacity:1,transform:"translateY(0)"}],{delay:f*75,duration:750})}):n(u))},{threshold:.08,rootMargin:"0px 0px -35px 0px"});document.querySelectorAll(".section-heading,.product-visual,.product-copy,.overview-intro,.role-list article,.about-intro,.about-block,.digital-copy,.concept-gallery-item").forEach(l=>a.observe(l)),document.querySelectorAll(".hero-line>span:first-child").forEach((l,u)=>{t(l,[{transform:"translateY(115%) rotate(3deg)"},{transform:"translateY(0) rotate(0deg)"}],{duration:950,delay:u*110})}),t(document.querySelector(".cover-visual"),[{opacity:.2,transform:"translateY(35px) rotate(2deg)"},{opacity:1,transform:"translateY(0) rotate(0deg)"}],{duration:1e3,delay:180});const o=document.createElement("div");o.className="chapter-curtain",o.setAttribute("aria-hidden","true"),o.hidden=!0,o.innerHTML='<div class="curtain-copy"><span></span><p></p><i>↗</i></div>',document.body.append(o);let s=null;function c(l,u){location.hash!==l&&history.pushState(null,"",l);const d=parseFloat(getComputedStyle(u).scrollMarginTop)||90;window.scrollTo({top:Math.max(0,u.getBoundingClientRect().top+scrollY-d),behavior:"instant"})}document.addEventListener("click",async l=>{const u=l.target.closest('a[href^="#"]');if(!u||l.defaultPrevented||l.button!==0||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||i.matches||u.classList.contains("skip"))return;const d=u.getAttribute("href"),h=document.getElementById(d.slice(1));if(!h||!as[h.id]||Math.abs(h.getBoundingClientRect().top-90)<innerHeight*.65||(l.preventDefault(),s))return;const[f,v]=as[h.id];o.querySelector("span").textContent=`CHAPTER / ${f}`,o.querySelector("p").textContent=v,o.hidden=!1;const b={hash:d,target:h};s=b;try{await t(o,[{transform:"translateY(100%)"},{transform:"translateY(0)"}],{duration:320,easing:"cubic-bezier(.76,0,.24,1)",fill:"forwards"})?.finished,c(d,h),t(o.querySelector(".curtain-copy"),[{opacity:.25,transform:"translateY(12px)"},{opacity:1,transform:"translateY(0)"}],{duration:260}),await t(o,[{transform:"translateY(0)"},{transform:"translateY(-100%)"}],{duration:400,delay:100,easing:"cubic-bezier(.76,0,.24,1)",fill:"forwards"})?.finished}catch{s===b&&c(d,h)}finally{o.hidden=!0,o.getAnimations().forEach(m=>m.cancel()),s=null}}),document.addEventListener("click",l=>{const u=l.target.closest("[data-design],[data-badge-type],[data-social-group],#slide-next,#slide-prev");!u||i.matches||requestAnimationFrame(()=>{const d=u.matches("[data-design]")?u.closest(".package-section").querySelector(".product-visual"):u.matches("[data-badge-type]")?document.querySelector("#badge-catalog"):document.querySelector("#social-image");t(d,[{opacity:.35,transform:"translateY(10px)"},{opacity:1,transform:"translateY(0)"}],{duration:420})})});for(const l of document.querySelectorAll("dialog"))new MutationObserver(()=>{l.open&&t(l,[{opacity:0,transform:"translateY(22px) scale(.985)"},{opacity:1,transform:"translateY(0) scale(1)"}],{duration:350})}).observe(l,{attributes:!0,attributeFilter:["open"]});i.addEventListener("change",()=>{i.matches&&(e.forEach(l=>l.cancel()),o.hidden=!0)})}function Fc(){const i=document.querySelector(".header"),e=[...i.querySelectorAll("nav a")],t=new Map([["overview","#overview"],["badges","#badges"],...["single","full","limited","daiso","display","pouch"].map(l=>[l,"#single"]),["experience","#experience"],["digital","#digital"],["about","#about"]]),n=[...document.querySelectorAll("main > section[id]")];let r=!1,a;function o(){const l=document.documentElement.scrollHeight-innerHeight,u=l>0?Math.min(1,Math.max(0,scrollY/l)):0,d=i.offsetHeight+Math.min(180,innerHeight*.2);let h;for(const f of n)if(f.getBoundingClientRect().top<=d)h=t.get(f.id);else break;u>=.999&&(h="#about"),i.style.setProperty("--reading-progress",String(u)),document.querySelector(".type-ribbon-track")?.style.setProperty("--ribbon-offset",`${-Math.min(200,scrollY*.12)}px`),h!==a&&(e.forEach(f=>{f.getAttribute("href")===h?f.setAttribute("aria-current","location"):f.removeAttribute("aria-current")}),a=h),r=!1}function s(){r||(r=!0,requestAnimationFrame(o))}addEventListener("scroll",s,{passive:!0}),addEventListener("resize",s,{passive:!0}),new ResizeObserver(s).observe(document.querySelector("main")),o()}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="180",Oc=0,os=1,kc=2,dl=1,Bc=2,ln=3,pn=0,yt=1,Ot=2,Rn=0,si=1,ss=2,ls=3,cs=4,zc=5,On=100,Gc=101,Vc=102,Hc=103,Wc=104,Xc=200,qc=201,Yc=202,Zc=203,Ca=204,Pa=205,Kc=206,Jc=207,jc=208,Qc=209,$c=210,eu=211,tu=212,nu=213,iu=214,Da=0,Ia=1,Na=2,ui=3,Fa=4,Oa=5,ka=6,Ba=7,hl=0,ru=1,au=2,hn=0,ou=1,su=2,lu=3,cu=4,uu=5,du=6,hu=7,fl=300,di=301,hi=302,za=303,Ga=304,Fr=306,Va=1e3,Bn=1001,Ha=1002,Pt=1003,fu=1004,ji=1005,kt=1006,Hr=1007,Sn=1008,jt=1009,pl=1010,ml=1011,Ni=1012,Lo=1013,zn=1014,dn=1015,Wi=1016,Uo=1017,Co=1018,Fi=1020,gl=35902,vl=35899,bl=1021,_l=1022,Wt=1023,Oi=1026,ki=1027,xl=1028,Po=1029,wl=1030,Do=1031,Io=1033,yr=33776,Sr=33777,Rr=33778,Er=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,Ka=37492,Ja=37496,ja=37808,Qa=37809,$a=37810,eo=37811,to=37812,no=37813,io=37814,ro=37815,ao=37816,oo=37817,so=37818,lo=37819,co=37820,uo=37821,ho=36492,fo=36494,po=36495,mo=36283,go=36284,vo=36285,bo=36286,pu=3200,mu=3201,Ml=0,gu=1,un="",Mt="srgb",fi="srgb-linear",Cr="linear",et="srgb",Wn=7680,us=519,vu=512,bu=513,_u=514,yl=515,xu=516,wu=517,Mu=518,yu=519,ds=35044,hs="300 es",Yt=2e3,Pr=2001;class bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wr=Math.PI/180,_o=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Su(i,e){return(i%e+e)%e}function Xr(i,e,t){return(1-t)*i+t*e}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,s){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3];const h=a[o+0],f=a[o+1],v=a[o+2],b=a[o+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(s===1){e[t+0]=h,e[t+1]=f,e[t+2]=v,e[t+3]=b;return}if(d!==b||c!==h||l!==f||u!==v){let m=1-s;const p=c*h+l*f+u*v+d*b,R=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const T=Math.sqrt(S),A=Math.atan2(T,p*R);m=Math.sin(m*A)/T,s=Math.sin(s*A)/T}const _=s*R;if(c=c*m+h*_,l=l*m+f*_,u=u*m+v*_,d=d*m+b*_,m===1-s){const T=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=T,l*=T,u*=T,d*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,a,o){const s=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=a[o],h=a[o+1],f=a[o+2],v=a[o+3];return e[t]=s*v+u*d+c*f-l*h,e[t+1]=c*v+u*h+l*d-s*f,e[t+2]=l*v+u*f+s*h-c*d,e[t+3]=u*v-s*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(n/2),u=s(r/2),d=s(a/2),h=c(n/2),f=c(r/2),v=c(a/2);switch(o){case"XYZ":this._x=h*u*d+l*f*v,this._y=l*f*d-h*u*v,this._z=l*u*v+h*f*d,this._w=l*u*d-h*f*v;break;case"YXZ":this._x=h*u*d+l*f*v,this._y=l*f*d-h*u*v,this._z=l*u*v-h*f*d,this._w=l*u*d+h*f*v;break;case"ZXY":this._x=h*u*d-l*f*v,this._y=l*f*d+h*u*v,this._z=l*u*v+h*f*d,this._w=l*u*d-h*f*v;break;case"ZYX":this._x=h*u*d-l*f*v,this._y=l*f*d+h*u*v,this._z=l*u*v-h*f*d,this._w=l*u*d+h*f*v;break;case"YZX":this._x=h*u*d+l*f*v,this._y=l*f*d+h*u*v,this._z=l*u*v-h*f*d,this._w=l*u*d-h*f*v;break;case"XZY":this._x=h*u*d-l*f*v,this._y=l*f*d-h*u*v,this._z=l*u*v+h*f*d,this._w=l*u*d+h*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],s=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+s+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(a-l)*f,this._z=(o-r)*f}else if(n>s&&n>d){const f=2*Math.sqrt(1+n-s-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(a+l)/f}else if(s>d){const f=2*Math.sqrt(1+s-n-d);this._w=(a-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-s);this._w=(o-r)/f,this._x=(a+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,s=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*s+r*l-a*c,this._y=r*u+o*c+a*s-n*l,this._z=a*u+o*l+n*c-r*s,this._w=o*u-n*s-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const c=1-s*s;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,s),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,s=e.z,c=e.w,l=2*(o*r-s*n),u=2*(s*t-a*r),d=2*(a*n-o*t);return this.x=t+c*l+o*d-s*u,this.y=n+c*u+s*l-a*d,this.z=r+c*d+a*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-a*s,this.y=a*o-n*c,this.z=n*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qr.copy(this).projectOnVector(e),this.sub(qr)}reflect(e){return this.sub(qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new N,fs=new Xi;class We{constructor(e,t,n,r,a,o,s,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,l)}set(e,t,n,r,a,o,s,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],v=n[8],b=r[0],m=r[3],p=r[6],R=r[1],S=r[4],_=r[7],T=r[2],A=r[5],U=r[8];return a[0]=o*b+s*R+c*T,a[3]=o*m+s*S+c*A,a[6]=o*p+s*_+c*U,a[1]=l*b+u*R+d*T,a[4]=l*m+u*S+d*A,a[7]=l*p+u*_+d*U,a[2]=h*b+f*R+v*T,a[5]=h*m+f*S+v*A,a[8]=h*p+f*_+v*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*s*l-n*a*u+n*s*c+r*a*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=u*o-s*l,h=s*c-u*a,f=l*a-o*c,v=t*d+n*h+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=d*b,e[1]=(r*l-u*n)*b,e[2]=(s*n-r*o)*b,e[3]=h*b,e[4]=(u*t-r*c)*b,e[5]=(r*a-s*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(o*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,s){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*o+l*s)+o+e,-r*l,r*c,-r*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Yr.makeScale(e,t)),this}rotate(e){return this.premultiply(Yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new We;function Sl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ru(){const i=Bi("canvas");return i.style.display="block",i}const ps={};function zi(i){i in ps||(ps[i]=!0,console.warn(i))}function Eu(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const ms=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gs=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Au(){const i={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(r,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===et&&(r.r=fn(r.r),r.g=fn(r.g),r.b=fn(r.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(r.r=li(r.r),r.g=li(r.g),r.b=li(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===un?Cr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,o){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return zi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return zi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fi]:{primaries:e,whitePoint:n,transfer:Cr,toXYZ:ms,fromXYZ:gs,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:ms,fromXYZ:gs,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}const Je=Au();function fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xn;class Tu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xn===void 0&&(Xn=Bi("canvas")),Xn.width=e.width,Xn.height=e.height;const r=Xn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Xn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=fn(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fn(t[n]/255)*255):t[n]=fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lu=0;class No{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Zr(r[o].image)):a.push(Zr(r[o]))}else a=Zr(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uu=0;const Kr=new N;class gt extends bi{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=Bn,r=Bn,a=kt,o=Sn,s=Wt,c=jt,l=gt.DEFAULT_ANISOTROPY,u=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=_i(),this.name="",this.source=new No(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kr).x}get height(){return this.source.getSize(Kr).y}get depth(){return this.source.getSize(Kr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Va:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Va:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=fl;gt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],v=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-b)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+b)<.1&&Math.abs(v+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,_=(f+1)/2,T=(p+1)/2,A=(u+h)/4,U=(d+b)/4,P=(v+m)/4;return S>_&&S>T?S<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(S),r=A/n,a=U/n):_>T?_<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(_),n=A/r,a=P/r):T<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(T),n=U/a,r=P/a),this.set(n,r,a,t),this}let R=Math.sqrt((m-v)*(m-v)+(d-b)*(d-b)+(h-u)*(h-u));return Math.abs(R)<.001&&(R=1),this.x=(m-v)/R,this.y=(d-b)/R,this.z=(h-u)/R,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cu extends bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new gt(r);this.textures=[];const o=n.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new No(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Cu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rl extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pu extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,zt):zt.fromBufferAttribute(a,o),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(e.matrixWorld),this.union(Qi)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),$i.subVectors(this.max,Si),qn.subVectors(e.a,Si),Yn.subVectors(e.b,Si),Zn.subVectors(e.c,Si),gn.subVectors(Yn,qn),vn.subVectors(Zn,Yn),Ln.subVectors(qn,Zn);let t=[0,-gn.z,gn.y,0,-vn.z,vn.y,0,-Ln.z,Ln.y,gn.z,0,-gn.x,vn.z,0,-vn.x,Ln.z,0,-Ln.x,-gn.y,gn.x,0,-vn.y,vn.x,0,-Ln.y,Ln.x,0];return!Jr(t,qn,Yn,Zn,$i)||(t=[1,0,0,0,1,0,0,0,1],!Jr(t,qn,Yn,Zn,$i))?!1:(er.crossVectors(gn,vn),t=[er.x,er.y,er.z],Jr(t,qn,Yn,Zn,$i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nn=[new N,new N,new N,new N,new N,new N,new N,new N],zt=new N,Qi=new xi,qn=new N,Yn=new N,Zn=new N,gn=new N,vn=new N,Ln=new N,Si=new N,$i=new N,er=new N,Un=new N;function Jr(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){Un.fromArray(i,a);const s=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),c=e.dot(Un),l=t.dot(Un),u=n.dot(Un);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}const Du=new xi,Ri=new N,jr=new N;class Fo{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Du.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ri.subVectors(e,this.center);const t=Ri.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ri,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ri.copy(e.center).add(jr)),this.expandByPoint(Ri.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const rn=new N,Qr=new N,tr=new N,bn=new N,$r=new N,nr=new N,ea=new N;class Iu{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qr.copy(e).add(t).multiplyScalar(.5),tr.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Qr);const a=e.distanceTo(t)*.5,o=-this.direction.dot(tr),s=bn.dot(this.direction),c=-bn.dot(tr),l=bn.lengthSq(),u=Math.abs(1-o*o);let d,h,f,v;if(u>0)if(d=o*c-s,h=o*s-c,v=a*u,d>=0)if(h>=-v)if(h<=v){const b=1/u;d*=b,h*=b,f=d*(d+o*h+2*s)+h*(o*d+h+2*c)+l}else h=a,d=Math.max(0,-(o*h+s)),f=-d*d+h*(h+2*c)+l;else h=-a,d=Math.max(0,-(o*h+s)),f=-d*d+h*(h+2*c)+l;else h<=-v?(d=Math.max(0,-(-o*a+s)),h=d>0?-a:Math.min(Math.max(-a,-c),a),f=-d*d+h*(h+2*c)+l):h<=v?(d=0,h=Math.min(Math.max(-a,-c),a),f=h*(h+2*c)+l):(d=Math.max(0,-(o*a+s)),h=d>0?a:Math.min(Math.max(-a,-c),a),f=-d*d+h*(h+2*c)+l);else h=o>0?-a:a,d=Math.max(0,-(o*h+s)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Qr).addScaledVector(tr,h),f}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const n=rn.dot(this.direction),r=rn.dot(rn)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=n-o,c=n+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,s,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(a=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),d>=0?(s=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(s=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||s>r)||((s>n||n!==n)&&(n=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,r,a){$r.subVectors(t,e),nr.subVectors(n,e),ea.crossVectors($r,nr);let o=this.direction.dot(ea),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;bn.subVectors(this.origin,e);const c=s*this.direction.dot(nr.crossVectors(bn,nr));if(c<0)return null;const l=s*this.direction.dot($r.cross(bn));if(l<0||c+l>o)return null;const u=-s*bn.dot(ea);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,r,a,o,s,c,l,u,d,h,f,v,b,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,l,u,d,h,f,v,b,m)}set(e,t,n,r,a,o,s,c,l,u,d,h,f,v,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=a,p[5]=o,p[9]=s,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=v,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Kn.setFromMatrixColumn(e,0).length(),a=1/Kn.setFromMatrixColumn(e,1).length(),o=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const h=o*u,f=o*d,v=s*u,b=s*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+v*l,t[5]=h-b*l,t[9]=-s*c,t[2]=b-h*l,t[6]=v+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,v=l*u,b=l*d;t[0]=h+b*s,t[4]=v*s-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-s,t[2]=f*s-v,t[6]=b+h*s,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,v=l*u,b=l*d;t[0]=h-b*s,t[4]=-o*d,t[8]=v+f*s,t[1]=f+v*s,t[5]=o*u,t[9]=b-h*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,f=o*d,v=s*u,b=s*d;t[0]=c*u,t[4]=v*l-f,t[8]=h*l+b,t[1]=c*d,t[5]=b*l+h,t[9]=f*l-v,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,v=s*c,b=s*l;t[0]=c*u,t[4]=b-h*d,t[8]=v*d+f,t[1]=d,t[5]=o*u,t[9]=-s*u,t[2]=-l*u,t[6]=f*d+v,t[10]=h-b*d}else if(e.order==="XZY"){const h=o*c,f=o*l,v=s*c,b=s*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+b,t[5]=o*u,t[9]=f*d-v,t[2]=v*d-f,t[6]=s*u,t[10]=b*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nu,e,Fu)}lookAt(e,t,n){const r=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),_n.crossVectors(n,Tt),_n.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),_n.crossVectors(n,Tt)),_n.normalize(),ir.crossVectors(Tt,_n),r[0]=_n.x,r[4]=ir.x,r[8]=Tt.x,r[1]=_n.y,r[5]=ir.y,r[9]=Tt.y,r[2]=_n.z,r[6]=ir.z,r[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],v=n[2],b=n[6],m=n[10],p=n[14],R=n[3],S=n[7],_=n[11],T=n[15],A=r[0],U=r[4],P=r[8],y=r[12],w=r[1],L=r[5],k=r[9],z=r[13],W=r[2],Y=r[6],X=r[10],ae=r[14],q=r[3],de=r[7],be=r[11],Ee=r[15];return a[0]=o*A+s*w+c*W+l*q,a[4]=o*U+s*L+c*Y+l*de,a[8]=o*P+s*k+c*X+l*be,a[12]=o*y+s*z+c*ae+l*Ee,a[1]=u*A+d*w+h*W+f*q,a[5]=u*U+d*L+h*Y+f*de,a[9]=u*P+d*k+h*X+f*be,a[13]=u*y+d*z+h*ae+f*Ee,a[2]=v*A+b*w+m*W+p*q,a[6]=v*U+b*L+m*Y+p*de,a[10]=v*P+b*k+m*X+p*be,a[14]=v*y+b*z+m*ae+p*Ee,a[3]=R*A+S*w+_*W+T*q,a[7]=R*U+S*L+_*Y+T*de,a[11]=R*P+S*k+_*X+T*be,a[15]=R*y+S*z+_*ae+T*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],s=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],v=e[3],b=e[7],m=e[11],p=e[15];return v*(+a*c*d-r*l*d-a*s*h+n*l*h+r*s*f-n*c*f)+b*(+t*c*f-t*l*h+a*o*h-r*o*f+r*l*u-a*c*u)+m*(+t*l*d-t*s*f-a*o*d+n*o*f+a*s*u-n*l*u)+p*(-r*s*u-t*c*d+t*s*h+r*o*d-n*o*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],v=e[12],b=e[13],m=e[14],p=e[15],R=d*m*l-b*h*l+b*c*f-s*m*f-d*c*p+s*h*p,S=v*h*l-u*m*l-v*c*f+o*m*f+u*c*p-o*h*p,_=u*b*l-v*d*l+v*s*f-o*b*f-u*s*p+o*d*p,T=v*d*c-u*b*c-v*s*h+o*b*h+u*s*m-o*d*m,A=t*R+n*S+r*_+a*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/A;return e[0]=R*U,e[1]=(b*h*a-d*m*a-b*r*f+n*m*f+d*r*p-n*h*p)*U,e[2]=(s*m*a-b*c*a+b*r*l-n*m*l-s*r*p+n*c*p)*U,e[3]=(d*c*a-s*h*a-d*r*l+n*h*l+s*r*f-n*c*f)*U,e[4]=S*U,e[5]=(u*m*a-v*h*a+v*r*f-t*m*f-u*r*p+t*h*p)*U,e[6]=(v*c*a-o*m*a-v*r*l+t*m*l+o*r*p-t*c*p)*U,e[7]=(o*h*a-u*c*a+u*r*l-t*h*l-o*r*f+t*c*f)*U,e[8]=_*U,e[9]=(v*d*a-u*b*a-v*n*f+t*b*f+u*n*p-t*d*p)*U,e[10]=(o*b*a-v*s*a+v*n*l-t*b*l-o*n*p+t*s*p)*U,e[11]=(u*s*a-o*d*a-u*n*l+t*d*l+o*n*f-t*s*f)*U,e[12]=T*U,e[13]=(u*b*r-v*d*r+v*n*h-t*b*h-u*n*m+t*d*m)*U,e[14]=(v*s*r-o*b*r-v*n*c+t*b*c+o*n*m-t*s*m)*U,e[15]=(o*d*r-u*s*r+u*n*c-t*d*c-o*n*h+t*s*h)*U,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,s=e.y,c=e.z,l=a*o,u=a*s;return this.set(l*o+n,l*s-r*c,l*c+r*s,0,l*s+r*c,u*s+n,u*c-r*o,0,l*c-r*s,u*c+r*o,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,s=t._z,c=t._w,l=a+a,u=o+o,d=s+s,h=a*l,f=a*u,v=a*d,b=o*u,m=o*d,p=s*d,R=c*l,S=c*u,_=c*d,T=n.x,A=n.y,U=n.z;return r[0]=(1-(b+p))*T,r[1]=(f+_)*T,r[2]=(v-S)*T,r[3]=0,r[4]=(f-_)*A,r[5]=(1-(h+p))*A,r[6]=(m+R)*A,r[7]=0,r[8]=(v+S)*U,r[9]=(m-R)*U,r[10]=(1-(h+b))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Kn.set(r[0],r[1],r[2]).length();const o=Kn.set(r[4],r[5],r[6]).length(),s=Kn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const l=1/a,u=1/o,d=1/s;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=u,Gt.elements[5]*=u,Gt.elements[6]*=u,Gt.elements[8]*=d,Gt.elements[9]*=d,Gt.elements[10]*=d,t.setFromRotationMatrix(Gt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,a,o,s=Yt,c=!1){const l=this.elements,u=2*a/(t-e),d=2*a/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let v,b;if(c)v=a/(o-a),b=o*a/(o-a);else if(s===Yt)v=-(o+a)/(o-a),b=-2*o*a/(o-a);else if(s===Pr)v=-o/(o-a),b=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,o,s=Yt,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),f=-(n+r)/(n-r);let v,b;if(c)v=1/(o-a),b=o/(o-a);else if(s===Yt)v=-2/(o-a),b=-(o+a)/(o-a);else if(s===Pr)v=-1/(o-a),b=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=v,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kn=new N,Gt=new lt,Nu=new N(0,0,0),Fu=new N(1,1,1),_n=new N,ir=new N,Tt=new N,vs=new lt,bs=new Xi;class Qt{constructor(e=0,t=0,n=0,r=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bs.setFromEuler(this),this.setFromQuaternion(bs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ou=0;const _s=new N,Jn=new Xi,an=new lt,rr=new N,Ei=new N,ku=new N,Bu=new Xi,xs=new N(1,0,0),ws=new N(0,1,0),Ms=new N(0,0,1),ys={type:"added"},zu={type:"removed"},jn={type:"childadded",child:null},ta={type:"childremoved",child:null};class vt extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new N,t=new Qt,n=new Xi,r=new N(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new We}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(xs,e)}rotateY(e){return this.rotateOnAxis(ws,e)}rotateZ(e){return this.rotateOnAxis(Ms,e)}translateOnAxis(e,t){return _s.copy(e).applyQuaternion(this.quaternion),this.position.add(_s.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xs,e)}translateY(e){return this.translateOnAxis(ws,e)}translateZ(e){return this.translateOnAxis(Ms,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ei,rr,this.up):an.lookAt(rr,Ei,this.up),this.quaternion.setFromRotationMatrix(an),r&&(an.extractRotation(r.matrixWorld),Jn.setFromRotationMatrix(an),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ys),jn.child=e,this.dispatchEvent(jn),jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zu),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ys),jn.child=e,this.dispatchEvent(jn),jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,e,ku),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,Bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(s=>({...s,boundingBox:s.boundingBox?s.boundingBox.toJSON():void 0,boundingSphere:s.boundingSphere?s.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(s=>({...s})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(a(e.materials,this.material[c]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(a(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),v=o(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}vt.DEFAULT_UP=new N(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new N,on=new N,na=new N,sn=new N,Qn=new N,$n=new N,Ss=new N,ia=new N,ra=new N,aa=new N,oa=new ot,sa=new ot,la=new ot;class Ht{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Vt.subVectors(r,t),on.subVectors(n,t),na.subVectors(e,t);const o=Vt.dot(Vt),s=Vt.dot(on),c=Vt.dot(na),l=on.dot(on),u=on.dot(na),d=o*l-s*s;if(d===0)return a.set(0,0,0),null;const h=1/d,f=(l*c-s*u)*h,v=(o*u-s*c)*h;return a.set(1-f-v,v,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(e,t,n,r,a,o,s,c){return this.getBarycoord(e,t,n,r,sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,sn.x),c.addScaledVector(o,sn.y),c.addScaledVector(s,sn.z),c)}static getInterpolatedAttribute(e,t,n,r,a,o){return oa.setScalar(0),sa.setScalar(0),la.setScalar(0),oa.fromBufferAttribute(e,t),sa.fromBufferAttribute(e,n),la.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(oa,a.x),o.addScaledVector(sa,a.y),o.addScaledVector(la,a.z),o}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),on.subVectors(e,t),Vt.cross(on).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Vt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,s;Qn.subVectors(r,n),$n.subVectors(a,n),ia.subVectors(e,n);const c=Qn.dot(ia),l=$n.dot(ia);if(c<=0&&l<=0)return t.copy(n);ra.subVectors(e,r);const u=Qn.dot(ra),d=$n.dot(ra);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Qn,o);aa.subVectors(e,a);const f=Qn.dot(aa),v=$n.dot(aa);if(v>=0&&f<=v)return t.copy(a);const b=f*l-c*v;if(b<=0&&l>=0&&v<=0)return s=l/(l-v),t.copy(n).addScaledVector($n,s);const m=u*v-f*d;if(m<=0&&d-u>=0&&f-v>=0)return Ss.subVectors(a,r),s=(d-u)/(d-u+(f-v)),t.copy(r).addScaledVector(Ss,s);const p=1/(m+b+h);return o=b*p,s=h*p,t.copy(n).addScaledVector(Qn,o).addScaledVector($n,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function ca(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=Su(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=ca(o,a,e+1/3),this.g=ca(o,a,e),this.b=ca(o,a,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Mt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=Al[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Je.workingToColorSpace(_t.copy(this),e),Math.round(qe(_t.r*255,0,255))*65536+Math.round(qe(_t.g*255,0,255))*256+Math.round(qe(_t.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(_t.copy(this),t);const n=_t.r,r=_t.g,a=_t.b,o=Math.max(n,r,a),s=Math.min(n,r,a);let c,l;const u=(s+o)/2;if(s===o)c=0,l=0;else{const d=o-s;switch(l=u<=.5?d/(o+s):d/(2-o-s),o){case n:c=(r-a)/d+(r<a?6:0);break;case r:c=(a-n)/d+2;break;case a:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Mt){Je.workingToColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,r=_t.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(ar);const n=Xr(xn.h,ar.h,t),r=Xr(xn.s,ar.s,t),a=Xr(xn.l,ar.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new Ze;Ze.NAMES=Al;let Gu=0;class qi extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=si,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=us,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==us&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const s in a){const c=a[s];delete c.metadata,o.push(c)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pi extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new N,or=new Me;let Vu=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ds,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),a=Rt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ds&&(e.usage=this.usage),e}}class Tl extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ll extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hu=0;const Nt=new lt,ua=new vt,ei=new N,Lt=new xi,Ai=new xi,mt=new N;class Bt extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sl(e)?Ll:Tl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new We().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Lt.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Ai.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(Lt.min,Ai.min),Lt.expandByPoint(mt),mt.addVectors(Lt.max,Ai.max),Lt.expandByPoint(mt)):(Lt.expandByPoint(Ai.min),Lt.expandByPoint(Ai.max))}Lt.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)mt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],c=this.morphTargetsRelative;for(let l=0,u=s.count;l<u;l++)mt.fromBufferAttribute(s,l),c&&(ei.fromBufferAttribute(e,l),mt.add(ei)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),s=[],c=[];for(let P=0;P<n.count;P++)s[P]=new N,c[P]=new N;const l=new N,u=new N,d=new N,h=new Me,f=new Me,v=new Me,b=new N,m=new N;function p(P,y,w){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,w),h.fromBufferAttribute(a,P),f.fromBufferAttribute(a,y),v.fromBufferAttribute(a,w),u.sub(l),d.sub(l),f.sub(h),v.sub(h);const L=1/(f.x*v.y-v.x*f.y);isFinite(L)&&(b.copy(u).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(L),s[P].add(b),s[y].add(b),s[w].add(b),c[P].add(m),c[y].add(m),c[w].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let P=0,y=R.length;P<y;++P){const w=R[P],L=w.start,k=w.count;for(let z=L,W=L+k;z<W;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new N,_=new N,T=new N,A=new N;function U(P){T.fromBufferAttribute(r,P),A.copy(T);const y=s[P];S.copy(y),S.sub(T.multiplyScalar(T.dot(y))).normalize(),_.crossVectors(A,y);const L=_.dot(c[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,L)}for(let P=0,y=R.length;P<y;++P){const w=R[P],L=w.start,k=w.count;for(let z=L,W=L+k;z<W;z+=3)U(e.getX(z+0)),U(e.getX(z+1)),U(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new N,a=new N,o=new N,s=new N,c=new N,l=new N,u=new N,d=new N;if(e)for(let h=0,f=e.count;h<f;h+=3){const v=e.getX(h+0),b=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),u.subVectors(o,a),d.subVectors(r,a),u.cross(d),s.fromBufferAttribute(n,v),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),s.add(u),c.add(u),l.add(u),n.setXYZ(v,s.x,s.y,s.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,a),d.subVectors(r,a),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(s,c){const l=s.array,u=s.itemSize,d=s.normalized,h=new l.constructor(c.length*u);let f=0,v=0;for(let b=0,m=c.length;b<m;b++){s.isInterleavedBufferAttribute?f=c[b]*s.data.stride+s.offset:f=c[b]*u;for(let p=0;p<u;p++)h[v++]=l[f++]}return new Jt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,r=this.attributes;for(const s in r){const c=r[s],l=e(c,n);t.setAttribute(s,l)}const a=this.morphAttributes;for(const s in a){const c=[],l=a[s];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],d=a[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rs=new lt,Cn=new Iu,sr=new Fo,Es=new N,lr=new N,cr=new N,ur=new N,da=new N,dr=new N,As=new N,hr=new N;class ut extends vt{constructor(e=new Bt,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){dr.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=s[c],d=a[c];u!==0&&(da.fromBufferAttribute(d,e),o?dr.addScaledVector(da,u):dr.addScaledVector(da.sub(t),u))}t.add(dr)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(a),Cn.copy(e.ray).recast(e.near),!(sr.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(sr,Es)===null||Cn.origin.distanceToSquared(Es)>(e.far-e.near)**2))&&(Rs.copy(a).invert(),Cn.copy(e.ray).applyMatrix4(Rs),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cn)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,f=a.drawRange;if(s!==null)if(Array.isArray(o))for(let v=0,b=h.length;v<b;v++){const m=h[v],p=o[m.materialIndex],R=Math.max(m.start,f.start),S=Math.min(s.count,Math.min(m.start+m.count,f.start+f.count));for(let _=R,T=S;_<T;_+=3){const A=s.getX(_),U=s.getX(_+1),P=s.getX(_+2);r=fr(this,p,e,n,l,u,d,A,U,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),b=Math.min(s.count,f.start+f.count);for(let m=v,p=b;m<p;m+=3){const R=s.getX(m),S=s.getX(m+1),_=s.getX(m+2);r=fr(this,o,e,n,l,u,d,R,S,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,b=h.length;v<b;v++){const m=h[v],p=o[m.materialIndex],R=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=R,T=S;_<T;_+=3){const A=_,U=_+1,P=_+2;r=fr(this,p,e,n,l,u,d,A,U,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=v,p=b;m<p;m+=3){const R=m,S=m+1,_=m+2;r=fr(this,o,e,n,l,u,d,R,S,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Wu(i,e,t,n,r,a,o,s){let c;if(e.side===yt?c=n.intersectTriangle(o,a,r,!0,s):c=n.intersectTriangle(r,a,o,e.side===pn,s),c===null)return null;hr.copy(s),hr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(hr);return l<t.near||l>t.far?null:{distance:l,point:hr.clone(),object:i}}function fr(i,e,t,n,r,a,o,s,c,l){i.getVertexPosition(s,lr),i.getVertexPosition(c,cr),i.getVertexPosition(l,ur);const u=Wu(i,e,t,n,lr,cr,ur,As);if(u){const d=new N;Ht.getBarycoord(As,lr,cr,ur,d),r&&(u.uv=Ht.getInterpolatedAttribute(r,s,c,l,d,new Me)),a&&(u.uv1=Ht.getInterpolatedAttribute(a,s,c,l,d,new Me)),o&&(u.normal=Ht.getInterpolatedAttribute(o,s,c,l,d,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:s,b:c,c:l,normal:new N,materialIndex:0};Ht.getNormal(lr,cr,ur,h.normal),u.face=h,u.barycoord=d}return u}class Yi extends Bt{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;v("z","y","x",-1,-1,n,t,e,o,a,0),v("z","y","x",1,-1,n,t,-e,o,a,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,a,4),v("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function v(b,m,p,R,S,_,T,A,U,P,y){const w=_/U,L=T/P,k=_/2,z=T/2,W=A/2,Y=U+1,X=P+1;let ae=0,q=0;const de=new N;for(let be=0;be<X;be++){const Ee=be*L-z;for(let $=0;$<Y;$++){const Te=$*w-k;de[b]=Te*R,de[m]=Ee*S,de[p]=W,l.push(de.x,de.y,de.z),de[b]=0,de[m]=0,de[p]=A>0?1:-1,u.push(de.x,de.y,de.z),d.push($/U),d.push(1-be/P),ae+=1}}for(let be=0;be<P;be++)for(let Ee=0;Ee<U;Ee++){const $=h+Ee+Y*be,Te=h+Ee+Y*(be+1),Fe=h+(Ee+1)+Y*(be+1),Ue=h+(Ee+1)+Y*be;c.push($,Te,Ue),c.push(Te,Fe,Ue),q+=6}s.addGroup(f,q,y),f+=q,h+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function wt(i){const e={};for(let t=0;t<i.length;t++){const n=mi(i[t]);for(const r in n)e[r]=n[r]}return e}function Xu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ul(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const qu={clone:mi,merge:wt};var Yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yu,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=Xu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cl extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Yt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new N,Ts=new Me,Ls=new Me;class Ut extends Cl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,Ts,Ls),t.subVectors(Ls,Ts)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ti=-90,ni=1;class Ku extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ut(ti,ni,e,t);r.layers=this.layers,this.add(r);const a=new Ut(ti,ni,e,t);a.layers=this.layers,this.add(a);const o=new Ut(ti,ni,e,t);o.layers=this.layers,this.add(o);const s=new Ut(ti,ni,e,t);s.layers=this.layers,this.add(s);const c=new Ut(ti,ni,e,t);c.layers=this.layers,this.add(c);const l=new Ut(ti,ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,s,c]=t;for(const l of t)this.remove(l);if(e===Yt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,s),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Pl extends gt{constructor(e=[],t=di,n,r,a,o,s,c,l,u){super(e,t,n,r,a,o,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ju extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Pl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yi(5,5,5),a=new mn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:Rn});a.uniforms.tEquirect.value=t;const o=new ut(r,a),s=t.minFilter;return t.minFilter===Sn&&(t.minFilter=kt),new Ku(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}class Ct extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ju={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,v=.005;l.inputState.pinching&&h>f+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(ju)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Oo extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qu extends gt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=Pt,u=Pt,d,h){super(null,o,s,c,l,u,r,a,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fa=new N,$u=new N,ed=new We;class Nn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=fa.subVectors(n,t).cross($u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ed.getNormalMatrix(e),r=this.coplanarPoint(fa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Fo,td=new Me(.5,.5),pr=new N;class ko{constructor(e=new Nn,t=new Nn,n=new Nn,r=new Nn,a=new Nn,o=new Nn){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yt,n=!1){const r=this.planes,a=e.elements,o=a[0],s=a[1],c=a[2],l=a[3],u=a[4],d=a[5],h=a[6],f=a[7],v=a[8],b=a[9],m=a[10],p=a[11],R=a[12],S=a[13],_=a[14],T=a[15];if(r[0].setComponents(l-o,f-u,p-v,T-R).normalize(),r[1].setComponents(l+o,f+u,p+v,T+R).normalize(),r[2].setComponents(l+s,f+d,p+b,T+S).normalize(),r[3].setComponents(l-s,f-d,p-b,T-S).normalize(),n)r[4].setComponents(c,h,m,_).normalize(),r[5].setComponents(l-c,f-h,p-m,T-_).normalize();else if(r[4].setComponents(l-c,f-h,p-m,T-_).normalize(),t===Yt)r[5].setComponents(l+c,f+h,p+m,T+_).normalize();else if(t===Pr)r[5].setComponents(c,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(e){Pn.center.set(0,0,0);const t=td.distanceTo(e.center);return Pn.radius=.7071067811865476+t,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(pr.x=r.normal.x>0?e.max.x:e.min.x,pr.y=r.normal.y>0?e.max.y:e.min.y,pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dl extends gt{constructor(e,t,n=zn,r,a,o,s=Pt,c=Pt,l,u=Oi,d=1){if(u!==Oi&&u!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new No(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Il extends gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends Bt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const a=[],o=[],s=[],c=[],l=new N,u=new Me;o.push(0,0,0),s.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),s.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(s,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class kr extends Bt{constructor(e=1,t=1,n=1,r=32,a=1,o=!1,s=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:c};const l=this;r=Math.floor(r),a=Math.floor(a);const u=[],d=[],h=[],f=[];let v=0;const b=[],m=n/2;let p=0;R(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function R(){const _=new N,T=new N;let A=0;const U=(t-e)/n;for(let P=0;P<=a;P++){const y=[],w=P/a,L=w*(t-e)+e;for(let k=0;k<=r;k++){const z=k/r,W=z*c+s,Y=Math.sin(W),X=Math.cos(W);T.x=L*Y,T.y=-w*n+m,T.z=L*X,d.push(T.x,T.y,T.z),_.set(Y,U,X).normalize(),h.push(_.x,_.y,_.z),f.push(z,1-w),y.push(v++)}b.push(y)}for(let P=0;P<r;P++)for(let y=0;y<a;y++){const w=b[y][P],L=b[y+1][P],k=b[y+1][P+1],z=b[y][P+1];(e>0||y!==0)&&(u.push(w,L,z),A+=3),(t>0||y!==a-1)&&(u.push(L,k,z),A+=3)}l.addGroup(p,A,0),p+=A}function S(_){const T=v,A=new Me,U=new N;let P=0;const y=_===!0?e:t,w=_===!0?1:-1;for(let k=1;k<=r;k++)d.push(0,m*w,0),h.push(0,w,0),f.push(.5,.5),v++;const L=v;for(let k=0;k<=r;k++){const W=k/r*c+s,Y=Math.cos(W),X=Math.sin(W);U.x=y*X,U.y=m*w,U.z=y*Y,d.push(U.x,U.y,U.z),h.push(0,w,0),A.x=Y*.5+.5,A.y=X*.5*w+.5,f.push(A.x,A.y),v++}for(let k=0;k<r;k++){const z=T+k,W=L+k;_===!0?u.push(W,W+1,z):u.push(W+1,W,z),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class en{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),a+=n.distanceTo(r),t.push(a),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const a=n.length;let o;t?o=t:o=e*n[a-1];let s=0,c=a-1,l;for(;s<=c;)if(r=Math.floor(s+(c-s)/2),l=n[r]-o,l<0)s=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(a-1);const u=n[r],h=n[r+1]-u,f=(o-u)/h;return(r+f)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const o=this.getPoint(r),s=this.getPoint(a),c=t||(o.isVector2?new Me:new N);return c.copy(s).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new N,r=[],a=[],o=[],s=new N,c=new lt;for(let f=0;f<=e;f++){const v=f/e;r[f]=this.getTangentAt(v,new N)}a[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),s.crossVectors(r[0],n).normalize(),a[0].crossVectors(r[0],s),o[0].crossVectors(r[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),o[f]=o[f-1].clone(),s.crossVectors(r[f-1],r[f]),s.length()>Number.EPSILON){s.normalize();const v=Math.acos(qe(r[f-1].dot(r[f]),-1,1));a[f].applyMatrix4(c.makeRotationAxis(s,v))}o[f].crossVectors(r[f],a[f])}if(t===!0){let f=Math.acos(qe(a[0].dot(a[e]),-1,1));f/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(f=-f);for(let v=1;v<=e;v++)a[v].applyMatrix4(c.makeRotationAxis(r[v],f*v)),o[v].crossVectors(r[v],a[v])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Bo extends en{constructor(e=0,t=0,n=1,r=1,a=0,o=Math.PI*2,s=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=s,this.aRotation=c}getPoint(e,t=new Me){const n=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(o?a=0:a=r),this.aClockwise===!0&&!o&&(a===r?a=-r:a=a-r);const s=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class nd extends Bo{constructor(e,t,n,r,a,o){super(e,t,n,n,r,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zo(){let i=0,e=0,t=0,n=0;function r(a,o,s,c){i=a,e=s,t=-3*a+3*o-2*s-c,n=2*a-2*o+s+c}return{initCatmullRom:function(a,o,s,c,l){r(o,s,l*(s-a),l*(c-o))},initNonuniformCatmullRom:function(a,o,s,c,l,u,d){let h=(o-a)/l-(s-a)/(l+u)+(s-o)/u,f=(s-o)/u-(c-o)/(u+d)+(c-s)/d;h*=u,f*=u,r(o,s,h,f)},calc:function(a){const o=a*a,s=o*a;return i+e*a+t*o+n*s}}}const mr=new N,pa=new zo,ma=new zo,ga=new zo;class id extends en{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new N){const n=t,r=this.points,a=r.length,o=(a-(this.closed?0:1))*e;let s=Math.floor(o),c=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:c===0&&s===a-1&&(s=a-2,c=1);let l,u;this.closed||s>0?l=r[(s-1)%a]:(mr.subVectors(r[0],r[1]).add(r[0]),l=mr);const d=r[s%a],h=r[(s+1)%a];if(this.closed||s+2<a?u=r[(s+2)%a]:(mr.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=mr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(d),f),b=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);b<1e-4&&(b=1),v<1e-4&&(v=b),m<1e-4&&(m=b),pa.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,v,b,m),ma.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,v,b,m),ga.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,v,b,m)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),ma.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),ga.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(pa.calc(c),ma.calc(c),ga.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Us(i,e,t,n,r){const a=(n-e)*.5,o=(r-t)*.5,s=i*i,c=i*s;return(2*t-2*n+a+o)*c+(-3*t+3*n-2*a-o)*s+a*i+t}function rd(i,e){const t=1-i;return t*t*e}function ad(i,e){return 2*(1-i)*i*e}function od(i,e){return i*i*e}function Pi(i,e,t,n){return rd(i,e)+ad(i,t)+od(i,n)}function sd(i,e){const t=1-i;return t*t*t*e}function ld(i,e){const t=1-i;return 3*t*t*i*e}function cd(i,e){return 3*(1-i)*i*i*e}function ud(i,e){return i*i*i*e}function Di(i,e,t,n,r){return sd(i,e)+ld(i,t)+cd(i,n)+ud(i,r)}class Nl extends en{constructor(e=new Me,t=new Me,n=new Me,r=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Me){const n=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return n.set(Di(e,r.x,a.x,o.x,s.x),Di(e,r.y,a.y,o.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dd extends en{constructor(e=new N,t=new N,n=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new N){const n=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return n.set(Di(e,r.x,a.x,o.x,s.x),Di(e,r.y,a.y,o.y,s.y),Di(e,r.z,a.z,o.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fl extends en{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hd extends en{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ol extends en{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){const n=t,r=this.v0,a=this.v1,o=this.v2;return n.set(Pi(e,r.x,a.x,o.x),Pi(e,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fd extends en{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,r=this.v0,a=this.v1,o=this.v2;return n.set(Pi(e,r.x,a.x,o.x),Pi(e,r.y,a.y,o.y),Pi(e,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kl extends en{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const n=t,r=this.points,a=(r.length-1)*e,o=Math.floor(a),s=a-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Us(s,c.x,l.x,u.x,d.x),Us(s,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Me().fromArray(r))}return this}}var xo=Object.freeze({__proto__:null,ArcCurve:nd,CatmullRomCurve3:id,CubicBezierCurve:Nl,CubicBezierCurve3:dd,EllipseCurve:Bo,LineCurve:Fl,LineCurve3:hd,QuadraticBezierCurve:Ol,QuadraticBezierCurve3:fd,SplineCurve:kl});class pd extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let a=0;for(;a<r.length;){if(r[a]>=n){const o=r[a]-n,s=this.curves[a],c=s.getLength(),l=c===0?0:1-o/c;return s.getPointAt(l,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,a=this.curves;r<a.length;r++){const o=a[r],s=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(s);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new xo[r.type]().fromJSON(r))}return this}}class wo extends pd{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fl(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const a=new Ol(this.currentPoint.clone(),new Me(e,t),new Me(n,r));return this.curves.push(a),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,a,o){const s=new Nl(this.currentPoint.clone(),new Me(e,t),new Me(n,r),new Me(a,o));return this.curves.push(s),this.currentPoint.set(a,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new kl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,a,o){const s=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+s,t+c,n,r,a,o),this}absarc(e,t,n,r,a,o){return this.absellipse(e,t,n,n,r,a,o),this}ellipse(e,t,n,r,a,o,s,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,a,o,s,c),this}absellipse(e,t,n,r,a,o,s,c){const l=new Bo(e,t,n,r,a,o,s,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Go extends wo{constructor(e){super(e),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new wo().fromJSON(r))}return this}}function md(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let a=Bl(i,0,r,t,!0);const o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(n&&(a=xd(i,e,a,t)),i.length>80*t){s=1/0,c=1/0;let u=-1/0,d=-1/0;for(let h=t;h<r;h+=t){const f=i[h],v=i[h+1];f<s&&(s=f),v<c&&(c=v),f>u&&(u=f),v>d&&(d=v)}l=Math.max(u-s,d-c),l=l!==0?32767/l:0}return Gi(a,o,t,s,c,l,0),o}function Bl(i,e,t,n,r){let a;if(r===Cd(i,e,t,n)>0)for(let o=e;o<t;o+=n)a=Cs(o/n|0,i[o],i[o+1],a);else for(let o=t-n;o>=e;o-=n)a=Cs(o/n|0,i[o],i[o+1],a);return a&&gi(a,a.next)&&(Hi(a),a=a.next),a}function Vn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(gi(t,t.next)||st(t.prev,t,t.next)===0)){if(Hi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Gi(i,e,t,n,r,a,o){if(!i)return;!o&&a&&Rd(i,n,r,a);let s=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(a?vd(i,n,r,a):gd(i)){e.push(c.i,i.i,l.i),Hi(i),i=l.next,s=l.next;continue}if(i=l,i===s){o?o===1?(i=bd(Vn(i),e),Gi(i,e,t,n,r,a,2)):o===2&&_d(i,e,t,n,r,a):Gi(Vn(i),e,t,n,r,a,1);break}}}function gd(i){const e=i.prev,t=i,n=i.next;if(st(e,t,n)>=0)return!1;const r=e.x,a=t.x,o=n.x,s=e.y,c=t.y,l=n.y,u=Math.min(r,a,o),d=Math.min(s,c,l),h=Math.max(r,a,o),f=Math.max(s,c,l);let v=n.next;for(;v!==e;){if(v.x>=u&&v.x<=h&&v.y>=d&&v.y<=f&&Ti(r,s,a,c,o,l,v.x,v.y)&&st(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function vd(i,e,t,n){const r=i.prev,a=i,o=i.next;if(st(r,a,o)>=0)return!1;const s=r.x,c=a.x,l=o.x,u=r.y,d=a.y,h=o.y,f=Math.min(s,c,l),v=Math.min(u,d,h),b=Math.max(s,c,l),m=Math.max(u,d,h),p=Mo(f,v,e,t,n),R=Mo(b,m,e,t,n);let S=i.prevZ,_=i.nextZ;for(;S&&S.z>=p&&_&&_.z<=R;){if(S.x>=f&&S.x<=b&&S.y>=v&&S.y<=m&&S!==r&&S!==o&&Ti(s,u,c,d,l,h,S.x,S.y)&&st(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=f&&_.x<=b&&_.y>=v&&_.y<=m&&_!==r&&_!==o&&Ti(s,u,c,d,l,h,_.x,_.y)&&st(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=b&&S.y>=v&&S.y<=m&&S!==r&&S!==o&&Ti(s,u,c,d,l,h,S.x,S.y)&&st(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=R;){if(_.x>=f&&_.x<=b&&_.y>=v&&_.y<=m&&_!==r&&_!==o&&Ti(s,u,c,d,l,h,_.x,_.y)&&st(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function bd(i,e){let t=i;do{const n=t.prev,r=t.next.next;!gi(n,r)&&Gl(n,t,t.next,r)&&Vi(n,r)&&Vi(r,n)&&(e.push(n.i,t.i,r.i),Hi(t),Hi(t.next),t=i=r),t=t.next}while(t!==i);return Vn(t)}function _d(i,e,t,n,r,a){let o=i;do{let s=o.next.next;for(;s!==o.prev;){if(o.i!==s.i&&Td(o,s)){let c=Vl(o,s);o=Vn(o,o.next),c=Vn(c,c.next),Gi(o,e,t,n,r,a,0),Gi(c,e,t,n,r,a,0);return}s=s.next}o=o.next}while(o!==i)}function xd(i,e,t,n){const r=[];for(let a=0,o=e.length;a<o;a++){const s=e[a]*n,c=a<o-1?e[a+1]*n:i.length,l=Bl(i,s,c,n,!1);l===l.next&&(l.steiner=!0),r.push(Ad(l))}r.sort(wd);for(let a=0;a<r.length;a++)t=Md(r[a],t);return t}function wd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Md(i,e){const t=yd(i,e);if(!t)return e;const n=Vl(t,i);return Vn(n,n.next),Vn(t,t.next)}function yd(i,e){let t=e;const n=i.x,r=i.y;let a=-1/0,o;if(gi(i,t))return t;do{if(gi(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>a&&(a=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const s=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&zl(r<l?n:a,r,c,l,r<l?a:n,r,t.x,t.y)){const d=Math.abs(r-t.y)/(n-t.x);Vi(t,i)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Sd(o,t)))&&(o=t,u=d)}t=t.next}while(t!==s);return o}function Sd(i,e){return st(i.prev,i,e.prev)<0&&st(e.next,i,i.next)<0}function Rd(i,e,t,n){let r=i;do r.z===0&&(r.z=Mo(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Ed(r)}function Ed(i){let e,t=1;do{let n=i,r;i=null;let a=null;for(e=0;n;){e++;let o=n,s=0;for(let l=0;l<t&&(s++,o=o.nextZ,!!o);l++);let c=t;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,s--):(r=o,o=o.nextZ,c--),a?a.nextZ=r:i=r,r.prevZ=a,a=r;n=o}a.nextZ=null,t*=2}while(e>1);return i}function Mo(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ad(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function zl(i,e,t,n,r,a,o,s){return(r-o)*(e-s)>=(i-o)*(a-s)&&(i-o)*(n-s)>=(t-o)*(e-s)&&(t-o)*(a-s)>=(r-o)*(n-s)}function Ti(i,e,t,n,r,a,o,s){return!(i===o&&e===s)&&zl(i,e,t,n,r,a,o,s)}function Td(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ld(i,e)&&(Vi(i,e)&&Vi(e,i)&&Ud(i,e)&&(st(i.prev,i,e.prev)||st(i,e.prev,e))||gi(i,e)&&st(i.prev,i,i.next)>0&&st(e.prev,e,e.next)>0)}function st(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function gi(i,e){return i.x===e.x&&i.y===e.y}function Gl(i,e,t,n){const r=vr(st(i,e,t)),a=vr(st(i,e,n)),o=vr(st(t,n,i)),s=vr(st(t,n,e));return!!(r!==a&&o!==s||r===0&&gr(i,t,e)||a===0&&gr(i,n,e)||o===0&&gr(t,i,n)||s===0&&gr(t,e,n))}function gr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function vr(i){return i>0?1:i<0?-1:0}function Ld(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Gl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Vi(i,e){return st(i.prev,i,i.next)<0?st(i,e,i.next)>=0&&st(i,i.prev,e)>=0:st(i,e,i.prev)<0||st(i,i.next,e)<0}function Ud(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Vl(i,e){const t=yo(i.i,i.x,i.y),n=yo(e.i,e.x,e.y),r=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function Cs(i,e,t,n){const r=yo(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Hi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cd(i,e,t,n){let r=0;for(let a=e,o=t-n;a<t;a+=n)r+=(i[o]-i[a])*(i[a+1]+i[o+1]),o=a;return r}class Pd{static triangulate(e,t,n=2){return md(e,t,n)}}class Zt{static area(e){const t=e.length;let n=0;for(let r=t-1,a=0;a<t;r=a++)n+=e[r].x*e[a].y-e[a].x*e[r].y;return n*.5}static isClockWise(e){return Zt.area(e)<0}static triangulateShape(e,t){const n=[],r=[],a=[];Ps(e),Ds(n,e);let o=e.length;t.forEach(Ps);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Ds(n,t[c]);const s=Pd.triangulate(n,r);for(let c=0;c<s.length;c+=3)a.push(s.slice(c,c+3));return a}}function Ps(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ds(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Vo extends Bt{constructor(e=new Go([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],a=[];for(let s=0,c=e.length;s<c;s++){const l=e[s];o(l)}this.setAttribute("position",new dt(r,3)),this.setAttribute("uv",new dt(a,2)),this.computeVertexNormals();function o(s){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:Dd;let S,_=!1,T,A,U,P;p&&(S=p.getSpacedPoints(u),_=!0,h=!1,T=p.computeFrenetFrames(u,!1),A=new N,U=new N,P=new N),h||(m=0,f=0,v=0,b=0);const y=s.extractPoints(l);let w=y.shape;const L=y.holes;if(!Zt.isClockWise(w)){w=w.reverse();for(let oe=0,te=L.length;oe<te;oe++){const ee=L[oe];Zt.isClockWise(ee)&&(L[oe]=ee.reverse())}}function z(oe){const ee=10000000000000001e-36;let D=oe[0];for(let Q=1;Q<=oe.length;Q++){const ne=Q%oe.length,ie=oe[ne],V=ie.x-D.x,ce=ie.y-D.y,x=V*V+ce*ce,g=Math.max(Math.abs(ie.x),Math.abs(ie.y),Math.abs(D.x),Math.abs(D.y)),C=ee*g*g;if(x<=C){oe.splice(ne,1),Q--;continue}D=ie}}z(w),L.forEach(z);const W=L.length,Y=w;for(let oe=0;oe<W;oe++){const te=L[oe];w=w.concat(te)}function X(oe,te,ee){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(te,ee)}const ae=w.length;function q(oe,te,ee){let D,Q,ne;const ie=oe.x-te.x,V=oe.y-te.y,ce=ee.x-oe.x,x=ee.y-oe.y,g=ie*ie+V*V,C=ie*x-V*ce;if(Math.abs(C)>Number.EPSILON){const B=Math.sqrt(g),Z=Math.sqrt(ce*ce+x*x),G=te.x-V/B,ye=te.y+ie/B,le=ee.x-x/Z,xe=ee.y+ce/Z,ve=((le-G)*x-(xe-ye)*ce)/(ie*x-V*ce);D=G+ie*ve-oe.x,Q=ye+V*ve-oe.y;const se=D*D+Q*Q;if(se<=2)return new Me(D,Q);ne=Math.sqrt(se/2)}else{let B=!1;ie>Number.EPSILON?ce>Number.EPSILON&&(B=!0):ie<-Number.EPSILON?ce<-Number.EPSILON&&(B=!0):Math.sign(V)===Math.sign(x)&&(B=!0),B?(D=-V,Q=ie,ne=Math.sqrt(g)):(D=ie,Q=V,ne=Math.sqrt(g/2))}return new Me(D/ne,Q/ne)}const de=[];for(let oe=0,te=Y.length,ee=te-1,D=oe+1;oe<te;oe++,ee++,D++)ee===te&&(ee=0),D===te&&(D=0),de[oe]=q(Y[oe],Y[ee],Y[D]);const be=[];let Ee,$=de.concat();for(let oe=0,te=W;oe<te;oe++){const ee=L[oe];Ee=[];for(let D=0,Q=ee.length,ne=Q-1,ie=D+1;D<Q;D++,ne++,ie++)ne===Q&&(ne=0),ie===Q&&(ie=0),Ee[D]=q(ee[D],ee[ne],ee[ie]);be.push(Ee),$=$.concat(Ee)}let Te;if(m===0)Te=Zt.triangulateShape(Y,L);else{const oe=[],te=[];for(let ee=0;ee<m;ee++){const D=ee/m,Q=f*Math.cos(D*Math.PI/2),ne=v*Math.sin(D*Math.PI/2)+b;for(let ie=0,V=Y.length;ie<V;ie++){const ce=X(Y[ie],de[ie],ne);_e(ce.x,ce.y,-Q),D===0&&oe.push(ce)}for(let ie=0,V=W;ie<V;ie++){const ce=L[ie];Ee=be[ie];const x=[];for(let g=0,C=ce.length;g<C;g++){const B=X(ce[g],Ee[g],ne);_e(B.x,B.y,-Q),D===0&&x.push(B)}D===0&&te.push(x)}}Te=Zt.triangulateShape(oe,te)}const Fe=Te.length,Ue=v+b;for(let oe=0;oe<ae;oe++){const te=h?X(w[oe],$[oe],Ue):w[oe];_?(U.copy(T.normals[0]).multiplyScalar(te.x),A.copy(T.binormals[0]).multiplyScalar(te.y),P.copy(S[0]).add(U).add(A),_e(P.x,P.y,P.z)):_e(te.x,te.y,0)}for(let oe=1;oe<=u;oe++)for(let te=0;te<ae;te++){const ee=h?X(w[te],$[te],Ue):w[te];_?(U.copy(T.normals[oe]).multiplyScalar(ee.x),A.copy(T.binormals[oe]).multiplyScalar(ee.y),P.copy(S[oe]).add(U).add(A),_e(P.x,P.y,P.z)):_e(ee.x,ee.y,d/u*oe)}for(let oe=m-1;oe>=0;oe--){const te=oe/m,ee=f*Math.cos(te*Math.PI/2),D=v*Math.sin(te*Math.PI/2)+b;for(let Q=0,ne=Y.length;Q<ne;Q++){const ie=X(Y[Q],de[Q],D);_e(ie.x,ie.y,d+ee)}for(let Q=0,ne=L.length;Q<ne;Q++){const ie=L[Q];Ee=be[Q];for(let V=0,ce=ie.length;V<ce;V++){const x=X(ie[V],Ee[V],D);_?_e(x.x,x.y+S[u-1].y,S[u-1].x+ee):_e(x.x,x.y,d+ee)}}}H(),j();function H(){const oe=r.length/3;if(h){let te=0,ee=ae*te;for(let D=0;D<Fe;D++){const Q=Te[D];ge(Q[2]+ee,Q[1]+ee,Q[0]+ee)}te=u+m*2,ee=ae*te;for(let D=0;D<Fe;D++){const Q=Te[D];ge(Q[0]+ee,Q[1]+ee,Q[2]+ee)}}else{for(let te=0;te<Fe;te++){const ee=Te[te];ge(ee[2],ee[1],ee[0])}for(let te=0;te<Fe;te++){const ee=Te[te];ge(ee[0]+ae*u,ee[1]+ae*u,ee[2]+ae*u)}}n.addGroup(oe,r.length/3-oe,0)}function j(){const oe=r.length/3;let te=0;me(Y,te),te+=Y.length;for(let ee=0,D=L.length;ee<D;ee++){const Q=L[ee];me(Q,te),te+=Q.length}n.addGroup(oe,r.length/3-oe,1)}function me(oe,te){let ee=oe.length;for(;--ee>=0;){const D=ee;let Q=ee-1;Q<0&&(Q=oe.length-1);for(let ne=0,ie=u+m*2;ne<ie;ne++){const V=ae*ne,ce=ae*(ne+1),x=te+D+V,g=te+Q+V,C=te+Q+ce,B=te+D+ce;ze(x,g,C,B)}}}function _e(oe,te,ee){c.push(oe),c.push(te),c.push(ee)}function ge(oe,te,ee){je(oe),je(te),je(ee);const D=r.length/3,Q=R.generateTopUV(n,r,D-3,D-2,D-1);E(Q[0]),E(Q[1]),E(Q[2])}function ze(oe,te,ee,D){je(oe),je(te),je(D),je(te),je(ee),je(D);const Q=r.length/3,ne=R.generateSideWallUV(n,r,Q-6,Q-3,Q-2,Q-1);E(ne[0]),E(ne[1]),E(ne[3]),E(ne[1]),E(ne[2]),E(ne[3])}function je(oe){r.push(c[oe*3+0]),r.push(c[oe*3+1]),r.push(c[oe*3+2])}function E(oe){a.push(oe.x),a.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Id(t,n,e)}static fromJSON(e,t){const n=[];for(let a=0,o=e.shapes.length;a<o;a++){const s=t[e.shapes[a]];n.push(s)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new xo[r.type]().fromJSON(r)),new Vo(n,e.options)}}const Dd={generateTopUV:function(i,e,t,n,r){const a=e[t*3],o=e[t*3+1],s=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new Me(a,o),new Me(s,c),new Me(l,u)]},generateSideWallUV:function(i,e,t,n,r,a){const o=e[t*3],s=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[r*3],f=e[r*3+1],v=e[r*3+2],b=e[a*3],m=e[a*3+1],p=e[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new Me(o,1-c),new Me(l,1-d),new Me(h,1-v),new Me(b,1-p)]:[new Me(s,1-c),new Me(u,1-d),new Me(f,1-v),new Me(m,1-p)]}};function Id(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const a=i[n];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zi extends Bt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(n),c=Math.floor(r),l=s+1,u=c+1,d=e/s,h=t/c,f=[],v=[],b=[],m=[];for(let p=0;p<u;p++){const R=p*h-o;for(let S=0;S<l;S++){const _=S*d-a;v.push(_,-R,0),b.push(0,0,1),m.push(S/s),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let R=0;R<s;R++){const S=R+l*p,_=R+l*(p+1),T=R+1+l*(p+1),A=R+1+l*p;f.push(S,_,A),f.push(_,T,A)}this.setIndex(f),this.setAttribute("position",new dt(v,3)),this.setAttribute("normal",new dt(b,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ii extends Bt{constructor(e=new Go([new Me(0,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],a=[],o=[];let s=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(s,c,u),s+=c,c=0;this.setIndex(n),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(o,2));function l(u){const d=r.length/3,h=u.extractPoints(t);let f=h.shape;const v=h.holes;Zt.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=v.length;m<p;m++){const R=v[m];Zt.isClockWise(R)===!0&&(v[m]=R.reverse())}const b=Zt.triangulateShape(f,v);for(let m=0,p=v.length;m<p;m++){const R=v[m];f=f.concat(R)}for(let m=0,p=f.length;m<p;m++){const R=f[m];r.push(R.x,R.y,0),a.push(0,0,1),o.push(R.x,R.y)}for(let m=0,p=b.length;m<p;m++){const R=b[m],S=R[0]+d,_=R[1]+d,T=R[2]+d;n.push(S,_,T),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Nd(t,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}return new Ii(n,e.curveSegments)}}function Nd(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Hl extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fd extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Od extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const va={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class kd{constructor(e,t,n){const r=this;let a=!1,o=0,s=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){s++,a===!1&&r.onStart!==void 0&&r.onStart(u,o,s),a=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],v=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Bd=new kd;class Ho{constructor(e){this.manager=e!==void 0?e:Bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ho.DEFAULT_MATERIAL_NAME="__DEFAULT";const ii=new WeakMap;class zd extends Ho{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=va.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0);else{let d=ii.get(o);d===void 0&&(d=[],ii.set(o,d)),d.push({onLoad:t,onError:r})}return o}const s=Bi("img");function c(){u(),t&&t(this);const d=ii.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}ii.delete(this),a.manager.itemEnd(e)}function l(d){u(),r&&r(d),va.remove(`image:${e}`);const h=ii.get(this)||[];for(let f=0;f<h.length;f++){const v=h[f];v.onError&&v.onError(d)}ii.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),va.add(`image:${e}`,s),a.manager.itemStart(e),s.src=e,s}}class Gd extends Ho{constructor(e){super(e)}load(e,t,n,r){const a=new gt,o=new zd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class Wl extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Xl extends Wl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ba=new lt,Is=new N,Ns=new N;class Vd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Is.setFromMatrixPosition(e.matrixWorld),t.position.copy(Is),Ns.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ns),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wo extends Cl{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,s-=u*this.view.offsetY,c=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hd extends Vd{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class So extends Wl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Hd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wd extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Fs(i,e,t,n){const r=Xd(n);switch(t){case bl:return i*e;case xl:return i*e/r.components*r.byteLength;case Po:return i*e/r.components*r.byteLength;case wl:return i*e*2/r.components*r.byteLength;case Do:return i*e*2/r.components*r.byteLength;case _l:return i*e*3/r.components*r.byteLength;case Wt:return i*e*4/r.components*r.byteLength;case Io:return i*e*4/r.components*r.byteLength;case yr:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(e,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(e,8)/2;case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ho:case fo:case po:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mo:case go:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vo:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xd(i){switch(i){case jt:case pl:return{byteLength:1,components:1};case Ni:case ml:case Wi:return{byteLength:2,components:1};case Uo:case Co:return{byteLength:2,components:4};case zn:case Lo:case dn:return{byteLength:4,components:1};case gl:case vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ql(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function qd(i){const e=new WeakMap;function t(s,c){const l=s.array,u=s.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),s.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)s.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:d}}function n(s,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,s),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,v)=>f.start-v.start);let h=0;for(let f=1;f<d.length;f++){const v=d[h],b=d[f];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++h,d[h]=b)}d.length=h+1;for(let f=0,v=d.length;f<v;f++){const b=d[f];i.bufferSubData(l,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);c&&(i.deleteBuffer(c.buffer),e.delete(s))}function o(s,c){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const u=e.get(s);(!u||u.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const l=e.get(s);if(l===void 0)e.set(s,t(s,c));else if(l.version<s.version){if(l.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,s,c),l.version=s.version}}return{get:r,remove:a,update:o}}var Yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
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
#endif`,Kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
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
#endif`,eh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,th=`#ifdef USE_BATCHING
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
#endif`,nh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ih=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ah=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oh=`#ifdef USE_IRIDESCENCE
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
#endif`,sh=`#ifdef USE_BUMPMAP
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
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gh=`#define PI 3.141592653589793
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
} // validated`,vh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bh=`vec3 transformedNormal = objectNormal;
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
#endif`,_h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rh=`#ifdef USE_ENVMAP
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
#endif`,Eh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ah=`#ifdef USE_ENVMAP
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
#endif`,Th=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ch=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ph=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ih=`#ifdef USE_GRADIENTMAP
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
}`,Nh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kh=`uniform bool receiveShadow;
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
#endif`,Bh=`#ifdef USE_ENVMAP
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
#endif`,zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wh=`PhysicalMaterial material;
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
#endif`,Xh=`struct PhysicalMaterial {
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
}`,qh=`
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
#endif`,Yh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$h=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nf=`#if defined( USE_POINTS_UV )
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
#endif`,rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`#ifdef USE_MORPHTARGETS
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
#endif`,uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gf=`#ifdef USE_NORMALMAP
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
#endif`,vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pf=`float getShadowMask() {
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
}`,Df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,If=`#ifdef USE_SKINNING
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
#endif`,Nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ff=`#ifdef USE_SKINNING
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
#endif`,Of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gf=`#ifdef USE_TRANSMISSION
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
#endif`,Vf=`#ifdef USE_TRANSMISSION
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
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zf=`uniform sampler2D t2D;
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`#include <common>
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
}`,ep=`#if DEPTH_PACKING == 3200
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
}`,tp=`#define DISTANCE
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
}`,np=`#define DISTANCE
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
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`uniform float scale;
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
}`,op=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,lp=`uniform vec3 diffuse;
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
}`,cp=`#define LAMBERT
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
}`,up=`#define LAMBERT
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
}`,dp=`#define MATCAP
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
}`,hp=`#define MATCAP
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
}`,fp=`#define NORMAL
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
}`,pp=`#define NORMAL
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
}`,mp=`#define PHONG
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
}`,gp=`#define PHONG
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
}`,vp=`#define STANDARD
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
}`,bp=`#define STANDARD
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
}`,_p=`#define TOON
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
}`,xp=`#define TOON
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
}`,wp=`uniform float size;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,yp=`#include <common>
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
}`,Sp=`uniform vec3 color;
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
}`,Rp=`uniform float rotation;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Yd,alphahash_pars_fragment:Zd,alphamap_fragment:Kd,alphamap_pars_fragment:Jd,alphatest_fragment:jd,alphatest_pars_fragment:Qd,aomap_fragment:$d,aomap_pars_fragment:eh,batching_pars_vertex:th,batching_vertex:nh,begin_vertex:ih,beginnormal_vertex:rh,bsdfs:ah,iridescence_fragment:oh,bumpmap_pars_fragment:sh,clipping_planes_fragment:lh,clipping_planes_pars_fragment:ch,clipping_planes_pars_vertex:uh,clipping_planes_vertex:dh,color_fragment:hh,color_pars_fragment:fh,color_pars_vertex:ph,color_vertex:mh,common:gh,cube_uv_reflection_fragment:vh,defaultnormal_vertex:bh,displacementmap_pars_vertex:_h,displacementmap_vertex:xh,emissivemap_fragment:wh,emissivemap_pars_fragment:Mh,colorspace_fragment:yh,colorspace_pars_fragment:Sh,envmap_fragment:Rh,envmap_common_pars_fragment:Eh,envmap_pars_fragment:Ah,envmap_pars_vertex:Th,envmap_physical_pars_fragment:Bh,envmap_vertex:Lh,fog_vertex:Uh,fog_pars_vertex:Ch,fog_fragment:Ph,fog_pars_fragment:Dh,gradientmap_pars_fragment:Ih,lightmap_pars_fragment:Nh,lights_lambert_fragment:Fh,lights_lambert_pars_fragment:Oh,lights_pars_begin:kh,lights_toon_fragment:zh,lights_toon_pars_fragment:Gh,lights_phong_fragment:Vh,lights_phong_pars_fragment:Hh,lights_physical_fragment:Wh,lights_physical_pars_fragment:Xh,lights_fragment_begin:qh,lights_fragment_maps:Yh,lights_fragment_end:Zh,logdepthbuf_fragment:Kh,logdepthbuf_pars_fragment:Jh,logdepthbuf_pars_vertex:jh,logdepthbuf_vertex:Qh,map_fragment:$h,map_pars_fragment:ef,map_particle_fragment:tf,map_particle_pars_fragment:nf,metalnessmap_fragment:rf,metalnessmap_pars_fragment:af,morphinstance_vertex:of,morphcolor_vertex:sf,morphnormal_vertex:lf,morphtarget_pars_vertex:cf,morphtarget_vertex:uf,normal_fragment_begin:df,normal_fragment_maps:hf,normal_pars_fragment:ff,normal_pars_vertex:pf,normal_vertex:mf,normalmap_pars_fragment:gf,clearcoat_normal_fragment_begin:vf,clearcoat_normal_fragment_maps:bf,clearcoat_pars_fragment:_f,iridescence_pars_fragment:xf,opaque_fragment:wf,packing:Mf,premultiplied_alpha_fragment:yf,project_vertex:Sf,dithering_fragment:Rf,dithering_pars_fragment:Ef,roughnessmap_fragment:Af,roughnessmap_pars_fragment:Tf,shadowmap_pars_fragment:Lf,shadowmap_pars_vertex:Uf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Pf,skinbase_vertex:Df,skinning_pars_vertex:If,skinning_vertex:Nf,skinnormal_vertex:Ff,specularmap_fragment:Of,specularmap_pars_fragment:kf,tonemapping_fragment:Bf,tonemapping_pars_fragment:zf,transmission_fragment:Gf,transmission_pars_fragment:Vf,uv_pars_fragment:Hf,uv_pars_vertex:Wf,uv_vertex:Xf,worldpos_vertex:qf,background_vert:Yf,background_frag:Zf,backgroundCube_vert:Kf,backgroundCube_frag:Jf,cube_vert:jf,cube_frag:Qf,depth_vert:$f,depth_frag:ep,distanceRGBA_vert:tp,distanceRGBA_frag:np,equirect_vert:ip,equirect_frag:rp,linedashed_vert:ap,linedashed_frag:op,meshbasic_vert:sp,meshbasic_frag:lp,meshlambert_vert:cp,meshlambert_frag:up,meshmatcap_vert:dp,meshmatcap_frag:hp,meshnormal_vert:fp,meshnormal_frag:pp,meshphong_vert:mp,meshphong_frag:gp,meshphysical_vert:vp,meshphysical_frag:bp,meshtoon_vert:_p,meshtoon_frag:xp,points_vert:wp,points_frag:Mp,shadow_vert:yp,shadow_frag:Sp,sprite_vert:Rp,sprite_frag:Ep},Re={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},qt={basic:{uniforms:wt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:wt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:wt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:wt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:wt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:wt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:wt([Re.points,Re.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:wt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:wt([Re.common,Re.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:wt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:wt([Re.sprite,Re.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:wt([Re.common,Re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:wt([Re.lights,Re.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};qt.physical={uniforms:wt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const br={r:0,b:0,g:0},Dn=new Qt,Ap=new lt;function Tp(i,e,t,n,r,a,o){const s=new Ze(0);let c=a===!0?0:1,l,u,d=null,h=0,f=null;function v(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:e).get(_)),_}function b(S){let _=!1;const T=v(S);T===null?p(s,c):T&&T.isColor&&(p(T,1),_=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,_){const T=v(_);T&&(T.isCubeTexture||T.mapping===Fr)?(u===void 0&&(u=new ut(new Yi(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:mi(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Dn.copy(_.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ap.makeRotationFromEuler(Dn)),u.material.toneMapped=Je.getTransfer(T.colorSpace)!==et,(d!==T||h!==T.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=T,h=T.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new ut(new Zi(2,2),new mn({name:"BackgroundMaterial",uniforms:mi(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Je.getTransfer(T.colorSpace)!==et,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||h!==T.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=T,h=T.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,_){S.getRGB(br,Ul(i)),n.buffers.color.setClear(br.r,br.g,br.b,_,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(S,_=1){s.set(S),c=_,p(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(s,c)},render:b,addToRenderList:m,dispose:R}}function Lp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let a=r,o=!1;function s(w,L,k,z,W){let Y=!1;const X=d(z,k,L);a!==X&&(a=X,l(a.object)),Y=f(w,z,k,W),Y&&v(w,z,k,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,_(w,L,k,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function d(w,L,k){const z=k.wireframe===!0;let W=n[w.id];W===void 0&&(W={},n[w.id]=W);let Y=W[L.id];Y===void 0&&(Y={},W[L.id]=Y);let X=Y[z];return X===void 0&&(X=h(c()),Y[z]=X),X}function h(w){const L=[],k=[],z=[];for(let W=0;W<t;W++)L[W]=0,k[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:z,object:w,attributes:{},index:null}}function f(w,L,k,z){const W=a.attributes,Y=L.attributes;let X=0;const ae=k.getAttributes();for(const q in ae)if(ae[q].location>=0){const be=W[q];let Ee=Y[q];if(Ee===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(Ee=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(Ee=w.instanceColor)),be===void 0||be.attribute!==Ee||Ee&&be.data!==Ee.data)return!0;X++}return a.attributesNum!==X||a.index!==z}function v(w,L,k,z){const W={},Y=L.attributes;let X=0;const ae=k.getAttributes();for(const q in ae)if(ae[q].location>=0){let be=Y[q];be===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(be=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(be=w.instanceColor));const Ee={};Ee.attribute=be,be&&be.data&&(Ee.data=be.data),W[q]=Ee,X++}a.attributes=W,a.attributesNum=X,a.index=z}function b(){const w=a.newAttributes;for(let L=0,k=w.length;L<k;L++)w[L]=0}function m(w){p(w,0)}function p(w,L){const k=a.newAttributes,z=a.enabledAttributes,W=a.attributeDivisors;k[w]=1,z[w]===0&&(i.enableVertexAttribArray(w),z[w]=1),W[w]!==L&&(i.vertexAttribDivisor(w,L),W[w]=L)}function R(){const w=a.newAttributes,L=a.enabledAttributes;for(let k=0,z=L.length;k<z;k++)L[k]!==w[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function S(w,L,k,z,W,Y,X){X===!0?i.vertexAttribIPointer(w,L,k,W,Y):i.vertexAttribPointer(w,L,k,z,W,Y)}function _(w,L,k,z){b();const W=z.attributes,Y=k.getAttributes(),X=L.defaultAttributeValues;for(const ae in Y){const q=Y[ae];if(q.location>=0){let de=W[ae];if(de===void 0&&(ae==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),ae==="instanceColor"&&w.instanceColor&&(de=w.instanceColor)),de!==void 0){const be=de.normalized,Ee=de.itemSize,$=e.get(de);if($===void 0)continue;const Te=$.buffer,Fe=$.type,Ue=$.bytesPerElement,H=Fe===i.INT||Fe===i.UNSIGNED_INT||de.gpuType===Lo;if(de.isInterleavedBufferAttribute){const j=de.data,me=j.stride,_e=de.offset;if(j.isInstancedInterleavedBuffer){for(let ge=0;ge<q.locationSize;ge++)p(q.location+ge,j.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<q.locationSize;ge++)m(q.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let ge=0;ge<q.locationSize;ge++)S(q.location+ge,Ee/q.locationSize,Fe,be,me*Ue,(_e+Ee/q.locationSize*ge)*Ue,H)}else{if(de.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)p(q.location+j,de.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let j=0;j<q.locationSize;j++)m(q.location+j);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let j=0;j<q.locationSize;j++)S(q.location+j,Ee/q.locationSize,Fe,be,Ee*Ue,Ee/q.locationSize*j*Ue,H)}}else if(X!==void 0){const be=X[ae];if(be!==void 0)switch(be.length){case 2:i.vertexAttrib2fv(q.location,be);break;case 3:i.vertexAttrib3fv(q.location,be);break;case 4:i.vertexAttrib4fv(q.location,be);break;default:i.vertexAttrib1fv(q.location,be)}}}}R()}function T(){P();for(const w in n){const L=n[w];for(const k in L){const z=L[k];for(const W in z)u(z[W].object),delete z[W];delete L[k]}delete n[w]}}function A(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const k in L){const z=L[k];for(const W in z)u(z[W].object),delete z[W];delete L[k]}delete n[w.id]}function U(w){for(const L in n){const k=n[L];if(k[w.id]===void 0)continue;const z=k[w.id];for(const W in z)u(z[W].object),delete z[W];delete k[w.id]}}function P(){y(),o=!0,a!==r&&(a=r,l(a.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:P,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:b,enableAttribute:m,disableUnusedAttributes:R}}function Up(i,e,t){let n;function r(l){n=l}function a(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function s(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let v=0;v<d;v++)f+=u[v];t.update(f,n,1)}function c(l,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<l.length;v++)o(l[v],u[v],h[v]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let v=0;for(let b=0;b<d;b++)v+=u[b]*h[b];t.update(v,n,1)}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Cp(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(U){return!(U!==Wt&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(U){const P=U===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==jt&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==dn&&!P)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:T,maxSamples:A}}function Pp(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new Nn,s=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const v=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||v===null||v.length===0||a&&!m)a?u(null):l();else{const R=a?0:n,S=R*4;let _=p.clippingState||null;c.value=_,_=u(v,h,S,f);for(let T=0;T!==S;++T)_[T]=t[T];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,v){const b=d!==null?d.length:0;let m=null;if(b!==0){if(m=c.value,v!==!0||m===null){const p=f+b*4,R=h.matrixWorldInverse;s.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=f;S!==b;++S,_+=4)o.copy(d[S]).applyMatrix4(R,s),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Dp(i){let e=new WeakMap;function t(o,s){return s===za?o.mapping=di:s===Ga&&(o.mapping=hi),o}function n(o){if(o&&o.isTexture){const s=o.mapping;if(s===za||s===Ga)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ju(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const ai=4,Os=[.125,.215,.35,.446,.526,.582],kn=20,_a=new Wo,ks=new Ze;let xa=null,wa=0,Ma=0,ya=!1;const Fn=(1+Math.sqrt(5))/2,ri=1/Fn,Bs=[new N(-Fn,ri,0),new N(Fn,ri,0),new N(-ri,0,Fn),new N(ri,0,Fn),new N(0,Fn,-ri),new N(0,Fn,ri),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Ip=new N;class zs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,a={}){const{size:o=256,position:s=Ip}=a;xa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,s),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xa,wa,Ma),this._renderer.xr.enabled=ya,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Wi,format:Wt,colorSpace:fi,depthBuffer:!1},r=Gs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gs(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Np(a)),this._blurMaterial=Fp(a,e,t)}return r}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,n,r,a){const c=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(ks),d.toneMapping=hn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const b=new pi({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),m=new ut(new Yi,b);let p=!1;const R=e.background;R?R.isColor&&(b.color.copy(R),e.background=null,p=!0):(b.color.copy(ks),p=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(c.up.set(0,l[S],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+u[S],a.y,a.z)):_===1?(c.up.set(0,0,l[S]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+u[S],a.z)):(c.up.set(0,l[S],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+u[S]));const T=this._cubeSize;_r(r,_*T,S>2?T:0,T,T),d.setRenderTarget(r),p&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=R}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===di||e.mapping===hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vs());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const c=this._cubeSize;_r(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,_a)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Bs[(r-a-1)%Bs.length];this._blur(e,a-1,a,o,s)}t.autoClear=n}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ut(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[n]-1,v=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*kn-1),b=a/v,m=isFinite(a)?1+Math.floor(u*b):kn;m>kn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const p=[];let R=0;for(let U=0;U<kn;++U){const P=U/b,y=Math.exp(-P*P/2);p.push(y),U===0?R+=y:U<m&&(R+=2*y)}for(let U=0;U<p.length;U++)p[U]=p[U]/R;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:S}=this;h.dTheta.value=v,h.mipInt.value=S-n;const _=this._sizeLods[r],T=3*_*(r>S-ai?r-S+ai:0),A=4*(this._cubeSize-_);_r(t,T,A,3*_,2*_),c.setRenderTarget(t),c.render(d,_a)}}function Np(i){const e=[],t=[],n=[];let r=i;const a=i-ai+1+Os.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>i-ai?c=Os[o-i+ai-1]:o===0&&(c=0),n.push(c);const l=1/(s-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,v=6,b=3,m=2,p=1,R=new Float32Array(b*v*f),S=new Float32Array(m*v*f),_=new Float32Array(p*v*f);for(let A=0;A<f;A++){const U=A%3*2/3-1,P=A>2?0:-1,y=[U,P,0,U+2/3,P,0,U+2/3,P+1,0,U,P,0,U+2/3,P+1,0,U,P+1,0];R.set(y,b*v*A),S.set(h,m*v*A);const w=[A,A,A,A,A,A];_.set(w,p*v*A)}const T=new Bt;T.setAttribute("position",new Jt(R,b)),T.setAttribute("uv",new Jt(S,m)),T.setAttribute("faceIndex",new Jt(_,p)),e.push(T),r>ai&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gs(i,e,t){const n=new Gn(i,e,t);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Fp(i,e,t){const n=new Float32Array(kn),r=new N(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Vs(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Hs(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Xo(){return`

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
	`}function Op(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===za||c===Ga,u=c===di||c===hi;if(l||u){let d=e.get(s);const h=d!==void 0?d.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return t===null&&(t=new zs(i)),d=l?t.fromEquirectangular(s,d):t.fromCubemap(s,d),d.texture.pmremVersion=s.pmremVersion,e.set(s,d),d.texture;if(d!==void 0)return d.texture;{const f=s.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new zs(i)),d=l?t.fromEquirectangular(s):t.fromCubemap(s),d.texture.pmremVersion=s.pmremVersion,e.set(s,d),s.addEventListener("dispose",a),d.texture):null}}}return s}function r(s){let c=0;const l=6;for(let u=0;u<l;u++)s[u]!==void 0&&c++;return c===l}function a(s){const c=s.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&zi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Bp(i,e,t,n){const r={},a=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const f=a.get(h);f&&(e.remove(f),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,v=d.attributes.position;let b=0;if(f!==null){const R=f.array;b=f.version;for(let S=0,_=R.length;S<_;S+=3){const T=R[S+0],A=R[S+1],U=R[S+2];h.push(T,A,A,U,U,T)}}else if(v!==void 0){const R=v.array;b=v.version;for(let S=0,_=R.length/3-1;S<_;S+=3){const T=S+0,A=S+1,U=S+2;h.push(T,A,A,U,U,T)}}else return;const m=new(Sl(h)?Ll:Tl)(h,1);m.version=b;const p=a.get(d);p&&e.remove(p),a.set(d,m)}function u(d){const h=a.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return a.get(d)}return{get:s,update:c,getWireframeAttribute:u}}function zp(i,e,t){let n;function r(h){n=h}let a,o;function s(h){a=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,a,h*o),t.update(f,n,1)}function l(h,f,v){v!==0&&(i.drawElementsInstanced(n,f,a,h*o,v),t.update(f,n,v))}function u(h,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,h,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];t.update(m,n,1)}function d(h,f,v,b){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,a,h,0,b,0,v);let p=0;for(let R=0;R<v;R++)p+=f[R]*b[R];t.update(p,n,1)}}this.setMode=r,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Gp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Vp(i,e,t){const n=new WeakMap,r=new ot;function a(o,s,c){const l=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(s);if(h===void 0||h.count!==d){let y=function(){U.dispose(),n.delete(s),s.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();const f=s.morphAttributes.position!==void 0,v=s.morphAttributes.normal!==void 0,b=s.morphAttributes.color!==void 0,m=s.morphAttributes.position||[],p=s.morphAttributes.normal||[],R=s.morphAttributes.color||[];let S=0;f===!0&&(S=1),v===!0&&(S=2),b===!0&&(S=3);let _=s.attributes.position.count*S,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const A=new Float32Array(_*T*4*d),U=new Rl(A,_,T,d);U.type=dn,U.needsUpdate=!0;const P=S*4;for(let w=0;w<d;w++){const L=m[w],k=p[w],z=R[w],W=_*T*4*w;for(let Y=0;Y<L.count;Y++){const X=Y*P;f===!0&&(r.fromBufferAttribute(L,Y),A[W+X+0]=r.x,A[W+X+1]=r.y,A[W+X+2]=r.z,A[W+X+3]=0),v===!0&&(r.fromBufferAttribute(k,Y),A[W+X+4]=r.x,A[W+X+5]=r.y,A[W+X+6]=r.z,A[W+X+7]=0),b===!0&&(r.fromBufferAttribute(z,Y),A[W+X+8]=r.x,A[W+X+9]=r.y,A[W+X+10]=r.z,A[W+X+11]=z.itemSize===4?r.w:1)}}h={count:d,texture:U,size:new Me(_,T)},n.set(s,h),s.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];const v=s.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:a}}function Hp(i,e,t,n){let r=new WeakMap;function a(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}const Yl=new gt,Ws=new Dl(1,1),Zl=new Rl,Kl=new Pu,Jl=new Pl,Xs=[],qs=[],Ys=new Float32Array(16),Zs=new Float32Array(9),Ks=new Float32Array(4);function wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Xs[r];if(a===void 0&&(a=new Float32Array(r),Xs[r]=a),e!==0){n.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Br(i,e){let t=qs[e];t===void 0&&(t=new Int32Array(e),qs[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Zp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Ks.set(n),i.uniformMatrix2fv(this.addr,!1,Ks),pt(t,n)}}function Kp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Zs.set(n),i.uniformMatrix3fv(this.addr,!1,Zs),pt(t,n)}}function Jp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Ys.set(n),i.uniformMatrix4fv(this.addr,!1,Ys),pt(t,n)}}function jp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function am(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Ws.compareFunction=yl,a=Ws):a=Yl,t.setTexture2D(e||a,r)}function om(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Kl,r)}function sm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Jl,r)}function lm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Zl,r)}function cm(i){switch(i){case 5126:return Wp;case 35664:return Xp;case 35665:return qp;case 35666:return Yp;case 35674:return Zp;case 35675:return Kp;case 35676:return Jp;case 5124:case 35670:return jp;case 35667:case 35671:return Qp;case 35668:case 35672:return $p;case 35669:case 35673:return em;case 5125:return tm;case 36294:return nm;case 36295:return im;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return lm}}function um(i,e){i.uniform1fv(this.addr,e)}function dm(i,e){const t=wi(e,this.size,2);i.uniform2fv(this.addr,t)}function hm(i,e){const t=wi(e,this.size,3);i.uniform3fv(this.addr,t)}function fm(i,e){const t=wi(e,this.size,4);i.uniform4fv(this.addr,t)}function pm(i,e){const t=wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mm(i,e){const t=wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gm(i,e){const t=wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vm(i,e){i.uniform1iv(this.addr,e)}function bm(i,e){i.uniform2iv(this.addr,e)}function _m(i,e){i.uniform3iv(this.addr,e)}function xm(i,e){i.uniform4iv(this.addr,e)}function wm(i,e){i.uniform1uiv(this.addr,e)}function Mm(i,e){i.uniform2uiv(this.addr,e)}function ym(i,e){i.uniform3uiv(this.addr,e)}function Sm(i,e){i.uniform4uiv(this.addr,e)}function Rm(i,e,t){const n=this.cache,r=e.length,a=Br(t,r);ft(n,a)||(i.uniform1iv(this.addr,a),pt(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Yl,a[o])}function Em(i,e,t){const n=this.cache,r=e.length,a=Br(t,r);ft(n,a)||(i.uniform1iv(this.addr,a),pt(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Kl,a[o])}function Am(i,e,t){const n=this.cache,r=e.length,a=Br(t,r);ft(n,a)||(i.uniform1iv(this.addr,a),pt(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Jl,a[o])}function Tm(i,e,t){const n=this.cache,r=e.length,a=Br(t,r);ft(n,a)||(i.uniform1iv(this.addr,a),pt(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Zl,a[o])}function Lm(i){switch(i){case 5126:return um;case 35664:return dm;case 35665:return hm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return vm;case 35667:case 35671:return bm;case 35668:case 35672:return _m;case 35669:case 35673:return xm;case 5125:return wm;case 36294:return Mm;case 36295:return ym;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Tm}}class Um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cm(t.type)}}class Cm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lm(t.type)}}class Pm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Js(i,e){i.seq.push(e),i.map[e.id]=e}function Dm(i,e,t){const n=i.name,r=n.length;for(Sa.lastIndex=0;;){const a=Sa.exec(n),o=Sa.lastIndex;let s=a[1];const c=a[2]==="]",l=a[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===r){Js(t,l===void 0?new Um(s,i,e):new Cm(s,i,e));break}else{let d=t.map[s];d===void 0&&(d=new Pm(s),Js(t,d)),t=d}}}class Ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Dm(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function js(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Im=37297;let Nm=0;function Fm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}const Qs=new We;function Om(i){Je._getMatrix(Qs,Je.workingColorSpace,i);const e=`mat3( ${Qs.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Cr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $s(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Fm(i.getShaderSource(e),s)}else return a}function km(i,e){const t=Om(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Bm(i,e){let t;switch(e){case ou:t="Linear";break;case su:t="Reinhard";break;case lu:t="Cineon";break;case cu:t="ACESFilmic";break;case du:t="AgX";break;case hu:t="Neutral";break;case uu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xr=new N;function zm(){Je.getLuminanceCoefficients(xr);const i=xr.x.toFixed(4),e=xr.y.toFixed(4),t=xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function Vm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function Li(i){return i!==""}function el(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(i){return i.replace(Wm,qm)}const Xm=new Map;function qm(i,e){let t=Xe[e];if(t===void 0){const n=Xm.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ro(t)}const Ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(i){return i.replace(Ym,Zm)}function Zm(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function il(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Km(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function Jm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case hi:e="ENVMAP_TYPE_CUBE";break;case Fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:e="ENVMAP_MODE_REFRACTION";break}return e}function Qm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hl:e="ENVMAP_BLENDING_MULTIPLY";break;case ru:e="ENVMAP_BLENDING_MIX";break;case au:e="ENVMAP_BLENDING_ADD";break}return e}function $m(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function e0(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=Km(t),l=Jm(t),u=jm(t),d=Qm(t),h=$m(t),f=Gm(t),v=Vm(a),b=r.createProgram();let m,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Li).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Li).join(`
`),p.length>0&&(p+=`
`)):(m=[il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),p=[il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==hn?Bm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,km("linearToOutputTexel",t.outputColorSpace),zm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),o=Ro(o),o=el(o,t),o=tl(o,t),s=Ro(s),s=el(s,t),s=tl(s,t),o=nl(o),s=nl(s),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=R+m+o,_=R+p+s,T=js(r,r.VERTEX_SHADER,S),A=js(r,r.FRAGMENT_SHADER,_);r.attachShader(b,T),r.attachShader(b,A),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function U(L){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(b)||"",z=r.getShaderInfoLog(T)||"",W=r.getShaderInfoLog(A)||"",Y=k.trim(),X=z.trim(),ae=W.trim();let q=!0,de=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,T,A);else{const be=$s(r,T,"vertex"),Ee=$s(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+be+`
`+Ee)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||ae==="")&&(de=!1);de&&(L.diagnostics={runnable:q,programLog:Y,vertexShader:{log:X,prefix:m},fragmentShader:{log:ae,prefix:p}})}r.deleteShader(T),r.deleteShader(A),P=new Ar(r,b),y=Hm(r,b)}let P;this.getUniforms=function(){return P===void 0&&U(this),P};let y;this.getAttributes=function(){return y===void 0&&U(this),y};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(b,Im)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nm++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=A,this}let t0=0;class n0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new i0(e),t.set(e,n)),n}}class i0{constructor(e){this.id=t0++,this.code=e,this.usedTimes=0}}function r0(i,e,t,n,r,a,o){const s=new El,c=new n0,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,w,L,k,z){const W=k.fog,Y=z.geometry,X=y.isMeshStandardMaterial?k.environment:null,ae=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),q=ae&&ae.mapping===Fr?ae.image.height:null,de=v[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const be=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ee=be!==void 0?be.length:0;let $=0;Y.morphAttributes.position!==void 0&&($=1),Y.morphAttributes.normal!==void 0&&($=2),Y.morphAttributes.color!==void 0&&($=3);let Te,Fe,Ue,H;if(de){const Qe=qt[de];Te=Qe.vertexShader,Fe=Qe.fragmentShader}else Te=y.vertexShader,Fe=y.fragmentShader,c.update(y),Ue=c.getVertexShaderID(y),H=c.getFragmentShaderID(y);const j=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),_e=z.isInstancedMesh===!0,ge=z.isBatchedMesh===!0,ze=!!y.map,je=!!y.matcap,E=!!ae,oe=!!y.aoMap,te=!!y.lightMap,ee=!!y.bumpMap,D=!!y.normalMap,Q=!!y.displacementMap,ne=!!y.emissiveMap,ie=!!y.metalnessMap,V=!!y.roughnessMap,ce=y.anisotropy>0,x=y.clearcoat>0,g=y.dispersion>0,C=y.iridescence>0,B=y.sheen>0,Z=y.transmission>0,G=ce&&!!y.anisotropyMap,ye=x&&!!y.clearcoatMap,le=x&&!!y.clearcoatNormalMap,xe=x&&!!y.clearcoatRoughnessMap,ve=C&&!!y.iridescenceMap,se=C&&!!y.iridescenceThicknessMap,ue=B&&!!y.sheenColorMap,Pe=B&&!!y.sheenRoughnessMap,De=!!y.specularMap,Se=!!y.specularColorMap,Ve=!!y.specularIntensityMap,I=Z&&!!y.transmissionMap,he=Z&&!!y.thicknessMap,we=!!y.gradientMap,Ce=!!y.alphaMap,fe=y.alphaTest>0,re=!!y.alphaHash,Ne=!!y.extensions;let He=hn;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(He=i.toneMapping);const nt={shaderID:de,shaderType:y.type,shaderName:y.name,vertexShader:Te,fragmentShader:Fe,defines:y.defines,customVertexShaderID:Ue,customFragmentShaderID:H,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ge,batchingColor:ge&&z._colorsTexture!==null,instancing:_e,instancingColor:_e&&z.instanceColor!==null,instancingMorph:_e&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:fi,alphaToCoverage:!!y.alphaToCoverage,map:ze,matcap:je,envMap:E,envMapMode:E&&ae.mapping,envMapCubeUVHeight:q,aoMap:oe,lightMap:te,bumpMap:ee,normalMap:D,displacementMap:h&&Q,emissiveMap:ne,normalMapObjectSpace:D&&y.normalMapType===gu,normalMapTangentSpace:D&&y.normalMapType===Ml,metalnessMap:ie,roughnessMap:V,anisotropy:ce,anisotropyMap:G,clearcoat:x,clearcoatMap:ye,clearcoatNormalMap:le,clearcoatRoughnessMap:xe,dispersion:g,iridescence:C,iridescenceMap:ve,iridescenceThicknessMap:se,sheen:B,sheenColorMap:ue,sheenRoughnessMap:Pe,specularMap:De,specularColorMap:Se,specularIntensityMap:Ve,transmission:Z,transmissionMap:I,thicknessMap:he,gradientMap:we,opaque:y.transparent===!1&&y.blending===si&&y.alphaToCoverage===!1,alphaMap:Ce,alphaTest:fe,alphaHash:re,combine:y.combine,mapUv:ze&&b(y.map.channel),aoMapUv:oe&&b(y.aoMap.channel),lightMapUv:te&&b(y.lightMap.channel),bumpMapUv:ee&&b(y.bumpMap.channel),normalMapUv:D&&b(y.normalMap.channel),displacementMapUv:Q&&b(y.displacementMap.channel),emissiveMapUv:ne&&b(y.emissiveMap.channel),metalnessMapUv:ie&&b(y.metalnessMap.channel),roughnessMapUv:V&&b(y.roughnessMap.channel),anisotropyMapUv:G&&b(y.anisotropyMap.channel),clearcoatMapUv:ye&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&b(y.sheenRoughnessMap.channel),specularMapUv:De&&b(y.specularMap.channel),specularColorMapUv:Se&&b(y.specularColorMap.channel),specularIntensityMapUv:Ve&&b(y.specularIntensityMap.channel),transmissionMapUv:I&&b(y.transmissionMap.channel),thicknessMapUv:he&&b(y.thicknessMap.channel),alphaMapUv:Ce&&b(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(D||ce),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(ze||Ce),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:ze&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===et,decodeVideoTextureEmissive:ne&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ot,flipSided:y.side===yt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ne&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&y.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function p(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)w.push(L),w.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(R(w,y),S(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function R(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){s.disableAll(),w.supportsVertexTextures&&s.enable(0),w.instancing&&s.enable(1),w.instancingColor&&s.enable(2),w.instancingMorph&&s.enable(3),w.matcap&&s.enable(4),w.envMap&&s.enable(5),w.normalMapObjectSpace&&s.enable(6),w.normalMapTangentSpace&&s.enable(7),w.clearcoat&&s.enable(8),w.iridescence&&s.enable(9),w.alphaTest&&s.enable(10),w.vertexColors&&s.enable(11),w.vertexAlphas&&s.enable(12),w.vertexUv1s&&s.enable(13),w.vertexUv2s&&s.enable(14),w.vertexUv3s&&s.enable(15),w.vertexTangents&&s.enable(16),w.anisotropy&&s.enable(17),w.alphaHash&&s.enable(18),w.batching&&s.enable(19),w.dispersion&&s.enable(20),w.batchingColor&&s.enable(21),w.gradientMap&&s.enable(22),y.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),y.push(s.mask)}function _(y){const w=v[y.type];let L;if(w){const k=qt[w];L=qu.clone(k.uniforms)}else L=y.uniforms;return L}function T(y,w){let L;for(let k=0,z=u.length;k<z;k++){const W=u[k];if(W.cacheKey===w){L=W,++L.usedTimes;break}}return L===void 0&&(L=new e0(i,w,y,a),u.push(L)),L}function A(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function U(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:A,releaseShaderCache:U,programs:u,dispose:P}}function a0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let s=i.get(o);return s===void 0&&(s={},i.set(o,s)),s}function n(o){i.delete(o)}function r(o,s,c){i.get(o)[s]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function o0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function al(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(d,h,f,v,b,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:v,renderOrder:d.renderOrder,z:b,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=b,p.group=m),e++,p}function s(d,h,f,v,b,m){const p=o(d,h,f,v,b,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(d,h,f,v,b,m){const p=o(d,h,f,v,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||o0),n.length>1&&n.sort(h||rl),r.length>1&&r.sort(h||rl)}function u(){for(let d=e,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:c,finish:u,sort:l}}function s0(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new al,i.set(n,[o])):r>=a.length?(o=new al,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function l0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ze};break;case"SpotLight":t={position:new N,direction:new N,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function c0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let u0=0;function d0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function h0(i){const e=new l0,t=c0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,a=new lt,o=new lt;function s(l){let u=0,d=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,v=0,b=0,m=0,p=0,R=0,S=0,_=0,T=0,A=0,U=0;l.sort(d0);for(let y=0,w=l.length;y<w;y++){const L=l[y],k=L.color,z=L.intensity,W=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*z,d+=k.g*z,h+=k.b*z;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],z);U++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ae=L.shadow,q=t.get(L);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=L.shadow.matrix,R++}n.directional[f]=X,f++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(k).multiplyScalar(z),X.distance=W,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[b]=X;const ae=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,ae.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[b]=ae.matrix,L.castShadow){const q=t.get(L);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,n.spotShadow[b]=q,n.spotShadowMap[b]=Y,_++}b++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(k).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const ae=L.shadow,q=t.get(L);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,q.shadowCameraNear=ae.camera.near,q.shadowCameraFar=ae.camera.far,n.pointShadow[v]=q,n.pointShadowMap[v]=Y,n.pointShadowMatrix[v]=L.shadow.matrix,S++}n.point[v]=X,v++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(z),X.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==f||P.pointLength!==v||P.spotLength!==b||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==R||P.numPointShadows!==S||P.numSpotShadows!==_||P.numSpotMaps!==T||P.numLightProbes!==U)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=U,P.directionalLength=f,P.pointLength=v,P.spotLength=b,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=R,P.numPointShadows=S,P.numSpotShadows=_,P.numSpotMaps=T,P.numLightProbes=U,n.version=u0++)}function c(l,u){let d=0,h=0,f=0,v=0,b=0;const m=u.matrixWorldInverse;for(let p=0,R=l.length;p<R;p++){const S=l[p];if(S.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(S.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),o.identity(),a.copy(S.matrixWorld),a.premultiply(m),o.extractRotation(a),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const _=n.hemi[b];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),b++}}}return{setup:s,setupView:c,state:n}}function ol(i){const e=new h0(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function s(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function f0(i){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let s;return o===void 0?(s=new ol(i),e.set(r,[s])):a>=o.length?(s=new ol(i),o.push(s)):s=o[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}const p0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m0=`uniform sampler2D shadow_pass;
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
}`;function g0(i,e,t){let n=new ko;const r=new Me,a=new Me,o=new ot,s=new Fd({depthPacking:mu}),c=new Od,l={},u=t.maxTextureSize,d={[pn]:yt,[yt]:pn,[Ot]:Ot},h=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:p0,fragmentShader:m0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const v=new Bt;v.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ut(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let p=this.type;this.render=function(A,U,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=i.getRenderTarget(),w=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Rn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=p!==ln&&this.type===ln,W=p===ln&&this.type!==ln;for(let Y=0,X=A.length;Y<X;Y++){const ae=A[Y],q=ae.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const de=q.getFrameExtents();if(r.multiply(de),a.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/de.x),r.x=a.x*de.x,q.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/de.y),r.y=a.y*de.y,q.mapSize.y=a.y)),q.map===null||z===!0||W===!0){const Ee=this.type!==ln?{minFilter:Pt,magFilter:Pt}:{};q.map!==null&&q.map.dispose(),q.map=new Gn(r.x,r.y,Ee),q.map.texture.name=ae.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const be=q.getViewportCount();for(let Ee=0;Ee<be;Ee++){const $=q.getViewport(Ee);o.set(a.x*$.x,a.y*$.y,a.x*$.z,a.y*$.w),k.viewport(o),q.updateMatrices(ae,Ee),n=q.getFrustum(),_(U,P,q.camera,ae,this.type)}q.isPointLightShadow!==!0&&this.type===ln&&R(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,w,L)};function R(A,U){const P=e.update(b);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gn(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(U,null,P,h,b,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(U,null,P,f,b,null)}function S(A,U,P,y){let w=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)w=L;else if(w=P.isPointLight===!0?c:s,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const k=w.uuid,z=U.uuid;let W=l[k];W===void 0&&(W={},l[k]=W);let Y=W[z];Y===void 0&&(Y=w.clone(),W[z]=Y,U.addEventListener("dispose",T)),w=Y}if(w.visible=U.visible,w.wireframe=U.wireframe,y===ln?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:d[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=i.properties.get(w);k.light=P}return w}function _(A,U,P,y,w){if(A.visible===!1)return;if(A.layers.test(U.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===ln)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const z=e.update(A),W=A.material;if(Array.isArray(W)){const Y=z.groups;for(let X=0,ae=Y.length;X<ae;X++){const q=Y[X],de=W[q.materialIndex];if(de&&de.visible){const be=S(A,de,y,w);A.onBeforeShadow(i,A,U,P,z,be,q),i.renderBufferDirect(P,null,z,be,A,q),A.onAfterShadow(i,A,U,P,z,be,q)}}}else if(W.visible){const Y=S(A,W,y,w);A.onBeforeShadow(i,A,U,P,z,Y,null),i.renderBufferDirect(P,null,z,Y,A,null),A.onAfterShadow(i,A,U,P,z,Y,null)}}const k=A.children;for(let z=0,W=k.length;z<W;z++)_(k[z],U,P,y,w)}function T(A){A.target.removeEventListener("dispose",T);for(const P in l){const y=l[P],w=A.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}const v0={[Da]:Ia,[Na]:ka,[Fa]:Ba,[ui]:Oa,[Ia]:Da,[ka]:Na,[Ba]:Fa,[Oa]:ui};function b0(i,e){function t(){let I=!1;const he=new ot;let we=null;const Ce=new ot(0,0,0,0);return{setMask:function(fe){we!==fe&&!I&&(i.colorMask(fe,fe,fe,fe),we=fe)},setLocked:function(fe){I=fe},setClear:function(fe,re,Ne,He,nt){nt===!0&&(fe*=He,re*=He,Ne*=He),he.set(fe,re,Ne,He),Ce.equals(he)===!1&&(i.clearColor(fe,re,Ne,He),Ce.copy(he))},reset:function(){I=!1,we=null,Ce.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,we=null,Ce=null,fe=null;return{setReversed:function(re){if(he!==re){const Ne=e.get("EXT_clip_control");re?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),he=re;const He=fe;fe=null,this.setClear(He)}},getReversed:function(){return he},setTest:function(re){re?j(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(re){we!==re&&!I&&(i.depthMask(re),we=re)},setFunc:function(re){if(he&&(re=v0[re]),Ce!==re){switch(re){case Da:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Oa:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=re}},setLocked:function(re){I=re},setClear:function(re){fe!==re&&(he&&(re=1-re),i.clearDepth(re),fe=re)},reset:function(){I=!1,we=null,Ce=null,fe=null,he=!1}}}function r(){let I=!1,he=null,we=null,Ce=null,fe=null,re=null,Ne=null,He=null,nt=null;return{setTest:function(Qe){I||(Qe?j(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Qe){he!==Qe&&!I&&(i.stencilMask(Qe),he=Qe)},setFunc:function(Qe,tn,Xt){(we!==Qe||Ce!==tn||fe!==Xt)&&(i.stencilFunc(Qe,tn,Xt),we=Qe,Ce=tn,fe=Xt)},setOp:function(Qe,tn,Xt){(re!==Qe||Ne!==tn||He!==Xt)&&(i.stencilOp(Qe,tn,Xt),re=Qe,Ne=tn,He=Xt)},setLocked:function(Qe){I=Qe},setClear:function(Qe){nt!==Qe&&(i.clearStencil(Qe),nt=Qe)},reset:function(){I=!1,he=null,we=null,Ce=null,fe=null,re=null,Ne=null,He=null,nt=null}}}const a=new t,o=new n,s=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],v=null,b=!1,m=null,p=null,R=null,S=null,_=null,T=null,A=null,U=new Ze(0,0,0),P=0,y=!1,w=null,L=null,k=null,z=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ae=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=ae>=1):q.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=ae>=2);let de=null,be={};const Ee=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),Te=new ot().fromArray(Ee),Fe=new ot().fromArray($);function Ue(I,he,we,Ce){const fe=new Uint8Array(4),re=i.createTexture();i.bindTexture(I,re),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<we;Ne++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(he+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return re}const H={};H[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),j(i.DEPTH_TEST),o.setFunc(ui),ee(!1),D(os),j(i.CULL_FACE),oe(Rn);function j(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function me(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function _e(I,he){return d[I]!==he?(i.bindFramebuffer(I,he),d[I]=he,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=he),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ge(I,he){let we=f,Ce=!1;if(I){we=h.get(he),we===void 0&&(we=[],h.set(he,we));const fe=I.textures;if(we.length!==fe.length||we[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ne=fe.length;re<Ne;re++)we[re]=i.COLOR_ATTACHMENT0+re;we.length=fe.length,Ce=!0}}else we[0]!==i.BACK&&(we[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(we)}function ze(I){return v!==I?(i.useProgram(I),v=I,!0):!1}const je={[On]:i.FUNC_ADD,[Gc]:i.FUNC_SUBTRACT,[Vc]:i.FUNC_REVERSE_SUBTRACT};je[Hc]=i.MIN,je[Wc]=i.MAX;const E={[Xc]:i.ZERO,[qc]:i.ONE,[Yc]:i.SRC_COLOR,[Ca]:i.SRC_ALPHA,[$c]:i.SRC_ALPHA_SATURATE,[jc]:i.DST_COLOR,[Kc]:i.DST_ALPHA,[Zc]:i.ONE_MINUS_SRC_COLOR,[Pa]:i.ONE_MINUS_SRC_ALPHA,[Qc]:i.ONE_MINUS_DST_COLOR,[Jc]:i.ONE_MINUS_DST_ALPHA,[eu]:i.CONSTANT_COLOR,[tu]:i.ONE_MINUS_CONSTANT_COLOR,[nu]:i.CONSTANT_ALPHA,[iu]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(I,he,we,Ce,fe,re,Ne,He,nt,Qe){if(I===Rn){b===!0&&(me(i.BLEND),b=!1);return}if(b===!1&&(j(i.BLEND),b=!0),I!==zc){if(I!==m||Qe!==y){if((p!==On||_!==On)&&(i.blendEquation(i.FUNC_ADD),p=On,_=On),Qe)switch(I){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ss:i.blendFunc(i.ONE,i.ONE);break;case ls:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ls:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cs:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}R=null,S=null,T=null,A=null,U.set(0,0,0),P=0,m=I,y=Qe}return}fe=fe||he,re=re||we,Ne=Ne||Ce,(he!==p||fe!==_)&&(i.blendEquationSeparate(je[he],je[fe]),p=he,_=fe),(we!==R||Ce!==S||re!==T||Ne!==A)&&(i.blendFuncSeparate(E[we],E[Ce],E[re],E[Ne]),R=we,S=Ce,T=re,A=Ne),(He.equals(U)===!1||nt!==P)&&(i.blendColor(He.r,He.g,He.b,nt),U.copy(He),P=nt),m=I,y=!1}function te(I,he){I.side===Ot?me(i.CULL_FACE):j(i.CULL_FACE);let we=I.side===yt;he&&(we=!we),ee(we),I.blending===si&&I.transparent===!1?oe(Rn):oe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ce=I.stencilWrite;s.setTest(Ce),Ce&&(s.setMask(I.stencilWriteMask),s.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),s.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(I){w!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),w=I)}function D(I){I!==Oc?(j(i.CULL_FACE),I!==L&&(I===os?i.cullFace(i.BACK):I===kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),L=I}function Q(I){I!==k&&(X&&i.lineWidth(I),k=I)}function ne(I,he,we){I?(j(i.POLYGON_OFFSET_FILL),(z!==he||W!==we)&&(i.polygonOffset(he,we),z=he,W=we)):me(i.POLYGON_OFFSET_FILL)}function ie(I){I?j(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function V(I){I===void 0&&(I=i.TEXTURE0+Y-1),de!==I&&(i.activeTexture(I),de=I)}function ce(I,he,we){we===void 0&&(de===null?we=i.TEXTURE0+Y-1:we=de);let Ce=be[we];Ce===void 0&&(Ce={type:void 0,texture:void 0},be[we]=Ce),(Ce.type!==I||Ce.texture!==he)&&(de!==we&&(i.activeTexture(we),de=we),i.bindTexture(I,he||H[I]),Ce.type=I,Ce.texture=he)}function x(){const I=be[de];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(I){Te.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Te.copy(I))}function Pe(I){Fe.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Fe.copy(I))}function De(I,he){let we=l.get(he);we===void 0&&(we=new WeakMap,l.set(he,we));let Ce=we.get(I);Ce===void 0&&(Ce=i.getUniformBlockIndex(he,I.name),we.set(I,Ce))}function Se(I,he){const Ce=l.get(he).get(I);c.get(he)!==Ce&&(i.uniformBlockBinding(he,Ce,I.__bindingPointIndex),c.set(he,Ce))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},de=null,be={},d={},h=new WeakMap,f=[],v=null,b=!1,m=null,p=null,R=null,S=null,_=null,T=null,A=null,U=new Ze(0,0,0),P=0,y=!1,w=null,L=null,k=null,z=null,W=null,Te.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:j,disable:me,bindFramebuffer:_e,drawBuffers:ge,useProgram:ze,setBlending:oe,setMaterial:te,setFlipSided:ee,setCullFace:D,setLineWidth:Q,setPolygonOffset:ne,setScissorTest:ie,activeTexture:V,bindTexture:ce,unbindTexture:x,compressedTexImage2D:g,compressedTexImage3D:C,texImage2D:ve,texImage3D:se,updateUBOMapping:De,uniformBlockBinding:Se,texStorage2D:le,texStorage3D:xe,texSubImage2D:B,texSubImage3D:Z,compressedTexSubImage2D:G,compressedTexSubImage3D:ye,scissor:ue,viewport:Pe,reset:Ve}}function _0(i,e,t,n,r,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,g){return f?new OffscreenCanvas(x,g):Bi("canvas")}function b(x,g,C){let B=1;const Z=ce(x);if((Z.width>C||Z.height>C)&&(B=C/Math.max(Z.width,Z.height)),B<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const G=Math.floor(B*Z.width),ye=Math.floor(B*Z.height);d===void 0&&(d=v(G,ye));const le=g?v(G,ye):d;return le.width=G,le.height=ye,le.getContext("2d").drawImage(x,0,0,G,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+ye+")."),le}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),x;return x}function m(x){return x.generateMipmaps}function p(x){i.generateMipmap(x)}function R(x){return x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?i.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(x,g,C,B,Z=!1){if(x!==null){if(i[x]!==void 0)return i[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let G=g;if(g===i.RED&&(C===i.FLOAT&&(G=i.R32F),C===i.HALF_FLOAT&&(G=i.R16F),C===i.UNSIGNED_BYTE&&(G=i.R8)),g===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.R8UI),C===i.UNSIGNED_SHORT&&(G=i.R16UI),C===i.UNSIGNED_INT&&(G=i.R32UI),C===i.BYTE&&(G=i.R8I),C===i.SHORT&&(G=i.R16I),C===i.INT&&(G=i.R32I)),g===i.RG&&(C===i.FLOAT&&(G=i.RG32F),C===i.HALF_FLOAT&&(G=i.RG16F),C===i.UNSIGNED_BYTE&&(G=i.RG8)),g===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RG8UI),C===i.UNSIGNED_SHORT&&(G=i.RG16UI),C===i.UNSIGNED_INT&&(G=i.RG32UI),C===i.BYTE&&(G=i.RG8I),C===i.SHORT&&(G=i.RG16I),C===i.INT&&(G=i.RG32I)),g===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RGB8UI),C===i.UNSIGNED_SHORT&&(G=i.RGB16UI),C===i.UNSIGNED_INT&&(G=i.RGB32UI),C===i.BYTE&&(G=i.RGB8I),C===i.SHORT&&(G=i.RGB16I),C===i.INT&&(G=i.RGB32I)),g===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),C===i.UNSIGNED_INT&&(G=i.RGBA32UI),C===i.BYTE&&(G=i.RGBA8I),C===i.SHORT&&(G=i.RGBA16I),C===i.INT&&(G=i.RGBA32I)),g===i.RGB&&(C===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),C===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),g===i.RGBA){const ye=Z?Cr:Je.getTransfer(B);C===i.FLOAT&&(G=i.RGBA32F),C===i.HALF_FLOAT&&(G=i.RGBA16F),C===i.UNSIGNED_BYTE&&(G=ye===et?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function _(x,g){let C;return x?g===null||g===zn||g===Fi?C=i.DEPTH24_STENCIL8:g===dn?C=i.DEPTH32F_STENCIL8:g===Ni&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===zn||g===Fi?C=i.DEPTH_COMPONENT24:g===dn?C=i.DEPTH_COMPONENT32F:g===Ni&&(C=i.DEPTH_COMPONENT16),C}function T(x,g){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Pt&&x.minFilter!==kt?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function A(x){const g=x.target;g.removeEventListener("dispose",A),P(g),g.isVideoTexture&&u.delete(g)}function U(x){const g=x.target;g.removeEventListener("dispose",U),w(g)}function P(x){const g=n.get(x);if(g.__webglInit===void 0)return;const C=x.source,B=h.get(C);if(B){const Z=B[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(x),Object.keys(B).length===0&&h.delete(C)}n.remove(x)}function y(x){const g=n.get(x);i.deleteTexture(g.__webglTexture);const C=x.source,B=h.get(C);delete B[g.__cacheKey],o.memory.textures--}function w(x){const g=n.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),n.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(g.__webglFramebuffer[B]))for(let Z=0;Z<g.__webglFramebuffer[B].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[B][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[B]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[B])}else{if(Array.isArray(g.__webglFramebuffer))for(let B=0;B<g.__webglFramebuffer.length;B++)i.deleteFramebuffer(g.__webglFramebuffer[B]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let B=0;B<g.__webglColorRenderbuffer.length;B++)g.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[B]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const C=x.textures;for(let B=0,Z=C.length;B<Z;B++){const G=n.get(C[B]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(C[B])}n.remove(x)}let L=0;function k(){L=0}function z(){const x=L;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),L+=1,x}function W(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function Y(x,g){const C=n.get(x);if(x.isVideoTexture&&ie(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&C.__version!==x.version){const B=x.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(C,x,g);return}}else x.isExternalTexture&&(C.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+g)}function X(x,g){const C=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&C.__version!==x.version){H(C,x,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+g)}function ae(x,g){const C=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&C.__version!==x.version){H(C,x,g);return}t.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+g)}function q(x,g){const C=n.get(x);if(x.version>0&&C.__version!==x.version){j(C,x,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+g)}const de={[Va]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},be={[Pt]:i.NEAREST,[fu]:i.NEAREST_MIPMAP_NEAREST,[ji]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},Ee={[vu]:i.NEVER,[yu]:i.ALWAYS,[bu]:i.LESS,[yl]:i.LEQUAL,[_u]:i.EQUAL,[Mu]:i.GEQUAL,[xu]:i.GREATER,[wu]:i.NOTEQUAL};function $(x,g){if(g.type===dn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===kt||g.magFilter===Hr||g.magFilter===ji||g.magFilter===Sn||g.minFilter===kt||g.minFilter===Hr||g.minFilter===ji||g.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(x,i.TEXTURE_WRAP_S,de[g.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,de[g.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,de[g.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,be[g.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,be[g.minFilter]),g.compareFunction&&(i.texParameteri(x,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(x,i.TEXTURE_COMPARE_FUNC,Ee[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Pt||g.minFilter!==ji&&g.minFilter!==Sn||g.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");i.texParameterf(x,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Te(x,g){let C=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",A));const B=g.source;let Z=h.get(B);Z===void 0&&(Z={},h.set(B,Z));const G=W(g);if(G!==x.__cacheKey){Z[G]===void 0&&(Z[G]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,C=!0),Z[G].usedTimes++;const ye=Z[x.__cacheKey];ye!==void 0&&(Z[x.__cacheKey].usedTimes--,ye.usedTimes===0&&y(g)),x.__cacheKey=G,x.__webglTexture=Z[G].texture}return C}function Fe(x,g,C){return Math.floor(Math.floor(x/C)/g)}function Ue(x,g,C,B){const G=x.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,C,B,g.data);else{G.sort((se,ue)=>se.start-ue.start);let ye=0;for(let se=1;se<G.length;se++){const ue=G[ye],Pe=G[se],De=ue.start+ue.count,Se=Fe(Pe.start,g.width,4),Ve=Fe(ue.start,g.width,4);Pe.start<=De+1&&Se===Ve&&Fe(Pe.start+Pe.count-1,g.width,4)===Se?ue.count=Math.max(ue.count,Pe.start+Pe.count-ue.start):(++ye,G[ye]=Pe)}G.length=ye+1;const le=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let se=0,ue=G.length;se<ue;se++){const Pe=G[se],De=Math.floor(Pe.start/4),Se=Math.ceil(Pe.count/4),Ve=De%g.width,I=Math.floor(De/g.width),he=Se,we=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ve,I,he,we,C,B,g.data)}x.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function H(x,g,C){let B=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(B=i.TEXTURE_3D);const Z=Te(x,g),G=g.source;t.bindTexture(B,x.__webglTexture,i.TEXTURE0+C);const ye=n.get(G);if(G.version!==ye.__version||Z===!0){t.activeTexture(i.TEXTURE0+C);const le=Je.getPrimaries(Je.workingColorSpace),xe=g.colorSpace===un?null:Je.getPrimaries(g.colorSpace),ve=g.colorSpace===un||le===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let se=b(g.image,!1,r.maxTextureSize);se=V(g,se);const ue=a.convert(g.format,g.colorSpace),Pe=a.convert(g.type);let De=S(g.internalFormat,ue,Pe,g.colorSpace,g.isVideoTexture);$(B,g);let Se;const Ve=g.mipmaps,I=g.isVideoTexture!==!0,he=ye.__version===void 0||Z===!0,we=G.dataReady,Ce=T(g,se);if(g.isDepthTexture)De=_(g.format===ki,g.type),he&&(I?t.texStorage2D(i.TEXTURE_2D,1,De,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,De,se.width,se.height,0,ue,Pe,null));else if(g.isDataTexture)if(Ve.length>0){I&&he&&t.texStorage2D(i.TEXTURE_2D,Ce,De,Ve[0].width,Ve[0].height);for(let fe=0,re=Ve.length;fe<re;fe++)Se=Ve[fe],I?we&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,ue,Pe,Se.data):t.texImage2D(i.TEXTURE_2D,fe,De,Se.width,Se.height,0,ue,Pe,Se.data);g.generateMipmaps=!1}else I?(he&&t.texStorage2D(i.TEXTURE_2D,Ce,De,se.width,se.height),we&&Ue(g,se,ue,Pe)):t.texImage2D(i.TEXTURE_2D,0,De,se.width,se.height,0,ue,Pe,se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){I&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,De,Ve[0].width,Ve[0].height,se.depth);for(let fe=0,re=Ve.length;fe<re;fe++)if(Se=Ve[fe],g.format!==Wt)if(ue!==null)if(I){if(we)if(g.layerUpdates.size>0){const Ne=Fs(Se.width,Se.height,g.format,g.type);for(const He of g.layerUpdates){const nt=Se.data.subarray(He*Ne/Se.data.BYTES_PER_ELEMENT,(He+1)*Ne/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,He,Se.width,Se.height,1,ue,nt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Se.width,Se.height,se.depth,ue,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,De,Se.width,Se.height,se.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Se.width,Se.height,se.depth,ue,Pe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,De,Se.width,Se.height,se.depth,0,ue,Pe,Se.data)}else{I&&he&&t.texStorage2D(i.TEXTURE_2D,Ce,De,Ve[0].width,Ve[0].height);for(let fe=0,re=Ve.length;fe<re;fe++)Se=Ve[fe],g.format!==Wt?ue!==null?I?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,ue,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,De,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?we&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,ue,Pe,Se.data):t.texImage2D(i.TEXTURE_2D,fe,De,Se.width,Se.height,0,ue,Pe,Se.data)}else if(g.isDataArrayTexture)if(I){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,De,se.width,se.height,se.depth),we)if(g.layerUpdates.size>0){const fe=Fs(se.width,se.height,g.format,g.type);for(const re of g.layerUpdates){const Ne=se.data.subarray(re*fe/se.data.BYTES_PER_ELEMENT,(re+1)*fe/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,se.width,se.height,1,ue,Pe,Ne)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ue,Pe,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,ue,Pe,se.data);else if(g.isData3DTexture)I?(he&&t.texStorage3D(i.TEXTURE_3D,Ce,De,se.width,se.height,se.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ue,Pe,se.data)):t.texImage3D(i.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,ue,Pe,se.data);else if(g.isFramebufferTexture){if(he)if(I)t.texStorage2D(i.TEXTURE_2D,Ce,De,se.width,se.height);else{let fe=se.width,re=se.height;for(let Ne=0;Ne<Ce;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,De,fe,re,0,ue,Pe,null),fe>>=1,re>>=1}}else if(Ve.length>0){if(I&&he){const fe=ce(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Ce,De,fe.width,fe.height)}for(let fe=0,re=Ve.length;fe<re;fe++)Se=Ve[fe],I?we&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ue,Pe,Se):t.texImage2D(i.TEXTURE_2D,fe,De,ue,Pe,Se);g.generateMipmaps=!1}else if(I){if(he){const fe=ce(se);t.texStorage2D(i.TEXTURE_2D,Ce,De,fe.width,fe.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Pe,se)}else t.texImage2D(i.TEXTURE_2D,0,De,ue,Pe,se);m(g)&&p(B),ye.__version=G.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function j(x,g,C){if(g.image.length!==6)return;const B=Te(x,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+C);const G=n.get(Z);if(Z.version!==G.__version||B===!0){t.activeTexture(i.TEXTURE0+C);const ye=Je.getPrimaries(Je.workingColorSpace),le=g.colorSpace===un?null:Je.getPrimaries(g.colorSpace),xe=g.colorSpace===un||ye===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ve=g.isCompressedTexture||g.image[0].isCompressedTexture,se=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let re=0;re<6;re++)!ve&&!se?ue[re]=b(g.image[re],!0,r.maxCubemapSize):ue[re]=se?g.image[re].image:g.image[re],ue[re]=V(g,ue[re]);const Pe=ue[0],De=a.convert(g.format,g.colorSpace),Se=a.convert(g.type),Ve=S(g.internalFormat,De,Se,g.colorSpace),I=g.isVideoTexture!==!0,he=G.__version===void 0||B===!0,we=Z.dataReady;let Ce=T(g,Pe);$(i.TEXTURE_CUBE_MAP,g);let fe;if(ve){I&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Ve,Pe.width,Pe.height);for(let re=0;re<6;re++){fe=ue[re].mipmaps;for(let Ne=0;Ne<fe.length;Ne++){const He=fe[Ne];g.format!==Wt?De!==null?I?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,0,0,He.width,He.height,De,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,Ve,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,0,0,He.width,He.height,De,Se,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,Ve,He.width,He.height,0,De,Se,He.data)}}}else{if(fe=g.mipmaps,I&&he){fe.length>0&&Ce++;const re=ce(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Ve,re.width,re.height)}for(let re=0;re<6;re++)if(se){I?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ue[re].width,ue[re].height,De,Se,ue[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ve,ue[re].width,ue[re].height,0,De,Se,ue[re].data);for(let Ne=0;Ne<fe.length;Ne++){const nt=fe[Ne].image[re].image;I?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,0,0,nt.width,nt.height,De,Se,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,Ve,nt.width,nt.height,0,De,Se,nt.data)}}else{I?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,De,Se,ue[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ve,De,Se,ue[re]);for(let Ne=0;Ne<fe.length;Ne++){const He=fe[Ne];I?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,0,0,De,Se,He.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,Ve,De,Se,He.image[re])}}}m(g)&&p(i.TEXTURE_CUBE_MAP),G.__version=Z.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function me(x,g,C,B,Z,G){const ye=a.convert(C.format,C.colorSpace),le=a.convert(C.type),xe=S(C.internalFormat,ye,le,C.colorSpace),ve=n.get(g),se=n.get(C);if(se.__renderTarget=g,!ve.__hasExternalTextures){const ue=Math.max(1,g.width>>G),Pe=Math.max(1,g.height>>G);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,G,xe,ue,Pe,g.depth,0,ye,le,null):t.texImage2D(Z,G,xe,ue,Pe,0,ye,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,x),ne(g)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,Z,se.__webglTexture,0,Q(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,Z,se.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(x,g,C){if(i.bindRenderbuffer(i.RENDERBUFFER,x),g.depthBuffer){const B=g.depthTexture,Z=B&&B.isDepthTexture?B.type:null,G=_(g.stencilBuffer,Z),ye=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=Q(g);ne(g)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,G,g.width,g.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,G,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,G,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,x)}else{const B=g.textures;for(let Z=0;Z<B.length;Z++){const G=B[Z],ye=a.convert(G.format,G.colorSpace),le=a.convert(G.type),xe=S(G.internalFormat,ye,le,G.colorSpace),ve=Q(g);C&&ne(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,xe,g.width,g.height):ne(g)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,xe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,xe,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=n.get(g.depthTexture);B.__renderTarget=g,(!B.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y(g.depthTexture,0);const Z=B.__webglTexture,G=Q(g);if(g.depthTexture.format===Oi)ne(g)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(g.depthTexture.format===ki)ne(g)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ze(x){const g=n.get(x),C=x.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==x.depthTexture){const B=x.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),B){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,B.removeEventListener("dispose",Z)};B.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=B}if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");const B=x.texture.mipmaps;B&&B.length>0?ge(g.__webglFramebuffer[0],x):ge(g.__webglFramebuffer,x)}else if(C){g.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[B]),g.__webglDepthbuffer[B]===void 0)g.__webglDepthbuffer[B]=i.createRenderbuffer(),_e(g.__webglDepthbuffer[B],x,!1);else{const Z=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,G)}}else{const B=x.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),_e(g.__webglDepthbuffer,x,!1);else{const Z=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(x,g,C){const B=n.get(x);g!==void 0&&me(B.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&ze(x)}function E(x){const g=x.texture,C=n.get(x),B=n.get(g);x.addEventListener("dispose",U);const Z=x.textures,G=x.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=g.version,o.memory.textures++),G){C.__webglFramebuffer=[];for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer[le]=[];for(let xe=0;xe<g.mipmaps.length;xe++)C.__webglFramebuffer[le][xe]=i.createFramebuffer()}else C.__webglFramebuffer[le]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer=[];for(let le=0;le<g.mipmaps.length;le++)C.__webglFramebuffer[le]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(ye)for(let le=0,xe=Z.length;le<xe;le++){const ve=n.get(Z[le]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(x.samples>0&&ne(x)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const xe=Z[le];C.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[le]);const ve=a.convert(xe.format,xe.colorSpace),se=a.convert(xe.type),ue=S(xe.internalFormat,ve,se,xe.colorSpace,x.isXRRenderTarget===!0),Pe=Q(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ue,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,C.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(C.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),$(i.TEXTURE_CUBE_MAP,g);for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)me(C.__webglFramebuffer[le][xe],x,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe);else me(C.__webglFramebuffer[le],x,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(g)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let le=0,xe=Z.length;le<xe;le++){const ve=Z[le],se=n.get(ve);let ue=i.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ue=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,se.__webglTexture),$(ue,ve),me(C.__webglFramebuffer,x,ve,i.COLOR_ATTACHMENT0+le,ue,0),m(ve)&&p(ue)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(le=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,B.__webglTexture),$(le,g),g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)me(C.__webglFramebuffer[xe],x,g,i.COLOR_ATTACHMENT0,le,xe);else me(C.__webglFramebuffer,x,g,i.COLOR_ATTACHMENT0,le,0);m(g)&&p(le),t.unbindTexture()}x.depthBuffer&&ze(x)}function oe(x){const g=x.textures;for(let C=0,B=g.length;C<B;C++){const Z=g[C];if(m(Z)){const G=R(x),ye=n.get(Z).__webglTexture;t.bindTexture(G,ye),p(G),t.unbindTexture()}}}const te=[],ee=[];function D(x){if(x.samples>0){if(ne(x)===!1){const g=x.textures,C=x.width,B=x.height;let Z=i.COLOR_BUFFER_BIT;const G=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(x),le=g.length>1;if(le)for(let ve=0;ve<g.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const xe=x.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ve]);const se=n.get(g[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,C,B,0,0,C,B,Z,i.NEAREST),c===!0&&(te.length=0,ee.length=0,te.push(i.COLOR_ATTACHMENT0+ve),x.depthBuffer&&x.resolveDepthBuffer===!1&&(te.push(G),ee.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let ve=0;ve<g.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ve]);const se=n.get(g[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&c){const g=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Q(x){return Math.min(r.maxSamples,x.samples)}function ne(x){const g=n.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ie(x){const g=o.render.frame;u.get(x)!==g&&(u.set(x,g),x.update())}function V(x,g){const C=x.colorSpace,B=x.format,Z=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||C!==fi&&C!==un&&(Je.getTransfer(C)===et?(B!==Wt||Z!==jt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),g}function ce(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(l.width=x.naturalWidth||x.width,l.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(l.width=x.displayWidth,l.height=x.displayHeight):(l.width=x.width,l.height=x.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=ae,this.setTextureCube=q,this.rebindTextures=je,this.setupRenderTarget=E,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ne}function x0(i,e){function t(n,r=un){let a;const o=Je.getTransfer(r);if(n===jt)return i.UNSIGNED_BYTE;if(n===Uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pl)return i.BYTE;if(n===ml)return i.SHORT;if(n===Ni)return i.UNSIGNED_SHORT;if(n===Lo)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===bl)return i.ALPHA;if(n===_l)return i.RGB;if(n===Wt)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===wl)return i.RG;if(n===Do)return i.RG_INTEGER;if(n===Io)return i.RGBA_INTEGER;if(n===yr||n===Sr||n===Rr||n===Er)if(o===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===yr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===yr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Wa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ka||n===Ja)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Za||n===Ka)return o===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===Qa||n===$a||n===eo||n===to||n===no||n===io||n===ro||n===ao||n===oo||n===so||n===lo||n===co||n===uo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ja)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$a)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eo)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===to)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===no)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===io)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ro)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ao)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oo)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===so)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lo)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===co)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uo)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ho||n===fo||n===po)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ho)return o===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===po)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mo||n===go||n===vo||n===bo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===mo)return a.COMPRESSED_RED_RGTC1_EXT;if(n===go)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const w0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M0=`
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

}`;class y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Il(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mn({vertexShader:w0,fragmentShader:M0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S0 extends bi{constructor(e,t){super();const n=this;let r=null,a=1,o=null,s="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,v=null;const b=typeof XRWebGLBinding<"u",m=new y0,p={},R=t.getContextAttributes();let S=null,_=null;const T=[],A=[],U=new Me;let P=null;const y=new Ut;y.viewport=new ot;const w=new Ut;w.viewport=new ot;const L=[y,w],k=new Wd;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=T[H];return j===void 0&&(j=new ha,T[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=T[H];return j===void 0&&(j=new ha,T[H]=j),j.getGripSpace()},this.getHand=function(H){let j=T[H];return j===void 0&&(j=new ha,T[H]=j),j.getHandSpace()};function Y(H){const j=A.indexOf(H.inputSource);if(j===-1)return;const me=T[j];me!==void 0&&(me.update(H.inputSource,H.frame,l||o),me.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ae);for(let H=0;H<T.length;H++){const j=A[H];j!==null&&(A[H]=null,T[H].disconnect(j))}z=null,W=null,m.reset();for(const H in p)delete p[H];e.setRenderTarget(S),f=null,h=null,d=null,r=null,_=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ae),R.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,_e=null,ge=null;R.depth&&(ge=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=R.stencil?ki:Oi,_e=R.stencil?Fi:zn);const ze={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer(ze),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Gn(h.textureWidth,h.textureHeight,{format:Wt,type:jt,depthTexture:new Dl(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Gn(f.framebufferWidth,f.framebufferHeight,{format:Wt,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),Ue.setContext(r),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ae(H){for(let j=0;j<H.removed.length;j++){const me=H.removed[j],_e=A.indexOf(me);_e>=0&&(A[_e]=null,T[_e].disconnect(me))}for(let j=0;j<H.added.length;j++){const me=H.added[j];let _e=A.indexOf(me);if(_e===-1){for(let ze=0;ze<T.length;ze++)if(ze>=A.length){A.push(me),_e=ze;break}else if(A[ze]===null){A[ze]=me,_e=ze;break}if(_e===-1)break}const ge=T[_e];ge&&ge.connect(me)}}const q=new N,de=new N;function be(H,j,me){q.setFromMatrixPosition(j.matrixWorld),de.setFromMatrixPosition(me.matrixWorld);const _e=q.distanceTo(de),ge=j.projectionMatrix.elements,ze=me.projectionMatrix.elements,je=ge[14]/(ge[10]-1),E=ge[14]/(ge[10]+1),oe=(ge[9]+1)/ge[5],te=(ge[9]-1)/ge[5],ee=(ge[8]-1)/ge[0],D=(ze[8]+1)/ze[0],Q=je*ee,ne=je*D,ie=_e/(-ee+D),V=ie*-ee;if(j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(V),H.translateZ(ie),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ge[10]===-1)H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ce=je+ie,x=E+ie,g=Q-V,C=ne+(_e-V),B=oe*E/x*ce,Z=te*E/x*ce;H.projectionMatrix.makePerspective(g,C,B,Z,ce,x),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Ee(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let j=H.near,me=H.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(me=m.depthFar)),k.near=w.near=y.near=j,k.far=w.far=y.far=me,(z!==k.near||W!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,W=k.far),k.layers.mask=H.layers.mask|6,y.layers.mask=k.layers.mask&3,w.layers.mask=k.layers.mask&5;const _e=H.parent,ge=k.cameras;Ee(k,_e);for(let ze=0;ze<ge.length;ze++)Ee(ge[ze],_e);ge.length===2?be(k,y,w):k.projectionMatrix.copy(y.projectionMatrix),$(H,k,_e)};function $(H,j,me){me===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(me.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=_o*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(H){c=H,h!==null&&(h.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(H){return p[H]};let Te=null;function Fe(H,j){if(u=j.getViewerPose(l||o),v=j,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let _e=!1;me.length!==k.cameras.length&&(k.cameras.length=0,_e=!0);for(let E=0;E<me.length;E++){const oe=me[E];let te=null;if(f!==null)te=f.getViewport(oe);else{const D=d.getViewSubImage(h,oe);te=D.viewport,E===0&&(e.setRenderTargetTextures(_,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(_))}let ee=L[E];ee===void 0&&(ee=new Ut,ee.layers.enable(E),ee.viewport=new ot,L[E]=ee),ee.matrix.fromArray(oe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(oe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(te.x,te.y,te.width,te.height),E===0&&(k.matrix.copy(ee.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),_e===!0&&k.cameras.push(ee)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){d=n.getBinding();const E=d.getDepthInformation(me[0]);E&&E.isValid&&E.texture&&m.init(E,r.renderState)}if(ge&&ge.includes("camera-access")&&b){e.state.unbindTexture(),d=n.getBinding();for(let E=0;E<me.length;E++){const oe=me[E].camera;if(oe){let te=p[oe];te||(te=new Il,p[oe]=te);const ee=d.getCameraImage(oe);te.sourceTexture=ee}}}}for(let me=0;me<T.length;me++){const _e=A[me],ge=T[me];_e!==null&&ge!==void 0&&ge.update(_e,j,l||o)}Te&&Te(H,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),v=null}const Ue=new ql;Ue.setAnimationLoop(Fe),this.setAnimationLoop=function(H){Te=H},this.dispose=function(){}}}const In=new Qt,R0=new lt;function E0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ul(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,R,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),d(m,p)):p.isMeshPhongMaterial?(a(m,p),u(m,p)):p.isMeshStandardMaterial?(a(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(a(m,p),v(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),b(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?c(m,p,R,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const R=e.get(p),S=R.envMap,_=R.envMapRotation;S&&(m.envMap.value=S,In.copy(_),In.x*=-1,In.y*=-1,In.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),m.envMapRotation.value.setFromMatrix4(R0.makeRotationFromEuler(In)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,R,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const R=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function A0(i,e,t,n){let r={},a={},o=[];const s=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,S){const _=S.program;n.uniformBlockBinding(R,_)}function l(R,S){let _=r[R.id];_===void 0&&(v(R),_=u(R),r[R.id]=_,R.addEventListener("dispose",m));const T=S.program;n.updateUBOMapping(R,T);const A=e.render.frame;a[R.id]!==A&&(h(R),a[R.id]=A)}function u(R){const S=d();R.__bindingPointIndex=S;const _=i.createBuffer(),T=R.__size,A=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,_),_}function d(){for(let R=0;R<s;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(R){const S=r[R.id],_=R.uniforms,T=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,U=_.length;A<U;A++){const P=Array.isArray(_[A])?_[A]:[_[A]];for(let y=0,w=P.length;y<w;y++){const L=P[y];if(f(L,A,y,T)===!0){const k=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let Y=0;Y<z.length;Y++){const X=z[Y],ae=b(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,k+W,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,W),W+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(R,S,_,T){const A=R.value,U=S+"_"+_;if(T[U]===void 0)return typeof A=="number"||typeof A=="boolean"?T[U]=A:T[U]=A.clone(),!0;{const P=T[U];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return T[U]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function v(R){const S=R.uniforms;let _=0;const T=16;for(let U=0,P=S.length;U<P;U++){const y=Array.isArray(S[U])?S[U]:[S[U]];for(let w=0,L=y.length;w<L;w++){const k=y[w],z=Array.isArray(k.value)?k.value:[k.value];for(let W=0,Y=z.length;W<Y;W++){const X=z[W],ae=b(X),q=_%T,de=q%ae.boundary,be=q+de;_+=de,be!==0&&T-be<ae.storage&&(_+=T-be),k.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=ae.storage}}}const A=_%T;return A>0&&(_+=T-A),R.__size=_,R.__cache={},this}function b(R){const S={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(S.boundary=4,S.storage=4):R.isVector2?(S.boundary=8,S.storage=8):R.isVector3||R.isColor?(S.boundary=16,S.storage=12):R.isVector4?(S.boundary=16,S.storage=16):R.isMatrix3?(S.boundary=48,S.storage=48):R.isMatrix4?(S.boundary=64,S.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),S}function m(R){const S=R.target;S.removeEventListener("dispose",m);const _=o.indexOf(S.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function p(){for(const R in r)i.deleteBuffer(r[R]);o=[],r={},a={}}return{bind:c,update:l,dispose:p}}class qo{constructor(e={}){const{canvas:t=Ru(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const v=new Uint32Array(4),b=new Int32Array(4);let m=null,p=null;const R=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let T=!1;this._outputColorSpace=Mt;let A=0,U=0,P=null,y=-1,w=null;const L=new ot,k=new ot;let z=null;const W=new Ze(0);let Y=0,X=t.width,ae=t.height,q=1,de=null,be=null;const Ee=new ot(0,0,X,ae),$=new ot(0,0,X,ae);let Te=!1;const Fe=new ko;let Ue=!1,H=!1;const j=new lt,me=new N,_e=new ot,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function je(){return P===null?q:1}let E=n;function oe(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${To}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",fe,!1),E===null){const F="webgl2";if(E=oe(F,M),E===null)throw oe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let te,ee,D,Q,ne,ie,V,ce,x,g,C,B,Z,G,ye,le,xe,ve,se,ue,Pe,De,Se,Ve;function I(){te=new kp(E),te.init(),De=new x0(E,te),ee=new Cp(E,te,e,De),D=new b0(E,te),ee.reversedDepthBuffer&&h&&D.buffers.depth.setReversed(!0),Q=new Gp(E),ne=new a0,ie=new _0(E,te,D,ne,ee,De,Q),V=new Dp(_),ce=new Op(_),x=new qd(E),Se=new Lp(E,x),g=new Bp(E,x,Q,Se),C=new Hp(E,g,x,Q),se=new Vp(E,ee,ie),le=new Pp(ne),B=new r0(_,V,ce,te,ee,Se,le),Z=new E0(_,ne),G=new s0,ye=new f0(te),ve=new Tp(_,V,ce,D,C,f,c),xe=new g0(_,C,ee),Ve=new A0(E,Q,ee,D),ue=new Up(E,te,Q),Pe=new zp(E,te,Q),Q.programs=B.programs,_.capabilities=ee,_.extensions=te,_.properties=ne,_.renderLists=G,_.shadowMap=xe,_.state=D,_.info=Q}I();const he=new S0(_,E);this.xr=he,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const M=te.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=te.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(X,ae,!1))},this.getSize=function(M){return M.set(X,ae)},this.setSize=function(M,F,K=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,ae=F,t.width=Math.floor(M*q),t.height=Math.floor(F*q),K===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(X*q,ae*q).floor()},this.setDrawingBufferSize=function(M,F,K){X=M,ae=F,q=K,t.width=Math.floor(M*K),t.height=Math.floor(F*K),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,F,K,J){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,F,K,J),D.viewport(L.copy(Ee).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy($)},this.setScissor=function(M,F,K,J){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,F,K,J),D.scissor(k.copy($).multiplyScalar(q).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(M){D.setScissorTest(Te=M)},this.setOpaqueSort=function(M){de=M},this.setTransparentSort=function(M){be=M},this.getClearColor=function(M){return M.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,K=!0){let J=0;if(M){let O=!1;if(P!==null){const pe=P.texture.format;O=pe===Io||pe===Do||pe===Po}if(O){const pe=P.texture.type,Ae=pe===jt||pe===zn||pe===Ni||pe===Fi||pe===Uo||pe===Co,Ie=ve.getClearColor(),Le=ve.getClearAlpha(),Be=Ie.r,Ge=Ie.g,Oe=Ie.b;Ae?(v[0]=Be,v[1]=Ge,v[2]=Oe,v[3]=Le,E.clearBufferuiv(E.COLOR,0,v)):(b[0]=Be,b[1]=Ge,b[2]=Oe,b[3]=Le,E.clearBufferiv(E.COLOR,0,b))}else J|=E.COLOR_BUFFER_BIT}F&&(J|=E.DEPTH_BUFFER_BIT),K&&(J|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ve.dispose(),G.dispose(),ye.dispose(),ne.dispose(),V.dispose(),ce.dispose(),C.dispose(),Se.dispose(),Ve.dispose(),B.dispose(),he.dispose(),he.removeEventListener("sessionstart",Xt),he.removeEventListener("sessionend",Qo),An.stop()};function we(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=Q.autoReset,F=xe.enabled,K=xe.autoUpdate,J=xe.needsUpdate,O=xe.type;I(),Q.autoReset=M,xe.enabled=F,xe.autoUpdate=K,xe.needsUpdate=J,xe.type=O}function fe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function re(M){const F=M.target;F.removeEventListener("dispose",re),Ne(F)}function Ne(M){He(M),ne.remove(M)}function He(M){const F=ne.get(M).programs;F!==void 0&&(F.forEach(function(K){B.releaseProgram(K)}),M.isShaderMaterial&&B.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,K,J,O,pe){F===null&&(F=ge);const Ae=O.isMesh&&O.matrixWorld.determinant()<0,Ie=vc(M,F,K,J,O);D.setMaterial(J,Ae);let Le=K.index,Be=1;if(J.wireframe===!0){if(Le=g.getWireframeAttribute(K),Le===void 0)return;Be=2}const Ge=K.drawRange,Oe=K.attributes.position;let Ye=Ge.start*Be,$e=(Ge.start+Ge.count)*Be;pe!==null&&(Ye=Math.max(Ye,pe.start*Be),$e=Math.min($e,(pe.start+pe.count)*Be)),Le!==null?(Ye=Math.max(Ye,0),$e=Math.min($e,Le.count)):Oe!=null&&(Ye=Math.max(Ye,0),$e=Math.min($e,Oe.count));const ct=$e-Ye;if(ct<0||ct===1/0)return;Se.setup(O,J,Ie,K,Le);let it,tt=ue;if(Le!==null&&(it=x.get(Le),tt=Pe,tt.setIndex(it)),O.isMesh)J.wireframe===!0?(D.setLineWidth(J.wireframeLinewidth*je()),tt.setMode(E.LINES)):tt.setMode(E.TRIANGLES);else if(O.isLine){let ke=J.linewidth;ke===void 0&&(ke=1),D.setLineWidth(ke*je()),O.isLineSegments?tt.setMode(E.LINES):O.isLineLoop?tt.setMode(E.LINE_LOOP):tt.setMode(E.LINE_STRIP)}else O.isPoints?tt.setMode(E.POINTS):O.isSprite&&tt.setMode(E.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)zi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))tt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ke=O._multiDrawStarts,rt=O._multiDrawCounts,Ke=O._multiDrawCount,Et=Le?x.get(Le).bytesPerElement:1,Hn=ne.get(J).currentProgram.getUniforms();for(let At=0;At<Ke;At++)Hn.setValue(E,"_gl_DrawID",At),tt.render(ke[At]/Et,rt[At])}else if(O.isInstancedMesh)tt.renderInstances(Ye,ct,O.count);else if(K.isInstancedBufferGeometry){const ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,rt=Math.min(K.instanceCount,ke);tt.renderInstances(Ye,ct,rt)}else tt.render(Ye,ct)};function nt(M,F,K){M.transparent===!0&&M.side===Ot&&M.forceSinglePass===!1?(M.side=yt,M.needsUpdate=!0,Ji(M,F,K),M.side=pn,M.needsUpdate=!0,Ji(M,F,K),M.side=Ot):Ji(M,F,K)}this.compile=function(M,F,K=null){K===null&&(K=M),p=ye.get(K),p.init(F),S.push(p),K.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),M!==K&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const J=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const pe=O.material;if(pe)if(Array.isArray(pe))for(let Ae=0;Ae<pe.length;Ae++){const Ie=pe[Ae];nt(Ie,K,O),J.add(Ie)}else nt(pe,K,O),J.add(pe)}),p=S.pop(),J},this.compileAsync=function(M,F,K=null){const J=this.compile(M,F,K);return new Promise(O=>{function pe(){if(J.forEach(function(Ae){ne.get(Ae).currentProgram.isReady()&&J.delete(Ae)}),J.size===0){O(M);return}setTimeout(pe,10)}te.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Qe=null;function tn(M){Qe&&Qe(M)}function Xt(){An.stop()}function Qo(){An.start()}const An=new ql;An.setAnimationLoop(tn),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(M){Qe=M,he.setAnimationLoop(M),M===null?An.stop():An.start()},he.addEventListener("sessionstart",Xt),he.addEventListener("sessionend",Qo),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(F),F=he.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,F,P),p=ye.get(M,S.length),p.init(F),S.push(p),j.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Fe.setFromProjectionMatrix(j,Yt,F.reversedDepth),H=this.localClippingEnabled,Ue=le.init(this.clippingPlanes,H),m=G.get(M,R.length),m.init(),R.push(m),he.enabled===!0&&he.isPresenting===!0){const pe=_.xr.getDepthSensingMesh();pe!==null&&Gr(pe,F,-1/0,_.sortObjects)}Gr(M,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(de,be),ze=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ze&&ve.addToRenderList(m,M),this.info.render.frame++,Ue===!0&&le.beginShadows();const K=p.state.shadowsArray;xe.render(K,M,F),Ue===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const pe=F.cameras;if(O.length>0)for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++){const Le=pe[Ae];es(J,O,M,Le)}ze&&ve.render(M);for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++){const Le=pe[Ae];$o(m,M,Le,Le.viewport)}}else O.length>0&&es(J,O,M,F),ze&&ve.render(M),$o(m,M,F);P!==null&&U===0&&(ie.updateMultisampleRenderTarget(P),ie.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(_,M,F),Se.resetDefaultState(),y=-1,w=null,S.pop(),S.length>0?(p=S[S.length-1],Ue===!0&&le.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Gr(M,F,K,J){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Fe.intersectsSprite(M)){J&&_e.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);const Ae=C.update(M),Ie=M.material;Ie.visible&&m.push(M,Ae,Ie,K,_e.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Fe.intersectsObject(M))){const Ae=C.update(M),Ie=M.material;if(J&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),_e.copy(M.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),_e.copy(Ae.boundingSphere.center)),_e.applyMatrix4(M.matrixWorld).applyMatrix4(j)),Array.isArray(Ie)){const Le=Ae.groups;for(let Be=0,Ge=Le.length;Be<Ge;Be++){const Oe=Le[Be],Ye=Ie[Oe.materialIndex];Ye&&Ye.visible&&m.push(M,Ae,Ye,K,_e.z,Oe)}}else Ie.visible&&m.push(M,Ae,Ie,K,_e.z,null)}}const pe=M.children;for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++)Gr(pe[Ae],F,K,J)}function $o(M,F,K,J){const O=M.opaque,pe=M.transmissive,Ae=M.transparent;p.setupLightsView(K),Ue===!0&&le.setGlobalState(_.clippingPlanes,K),J&&D.viewport(L.copy(J)),O.length>0&&Ki(O,F,K),pe.length>0&&Ki(pe,F,K),Ae.length>0&&Ki(Ae,F,K),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function es(M,F,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Gn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Wi:jt,minFilter:Sn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const pe=p.state.transmissionRenderTarget[J.id],Ae=J.viewport||L;pe.setSize(Ae.z*_.transmissionResolutionScale,Ae.w*_.transmissionResolutionScale);const Ie=_.getRenderTarget(),Le=_.getActiveCubeFace(),Be=_.getActiveMipmapLevel();_.setRenderTarget(pe),_.getClearColor(W),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),ze&&ve.render(K);const Ge=_.toneMapping;_.toneMapping=hn;const Oe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),Ue===!0&&le.setGlobalState(_.clippingPlanes,J),Ki(M,K,J),ie.updateMultisampleRenderTarget(pe),ie.updateRenderTargetMipmap(pe),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let $e=0,ct=F.length;$e<ct;$e++){const it=F[$e],tt=it.object,ke=it.geometry,rt=it.material,Ke=it.group;if(rt.side===Ot&&tt.layers.test(J.layers)){const Et=rt.side;rt.side=yt,rt.needsUpdate=!0,ts(tt,K,J,ke,rt,Ke),rt.side=Et,rt.needsUpdate=!0,Ye=!0}}Ye===!0&&(ie.updateMultisampleRenderTarget(pe),ie.updateRenderTargetMipmap(pe))}_.setRenderTarget(Ie,Le,Be),_.setClearColor(W,Y),Oe!==void 0&&(J.viewport=Oe),_.toneMapping=Ge}function Ki(M,F,K){const J=F.isScene===!0?F.overrideMaterial:null;for(let O=0,pe=M.length;O<pe;O++){const Ae=M[O],Ie=Ae.object,Le=Ae.geometry,Be=Ae.group;let Ge=Ae.material;Ge.allowOverride===!0&&J!==null&&(Ge=J),Ie.layers.test(K.layers)&&ts(Ie,F,K,Le,Ge,Be)}}function ts(M,F,K,J,O,pe){M.onBeforeRender(_,F,K,J,O,pe),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(_,F,K,J,M,pe),O.transparent===!0&&O.side===Ot&&O.forceSinglePass===!1?(O.side=yt,O.needsUpdate=!0,_.renderBufferDirect(K,F,J,O,M,pe),O.side=pn,O.needsUpdate=!0,_.renderBufferDirect(K,F,J,O,M,pe),O.side=Ot):_.renderBufferDirect(K,F,J,O,M,pe),M.onAfterRender(_,F,K,J,O,pe)}function Ji(M,F,K){F.isScene!==!0&&(F=ge);const J=ne.get(M),O=p.state.lights,pe=p.state.shadowsArray,Ae=O.state.version,Ie=B.getParameters(M,O.state,pe,F,K),Le=B.getProgramCacheKey(Ie);let Be=J.programs;J.environment=M.isMeshStandardMaterial?F.environment:null,J.fog=F.fog,J.envMap=(M.isMeshStandardMaterial?ce:V).get(M.envMap||J.environment),J.envMapRotation=J.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",re),Be=new Map,J.programs=Be);let Ge=Be.get(Le);if(Ge!==void 0){if(J.currentProgram===Ge&&J.lightsStateVersion===Ae)return is(M,Ie),Ge}else Ie.uniforms=B.getUniforms(M),M.onBeforeCompile(Ie,_),Ge=B.acquireProgram(Ie,Le),Be.set(Le,Ge),J.uniforms=Ie.uniforms;const Oe=J.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=le.uniform),is(M,Ie),J.needsLights=_c(M),J.lightsStateVersion=Ae,J.needsLights&&(Oe.ambientLightColor.value=O.state.ambient,Oe.lightProbe.value=O.state.probe,Oe.directionalLights.value=O.state.directional,Oe.directionalLightShadows.value=O.state.directionalShadow,Oe.spotLights.value=O.state.spot,Oe.spotLightShadows.value=O.state.spotShadow,Oe.rectAreaLights.value=O.state.rectArea,Oe.ltc_1.value=O.state.rectAreaLTC1,Oe.ltc_2.value=O.state.rectAreaLTC2,Oe.pointLights.value=O.state.point,Oe.pointLightShadows.value=O.state.pointShadow,Oe.hemisphereLights.value=O.state.hemi,Oe.directionalShadowMap.value=O.state.directionalShadowMap,Oe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Oe.spotShadowMap.value=O.state.spotShadowMap,Oe.spotLightMatrix.value=O.state.spotLightMatrix,Oe.spotLightMap.value=O.state.spotLightMap,Oe.pointShadowMap.value=O.state.pointShadowMap,Oe.pointShadowMatrix.value=O.state.pointShadowMatrix),J.currentProgram=Ge,J.uniformsList=null,Ge}function ns(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Ar.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function is(M,F){const K=ne.get(M);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function vc(M,F,K,J,O){F.isScene!==!0&&(F=ge),ie.resetTextureUnits();const pe=F.fog,Ae=J.isMeshStandardMaterial?F.environment:null,Ie=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:fi,Le=(J.isMeshStandardMaterial?ce:V).get(J.envMap||Ae),Be=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ge=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Oe=!!K.morphAttributes.position,Ye=!!K.morphAttributes.normal,$e=!!K.morphAttributes.color;let ct=hn;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ct=_.toneMapping);const it=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,tt=it!==void 0?it.length:0,ke=ne.get(J),rt=p.state.lights;if(Ue===!0&&(H===!0||M!==w)){const xt=M===w&&J.id===y;le.setState(J,M,xt)}let Ke=!1;J.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==rt.state.version||ke.outputColorSpace!==Ie||O.isBatchedMesh&&ke.batching===!1||!O.isBatchedMesh&&ke.batching===!0||O.isBatchedMesh&&ke.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ke.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ke.instancing===!1||!O.isInstancedMesh&&ke.instancing===!0||O.isSkinnedMesh&&ke.skinning===!1||!O.isSkinnedMesh&&ke.skinning===!0||O.isInstancedMesh&&ke.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ke.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ke.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ke.instancingMorph===!1&&O.morphTexture!==null||ke.envMap!==Le||J.fog===!0&&ke.fog!==pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==Ge||ke.morphTargets!==Oe||ke.morphNormals!==Ye||ke.morphColors!==$e||ke.toneMapping!==ct||ke.morphTargetsCount!==tt)&&(Ke=!0):(Ke=!0,ke.__version=J.version);let Et=ke.currentProgram;Ke===!0&&(Et=Ji(J,F,O));let Hn=!1,At=!1,Mi=!1;const at=Et.getUniforms(),Dt=ke.uniforms;if(D.useProgram(Et.program)&&(Hn=!0,At=!0,Mi=!0),J.id!==y&&(y=J.id,At=!0),Hn||w!==M){D.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),at.setValue(E,"projectionMatrix",M.projectionMatrix),at.setValue(E,"viewMatrix",M.matrixWorldInverse);const St=at.map.cameraPosition;St!==void 0&&St.setValue(E,me.setFromMatrixPosition(M.matrixWorld)),ee.logarithmicDepthBuffer&&at.setValue(E,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&at.setValue(E,"isOrthographic",M.isOrthographicCamera===!0),w!==M&&(w=M,At=!0,Mi=!0)}if(O.isSkinnedMesh){at.setOptional(E,O,"bindMatrix"),at.setOptional(E,O,"bindMatrixInverse");const xt=O.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),at.setValue(E,"boneTexture",xt.boneTexture,ie))}O.isBatchedMesh&&(at.setOptional(E,O,"batchingTexture"),at.setValue(E,"batchingTexture",O._matricesTexture,ie),at.setOptional(E,O,"batchingIdTexture"),at.setValue(E,"batchingIdTexture",O._indirectTexture,ie),at.setOptional(E,O,"batchingColorTexture"),O._colorsTexture!==null&&at.setValue(E,"batchingColorTexture",O._colorsTexture,ie));const It=K.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&se.update(O,K,Et),(At||ke.receiveShadow!==O.receiveShadow)&&(ke.receiveShadow=O.receiveShadow,at.setValue(E,"receiveShadow",O.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Dt.envMap.value=Le,Dt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&F.environment!==null&&(Dt.envMapIntensity.value=F.environmentIntensity),At&&(at.setValue(E,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&bc(Dt,Mi),pe&&J.fog===!0&&Z.refreshFogUniforms(Dt,pe),Z.refreshMaterialUniforms(Dt,J,q,ae,p.state.transmissionRenderTarget[M.id]),Ar.upload(E,ns(ke),Dt,ie)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ar.upload(E,ns(ke),Dt,ie),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&at.setValue(E,"center",O.center),at.setValue(E,"modelViewMatrix",O.modelViewMatrix),at.setValue(E,"normalMatrix",O.normalMatrix),at.setValue(E,"modelMatrix",O.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const xt=J.uniformsGroups;for(let St=0,Vr=xt.length;St<Vr;St++){const Tn=xt[St];Ve.update(Tn,Et),Ve.bind(Tn,Et)}}return Et}function bc(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function _c(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,F,K){const J=ne.get(M);J.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ne.get(M.texture).__webglTexture=F,ne.get(M.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const K=ne.get(M);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0};const xc=E.createFramebuffer();this.setRenderTarget=function(M,F=0,K=0){P=M,A=F,U=K;let J=!0,O=null,pe=!1,Ae=!1;if(M){const Le=ne.get(M);if(Le.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(E.FRAMEBUFFER,null),J=!1;else if(Le.__webglFramebuffer===void 0)ie.setupRenderTarget(M);else if(Le.__hasExternalTextures)ie.rebindTextures(M,ne.get(M.texture).__webglTexture,ne.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Oe=M.depthTexture;if(Le.__boundDepthTexture!==Oe){if(Oe!==null&&ne.has(Oe)&&(M.width!==Oe.image.width||M.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(M)}}const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ae=!0);const Ge=ne.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?O=Ge[F][K]:O=Ge[F],pe=!0):M.samples>0&&ie.useMultisampledRTT(M)===!1?O=ne.get(M).__webglMultisampledFramebuffer:Array.isArray(Ge)?O=Ge[K]:O=Ge,L.copy(M.viewport),k.copy(M.scissor),z=M.scissorTest}else L.copy(Ee).multiplyScalar(q).floor(),k.copy($).multiplyScalar(q).floor(),z=Te;if(K!==0&&(O=xc),D.bindFramebuffer(E.FRAMEBUFFER,O)&&J&&D.drawBuffers(M,O),D.viewport(L),D.scissor(k),D.setScissorTest(z),pe){const Le=ne.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+F,Le.__webglTexture,K)}else if(Ae){const Le=F;for(let Be=0;Be<M.textures.length;Be++){const Ge=ne.get(M.textures[Be]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Be,Ge.__webglTexture,K,Le)}}else if(M!==null&&K!==0){const Le=ne.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Le.__webglTexture,K)}y=-1},this.readRenderTargetPixels=function(M,F,K,J,O,pe,Ae,Ie=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){D.bindFramebuffer(E.FRAMEBUFFER,Le);try{const Be=M.textures[Ie],Ge=Be.format,Oe=Be.type;if(!ee.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-J&&K>=0&&K<=M.height-O&&(M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ie),E.readPixels(F,K,J,O,De.convert(Ge),De.convert(Oe),pe))}finally{const Be=P!==null?ne.get(P).__webglFramebuffer:null;D.bindFramebuffer(E.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(M,F,K,J,O,pe,Ae,Ie=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le)if(F>=0&&F<=M.width-J&&K>=0&&K<=M.height-O){D.bindFramebuffer(E.FRAMEBUFFER,Le);const Be=M.textures[Ie],Ge=Be.format,Oe=Be.type;if(!ee.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ye),E.bufferData(E.PIXEL_PACK_BUFFER,pe.byteLength,E.STREAM_READ),M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ie),E.readPixels(F,K,J,O,De.convert(Ge),De.convert(Oe),0);const $e=P!==null?ne.get(P).__webglFramebuffer:null;D.bindFramebuffer(E.FRAMEBUFFER,$e);const ct=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Eu(E,ct,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ye),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,pe),E.deleteBuffer(Ye),E.deleteSync(ct),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,K=0){const J=Math.pow(2,-K),O=Math.floor(M.image.width*J),pe=Math.floor(M.image.height*J),Ae=F!==null?F.x:0,Ie=F!==null?F.y:0;ie.setTexture2D(M,0),E.copyTexSubImage2D(E.TEXTURE_2D,K,0,0,Ae,Ie,O,pe),D.unbindTexture()};const wc=E.createFramebuffer(),Mc=E.createFramebuffer();this.copyTextureToTexture=function(M,F,K=null,J=null,O=0,pe=null){pe===null&&(O!==0?(zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=O,O=0):pe=0);let Ae,Ie,Le,Be,Ge,Oe,Ye,$e,ct;const it=M.isCompressedTexture?M.mipmaps[pe]:M.image;if(K!==null)Ae=K.max.x-K.min.x,Ie=K.max.y-K.min.y,Le=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,Ge=K.min.y,Oe=K.isBox3?K.min.z:0;else{const It=Math.pow(2,-O);Ae=Math.floor(it.width*It),Ie=Math.floor(it.height*It),M.isDataArrayTexture?Le=it.depth:M.isData3DTexture?Le=Math.floor(it.depth*It):Le=1,Be=0,Ge=0,Oe=0}J!==null?(Ye=J.x,$e=J.y,ct=J.z):(Ye=0,$e=0,ct=0);const tt=De.convert(F.format),ke=De.convert(F.type);let rt;F.isData3DTexture?(ie.setTexture3D(F,0),rt=E.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ie.setTexture2DArray(F,0),rt=E.TEXTURE_2D_ARRAY):(ie.setTexture2D(F,0),rt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,F.unpackAlignment);const Ke=E.getParameter(E.UNPACK_ROW_LENGTH),Et=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Hn=E.getParameter(E.UNPACK_SKIP_PIXELS),At=E.getParameter(E.UNPACK_SKIP_ROWS),Mi=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,it.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,it.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Be),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ge),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Oe);const at=M.isDataArrayTexture||M.isData3DTexture,Dt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const It=ne.get(M),xt=ne.get(F),St=ne.get(It.__renderTarget),Vr=ne.get(xt.__renderTarget);D.bindFramebuffer(E.READ_FRAMEBUFFER,St.__webglFramebuffer),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let Tn=0;Tn<Le;Tn++)at&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ne.get(M).__webglTexture,O,Oe+Tn),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ne.get(F).__webglTexture,pe,ct+Tn)),E.blitFramebuffer(Be,Ge,Ae,Ie,Ye,$e,Ae,Ie,E.DEPTH_BUFFER_BIT,E.NEAREST);D.bindFramebuffer(E.READ_FRAMEBUFFER,null),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||ne.has(M)){const It=ne.get(M),xt=ne.get(F);D.bindFramebuffer(E.READ_FRAMEBUFFER,wc),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,Mc);for(let St=0;St<Le;St++)at?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,It.__webglTexture,O,Oe+St):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,It.__webglTexture,O),Dt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,xt.__webglTexture,pe,ct+St):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,xt.__webglTexture,pe),O!==0?E.blitFramebuffer(Be,Ge,Ae,Ie,Ye,$e,Ae,Ie,E.COLOR_BUFFER_BIT,E.NEAREST):Dt?E.copyTexSubImage3D(rt,pe,Ye,$e,ct+St,Be,Ge,Ae,Ie):E.copyTexSubImage2D(rt,pe,Ye,$e,Be,Ge,Ae,Ie);D.bindFramebuffer(E.READ_FRAMEBUFFER,null),D.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Dt?M.isDataTexture||M.isData3DTexture?E.texSubImage3D(rt,pe,Ye,$e,ct,Ae,Ie,Le,tt,ke,it.data):F.isCompressedArrayTexture?E.compressedTexSubImage3D(rt,pe,Ye,$e,ct,Ae,Ie,Le,tt,it.data):E.texSubImage3D(rt,pe,Ye,$e,ct,Ae,Ie,Le,tt,ke,it):M.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,pe,Ye,$e,Ae,Ie,tt,ke,it.data):M.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,pe,Ye,$e,it.width,it.height,tt,it.data):E.texSubImage2D(E.TEXTURE_2D,pe,Ye,$e,Ae,Ie,tt,ke,it);E.pixelStorei(E.UNPACK_ROW_LENGTH,Ke),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Et),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Hn),E.pixelStorei(E.UNPACK_SKIP_ROWS,At),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Mi),pe===0&&F.generateMipmaps&&E.generateMipmap(rt),D.unbindTexture()},this.initRenderTarget=function(M){ne.get(M).__webglFramebuffer===void 0&&ie.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ie.setTextureCube(M,0):M.isData3DTexture?ie.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ie.setTexture2DArray(M,0):ie.setTexture2D(M,0),D.unbindTexture()},this.resetState=function(){A=0,U=0,P=null,D.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const jl=":root{font-family:Arial,Apple SD Gothic Neo,Malgun Gothic,sans-serif;color:#292929;background:#fff;font-synthesis:none}*{box-sizing:border-box}body{margin:0}button,input{font:inherit}button{cursor:pointer;color:inherit;background:#fff;border:1px solid #aaa;min-height:44px;padding:10px 17px;font-size:12px}button:disabled{opacity:.45;cursor:default}button:focus-visible,input:focus-visible,[tabindex]:focus-visible,a:focus-visible{outline:3px solid #333;outline-offset:4px}a{color:inherit}h1,p,dl,dd{margin:0}#fold-app{max-width:1240px;margin:auto;padding:0 48px}.demo-header{display:flex;justify-content:space-between;gap:20px;padding:25px 0;border-bottom:1px solid #ddd;font-size:10px;line-height:1.8}.demo-header span{letter-spacing:1px}.demo-intro{display:flex;align-items:end;justify-content:space-between;gap:30px;padding:42px 0 30px}.overline{font-size:11px;color:#666;margin-bottom:14px}h1{font-size:29px;font-weight:500;letter-spacing:-.6px}.demo-intro>div>p:last-child{font-size:13px;line-height:1.9;color:#555;margin-top:16px}dl{font-size:11px;line-height:1.8}dl>div{display:flex;gap:20px;padding:5px 0}dt{color:#666;min-width:55px}.viewer{border:1px solid #c8c8c8;background:#fafafa}.viewer-top,.viewer-bottom{display:flex;justify-content:space-between;gap:20px;padding:18px 22px;font-size:11px;line-height:1.7}.viewer-top{border-bottom:1px solid #e3e3e3}.viewer-top span:last-child{color:#666}.viewer-bottom{border-top:1px solid #e3e3e3}.stage{height:530px;position:relative;perspective:1800px;overflow:hidden;touch-action:pan-y;-webkit-user-select:none;user-select:none}.stage[data-state=folded]{cursor:grab}.stage.dragging{cursor:grabbing}.rig{position:absolute;top:50%;left:50%;width:0;height:0;transform-style:preserve-3d}.turntable{position:absolute;left:-120px;top:-140px;width:240px;height:280px;transform-style:preserve-3d}.package-root{width:240px;height:280px;position:relative;transform-style:preserve-3d}.panel{position:absolute;transform-style:preserve-3d}.paper,.paper-inside{position:absolute;inset:0;backface-visibility:hidden;pointer-events:none}.paper{transform:translateZ(.12px)}.paper>img{display:block;width:100%;height:100%;pointer-events:none}.paper-inside{background:#fff9fc;transform:rotateY(180deg) translateZ(.12px)}.front{width:240px;height:280px;left:0;top:0}.left{width:80px;height:280px;left:-80px;top:0;transform-origin:right center}.back{width:240px;height:280px;left:-240px;top:0;transform-origin:right center}.right{width:80px;height:280px;left:240px;top:0;transform-origin:left center}.glue{width:30.4px;height:280px;left:-30.4px;top:0;transform-origin:right center}.glue .paper-inside{clip-path:polygon(100% 0,0 3%,0 85%,18% 92%,100% 100%)}.lid{width:240px;height:80px;left:0;top:-80px;transform-origin:center bottom}.lid-tuck{width:240px;height:30.4px;left:0;top:-30.4px;transform-origin:center bottom}.lid-tuck .paper-inside{border-radius:20px 20px 0 0}.dust-left-top,.dust-right-top{width:80px;height:55.8px;left:0;top:-55.8px;transform-origin:center bottom}.dust-left-top .paper-inside,.dust-right-top .paper-inside{clip-path:polygon(0 100%,0 75%,12% 55%,18% 0,90% 0,100% 100%)}.bottom-front,.bottom-back{width:240px;height:66.4px;left:0;top:280px;transform-origin:center top}.bottom-front .paper-inside,.bottom-back .paper-inside{clip-path:polygon(0 0,100% 0,97% 100%,66% 60%,49.5% 60%,49.5% 72%,40% 72%,33% 100%,4% 100%)}.dust-left-bottom,.dust-right-bottom{width:80px;height:44.6px;left:0;top:280px;transform-origin:center top}.dust-left-bottom .paper-inside,.dust-right-bottom .paper-inside{clip-path:polygon(0 0,100% 0,78% 38%,65% 100%,27% 100%)}.package-shadow{position:absolute;left:calc(50% - 105px);top:calc(50% + 165px);width:210px;height:12px;border-radius:50%;background:#333;filter:blur(11px);opacity:0;pointer-events:none}.main-controls{display:flex;justify-content:center;gap:12px;padding:25px 0}.primary{background:#303030;color:#fff;border-color:#303030;min-width:185px}.detail-controls{display:flex;justify-content:space-between;align-items:end;gap:35px;border-top:1px solid #ddd;padding:25px 0}.scrubber{flex:1;max-width:430px}.scrubber label{font-size:11px;display:block;margin-bottom:15px}.scrubber input{width:100%;accent-color:#444;min-height:26px;margin:0}.rotation-controls{display:flex;gap:7px;flex-wrap:wrap}.rotation-controls button{font-size:11px;padding:10px 12px}.demo-notes{padding:0 0 35px;font-size:11px;color:#555;line-height:1.9}.demo-notes p+p{margin-top:10px}.demo-notes strong{color:#333;margin-right:9px}@media(max-width:700px){#fold-app{padding:0 20px}.demo-header{font-size:9px;padding:17px 0;gap:12px}.demo-intro{display:block;padding:28px 0 22px}h1{font-size:25px}.demo-intro>div>p:last-child{font-size:12px}.demo-intro dl{font-size:10px;margin-top:18px}.demo-intro dl>div{padding:2px 0}.overline{font-size:10px}.viewer-top,.viewer-bottom{padding:13px 12px;font-size:10px;gap:10px}.viewer-top{flex-wrap:wrap}.viewer-top span:last-child{font-size:9px}.stage{height:390px;perspective:1100px}.main-controls{gap:8px;padding:20px 0}.main-controls button{font-size:11px;padding:10px 12px}.primary{min-width:160px}.detail-controls{display:block;padding:20px 0}.scrubber{max-width:none}.rotation-controls{margin-top:20px;justify-content:center;gap:6px}.rotation-controls button{font-size:10px;padding:10px}.demo-notes{font-size:10px}.package-shadow{top:calc(50% + 110px);width:130px;left:calc(50% - 65px)}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important}}.render-filters{position:absolute;pointer-events:none}.paper>img,.paper-inside>img{position:absolute;inset:0;width:100%;height:100%;display:block}.paper>.ink-original{opacity:calc(1 - var(--clean-mix,0))}.paper>.ink-clean{opacity:var(--clean-mix,0);filter:url(#no-cutlines)}.paper-inside{background:none!important;clip-path:none!important;border-radius:0!important}.paper-inside>img{transform:scaleX(-1);filter:url(#paper-stock)}.bottom-backing{position:absolute;left:0;top:279.1px;width:240px;height:80px;background:#efa0c3;transform-origin:center top;transform:rotateX(-90deg);backface-visibility:hidden;opacity:var(--base-opacity,0)}.bottom-main,.diagonal-hinge{position:absolute;inset:0;transform-style:preserve-3d}.diagonal-hinge{transform-origin:100% 0}.bottom-main .paper>img,.bottom-main .paper-inside>img{clip-path:polygon(0 0,100% 0,78.47% 77.66%,65.78% 59.57%,49.56% 59.57%,49.56% 72.34%,40.12% 72.34%,32.74% 100%,3.83% 100%)}.diagonal-hinge .paper>img,.diagonal-hinge .paper-inside>img{clip-path:polygon(100% 0,96.16% 12.77%,98.82% 36.17%,97.05% 100%,78.47% 77.66%)}.bottom-backing{background:none;backface-visibility:visible;transform-style:preserve-3d;top:279.5px}.base-outside,.base-inside{position:absolute;inset:0;backface-visibility:hidden}.base-outside{background:#efa0c3;transform:translateZ(.12px)}.base-inside{background:#f8c4dc;transform:rotateY(180deg) translateZ(.12px)}",Ql=":host{font-family:inherit;color:#191b20;container-type:inline-size}button,input{font:inherit}button{border:1px solid #c8cdd6;border-radius:6px;background:#fff;color:#424854;font-size:12px;font-weight:400;min-height:44px;transition:background .15s}button:not(:disabled):hover{border-color:#743451;background:#f7eef2}button:focus-visible,input:focus-visible,[tabindex]:focus-visible{outline:3px solid #743451;outline-offset:3px}.model-name{font-size:17px;font-weight:500;color:#191b20}.dimensions{color:#555b66;font-size:11px;line-height:1.8}.viewer{border:1px solid #d9dde3;border-radius:8px;background:#f7f7f5;overflow:hidden}.viewer-top,.viewer-bottom{padding:14px 16px;border-color:#d9dde3;color:#555b66;font-size:11px;gap:10px}.viewer-top{flex-wrap:wrap}.viewer-top span:last-child{color:#555b66}.stage{height:390px;background:#f7f7f5}.primary{background:#743451;color:#fff;border-color:#743451;min-width:175px;border-radius:100px}.primary:not(:disabled):hover{border-color:#51213a;background:#51213a;color:#fff}.main-controls{gap:8px;padding:20px 0}.detail-controls{border-color:#d9dde3;gap:20px;padding:20px 0}.scrubber label{color:#555b66;font-size:11px}.scrubber input{accent-color:#743451}.rotation-controls{gap:6px}.rotation-controls button{padding:9px 12px}.demo-notes{color:#555b66;font-size:11px;line-height:1.9}.viewer-bottom{min-height:52px}#progress-text{color:#555b66}@container (max-width:740px){.detail-controls{display:block}.scrubber{max-width:none}.rotation-controls{margin-top:15px;justify-content:flex-start}.stage{height:360px}.model-name{font-size:16px}}@container (max-width:400px){.stage{height:300px}.viewer-top,.viewer-bottom{font-size:10px;padding:12px}.main-controls{justify-content:flex-start}.main-controls button{padding:10px 11px;font-size:11px}.primary{min-width:152px}.rotation-controls button{padding:9px 10px;font-size:11px}.demo-notes,.dimensions{font-size:10px}}@media(prefers-reduced-motion:reduce){*{transition:none!important}}",Ra=new Map;function $l(i){return Ra.has(i)||Ra.set(i,new Gd().loadAsync(i).then(e=>(e.colorSpace=un,e.minFilter=kt,e.magFilter=kt,e.generateMipmaps=!1,e))),Ra.get(i)}const T0=`varying vec2 vUv;varying vec3 vNormal;
void main(){vUv=uv;vNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,L0=`precision highp float;
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
}`;function ec(i,e,t){const n=e||[[0,0],[100,0],[100,100],[0,100]],r=Array.from({length:16},()=>new ot);n.forEach(([s,c],l)=>{const[u,d]=n[(l+1)%n.length];r[l].set(s/100,1-c/100,u/100,1-d/100)});const a=new mn({vertexShader:T0,fragmentShader:L0,side:Ot,depthTest:!0,depthWrite:!0,toneMapped:!1,uniforms:{printMap:{value:i},texSize:{value:new Me(i.image.width,i.image.height)},stock:{value:new N},clean:{value:0},edges:{value:r},edgeCount:{value:n.length}}}),o=new Ze(t).convertLinearToSRGB();return a.uniforms.stock.value=new N(o.r,o.g,o.b),a}const Ea=i=>Math.max(0,Math.min(1,i)),U0=i=>i*i*(3-2*i);let C0=0;function P0(i,e,t={}){const n=e[0],r=n.shape==="pouch",a=`retail-${++C0}`,[o,s,c]=n.dimensions,l=`${n.label} ${n.title}`,u=i.attachShadow({mode:"open"}),d=D=>u.querySelector(D),h=D=>u.querySelectorAll(D);u.innerHTML=`<style>${jl}
 :host{display:block;min-width:0;font-family:Arial,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;color:#292929}.model-name{font-size:17px;margin:0 0 9px;font-weight:600}.dimensions{font-size:11px;margin:0 0 18px;color:#555;line-height:1.8}.stage{height:470px;touch-action:pan-y}.stage canvas{display:block;width:100%;height:100%}.main-controls{padding:20px 0;flex-wrap:wrap}.scrubber{max-width:360px}.demo-notes{padding-bottom:0}.demo-notes p{margin:0}.viewer-bottom{min-height:55px}.render-error{padding:35px;font-size:12px;line-height:1.9}
 @media(max-width:700px){.stage{height:370px}.model-name{font-size:15px}.dimensions{font-size:10px}.detail-controls{display:block}.scrubber{max-width:none}.rotation-controls{margin-top:18px}.viewer-top{font-size:9px}.demo-notes{font-size:10px}}
 ${Ql}</style><div class="widget"><h4 class="model-name">${l}</h4><p class="dimensions">${n.dimensionNote}</p>
 <section class="viewer" aria-label="${l} 입체 목업"><div class="viewer-top"><span id="view-state">01 / 평면 그래픽</span><span id="view-hint">자료를 불러오는 중</span></div><div class="stage" tabindex="0" role="group" aria-label="${l}. 입체 상태에서 드래그 회전, 휠 확대·축소가 가능합니다." data-state="loading"></div><div class="viewer-bottom"><span id="phase-text" aria-live="polite">자료를 불러오는 중</span><span id="progress-text">0%</span></div></section>
 <div class="main-controls"><button id="fold-toggle" class="primary" disabled>3D 목업으로 보기</button><button id="flat-reset" disabled>평면 그래픽으로 초기화</button></div>
 <div class="detail-controls"><div class="scrubber"><label for="${a}">${r?"앞뒤 인쇄면 → 실링 파우치":"전면 그래픽 → 입체 진열 팩"}</label><input id="${a}" class="fold-progress" type="range" min="0" max="100" step="1" value="0" disabled /></div><div class="rotation-controls" role="group" aria-label="패키지 시점"><button data-view="front" disabled>정면</button><button data-view="back" disabled>뒷면</button><button data-view="side" disabled>측면</button><button data-view="bottom" disabled>바닥</button><button data-view="reset" disabled>초기 시점</button></div></div>
 <div class="demo-notes"><p>${r?"제공된 앞·뒷면으로 봉투를 만들고, 상하 실링과 중앙의 볼륨을 표현했습니다.":"제공 전면 그래픽으로 얇은 진열 팩과 원형 배지의 높이감을 표현했습니다. 후면은 자료가 없어 무지로 표시합니다."}</p><p>약 2초 입체 전환 · 드래그 회전 · 휠 확대/축소 · 초기 시점에서 배율 복원.</p></div></div>`;const f=d(".stage"),v=d("#fold-toggle"),b=d(".fold-progress");let m=t.progress??0,p=t.rx??-12,R=t.ry??-28,S=t.zoom??1,_,T,A,U,P,y,w,L=!1,k=!1,z=!1,W=0,Y=!1,X=0,ae=0;const q=[],de=[],be=[],Ee=[];i.dataset.variant=n.id,i.dataset.state="loading",i.dataset.dimensions=n.dimensions.join(",");function $(D){const Q=new Hl({color:D,roughness:.5,metalness:.03,side:Ot});return q.push(Q),Q}function Te(D){const Q=ec(D,null,n.stock),ne=Q.uniforms.edges.value;let ie=Q.uniforms.edgeCount.value;for(const g of n.sealLines)ne[ie++].set(0,1-g,1,1-g);const[V,ce,x]=n.hole;for(let g=0;g<8;g++){const C=g*Math.PI/4,B=(g+1)*Math.PI/4;ne[ie++].set(V+x*Math.cos(C),1-ce+x*o/s*Math.sin(C),V+x*Math.cos(B),1-ce+x*o/s*Math.sin(B))}return Q.uniforms.edgeCount.value=ie,q.push(Q),Q}function Fe(D=s/2,Q=-s/2,ne=!1){const ie=new Go;if(ie.moveTo(-o/2,D),ie.lineTo(o/2,D),ie.lineTo(o/2,Q),ie.lineTo(-o/2,Q),ie.closePath(),ne){const[V,ce,x]=n.hole,g=new wo;g.absarc((V-.5)*o,s/2-ce*s,x*o,0,Math.PI*2,!0),ie.holes.push(g)}return ie}function Ue(D){const Q=D.getAttribute("position"),ne=[];for(let ie=0;ie<Q.count;ie++)ne.push(Q.getX(ie)/o+.5,Q.getY(ie)/s+.5);return D.setAttribute("uv",new dt(ne,2)),de.push(D),D}function H(D,Q,ne,ie=!1){const V=new ut(Ue(Q),ne);D.add(V);const ce=Q.getAttribute("position"),x=[];for(let g=0;g<ce.count;g++){const C=ce.getX(g),B=ce.getY(g),Z=Ea((s/2-15-B)/(s-30)),G=Ea(C/o+.5);x.push(r?.16+(ie?c/2*Math.pow(Math.max(0,Math.sin(Math.PI*G)*Math.sin(Math.PI*Z)),.8):0):c/2+.02)}return be.push({mesh:V,depth:x}),V}function j(D){T=new Oo,T.background=new Ze("#f7f7f5"),T.add(new Xl("#ffffff","#b7acb5",2));const Q=new So("#ffffff",2.2);Q.position.set(-120,200,300),T.add(Q),A=new Ut(30,1,10,5e3),U=new Ct,T.add(U),P=new Ct,y=new Ct,U.add(P,y);const ne=Te(D.front),ie=D.back?Te(D.back):$("#f6f1f3");for(const[x,g]of[[P,ne],[y,ie]])if(r){H(x,new Ii(Fe(s/2,s/2-15,!0),48),g);const C=new Zi(o,s-30,56,48);H(x,C,g,!0),H(x,new Ii(Fe(-s/2+15,-s/2),8),g)}else H(x,new Ii(Fe(s/2,-s/2,!0),64),g);const V=new Vo(Fe(s/2,-s/2,!0),{depth:r?.3:c,bevelEnabled:!1,curveSegments:48,steps:1});V.translate(0,0,-(r?.3:c)/2),de.push(V);const ce=new pi;if(ce.visible=!1,q.push(ce),w=new ut(V,[ce,$(r?n.stock:"#e2d5dc")]),U.add(w),!r){const x=D.front,g=n.badgeRelief||[420,590].flatMap(C=>[120,290,460].map(B=>({u:B/585,v:C/x.image.height,r:80/585})));for(const C of g){const B=C.r*o,Z=(C.u-.5)*o,G=s/2-C.v*s,ye=new Or(B,64),le=ye.getAttribute("position"),xe=[];for(let Pe=0;Pe<le.count;Pe++)xe.push((le.getX(Pe)+Z)/o+.5,(le.getY(Pe)+G)/s+.5);ye.setAttribute("uv",new dt(xe,2)),de.push(ye);const ve=new Ct,se=new ut(ye,Te(x));se.position.z=.85,ve.add(se);const ue=new kr(B,B,1.6,64,1,!0);ue.rotateX(Math.PI/2),de.push(ue),ve.add(new ut(ue,$(n.badgeRelief?"#dfdce1":n.group==="daiso"?"#dac28d":n.stock))),ve.position.set(Z,G,0),P.add(ve),Ee.push(ve)}}}function me(){W&&cancelAnimationFrame(W),W=0,Y=!1,f.classList.remove("dragging"),f.removeAttribute("aria-busy"),v.disabled=!L}function _e(){if(!L||k)return;const D=U0(m),Q=Math.PI/180;for(const{mesh:Z,depth:G}of be){const ye=Z.geometry.getAttribute("position");for(let le=0;le<ye.count;le++)ye.setZ(le,G[le]*D);ye.needsUpdate=!0,Z.geometry.computeVertexNormals()}P.position.x=r?-o*.6*(1-D):0,y.position.x=r?o*.6*(1-D):0,y.rotation.y=Math.PI*D,y.visible=r||m>.001,w.scale.z=D,w.visible=m>.001;for(const Z of Ee)Z.visible=m>.001,Z.position.z=(c/2+.85)*D,Z.scale.z=D;q.forEach(Z=>{Z.uniforms?.clean&&(Z.uniforms.clean.value=n.cleanCutlines===!1?0:D)}),U.rotation.set(-p*D*Q,R*D*Q,0,"XYZ");const ne=f.clientWidth,ie=f.clientHeight,V=ne/ie,ce=Math.tan(A.fov*Q/2),x=Math.max(s/2/ce,o*(r?2.25:1.1)/2/ce/V)*1.16,g=Math.hypot(o,s,c)/2/Math.sin(A.fov*Q/2)*1.15;A.aspect=V,A.position.z=(x+(g-x)*D)/S,A.updateProjectionMatrix(),_.render(T,A);const C=m>=.999,B=m<=.001;i.dataset.state=f.dataset.state=B?"flat":C?"folded":"partial",d("#view-state").textContent=B?"01 / 평면 그래픽":C?"03 / 입체 패키지":"02 / 입체 전환",d("#view-hint").textContent=C?"드래그 회전 · 휠 확대/축소":"휠 확대/축소",d("#phase-text").textContent=B?r?"앞면 · 뒷면 인쇄 그래픽":"전면 인쇄 그래픽":C?"완성 · 드래그로 회전":r?"앞뒤 면 조립 · 실링과 볼륨 형성":"진열 팩 · 배지 높이감 형성",d("#progress-text").textContent=Math.round(m*100)+"%",b.value=Math.round(m*100),b.setAttribute("aria-valuetext",`${C?"입체 목업":"평면에서 입체로 전환"}, ${Math.round(m*100)}퍼센트`),v.textContent=C?"평면 그래픽으로 보기":B?"3D 목업으로 보기":"이어서 3D로 보기",h("[data-view]").forEach(Z=>Z.disabled=!C)}function ge(){L&&!k&&(_.setSize(f.clientWidth,f.clientHeight,!1),_e())}async function ze(){if(!(z||k)){z=!0;try{_=new qo({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"}),_.setPixelRatio(Math.min(devicePixelRatio,1.5)),f.append(_.domElement);const D=Object.fromEntries(await Promise.all(Object.entries(n.textures).map(async([Q,ne])=>[Q,await $l(ne)])));if(k)return;if(n.badgeRelief)for(const Q of Object.values(D))Q.generateMipmaps=!0,Q.minFilter=Sn,Q.anisotropy=Math.min(8,_.capabilities.getMaxAnisotropy()),Q.needsUpdate=!0;j(D),L=!0,v.disabled=b.disabled=d("#flat-reset").disabled=!1,ge()}catch(D){i.dataset.state=f.dataset.state="error",d("#phase-text").textContent="3D 표시 실패",f.innerHTML='<p class="render-error">3D 화면을 표시할 수 없습니다. 최신 Chrome 또는 Safari에서 다시 열어주세요.</p>',console.error(D)}}}function je(D){if(!L)return;me();const Q=m;if(matchMedia("(prefers-reduced-motion: reduce)").matches){m=D,_e();return}v.disabled=!0,f.setAttribute("aria-busy","true");const ne=performance.now(),ie=Math.max(1,2e3*Math.abs(D-Q)),V=ce=>{const x=Ea((ce-ne)/ie);m=Q+(D-Q)*x,_e(),x<1?W=requestAnimationFrame(V):(me(),_e())};W=requestAnimationFrame(V)}v.onclick=()=>je(m>=.999?0:1),d("#flat-reset").onclick=()=>{p=-12,R=-28,S=1,je(0)},b.oninput=()=>{me(),m=Number(b.value)/100,_e()};const E={front:[0,0],back:[0,180],side:[0,-82],bottom:[85,30],reset:[-12,-28]};h("[data-view]").forEach(D=>D.onclick=()=>{[p,R]=E[D.dataset.view],D.dataset.view==="reset"&&(S=1),_e()}),f.onpointerdown=D=>{m<.999||W||(Y=!0,X=D.clientX,ae=D.clientY,f.setPointerCapture(D.pointerId),f.classList.add("dragging"))},f.onpointermove=D=>{Y&&(R+=(D.clientX-X)*.5,p=Math.max(-90,Math.min(90,p-(D.clientY-ae)*.35)),X=D.clientX,ae=D.clientY,_e())},f.onpointerup=f.onpointercancel=()=>{Y=!1,f.classList.remove("dragging")},f.onkeydown=D=>{m<.999||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(D.key)||(D.preventDefault(),D.key==="ArrowLeft"&&(R-=10),D.key==="ArrowRight"&&(R+=10),D.key==="ArrowUp"&&(p=Math.max(-90,p-10)),D.key==="ArrowDown"&&(p=Math.min(90,p+10)),_e())},f.addEventListener("wheel",D=>{if(!L||W)return;D.preventDefault();const Q=D.deltaY*(D.deltaMode===1?16:D.deltaMode===2?f.clientHeight:1);S=Math.max(.65,Math.min(2.5,S*Math.exp(-Math.max(-200,Math.min(200,Q))*.0015))),_e()},{passive:!1});const oe=new ResizeObserver(ge);oe.observe(f);const te=new IntersectionObserver(D=>{D.some(Q=>Q.isIntersecting)&&(ze(),te.disconnect())},{rootMargin:"500px"});te.observe(i);const ee={getState(){return{progress:m,rx:p,ry:R,zoom:S}},setView(D,Q){p=D,R=Q,_e()},setBackground(D){T&&(T.background.set(D),_e())},destroy(){k=!0,me(),te.disconnect(),oe.disconnect(),de.forEach(D=>D.dispose()),q.forEach(D=>D.dispose()),_?.dispose(),u.innerHTML=""}};return i.viewer=ee,ee}const sl=i=>Math.max(0,Math.min(1,i)),D0=i=>i*i*(3-2*i);let I0=0;function tc(i,e,t={}){if(["retail-card","pouch"].includes(e[0].shape))return P0(i,e,t);const n=i.attachShadow({mode:"open"}),r=++I0,a=e[0],o=V=>n.querySelector(V),s=V=>n.querySelectorAll(V),c=a.title?`${a.label} ${a.title}`:a.group==="full"?"풀박스":`${a.label} ${a.group==="single"?"싱글팩":"리미티드 에디션"}`;n.innerHTML=`<style>${jl}
 :host{display:block;min-width:0;font-family:Arial,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;color:#292929}.model-name{font-size:17px;margin:0 0 9px;font-weight:600}.dimensions{font-size:11px;margin:0 0 18px;color:#555}.stage{height:470px;touch-action:pan-y}.stage canvas{display:block;width:100%;height:100%}.main-controls{padding:20px 0;flex-wrap:wrap}.scrubber{max-width:360px}.demo-notes{padding-bottom:0}.demo-notes p{margin:0}.render-error{padding:35px;font-size:12px;line-height:1.9}.viewer-bottom{min-height:55px}
 @media(max-width:700px){.stage{height:370px}.model-name{font-size:15px}.dimensions{font-size:10px}.detail-controls{display:block}.scrubber{max-width:none}.rotation-controls{margin-top:18px}.viewer-top{font-size:9px}.demo-notes{font-size:10px}}
 ${Ql}</style><div class="widget"><h4 class="model-name">${c}</h4><p class="dimensions">${a.dimensionNote||`${a.dimensions.join(" × ")} mm · ${a.group==="single"?"제공 사양 기준":"인수인계 규격 기록 기준"}`}</p>
 <section class="viewer" aria-label="${c} 전개도 접힘 뷰어"><div class="viewer-top"><span id="view-state">01 / 평면 전개도</span><span id="view-hint">자료를 불러오는 중</span></div><div class="stage" tabindex="0" role="group" aria-label="${c}. 마우스 휠로 확대·축소하고, 접은 후 드래그 또는 방향키로 회전할 수 있습니다." data-state="loading"></div><div class="viewer-bottom"><span id="phase-text" aria-live="polite">자료를 불러오는 중</span><span id="progress-text">0%</span></div></section>
 <div class="main-controls"><button id="fold-toggle" class="primary" disabled>접어서 3D로 보기</button><button id="flat-reset" disabled>전개도로 초기화</button>${a.shape==="display"?'<button id="display-toggle" disabled aria-pressed="false">진열형으로 보기</button>':""}</div>
 <div class="detail-controls"><div class="scrubber"><label for="fold-progress-${r}">접힘 단계 직접 살펴보기</label><input id="fold-progress-${r}" class="fold-progress" type="range" min="0" max="100" step="1" value="0" disabled aria-valuetext="평면 전개도, 0퍼센트"/></div><div class="rotation-controls" role="group" aria-label="완성된 패키지 시점"><button data-view="front" disabled>정면</button><button data-view="back" disabled>뒷면</button><button data-view="side" disabled>측면</button><button data-view="bottom" disabled>바닥</button><button data-view="reset" disabled>초기 시점</button></div></div>
 <div class="demo-notes"><p>전개도 → 약 2초 접힘 → 드래그 회전 · 휠 확대/축소 → 다시 펼치기. 칼선은 펼친 전개도에서만 표시합니다.</p><p>제공 그래픽과 규격 기록을 바탕으로 한 시각적 시연입니다. 생산용 조립·접착 순서와 종이 두께의 정밀 검증은 별도입니다.</p></div></div>`;const l=o(".stage"),u=o("#fold-toggle"),d=o(".fold-progress"),[h,f,v]=a.dimensions,{tuck:b,dustTop:m,bottom:p,dustBottom:R,glue:S}=a.heights;let _,T,A,U,P,y,w=!1,L=!1,k=!1,z=t.progress??0,W=0,Y=t.rx??-12,X=t.ry??-28,ae=t.zoom??1,q=!1,de=0,be=0,Ee=t.displayOpen??!1;const $={},Te=[],Fe=[],Ue=[],H=(V,ce)=>D0(sl((z-V)/(ce-V)));i.dataset.variant=a.id,i.dataset.state="loading",i.dataset.dimensions=a.dimensions.join(",");function j(){W&&cancelAnimationFrame(W),W=0,q=!1,l.classList.remove("dragging"),l.removeAttribute("aria-busy"),u.disabled=!w}function me(V,ce,x,g=0,C=0,B=0){const Z=x||[[0,0],[100,0],[100,100],[0,100]],G=Z.map(([se,ue])=>new Me(g+V*se/100-B,-C-ce*ue/100)),ye=Zt.triangulateShape(G,[]),le=[],xe=[];for(const se of ye){let[ue,Pe,De]=se;const Se=G[ue],Ve=G[Pe],I=G[De];(Ve.x-Se.x)*(I.y-Se.y)-(Ve.y-Se.y)*(I.x-Se.x)<0&&([Pe,De]=[De,Pe]);for(const he of[ue,Pe,De])le.push(G[he].x,G[he].y,0),xe.push(Z[he][0]/100,1-Z[he][1]/100)}const ve=new Bt;return ve.setAttribute("position",new dt(le,3)),ve.setAttribute("uv",new dt(xe,2)),ve.computeVertexNormals(),Fe.push(ve),ve}function _e(V,ce){const x=ec(V,ce,a.stock);return Te.push(x),x}function ge(V,ce,x,g,C=0,B=0){const Z=new Ct;if(ce.add(Z),$[V]=Z,a.shape==="display"&&["front","left","right"].includes(V)){const G=a.tearHeight*100,ye=V==="front"?[[0,G],[100,G],[100,100],[0,100]]:V==="left"?[[0,0],[100,G],[100,100],[0,100]]:[[0,G],[100,0],[100,100],[0,100]],le=V==="front"?[[0,0],[100,0],[100,G],[0,G]]:V==="left"?[[0,0],[100,0],[100,G]]:[[0,0],[100,0],[0,G]];Z.add(new ut(me(x,g,ye,C,B),_e(ze[V],ye)));const xe=new ut(me(x,g,le,C,B),_e(ze[V],le));Z.add(xe),Ue.push(xe)}else if(V==="bottom-front"||V==="bottom-back"){Z.add(new ut(me(x,g,a.bottomMain),_e(ze[V],a.bottomMain)));const G=new Ct;G.position.x=x,Z.add(G),G.add(new ut(me(x,g,a.bottomTab,0,0,x),_e(ze[V],a.bottomTab))),$[V+"-tab"]=G}else Z.add(new ut(me(x,g,null,C,B),_e(ze[V])));return Z}let ze={};function je(){T=new Oo,T.background=new Ze("#f7f7f5"),A=new Ut(30,1,10,5e3),A.position.z=1e3,U=new Ct,T.add(U),P=new Ct,P.position.set(-h/2,f/2,v/2),U.add(P);const V=ge("left",P,v,f,-v,0),ce=ge("back",V,h,f,-h,0);ce.position.x=-v;const x=ge("glue",ce,S,f,-S,0);x.position.x=-h;const g=ge("right",P,v,f);g.position.x=h,ge("front",P,h,f);const C=ge("lid",P,h,v,0,-v),B=ge("lid-tuck",C,h,b,0,-b);B.position.y=v,ge("dust-left-top",V,v,m,-v,-m),ge("dust-right-top",g,v,m,0,-m);const Z=ge("dust-left-bottom",V,v,R,-v,0);Z.position.y=-f;const G=ge("dust-right-bottom",g,v,R);G.position.y=-f;const ye=ge("bottom-front",P,h,p);ye.position.y=-f,ge("bottom-back",ce,h,p).position.set(-h,-f,0);const xe=me(h,v),ve=new pi({color:a.stock,side:Ot});if(Te.push(ve),y=new ut(xe,ve),y.rotation.x=Math.PI/2,y.position.y=-f+(a.shape==="display"?1:.32),P.add(y),a.shape==="display"){const se=new pi({color:"#fff9fc",side:yt});Te.push(se),ve.side=pn,y.add(new ut(xe,se))}}function E(){if(!w||L)return;const V=Math.PI/180;$.left.rotation.y=-90*V*H(.08,.32),$.back.rotation.y=-90*V*H(.26,.52),$.right.rotation.y=90*V*H(.4,.61),$.glue.rotation.y=-90*V*H(.5,.65);for(const ue of["dust-left-top","dust-right-top"])$[ue].rotation.x=-90*V*H(.61,.73);for(const ue of["dust-left-bottom","dust-right-bottom"])$[ue].rotation.x=90*V*H(.62,.73);$["bottom-back"].rotation.x=90*V*H(.69,.82),$["bottom-front"].rotation.x=90*V*H(.74,.87);const ce=new N(a.diagonal[0]*h,a.diagonal[1]*p,0).normalize();for(const ue of["bottom-front-tab","bottom-back-tab"])$[ue].quaternion.setFromAxisAngle(ce,Math.PI*H(.57,.74)),$[ue].position.z=-.35*H(.57,.74);$.lid.rotation.x=-90*V*H(.76,.94),$["lid-tuck"].rotation.x=-90*V*H(.87,.98);const x=H(.6,1);if($["dust-left-top"].position.y=$["dust-right-top"].position.y=-.4*x,$["dust-left-bottom"].position.y=$["dust-right-bottom"].position.y=-f+.6*x,$["bottom-back"].position.y=-f+.25*x,$.glue.position.set(-h+.65*x,0,0),$["lid-tuck"].position.set(0,v-.65*x,0),a.shape==="display"){const ue=Ee&&z>=.999;Ue.forEach(Pe=>Pe.visible=!ue);for(const Pe of["lid","dust-left-top","dust-right-top"])$[Pe].visible=!ue;o("#display-toggle").disabled=z<.999,o("#display-toggle").textContent=ue?"상단 닫힌 형태로 보기":"진열형으로 보기",o("#display-toggle").setAttribute("aria-pressed",String(ue))}y.visible=z>.88,Te.forEach(ue=>{ue.uniforms&&(ue.uniforms.clean.value=H(.03,.65))});const g=H(0,1);U.rotation.set(-Y*g*V,X*g*V,0,"XYZ"),U.position.set((h+S)/2*(1-g),-(v+b-p)/2*(1-g),0);const C=l.clientWidth,B=l.clientHeight,Z=C/B;A.aspect=Z;const G=Math.tan(A.fov*V/2),ye=Math.max((f+v+b+p)/2/G,(2*h+2*v+S)/2/G/Z)*1.13,le=Math.hypot(h,f,v)/2/Math.sin(A.fov*V/2)*1.12;A.position.z=(ye+(le-ye)*g)/ae,A.updateProjectionMatrix(),_.render(T,A);const xe=z>=.999,ve=z<=.001;l.dataset.state=i.dataset.state=ve?"flat":xe?"folded":"partial",o("#view-state").textContent=ve?"01 / 평면 전개도":xe?"03 / 입체 패키지":"02 / 접힘 과정",o("#view-hint").textContent=xe?"드래그 회전 · 휠 확대/축소":"휠 확대/축소 · 연결된 면 접기";const se=ve?"평면 전개도":z<.61?"옆면과 뒷면 접기":z<.76?"안쪽 날개 접기":z<.9?"바닥과 덮개 접기":xe?"완성 · 드래그로 회전":"덮개 마무리";o("#phase-text").textContent=se,o("#progress-text").textContent=Math.round(z*100)+"%",d.value=Math.round(z*100),d.setAttribute("aria-valuetext",se+", "+Math.round(z*100)+"퍼센트"),u.textContent=xe?"전개도로 펼치기":ve?"접어서 3D로 보기":"이어서 접기",s("[data-view]").forEach(ue=>ue.disabled=!xe)}function oe(){!_||!w||(_.setSize(l.clientWidth,l.clientHeight,!1),E())}async function te(){if(!(k||L)){k=!0;try{_=new qo({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"}),_.setPixelRatio(Math.min(devicePixelRatio,1.5)),l.append(_.domElement),_.domElement.addEventListener("webglcontextlost",ce=>{ce.preventDefault(),j(),o("#phase-text").textContent="3D 화면이 중단됐습니다. 페이지를 새로 열어주세요."});const V=await Promise.all(Object.entries(a.textures).map(async([ce,x])=>[ce,await $l(x)]));if(L)return;ze=Object.fromEntries(V),je(),w=!0,u.disabled=d.disabled=o("#flat-reset").disabled=!1,oe()}catch(V){i.dataset.state=l.dataset.state="error",l.innerHTML='<p class="render-error">이 브라우저에서 3D 화면을 표시할 수 없습니다. 최신 Chrome 또는 Safari에서 다시 열어주세요.</p>',o("#phase-text").textContent="3D 표시 실패",console.error(V)}}}function ee(V){if(!w)return;j();const ce=z;if(matchMedia("(prefers-reduced-motion: reduce)").matches||Math.abs(V-ce)<1e-4){z=V,E();return}const x=performance.now(),g=2e3*Math.abs(V-ce);u.disabled=!0,l.setAttribute("aria-busy","true");const C=B=>{const Z=sl((B-x)/g);z=ce+(V-ce)*Z,E(),Z<1?W=requestAnimationFrame(C):(j(),E())};W=requestAnimationFrame(C)}u.onclick=()=>{Y=-12,X=-28,ee(z>=.999?0:1)},o("#flat-reset").onclick=()=>{Y=-12,X=-28,ae=1,ee(0)},d.oninput=()=>{j(),z=Number(d.value)/100,E()},o("#display-toggle")&&(o("#display-toggle").onclick=()=>{Ee=!Ee,E()});const D={front:[0,0],back:[0,180],side:[0,-90],bottom:[85,30],reset:[-12,-28]};s("[data-view]").forEach(V=>V.onclick=()=>{[Y,X]=D[V.dataset.view],V.dataset.view==="reset"&&(ae=1),E()}),l.onpointerdown=V=>{z<.999||W||(q=!0,de=V.clientX,be=V.clientY,l.setPointerCapture(V.pointerId),l.classList.add("dragging"))},l.onpointermove=V=>{q&&(X+=(V.clientX-de)*.5,Y=Math.max(-90,Math.min(90,Y-(V.clientY-be)*.35)),de=V.clientX,be=V.clientY,E())},l.onpointerup=l.onpointercancel=()=>{q=!1,l.classList.remove("dragging")},l.onkeydown=V=>{z<.999||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(V.key)||(V.preventDefault(),V.key==="ArrowLeft"&&(X-=10),V.key==="ArrowRight"&&(X+=10),V.key==="ArrowUp"&&(Y=Math.max(-90,Y-10)),V.key==="ArrowDown"&&(Y=Math.min(90,Y+10)),E())},l.addEventListener("wheel",V=>{if(!w||W)return;V.preventDefault();const ce=V.deltaY*(V.deltaMode===1?16:V.deltaMode===2?l.clientHeight:1);ae=Math.max(.65,Math.min(2.5,ae*Math.exp(-Math.max(-200,Math.min(200,ce))*.0015))),E()},{passive:!1});const Q=new ResizeObserver(oe);Q.observe(l);const ne=new IntersectionObserver(V=>{V.some(ce=>ce.isIntersecting)&&(te(),ne.disconnect())},{rootMargin:"500px"});ne.observe(i);const ie={getState(){return{progress:z,rx:Y,ry:X,zoom:ae,displayOpen:Ee}},getInteriorBounds(){if(!w)return null;P.updateWorldMatrix(!0,!0);const V=new lt().copy(P.matrixWorld).invert(),ce={};for(const x of["glue","lid-tuck"]){const g=new xi;$[x].traverse(C=>{if(!C.isMesh)return;const B=C.geometry.getAttribute("position");for(let Z=0;Z<B.count;Z++)g.expandByPoint(new N().fromBufferAttribute(B,Z).applyMatrix4(C.matrixWorld).applyMatrix4(V))}),ce[x]={min:g.min.toArray(),max:g.max.toArray()}}return ce},setBackground(V){T&&(T.background.set(V),E())},setView(V,ce){Y=V,X=ce,E()},projectBottom(){return w?(P.updateWorldMatrix(!0,!1),[[0,-f,0],[h,-f,0],[h,-f,-v],[0,-f,-v]].map(V=>{const ce=new N(...V).applyMatrix4(P.matrixWorld).project(A);return[(ce.x+1)/2*l.clientWidth,(1-ce.y)/2*l.clientHeight]})):[]},destroy(){L=!0,j(),ne.disconnect(),Q.disconnect(),Fe.forEach(V=>V.dispose()),Te.forEach(V=>V.dispose()),_?.dispose(),n.innerHTML=""}};return i.viewer=ie,ie}const N0=[{id:"single-pink",group:"single",label:"하츄핑",dimensions:[120,140,40],stock:"#efa0c3",shape:"single",heights:{tuck:15.163727959697733,dustTop:27.858942065491185,bottom:33.14861460957179,dustBottom:22.216624685138537,glue:15.163727959697733},bottomMain:[[0,0],[100,0],[78.46607669616519,77.6595744680851],[65.78171091445427,59.57446808510638],[49.557522123893804,59.57446808510638],[49.557522123893804,72.3404255319149],[40.117994100294986,72.3404255319149],[32.743362831858406,100],[3.8348082595870205,100]],bottomTab:[[100,0],[96.16519174041298,12.76595744680851],[98.82005899705014,36.17021276595745],[97.05014749262537,100],[78.46607669616519,77.6595744680851]],diagonal:[.2153392330383481,.776595744680851],source:"싱글팩-01.png",textures:{front:new URL(""+new URL("front-e5GXidIH.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-DMiR0G3S.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-BRXMtE7b.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-CMX7rSdK.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGNCAYAAACIb4iHAAADWUlEQVR4nO3YTW6rQBAA4bblKyB5wf1PxgLJhyAbY2GCMWBqfqSqVV6yeJ86zTjDZRiGKK2+aRe/f0vsWOwTLiKGiIj7o4u+afNgV3AREcP90S3+IAn2KG4ehl0D3h/doQflNOxZ01vrMPYL7vD01tqFJX61e1rF5sbNe8Pm+NXu6Vba9NZ6m+zziS0KOO0WJx0rKbrmBuxJLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSixVddhLbsTWqptsNV0jIvqmze3Y1DjZKva2vjWopWqxxe9tXZO9P7rchs29JlvDWTtfg6L3tq6dzQ3Y0zUiYnzInntb7CrUN9laemFnq1BknyZb5N7WuQYR5a9CvZOd1jdtcXv7D1vyX2Gra1Da7i5iS53utwfsUtJ0P2JLnO7qZJ/gYqa79ZwtAvwVO1mH7Ofurk+w3B8Um7DThy0nePNkF8DJ0bvWYOE4Swo+/FfX5HRIBt6Nna3D+GUS8KHJ5gIfXoMc4J9uCqnBP19rUoJPuYOlAp92YZyDifdmp95u5x8aE/Ap6NOv4vdHh60F9t6AWAv0JcfKWhzqMgzDj6RtzW8a90e36z/umzbd66OFKe++KiV91zV/+GLn3S7ZGiw1gQ4R69f/vmnzYqeQeIIjltFJd3at8f3E+O/JUfdWEdiI1z6/HWtzcBFrsFTftP9gxWKfDdPpFrMGH7pMH7bSJzs2RJQ/2bFLRMQfLcG714zJpU8AAAAASUVORK5CYII=",import.meta.url).href,lid:new URL(""+new URL("lid-BCx3X8mq.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BNtBl9OP.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-CYDHFBH2.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-DIjeEmX6.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CqsAvOWF.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-BpulUVxU.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-DqrnRkT3.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-v27nUHFX.png",import.meta.url).href,import.meta.url).href}},{id:"single-lavender",group:"single",label:"다이아나핑",dimensions:[120,140,40],stock:"#b6a1ca",shape:"single",heights:{tuck:15.202020202020202,dustTop:27.92929292929293,bottom:33.23232323232323,dustBottom:22.272727272727273,glue:15.202020202020202},bottomMain:[[0,0],[100,0],[78.46607669616519,77.6595744680851],[65.78171091445427,59.57446808510638],[49.557522123893804,59.57446808510638],[49.557522123893804,72.3404255319149],[40.117994100294986,72.3404255319149],[32.743362831858406,100],[3.8348082595870205,100]],bottomTab:[[100,0],[96.16519174041298,12.76595744680851],[98.82005899705014,36.17021276595745],[97.05014749262537,100],[78.46607669616519,77.6595744680851]],diagonal:[.2153392330383481,.776595744680851],source:"싱글팩-02.png",textures:{front:new URL(""+new URL("front-Bk8Csp7z.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-DdBvJthX.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-BR6quRuh.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DYNtUgPc.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGMCAYAAABDM1siAAAET0lEQVR4nO3dzW7TQBiF4TMhoiwQu0gVigR3wf3fSxeRegUptMOChgbjOHbqY88rnXcLi0eTL/6ZxGmptaqVDrv9xX97/vFV2wUtvQ0B7x8f6un/1O12eewVnCRdfKnt2CGc9LZ6Y5odOwInDazeULNg3/PSTukm7AicNBPwvFFY50s7uk93/dgmcJ3K8fiGXeulndL2EnKN1Ruq1rOZbWX1htpKqmfQZitF2qyNmFKwroJ1VAXCFoGwQh26KgmrYH0F6ypYV8G6CtYVBltJ1wa5YXQWrCsMFnU0kIL1FayrYF0F6ypYV8G6CtZVsK6CdRWsq2BdYbDZN3AWrKtgXQXrKlhXwboK1lWwrjhY1MU36iN81MoqWF8YbL2742DL8cjBSqAxkIL1FayrYF0F6ypYV8E6yqc1zoJ1FayrYF0F64qDRZ1uUfuzImFRY6BgfQVrKYcuVzl0GcNgUT8nJAXrK1hXwboK1lWwroJ1FayrYF1xsLWCsKWAsMoYmMoYGAvWVbCugnUVrKtgLeVCxhgHSxoD1oNAT08crESaWQXrK1hLpONsTrfOOFjUzIq0sgrWFwib46wvEJZ0nCVdG6D+ugoKi3rgsr6Q3mA5KRgL1lWwroL1hDopoFY2ZzBfwboK1lWwroK1lJ1vY8G6CtZVsK6CdRWsI9RPBhSBsFKwvoJ1FayrYF1xsKTvG7A+UyB9hC8Fa4r1BiOtbHYRjWGwLx9BTy1tnvLni3xxsKTvIkokbK66jAXrKlhXwboK1hUHuyHd3bKeUyCNgUhY1Mxmk8NUIY0B6nmwzKwzDhY1syJhSYcu1lUX6tOaHGeNcbCoowHqpJA3mCnUtzylYH1hsKgfENl8AJ0Uyga0sqgxkEBY1CYHC/tMwpJuGFEXMqjHVVArK5GwpEOXRMLm2sBYsK6CdYQ63aIOXazPbl9AK1tJW56sN5iC9RWsKwwW9SBQyYNAplAnhWxyOAvWEeoNJgXri4PN97qMBesqWFcb/TmTIcKtLCYkFjG3yJVFhMF2726bn1vMykqv2MNuv7ZjVJiV7bu7bXpuMSsr0bD3jw+S/nmTNTsKrJVdGzCljST1jEJzDW0mNzm3vDGQGKPAXNnzXle3rbntfnHyNAqtdnEMWpzd/7Atr+7gG+yw2zc1t73YVlf36qGrpdW9iO2sbhPgwZXtnNVWB48+g7UAvoo9H4e1waNWtufoULQCevKFTOfMtih4NLZnHE4tBp60smuDJ4/BmuCbLr7XAt98p7AGeLbbmiXA78LePz4susKzrOxS4NnG4Ap4FvSst+IDYGkG8Oz7Bl3wnGNh2eRwvfGsOzIDq3wT2L591L28PENPAi/2FH53LKTbLuQX3Zjrm+Wxd8+r/cxFD7qM2a5adcuze7vfc6j7WxO/HNFZ5SJd3hRcHXvqDF10YZWbwZ4aWuVSa12BNK5XaJWkn9+/tI09ddjt669vnxnY1+pvSwkiXPbOs+0AAAAASUVORK5CYII=",import.meta.url).href,lid:new URL(""+new URL("lid-Dutmkx9N.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-CKc2vOVf.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-D0z99_53.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-DZhGv1a9.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CsI1X4sH.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CrG4jeDt.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-ogJ-mMfB.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-CUupCh0Q.png",import.meta.url).href,import.meta.url).href}},{id:"single-purple",group:"single",label:"이클립스핑",dimensions:[120,140,40],stock:"#755695",shape:"single",heights:{tuck:15.202020202020202,dustTop:27.92929292929293,bottom:33.23232323232323,dustBottom:22.272727272727273,glue:15.202020202020202},bottomMain:[[0,0],[100,0],[78.46607669616519,77.6595744680851],[65.78171091445427,59.57446808510638],[49.557522123893804,59.57446808510638],[49.557522123893804,72.3404255319149],[40.117994100294986,72.3404255319149],[32.743362831858406,100],[3.8348082595870205,100]],bottomTab:[[100,0],[96.16519174041298,12.76595744680851],[98.82005899705014,36.17021276595745],[97.05014749262537,100],[78.46607669616519,77.6595744680851]],diagonal:[.2153392330383481,.776595744680851],source:"싱글팩-03.png",textures:{front:new URL(""+new URL("front-BebZoQRK.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-BJJUt85G.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-DNKqWfXl.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DOd5pDR6.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGMCAYAAABDM1siAAAEaUlEQVR4nO2du27bQBBFL2klSJqkMuAARv7/w1wIcBekyUubxkpkmqQoiZe7B7intWEcjIa7M7NLuSulqBX294+TP/v29Yt2G7qMMif48PxUjr9zuNttL3tGTpImP2q77Jyc9D96S1hddoGcNBO9OVaRveWjvYSrZBfISSsJnrJI1vnRXsKobCtyQ/7J1vpoF9NLuynJWtGb5HAS2Said4adpHIi2i691Nd2uITIusDIdgLJFoFku44kS1q6yh+QrBRZHxhZ1tIlkGwi6wQjWw4g2XQKTjCyqNUAtc5KIFlUp5Di20lkXUTWRWRdRNZFZF1E1kIhySqyPiLrAiOLasUz5HDBiixqPqvI+sDIolYD5QEzElkXkXURWRccWdLRkkSSRW23qPsGiawLVGQVWQ+stkYk2YzpjUTWBUcWVc9mNTCCkUVtt6wzBYFkUZGVQLKFtM6yLvuSIitF1kdkLWQiYySyLiLrIrIuIusisi4i6yKyLjCyhdSKp1NwElkXkXURWReRdYA6rZEi6wMjm0M7FzlacpETRicY2aSBC1RkJZAsqkRMbeAksi4wsqhNQYqsB9R2m5x1gpFF5WzeYXQSWQeoTgH1IlCWLhf56mwnkXURWReRdRFZBz1pu9UdSVYkWVIhc0jDaCSyLiLrIrIuIusisi4i6yKyLiLrIrIO8s8fnETWRWRdcGRRx6EiyZJOxSWSbHLWSGQtoFaDPGBGImsB9YApsj4wsh3qvoFAsqz3FFCyAsmiHrBMEZ1E1kVkXWBkUess6g0QVCGTHcxJZF1E1gVHlrQpSCRZ0g7WkV6qyAuXTjCyPSln80azi34HkkV9zQWrByPJoqou1GoggWRRVReqns1ExklkHaCGyRJIlrUakGoDKbI+IusAdQ7WvwPJ7t6DZDvS3ABVGxx+RdbDgdSK//kJkk3VZeNQQLIiRVaR9RFZF5G10HcgWZEiK5Asq7sl9WCH3yBZ1nGoIusjsi4i6yKyLiLrIrIuIusishZQxTepYWRFVpH1gZFFnd2yrkoJKNvVllgKLrIYkLKIvOVEFlV1CSzbdt6iLkccTxj394+1VRbBiazeyrabt+nBXHRS//D8JOnVQ9ZsKnAiK6LsSCo0yVRkm8xbThqc1gaEVOBEVhOyL9FtKm+LBve6jqnQKpNp0GLuvpFtObqzD9j+/rGpvB2VbTW6Z5eulqI7KTuIbhPCs5Ed7GrVhRfvYC0In5U9TYfawosiO7I6dKogfXEhM9jZthO+ZIo4kg4nf2YDLp0b1BS+6v5sTeGriu8awjddUK8hvFpbs4XwTbIPz0+bRniVyG4ivOZpzRnhm6VXP8KfEZZWEF59bjAUXistbDc5HA+e/SbHTJSvEraPj4bl5Yn0xcKbzLqGaSFdV8hvOpgby+VLuucqU8QR6W7JuKrqyHPY7o8sda+oPp8dRLmTpoeC1WWPnEh3mohyM7JH5qLclVIqKC3jRbRI0vdPn9uWPbK/fyw/PnxkyL5Q/gKnQS31mWptmAAAAABJRU5ErkJggg==",import.meta.url).href,lid:new URL(""+new URL("lid--WvKRmvn.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-Bf_4jwr7.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-BVLFq6Tn.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-j0Gldl1h.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-BDvY_-gu.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-h6fJxT8y.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-BIObAEvy.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-B5VtVAMG.png",import.meta.url).href,import.meta.url).href}},{id:"full-box",group:"full",label:"풀박스",dimensions:[127,146,125],stock:"#c9b9d8",shape:"full",heights:{tuck:18.33816425120773,dustTop:59.951690821256044,bottom:80.05314009661836,dustBottom:63.1256038647343,glue:17.280193236714975},bottomMain:[[0,0],[100,0],[50,78.4],[50,83.3],[36.1,100],[12.2,100],[7.8,95.2]],bottomTab:[[100,0],[96.1,15],[97.2,91.2],[93.6,100],[64.2,100],[50,78.4]],diagonal:[.5,.784],source:"풀박스.png",textures:{front:new URL(""+new URL("front-DxgCBSra.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-B66TpQTD.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-CZM9lG24.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DlVhPi0m.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-CQnXX3_1.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-CO3tq9Ga.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BYEAbdVL.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-KkK1Ws7B.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-D50KtCWr.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CB884Hev.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-VKOVXq2_.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-DWjBssOd.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-ByTnCZtZ.png",import.meta.url).href,import.meta.url).href}},{id:"limited-blue",group:"limited",label:"다이아나핑",dimensions:[209,146,125],stock:"#9fcde1",shape:"limited",heights:{tuck:18.38256658595642,dustTop:71.76271186440678,bottom:80.24697336561744,dustBottom:62.924939467312356,glue:17.322033898305087},bottomMain:[[0,0],[100,0],[69.93,78.41],[49.83,78.41],[49.83,83.26],[41.72,100],[4.73,100],[2.2,95.2]],bottomTab:[[100,0],[98.14,7.5],[99.49,15.86],[98.31,93.83],[96.79,100],[78.38,100],[69.93,78.41]],diagonal:[.3007,.7841],source:"리미티드에디션-01.png",textures:{front:new URL(""+new URL("front-2otkuX8h.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-CMJ_d1NQ.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-wqLkAjir.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DXKBYbHJ.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-CJCr71zt.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-CzDDMAwJ.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-DUmjOo3O.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-Bj0Dh9Oc.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-Q3POZwDJ.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-DxCSGxKt.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CWdBHUTi.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-Bb1hcE2j.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BYQrNlEn.png",import.meta.url).href,import.meta.url).href}},{id:"limited-purple",group:"limited",label:"이클립스핑",dimensions:[209,146,125],stock:"#aa9ccf",shape:"limited",heights:{tuck:18.38256658595642,dustTop:71.76271186440678,bottom:80.24697336561744,dustBottom:62.924939467312356,glue:17.322033898305087},bottomMain:[[0,0],[100,0],[69.93,78.41],[49.83,78.41],[49.83,83.26],[41.72,100],[4.73,100],[2.2,95.2]],bottomTab:[[100,0],[98.14,7.5],[99.49,15.86],[98.31,93.83],[96.79,100],[78.38,100],[69.93,78.41]],diagonal:[.3007,.7841],source:"리미티드에디션-02.png",textures:{front:new URL(""+new URL("front-CyY7EI6N.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-DCRdAkby.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-0rCWM6j1.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DQF4vOVd.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-B7axEelj.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-D8iIkkkk.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-DjM59GgK.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-4uccvSD8.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-B8s4zKWp.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-DbEP0n3K.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CwaMzh0v.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-DUqWrnmA.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-DZShgkQG.png",import.meta.url).href,import.meta.url).href}}],F0=[{id:"daiso-1",group:"daiso",label:"골드",stock:"#efa0c3",shape:"retail-card",dimensions:[156,252,4],dimensionNote:"PDF 페이지 기준 156 × 252 mm · 두께 약 4 mm 추정 · 완성 치수 미확인 · 후면 무지",title:"다이소 딱지",hole:[.4994350282485876,.0556333100069979,.024858757062146894],sealLines:[.18254000329300415],badgeRelief:[{u:.2940851103019957,v:.451894840211118,r:.14070510924886817},{u:.42171302061058896,v:.6236498277153891,r:.14070510924886817},{u:.8164319708260211,v:.4427111267226432,r:.14070511787540424},{u:.8171423143119133,v:.7236463117029215,r:.14070511787540424},{u:.5057638373261658,v:.30263870113800034,r:.14070511787540424},{u:.23012496124097345,v:.8107780350300792,r:.17275697812579602}],cleanCutlines:!1,source:"다이소딱지.pdf",sourcePage:3,textures:{front:new URL(""+new URL("front-cJB8hgW8.png",import.meta.url).href,import.meta.url).href}},{id:"display-1",group:"display",label:"하츄핑",stock:"#efa0c3",shape:"display",dimensions:[250,146.3150289017341,127.16763005780348],dimensionNote:"추정 약 250 × 146 × 127 mm · 파우치 20개 수납과 전개도 비율 기준",title:"딱지 파우치 디스플레이 박스",heights:{tuck:25.65028901734104,dustTop:76.58959537572255,bottom:74.78323699421965,dustBottom:63.58381502890174,glue:15.534682080924856},bottomMain:[[0,0],[100,0],[74.56647398843931,85.02415458937197],[50,85.02415458937197],[50,89.3719806763285],[46.82080924855491,100],[5.202312138728324,100]],bottomTab:[[100,0],[98.121387283237,7.246376811594203],[98.121387283237,100],[78.90173410404624,100],[74.56647398843931,85.02415458937197]],diagonal:[.2543352601156069,.8502415458937198],tearHeight:.6345679012345679,source:"딱지파우치_디스플레이박스-01.png",textures:{front:new URL(""+new URL("front-BIsDPo87.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-sAgV_f8P.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-5gk4WA1-.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DHm7xnd6.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGVCAYAAABn6ghxAAALIklEQVR4nO2dy44dRxnHf3V8bMdOHCeWhsTBwvbE4/gix5YnCCJE2LDgKXgCtjwFCzZ5DiTegD0IdrBBCAkhj0ABgRUsOdP9sejTPX3O9KWuXZfjv+SJ4+mu+vevv657VysRIUWdHNxq/vL0W8if/wXrC6hUzHbmHrwP/3yFvK5R33+I+vhTUYefIX/8DevoBo+/DS+/bv7h+CPUk++JunsMd4+3D17a7MnBLXh0A65egd/9He6/h7r3CHX4XLj7Gbz1zuT5Qc2e3dob8NUr5PolVkcP4PAZ6qfHwnsfzaahgDZQvZptzcn99+F/36AAfvwUdfQUdfdY+PC+U/rOZk8ObiGH14ENhWc34d5j+OSHyO3nohSs3rqI7YMs3Q8LsycHt5APr8K7l+FvL+HOdXj0CPXgB8jt53D52nlXnkqcWbPdrX1wA/XVK+TaJXh8BA8/hzvP4fpNkHE7IkAtsFJhzJ4c3NqKO/n8Y9S9J8gnX8AHR3AW81qqa0H5Mtvd2qsXUX/5Dzz9AHX/U7j7DDn6go27YYMatqWqWV28ACJmV7lr9sXhIdx5F548hjvPkAc/gstdeTdxg/UlAiKCUsopftfq5Wvkl786M9eT2v2HHc39vpMIclqjLl6wMtlqtcmv/RNMUtXOaawmM5i5ZVp3dHOQiDSlgqFU92PGrF8pqtPKKYXlzIoglbCC5kHTPa339+XMbkqCqrIvYMbN+m6Ut7F7WllXZgvGbCORpkazUXizA/FpW4wtThag9mnWvckxoba8rUWrVFCclR5RyALUp5p0lULqGpGRJqJu+Lu0S6SWnZNVl2ZLv6pqpGpaAqqSuF3xuhLUhU0oiCBVTV3VTdUsnMXjbLdGA5trSSynFVI1+TSkpzNwJ6vTThy6cGlrMv1LjvaA2WjSrEmDw4tmsiuHrEkR5uegaZVDFtAi4rUxOZFdYWR1tUDc7ilZnxq5AWmaHZGe2aVrshEVSBb06AYuEQolqytfdAcO2XOyPrVDN22zOzIzG7m8LZispkL1HMzNRmyM5xsGXh+fAKGQL1n9rnecwY98yerK6+CHgfIla0TCFzaDdPIl631SUfdATbr5kg0ijyXC/pBduibbH7I6T7s2e427tD9kgVkiPovuPSOrI93AnblLb8iGkh+zC1UOe0hWQ9rwJw7cU7ILVA57SlZHjnH7hmwo7bHZwDXZHpPVkEtNtudkA9ZkGZJNbM3h2XHbB2ZINhPlZ1Yp/MZtoGcgP7IxXsS3gR+ObIDZnGhhYHMzt82mWjlslN8Dlrxiv7Vko6Bmfc/m5EvWd7Xru67Jl2yQanfmTul3IHMm22nBmszkZhZAVlPe+GsmtD9kl26z50/WewfSk/Inm2oHMn+y3uVpnXhBZBPr7eZHNsEidVALrjfY13fFhy7cZ7X7Zr1BX7rVro/1LzqHlEO209ysoceGz1RSBZLVVOgOZL5kXYvU0G32fMmOPdU+azKXNkK+ZJUaBrhUOTqn/Mj6mqgI3UbIj6z2ttaR2wj5kU1Wxe0ckWrXPH+ySwx52pTt+ZMdayN0v/Qg5zUyi+9boKG+pXzDYPHPwhiOiOdLVluRYrscsskUDsXtdpJatVsO2bFqN9bwfYZkldr6CM5cHMX6/pnXcYPQWgNcOnin2cG8qpHNfvBS1UhdQyXNxxo2m9kHkeYm92sAdeki1DVUzR9V1UilqE8Vojb/z6r5fUStAV7/47/N54VEqNtN7HvGRi/a8XNEpmmtAeSb08YUva66Uss3GWfUmJ35gIhPgC4ZZVjO7mi3KJuk6rvYK3rLgPbBaglPds3bA3yq+BfbjYquEHRdXrhcPBzYftjLCYMxLTEW1kp6aZZPdlYh2sd5vlRhSWLJ2IUsyUKHyWdLUK3mCmYzZUp2I5ue7hLrFCB3ssCiDWoTFUAWrGiELncLIQvJxW5BZMGIhlYHcy9XzI1Kk8ZuB3OU8GxnblgFkgXvJYPNJEqGZHWv0KFHsasuvMuftAtM10eadvvI+G7k6KT56uuMwuDK2wNmTeh67mDO5Z0PWTx0a3Q7mD5G0QsgC2ZPvM76LA+j6IWQBe90m8MMYtdlTiG2vHZrbGLXhHBhZMGsGxJsCYsqkaypQrTKyDJmTV6Nihi7GZIFfboQrUeRKVlIhm572u6pGZOF6HR3ex59wpmThah0p3oUBZCF6LE7pJlujUFKCxguJAxaJUS3MLKQDN0CyYI5XR1yb2ZrWpmGmS5dqzmFxGUxW0O00iFTsmA4COfZiUb+GZOFMHRNh03LHaaPTbc9vsxh+hTotueUN0yfCt1N+tmQVXifWtI9zpyukBFZ0DSrjIbnNXO2WDVXHlnjpSUh2ru0L7abJByikV50t8Yo1EMtRMul8a1z+du7Shml7rco6x7iYhvfMenOpZ0sWQV6PYUU6G7F8EbJkm3VJzxqNgW6kOlOaLONb6OKKmTJQHGNb0kndqEoshulErvlkQ0auwYJRyeruh/zMt5AxPfBWe4xp3NtZ5N2OkeLYZgZ9IabjUKmj0mGbKupa7OeWgoxswQ9wgMZJEd2Sk5TS0axa6OdkHd/EUj7QDvD/Qcv8zBolRDdNpNCyEJydAsiC2Z0A84nQESyQ8NDc/K6v4FJI9151//UFWR/g1DNyELJgvEDYdzJzGUCREdmr1hBWLpt+mVNgJjSDfZi5XgemZIF4+EcXbou96C/1iFjsjbSpeswPN+qALIhYtd02HRABZBtFahksCVcEFkIVrPZEPb/IhAEa6jHDwPjdV1ar5UEMtHtgz9/6ApgtY4PGOYNN2RX29+tGU/Nc+59CbMVRzcBksy3a9S44c39F9Ahu0nMLHO7xTFDZ6URrEMaIGz28lovoWDTNa0GCHdk5z4Hk4Ias0JT3pl2BE2GOB3Unr0CqE/jfkNJV43ZavsLVUbFWOAB5P756ZYGAxo02/+UhZYWGiDJn2ynkC9g5jQBYiP/LwIFHD6NT9b7nEKoms0wj/hkDRTOrG1l5WuYPnZvwsisVc3mkfC6S7Rzo5kQ6H8+RRmkPZYXGT1gCpdt28CsSHPsCjkvULfK28H08LZt+ssLNudY5G5xir+YXcDw9OZiSxSrBvl4LQ1CVxpeR76NK43dfHRGEX0rFOG1Xu6b/2rWQluETT8S1r/OnVPD12COiyX7Mlwj45yfk/TCIKZ6V7s69y86J9uUEK4Pnepma1oX2ufZ97MctIL+A6uXmOHh24o1fGRD2IXtgFn9oLQhrPMC+5i8lLPWMWyoCbP6uS8Vw35bXd0Pi3M1DM+YNStUXQjrlMdhWl3dD9sEnEZkzHJ2iuHu3POUDd67XXboaHDuVt5ewx9+PXmiaQ03m6uGhsrjFQdXkF98OWu4Pc+qJ+nppqxu/vZPyJ1rWoZbwlZh4aG3vAIwMQy7YbGc6e4BMzUcQyt612lveBnCLVkPhu1k4rlfzkYhLKr5o3PabqUQlbDNiEwcwudyP6+x6jZJwlNtgw7PkoaninCdhoyDYfdqq5+CbnvWkbC94a60wKzxvXhI7OZu2lOIGhI23ZpohG37YB4Im1N26TA6EbZpE7v2bq0Nm47eg5+uuIdibdkRGQ8P3bxpn4McwUsJ3yMyQQmHGD5SgHInfN50yHkwD4a3FXrSzivhJdbIeCO81IIeL4aXXH3kbHjppVJOhmOs67I2HGsRmpXhmCvmzhu2GORYUtuGfz9tOLZZMDCcglkYM2wxyLGUzhveUUpmoTGsxginZhaAc4YBlEJNfbI1tl5896Gov75E/fxnyL9fpG0Wzgzzk2fpm4Ue4RzMApx857b8H5eAF6E0cD4wAAAAAElFTkSuQmCC",import.meta.url).href,lid:new URL(""+new URL("lid-TYOhicBo.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BMv_rRHh.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-BkN7rhR-.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-9lcNBxub.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-B8P4Zo5d.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-vlKUikdG.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-C5SjvFfc.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BTaT2_6E.png",import.meta.url).href,import.meta.url).href}},{id:"pouch-1",group:"pouch",label:"하츄핑",stock:"#efa0c3",shape:"pouch",dimensions:[120,130,12],dimensionNote:"120 × 130 mm · 상하 실링 15 mm · 내용물 두께 약 12 mm 추정",title:"딱지 파우치",hole:[.5,.05675675675675676,.020527859237536656],sealLines:[.11621621621621622,.8810810810810811],source:"딱지파우치-01.png",textures:{front:new URL(""+new URL("front-Bj9gZaBp.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-Bfy1hUOt.png",import.meta.url).href,import.meta.url).href}},{id:"daiso-2",group:"daiso",label:"샤이닝",stock:"#f5d4bb",shape:"retail-card",dimensions:[156,252,4],dimensionNote:"PDF 페이지 기준 156 × 252 mm · 두께 약 4 mm 추정 · 완성 치수 미확인 · 후면 무지",title:"다이소 딱지",hole:[.4994350282485876,.0556333100069979,.024858757062146894],sealLines:[.18254000329300415],badgeRelief:[{u:.4623773988067637,v:.7629677204422332,r:.16027520858446617},{u:.46360105569478016,v:.3048341796399552,r:.14070511787540424},{u:.1989986679248067,v:.8784434599989286,r:.14070510924886817},{u:.8050458403774752,v:.443804486978749,r:.14070511787540424},{u:.22499203425659584,v:.47790602702638735,r:.17275697812579602},{u:.7718533450221747,v:.6582774666151839,r:.17275697812579602}],cleanCutlines:!1,source:"다이소딱지.pdf",sourcePage:2,textures:{front:new URL(""+new URL("front-HIkvfS4e.png",import.meta.url).href,import.meta.url).href}},{id:"display-2",group:"display",label:"다이아나핑",stock:"#b6a1ca",shape:"display",dimensions:[250,146.3150289017341,127.16763005780348],dimensionNote:"추정 약 250 × 146 × 127 mm · 파우치 20개 수납과 전개도 비율 기준",title:"딱지 파우치 디스플레이 박스",heights:{tuck:25.65028901734104,dustTop:76.58959537572255,bottom:74.78323699421965,dustBottom:63.58381502890174,glue:15.534682080924856},bottomMain:[[0,0],[100,0],[74.56647398843931,85.02415458937197],[50,85.02415458937197],[50,89.3719806763285],[46.82080924855491,100],[5.202312138728324,100]],bottomTab:[[100,0],[98.121387283237,7.246376811594203],[98.121387283237,100],[78.90173410404624,100],[74.56647398843931,85.02415458937197]],diagonal:[.2543352601156069,.8502415458937198],tearHeight:.6345679012345679,source:"딱지파우치_디스플레이박스-02.png",textures:{front:new URL(""+new URL("front-BxlsOXbH.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-BdpBmYzh.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-TPXL9KdZ.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-BJrnwN5C.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGVCAYAAABn6ghxAAAMH0lEQVR4nO2dS48dRxXH/9Vzx4/xCwdNgmGSGFt+YcZOGIZEBAFZI+VTsGXLjhUfAfE5kPgALGHJBgRSVkgocSQERNbYk5nbdVj07b7V9/ajzqmq7qoa/ovEsruqzv31qVOnHt2tiAgx6sX+AQCgPHoTxaf/Bi7tQMVibG2cPrwN9cVrYKmx/Og7WD58j87vHePSX/+AxdwGlh8eQL08QQGg/OBbOD/6kJb3jnF697h17e5fJjb2xf4ByudfB/auYudP/4Q+vI3lk6dY3j+is7s/QHnlxmD5oMY2t/bZG1D/eg28cQn68WOcP/gezn7+AS1v3WHV59XYplM8vQ316hwFgLOfPYd+8j7O7h3T2VtP2gWY/cXZ2Bf7Bygf3QIA7ABYHt/B+eNDnD75MV6/c0RFUWD3yi7XLkOq+VFsY1/sH0C/vQe6eRnFP15CP7qJ5eFTnD79EU7fOUZ5+Tqpdf0g0lIrtzRqbHNrDyu/U1+7hOXhA3x1+BFO3/0+zm/eAYAWtxZFAnRJUIVqV2yNmprKO419sX/Q8rvzn9zH2aNn+OrxT3H65sMt44aloLXGTrFjX6RHi9o4/fYe6Noudv7+JZZH38D502c4+/b7OHn4cXWldPRQAJUaancBEHF+5apdw9jPH9yDfnATy+ffxdn99/Dqlx+jvHyj41KZ6t9IWkMVBTsCmFqo/57hi9/+ftg4ywbMjtUuTtClRlH7LcdgtbaqWP2R4IHikHSpVy3LVfgxZVxEGqQlPFTzEyczFqSgl6VTFV6NHXJFAkGXJZRC5dz2tTbeMx1ZVB2tXJLYc8eN9Zyc03Ip7meTkgUArQla1NFGjFVMBDauSCCQoKMpNQNZpRTKUpaJDWZdgpF8VOvhFyiK8ZFIGbdrcrK1dFlahzAiAmnyO63hBI6yLLFD6+YVCkCtK9AlQWsNKnWTW8w6Fdd6ndwQCHqpQVpX1Gu7DfrjxvalUo5SqIZfDQCaoPumP0bbQcja/D5C5YcKynqeNlsHk8jKWKXi+E1xWGEpK2O5gwOnPxLIOt7mRxYAM2EOo0zJCuT7ZuRLNmS8tak7X7L8eGvvtDbxNl+yAPgLFB6VOdkZlaCxAYd97ig2FG8TJMsVAxcn1gLDsTxFsiqg3wpibc+dK3xXGFIpukF4+bgRCZP1GMBd1VV3wmSZIYyTjPsYHFImGzLeutedMtm4lb6xIYd9l2Q8fbLsfsvCJb9t6ZMNmYxzj4eZy0o5kI1z5pAD2TiVj7FRjWTViYR+hRwcuMk4kJMbxLRSQ6CsyMY1OORENrw4N2J2YzmyPCMT2gw75Uc2lpEsP7KxjGTpkR2HFsdIlh5ZIOj2rZVsbkSaZK00M/6MyXLleSTLmey8I1nL2CB2eBwcmGTnfRfClrFzDw5DyrmDVZprDSxBskxUc3WzBMkC/L2sYLs5/RUnStaQd2ieDginTxYYoztPPMiD7NzqcvNoje1SO5/dOqWmMOi9jE7u43RdumS3T6n5e6+Ij0dd0iULIJocoeuOJk7WkPelUMcpRj5kgbhmu3mRtdJEs91uY2M6b2IoEzeIZHAwh91MyBqKZQKZH1kgjglknmRjUD7Gsid5QQe+kYOTsWnklGfAXi7IEfIhCyCeHAHZkTU0b46QM1lg3hwhb7JzKj9jY8kR8iMbMkfg3LX8yAIIliNw7prsJIekkAdl6gYb8jrsXuyXOEagfI3lDrv/f4mjrdj7r4xrL/ZLHAHMOuxmTtbQ1DlCUmQXALB3/crqowwaRACV5frDTpqqF4j3uJTxWZkOCXKEgTdLLADg6q296tXrunphff1/0oSyLEElNX+eUwsAePXlq4qqptXnAABQZTRRP1UbDZPvKtBPdwEApyengLGTRyDjowvs5oJpAdRbjm2DeG8lqX/YdhmCqr6TwBvOOukmFQ3kr8dsjWRD57+oKeLWRppk3TrQyInFVQvCJfwYvq4ikZuxHX7Vr9Xdc6DrlayNOzQXCupOxg16t5YUN85suIMVYQHdZMgCfa9tk34fMvAKefpk1xK8LDSg7+ZEVjgM899vZaWcyNaSDDlt37W6fuTCHMlO4bvjiU6OZGvJfdc6IxtoJmeyE8VdoJNuzmRryRc7ub5rXhs/WbX+Nuyi/gsArE++Sxo12+hfcNpsiRrC8ZOtNcuRVOFOXuJvnGQtWpjFBLPh+o+wjw4Jk12JS0o0GxbcRU8PAjWFBGXWJYdKF69PetYNxE2Gk756bcRn2XTDukP6HayliHw3M7LALL7bRThDskDYx1tbzWxkAFgTzpQsIE50OOr74GlayTdiNjaTvVumBL7LTtA72kqQ7AQhVLpdZSpBsoB8t5p/REPQUKVEyQLiH83r6XLfTZgsIKJLwCS+mzhZIFrfzYAsMKHv2mtkkUNYa6CVyEzcoBZre8Us538lMjOyLvI8wYyO7FBHYyxyYPYkPTqytboICx4EErXMLtJFOFqytUzCK2OZDik60CHcWaT12Znoya5V7916OmkxJPckJ8W9W9UkwuF992K9F7HyJxi/mkF4QrrpkV2LhKQkZS7iVHz9o5m+y17n8HXeIEL1nzcQz2y511/ELXyR79aXc5XSuoECRg0u6gu7LpvSd5vsRKlemy1fgWVaENYdqudMuwtG4wY2ahkbgzusy12kvVux77oo7b3bDY36bqBHqMaUPtlafYRFE0wPdBMkK/mmnWSC6Ug3QbLAIN1x32XIgW6iZIFpfVdAOGGygMh3p1ocSZwsVkvq4gVmQqiRLX2yY9FzkJv0jlgUi4as2nxgsUMjixwy35XMKJq39w1cHg3ZWkOEB41tfLeHbojZ8BDh6MjW6iJstyIDePBdnmrCynhJg5Wxbu4g2AFq1VG7RU5fV9mUzB2ESU6H8iUr9d3mH7lJzobyJduSJElvleETTo+s+AiA00DBV3pknZ4kYfrudpJj77uzkZUcnWpvgAj9SZKk09bINk54dp/lEG4ZK/Vdm5Gtv6w94dnJcjRykoOnoaxs1CO3LtgukT7ZUL5rpQHC6ZP1IqnvmhduKFqy8ql4gKxsjHDXYke0ZGuZhO3WDQJlZZUxloSRAFlTwsMRjDLSgh3iTcUF7mA7UNiEtPTcoDr4ZX+rQk4whwgXALCzKNx6/ESqyC52WLScQ5mQcAEARcFzAxe5tLKaihPUzjTGtqIDk3Dz1NJUZE0juFqHLpLN5QFZdJAk6o2xRJrfogdxRrjGWK1J/BiUS3TgEC4AoFyW8LbwH1AFAOilbj3gOKXvcipoQlcKGnioYlrfbTQQf9PLuvo0m+/WlaR85nsx9I8t32U4pNf+uv1EcwJi7YpPnOh0KR2yiPC9iEPKmGytmeiK9m7rHFQyaLh40mCc7ZNLGG3ercAP36uPRgIVLqYV0kFDcDmApDuY/PjKJJ0uYbIrKSnhwHS9kvW5cNwV4gaPUXPb9bLDWNdF2xEjiM/6JGxq/LDvREtDNgoaDXwTtjNWGB18E04qzrISGaVWtCSZjElXOKOcnKyLH4vOz7q4oIsfz3diDmAbLDLW6RUCZh0Aa+owezTgREXh98GMlmr5OrEU+r2IqvmPh7oGJqLbj7JKFpGb8uyinXU1c7uQS55eCXdUtTDrd12pbBF2rKwrHvc/Heogn4SbOhVQ0M0Frv/5d00jDRQHg0Ps/RCAgt66imu//k1jcEuOq4ZNcU+Ui2/+8W/QD270G+ygpmd7UgEAmwZvwfCxLuuBcNPBQhI25fK7Cxi/dwrC66C/WbmdsXVRABMSBt8rzDgbPeHNQWFywk3DFr+/awSblHAtG9J9icx8hNHvFUNZV1MuFsI2KWKnwVPJ5GCbz05OuJY5ZHOS73kJgz9TYBL2l8YQZNMae8KqmGHJs8MMwIJwc/X8S56T+7Dr7HaQcIu0h0jhYyrOI+xgtK91g0GDe/14ilXEHgX3Yd+riL0Gd/oxMPuSpwKg2IQtjA65Pjto8GBMnumUJ5/wgKZY+fZGeKpl+lHCYx1QknW5yNklpt4AsTa4i/QcuzViwnNtLQni8Lz7YGyD5960Yxk8t7EAw+AYjAUsDY7FWMDC4JiMBSqDVZ/BsRkLAOgzWMX8xNJnP3xCxacvcfKrX6D4z2dxGwusDT7/5Hn8xgJrg5MwFgA+v/su/Q9WZMQj4TblGgAAAABJRU5ErkJggg==",import.meta.url).href,lid:new URL(""+new URL("lid-COuQJ5cq.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-DPaUIvec.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-CoSWr-M4.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-DyMy9Evq.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-BusKU_Sv.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-z04hDaDz.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-_ytD71Kv.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BeN7Um8Y.png",import.meta.url).href,import.meta.url).href}},{id:"pouch-2",group:"pouch",label:"다이아나핑",stock:"#b6a1ca",shape:"pouch",dimensions:[120,130,12],dimensionNote:"120 × 130 mm · 상하 실링 15 mm · 내용물 두께 약 12 mm 추정",title:"딱지 파우치",hole:[.5,.05675675675675676,.020527859237536656],sealLines:[.11621621621621622,.8810810810810811],source:"딱지파우치-02.png",textures:{front:new URL(""+new URL("front-DBzll1nM.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-L1hydHCK.png",import.meta.url).href,import.meta.url).href}},{id:"daiso-3",group:"daiso",label:"스파클",stock:"#9dd4eb",shape:"retail-card",dimensions:[156,252,4],dimensionNote:"PDF 페이지 기준 156 × 252 mm · 두께 약 4 mm 추정 · 완성 치수 미확인 · 후면 무지",title:"다이소 딱지",hole:[.4994350282485876,.0556333100069979,.024858757062146894],sealLines:[.18254000329300415],badgeRelief:[{u:.42891849013810945,v:.6335768595626012,r:.14070510924886817},{u:.7992103682958098,v:.7354138030532318,r:.14070511787540424},{u:.49989282391590495,v:.3066383896098969,r:.14070511787540424},{u:.2882134067688495,v:.45751928530702396,r:.14070510924886817},{u:.8021180630486606,v:.4565510788604428,r:.14070511787540424},{u:.23666377206124453,v:.820601252657409,r:.17275697812579602}],cleanCutlines:!1,source:"다이소딱지.pdf",sourcePage:1,textures:{front:new URL(""+new URL("front-Bj2oMvo3.png",import.meta.url).href,import.meta.url).href}},{id:"display-3",group:"display",label:"이클립스핑",stock:"#755695",shape:"display",dimensions:[250,146.3150289017341,127.16763005780348],dimensionNote:"추정 약 250 × 146 × 127 mm · 파우치 20개 수납과 전개도 비율 기준",title:"딱지 파우치 디스플레이 박스",heights:{tuck:25.65028901734104,dustTop:76.58959537572255,bottom:74.78323699421965,dustBottom:63.58381502890174,glue:15.534682080924856},bottomMain:[[0,0],[100,0],[74.56647398843931,85.02415458937197],[50,85.02415458937197],[50,89.3719806763285],[46.82080924855491,100],[5.202312138728324,100]],bottomTab:[[100,0],[98.121387283237,7.246376811594203],[98.121387283237,100],[78.90173410404624,100],[74.56647398843931,85.02415458937197]],diagonal:[.2543352601156069,.8502415458937198],tearHeight:.6345679012345679,source:"딱지파우치_디스플레이박스-03.png",textures:{front:new URL(""+new URL("front-BQkxmqo-.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-BMoc_exG.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-CSOjSXRJ.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-Cgrnh9CU.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-CkRK4kjm.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-DRDMzO9U.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BnocQkHz.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-c5SOTFAq.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-zNUH0wdE.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CqZTE5i4.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CN3Aps6S.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-ZdskTHOy.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BX7ZqwhK.png",import.meta.url).href,import.meta.url).href}},{id:"pouch-3",group:"pouch",label:"이클립스핑",stock:"#755695",shape:"pouch",dimensions:[120,130,12],dimensionNote:"120 × 130 mm · 상하 실링 15 mm · 내용물 두께 약 12 mm 추정",title:"딱지 파우치",hole:[.5,.05675675675675676,.020527859237536656],sealLines:[.11621621621621622,.8810810810810811],source:"딱지파우치-03.png",textures:{front:new URL(""+new URL("front-wqKkdR0Z.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-BdUrXAp4.png",import.meta.url).href,import.meta.url).href}}],nc=[{id:"A001",title:"카피라이트 가이드",group:"brand",source:"COPYRIGHT.ai",credit:"",kind:"document",src:new URL(""+new URL("A001-aoBPiBCZ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A002",title:"전체 제품 라인업",group:"product",source:"공통_썸네일.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A002-DpRrkLfO.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A003",title:"프린세스 캐치! 티니핑 로고",group:"brand",source:"로고.png",credit:"",kind:"image",width:1300,height:1300,src:new URL(""+new URL("A003-BrwH5VOQ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A004",title:"로고·카피라이트 가이드 6페이지",group:"brand",source:"로고_카피라이트_가이드라인.pdf",credit:"",kind:"document",src:new URL(""+new URL("A004-CiS58igM.webp",import.meta.url).href,import.meta.url).href,pages:[new URL(""+new URL("A004-CiS58igM.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-2-CHShFYa6.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-3-GMFbJFuS.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-4-CnCirEj-.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-5-BJauCt5m.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-6-CirN_2mo.webp",import.meta.url).href,import.meta.url).href]},{id:"A005",title:"리미티드 2종 라인업",group:"product",source:"리미티드/PNG/깨끗한 화이트 배경.png",credit:"",kind:"image",width:906,height:467,src:new URL(""+new URL("A005-p7ySwXBq.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A006",title:"이클립스핑 리미티드",group:"product",source:"리미티드/PNG/레이어 0.png",credit:"",kind:"image",width:820,height:673,src:new URL(""+new URL("A006-DYSxLsVP.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A007",title:"다이아나핑 리미티드",group:"product",source:"리미티드/PNG/레이어 11.png",credit:"",kind:"image",width:819,height:675,src:new URL(""+new URL("A007-Bqti81fq.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A008",title:"리미티드 구성",group:"product",source:"리미티드/그룹.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A008-8m0baskg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A009",title:"리미티드 대표 비주얼",group:"product",source:"리미티드/대표이미지.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A009-2Q3wIW0u.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A010",title:"다이아나핑 싱글팩",group:"product",source:"싱글팩/PNG/다이아나핑.png",credit:"",kind:"image",width:629,height:815,src:new URL(""+new URL("A010-pRxLI05u.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A011",title:"이클립스핑 싱글팩",group:"product",source:"싱글팩/PNG/이클립스핑.png",credit:"",kind:"image",width:625,height:810,src:new URL(""+new URL("A011-kNaUbrmq.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A012",title:"다이아나핑 패키지 다른 각도",group:"product",source:"싱글팩/PNG/일반_다이아나핑 복사.png",credit:"",kind:"image",width:791,height:943,src:new URL(""+new URL("A012-MfjW-C-6.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A013",title:"이클립스핑 패키지 다른 각도",group:"product",source:"싱글팩/PNG/일반_이클립스핑 복사.png",credit:"",kind:"image",width:791,height:943,src:new URL(""+new URL("A013-pz2oFL1f.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A014",title:"하츄핑 패키지 다른 각도",group:"product",source:"싱글팩/PNG/일반_하츄핑 복사.png",credit:"",kind:"image",width:791,height:943,src:new URL(""+new URL("A014-J1z7cou1.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A015",title:"하츄핑 싱글팩",group:"product",source:"싱글팩/PNG/하츄핑.png",credit:"",kind:"image",width:625,height:809,src:new URL(""+new URL("A015-Gn2XwwUy.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A016",title:"싱글팩 3종 구성",group:"product",source:"싱글팩/그룹 (1).png",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A016-CKdJOEo_.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A017",title:"싱글팩 3종 라인업",group:"product",source:"싱글팩/그룹 (2).png",credit:"",kind:"image",width:1300,height:740,src:new URL(""+new URL("A017-GovsCjJl.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A018",title:"이클립스핑 제품 이미지",group:"product",source:"싱글팩/기본 (1).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A018-C5PmGReN.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A019",title:"하츄핑 제품 이미지",group:"product",source:"싱글팩/기본 (2).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A019-DftAen3R.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A020",title:"다이아나핑 제품 이미지",group:"product",source:"싱글팩/기본 (3).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A020-BUZgAKUi.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A021",title:"싱글팩 대표 비주얼",group:"product",source:"싱글팩/대표이미지.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A021-BPPnOR_h.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A022",title:"다이아나핑 팩·케이스·배지",group:"product",source:"싱글팩/케이스컷 (1).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A022--bcudOUP.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A023",title:"이클립스핑 팩·케이스·배지",group:"product",source:"싱글팩/케이스컷 (2).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A023-Da5aWh2m.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A024",title:"하츄핑 팩·케이스·배지",group:"product",source:"싱글팩/케이스컷 (3).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A024-Cpdu0FuV.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A025",title:"후기 콘셉트 카드 01",group:"digital",source:"인스타/01.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A025-D9KcDXUo.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A026",title:"후기 콘셉트 카드 02",group:"digital",source:"인스타/02.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A026-COucjxfY.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A027",title:"후기 콘셉트 카드 03",group:"digital",source:"인스타/03.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A027-CAyx-NZv.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A028",title:"후기 콘셉트 카드 04",group:"digital",source:"인스타/04.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A028-C49qTXT0.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A029",title:"상품 상세페이지 전체",group:"digital",source:"인스타/260609_티니핑상페_원본.png",credit:"",kind:"image",width:780,height:14964,src:new URL(""+new URL("A029-CqUbFD5y.webp",import.meta.url).href,import.meta.url).href,pages:[],preview:new URL(""+new URL("A029-preview-C9uso0yz.webp",import.meta.url).href,import.meta.url).href},{id:"A030",title:"제품 연출 인스타그램 게시물",group:"digital",source:"인스타/ChatGPT Image 2026년 7월 28일 오후 01_51_37 복사.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A030-sS0--Tka.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A031",title:"출시 이벤트 표지",group:"digital",source:"인스타/ㄹㄴㅇㄹ (2).jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A031-Ii4AWEDc.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A032",title:"3가지 배지 타입 안내",group:"digital",source:"인스타/ㄹㄴㅇㄹ (3).jpg",credit:"",kind:"image",width:1040,height:1300,src:new URL(""+new URL("A032-tl29_WZO.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A033",title:"3가지 케이스 안내",group:"digital",source:"인스타/ㄹㄴㅇㄹ (4).jpg",credit:"",kind:"image",width:1040,height:1300,src:new URL(""+new URL("A033-RLNAntI0.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A034",title:"이벤트 참여 안내",group:"digital",source:"인스타/ㄹㄴㅇㄹ (5).jpg",credit:"",kind:"image",width:1040,height:1300,src:new URL(""+new URL("A034-9iwMtlKo.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A035",title:"제품 활용 소개 카드",group:"digital",source:"인스타/인스타_카드뉴스.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A035-uLSoj6af.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A036",title:"다이어리 꾸미기 카드",group:"digital",source:"인스타/카드뉴스_다이어리.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A036-D1HHS67_.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A037",title:"싱글팩 소개 카드",group:"digital",source:"인스타/카드뉴스_싱글팩.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A037-tkA3JD3z.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A038",title:"제품 홍보 포스터",group:"promotion",source:"인스타/티니핑딱지_홍보포스터.jpg",credit:"",kind:"image",width:3508,height:4961,src:new URL(""+new URL("A038-BhGeEnbu.webp",import.meta.url).href,import.meta.url).href,pages:[],preview:new URL(""+new URL("A038-preview-Dc7fV8mM.webp",import.meta.url).href,import.meta.url).href},{id:"A039",title:"다이소 골드 타입 · PDF 인쇄 원본",group:"packaging",source:"다이소딱지.pdf · 3페이지",credit:"",kind:"document",width:990,height:1600,src:new URL(""+new URL("A039-ByQA37Uc.webp",import.meta.url).href,import.meta.url).href,pages:[],original:new URL(""+new URL("다이소딱지-OE3CwXSq.pdf",import.meta.url).href,import.meta.url).href+"#page=3"},{id:"A040",title:"다이소 샤이닝 타입 · PDF 인쇄 원본",group:"packaging",source:"다이소딱지.pdf · 2페이지",credit:"",kind:"document",width:990,height:1600,src:new URL(""+new URL("A040-D1srEEGR.webp",import.meta.url).href,import.meta.url).href,pages:[],original:new URL(""+new URL("다이소딱지-OE3CwXSq.pdf",import.meta.url).href,import.meta.url).href+"#page=2"},{id:"A041",title:"다이소 스파클 타입 · PDF 인쇄 원본",group:"packaging",source:"다이소딱지.pdf · 1페이지",credit:"",kind:"document",width:990,height:1600,src:new URL(""+new URL("A041-DxNNvji6.webp",import.meta.url).href,import.meta.url).href,pages:[],original:new URL(""+new URL("다이소딱지-OE3CwXSq.pdf",import.meta.url).href,import.meta.url).href+"#page=1"},{id:"A042",title:"하츄핑 파우치 앞뒤",group:"packaging",source:"지기구조/딱지파우치-01.png",credit:"",kind:"image",width:842,height:596,src:new URL(""+new URL("A042-DjoWZh-A.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A043",title:"다이아나핑 파우치 앞뒤",group:"packaging",source:"지기구조/딱지파우치-02.png",credit:"",kind:"image",width:842,height:596,src:new URL(""+new URL("A043-BqMDjPUQ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A044",title:"이클립스핑 파우치 앞뒤",group:"packaging",source:"지기구조/딱지파우치-03.png",credit:"",kind:"image",width:842,height:596,src:new URL(""+new URL("A044-Cdd4Gx2U.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A045",title:"하츄핑 디스플레이 전개도",group:"packaging",source:"지기구조/딱지파우치_디스플레이박스-01.png",credit:"",kind:"image",width:1300,height:633,src:new URL(""+new URL("A045-DXgJci11.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A046",title:"다이아나핑 디스플레이 전개도",group:"packaging",source:"지기구조/딱지파우치_디스플레이박스-02.png",credit:"",kind:"image",width:1300,height:633,src:new URL(""+new URL("A046-CKxmPAw8.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A047",title:"이클립스핑 디스플레이 전개도",group:"packaging",source:"지기구조/딱지파우치_디스플레이박스-03.png",credit:"",kind:"image",width:1300,height:633,src:new URL(""+new URL("A047-BnUd3Gbp.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A048",title:"리미티드 1+1 이벤트",group:"promotion",source:"지기구조/리미티드_이벤트.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A048-CuZ3BMFl.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A049",title:"다이아나핑 리미티드 전개도",group:"packaging",source:"지기구조/리미티드에디션-01.png",credit:"",kind:"image",width:1300,height:700,src:new URL(""+new URL("A049-CXTcNlLg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A050",title:"이클립스핑 리미티드 전개도",group:"packaging",source:"지기구조/리미티드에디션-02.png",credit:"",kind:"image",width:1300,height:700,src:new URL(""+new URL("A050-CmGRRcly.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A051",title:"하츄핑 싱글팩 전개도",group:"packaging",source:"지기구조/싱글팩-01.png",credit:"",kind:"image",width:1300,height:919,src:new URL(""+new URL("A051-CTRc-5WU.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A052",title:"다이아나핑 싱글팩 전개도",group:"packaging",source:"지기구조/싱글팩-02.png",credit:"",kind:"image",width:1300,height:919,src:new URL(""+new URL("A052-C2wYdsih.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A053",title:"이클립스핑 싱글팩 전개도",group:"packaging",source:"지기구조/싱글팩-03.png",credit:"",kind:"image",width:1300,height:919,src:new URL(""+new URL("A053-DXV-lyzb.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A054",title:"물류용 카톤박스 인쇄 그래픽",group:"production",source:"지기구조/카톤박스.png",credit:"",kind:"image",width:1300,height:321,src:new URL(""+new URL("A054-Dc4LGRjr.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A055",title:"크리스탈 케이스 보호 파우치",group:"production",source:"지기구조/케이스파우치.png",credit:"",kind:"image",width:1041,height:618,src:new URL(""+new URL("A055-BIEH9qdk.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A056",title:"풀박스 전개도",group:"packaging",source:"지기구조/풀박스.png",credit:"",kind:"image",width:1300,height:824,src:new URL(""+new URL("A056-E-Rtk_DU.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A057",title:"블루 케이스 · 보관 연출",group:"usage",source:"컨셉컷/34.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A057-DRiIUZpw.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A058",title:"다이아나핑 · 제품 구성 연출",group:"usage",source:"컨셉컷/36.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A058-BSPrGWIg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A059",title:"핑크 케이스 · 침실 연출",group:"usage",source:"컨셉컷/38.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A059-DThxwxuI.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A060",title:"블루 케이스 · 생활 공간 연출",group:"usage",source:"컨셉컷/39.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A060-DlDeSZt9.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A061",title:"핑크 케이스 · 선반 전시",group:"usage",source:"컨셉컷/42.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A061-Kpg24czI.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A062",title:"자석 배지 · 보드 활용",group:"usage",source:"컨셉컷/43.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A062-O9QQ2SKI.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A063",title:"핑크 케이스 · 전시 연출",group:"usage",source:"컨셉컷/44.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A063-DmpGhSYD.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A064",title:"퍼플 케이스 · 배지 넣기",group:"usage",source:"컨셉컷/47.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A064-B16JOuoc.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A065",title:"블루 케이스 · 배지 넣기",group:"usage",source:"컨셉컷/52.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A065-CUio22GL.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A066",title:"다이아나핑 · 탁상 구성",group:"usage",source:"컨셉컷/53.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A066-v93I7zu8.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A067",title:"퍼플 케이스 · 사용 연출",group:"usage",source:"컨셉컷/55.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A067-vZkd6QHF.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A068",title:"핑크 케이스 · 탁상 구성",group:"usage",source:"컨셉컷/56.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A068-CobA29q_.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A069",title:"핑크 케이스 · 보관 연출 01",group:"usage",source:"컨셉컷/58.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A069-CoNlK4mD.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A070",title:"핑크 케이스 · 보관 연출 02",group:"usage",source:"컨셉컷/59.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A070-BxP_7Cp7.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A071",title:"아이 놀이 콘셉트 01",group:"usage",source:"컨셉컷/66.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A071-DvRC7Omg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A072",title:"아이 놀이 콘셉트 02",group:"usage",source:"컨셉컷/69.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A072-MOTBjPqQ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A073",title:"아이 놀이 콘셉트 03",group:"usage",source:"컨셉컷/72.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A073-CpqFVpMW.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A074",title:"아이 놀이 콘셉트 04",group:"usage",source:"컨셉컷/73.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A074-DMI9jL2D.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A075",title:"아이 놀이 콘셉트 05",group:"usage",source:"컨셉컷/74.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A075-DYrQqjtt.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A076",title:"이클립스핑 · 후기 콘셉트",group:"usage",source:"컨셉컷/82.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A076-R1imCyhg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A077",title:"다이아나핑 · 후기 콘셉트",group:"usage",source:"컨셉컷/83.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A077-Bbn168Ce.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A078",title:"블루 크리스탈 케이스",group:"usage",source:"컨셉컷/기본_01.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A078-h4Am-4RB.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A079",title:"핑크 크리스탈 케이스",group:"usage",source:"컨셉컷/기본_02.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A079-DwHfTixV.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A080",title:"퍼플 크리스탈 케이스",group:"usage",source:"컨셉컷/기본_03.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A080-f2hsvjnf.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A081",title:"제공 제품 사양",group:"production",source:"티니핑미스터리뱃지_사양.txt",credit:"",kind:"text",text:`1. 딱지 스팩
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

2400개 1파레트`,src:null,pages:[]},{id:"A082",title:"풀박스 제품 이미지",group:"product",source:"풀박스/레이어 1.png",credit:"",kind:"image",width:610,height:670,src:new URL(""+new URL("A082-Cl9oaX5r.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A083",title:"풀박스 구성",group:"product",source:"풀박스/풀박스_단색배경.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A083-BhJsK5aL.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A084",title:"풀박스 대표 비주얼",group:"product",source:"풀박스/풀박스_이미지.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A084-vhist52g.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"B001",title:"배지 제작 시트 · 앞면과 공통 뒷면",group:"badge",source:"260417_티니핑3종딱지(최종칼선).pdf",credit:"",kind:"document",src:new URL(""+new URL("badge-front-BeRoCcsF.webp",import.meta.url).href,import.meta.url).href,pages:[new URL(""+new URL("badge-front-BeRoCcsF.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-back-BOkZlx0J.webp",import.meta.url).href,import.meta.url).href]},{id:"T001",title:"하츄핑 디스플레이 박스 대표 비주얼",group:"product",source:"src/content-assets/파우치거치박스_하츄핑.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("파우치거치박스_하츄핑-BuTbTgmn.jpg",import.meta.url).href,import.meta.url).href,pages:[]},{id:"T002",title:"다이아나핑 디스플레이 박스 대표 비주얼",group:"product",source:"src/content-assets/파우치거치박스_다이아나핑.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("파우치거치박스_다이아나핑-DwNBa4u_.jpg",import.meta.url).href,import.meta.url).href,pages:[]},{id:"T003",title:"이클립스핑 디스플레이 박스 대표 비주얼",group:"product",source:"src/content-assets/파우치거치박스_이클립스핑.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("파우치거치박스_이클립스핑-BmOv-EY1.jpg",import.meta.url).href,import.meta.url).href,pages:[]},{id:"T004",title:"딱지 파우치 3종 대표 비주얼",group:"product",source:"src/content-assets/레이어 0.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("레이어 0-Dm2w3Pjx.jpg",import.meta.url).href,import.meta.url).href,pages:[]},{id:"T005",title:"다이소 딱지 3종 대표 비주얼",group:"product",source:"src/content-assets/다이소딱지.jpg",credit:"",kind:"image",width:2e3,height:2e3,src:new URL(""+new URL("다이소딱지-CyOha_ZA.jpg",import.meta.url).href,import.meta.url).href,preview:new URL(""+new URL("daiso-lineup-preview-7pEQh-kq.webp",import.meta.url).href,import.meta.url).href,pages:[]}];new URL("data:image/webp;base64,UklGRtgPAABXRUJQVlA4IMwPAACwOQCdASpuAG4APjESiEKiISEXKu9kIAMEtABkC9Mm++b80Wv/2r8EflT8VfBHpfy5ec/+n9zvah/QfsB/rp0pfMJ+2/7Se8P/svUV/WvUG/qn+16yT0D/3Q9OD91vhA/tP/T9LbBSd+v6jwj8eHtz25/tPtxY+7Rf5T92v2fmr35/E/UI9gf7fxJduFZf0BfbP7B/0/Df1dPDvsAfq//v/XrvtfRvYC/P/qzf2//x8xP6H/ov2p+Av+e/3DrTejh+6DwOfbs7Oe/fBGCVP8fC7piJDMsQfRaK38Bm/iq4NmPjc71kUB+yA+u8f28Ay9cNTbH3VxNfKMB/URq4m6VeVZRgPOTiHe7SjhPHrGuvF7ESBKdis8bFWz41sEf1JVWoGq+YnuTI3uHl3c5hGOBgT+7/7igbZII8Qb/ZYX6X60z+AzVR14u6pW6byZSPfY5a85Klw9jLaJi29n9djD2hoMetVoyhIP6Eo9AhhQW7oZMa3W9h8fVEBXP+EsATQ+ZlD0mGpimf1Ogq2g+VBJl97W5xa5hhizn/OCunzySibq3RiUSx3oLyAJZXcnTI7+rhYFmPLtrH2H1G2C+5zstioE2UumJaQGr/PXdqSVOBG4Pa7mdFQAD+/3yAJ7YletVx1r23McXhuCK7eJj9sUKjPpeLXM7D//4lb5X8+cxJOi9OG2iV8kx4eCFI0z7VYAw6kLmSlkZGz7cKr/jl8vnJcohPBDnrgKDEcpIdhUdiobh0vWEX2gBMw/fbd6ctFswJLy8DJsw7cwrXiaUC2pmXlZpR+nR55aguGfWX+nmY0k2Ei7hYZMZbbB8tbFCxuog0hNMZAQr0RwCKU07sjZ0uI9b9lzc6jWsmzx8LEqV2fBfD1oTA9LrjGQAFNjvmzbYXpqlGLsNvQ9ax8kZCPWjGrjLMPOF8GHLXuPmQILo1tKKzMo2gMTdDc8CTR6cWXKyuktkWbsBOXWc8S0VdDoYhb1EqZdnrRgEk9iwVriH28BNdkBcVNul32+R95mbEu1t3gyM7XPo7SGH803il7McyPuMO++ZwRRxrJL0xZAY6w1Zm38Bb6boeK+x1PSlTWwGcTE9EdPNqCsLA8kf+du0DPlhhRd9mp5aXbj98r8fY+bHR3JC1wSja4OiemurefQ7c5FblA4e0B6VXFURBa30ng/76ji+YP00gvstdcRH93IaMIFliObUdeyORufK2hFOS9wAm+lf8iv8N59ECWWcJsRIC58yB3/2gjvjG8R7XXI12gMxvti7zeQpJobm60Rl7rW5Bx/HIUnKFgpux73/16X0ZgEKb4NLt7X5xcN/OLI7zHV/NY+rFdsP2A+9m7zpgbix/zlTFNs77xjvVEF13DelGI23OG1J1P+mE9KBaLsAdIRDtzMJNPCK/92xGmTW1llkpvTJcbA3ZhrNJSB3sGpFxGMpQ+TU7t6neWEelZFYo7XhcHsHSZmMkSrp4H2T8QJtqIwNGeIz5GEz6eoL7Es5n2XGferhHMb3fOpe5Ko6luM9yyb4tZhyCjnqlB+bI+hpVEtOA7khMQYndflMXnvbeG2EaiTMzfJg113iYwcxKaIZIOl5ChTgEvIc2ORYQjz7S9qQce8ko7hKMkSw3WHjOp66ilvcdvkeAKR83eUeMfPVPGGJaONDuZPu8MVibIOYZSsr/d+En28N1BdvybTF+Ea/kGi8P/j/vugVicSRPWUvlTzI/HQnCnb2W3VuXJZjwmcwzxKPMjgIUocXl/w+WvT1UnrgHtaIJr7fk1unG6SPnbhmZJ232eiWKJSa8Si2RsgRS39174OR2b62GXBw74H4T48bL5XKhK+x98QyagZSgDbdetOMYuq5XErq77s9jvCP3R9bqwojA3Uvs0JPEgrPIDQ/lJ/e3sb7ZBJf7X5LJKoINQIYxYoSW2rtIM1YIzIu13WxLMRFQedNe3pDXp9pV/6MSX594MH/ij38i+5w4dYpU30bTWekNcKNa60dWTHt0aym6E0SjekUkElAjX5q/fqkwQsvenbTT57ZuKoNmEcSHi/zuI0qSzIIkR31CCHktXukshfve0XxEexUUnM2N5Dh1clfJtjW25dCXQKSVmQXa7z8z2EHIgw2PVS33BEMP/du8P1rxFhVyrt2bhplbXeRGgFQU9LaOs5xN/aWKciHg9ivjMb8/LaHA/5EERrwms9POiz0MUfmcFMsFEo/BbU8h2px84n6lZfZJ0wf1CsGZ+UuF3mMOQg0wqXyVHQxsKQez6GbP1L+StbKjxT+/IpczRhdWdyZfn6R4p9em8CIxT5xFFY6LoX5/1QaksscW9yunlLGjZ/f/a7Jm4rBzeSI4f4fZdfxIVDJepL4rukFlRTN7bL7hjSn6e9z2Zd5ecDSvBArl/MK+6uvOldujNv7ZCqnHKHA8MwKBNzzjvwvbm16/dFKmtFUiX50wvdUkVv2MsuvPodP3Y6QQ2kENwMF4a3GhpMnU4K9dQo7lrnpp6+NWyoN5JT5c3+Rj079bwqYkXbM3iDg9lvPtCoz7stuDjj/tO/Qd1swEmLcDv3rPlheAXYEVQWI7bz9fnypPYN+3EYhZ0hjfRJMitcqL16sORGxihvSBlezl1TmFkBpGVCsrqXDHA09Da0bqp0aMLREibC9UO5lBO/wMpeh0OmpEtpmvNX8gOTV+HoklRT5otbx88W6YKSe6kXYiK/09uZc+sFNbWOz+rhVDuhmVRgwHmD53ue9KBD6qTmMdEmX6fBasoYkKXUzUs+FAd5iFtsj6zx2D1oaUq3JMHV9AQYIfEFlRWVq+CJtZxnVC2kp/9tL6xNOacLVuPOQBdOMU+TpZEXUMKUmf09YAwrtkAcKzTY2uRa1kG9HJmk7dXfC6OHi2lR2+cVZ0kf2PdPyy318kQ8hwahxbg8nqGxpmnH7EpPKAE2ItaYRtcy0uOBKjSVxYh4sytQyZ/EKQ3FV1z0joJfYXm7GmZ368vahWH/A/NjmRAFgU9pJ2RZCPu9UlDFjuTv9oJX1UbRxyB9LKtPndJOS7ay1SV0r1p/wMRT3ZY6t6KNeQj7KV7o8BGsJceYTL/4ytdRv/xmOzvvbGKsNNwQvS3HdpEyiDiBmuDKIhmqRV3tU6Kf/+bkez829vm2tPuR52g7Yag/vwk1NFtwzgIVa+lnF3zPVPf17cQWvInZUURZLGsoCJS0vBY7Py3tY/67KeGpoxeOxStTLS0V/qDy1Er71+qJpy4Nwz7i/qrLVobRSb3Xo1lU8BO7EIVci5Sa/E8CfgGyA+VZfFpuvPqr+S7DujFIQEbedXvkjseGcSw/924AV3+HWU64D7hY01FtPe1LwcjtTvQh5Z9+3vbIWAB18OEhlPwzy+sfAxMkAjZc1GHKu1C+T8ubpaWAiyVnpZMw/kl8tyBDy7KMf18rwM3KCXxWFsIcCtLqMM8qBZkvhRF46/ghEdvanejrM3ZKN7hoHyKwHTF8ww/9sgJFuJHq+V/Yjt8ePfHZNncrVaZlLQ6V6MJxoK5oeDgpn9sidSaE9843UuEh40b5L9QLVLkk99fF6X6EHTfzVW9q+rufvF56v7MJfsXT5bg7DriKRLwvOe15ans9zY6Iulb+frU4gAYXvEmkDujkd/46+v0NejyHJCbIVwOUOoM4NmTch27AO+ZyaVWH8iifmHpQpRflgNdyz176ZRlQFfVEmPEs/gNlg4da4Tq/Pf45rkYa3ognj/WhVwBq4Q3lU2U+R4DkUPwKXmg/24oDvG0fA4/4hzoDQ6TBTW7m/bV5XB+R9t6c7z2PMaOBrSW2c7JErWfrh0G73BrPU2NyctT9KSCyt+N670WsePWsH7mYUmywpnUMekrRew3guTkBi8XasnDorB4cn5Wv+hKtPch9ztETFZjcZJzhi+P5tPCqMMzem6beM0zsWRz8JARGtuQHWGbao4cRdSBIg6sfQvn+rj5kDhMVizjoJc1Hu7eZMRbdG/YiN6hjaoZVlaSKc883kV60CqECKpUyp8ndRwRCmWDyosTFaHE9r8bXomUAQLa/Qf9duWaH1Rf2ILDxf5UFwmuyb5+CHN68HSO3+0n+z76yEC+kmnOAsDpknFD7fxrNsETw95oarZlcx8drN9Ttl+jR55KKFbAQHqVr3ZyQaxGVD7L05+1dlsPDHVHQ3FjHMVdTFQXyTkEOphc+Zzq6c3L5Be43mEU4ThiA1ayExZr9gUfjuWyAYIPoR5S+S+kcAsgXViu53Nvlhf1DdkI4JzP3x986MsHKwImyacSZevgIT8EKr0hCQc+PkQspZe1j2Cn9GMgWRvMwryQZdBOfMh+np4LQ4AvHi6mtjCKI+caQ+hHV6ECLkpj9O/h2xFMwtszXZTlYtLA/vFbNVq7yKXhc3qTOGxI0bzlAJQgvQl4GYJiBDy0533CxoesNyJrtO5W/vc3a7N4lqXOtwMaQfi9x4B2IYauhkHxwEd+xdqyLsQS+Fva+zTaSu3sKaTKG3Hhgn3ComN4EQqvUfZZVnk2Tdqi27nbXgfIrGPNTFt29K9UX7iHuUN5Twy3awdbivngHJdZgfGPurcfEOW+nObxGL6bef7wQ68aOWeVF5S0zGSU/O9blxU6cPqcXATHA3sUVOwormKn309OaVQnW0KvEcpi9aVp8pyzdpnrITVHB74VRq5yC31r8hhUnahIB71UnNu+m/gSUwx+eIdpAnM+hxz4ZJRhGS/tZr5HYQr6UQbfCAw7C+n1NjtXPzeUL22gkvncYL9aIyulFCRSZuJlm16fBQzSHknQTEfTteZ7do90rG0ewK4yfWXEvsSiuuBs5llyyhshTeBfZ1V0PZSWRBP0vN1HTBGq6Gma0iT7Sz/NlZGxRne/O36OocU1BDK5F1h2Bjtqzuafjo3fLzKoJaKRvIZ8iLWwb/G2o7z4CzgkSr49Ir0+rbkObf/+eiCD3OhUPY5JUSermkCkdgehAcsTsyLmzYisV2Sz9kkDU8N1cIZx6h8FVgxqAPEqlkSlFG6JwjQbNnH5NXabJ7+hBaz5kD7HXi9fq/ft3rwlwd4GvkMhImQ/APuXd7+790GtEOHiXMLJPkBnMStq5cfVKK1R5O5anbhTBFyNE6g/BcI8MGdNrXXcwnqcqPgUy5DxSmSI8KGdRQR9hcpSoB4zZZ2HNTNs8aXZVGKF4brtit/zD2/nmnVY3mdaKUR7d6/QxDC9TMX953qpTtRRXsqH2EwZS3nthTU7ghbaD39iRZvY8DASmL51tENDYg+fqDyhi3MOOpLyYBj3SB/pshC8NlHjeM9kT1TtkXj7Zb/5lqeAsGcCrm6zVEPcKBtNhbDAcvr45CRGT39Qb5Fo5g62/A2FjMG8BIM+pqs62fteL+gAAMBeMcboTmzGQyx4DziXd1EYhc8miTnHrQAAAA=",import.meta.url).href,new URL(""+new URL("badge-sample-2-C9akOfRk.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-3-BacbPyRw.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-4-BljmGkla.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-5-DWGY2Bab.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-6-BSEwgY1Y.webp",import.meta.url).href,import.meta.url).href;const Tr={A041:{pages:[{url:new URL(""+new URL("A041-1.svg-SCjcESLS.gz",import.meta.url).href,import.meta.url).href,width:442.2049865722656,height:714.3309936523438}]},A040:{pages:[{url:new URL(""+new URL("A040-1.svg-B1q0RH1Z.gz",import.meta.url).href,import.meta.url).href,width:442.2049865722656,height:714.3309936523438}]},A039:{pages:[{url:new URL(""+new URL("A039-1.svg-BrZUBLIi.gz",import.meta.url).href,import.meta.url).href,width:442.2049865722656,height:714.3309936523438}]},B001:{pages:[{url:new URL(""+new URL("B001-1.svg-DLOshZ_2.gz",import.meta.url).href,import.meta.url).href,width:1842.52001953125,height:1388.97998046875},{url:new URL(""+new URL("B001-2.svg-DuMFJMti.gz",import.meta.url).href,import.meta.url).href,width:1836.8499755859375,height:1383.31005859375}]},A004:{pages:[{url:new URL(""+new URL("A004-1.svg-Dm4KXuBb.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-2.svg-BMoD3VSE.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-3.svg-CZujMGnP.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-4.svg-B-_pYSMP.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-5.svg-C_KC-hjD.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-6.svg-Coy9z03B.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625}]},A001:{pages:[{url:new URL(""+new URL("A001-1.svg-DdwMotaf.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625}]}},Eo=[{id:"gold",label:"골드",description:"금색 링 · 클로버 보석 프레임"},{id:"sparkle",label:"스파클",description:"은색 링 · 하트 보석 프레임"},{id:"shining",label:"샤이닝",description:"캐릭터 컬러 링 · 원형 보석 프레임"}],$t=[{id:"badge-08",sourcePosition:8,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:1,column:8,frontPrint:[1254.330319862666,34.01955173522468,1424.4090600201464,204.098291892705],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,42.523488743098696,1415.9051230122723,195.59435488483098],back:[1262.9755859375,36.71195983886719,1415.7635498046875,189.4999542236328],typeIndex:1,label:"골드 01",thumbnail:new URL(""+new URL("badge-08-DE-FqJsL.webp",import.meta.url).href,import.meta.url).href},{id:"badge-09",sourcePosition:9,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:1,column:9,frontPrint:[1421.5748266986036,34.01955173522468,1591.653566856084,204.098291892705],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,42.523488743098696,1583.1496298482098,195.59435488483098],back:[1430.2200927734375,36.71195983886719,1583.008056640625,189.4999542236328],typeIndex:2,label:"골드 02",thumbnail:new URL(""+new URL("badge-09-DmH9n4DQ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-10",sourcePosition:10,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:1,column:10,frontPrint:[1588.8187231829786,34.01942966491218,1758.897463340459,204.0981698223925],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,42.523366672786196,1750.3935263325848,195.59423281451848],back:[1597.4639892578125,36.71195983886719,1750.251953125,189.4999542236328],typeIndex:3,label:"골드 03",thumbnail:new URL(""+new URL("badge-10-BejpQ3og.webp",import.meta.url).href,import.meta.url).href},{id:"badge-18",sourcePosition:18,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:2,column:8,frontPrint:[1254.330319862666,198.42891452819345,1424.4090600201464,368.50765468567374],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,206.93285153606746,1415.9051230122723,360.0037176777997],back:[1262.9755859375,201.1211395263672,1415.7635498046875,353.90911865234375],typeIndex:4,label:"골드 04",thumbnail:new URL(""+new URL("badge-18-XlSUykBc.webp",import.meta.url).href,import.meta.url).href},{id:"badge-19",sourcePosition:19,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:2,column:9,frontPrint:[1421.5748266986036,198.42891452819345,1591.653566856084,368.50765468567374],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,206.93285153606746,1583.1496298482098,360.0037176777997],back:[1430.2200927734375,201.1211395263672,1583.008056640625,353.90911865234375],typeIndex:5,label:"골드 05",thumbnail:new URL(""+new URL("badge-19-DBne2Zis.webp",import.meta.url).href,import.meta.url).href},{id:"badge-20",sourcePosition:20,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:2,column:10,frontPrint:[1588.8187231829786,198.42879245788095,1758.897463340459,368.50753261536124],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,206.93272946575496,1750.3935263325848,360.0035956074872],back:[1597.4639892578125,201.1211395263672,1750.251953125,353.90911865234375],typeIndex:6,label:"골드 06",thumbnail:new URL(""+new URL("badge-20-CIL8-nl4.webp",import.meta.url).href,import.meta.url).href},{id:"badge-28",sourcePosition:28,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:3,column:8,frontPrint:[1254.330319862666,362.838345985713,1424.4090600201464,532.9170861431933],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,371.342282993587,1415.9051230122723,524.4131491353193],back:[1262.9755859375,365.53057861328125,1415.7635498046875,518.3185424804688],typeIndex:7,label:"골드 07",thumbnail:new URL(""+new URL("badge-28-CcBXr4M_.webp",import.meta.url).href,import.meta.url).href},{id:"badge-29",sourcePosition:29,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:3,column:9,frontPrint:[1421.5748266986036,362.838345985713,1591.653566856084,532.9170861431933],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,371.342282993587,1583.1496298482098,524.4131491353193],back:[1430.2200927734375,365.53057861328125,1583.008056640625,518.3185424804688],typeIndex:8,label:"골드 08",thumbnail:new URL(""+new URL("badge-29-Dd0k_HIo.webp",import.meta.url).href,import.meta.url).href},{id:"badge-30",sourcePosition:30,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:3,column:10,frontPrint:[1588.8187231829786,362.8382239154005,1758.897463340459,532.9169640728808],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,371.3421609232745,1750.3935263325848,524.4130270650068],back:[1597.4639892578125,365.53057861328125,1750.251953125,518.3185424804688],typeIndex:9,label:"골드 09",thumbnail:new URL(""+new URL("badge-30-DfvCrJrR.webp",import.meta.url).href,import.meta.url).href},{id:"badge-38",sourcePosition:38,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:4,column:8,frontPrint:[1254.330319862666,527.2477087786817,1424.4090600201464,697.326448936162],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,535.7516457865557,1415.9051230122723,688.822511928288],back:[1262.9755859375,529.9398803710938,1415.7635498046875,682.7278442382812],typeIndex:10,label:"골드 10",thumbnail:new URL(""+new URL("badge-38-Cg79xo4X.webp",import.meta.url).href,import.meta.url).href},{id:"badge-39",sourcePosition:39,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:4,column:9,frontPrint:[1421.5748266986036,527.2477087786817,1591.653566856084,697.326448936162],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,535.7516457865557,1583.1496298482098,688.822511928288],back:[1430.2200927734375,529.9398803710938,1583.008056640625,682.7278442382812],typeIndex:11,label:"골드 11",thumbnail:new URL(""+new URL("badge-39-B_YUpvKk.webp",import.meta.url).href,import.meta.url).href},{id:"badge-40",sourcePosition:40,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:4,column:10,frontPrint:[1588.8187231829786,527.2477087786817,1758.897463340459,697.326448936162],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,535.7516457865557,1750.3935263325848,688.822511928288],back:[1597.4639892578125,529.9398803710938,1750.251953125,682.7278442382812],typeIndex:12,label:"골드 12",thumbnail:new URL(""+new URL("badge-40-DBsTG2MC.webp",import.meta.url).href,import.meta.url).href},{id:"badge-48",sourcePosition:48,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:5,column:8,frontPrint:[1254.330319862666,691.6571326068067,1424.4090600201464,861.735872764287],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,700.1610696146807,1415.9051230122723,853.231935756413],back:[1262.9755859375,694.3494873046875,1415.7635498046875,847.137451171875],typeIndex:13,label:"골드 13",thumbnail:new URL(""+new URL("badge-48-rZmMYQXx.webp",import.meta.url).href,import.meta.url).href},{id:"badge-49",sourcePosition:49,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:5,column:9,frontPrint:[1421.5748266986036,691.6571326068067,1591.653566856084,861.735872764287],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,700.1610696146807,1583.1496298482098,853.231935756413],back:[1430.2200927734375,694.3494873046875,1583.008056640625,847.137451171875],typeIndex:14,label:"골드 14",thumbnail:new URL(""+new URL("badge-49-Dhx76ABa.webp",import.meta.url).href,import.meta.url).href},{id:"badge-50",sourcePosition:50,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:5,column:10,frontPrint:[1588.8187231829786,691.6571326068067,1758.897463340459,861.735872764287],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,700.1610696146807,1750.3935263325848,853.231935756413],back:[1597.4639892578125,694.3494873046875,1750.251953125,847.137451171875],typeIndex:15,label:"골드 15",thumbnail:new URL(""+new URL("badge-50-5Am-PpTX.webp",import.meta.url).href,import.meta.url).href},{id:"badge-58",sourcePosition:58,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:6,column:8,frontPrint:[1254.330319862666,856.0665564349317,1424.4090600201464,1026.145296592412],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,864.5704934428057,1415.9051230122723,1017.641359584538],back:[1262.9755859375,858.7587890625,1415.7635498046875,1011.5467529296875],typeIndex:16,label:"골드 16",thumbnail:new URL(""+new URL("badge-58-CbB1XB4w.webp",import.meta.url).href,import.meta.url).href},{id:"badge-59",sourcePosition:59,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:6,column:9,frontPrint:[1421.5748266986036,856.0665564349317,1591.653566856084,1026.145296592412],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,864.5704934428057,1583.1496298482098,1017.641359584538],back:[1430.2200927734375,858.7587890625,1583.008056640625,1011.5467529296875],typeIndex:17,label:"골드 17",thumbnail:new URL(""+new URL("badge-59-CELhVXQJ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-60",sourcePosition:60,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:6,column:10,frontPrint:[1588.8187231829786,856.0666785052442,1758.897463340459,1026.1454186627245],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,864.5706155131182,1750.3935263325848,1017.6414816548505],back:[1597.4639892578125,858.7587890625,1750.251953125,1011.5467529296875],typeIndex:18,label:"골드 18",thumbnail:new URL(""+new URL("badge-60-BAzuZeiE.webp",import.meta.url).href,import.meta.url).href},{id:"badge-68",sourcePosition:68,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:7,column:8,frontPrint:[1254.330319862666,1020.4759802630567,1424.4090600201464,1190.554720420537],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,1028.9799172709309,1415.9051230122723,1182.050783412663],back:[1262.9755859375,1023.1682739257812,1415.7635498046875,1175.956298828125],typeIndex:19,label:"골드 19",thumbnail:new URL(""+new URL("badge-68-D6yD2wXZ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-69",sourcePosition:69,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:7,column:9,frontPrint:[1421.5748266986036,1020.4759802630567,1591.653566856084,1190.554720420537],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,1028.9799172709309,1583.1496298482098,1182.050783412663],back:[1430.2200927734375,1023.1682739257812,1583.008056640625,1175.956298828125],typeIndex:20,label:"골드 20",thumbnail:new URL(""+new URL("badge-69-DZ9miDly.webp",import.meta.url).href,import.meta.url).href},{id:"badge-70",sourcePosition:70,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:7,column:10,frontPrint:[1588.8187231829786,1020.4761023333692,1758.897463340459,1190.5548424908495],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,1028.9800393412434,1750.3935263325848,1182.0509054829754],back:[1597.4639892578125,1023.1682739257812,1750.251953125,1175.956298828125],typeIndex:21,label:"골드 21",thumbnail:new URL(""+new URL("badge-70-DgXjk1az.webp",import.meta.url).href,import.meta.url).href},{id:"badge-78",sourcePosition:78,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:8,column:8,frontPrint:[1254.330319862666,1184.8853735736036,1424.4090600201464,1354.964113731084],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,1193.3893105814777,1415.9051230122723,1346.4601767232098],back:[1262.9755859375,1187.57763671875,1415.7635498046875,1340.36572265625],typeIndex:22,label:"골드 22",thumbnail:new URL(""+new URL("badge-78-Cd2vu3Y5.webp",import.meta.url).href,import.meta.url).href},{id:"badge-79",sourcePosition:79,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:8,column:9,frontPrint:[1421.5748266986036,1184.8853735736036,1591.653566856084,1354.964113731084],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,1193.3893105814777,1583.1496298482098,1346.4601767232098],back:[1430.2200927734375,1187.57763671875,1583.008056640625,1340.36572265625],typeIndex:23,label:"골드 23",thumbnail:new URL(""+new URL("badge-79-DRsnIm3D.webp",import.meta.url).href,import.meta.url).href},{id:"badge-80",sourcePosition:80,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:8,column:10,frontPrint:[1588.8187231829786,1184.885495643916,1758.897463340459,1354.9642358013964],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,1193.3894326517902,1750.3935263325848,1346.4602987935223],back:[1597.4639892578125,1187.57763671875,1750.251953125,1340.36572265625],typeIndex:24,label:"골드 24",thumbnail:new URL(""+new URL("badge-80-IkvXAdCT.webp",import.meta.url).href,import.meta.url).href},{id:"badge-03",sourcePosition:3,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:3,frontPrint:[418.042203407588,34.04199741393562,588.1209435650683,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,42.54593442180963,579.6170065571943,195.61680056354191],back:[426.7555236816406,36.71195983886719,579.5435180664062,189.4999542236328],typeIndex:1,label:"스파클 01",thumbnail:new URL(""+new URL("badge-03-C2Andf4t.webp",import.meta.url).href,import.meta.url).href},{id:"badge-04",sourcePosition:4,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:4,frontPrint:[584.8421912005567,34.04199741393562,754.920931358037,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,42.54593442180963,746.416994350163,195.61680056354191],back:[593.9993896484375,36.71195983886719,746.7874145507812,189.4999542236328],typeIndex:2,label:"스파클 02",thumbnail:new URL(""+new URL("badge-04-evTzyb21.webp",import.meta.url).href,import.meta.url).href},{id:"badge-05",sourcePosition:5,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:5,frontPrint:[752.1222204974317,34.04199741393562,922.200960654912,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,42.54593442180963,913.697023647038,195.61680056354191],back:[761.24365234375,36.71195983886719,914.0316162109375,189.4999542236328],typeIndex:3,label:"스파클 03",thumbnail:new URL(""+new URL("badge-05-COCRur_e.webp",import.meta.url).href,import.meta.url).href},{id:"badge-07",sourcePosition:7,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:7,frontPrint:[1086.824216347041,34.63428257018562,1256.9029565045214,204.71302272766593],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,43.13821957805963,1248.3990194966473,196.20908571979191],back:[1095.731689453125,36.71195983886719,1248.5196533203125,189.4999542236328],typeIndex:4,label:"스파클 04",thumbnail:new URL(""+new URL("badge-07-VA6G1nD3.webp",import.meta.url).href,import.meta.url).href},{id:"badge-13",sourcePosition:13,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:3,frontPrint:[418.042203407588,198.44202182799813,588.1209435650683,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,206.94595883587215,579.6170065571943,360.0168249776044],back:[426.7555236816406,201.1211395263672,579.5435180664062,353.90911865234375],typeIndex:5,label:"스파클 05",thumbnail:new URL(""+new URL("badge-13-BFRXnlsh.webp",import.meta.url).href,import.meta.url).href},{id:"badge-14",sourcePosition:14,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:4,frontPrint:[584.8421912005567,198.44202182799813,754.920931358037,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,206.94595883587215,746.416994350163,360.0168249776044],back:[593.9993896484375,201.1211395263672,746.7874145507812,353.90911865234375],typeIndex:6,label:"스파클 06",thumbnail:new URL(""+new URL("badge-14-DtQvtGMO.webp",import.meta.url).href,import.meta.url).href},{id:"badge-15",sourcePosition:15,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:5,frontPrint:[752.1222204974317,198.44202182799813,922.200960654912,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,206.94595883587215,913.697023647038,360.0168249776044],back:[761.24365234375,201.1211395263672,914.0316162109375,353.90911865234375],typeIndex:7,label:"스파클 07",thumbnail:new URL(""+new URL("badge-15-czov33Tv.webp",import.meta.url).href,import.meta.url).href},{id:"badge-17",sourcePosition:17,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:7,frontPrint:[1086.824216347041,198.53052280456063,1256.9029565045214,368.60926296204093],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,207.03445981243465,1248.3990194966473,360.1053259541669],back:[1095.731689453125,201.1211395263672,1248.5196533203125,353.90911865234375],typeIndex:8,label:"스파클 08",thumbnail:new URL(""+new URL("badge-17-QyXdOENZ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-24",sourcePosition:24,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:3,column:4,frontPrint:[584.8421912005567,362.8420386126661,754.920931358037,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,371.3459756205401,746.416994350163,524.4168417622724],back:[593.9993896484375,365.53057861328125,746.7874145507812,518.3185424804688],typeIndex:9,label:"스파클 09",thumbnail:new URL(""+new URL("badge-24-D06_EHHY.webp",import.meta.url).href,import.meta.url).href},{id:"badge-25",sourcePosition:25,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:3,column:5,frontPrint:[752.1222204974317,362.8420386126661,922.200960654912,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,371.3459756205401,913.697023647038,524.4168417622724],back:[761.24365234375,365.53057861328125,914.0316162109375,518.3185424804688],typeIndex:10,label:"스파클 10",thumbnail:new URL(""+new URL("badge-25-DtDCPFNy.webp",import.meta.url).href,import.meta.url).href},{id:"badge-27",sourcePosition:27,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:3,column:7,frontPrint:[1086.824216347041,363.2766089251661,1256.9029565045214,533.3553490826464],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,371.7805459330401,1248.3990194966473,524.8514120747724],back:[1095.731689453125,365.53057861328125,1248.5196533203125,518.3185424804688],typeIndex:11,label:"스파클 11",thumbnail:new URL(""+new URL("badge-27-Cd6A13TO.webp",import.meta.url).href,import.meta.url).href},{id:"badge-34",sourcePosition:34,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:4,column:4,frontPrint:[584.8421912005567,527.2420630267286,754.920931358037,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,535.7460000346026,746.416994350163,688.8168661763349],back:[593.9993896484375,529.9398803710938,746.7874145507812,682.7278442382812],typeIndex:12,label:"스파클 12",thumbnail:new URL(""+new URL("badge-34-Cd0ySSwt.webp",import.meta.url).href,import.meta.url).href},{id:"badge-35",sourcePosition:35,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:4,column:5,frontPrint:[752.1222204974317,527.2420630267286,922.200960654912,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,535.7460000346026,913.697023647038,688.8168661763349],back:[761.24365234375,529.9398803710938,914.0316162109375,682.7278442382812],typeIndex:13,label:"스파클 13",thumbnail:new URL(""+new URL("badge-35-DOwYXlfS.webp",import.meta.url).href,import.meta.url).href},{id:"badge-37",sourcePosition:37,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:4,column:7,frontPrint:[1086.824216347041,527.4719824603224,1256.9029565045214,697.5507226178026],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,535.9759194681964,1248.3990194966473,689.0467856099286],back:[1095.731689453125,529.9398803710938,1248.5196533203125,682.7278442382812],typeIndex:14,label:"스파클 14",thumbnail:new URL(""+new URL("badge-37-CbOkyFPI.webp",import.meta.url).href,import.meta.url).href},{id:"badge-44",sourcePosition:44,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:5,column:4,frontPrint:[584.8421912005567,691.6420264056349,754.920931358037,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,700.1459634135089,746.416994350163,853.2168295552411],back:[593.9993896484375,694.3494873046875,746.7874145507812,847.137451171875],typeIndex:15,label:"스파클 15",thumbnail:new URL(""+new URL("badge-44-B0QQhtl8.webp",import.meta.url).href,import.meta.url).href},{id:"badge-45",sourcePosition:45,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:5,column:5,frontPrint:[752.1222204974317,691.6420264056349,922.200960654912,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,700.1459634135089,913.697023647038,853.2168295552411],back:[761.24365234375,694.3494873046875,914.0316162109375,847.137451171875],typeIndex:16,label:"스파클 16",thumbnail:new URL(""+new URL("badge-45-DmxY66ow.webp",import.meta.url).href,import.meta.url).href},{id:"badge-47",sourcePosition:47,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:5,column:7,frontPrint:[1086.824216347041,691.9851050189161,1256.9029565045214,862.0638451763964],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,700.4890420267901,1248.3990194966473,853.5599081685224],back:[1095.731689453125,694.3494873046875,1248.5196533203125,847.137451171875],typeIndex:17,label:"스파클 17",thumbnail:new URL(""+new URL("badge-47-CeRviWJJ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-54",sourcePosition:54,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:6,column:4,frontPrint:[584.8421912005567,856.0420508196974,754.920931358037,1026.1207909771776],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,864.5459878275714,746.416994350163,1017.6168539693036],back:[593.9993896484375,858.7587890625,746.7874145507812,1011.5467529296875],typeIndex:18,label:"스파클 18",thumbnail:new URL(""+new URL("badge-54-B5s3ZlQK.webp",import.meta.url).href,import.meta.url).href},{id:"badge-55",sourcePosition:55,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:6,column:5,frontPrint:[752.1222204974317,856.0420508196974,922.200960654912,1026.1207909771776],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,864.5459878275714,913.697023647038,1017.6168539693036],back:[761.24365234375,858.7587890625,914.0316162109375,1011.5467529296875],typeIndex:19,label:"스파클 19",thumbnail:new URL(""+new URL("badge-55-DODeslOI.webp",import.meta.url).href,import.meta.url).href},{id:"badge-57",sourcePosition:57,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:6,column:7,frontPrint:[1086.824216347041,856.3358130267286,1256.9029565045214,1026.414553184209],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,864.8397500346026,1248.3990194966473,1017.9106161763349],back:[1095.731689453125,858.7587890625,1248.5196533203125,1011.5467529296875],typeIndex:20,label:"스파클 20",thumbnail:new URL(""+new URL("badge-57-BoHgYb2v.webp",import.meta.url).href,import.meta.url).href},{id:"badge-64",sourcePosition:64,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:7,column:4,frontPrint:[584.8421912005567,1020.4420141986036,754.920931358037,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,1028.9459512064777,746.416994350163,1182.0168173482098],back:[593.9993896484375,1023.1682739257812,746.7874145507812,1175.956298828125],typeIndex:21,label:"스파클 21",thumbnail:new URL(""+new URL("badge-64-9ht6MIZ6.webp",import.meta.url).href,import.meta.url).href},{id:"badge-65",sourcePosition:65,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:7,column:5,frontPrint:[752.1222204974317,1020.4420141986036,922.200960654912,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,1028.9459512064777,913.697023647038,1182.0168173482098],back:[761.24365234375,1023.1682739257812,914.0316162109375,1175.956298828125],typeIndex:22,label:"스파클 22",thumbnail:new URL(""+new URL("badge-65-DdkxeC42.webp",import.meta.url).href,import.meta.url).href},{id:"badge-74",sourcePosition:74,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:8,column:4,frontPrint:[584.8421912005567,1184.842038612666,754.920931358037,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,1193.3459756205402,746.416994350163,1346.4168417622723],back:[593.9993896484375,1187.57763671875,746.7874145507812,1340.36572265625],typeIndex:23,label:"스파클 23",thumbnail:new URL(""+new URL("badge-74-PcRnXs2E.webp",import.meta.url).href,import.meta.url).href},{id:"badge-75",sourcePosition:75,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:8,column:5,frontPrint:[752.1222204974317,1184.842038612666,922.200960654912,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,1193.3459756205402,913.697023647038,1346.4168417622723],back:[761.24365234375,1187.57763671875,914.0316162109375,1340.36572265625],typeIndex:24,label:"스파클 24",thumbnail:new URL(""+new URL("badge-75-Cu6sRJZU.webp",import.meta.url).href,import.meta.url).href},{id:"badge-01",sourcePosition:1,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:1,column:1,frontPrint:[83.60220859557624,34.04199741393562,253.68094875305655,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,42.54593442180963,245.17701174518254,195.61680056354191],back:[92.26741027832031,36.71195983886719,245.05540466308594,189.4999542236328],typeIndex:1,label:"샤이닝 01",thumbnail:new URL(""+new URL("badge-01-z9KiWMp0.webp",import.meta.url).href,import.meta.url).href},{id:"badge-02",sourcePosition:2,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:1,column:2,frontPrint:[250.88221500426766,34.04199741393562,420.96095516174796,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,42.54593442180963,412.45701815387395,195.61680056354191],back:[259.51129150390625,36.71195983886719,412.2992858886719,189.4999542236328],typeIndex:2,label:"샤이닝 02",thumbnail:new URL(""+new URL("badge-02-DHBRGsSq.webp",import.meta.url).href,import.meta.url).href},{id:"badge-06",sourcePosition:6,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:1,column:6,frontPrint:[919.7811255267286,34.82433841735359,1089.859865684209,204.9030785748339],bleedMM:3,finishedDiameterMM:54,front:[928.2850625346026,43.3282754252276,1081.3559286763348,196.39914156695988],back:[928.487548828125,36.71195983886719,1081.2755126953125,189.4999542236328],typeIndex:3,label:"샤이닝 03",thumbnail:new URL(""+new URL("badge-06-C_JSAFg0.webp",import.meta.url).href,import.meta.url).href},{id:"badge-11",sourcePosition:11,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:2,column:1,frontPrint:[83.60220859557624,198.44202182799813,253.68094875305655,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,206.94595883587215,245.17701174518254,360.0168249776044],back:[92.26741027832031,201.1211395263672,245.05540466308594,353.90911865234375],typeIndex:4,label:"샤이닝 04",thumbnail:new URL(""+new URL("badge-11-DHLpc7QZ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-12",sourcePosition:12,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:2,column:2,frontPrint:[250.88221500426766,198.44202182799813,420.96095516174796,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,206.94595883587215,412.45701815387395,360.0168249776044],back:[259.51129150390625,201.1211395263672,412.2992858886719,353.90911865234375],typeIndex:5,label:"샤이닝 05",thumbnail:new URL(""+new URL("badge-12-DCfR1xAr.webp",import.meta.url).href,import.meta.url).href},{id:"badge-16",sourcePosition:16,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:2,column:6,frontPrint:[919.7803625872755,198.7830786517286,1089.8591027447558,368.8618188092089],bleedMM:3,finishedDiameterMM:54,front:[928.2842995951495,207.28701565960262,1081.3551657368816,360.3578818013349],back:[928.487548828125,201.1211395263672,1081.2755126953125,353.90911865234375],typeIndex:6,label:"샤이닝 06",thumbnail:new URL(""+new URL("badge-16-CTzAvAez.webp",import.meta.url).href,import.meta.url).href},{id:"badge-21",sourcePosition:21,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:1,frontPrint:[83.60220859557624,362.8420386126661,253.68094875305655,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,371.3459756205401,245.17701174518254,524.4168417622724],back:[92.26741027832031,365.53057861328125,245.05540466308594,518.3185424804688],typeIndex:7,label:"샤이닝 07",thumbnail:new URL(""+new URL("badge-21-NIdd2ZW2.webp",import.meta.url).href,import.meta.url).href},{id:"badge-22",sourcePosition:22,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:2,frontPrint:[250.88221500426766,362.8420386126661,420.96095516174796,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,371.3459756205401,412.45701815387395,524.4168417622724],back:[259.51129150390625,365.53057861328125,412.2992858886719,518.3185424804688],typeIndex:8,label:"샤이닝 08",thumbnail:new URL(""+new URL("badge-22-BVzALAYL.webp",import.meta.url).href,import.meta.url).href},{id:"badge-23",sourcePosition:23,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:3,frontPrint:[418.042203407588,362.8420386126661,588.1209435650683,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,371.3459756205401,579.6170065571943,524.4168417622724],back:[426.7555236816406,365.53057861328125,579.5435180664062,518.3185424804688],typeIndex:9,label:"샤이닝 09",thumbnail:new URL(""+new URL("badge-23-3N0N0K4-.webp",import.meta.url).href,import.meta.url).href},{id:"badge-26",sourcePosition:26,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:6,frontPrint:[919.7803015521192,363.05091617614266,1089.8590417095995,533.129656333623],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,371.5548531840167,1081.3551047017254,524.625719325749],back:[928.487548828125,365.53057861328125,1081.2755126953125,518.3185424804688],typeIndex:10,label:"샤이닝 10",thumbnail:new URL(""+new URL("badge-26-BBKF5945.webp",import.meta.url).href,import.meta.url).href},{id:"badge-31",sourcePosition:31,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:1,frontPrint:[83.60220859557624,527.2420630267286,253.68094875305655,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,535.7460000346026,245.17701174518254,688.8168661763349],back:[92.26741027832031,529.9398803710938,245.05540466308594,682.7278442382812],typeIndex:11,label:"샤이닝 11",thumbnail:new URL(""+new URL("badge-31-CtwaKdwO.webp",import.meta.url).href,import.meta.url).href},{id:"badge-32",sourcePosition:32,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:2,frontPrint:[250.88221500426766,527.2420630267286,420.96095516174796,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,535.7460000346026,412.45701815387395,688.8168661763349],back:[259.51129150390625,529.9398803710938,412.2992858886719,682.7278442382812],typeIndex:12,label:"샤이닝 12",thumbnail:new URL(""+new URL("badge-32-DoB35F9k.webp",import.meta.url).href,import.meta.url).href},{id:"badge-33",sourcePosition:33,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:3,frontPrint:[418.042203407588,527.2420630267286,588.1209435650683,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,535.7460000346026,579.6170065571943,688.8168661763349],back:[426.7555236816406,529.9398803710938,579.5435180664062,682.7278442382812],typeIndex:13,label:"샤이닝 13",thumbnail:new URL(""+new URL("badge-33-C_vBQs8e.webp",import.meta.url).href,import.meta.url).href},{id:"badge-36",sourcePosition:36,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:6,frontPrint:[919.7803015521192,527.3186011126661,1089.8590417095995,697.3973412701464],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,535.8225381205401,1081.3551047017254,688.8934042622724],back:[928.487548828125,529.9398803710938,1081.2755126953125,682.7278442382812],typeIndex:14,label:"샤이닝 14",thumbnail:new URL(""+new URL("badge-36-BU5XfqNk.webp",import.meta.url).href,import.meta.url).href},{id:"badge-41",sourcePosition:41,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:1,frontPrint:[83.60220859557624,691.6420264056349,253.68094875305655,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,700.1459634135089,245.17701174518254,853.2168295552411],back:[92.26741027832031,694.3494873046875,245.05540466308594,847.137451171875],typeIndex:15,label:"샤이닝 15",thumbnail:new URL(""+new URL("badge-41-sv0NYG45.webp",import.meta.url).href,import.meta.url).href},{id:"badge-42",sourcePosition:42,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:2,frontPrint:[250.88221500426766,691.6420264056349,420.96095516174796,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,700.1459634135089,412.45701815387395,853.2168295552411],back:[259.51129150390625,694.3494873046875,412.2992858886719,847.137451171875],typeIndex:16,label:"샤이닝 16",thumbnail:new URL(""+new URL("badge-42-eAkGDu0d.webp",import.meta.url).href,import.meta.url).href},{id:"badge-43",sourcePosition:43,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:3,frontPrint:[418.0421881487989,691.6420264056349,588.1209283062792,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[426.54612515667293,700.1459634135089,579.6169912984052,853.2168295552411],back:[426.7555236816406,694.3494873046875,579.5435180664062,847.137451171875],typeIndex:17,label:"샤이닝 17",thumbnail:new URL(""+new URL("badge-43-B-R7zh4F.webp",import.meta.url).href,import.meta.url).href},{id:"badge-46",sourcePosition:46,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:6,frontPrint:[919.7803015521192,691.5863013079786,1089.8590417095995,861.6650414654589],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,700.0902383158526,1081.3551047017254,853.1611044575849],back:[928.487548828125,694.3494873046875,1081.2755126953125,847.137451171875],typeIndex:18,label:"샤이닝 18",thumbnail:new URL(""+new URL("badge-46-BqF9wPY3.webp",import.meta.url).href,import.meta.url).href},{id:"badge-52",sourcePosition:52,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:6,column:2,frontPrint:[250.88221500426766,856.0420508196974,420.96095516174796,1026.1207909771776],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,864.5459878275714,412.45701815387395,1017.6168539693036],back:[259.51129150390625,858.7587890625,412.2992858886719,1011.5467529296875],typeIndex:19,label:"샤이닝 19",thumbnail:new URL(""+new URL("badge-52-CGMpcjvJ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-56",sourcePosition:56,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:6,column:6,frontPrint:[919.7803015521192,856.7039770892286,1089.8590417095995,1026.782717246709],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,865.2079140971026,1081.3551047017254,1018.2787802388349],back:[928.487548828125,858.7587890625,1081.2755126953125,1011.5467529296875],typeIndex:20,label:"샤이닝 20",thumbnail:new URL(""+new URL("badge-56-Cvemc1GB.webp",import.meta.url).href,import.meta.url).href},{id:"badge-62",sourcePosition:62,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:7,column:2,frontPrint:[250.88221500426766,1020.4420141986036,420.96095516174796,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,1028.9459512064777,412.45701815387395,1182.0168173482098],back:[259.51129150390625,1023.1682739257812,412.2992858886719,1175.956298828125],typeIndex:21,label:"샤이닝 21",thumbnail:new URL(""+new URL("badge-62-DBFLMbtl.webp",import.meta.url).href,import.meta.url).href},{id:"badge-63",sourcePosition:63,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:7,column:3,frontPrint:[418.042203407588,1020.4420141986036,588.1209435650683,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,1028.9459512064777,579.6170065571943,1182.0168173482098],back:[426.7555236816406,1023.1682739257812,579.5435180664062,1175.956298828125],typeIndex:22,label:"샤이닝 22",thumbnail:new URL(""+new URL("badge-63-CuC8TDLf.webp",import.meta.url).href,import.meta.url).href},{id:"badge-72",sourcePosition:72,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:8,column:2,frontPrint:[250.88221500426766,1184.842038612666,420.96095516174796,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,1193.3459756205402,412.45701815387395,1346.4168417622723],back:[259.51129150390625,1187.57763671875,412.2992858886719,1340.36572265625],typeIndex:23,label:"샤이닝 23",thumbnail:new URL(""+new URL("badge-72-pm8cvWoA.webp",import.meta.url).href,import.meta.url).href},{id:"badge-73",sourcePosition:73,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:8,column:3,frontPrint:[418.042203407588,1184.842038612666,588.1209435650683,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,1193.3459756205402,579.6170065571943,1346.4168417622723],back:[426.7555236816406,1187.57763671875,579.5435180664062,1340.36572265625],typeIndex:24,label:"샤이닝 24",thumbnail:new URL(""+new URL("badge-73-BHFfZ8n8.webp",import.meta.url).href,import.meta.url).href}],ic=["badge-48","badge-07","badge-06"],Aa=new Map;function Yo(i,e=0){const t=`${i}:${e}`;return Aa.has(t)||Aa.set(t,(async()=>{const n=Tr[i]?.pages[e];if(!n)throw new Error("벡터 페이지가 없습니다.");const r=await fetch(n.url);if(!r.ok)throw new Error("벡터 자료를 불러오지 못했습니다.");const a=await r.arrayBuffer(),o=new Uint8Array(a,0,Math.min(2,a.byteLength)),s=o[0]===31&&o[1]===139?await new Response(new Blob([a]).stream().pipeThrough(new DecompressionStream("gzip"))).text():new TextDecoder().decode(a);if(!s.includes("<svg"))throw new Error("벡터 자료 형식이 올바르지 않습니다.");const c=new Blob([s],{type:"image/svg+xml"}),l=URL.createObjectURL(c);return{...n,text:s,url:l}})()),Aa.get(t)}async function O0(i,e,t=2048){const n=await Yo("B001",i==="front"?0:1),[r,a,o,s]=e;return(i==="back"?n.text.replace(/<path\b(?=[^>]*\bstroke="#ec148d")[^>]*\/>/g,""):n.text).replace(/<svg\b[^>]*>/,l=>l.replace(/\bwidth="[^"]*"/,`width="${t}"`).replace(/\bheight="[^"]*"/,`height="${t}"`).replace(/\bviewBox="[^"]*"/,`viewBox="${r} ${a} ${o-r} ${s-a}"`))}async function k0(i,e,t){const n=await O0(i,e,t),r=URL.createObjectURL(new Blob([n],{type:"image/svg+xml"}));try{const a=new Image;a.src=r,await a.decode();const o=document.createElement("canvas");o.width=o.height=t;const s=o.getContext("2d");return s.fillStyle="#fff",s.fillRect(0,0,t,t),s.drawImage(a,0,0,t,t),o}finally{URL.revokeObjectURL(r)}}const Zo={"badge-08":{1024:new URL(""+new URL("badge-08-front-1024-KpIUse9J.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-08-front-2048-B0ueNsAL.webp",import.meta.url).href,import.meta.url).href},"badge-09":{1024:new URL(""+new URL("badge-09-front-1024-BHzfL91Z.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-09-front-2048-BJEhTulG.webp",import.meta.url).href,import.meta.url).href},"badge-10":{1024:new URL(""+new URL("badge-10-front-1024-BW2trwVb.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-10-front-2048-Bc9u0csb.webp",import.meta.url).href,import.meta.url).href},"badge-18":{1024:new URL(""+new URL("badge-18-front-1024-CNW1vMsR.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-18-front-2048-CPbCMWiK.webp",import.meta.url).href,import.meta.url).href},"badge-19":{1024:new URL(""+new URL("badge-19-front-1024-BM_nQUe5.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-19-front-2048-BW8tpg_f.webp",import.meta.url).href,import.meta.url).href},"badge-20":{1024:new URL(""+new URL("badge-20-front-1024-p4kpyLL2.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-20-front-2048-bJ8sH0PZ.webp",import.meta.url).href,import.meta.url).href},"badge-28":{1024:new URL(""+new URL("badge-28-front-1024-DkkmqjkY.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-28-front-2048-DmYpVocG.webp",import.meta.url).href,import.meta.url).href},"badge-29":{1024:new URL(""+new URL("badge-29-front-1024-Du9vDwEk.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-29-front-2048-CoCzp3Rw.webp",import.meta.url).href,import.meta.url).href},"badge-30":{1024:new URL(""+new URL("badge-30-front-1024-B033RabT.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-30-front-2048-Bb5kSoGT.webp",import.meta.url).href,import.meta.url).href},"badge-38":{1024:new URL(""+new URL("badge-38-front-1024-DpVDNxCa.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-38-front-2048-Cd93ntsk.webp",import.meta.url).href,import.meta.url).href},"badge-39":{1024:new URL(""+new URL("badge-39-front-1024-B3wORdZZ.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-39-front-2048-bWtL5qRz.webp",import.meta.url).href,import.meta.url).href},"badge-40":{1024:new URL(""+new URL("badge-40-front-1024-BxS5sSER.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-40-front-2048-3vLTiwEC.webp",import.meta.url).href,import.meta.url).href},"badge-48":{1024:new URL(""+new URL("badge-48-front-1024-CJNlKfFY.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-48-front-2048-CgWRTIXa.webp",import.meta.url).href,import.meta.url).href},"badge-49":{1024:new URL(""+new URL("badge-49-front-1024-BpjpHbjD.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-49-front-2048-8b4N_RWO.webp",import.meta.url).href,import.meta.url).href},"badge-50":{1024:new URL(""+new URL("badge-50-front-1024-Cg9Y0Qrk.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-50-front-2048-dIzGrzgI.webp",import.meta.url).href,import.meta.url).href},"badge-58":{1024:new URL(""+new URL("badge-58-front-1024-CBNmS-xF.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-58-front-2048-fbuHwG8l.webp",import.meta.url).href,import.meta.url).href},"badge-59":{1024:new URL(""+new URL("badge-59-front-1024-DBMP3pN4.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-59-front-2048-BnJgSwbV.webp",import.meta.url).href,import.meta.url).href},"badge-60":{1024:new URL(""+new URL("badge-60-front-1024-DAu6kIVx.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-60-front-2048-DAm0m-yL.webp",import.meta.url).href,import.meta.url).href},"badge-68":{1024:new URL(""+new URL("badge-68-front-1024-Zay7iu5d.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-68-front-2048-7qg0CPLU.webp",import.meta.url).href,import.meta.url).href},"badge-69":{1024:new URL(""+new URL("badge-69-front-1024-B24upS42.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-69-front-2048-BhxVU_Jf.webp",import.meta.url).href,import.meta.url).href},"badge-70":{1024:new URL(""+new URL("badge-70-front-1024-BY3fLouq.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-70-front-2048-DiIJa36L.webp",import.meta.url).href,import.meta.url).href},"badge-78":{1024:new URL(""+new URL("badge-78-front-1024-DAVDWsnG.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-78-front-2048-BXfHiCla.webp",import.meta.url).href,import.meta.url).href},"badge-79":{1024:new URL(""+new URL("badge-79-front-1024-BGN3Ufjd.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-79-front-2048-k2eWYaPB.webp",import.meta.url).href,import.meta.url).href},"badge-80":{1024:new URL(""+new URL("badge-80-front-1024-hXkNobvI.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-80-front-2048-DWpcVu6X.webp",import.meta.url).href,import.meta.url).href},"badge-03":{1024:new URL(""+new URL("badge-03-front-1024-C4mgMaOK.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-03-front-2048-Cnu47AWC.webp",import.meta.url).href,import.meta.url).href},"badge-04":{1024:new URL(""+new URL("badge-04-front-1024-CnbsV_Du.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-04-front-2048-qQUdF-RN.webp",import.meta.url).href,import.meta.url).href},"badge-05":{1024:new URL(""+new URL("badge-05-front-1024-BK1JMTGK.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-05-front-2048-Cn29ylag.webp",import.meta.url).href,import.meta.url).href},"badge-07":{1024:new URL(""+new URL("badge-07-front-1024-DhU6U8TK.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-07-front-2048-sQI9D8t7.webp",import.meta.url).href,import.meta.url).href},"badge-13":{1024:new URL(""+new URL("badge-13-front-1024-DYatd-dM.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-13-front-2048-CEAQNZdd.webp",import.meta.url).href,import.meta.url).href},"badge-14":{1024:new URL(""+new URL("badge-14-front-1024-D6VfA9o9.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-14-front-2048-2xQS9duF.webp",import.meta.url).href,import.meta.url).href},"badge-15":{1024:new URL(""+new URL("badge-15-front-1024-D5OhrY35.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-15-front-2048-D0v682f_.webp",import.meta.url).href,import.meta.url).href},"badge-17":{1024:new URL(""+new URL("badge-17-front-1024-BX1G3WhZ.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-17-front-2048-CsbVNRek.webp",import.meta.url).href,import.meta.url).href},"badge-24":{1024:new URL(""+new URL("badge-24-front-1024-D-uglhuf.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-24-front-2048-BsS5Pp8E.webp",import.meta.url).href,import.meta.url).href},"badge-25":{1024:new URL(""+new URL("badge-25-front-1024-CdX7l5jG.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-25-front-2048-dTUwg1Ca.webp",import.meta.url).href,import.meta.url).href},"badge-27":{1024:new URL(""+new URL("badge-27-front-1024-BHYrAcBM.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-27-front-2048-uUtT3cPS.webp",import.meta.url).href,import.meta.url).href},"badge-34":{1024:new URL(""+new URL("badge-34-front-1024-ClMZs_kE.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-34-front-2048-DRlEwpXc.webp",import.meta.url).href,import.meta.url).href},"badge-35":{1024:new URL(""+new URL("badge-35-front-1024-UEQFWC5d.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-35-front-2048-DOaqPbYT.webp",import.meta.url).href,import.meta.url).href},"badge-37":{1024:new URL(""+new URL("badge-37-front-1024-Bq3Vf0HW.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-37-front-2048-Dj2fS0Jy.webp",import.meta.url).href,import.meta.url).href},"badge-44":{1024:new URL(""+new URL("badge-44-front-1024-BDTBzNew.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-44-front-2048-ClbV74RY.webp",import.meta.url).href,import.meta.url).href},"badge-45":{1024:new URL(""+new URL("badge-45-front-1024-DLIkZMkw.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-45-front-2048-BD75eSRJ.webp",import.meta.url).href,import.meta.url).href},"badge-47":{1024:new URL(""+new URL("badge-47-front-1024-Bi7ooV5u.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-47-front-2048-mfSTbZ_t.webp",import.meta.url).href,import.meta.url).href},"badge-54":{1024:new URL(""+new URL("badge-54-front-1024-BFqwQ0nQ.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-54-front-2048-Bgb_Lh7X.webp",import.meta.url).href,import.meta.url).href},"badge-55":{1024:new URL(""+new URL("badge-55-front-1024-eWyBVxQR.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-55-front-2048-BzmWv-oM.webp",import.meta.url).href,import.meta.url).href},"badge-57":{1024:new URL(""+new URL("badge-57-front-1024-DOzO59mb.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-57-front-2048--Kr1olAB.webp",import.meta.url).href,import.meta.url).href},"badge-64":{1024:new URL(""+new URL("badge-64-front-1024-CzY1z-KV.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-64-front-2048-hL7MgvcY.webp",import.meta.url).href,import.meta.url).href},"badge-65":{1024:new URL(""+new URL("badge-65-front-1024-DGkHGnLq.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-65-front-2048-CJxYZujb.webp",import.meta.url).href,import.meta.url).href},"badge-74":{1024:new URL(""+new URL("badge-74-front-1024-CqQphw2Z.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-74-front-2048-DkxezEtp.webp",import.meta.url).href,import.meta.url).href},"badge-75":{1024:new URL(""+new URL("badge-75-front-1024-bg76x8Pv.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-75-front-2048-DtDgAsNm.webp",import.meta.url).href,import.meta.url).href},"badge-01":{1024:new URL(""+new URL("badge-01-front-1024-Rf0vA4_c.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-01-front-2048-D7pAQUWe.webp",import.meta.url).href,import.meta.url).href},"badge-02":{1024:new URL(""+new URL("badge-02-front-1024-DQYPbUOD.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-02-front-2048-CCe2Bvw_.webp",import.meta.url).href,import.meta.url).href},"badge-06":{1024:new URL(""+new URL("badge-06-front-1024-TYfGWCmx.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-06-front-2048-Ynhsiupy.webp",import.meta.url).href,import.meta.url).href},"badge-11":{1024:new URL(""+new URL("badge-11-front-1024-D1wBHL3R.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-11-front-2048-DFUhUK2m.webp",import.meta.url).href,import.meta.url).href},"badge-12":{1024:new URL(""+new URL("badge-12-front-1024-DPeQizYg.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-12-front-2048-CFQDj-gp.webp",import.meta.url).href,import.meta.url).href},"badge-16":{1024:new URL(""+new URL("badge-16-front-1024-TuYGSdar.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-16-front-2048-Ck6c--d4.webp",import.meta.url).href,import.meta.url).href},"badge-21":{1024:new URL(""+new URL("badge-21-front-1024-1kDVbj8L.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-21-front-2048-CTcxE-c7.webp",import.meta.url).href,import.meta.url).href},"badge-22":{1024:new URL(""+new URL("badge-22-front-1024-LtsIAEx-.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-22-front-2048-DoB0dXSu.webp",import.meta.url).href,import.meta.url).href},"badge-23":{1024:new URL(""+new URL("badge-23-front-1024-DIKhfgya.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-23-front-2048-Uw-z3hgS.webp",import.meta.url).href,import.meta.url).href},"badge-26":{1024:new URL(""+new URL("badge-26-front-1024-06WPoV6P.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-26-front-2048-BEEp01DV.webp",import.meta.url).href,import.meta.url).href},"badge-31":{1024:new URL(""+new URL("badge-31-front-1024-YbFn3EaT.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-31-front-2048-D7KcZ8CM.webp",import.meta.url).href,import.meta.url).href},"badge-32":{1024:new URL(""+new URL("badge-32-front-1024-BvtusoLC.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-32-front-2048-CVqKL76h.webp",import.meta.url).href,import.meta.url).href},"badge-33":{1024:new URL(""+new URL("badge-33-front-1024-LiyEuZJF.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-33-front-2048-DB5j7dic.webp",import.meta.url).href,import.meta.url).href},"badge-36":{1024:new URL(""+new URL("badge-36-front-1024-D6uKaqAG.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-36-front-2048-Cx61lgEe.webp",import.meta.url).href,import.meta.url).href},"badge-41":{1024:new URL(""+new URL("badge-41-front-1024-Y5MqdqYL.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-41-front-2048-Dz6FTSld.webp",import.meta.url).href,import.meta.url).href},"badge-42":{1024:new URL(""+new URL("badge-42-front-1024-iwDr8O6d.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-42-front-2048-BLgVr4EK.webp",import.meta.url).href,import.meta.url).href},"badge-43":{1024:new URL(""+new URL("badge-43-front-1024-Q86y2L0w.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-43-front-2048-TzFOD1RF.webp",import.meta.url).href,import.meta.url).href},"badge-46":{1024:new URL(""+new URL("badge-46-front-1024-BIHOO1Sv.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-46-front-2048-Dwt7Do6h.webp",import.meta.url).href,import.meta.url).href},"badge-52":{1024:new URL(""+new URL("badge-52-front-1024-DGX89P1y.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-52-front-2048--m84a1UG.webp",import.meta.url).href,import.meta.url).href},"badge-56":{1024:new URL(""+new URL("badge-56-front-1024-DR97FmXY.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-56-front-2048-DxbzDKqN.webp",import.meta.url).href,import.meta.url).href},"badge-62":{1024:new URL(""+new URL("badge-62-front-1024-DNVOLObF.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-62-front-2048-BoN0f0Ba.webp",import.meta.url).href,import.meta.url).href},"badge-63":{1024:new URL(""+new URL("badge-63-front-1024-B0DSIIDw.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-63-front-2048-Dg8QiKtl.webp",import.meta.url).href,import.meta.url).href},"badge-72":{1024:new URL(""+new URL("badge-72-front-1024-Z3fekoR5.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-72-front-2048-SeS3STRw.webp",import.meta.url).href,import.meta.url).href},"badge-73":{1024:new URL(""+new URL("badge-73-front-1024-ByMaSXl-.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-73-front-2048-CKbiXRtk.webp",import.meta.url).href,import.meta.url).href}},vi={1024:new URL(""+new URL("common-back-1024-D9lGZeS6.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("common-back-2048-DZQ3Tiv6.webp",import.meta.url).href,import.meta.url).href,rectangle:[92.26741027832031,36.71195983886719,245.05540466308594,189.4999542236328]},Ft=new Map,B0=64*1024*1024,z0=new Set([vi[1024],vi[2048]]);function G0(){let i=0;for(const e of Ft.values())e.ready&&(i+=e.image.naturalWidth*e.image.naturalHeight*4);for(const[e,t]of Ft){if(i<=B0)break;!t.ready||z0.has(e)||(i-=t.image.naturalWidth*t.image.naturalHeight*4,Ft.delete(e))}}function Ko(i){if(Ft.has(i)){const n=Ft.get(i);return Ft.delete(i),Ft.set(i,n),n.promise}const e=new Image,t={image:e,ready:!1};return e.decoding="async",e.src=i,t.promise=e.decode().then(()=>(t.ready=!0,G0(),e)).catch(n=>{throw Ft.delete(i),n}),Ft.set(i,t),t.promise}function Ta(i,e,t=1024){const r=(e==="back"?vi:Zo[i.id])?.[t>1024?"2048":"1024"],a=Ft.get(r);return a?.ready?(Ft.delete(r),Ft.set(r,a),a.image):null}function rc(){return Ko(vi[1024])}function Jo(i){return typeof i=="string"&&(i=$t.find(e=>e.id===i)),i?Promise.all([Ko(Zo[i.id][1024]),rc()]):Promise.resolve()}function wr(i,e,t){if(t<=2048){const n=e==="back"?vi:Zo[i.id];return Ko(n[t>1024?"2048":"1024"])}return k0(e,e==="back"?vi.rectangle:i.front,t)}const ll=Math.PI/180;function V0(i,e){const t=i.querySelector(".badge-3d-stage"),n=i.querySelector(".badge-3d-status");let r,a,o,s,c,l,u=!1,d=!1,h=null,f=0,v=0,b=1,m=!1,p=0,R=0,S=0,_=0,T=!1;const A=[],U=[];let P,y,w;function L(){r=new qo({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"}),r.setPixelRatio(Math.min(devicePixelRatio,2)),r.toneMapping=hn,r.outputColorSpace=Mt,t.append(r.domElement),a=new Oo,a.background=new Ze("#f7f7f5"),a.add(new Xl("#ffffff","#d3cbd2",2));const $=new So("#ffffff",2);$.position.set(-70,95,150),a.add($);const Te=new So("#ffffff",.7);Te.position.set(100,-40,80),a.add(Te),o=new Wo(-64,64,32,-32,.1,1e3),s=new Ct,a.add(s),w=new Qu(new Uint8Array([255,255,255,255]),1,1),w.colorSpace=Mt,w.needsUpdate=!0;const Fe=new Or(27,192);A.push(Fe);for(const Ue of["front","back"]){const H=new pi({color:"#fff",toneMapped:!1,map:w});U.push(H);const j=new ut(Fe,H);j.position.z=Ue==="front"?1.005:-1.005,Ue==="back"&&(j.rotation.y=Math.PI),s.add(j),Ue==="front"?c=j:l=j}for(const[Ue,H,j]of[[1.6,0,"#454247"],[.2,.9,"#ede8ed"],[.2,-.9,"#ede8ed"]]){const me=new kr(26.98,26.98,Ue,192,1,!0);me.rotateX(Math.PI/2),A.push(me);const _e=new Hl({color:j,roughness:.65,metalness:.05});U.push(_e);const ge=new ut(me,_e);ge.position.z=H,s.add(ge)}u=!0,o.position.z=120,r.compile(a,o),z()}function k(){if(!u||d)return;const $=t.clientWidth,Te=t.clientHeight;if(!$||!Te)return;const Fe=$/Te,Ue=Math.max(64,64/Fe);o.left=-Ue*Fe/2,o.right=Ue*Fe/2,o.top=Ue/2,o.bottom=-Ue/2,o.position.z=120,o.zoom=b,o.updateProjectionMatrix(),s.rotation.set(-f*ll,v*ll,0,"XYZ"),r.render(a,o),t.dataset.face=Math.abs((v%360+360)%360-180)<90?"back":"front",i.querySelector(".badge-zoom-value").textContent=Math.round(b*100)+"%"}function z(){r&&!d&&t.clientWidth&&t.clientHeight&&(r.setSize(t.clientWidth,t.clientHeight,!1),k(),h&&!T&&q())}function W(){const $=Math.min(t.clientWidth,t.clientHeight)*Math.min(devicePixelRatio,2)*b;return Math.min(r.capabilities.maxTextureSize,$>1500?4096:$>750?2048:1024)}function Y($){const Te=new gt($);return Te.needsUpdate=!0,Te.colorSpace=Mt,Te.anisotropy=Math.min(8,r.capabilities.getMaxAnisotropy()),Te}function X($,Te,Fe){$&&P?.image!==$&&(P?.dispose(),P=Y($),c.material.map=P,c.material.needsUpdate=!0,c.visible=!0),Te&&y?.image!==Te&&(y?.dispose(),y=Y(Te),l.material.map=y,l.material.needsUpdate=!0,l.visible=!0),_=Fe,t.dataset.state="ready",t.dataset.textureSize=String(Fe),t.removeAttribute("aria-busy"),k()}async function ae($,Te=!1,Fe=null){const Ue=$t.find(j=>j.id===$);if(!Ue)return;const H=++S;h=Ue,Te&&(f=0,v=0,b=1),_=0,T=!0,i.dataset.badge=$,i.querySelector(".badge-selected-title").textContent=`${Ue.label} · ${Ue.typeDescription}`,e?.(Ue);try{u||L(),r.setSize(t.clientWidth,t.clientHeight,!1);const j=Ta(Ue,"front",2048)||Ta(Ue,"front")||(Fe?.complete&&Fe.naturalWidth?Fe:null),me=Ta(Ue,"back");c.visible=!!j,l.visible=!0,me||(y?.dispose(),y=null,l.material.map=w,l.material.needsUpdate=!0),j?(X(j,me,j.naturalWidth||j.width),n.textContent="드래그 회전 · 휠 확대/축소 · 앞면/뒷면 선택"):(t.dataset.state="loading",t.setAttribute("aria-busy","true"),n.textContent="인쇄면을 준비하는 중",k());const _e=Math.max(W(),_),[ge,ze]=await Promise.all([wr(Ue,"front",_e),wr(Ue,"back",_e)]);if(d||H!==S)return;T=!1,X(ge,ze,_e),n.textContent="드래그 회전 · 휠 확대/축소 · 앞면/뒷면 선택",q()}catch(j){if(H!==S||d)return;T=!1,t.removeAttribute("aria-busy"),_||(t.dataset.state="error"),n.textContent="배지 화면을 불러오지 못했습니다. 다시 선택해주세요.",console.error(j)}}async function q(){if(!u||!h||T)return;const $=W();if($<=_)return;const Te=h.id,Fe=++S,Ue=h;T=!0;try{const[H,j]=await Promise.all([wr(Ue,"front",$),wr(Ue,"back",$)]);if(d||Fe!==S||h.id!==Te)return;T=!1,X(H,j,$),n.textContent="드래그 회전 · 휠 확대/축소 · 앞면/뒷면 선택",q()}catch(H){Fe===S&&!d&&(T=!1,n.textContent="현재 인쇄면으로 표시 중입니다. 다시 확대하면 재시도합니다.",console.error(H))}}function de($){b=Math.max(.7,Math.min(2.8,$)),k(),q()}t.addEventListener("wheel",$=>{if(!u)return;$.preventDefault();const Te=$.deltaY*($.deltaMode===1?16:$.deltaMode===2?t.clientHeight:1);de(b*Math.exp(-Math.max(-200,Math.min(200,Te))*.0015))},{passive:!1}),t.onpointerdown=$=>{u&&(m=!0,p=$.clientX,R=$.clientY,t.setPointerCapture($.pointerId),t.classList.add("dragging"))},t.onpointermove=$=>{m&&(v+=($.clientX-p)*.5,f=Math.max(-90,Math.min(90,f-($.clientY-R)*.4)),p=$.clientX,R=$.clientY,k())},t.onpointerup=t.onpointercancel=()=>{m=!1,t.classList.remove("dragging")},t.onkeydown=$=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes($.key)&&($.preventDefault(),$.stopPropagation(),$.key==="ArrowLeft"&&(v-=10),$.key==="ArrowRight"&&(v+=10),$.key==="ArrowUp"&&(f=Math.max(-90,f-10)),$.key==="ArrowDown"&&(f=Math.min(90,f+10)),k())},i.querySelectorAll("[data-badge-view]").forEach($=>$.onclick=()=>{const Te=$.dataset.badgeView;Te==="front"&&(f=0,v=0),Te==="back"&&(f=0,v=180),Te==="edge"&&(f=-10,v=82),Te==="reset"&&(f=0,v=0,b=1),k()}),i.querySelector('[data-badge-zoom="in"]').onclick=()=>de(b*1.25),i.querySelector('[data-badge-zoom="out"]').onclick=()=>de(b/1.25);const be=new ResizeObserver(z);be.observe(t);const Ee={prepare(){!u&&!d&&L()},select:ae,getState(){return{badge:h?.id,rx:f,ry:v,zoom:b,resolution:_,loading:T}},destroy(){d=!0,S++,be.disconnect(),P?.dispose(),y?.dispose(),w?.dispose(),A.forEach($=>$.dispose()),U.forEach($=>$.dispose()),r?.dispose(),r?.forceContextLoss(),t.replaceChildren()}};return i.badgeViewer=Ee,Ee}const jo=[...N0,...F0],H0=new Map(nc.map(i=>[i.id,i])),En=i=>H0.get(i),yn=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),La={"02":["Badge","collection"],"03":["Single","pack"],"04":["Full","box"],"05":["Limited","edition"],"06":["Retail","edition"],"07":["Display","box"],"08":["Badge","pouch"],"09":["Visual","stories"],10:["Digital","experience"],11:["Behind","the work"]},Ui=(i,e,t="",n="")=>`<div class="section-heading"><span class="section-number">${i}</span><div>${n?`<p class="eyebrow">${n}</p>`:""}<h2>${La[i]?`<span class="english-section-title" lang="en"><em>${La[i][0]}</em> ${La[i][1]}</span><span class="korean-section-title">${e}</span>`:e}</h2>${t?`<p class="section-description">${t}</p>`:""}</div></div>`;function ci(i,{caption:e=!0,cls:t="",eager:n=!1,preview:r=null,title:a=null,creditTag:o=!0}={}){const s=En(i),c=a||s.title;return`<figure class="work-image ${t}" data-asset="${i}"><button class="image-button" data-open-asset="${i}" aria-label="${yn(c)} 크게 보기"><img src="${r||s.preview||s.src}" alt="${yn(c)}" ${n?'fetchpriority="high"':'loading="lazy"'} decoding="async" width="${s.width||1e3}" height="${s.height||1e3}" style="--asset-ratio:${s.width||1e3}/${s.height||1e3}"/>${s.credit&&o?'<span class="ai-tag">AI 연출</span>':""}<span class="image-expand" aria-hidden="true">↗</span></button>${e?`<figcaption>${yn(c)}${s.credit?"<span>ChatGPT 생성 · Photoshop 후보정</span>":""}</figcaption>`:""}</figure>`}const W0=(i,e="")=>`<div class="image-grid ${e}">${i.map(t=>ci(t)).join("")}</div>`,cl=[{id:"single",num:"03",name:"싱글팩",tag:"기본 구성",description:"랜덤 배지 3개와 크리스탈 케이스 1개를 하나의 패키지에 담았습니다.",detail:"하츄핑·다이아나핑·이클립스핑의 캐릭터와 색상을 구분하고, 로고와 제품 정보의 위치는 공통된 틀로 연결했습니다.",contents:[["배지","3개"],["크리스탈 케이스","1개"]],hero:"A021",images:["A024","A022","A023"],captions:"캐릭터별 구성품",types:!0},{id:"full",num:"04",name:"풀박스",tag:"3종 한 박스",description:"싱글팩 3종을 한 번에 만나는 구성. 배지 9개와 케이스 3개를 담았습니다.",detail:"작은 팩의 디자인을 확장해 외부에서도 수집 구성과 제품 라인업이 보이도록 정리했습니다.",contents:[["싱글팩","3개"],["배지 / 케이스","9개 / 3개"]],hero:"A084",images:["A083"],captions:"제품 구성과 대표 비주얼"},{id:"limited",num:"05",name:"리미티드 에디션",tag:"5팩 구성",description:"배지 15개와 케이스 5개를 담은 리미티드 구성입니다.",detail:"다이아나핑과 이클립스핑의 컬러를 중심으로, 넓어진 패키지 면에서도 캐릭터와 수집 요소가 함께 읽히도록 구성했습니다.",contents:[["싱글팩","5개"],["배지 / 케이스","15개 / 5개"]],hero:"A009",images:["A008"],captions:"리미티드 2종과 대표 비주얼",types:!0},{id:"daiso",num:"06",name:"다이소 딱지",tag:"유통 채널 확장",description:"원형 자석 배지와 캐릭터 자석을 함께 담은 타입별 진열 팩입니다.",detail:"매대에서 타입과 구성을 바로 확인할 수 있도록, 골드·스파클·샤이닝의 컬러와 캐릭터 그래픽을 구분했습니다.",contents:[["구성","원형 배지 + 캐릭터 자석"],["타입","골드 · 샤이닝 · 스파클"]],hero:"T005",images:[],types:!0,flat:!0},{id:"display",num:"07",name:"딱지 파우치 디스플레이 박스",tag:"매대 진열",description:"개별 파우치 20개를 모아 담는 진열용 박스입니다.",detail:"운송·보관 시 닫힌 형태와, 상단 절취 후 제품을 꺼낼 수 있는 진열 형태를 같은 전개도에서 살펴볼 수 있습니다.",contents:[["딱지 파우치","20개"],["캐릭터","하츄핑 · 다이아나핑 · 이클립스핑"]],hero:"T001",images:[],types:!0,display:!0},{id:"pouch",num:"08",name:"딱지 파우치",tag:"개별 포장",description:"배지 3개를 담는 120 × 130mm 개별 포장입니다.",detail:"앞면에는 캐릭터와 제품 분위기를, 뒷면에는 구성·주의사항·제품 정보를 배치했습니다. 상하 실링과 걸이 구멍까지 함께 확인할 수 있습니다.",contents:[["배지","3개"],["상하 실링","각 15mm"]],hero:"T004",images:[],types:!0,flat:!0}],X0={"display-1":"T001","display-2":"T002","display-3":"T003"};function q0(i){const e=jo.filter(t=>t.group===i.id);return`<section class="section package-section ${["full","daiso","pouch"].includes(i.id)?"package-reverse":"package-feature"}" id="${i.id}">${Ui(i.num,i.name,"",i.tag)}<div class="package-layout"><div class="product-visual" data-product-visual>${ci(i.hero)}</div><div class="product-copy"><p class="lead">${i.description}</p><p>${i.detail}</p><dl class="contents-list">${i.contents.map(([t,n])=>`<div><dt>${t}</dt><dd>${n}</dd></div>`).join("")}</dl><p class="small-note">담당: 패키지 그래픽 · 제품 정보 구성 · OEM 제작 소통</p></div><div class="package-interaction"><div class="interaction-heading"><h3>${i.flat?"평면 그래픽에서 입체 목업으로":"전개도에서 입체 패키지로"}</h3><p>${i.display?"접은 뒤 ‘진열형으로 보기’를 눌러 상단을 분리해보세요.":"드래그로 회전하고, 마우스 휠로 확대해보세요."}</p></div>${e.length>1?`<div class="design-selector" role="group" aria-label="${i.name} 디자인 선택">${e.map((t,n)=>`<button type="button" data-design="${t.id}" aria-pressed="${n===0}" aria-controls="${i.id}-viewer">${t.label}</button>`).join("")}</div>`:""}${i.id==="daiso"?'<button class="daiso-source-button" data-daiso-source data-open-asset="A039">PDF 인쇄 원본 확대 ↗</button>':""}<div id="${i.id}-viewer" class="package-viewer-mount" data-package="${i.id}" data-model="${e[0].id}"></div></div></div>${i.images.length?`<details class="work-details"><summary>${i.captions}<span>${i.images.length}개 이미지 +</span></summary>${W0(i.images)}</details>`:""}</section>`}const Y0={product:"제품 이미지",packaging:"패키지·전개도",badge:"배지 제작 시트",usage:"홍보·컨셉 이미지",digital:"상세페이지·SNS",promotion:"광고·프로모션",production:"제작·사양",brand:"브랜드 가이드"};document.querySelector("#app").innerHTML=`
${Pc()}<main id="main">${Dc(En,ci)}
<section class="section" id="badges"><div class="badge-introduction">${Ui("02","골드, 스파클, 샤이닝.<br/>72종의 배지 디자인.","골드·스파클·샤이닝의 3가지 타입, 제품 표기 기준 각 24종의 라인업입니다.","BADGE DESIGN")}<div class="badge-samples" aria-label="타입별 대표 배지 3D 보기">${ic.map(i=>$t.find(e=>e.id===i)).map(i=>`<button class="badge-sample-button" data-badge-id="${i.id}" aria-label="하츄핑 ${i.typeLabel} 3D로 크게 보기"><img src="${i.thumbnail}" alt="하츄핑 ${i.typeLabel} 앞면" loading="lazy" width="384" height="384"/><span>하츄핑 · ${i.typeLabel} · 3D로 보기 ↗</span></button>`).join("")}</div></div><p class="badge-intro-copy">같은 타입 안의 반복 캐릭터를 정리해 총 72종으로 모았습니다. 인쇄 여분을 제외한 배지를 누르면 완성선 기준의 앞뒤를 3D로 볼 수 있습니다.</p><div class="badge-catalog-heading"><h3>타입별 배지 컬렉션</h3><p>골드 24종 · 스파클 24종 · 샤이닝 24종</p></div><div class="badge-type-controls segmented" role="group" aria-label="배지 타입 선택">${Eo.map((i,e)=>`<button data-badge-type="${i.id}" aria-pressed="${e===0}" aria-controls="badge-catalog">${i.label} <span>24</span></button>`).join("")}</div><p class="badge-type-description" id="badge-type-description">${Eo[0].description}</p><div class="badge-catalog" id="badge-catalog" aria-label="골드 배지 24종">${$t.map(i=>`<button class="badge-catalog-item" data-badge-id="${i.id}" data-badge-type-item="${i.type}" ${i.type!=="gold"?"hidden":""} aria-label="${i.label}, 3D 목업 열기"><img src="${i.thumbnail}" alt="${i.label} 앞면" loading="lazy" width="384" height="384"/><span>${i.label} <span aria-hidden="true">↗</span></span></button>`).join("")}</div><details class="work-details badge-source-details" id="badge-source-details"><summary>제작 원본 PDF · 앞면과 공통 뒷면<span>인쇄용 원본 보기 +</span></summary><div class="segmented" role="group" aria-label="배지 제작 시트 면 선택"><button data-badge-side="0" aria-pressed="true">앞면 제작 시트</button><button data-badge-side="1" aria-pressed="false">공통 뒷면 시트</button></div><figure class="work-image badge-sheet"><button class="image-button" data-open-asset="B001" aria-label="원본 벡터 배지 제작 시트 확대"><img id="badge-sheet-image" src="${En("B001").pages[0]}" alt="배지 제작 시트 앞면" loading="lazy"/><span class="image-expand" aria-hidden="true">↗</span></button><figcaption id="badge-sheet-caption">제공 PDF · 앞면 제작 시트 · 원본 벡터 불러오는 중</figcaption></figure><p class="small-note">제작 원본은 반복과 인쇄 여분을 포함한 그대로 보존했습니다. 위 컬렉션과 3D 목업은 중복을 정리하고 완성선 기준으로 표시합니다.</p></details></section>
<div class="section-divider"><div class="chapter-title"><span>03 — 08 / PACKAGE STUDIES</span><p><em>Made</em><br/>to unfold<span aria-hidden="true">↘</span></p></div><div class="chapter-index"><p>하나의 제품을,<br/>여러 구성과 판매 방식으로.</p><nav aria-label="패키지 유형 바로가기">${cl.map(i=>`<a href="#${i.id}"><span>${i.num}</span>${i.name}<span aria-hidden="true">↗</span></a>`).join("")}</nav></div></div>
${cl.map(q0).join("")}
${Sc(ci,Ui)}
${Uc(En,ci,Ui)}
${Ic(Ui)}
</main><footer class="footer"><a href="#cover">YUBIN JEON</a><p>티니핑 미스터리 뱃지 · 디자인 포트폴리오<br/>원작 IP © SAMG. All rights reserved.</p><a href="#cover">처음으로 ↑</a></footer>
<dialog id="asset-dialog" aria-labelledby="asset-dialog-title"><div class="dialog-toolbar"><div><span id="asset-dialog-category"></span><h2 id="asset-dialog-title"></h2></div><button id="asset-dialog-close" aria-label="이미지 확대 창 닫기">닫기 ×</button></div><div class="dialog-navigation"><button id="asset-prev" aria-label="같은 분류의 이전 자료">← 이전</button><span id="asset-dialog-credit"></span><button id="asset-next" aria-label="같은 분류의 다음 자료">다음 →</button></div><div class="dialog-content" id="asset-dialog-content"></div><p class="dialog-source" id="asset-dialog-source"></p></dialog>
<dialog id="badge-dialog" aria-labelledby="badge-dialog-title"><div class="dialog-toolbar"><div><span>BADGE · 3D MOCKUP</span><h2 id="badge-dialog-title">배지 앞뒤 3D 목업</h2></div><button id="badge-dialog-close" aria-label="배지 3D 목업 닫기">닫기 ×</button></div><div id="badge-viewer"><div class="badge-model-top"><strong class="badge-selected-title"></strong><span>완성 지름 54 mm · 두께 2 mm</span></div><div class="badge-3d-stage" tabindex="0" role="group" aria-label="배지 3D 모델. 드래그 또는 방향키로 회전하고 휠로 확대할 수 있습니다."></div><p class="badge-3d-status" aria-live="polite">인쇄면을 불러오는 중</p><div class="badge-model-controls"><div role="group" aria-label="배지 시점"><button data-badge-view="front">앞면</button><button data-badge-view="back">뒷면</button><button data-badge-view="edge">옆면·두께</button><button data-badge-view="reset">초기 시점</button></div><div role="group" aria-label="배지 확대 배율"><button data-badge-zoom="out" aria-label="배지 축소">−</button><span class="badge-zoom-value">100%</span><button data-badge-zoom="in" aria-label="배지 확대">+</button></div></div><div class="badge-model-navigation"><button data-badge-next="-1">← 이전 배지</button><span>인쇄 여분 3mm 제외 · 앞·뒷면 완성선 기준</span><button data-badge-next="1">다음 배지 →</button></div></div></dialog>`;Cc(En);Rc();Fc();Nc();const oi=document.querySelector(".menu-toggle");function ac(){oi.setAttribute("aria-expanded","false"),oi.textContent="메뉴 열기",document.querySelector(".header").classList.remove("menu-open")}oi.addEventListener("click",()=>{const i=oi.getAttribute("aria-expanded")!=="true";oi.setAttribute("aria-expanded",String(i)),oi.textContent=i?"메뉴 닫기":"메뉴 열기",document.querySelector(".header").classList.toggle("menu-open",i)});document.querySelectorAll("nav a").forEach(i=>i.addEventListener("click",ac));document.addEventListener("keydown",i=>{i.key==="Escape"&&ac()});document.querySelectorAll(".package-viewer-mount").forEach(i=>tc(i,jo.filter(e=>e.id===i.dataset.model)));document.querySelectorAll(".design-selector").forEach(i=>i.addEventListener("click",e=>{const t=e.target.closest("button[data-design]");if(!t||t.getAttribute("aria-pressed")==="true")return;const n=i.closest(".package-section"),r=n.querySelector(".package-viewer-mount"),a=r.viewer.getState();r.viewer.destroy();const o=document.createElement("div");o.id=r.id,o.className=r.className,o.dataset.package=r.dataset.package,o.dataset.model=t.dataset.design,r.replaceWith(o),tc(o,jo.filter(l=>l.id===t.dataset.design),a);const s=n.querySelector("[data-daiso-source]");s&&(s.dataset.openAsset={"daiso-1":"A039","daiso-2":"A040","daiso-3":"A041"}[t.dataset.design]),i.querySelectorAll("button").forEach(l=>l.setAttribute("aria-pressed",String(l===t)));const c=X0[t.dataset.design];c&&(n.querySelector("[data-product-visual]").innerHTML=ci(c))}));let ul=0;async function oc(i){const e=++ul;document.querySelectorAll("[data-badge-side]").forEach(t=>t.setAttribute("aria-pressed",String(Number(t.dataset.badgeSide)===i)));try{const t=await Yo("B001",i);if(e!==ul)return;const n=document.querySelector("#badge-sheet-image");n.src=t.url,n.dataset.vector="true",n.alt=i?"배지 제작 시트 공통 뒷면":"배지 제작 시트 앞면",document.querySelector("#badge-sheet-caption").textContent=`제공 PDF · ${i?"공통 뒷면":"앞면"} 제작 시트 · 원본 벡터`}catch{document.querySelector("#badge-sheet-caption").textContent="원본 벡터를 불러오지 못했습니다. 다시 선택해주세요."}}document.querySelectorAll("[data-badge-side]").forEach(i=>i.addEventListener("click",()=>oc(Number(i.dataset.badgeSide))));const sc=new IntersectionObserver(i=>{i.some(e=>e.isIntersecting)&&(oc(0),sc.disconnect())},{rootMargin:"400px"});sc.observe(document.querySelector("#badge-sheet-image"));function lc(i){const e=Eo.find(t=>t.id===i);if(e){document.querySelectorAll("[data-badge-type]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.badgeType===i))),document.querySelectorAll(".badge-catalog-item").forEach(t=>t.hidden=t.dataset.badgeTypeItem!==i),document.querySelector("#badge-type-description").textContent=e.description,document.querySelector("#badge-catalog").setAttribute("aria-label",`${e.label} 배지 24종`);for(const t of $t.filter(n=>n.type===i).slice(0,4))Jo(t).catch(()=>{})}}document.querySelectorAll("[data-badge-type]").forEach(i=>i.onclick=()=>lc(i.dataset.badgeType));const Dr=document.querySelector("#badge-dialog");let Mr=null,cc=null,Ir=$t[0].id;function uc(){return Mr||(Mr=V0(document.querySelector("#badge-viewer"),i=>{Ir=i.id}),Mr.prepare()),Mr}function dc(i){const e=$t.find(r=>r.id===i);if(!e)return;Ir=i,lc(e.type);const t=!Dr.open;t&&(cc=document.activeElement,Dr.showModal(),document.body.classList.add("dialog-open"));const n=document.querySelector(`[data-badge-id="${i}"] img`);uc().select(i,t,n)}document.addEventListener("click",i=>{const e=i.target.closest("[data-badge-id]");e&&dc(e.dataset.badgeId)});document.querySelectorAll("[data-badge-next]").forEach(i=>i.onclick=()=>{const e=$t.find(r=>r.id===Ir),t=$t.filter(r=>r.type===e.type),n=t.findIndex(r=>r.id===Ir);dc(t[(n+Number(i.dataset.badgeNext)+t.length)%t.length].id)});document.querySelector("#badge-dialog-close").onclick=()=>Dr.close();Dr.addEventListener("close",()=>{document.body.classList.remove("dialog-open"),cc?.focus()});function Z0(i){const e=i.target.closest("[data-badge-id]");e&&Jo(e.dataset.badgeId).catch(()=>{})}for(const i of["pointerover","pointerdown","focusin"])document.addEventListener(i,Z0,{passive:!0});rc().catch(()=>{});const hc=new IntersectionObserver(i=>{if(i.some(e=>e.isIntersecting)){uc();const e=[...ic,...$t.filter(n=>n.type==="gold").slice(0,6).map(n=>n.id)];let t=Promise.resolve();for(const n of e)t=t.then(()=>Jo(n)).catch(()=>{});hc.disconnect()}},{rootMargin:"700px"});hc.observe(document.querySelector("#badges"));const K0={intro:{ids:["A030","A037","A035","A036"],description:"제품 연출 · 싱글팩 소개 · 제품 활용 · 다이어리 꾸미기."},event:{ids:["A031","A032","A033","A034"],description:"출시 이벤트 표지부터 배지·케이스 소개와 참여 안내까지."},reviews:{ids:["A025","A026","A027","A028"],description:"후기 콘셉트 · ChatGPT 생성 / Photoshop 후보정 · 실제 고객 후기가 아닙니다."}};let Ao="intro",Ci=0;function zr(i=0){const e=K0[Ao];Ci=(Ci+i+e.ids.length)%e.ids.length;const t=En(e.ids[Ci]);document.querySelector("#social-image").src=t.src,document.querySelector("#social-image").alt=t.title,document.querySelector("#social-image-open").dataset.openAsset=t.id,document.querySelector("#social-title").textContent=t.title,document.querySelector("#social-credit").textContent=t.credit?"AI 연출 · ChatGPT 생성 / Photoshop 후보정":Ao==="event"?"출시 이벤트 안내 디자인":"제품 소개·활용 콘텐츠",document.querySelector("#slide-count").textContent=`${Ci+1} / ${e.ids.length}`,document.querySelector("#social-description").textContent=e.description}document.querySelectorAll("[data-social-group]").forEach(i=>i.addEventListener("click",()=>{Ao=i.dataset.socialGroup,Ci=0,zr(),document.querySelectorAll("[data-social-group]").forEach(e=>e.setAttribute("aria-pressed",String(e===i)))}));document.querySelector("#slide-prev").onclick=()=>zr(-1);document.querySelector("#slide-next").onclick=()=>zr(1);zr();const Kt=document.querySelector("#asset-dialog");let fc=null,pc=null,Lr=0;async function mc(i){const e=En(i);if(!e)return;const t=++Lr;fc=i,document.querySelector("#asset-dialog-title").textContent=e.title,document.querySelector("#asset-dialog-category").textContent=Y0[e.group],document.querySelector("#asset-dialog-credit").textContent=e.credit?"AI 연출 · ChatGPT 생성 / Adobe Photoshop 후보정":"",document.querySelector("#asset-dialog-source").innerHTML=`제공 자료: ${yn(e.source)}${e.original?` · <a href="${yn(e.original)}" target="_blank" rel="noopener">PDF 원본 열기 ↗</a>`:""}`;const n=document.querySelector("#asset-dialog-content");if(n.innerHTML=e.kind==="text"?`<div class="source-text"><p>제공된 원본 사양 기록입니다. 단위와 중량 등이 모호한 항목은 최종 확정 사양으로 인용하지 않았습니다.</p><pre>${yn(e.text)}</pre></div>`:Tr[i]?'<p class="vector-loading" role="status">PDF의 원본 벡터를 불러오는 중…</p>':(e.pages.length?e.pages:[e.src]).map((r,a)=>`<figure><img src="${r}" alt="${yn(e.title)}${e.pages.length?" · "+(a+1)+"페이지":""}"/>${e.pages.length?`<figcaption>${a+1} / ${e.pages.length}</figcaption>`:""}</figure>`).join(""),n.scrollTop=0,Kt.open||(pc=document.activeElement,Kt.showModal(),document.body.classList.add("dialog-open")),Tr[i])try{const r=await Promise.all(Tr[i].pages.map((o,s)=>Yo(i,s)));if(t!==Lr||!Kt.open)return;n.innerHTML=`<div class="vector-zoom-controls"><span>PDF 원본 벡터 확대</span><button data-vector-zoom="out" aria-label="PDF 축소">−</button><output id="vector-zoom-value">100%</output><button data-vector-zoom="in" aria-label="PDF 확대">+</button><button data-vector-zoom="reset">화면에 맞춤</button></div><div class="vector-pages">${r.map((o,s)=>`<figure><img src="${o.url}" data-vector-source="${i}" alt="${yn(e.title)} · ${s+1}페이지"/><figcaption>${s+1} / ${r.length}</figcaption></figure>`).join("")}</div>`;let a=1;n.querySelectorAll("[data-vector-zoom]").forEach(o=>o.onclick=()=>{a=o.dataset.vectorZoom==="reset"?1:Math.max(.5,Math.min(4,a*(o.dataset.vectorZoom==="in"?1.5:1/1.5))),n.querySelector(".vector-pages").style.width=a*100+"%",n.querySelector("#vector-zoom-value").textContent=Math.round(a*100)+"%"})}catch{t===Lr&&Kt.open&&(n.innerHTML='<p role="alert">원본 벡터를 불러오지 못했습니다. 창을 닫고 다시 열어주세요.</p>')}}function gc(){Kt.close()}document.addEventListener("click",i=>{const e=i.target.closest("[data-open-asset]");e&&mc(e.dataset.openAsset)});document.querySelector("#asset-dialog-close").onclick=gc;Kt.addEventListener("close",()=>{Lr++,document.body.classList.remove("dialog-open"),pc?.focus()});Kt.addEventListener("click",i=>{if(i.target===Kt){const e=Kt.getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&gc()}});function Nr(i){const e=En(fc),t=nc.filter(r=>r.group===e.group),n=t.findIndex(r=>r.id===e.id);mc(t[(n+i+t.length)%t.length].id)}document.querySelector("#asset-prev").onclick=()=>Nr(-1);document.querySelector("#asset-next").onclick=()=>Nr(1);Kt.addEventListener("keydown",i=>{i.key==="ArrowRight"&&(i.preventDefault(),Nr(1)),i.key==="ArrowLeft"&&(i.preventDefault(),Nr(-1))});
