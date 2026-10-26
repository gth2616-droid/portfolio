import"./modulepreload-polyfill-B5Qt9EMX.js";function _c(i,e){return`    <section class="hero nimbus-hero" id="cover" aria-labelledby="hero-title">
      <iframe class="shader-bg" src="${matchMedia("(prefers-reduced-motion: reduce)").matches?"about:blank":"https://fragcoord.xyz/embed/c6zisyc6?viewport=1422x800"}"
        title="Animated shader background" loading="eager" allow="autoplay; fullscreen" aria-hidden="true"
        tabindex="-1" referrerpolicy="no-referrer"></iframe>
      <div class="shader-fallback" aria-hidden="true"></div>

      <header class="site-header">
        <a class="brand" href="#cover" aria-label="전유빈 포트폴리오 처음으로">YUBIN JEON <span>DESIGN PORTFOLIO</span></a>
        <button class="menu-toggle" aria-expanded="false" aria-controls="main-nav">메뉴 열기</button><div class="header-right">
          <nav class="nav" id="main-nav" aria-label="섹션 이동"><a href="#overview">프로젝트</a><a href="#badges">배지</a><a href="#single">패키지</a><a href="#experience">케이스·활용</a><a href="#digital">디지털</a><a href="#production">제작</a></nav>
          <a class="header-cta" href="#single">EXPLORE 3D ↗</a>
        </div>
      </header>

      <div class="hero-layout">
        <div class="console-cluster" aria-label="패키지 캐릭터 선택">
          <div class="console-card">
            <div class="console-tabs" role="tablist" aria-label="표지 패키지 캐릭터">
              <button class="console-tab active" type="button" role="tab" aria-selected="true"
                data-tab="cli" id="hero-tab-cli" aria-controls="hero-pane-cli">하츄핑</button>
              <button class="console-tab" type="button" role="tab" aria-selected="false" data-tab="api" id="hero-tab-api" aria-controls="hero-pane-api">다이아나핑</button>
              <button class="console-tab" type="button" role="tab" aria-selected="false"
                data-tab="console" id="hero-tab-console" aria-controls="hero-pane-console">이클립스핑</button>
              <span class="console-window-control wide" aria-hidden="true"></span>
              <span class="console-window-control" aria-hidden="true"></span>
            </div>

            ${[["cli","A015","하츄핑","01"],["api","A010","다이아나핑","02"],["console","A011","이클립스핑","03"]].map(([t,n,r,o],s)=>`<div class="console-pane ${s===0?"active":""}" data-pane="${t}" id="hero-pane-${t}" role="tabpanel" aria-labelledby="hero-tab-${t}" ${s?"hidden":""}><div class="console-product-label"><span>SINGLE PACK / ${o}</span><span>120 × 140 × 40 mm</span></div><button class="hero-art-button" data-open-asset="${n}" aria-label="${r} 패키지 크게 보기"><img src="${i(n).src}" alt="${r} 싱글팩" width="625" height="809" ${s?"":'fetchpriority="high"'} decoding="async"/></button><div class="console-product-label"><span>${r} 싱글팩</span><span>배지 3개 · 케이스 1개 ↗</span></div></div>`).join("")}
          </div>
        </div>

        <div class="hero-content">
          <div class="hero-message">
            <h1 id="hero-title">Teenieping<br/>Mystery Badge.</h1>
            <p class="hero-copy">프린세스 캐치! 티니핑 미스터리 뱃지.<br/>사내 유일 디자이너로 패키지·배지 디자인, 케이스 컨택과 OEM 제작 소통까지 전담했습니다.</p><div class="source-hero-meta"><span>OFFICIAL LICENSE / SAMG</span><span>PRODUCT · PACKAGE · CONTENT</span><a href="#overview">SCROLL TO EXPLORE ↓</a></div>
          </div>
        </div>
      </div>
    </section>

    <section class="platform-accordion" id="overview" aria-labelledby="platform-title">
      <div class="accordion-inner">
        <h2 id="platform-title" class="sr-only">프로젝트 소개와 담당 범위</h2>
        <div class="accordion-nav" role="tablist" aria-label="담당 범위">
          <button class="accordion-tab active" type="button" role="tab" aria-selected="true" data-accordion-tab="infra">
            01 / 패키지·배지 디자인
          </button>
          <button class="accordion-tab" type="button" role="tab" aria-selected="false" data-accordion-tab="residency">
            02 / 케이스 공급처 컨택
          </button>
          <button class="accordion-tab" type="button" role="tab" aria-selected="false" data-accordion-tab="scaling">
            03 / OEM 제작 소통
          </button>
          <button class="accordion-tab" type="button" role="tab" aria-selected="false" data-accordion-tab="visibility">
            04 / 판매 콘텐츠
          </button>
        </div>

        <div class="accordion-stack" aria-live="polite">
          ${[["infra","01 / DESIGN","사내 유일<br/>디자이너.","패키지 전반과 배지 그래픽을 전담했습니다. 대표·실장이 입사 전에 기획한 완구를, 신입 입사 후 수습기간을 마치고 제품화했습니다.","A017"],["residency","02 / SOURCING","보관과 전시를<br/>함께 생각하다.","배지는 자석으로 놀고 크리스탈 케이스에 보관·전시하는 장난감입니다. 구성품 케이스의 공급처 컨택과 제품 구성 실무를 맡았습니다.","A079"],["scaling","03 / PRODUCTION","디자인에서<br/>실제 제작까지.","패키지·배지 디자인을 인쇄와 생산에 연결하며 OEM 제작사와 직접 소통했습니다. 제품 포장부터 물류용 카톤박스 그래픽까지 적용했습니다.","A054"],["visibility","04 / COMMUNICATION","제품의 경험을<br/>보여주는 콘텐츠.","상세페이지·SNS·프로모션 비주얼을 제작했습니다. 후기·사용 장면은 ChatGPT 이미지 생성과 Adobe Photoshop 후보정으로 만든 AI 연출 이미지입니다.","A037"]].map(([t,n,r,o,s],a)=>`<article class="accordion-card ${a===0?"active":""}" data-accordion-card="${t}"><div class="accordion-copy"><span class="source-card-label">${n}</span><h3>${r}</h3><p>${o}</p></div><div class="accordion-visual">${e(s,{caption:!0})}</div></article>`).join("")}
        </div>
      </div>
    </section>

`}function bc(){const i=matchMedia("(prefers-reduced-motion: reduce)"),e=document.querySelector(".shader-bg"),t="https://fragcoord.xyz/embed/c6zisyc6",n=1422,r=800,o=Array.from(document.querySelectorAll(".console-tab")),s=Array.from(document.querySelectorAll(".console-pane")),a=document.querySelector(".platform-accordion"),c=Array.from(document.querySelectorAll("[data-accordion-tab]")),l=Array.from(document.querySelectorAll("[data-accordion-card]")),u=document.querySelector(".pricing-section"),d=Array.from(document.querySelectorAll(".pricing-bar")),p=document.querySelector(".modal-cube-shell");let h;function v(){if(!e||i.matches)return;const R=window.innerWidth/Math.max(window.innerHeight,1);let E=n,L=Math.round(E/R);L>r&&(L=r,E=Math.round(L*R)),E=Math.max(320,Math.min(n,E)),L=Math.max(180,Math.min(r,L));const M=`${t}?viewport=${E}x${L}`;e.src!==M&&(e.src=M);const _=Math.max(window.innerWidth/E,(window.innerHeight+110)/L);e.style.setProperty("--shader-scale",_.toFixed(3)),e.style.width=`${E}px`,e.style.height=`${L}px`}let x;window.addEventListener("resize",()=>{window.clearTimeout(x),x=window.setTimeout(v,180)}),v();function m(R){const E=R.dataset.typed||"";let L=0;if(i.matches){R.textContent=E;return}R.textContent="",R.dataset.typing="true";function M(){if(R.textContent=E.slice(0,L),L+=1,L<=E.length){h=window.setTimeout(M,42);return}R.dataset.typing="false"}M()}function f(R){window.clearTimeout(h),o.forEach(E=>{const L=E.dataset.tab===R;E.classList.toggle("active",L),E.setAttribute("aria-selected",String(L)),E.tabIndex=L?0:-1}),s.forEach(E=>{const L=E.dataset.pane===R;if(E.classList.toggle("active",L),E.hidden=!L,L){const M=E.querySelector("[data-typed]");M&&m(M)}})}o.forEach(R=>{R.addEventListener("click",()=>{f(R.dataset.tab)})}),f("cli");function T(R,E){R.forEach((L,M)=>{L.tabIndex=L.classList.contains("active")?0:-1,L.addEventListener("keydown",_=>{if(!["ArrowRight","ArrowLeft","ArrowDown","ArrowUp","Home","End"].includes(_.key))return;_.preventDefault();const U=_.key==="Home"?0:_.key==="End"?R.length-1:(M+(_.key==="ArrowRight"||_.key==="ArrowDown"?1:-1)+R.length)%R.length;R[U].focus(),E(R[U])})})}T(o,R=>R.click()),T(c,R=>R.click());function S(R){c.forEach(E=>{const L=E.dataset.accordionTab===R;E.classList.toggle("active",L),E.setAttribute("aria-selected",String(L)),E.tabIndex=L?0:-1}),l.forEach(E=>{E.classList.toggle("active",E.dataset.accordionCard===R)})}function w(){if(!a||!l.length||window.innerWidth<=820||i.matches)return;const R=a.getBoundingClientRect(),E=Math.max(1,R.height-window.innerHeight),L=Math.min(1,Math.max(0,-R.top/E)),M=l.length-1,_=L*M,U=Math.min(M,Math.max(0,Math.round(_))),F=document.querySelector(".accordion-stack"),k=F?F.clientHeight:window.innerHeight*.74,W=window.innerWidth<=820?96:84,q=l.map((ie,H)=>{let ce=0;if(H>0){const me=Math.min(1,Math.max(0,_-(H-1))),xe=k+W,j=H*W;ce=xe+(j-xe)*me}return Math.round(ce)});l.forEach((ie,H)=>{const ce=q[H],me=q[H+1],xe=typeof me=="number"?Math.max(W,Math.min(k,me+2)):k,j=Math.max(0,k-xe);ie.style.setProperty("--card-y",`${Math.round(ce)}px`),ie.style.setProperty("--card-clip-bottom",`${Math.round(j)}px`),ie.style.zIndex=String(H+1)});const X=l[U];X&&S(X.dataset.accordionCard)}c.forEach(R=>{R.addEventListener("click",()=>{if(!a||!l.length)return;const E=l.findIndex(U=>U.dataset.accordionCard===R.dataset.accordionTab);if(window.innerWidth<=820||i.matches){S(R.dataset.accordionTab);return}const L=l.length-1,M=a.offsetHeight-window.innerHeight,_=a.offsetTop+E/L*M;window.scrollTo({top:_,behavior:"smooth"})})}),window.addEventListener("scroll",w,{passive:!0}),window.addEventListener("resize",w),w();function C(){if(!u||!d.length)return;const R=u.getBoundingClientRect(),E=window.innerHeight||1,L=Math.min(1,Math.max(0,(E-R.top)/(E+R.height)));d.forEach((M,_)=>{const U=Math.sin(L*Math.PI*2+_*.72),F=Math.cos(L*Math.PI+_*.34),k=Math.round(U*34+F*14);M.style.setProperty("--bar-morph",`${k}px`)})}if(window.addEventListener("scroll",C,{passive:!0}),window.addEventListener("resize",C),C(),p){const R=()=>p.classList.toggle("is-exploded");p.addEventListener("click",R),p.addEventListener("keydown",E=>{(E.key===" "||E.key==="Enter")&&(E.preventDefault(),R())})}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ss="180",xc=0,na=1,wc=2,sl=1,Mc=2,cn=3,mn=0,yt=1,Ot=2,Sn=0,li=1,ia=2,ra=3,oa=4,yc=5,Fn=100,Sc=101,Rc=102,Ec=103,Ac=104,Tc=200,Lc=201,Uc=202,Cc=203,To=204,Lo=205,Pc=206,Dc=207,Ic=208,Nc=209,Fc=210,Oc=211,Bc=212,kc=213,zc=214,Uo=0,Co=1,Po=2,ui=3,Do=4,Io=5,No=6,Fo=7,al=0,Gc=1,Vc=2,hn=0,Hc=1,Wc=2,Xc=3,qc=4,Yc=5,Zc=6,Kc=7,ll=300,di=301,hi=302,Oo=303,Bo=304,Nr=306,ko=1e3,Bn=1001,zo=1002,Pt=1003,Jc=1004,ji=1005,Bt=1006,Gr=1007,kn=1008,Qt=1009,cl=1010,ul=1011,Ii=1012,Rs=1013,zn=1014,dn=1015,Wi=1016,Es=1017,As=1018,Ni=1020,dl=35902,hl=35899,fl=1021,pl=1022,Xt=1023,Fi=1026,Oi=1027,ml=1028,Ts=1029,gl=1030,Ls=1031,Us=1033,yr=33776,Sr=33777,Rr=33778,Er=33779,Go=35840,Vo=35841,Ho=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,Zo=37808,Ko=37809,Jo=37810,jo=37811,Qo=37812,$o=37813,es=37814,ts=37815,ns=37816,is=37817,rs=37818,os=37819,ss=37820,as=37821,ls=36492,cs=36494,us=36495,ds=36283,hs=36284,fs=36285,ps=36286,jc=3200,Qc=3201,vl=0,$c=1,un="",Mt="srgb",fi="srgb-linear",Ur="linear",et="srgb",Wn=7680,sa=519,eu=512,tu=513,nu=514,_l=515,iu=516,ru=517,ou=518,su=519,aa=35044,la="300 es",Zt=2e3,Cr=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vr=Math.PI/180,ms=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function au(i,e){return(i%e+e)%e}function Hr(i,e,t){return(1-t)*i+t*e}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3];const p=o[s+0],h=o[s+1],v=o[s+2],x=o[s+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=h,e[t+2]=v,e[t+3]=x;return}if(d!==x||c!==p||l!==h||u!==v){let m=1-a;const f=c*p+l*h+u*v+d*x,T=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const C=Math.sqrt(S),R=Math.atan2(C,f*T);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const w=a*T;if(c=c*m+p*w,l=l*m+h*w,u=u*m+v*w,d=d*m+x*w,m===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=C,l*=C,u*=C,d*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=o[s],p=o[s+1],h=o[s+2],v=o[s+3];return e[t]=a*v+u*d+c*h-l*p,e[t+1]=c*v+u*p+l*d-a*h,e[t+2]=l*v+u*h+a*p-c*d,e[t+3]=u*v-a*d-c*p-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),d=a(o/2),p=c(n/2),h=c(r/2),v=c(o/2);switch(s){case"XYZ":this._x=p*u*d+l*h*v,this._y=l*h*d-p*u*v,this._z=l*u*v+p*h*d,this._w=l*u*d-p*h*v;break;case"YXZ":this._x=p*u*d+l*h*v,this._y=l*h*d-p*u*v,this._z=l*u*v-p*h*d,this._w=l*u*d+p*h*v;break;case"ZXY":this._x=p*u*d-l*h*v,this._y=l*h*d+p*u*v,this._z=l*u*v+p*h*d,this._w=l*u*d-p*h*v;break;case"ZYX":this._x=p*u*d-l*h*v,this._y=l*h*d+p*u*v,this._z=l*u*v-p*h*d,this._w=l*u*d+p*h*v;break;case"YZX":this._x=p*u*d+l*h*v,this._y=l*h*d+p*u*v,this._z=l*u*v-p*h*d,this._w=l*u*d-p*h*v;break;case"XZY":this._x=p*u*d-l*h*v,this._y=l*h*d-p*u*v,this._z=l*u*v+p*h*d,this._w=l*u*d+p*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],p=n+a+d;if(p>0){const h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(u-c)*h,this._y=(o-l)*h,this._z=(s-r)*h}else if(n>a&&n>d){const h=2*Math.sqrt(1+n-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(o+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-n-d);this._w=(o-l)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-n-a);this._w=(s-r)/h,this._x=(o+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+s*a+r*l-o*c,this._y=r*u+s*c+o*a-n*l,this._z=o*u+s*l+n*c-r*a,this._w=s*u-n*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-t;return this._w=h*s+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*o+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=s*d+this._w*p,this._x=n*d+this._x*p,this._y=r*d+this._y*p,this._z=o*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ca.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ca.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*n),u=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+c*l+s*d-a*u,this.y=n+c*u+a*l-o*d,this.z=r+c*d+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-n*c,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new N,ca=new Xi;class We{constructor(e,t,n,r,o,s,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,c,l)}set(e,t,n,r,o,s,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=n,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],p=n[2],h=n[5],v=n[8],x=r[0],m=r[3],f=r[6],T=r[1],S=r[4],w=r[7],C=r[2],R=r[5],E=r[8];return o[0]=s*x+a*T+c*C,o[3]=s*m+a*S+c*R,o[6]=s*f+a*w+c*E,o[1]=l*x+u*T+d*C,o[4]=l*m+u*S+d*R,o[7]=l*f+u*w+d*E,o[2]=p*x+h*T+v*C,o[5]=p*m+h*S+v*R,o[8]=p*f+h*w+v*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-n*o*u+n*a*c+r*o*l-r*s*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*s-a*l,p=a*c-u*o,h=l*o-s*c,v=t*d+n*p+r*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*l-u*n)*x,e[2]=(a*n-r*s)*x,e[3]=p*x,e[4]=(u*t-r*c)*x,e[5]=(r*o-a*t)*x,e[6]=h*x,e[7]=(n*c-l*t)*x,e[8]=(s*t-n*o)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new We;function bl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lu(){const i=Bi("canvas");return i.style.display="block",i}const ua={};function ki(i){i in ua||(ua[i]=!0,console.warn(i))}function cu(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const da=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ha=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uu(){const i={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===et&&(r.r=fn(r.r),r.g=fn(r.g),r.b=fn(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===et&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===un?Ur:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return ki("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return ki("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fi]:{primaries:e,whitePoint:n,transfer:Ur,toXYZ:da,fromXYZ:ha,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:da,fromXYZ:ha,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}const Je=uu();function fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xn;class du{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xn===void 0&&(Xn=Bi("canvas")),Xn.width=e.width,Xn.height=e.height;const r=Xn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Xn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=fn(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fn(t[n]/255)*255):t[n]=fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hu=0;class Cs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(qr(r[s].image)):o.push(qr(r[s]))}else o=qr(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?du.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fu=0;const Yr=new N;class gt extends _i{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=Bn,r=Bn,o=Bt,s=kn,a=Xt,c=Qt,l=gt.DEFAULT_ANISOTROPY,u=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=bi(),this.name="",this.source=new Cs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yr).x}get height(){return this.source.getSize(Yr).y}get depth(){return this.source.getSize(Yr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ko:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ko:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=ll;gt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const c=e.elements,l=c[0],u=c[4],d=c[8],p=c[1],h=c[5],v=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(l+h+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,w=(h+1)/2,C=(f+1)/2,R=(u+p)/4,E=(d+x)/4,L=(v+m)/4;return S>w&&S>C?S<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(S),r=R/n,o=E/n):w>C?w<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(w),n=R/r,o=L/r):C<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),n=E/o,r=L/o),this.set(n,r,o,t),this}let T=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(p-u)*(p-u));return Math.abs(T)<.001&&(T=1),this.x=(m-v)/T,this.y=(d-x)/T,this.z=(p-u)/T,this.w=Math.acos((l+h+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pu extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:n.depth},o=new gt(r);this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Cs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends pu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xl extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mu extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,zt):zt.fromBufferAttribute(o,s),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(e.matrixWorld),this.union(Qi)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),$i.subVectors(this.max,Si),qn.subVectors(e.a,Si),Yn.subVectors(e.b,Si),Zn.subVectors(e.c,Si),vn.subVectors(Yn,qn),_n.subVectors(Zn,Yn),An.subVectors(qn,Zn);let t=[0,-vn.z,vn.y,0,-_n.z,_n.y,0,-An.z,An.y,vn.z,0,-vn.x,_n.z,0,-_n.x,An.z,0,-An.x,-vn.y,vn.x,0,-_n.y,_n.x,0,-An.y,An.x,0];return!Zr(t,qn,Yn,Zn,$i)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,qn,Yn,Zn,$i))?!1:(er.crossVectors(vn,_n),t=[er.x,er.y,er.z],Zr(t,qn,Yn,Zn,$i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rn=[new N,new N,new N,new N,new N,new N,new N,new N],zt=new N,Qi=new xi,qn=new N,Yn=new N,Zn=new N,vn=new N,_n=new N,An=new N,Si=new N,$i=new N,er=new N,Tn=new N;function Zr(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){Tn.fromArray(i,o);const a=r.x*Math.abs(Tn.x)+r.y*Math.abs(Tn.y)+r.z*Math.abs(Tn.z),c=e.dot(Tn),l=t.dot(Tn),u=n.dot(Tn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const gu=new xi,Ri=new N,Kr=new N;class Ps{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gu.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ri.subVectors(e,this.center);const t=Ri.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ri,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ri.copy(e.center).add(Kr)),this.expandByPoint(Ri.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const on=new N,Jr=new N,tr=new N,bn=new N,jr=new N,nr=new N,Qr=new N;class vu{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Jr.copy(e).add(t).multiplyScalar(.5),tr.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Jr);const o=e.distanceTo(t)*.5,s=-this.direction.dot(tr),a=bn.dot(this.direction),c=-bn.dot(tr),l=bn.lengthSq(),u=Math.abs(1-s*s);let d,p,h,v;if(u>0)if(d=s*c-a,p=s*a-c,v=o*u,d>=0)if(p>=-v)if(p<=v){const x=1/u;d*=x,p*=x,h=d*(d+s*p+2*a)+p*(s*d+p+2*c)+l}else p=o,d=Math.max(0,-(s*p+a)),h=-d*d+p*(p+2*c)+l;else p=-o,d=Math.max(0,-(s*p+a)),h=-d*d+p*(p+2*c)+l;else p<=-v?(d=Math.max(0,-(-s*o+a)),p=d>0?-o:Math.min(Math.max(-o,-c),o),h=-d*d+p*(p+2*c)+l):p<=v?(d=0,p=Math.min(Math.max(-o,-c),o),h=p*(p+2*c)+l):(d=Math.max(0,-(s*o+a)),p=d>0?o:Math.min(Math.max(-o,-c),o),h=-d*d+p*(p+2*c)+l);else p=s>0?-o:o,d=Math.max(0,-(s*p+a)),h=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Jr).addScaledVector(tr,p),h}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),r=on.dot(on)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,c=n+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(o=(e.min.y-p.y)*u,s=(e.max.y-p.y)*u):(o=(e.max.y-p.y)*u,s=(e.min.y-p.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,r,o){jr.subVectors(t,e),nr.subVectors(n,e),Qr.crossVectors(jr,nr);let s=this.direction.dot(Qr),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;bn.subVectors(this.origin,e);const c=a*this.direction.dot(nr.crossVectors(bn,nr));if(c<0)return null;const l=a*this.direction.dot(jr.cross(bn));if(l<0||c+l>s)return null;const u=-a*bn.dot(Qr);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,r,o,s,a,c,l,u,d,p,h,v,x,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,c,l,u,d,p,h,v,x,m)}set(e,t,n,r,o,s,a,c,l,u,d,p,h,v,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=p,f[3]=h,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Kn.setFromMatrixColumn(e,0).length(),o=1/Kn.setFromMatrixColumn(e,1).length(),s=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const p=s*u,h=s*d,v=a*u,x=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+v*l,t[5]=p-x*l,t[9]=-a*c,t[2]=x-p*l,t[6]=v+h*l,t[10]=s*c}else if(e.order==="YXZ"){const p=c*u,h=c*d,v=l*u,x=l*d;t[0]=p+x*a,t[4]=v*a-h,t[8]=s*l,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=h*a-v,t[6]=x+p*a,t[10]=s*c}else if(e.order==="ZXY"){const p=c*u,h=c*d,v=l*u,x=l*d;t[0]=p-x*a,t[4]=-s*d,t[8]=v+h*a,t[1]=h+v*a,t[5]=s*u,t[9]=x-p*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){const p=s*u,h=s*d,v=a*u,x=a*d;t[0]=c*u,t[4]=v*l-h,t[8]=p*l+x,t[1]=c*d,t[5]=x*l+p,t[9]=h*l-v,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){const p=s*c,h=s*l,v=a*c,x=a*l;t[0]=c*u,t[4]=x-p*d,t[8]=v*d+h,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+v,t[10]=p-x*d}else if(e.order==="XZY"){const p=s*c,h=s*l,v=a*c,x=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=p*d+x,t[5]=s*u,t[9]=h*d-v,t[2]=v*d-h,t[6]=a*u,t[10]=x*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_u,e,bu)}lookAt(e,t,n){const r=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),xn.crossVectors(n,Tt),xn.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),xn.crossVectors(n,Tt)),xn.normalize(),ir.crossVectors(Tt,xn),r[0]=xn.x,r[4]=ir.x,r[8]=Tt.x,r[1]=xn.y,r[5]=ir.y,r[9]=Tt.y,r[2]=xn.z,r[6]=ir.z,r[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],p=n[9],h=n[13],v=n[2],x=n[6],m=n[10],f=n[14],T=n[3],S=n[7],w=n[11],C=n[15],R=r[0],E=r[4],L=r[8],M=r[12],_=r[1],U=r[5],F=r[9],k=r[13],W=r[2],q=r[6],X=r[10],ie=r[14],H=r[3],ce=r[7],me=r[11],xe=r[15];return o[0]=s*R+a*_+c*W+l*H,o[4]=s*E+a*U+c*q+l*ce,o[8]=s*L+a*F+c*X+l*me,o[12]=s*M+a*k+c*ie+l*xe,o[1]=u*R+d*_+p*W+h*H,o[5]=u*E+d*U+p*q+h*ce,o[9]=u*L+d*F+p*X+h*me,o[13]=u*M+d*k+p*ie+h*xe,o[2]=v*R+x*_+m*W+f*H,o[6]=v*E+x*U+m*q+f*ce,o[10]=v*L+x*F+m*X+f*me,o[14]=v*M+x*k+m*ie+f*xe,o[3]=T*R+S*_+w*W+C*H,o[7]=T*E+S*U+w*q+C*ce,o[11]=T*L+S*F+w*X+C*me,o[15]=T*M+S*k+w*ie+C*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],p=e[10],h=e[14],v=e[3],x=e[7],m=e[11],f=e[15];return v*(+o*c*d-r*l*d-o*a*p+n*l*p+r*a*h-n*c*h)+x*(+t*c*h-t*l*p+o*s*p-r*s*h+r*l*u-o*c*u)+m*(+t*l*d-t*a*h-o*s*d+n*s*h+o*a*u-n*l*u)+f*(-r*a*u-t*c*d+t*a*p+r*s*d-n*s*p+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],p=e[10],h=e[11],v=e[12],x=e[13],m=e[14],f=e[15],T=d*m*l-x*p*l+x*c*h-a*m*h-d*c*f+a*p*f,S=v*p*l-u*m*l-v*c*h+s*m*h+u*c*f-s*p*f,w=u*x*l-v*d*l+v*a*h-s*x*h-u*a*f+s*d*f,C=v*d*c-u*x*c-v*a*p+s*x*p+u*a*m-s*d*m,R=t*T+n*S+r*w+o*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return e[0]=T*E,e[1]=(x*p*o-d*m*o-x*r*h+n*m*h+d*r*f-n*p*f)*E,e[2]=(a*m*o-x*c*o+x*r*l-n*m*l-a*r*f+n*c*f)*E,e[3]=(d*c*o-a*p*o-d*r*l+n*p*l+a*r*h-n*c*h)*E,e[4]=S*E,e[5]=(u*m*o-v*p*o+v*r*h-t*m*h-u*r*f+t*p*f)*E,e[6]=(v*c*o-s*m*o-v*r*l+t*m*l+s*r*f-t*c*f)*E,e[7]=(s*p*o-u*c*o+u*r*l-t*p*l-s*r*h+t*c*h)*E,e[8]=w*E,e[9]=(v*d*o-u*x*o-v*n*h+t*x*h+u*n*f-t*d*f)*E,e[10]=(s*x*o-v*a*o+v*n*l-t*x*l-s*n*f+t*a*f)*E,e[11]=(u*a*o-s*d*o-u*n*l+t*d*l+s*n*h-t*a*h)*E,e[12]=C*E,e[13]=(u*x*r-v*d*r+v*n*p-t*x*p-u*n*m+t*d*m)*E,e[14]=(v*a*r-s*x*r-v*n*c+t*x*c+s*n*m-t*a*m)*E,e[15]=(s*d*r-u*a*r+u*n*c-t*d*c-s*n*p+t*a*p)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*s,0,l*c-r*a,u*c+r*s,o*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,d=a+a,p=o*l,h=o*u,v=o*d,x=s*u,m=s*d,f=a*d,T=c*l,S=c*u,w=c*d,C=n.x,R=n.y,E=n.z;return r[0]=(1-(x+f))*C,r[1]=(h+w)*C,r[2]=(v-S)*C,r[3]=0,r[4]=(h-w)*R,r[5]=(1-(p+f))*R,r[6]=(m+T)*R,r[7]=0,r[8]=(v+S)*E,r[9]=(m-T)*E,r[10]=(1-(p+x))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=Kn.set(r[0],r[1],r[2]).length();const s=Kn.set(r[4],r[5],r[6]).length(),a=Kn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const l=1/o,u=1/s,d=1/a;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=u,Gt.elements[5]*=u,Gt.elements[6]*=u,Gt.elements[8]*=d,Gt.elements[9]*=d,Gt.elements[10]*=d,t.setFromRotationMatrix(Gt),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=Zt,c=!1){const l=this.elements,u=2*o/(t-e),d=2*o/(n-r),p=(t+e)/(t-e),h=(n+r)/(n-r);let v,x;if(c)v=o/(s-o),x=s*o/(s-o);else if(a===Zt)v=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===Cr)v=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=Zt,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-r),p=-(t+e)/(t-e),h=-(n+r)/(n-r);let v,x;if(c)v=1/(s-o),x=s/(s-o);else if(a===Zt)v=-2/(s-o),x=-(s+o)/(s-o);else if(a===Cr)v=-1/(s-o),x=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kn=new N,Gt=new lt,_u=new N(0,0,0),bu=new N(1,1,1),xn=new N,ir=new N,Tt=new N,fa=new lt,pa=new Xi;class $t{constructor(e=0,t=0,n=0,r=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],p=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pa.setFromEuler(this),this.setFromQuaternion(pa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class wl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xu=0;const ma=new N,Jn=new Xi,sn=new lt,rr=new N,Ei=new N,wu=new N,Mu=new Xi,ga=new N(1,0,0),va=new N(0,1,0),_a=new N(0,0,1),ba={type:"added"},yu={type:"removed"},jn={type:"childadded",child:null},$r={type:"childremoved",child:null};class vt extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new N,t=new $t,n=new Xi,r=new N(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new We}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(ga,e)}rotateY(e){return this.rotateOnAxis(va,e)}rotateZ(e){return this.rotateOnAxis(_a,e)}translateOnAxis(e,t){return ma.copy(e).applyQuaternion(this.quaternion),this.position.add(ma.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ga,e)}translateY(e){return this.translateOnAxis(va,e)}translateZ(e){return this.translateOnAxis(_a,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Ei,rr,this.up):sn.lookAt(rr,Ei,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),Jn.setFromRotationMatrix(sn),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ba),jn.child=e,this.dispatchEvent(jn),jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yu),$r.child=e,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ba),jn.child=e,this.dispatchEvent(jn),jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,e,wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,Mu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];o(e.shapes,d)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(o(e.animations,c))}}if(t){const a=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),d=s(e.shapes),p=s(e.skeletons),h=s(e.animations),v=s(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),h.length>0&&(n.animations=h),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}vt.DEFAULT_UP=new N(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new N,an=new N,eo=new N,ln=new N,Qn=new N,$n=new N,xa=new N,to=new N,no=new N,io=new N,ro=new st,oo=new st,so=new st;class Wt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Vt.subVectors(r,t),an.subVectors(n,t),eo.subVectors(e,t);const s=Vt.dot(Vt),a=Vt.dot(an),c=Vt.dot(eo),l=an.dot(an),u=an.dot(eo),d=s*l-a*a;if(d===0)return o.set(0,0,0),null;const p=1/d,h=(l*c-a*u)*p,v=(s*u-a*c)*p;return o.set(1-h-v,v,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(e,t,n,r,o,s,a,c){return this.getBarycoord(e,t,n,r,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,ln.x),c.addScaledVector(s,ln.y),c.addScaledVector(a,ln.z),c)}static getInterpolatedAttribute(e,t,n,r,o,s){return ro.setScalar(0),oo.setScalar(0),so.setScalar(0),ro.fromBufferAttribute(e,t),oo.fromBufferAttribute(e,n),so.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ro,o.x),s.addScaledVector(oo,o.y),s.addScaledVector(so,o.z),s}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),an.subVectors(e,t),Vt.cross(an).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Vt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;Qn.subVectors(r,n),$n.subVectors(o,n),to.subVectors(e,n);const c=Qn.dot(to),l=$n.dot(to);if(c<=0&&l<=0)return t.copy(n);no.subVectors(e,r);const u=Qn.dot(no),d=$n.dot(no);if(u>=0&&d<=u)return t.copy(r);const p=c*d-u*l;if(p<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(n).addScaledVector(Qn,s);io.subVectors(e,o);const h=Qn.dot(io),v=$n.dot(io);if(v>=0&&h<=v)return t.copy(o);const x=h*l-c*v;if(x<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector($n,a);const m=u*v-h*d;if(m<=0&&d-u>=0&&h-v>=0)return xa.subVectors(o,r),a=(d-u)/(d-u+(h-v)),t.copy(r).addScaledVector(xa,a);const f=1/(m+x+p);return s=x*f,a=p*f,t.copy(n).addScaledVector(Qn,s).addScaledVector($n,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},or={h:0,s:0,l:0};function ao(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=au(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=ao(s,o,e+1/3),this.g=ao(s,o,e),this.b=ao(s,o,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Mt){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=Ml[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Je.workingToColorSpace(bt.copy(this),e),Math.round(qe(bt.r*255,0,255))*65536+Math.round(qe(bt.g*255,0,255))*256+Math.round(qe(bt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(bt.copy(this),t);const n=bt.r,r=bt.g,o=bt.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let c,l;const u=(a+s)/2;if(a===s)c=0,l=0;else{const d=s-a;switch(l=u<=.5?d/(s+a):d/(2-s-a),s){case n:c=(r-o)/d+(r<o?6:0);break;case r:c=(o-n)/d+2;break;case o:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Mt){Je.workingToColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,r=bt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(or);const n=Hr(wn.h,or.h,t),r=Hr(wn.s,or.s,t),o=Hr(wn.l,or.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ze;Ze.NAMES=Ml;let Su=0;class qi extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=li,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=Lo,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==To&&(n.blendSrc=this.blendSrc),this.blendDst!==Lo&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const c=o[a];delete c.metadata,s.push(c)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pi extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new N,sr=new ye;let Ru=0;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ru++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=aa,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),o=Rt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==aa&&(e.usage=this.usage),e}}class yl extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sl extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Eu=0;const Nt=new lt,lo=new vt,ei=new N,Lt=new xi,Ai=new xi,mt=new N;class kt extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bl(e)?Sl:yl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new We().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return lo.lookAt(e),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];Lt.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Ai.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Lt.min,Ai.min),Lt.expandByPoint(mt),mt.addVectors(Lt.max,Ai.max),Lt.expandByPoint(mt)):(Lt.expandByPoint(Ai.min),Lt.expandByPoint(Ai.max))}Lt.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)mt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)mt.fromBufferAttribute(a,l),c&&(ei.fromBufferAttribute(e,l),mt.add(ei)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new N,c[L]=new N;const l=new N,u=new N,d=new N,p=new ye,h=new ye,v=new ye,x=new N,m=new N;function f(L,M,_){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,_),p.fromBufferAttribute(o,L),h.fromBufferAttribute(o,M),v.fromBufferAttribute(o,_),u.sub(l),d.sub(l),h.sub(p),v.sub(p);const U=1/(h.x*v.y-v.x*h.y);isFinite(U)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(d,-h.y).multiplyScalar(U),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(U),a[L].add(x),a[M].add(x),a[_].add(x),c[L].add(m),c[M].add(m),c[_].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,M=T.length;L<M;++L){const _=T[L],U=_.start,F=_.count;for(let k=U,W=U+F;k<W;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new N,w=new N,C=new N,R=new N;function E(L){C.fromBufferAttribute(r,L),R.copy(C);const M=a[L];S.copy(M),S.sub(C.multiplyScalar(C.dot(M))).normalize(),w.crossVectors(R,M);const U=w.dot(c[L])<0?-1:1;s.setXYZW(L,S.x,S.y,S.z,U)}for(let L=0,M=T.length;L<M;++L){const _=T[L],U=_.start,F=_.count;for(let k=U,W=U+F;k<W;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,h=n.count;p<h;p++)n.setXYZ(p,0,0,0);const r=new N,o=new N,s=new N,a=new N,c=new N,l=new N,u=new N,d=new N;if(e)for(let p=0,h=e.count;p<h;p+=3){const v=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,h=t.count;p<h;p+=3)r.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,p=new l.constructor(c.length*u);let h=0,v=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let f=0;f<u;f++)p[v++]=l[h++]}return new jt(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){const p=l[u],h=e(p,n);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,p=l.length;d<p;d++){const h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const o=e.morphAttributes;for(const l in o){const u=[],d=o[l];for(let p=0,h=d.length;p<h;p++)u.push(d[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wa=new lt,Ln=new vu,ar=new Ps,Ma=new N,lr=new N,cr=new N,ur=new N,co=new N,dr=new N,ya=new N,hr=new N;class ut extends vt{constructor(e=new kt,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){dr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],d=o[c];u!==0&&(co.fromBufferAttribute(d,e),s?dr.addScaledVector(co,u):dr.addScaledVector(co.sub(t),u))}t.add(dr)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(o),Ln.copy(e.ray).recast(e.near),!(ar.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(ar,Ma)===null||Ln.origin.distanceToSquared(Ma)>(e.far-e.near)**2))&&(wa.copy(o).invert(),Ln.copy(e.ray).applyMatrix4(wa),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ln)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,p=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,x=p.length;v<x;v++){const m=p[v],f=s[m.materialIndex],T=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let w=T,C=S;w<C;w+=3){const R=a.getX(w),E=a.getX(w+1),L=a.getX(w+2);r=fr(this,f,e,n,l,u,d,R,E,L),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=v,f=x;m<f;m+=3){const T=a.getX(m),S=a.getX(m+1),w=a.getX(m+2);r=fr(this,s,e,n,l,u,d,T,S,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,x=p.length;v<x;v++){const m=p[v],f=s[m.materialIndex],T=Math.max(m.start,h.start),S=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let w=T,C=S;w<C;w+=3){const R=w,E=w+1,L=w+2;r=fr(this,f,e,n,l,u,d,R,E,L),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=v,f=x;m<f;m+=3){const T=m,S=m+1,w=m+2;r=fr(this,s,e,n,l,u,d,T,S,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Au(i,e,t,n,r,o,s,a){let c;if(e.side===yt?c=n.intersectTriangle(s,o,r,!0,a):c=n.intersectTriangle(r,o,s,e.side===mn,a),c===null)return null;hr.copy(a),hr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(hr);return l<t.near||l>t.far?null:{distance:l,point:hr.clone(),object:i}}function fr(i,e,t,n,r,o,s,a,c,l){i.getVertexPosition(a,lr),i.getVertexPosition(c,cr),i.getVertexPosition(l,ur);const u=Au(i,e,t,n,lr,cr,ur,ya);if(u){const d=new N;Wt.getBarycoord(ya,lr,cr,ur,d),r&&(u.uv=Wt.getInterpolatedAttribute(r,a,c,l,d,new ye)),o&&(u.uv1=Wt.getInterpolatedAttribute(o,a,c,l,d,new ye)),s&&(u.normal=Wt.getInterpolatedAttribute(s,a,c,l,d,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new N,materialIndex:0};Wt.getNormal(lr,cr,ur,p.normal),u.face=p,u.barycoord=d}return u}class Yi extends kt{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const c=[],l=[],u=[],d=[];let p=0,h=0;v("z","y","x",-1,-1,n,t,e,s,o,0),v("z","y","x",1,-1,n,t,-e,s,o,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function v(x,m,f,T,S,w,C,R,E,L,M){const _=w/E,U=C/L,F=w/2,k=C/2,W=R/2,q=E+1,X=L+1;let ie=0,H=0;const ce=new N;for(let me=0;me<X;me++){const xe=me*U-k;for(let j=0;j<q;j++){const Te=j*_-F;ce[x]=Te*T,ce[m]=xe*S,ce[f]=W,l.push(ce.x,ce.y,ce.z),ce[x]=0,ce[m]=0,ce[f]=R>0?1:-1,u.push(ce.x,ce.y,ce.z),d.push(j/E),d.push(1-me/L),ie+=1}}for(let me=0;me<L;me++)for(let xe=0;xe<E;xe++){const j=p+xe+q*me,Te=p+xe+q*(me+1),Fe=p+(xe+1)+q*(me+1),Ue=p+(xe+1)+q*me;c.push(j,Te,Ue),c.push(Te,Fe,Ue),H+=6}a.addGroup(h,H,M),h+=H,p+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function wt(i){const e={};for(let t=0;t<i.length;t++){const n=mi(i[t]);for(const r in n)e[r]=n[r]}return e}function Tu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Lu={clone:mi,merge:wt};var Uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uu,this.fragmentShader=Cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=Tu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class El extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Zt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new N,Sa=new ye,Ra=new ye;class Ut extends El{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,Sa,Ra),t.subVectors(Ra,Sa)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ti=-90,ni=1;class Pu extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ut(ti,ni,e,t);r.layers=this.layers,this.add(r);const o=new Ut(ti,ni,e,t);o.layers=this.layers,this.add(o);const s=new Ut(ti,ni,e,t);s.layers=this.layers,this.add(s);const a=new Ut(ti,ni,e,t);a.layers=this.layers,this.add(a);const c=new Ut(ti,ni,e,t);c.layers=this.layers,this.add(c);const l=new Ut(ti,ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,c]=t;for(const l of t)this.remove(l);if(e===Zt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,c,l,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,p,h),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Al extends gt{constructor(e=[],t=di,n,r,o,s,a,c,l,u){super(e,t,n,r,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Du extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Al(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yi(5,5,5),o=new gn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:Sn});o.uniforms.tEquirect.value=t;const s=new ut(r,o),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=Bt),new Pu(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}class Ct extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iu={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=u.position.distanceTo(d.position),h=.02,v=.005;l.inputState.pinching&&p>h+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=h-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iu)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ds extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Nu extends gt{constructor(e=null,t=1,n=1,r,o,s,a,c,l=Pt,u=Pt,d,p){super(null,s,a,c,l,u,r,o,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ho=new N,Fu=new N,Ou=new We;class Dn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ho.subVectors(n,t).cross(Fu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ho),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ou.getNormalMatrix(e),r=this.coplanarPoint(ho).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Ps,Bu=new ye(.5,.5),pr=new N;class Is{constructor(e=new Dn,t=new Dn,n=new Dn,r=new Dn,o=new Dn,s=new Dn){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zt,n=!1){const r=this.planes,o=e.elements,s=o[0],a=o[1],c=o[2],l=o[3],u=o[4],d=o[5],p=o[6],h=o[7],v=o[8],x=o[9],m=o[10],f=o[11],T=o[12],S=o[13],w=o[14],C=o[15];if(r[0].setComponents(l-s,h-u,f-v,C-T).normalize(),r[1].setComponents(l+s,h+u,f+v,C+T).normalize(),r[2].setComponents(l+a,h+d,f+x,C+S).normalize(),r[3].setComponents(l-a,h-d,f-x,C-S).normalize(),n)r[4].setComponents(c,p,m,w).normalize(),r[5].setComponents(l-c,h-p,f-m,C-w).normalize();else if(r[4].setComponents(l-c,h-p,f-m,C-w).normalize(),t===Zt)r[5].setComponents(l+c,h+p,f+m,C+w).normalize();else if(t===Cr)r[5].setComponents(c,p,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){Un.center.set(0,0,0);const t=Bu.distanceTo(e.center);return Un.radius=.7071067811865476+t,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(pr.x=r.normal.x>0?e.max.x:e.min.x,pr.y=r.normal.y>0?e.max.y:e.min.y,pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tl extends gt{constructor(e,t,n=zn,r,o,s,a=Pt,c=Pt,l,u=Fi,d=1){if(u!==Fi&&u!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,o,s,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ll extends gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fr extends kt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const o=[],s=[],a=[],c=[],l=new N,u=new ye;s.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){const h=n+d/t*r;l.x=e*Math.cos(h),l.y=e*Math.sin(h),s.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(s[p]/e+1)/2,u.y=(s[p+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Or extends kt{constructor(e=1,t=1,n=1,r=32,o=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),o=Math.floor(o);const u=[],d=[],p=[],h=[];let v=0;const x=[],m=n/2;let f=0;T(),s===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(h,2));function T(){const w=new N,C=new N;let R=0;const E=(t-e)/n;for(let L=0;L<=o;L++){const M=[],_=L/o,U=_*(t-e)+e;for(let F=0;F<=r;F++){const k=F/r,W=k*c+a,q=Math.sin(W),X=Math.cos(W);C.x=U*q,C.y=-_*n+m,C.z=U*X,d.push(C.x,C.y,C.z),w.set(q,E,X).normalize(),p.push(w.x,w.y,w.z),h.push(k,1-_),M.push(v++)}x.push(M)}for(let L=0;L<r;L++)for(let M=0;M<o;M++){const _=x[M][L],U=x[M+1][L],F=x[M+1][L+1],k=x[M][L+1];(e>0||M!==0)&&(u.push(_,U,k),R+=3),(t>0||M!==o-1)&&(u.push(U,F,k),R+=3)}l.addGroup(f,R,0),f+=R}function S(w){const C=v,R=new ye,E=new N;let L=0;const M=w===!0?e:t,_=w===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,m*_,0),p.push(0,_,0),h.push(.5,.5),v++;const U=v;for(let F=0;F<=r;F++){const W=F/r*c+a,q=Math.cos(W),X=Math.sin(W);E.x=M*X,E.y=m*_,E.z=M*q,d.push(E.x,E.y,E.z),p.push(0,_,0),R.x=q*.5+.5,R.y=X*.5*_+.5,h.push(R.x,R.y),v++}for(let F=0;F<r;F++){const k=C+F,W=U+F;w===!0?u.push(W,W+1,k):u.push(W+1,W,k),L+=3}l.addGroup(f,L,w===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),o=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const o=n.length;let s;t?s=t:s=e*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-s,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===s)return r/(o-1);const u=n[r],p=n[r+1]-u,h=(s-u)/p;return(r+h)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const s=this.getPoint(r),a=this.getPoint(o),c=t||(s.isVector2?new ye:new N);return c.copy(a).sub(s).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new N,r=[],o=[],s=[],a=new N,c=new lt;for(let h=0;h<=e;h++){const v=h/e;r[h]=this.getTangentAt(v,new N)}o[0]=new N,s[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let h=1;h<=e;h++){if(o[h]=o[h-1].clone(),s[h]=s[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(qe(r[h-1].dot(r[h]),-1,1));o[h].applyMatrix4(c.makeRotationAxis(a,v))}s[h].crossVectors(r[h],o[h])}if(t===!0){let h=Math.acos(qe(o[0].dot(o[e]),-1,1));h/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(h=-h);for(let v=1;v<=e;v++)o[v].applyMatrix4(c.makeRotationAxis(r[v],h*v)),s[v].crossVectors(r[v],o[v])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ns extends tn{constructor(e=0,t=0,n=1,r=1,o=0,s=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ye){const n=t,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);const a=this.aStartAngle+e*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,h=l-this.aY;c=p*u-h*d+this.aX,l=p*d+h*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ku extends Ns{constructor(e,t,n,r,o,s){super(e,t,n,n,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Fs(){let i=0,e=0,t=0,n=0;function r(o,s,a,c){i=o,e=a,t=-3*o+3*s-2*a-c,n=2*o-2*s+a+c}return{initCatmullRom:function(o,s,a,c,l){r(s,a,l*(a-o),l*(c-s))},initNonuniformCatmullRom:function(o,s,a,c,l,u,d){let p=(s-o)/l-(a-o)/(l+u)+(a-s)/u,h=(a-s)/u-(c-s)/(u+d)+(c-a)/d;p*=u,h*=u,r(s,a,p,h)},calc:function(o){const s=o*o,a=s*o;return i+e*o+t*s+n*a}}}const mr=new N,fo=new Fs,po=new Fs,mo=new Fs;class zu extends tn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new N){const n=t,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e;let a=Math.floor(s),c=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%o]:(mr.subVectors(r[0],r[1]).add(r[0]),l=mr);const d=r[a%o],p=r[(a+1)%o];if(this.closed||a+2<o?u=r[(a+2)%o]:(mr.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=mr),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(p),h),m=Math.pow(p.distanceToSquared(u),h);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),fo.initNonuniformCatmullRom(l.x,d.x,p.x,u.x,v,x,m),po.initNonuniformCatmullRom(l.y,d.y,p.y,u.y,v,x,m),mo.initNonuniformCatmullRom(l.z,d.z,p.z,u.z,v,x,m)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(l.x,d.x,p.x,u.x,this.tension),po.initCatmullRom(l.y,d.y,p.y,u.y,this.tension),mo.initCatmullRom(l.z,d.z,p.z,u.z,this.tension));return n.set(fo.calc(c),po.calc(c),mo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ea(i,e,t,n,r){const o=(n-e)*.5,s=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+o+s)*c+(-3*t+3*n-2*o-s)*a+o*i+t}function Gu(i,e){const t=1-i;return t*t*e}function Vu(i,e){return 2*(1-i)*i*e}function Hu(i,e){return i*i*e}function Ci(i,e,t,n){return Gu(i,e)+Vu(i,t)+Hu(i,n)}function Wu(i,e){const t=1-i;return t*t*t*e}function Xu(i,e){const t=1-i;return 3*t*t*i*e}function qu(i,e){return 3*(1-i)*i*i*e}function Yu(i,e){return i*i*i*e}function Pi(i,e,t,n,r){return Wu(i,e)+Xu(i,t)+qu(i,n)+Yu(i,r)}class Ul extends tn{constructor(e=new ye,t=new ye,n=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ye){const n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(Pi(e,r.x,o.x,s.x,a.x),Pi(e,r.y,o.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zu extends tn{constructor(e=new N,t=new N,n=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new N){const n=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return n.set(Pi(e,r.x,o.x,s.x,a.x),Pi(e,r.y,o.y,s.y,a.y),Pi(e,r.z,o.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cl extends tn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ku extends tn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pl extends tn{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){const n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(Ci(e,r.x,o.x,s.x),Ci(e,r.y,o.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ju extends tn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,r=this.v0,o=this.v1,s=this.v2;return n.set(Ci(e,r.x,o.x,s.x),Ci(e,r.y,o.y,s.y),Ci(e,r.z,o.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dl extends tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const n=t,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,c=r[s===0?s:s-1],l=r[s],u=r[s>r.length-2?r.length-1:s+1],d=r[s>r.length-3?r.length-1:s+2];return n.set(Ea(a,c.x,l.x,u.x,d.x),Ea(a,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ye().fromArray(r))}return this}}var gs=Object.freeze({__proto__:null,ArcCurve:ku,CatmullRomCurve3:zu,CubicBezierCurve:Ul,CubicBezierCurve3:Zu,EllipseCurve:Ns,LineCurve:Cl,LineCurve3:Ku,QuadraticBezierCurve:Pl,QuadraticBezierCurve3:Ju,SplineCurve:Dl});class ju extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gs[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=n){const s=r[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-s/c;return a.getPointAt(l,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,o=this.curves;r<o.length;r++){const s=o[r],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,c=s.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new gs[r.type]().fromJSON(r))}return this}}class vs extends ju{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Cl(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const o=new Pl(this.currentPoint.clone(),new ye(e,t),new ye(n,r));return this.curves.push(o),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,o,s){const a=new Ul(this.currentPoint.clone(),new ye(e,t),new ye(n,r),new ye(o,s));return this.curves.push(a),this.currentPoint.set(o,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Dl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,o,s){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,o,s),this}absarc(e,t,n,r,o,s){return this.absellipse(e,t,n,n,r,o,s),this}ellipse(e,t,n,r,o,s,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,o,s,a,c),this}absellipse(e,t,n,r,o,s,a,c){const l=new Ns(e,t,n,r,o,s,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Os extends vs{constructor(e){super(e),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new vs().fromJSON(r))}return this}}function Qu(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let o=Il(i,0,r,t,!0);const s=[];if(!o||o.next===o.prev)return s;let a,c,l;if(n&&(o=id(i,e,o,t)),i.length>80*t){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let p=t;p<r;p+=t){const h=i[p],v=i[p+1];h<a&&(a=h),v<c&&(c=v),h>u&&(u=h),v>d&&(d=v)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return zi(o,s,t,a,c,l,0),s}function Il(i,e,t,n,r){let o;if(r===pd(i,e,t,n)>0)for(let s=e;s<t;s+=n)o=Aa(s/n|0,i[s],i[s+1],o);else for(let s=t-n;s>=e;s-=n)o=Aa(s/n|0,i[s],i[s+1],o);return o&&gi(o,o.next)&&(Vi(o),o=o.next),o}function Vn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(gi(t,t.next)||at(t.prev,t,t.next)===0)){if(Vi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zi(i,e,t,n,r,o,s){if(!i)return;!s&&o&&ld(i,n,r,o);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(o?ed(i,n,r,o):$u(i)){e.push(c.i,i.i,l.i),Vi(i),i=l.next,a=l.next;continue}if(i=l,i===a){s?s===1?(i=td(Vn(i),e),zi(i,e,t,n,r,o,2)):s===2&&nd(i,e,t,n,r,o):zi(Vn(i),e,t,n,r,o,1);break}}}function $u(i){const e=i.prev,t=i,n=i.next;if(at(e,t,n)>=0)return!1;const r=e.x,o=t.x,s=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(r,o,s),d=Math.min(a,c,l),p=Math.max(r,o,s),h=Math.max(a,c,l);let v=n.next;for(;v!==e;){if(v.x>=u&&v.x<=p&&v.y>=d&&v.y<=h&&Ti(r,a,o,c,s,l,v.x,v.y)&&at(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function ed(i,e,t,n){const r=i.prev,o=i,s=i.next;if(at(r,o,s)>=0)return!1;const a=r.x,c=o.x,l=s.x,u=r.y,d=o.y,p=s.y,h=Math.min(a,c,l),v=Math.min(u,d,p),x=Math.max(a,c,l),m=Math.max(u,d,p),f=_s(h,v,e,t,n),T=_s(x,m,e,t,n);let S=i.prevZ,w=i.nextZ;for(;S&&S.z>=f&&w&&w.z<=T;){if(S.x>=h&&S.x<=x&&S.y>=v&&S.y<=m&&S!==r&&S!==s&&Ti(a,u,c,d,l,p,S.x,S.y)&&at(S.prev,S,S.next)>=0||(S=S.prevZ,w.x>=h&&w.x<=x&&w.y>=v&&w.y<=m&&w!==r&&w!==s&&Ti(a,u,c,d,l,p,w.x,w.y)&&at(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;S&&S.z>=f;){if(S.x>=h&&S.x<=x&&S.y>=v&&S.y<=m&&S!==r&&S!==s&&Ti(a,u,c,d,l,p,S.x,S.y)&&at(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;w&&w.z<=T;){if(w.x>=h&&w.x<=x&&w.y>=v&&w.y<=m&&w!==r&&w!==s&&Ti(a,u,c,d,l,p,w.x,w.y)&&at(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function td(i,e){let t=i;do{const n=t.prev,r=t.next.next;!gi(n,r)&&Fl(n,t,t.next,r)&&Gi(n,r)&&Gi(r,n)&&(e.push(n.i,t.i,r.i),Vi(t),Vi(t.next),t=i=r),t=t.next}while(t!==i);return Vn(t)}function nd(i,e,t,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&dd(s,a)){let c=Ol(s,a);s=Vn(s,s.next),c=Vn(c,c.next),zi(s,e,t,n,r,o,0),zi(c,e,t,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function id(i,e,t,n){const r=[];for(let o=0,s=e.length;o<s;o++){const a=e[o]*n,c=o<s-1?e[o+1]*n:i.length,l=Il(i,a,c,n,!1);l===l.next&&(l.steiner=!0),r.push(ud(l))}r.sort(rd);for(let o=0;o<r.length;o++)t=od(r[o],t);return t}function rd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function od(i,e){const t=sd(i,e);if(!t)return e;const n=Ol(t,i);return Vn(n,n.next),Vn(t,t.next)}function sd(i,e){let t=e;const n=i.x,r=i.y;let o=-1/0,s;if(gi(i,t))return t;do{if(gi(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>o&&(o=d,s=t.x<t.next.x?t:t.next,d===n))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0;t=s;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Nl(r<l?n:o,r,c,l,r<l?o:n,r,t.x,t.y)){const d=Math.abs(r-t.y)/(n-t.x);Gi(t,i)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&ad(s,t)))&&(s=t,u=d)}t=t.next}while(t!==a);return s}function ad(i,e){return at(i.prev,i,e.prev)<0&&at(e.next,i,i.next)<0}function ld(i,e,t,n){let r=i;do r.z===0&&(r.z=_s(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,cd(r)}function cd(i){let e,t=1;do{let n=i,r;i=null;let o=null;for(e=0;n;){e++;let s=n,a=0;for(let l=0;l<t&&(a++,s=s.nextZ,!!s);l++);let c=t;for(;a>0||c>0&&s;)a!==0&&(c===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,c--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,t*=2}while(e>1);return i}function _s(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ud(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Nl(i,e,t,n,r,o,s,a){return(r-s)*(e-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(r-s)*(n-a)}function Ti(i,e,t,n,r,o,s,a){return!(i===s&&e===a)&&Nl(i,e,t,n,r,o,s,a)}function dd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!hd(i,e)&&(Gi(i,e)&&Gi(e,i)&&fd(i,e)&&(at(i.prev,i,e.prev)||at(i,e.prev,e))||gi(i,e)&&at(i.prev,i,i.next)>0&&at(e.prev,e,e.next)>0)}function at(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function gi(i,e){return i.x===e.x&&i.y===e.y}function Fl(i,e,t,n){const r=vr(at(i,e,t)),o=vr(at(i,e,n)),s=vr(at(t,n,i)),a=vr(at(t,n,e));return!!(r!==o&&s!==a||r===0&&gr(i,t,e)||o===0&&gr(i,n,e)||s===0&&gr(t,i,n)||a===0&&gr(t,e,n))}function gr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function vr(i){return i>0?1:i<0?-1:0}function hd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Fl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Gi(i,e){return at(i.prev,i,i.next)<0?at(i,e,i.next)>=0&&at(i,i.prev,e)>=0:at(i,e,i.prev)<0||at(i,i.next,e)<0}function fd(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ol(i,e){const t=bs(i.i,i.x,i.y),n=bs(e.i,e.x,e.y),r=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function Aa(i,e,t,n){const r=bs(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Vi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bs(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pd(i,e,t,n){let r=0;for(let o=e,s=t-n;o<t;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}class md{static triangulate(e,t,n=2){return Qu(e,t,n)}}class Kt{static area(e){const t=e.length;let n=0;for(let r=t-1,o=0;o<t;r=o++)n+=e[r].x*e[o].y-e[o].x*e[r].y;return n*.5}static isClockWise(e){return Kt.area(e)<0}static triangulateShape(e,t){const n=[],r=[],o=[];Ta(e),La(n,e);let s=e.length;t.forEach(Ta);for(let c=0;c<t.length;c++)r.push(s),s+=t[c].length,La(n,t[c]);const a=md.triangulate(n,r);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Ta(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function La(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Bs extends kt{constructor(e=new Os([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];s(l)}this.setAttribute("position",new dt(r,3)),this.setAttribute("uv",new dt(o,2)),this.computeVertexNormals();function s(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:gd;let S,w=!1,C,R,E,L;f&&(S=f.getSpacedPoints(u),w=!0,p=!1,C=f.computeFrenetFrames(u,!1),R=new N,E=new N,L=new N),p||(m=0,h=0,v=0,x=0);const M=a.extractPoints(l);let _=M.shape;const U=M.holes;if(!Kt.isClockWise(_)){_=_.reverse();for(let se=0,te=U.length;se<te;se++){const ee=U[se];Kt.isClockWise(ee)&&(U[se]=ee.reverse())}}function k(se){const ee=10000000000000001e-36;let I=se[0];for(let $=1;$<=se.length;$++){const ne=$%se.length,re=se[ne],V=re.x-I.x,ue=re.y-I.y,b=V*V+ue*ue,g=Math.max(Math.abs(re.x),Math.abs(re.y),Math.abs(I.x),Math.abs(I.y)),P=ee*g*g;if(b<=P){se.splice(ne,1),$--;continue}I=re}}k(_),U.forEach(k);const W=U.length,q=_;for(let se=0;se<W;se++){const te=U[se];_=_.concat(te)}function X(se,te,ee){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(te,ee)}const ie=_.length;function H(se,te,ee){let I,$,ne;const re=se.x-te.x,V=se.y-te.y,ue=ee.x-se.x,b=ee.y-se.y,g=re*re+V*V,P=re*b-V*ue;if(Math.abs(P)>Number.EPSILON){const z=Math.sqrt(g),Z=Math.sqrt(ue*ue+b*b),G=te.x-V/z,Se=te.y+re/z,le=ee.x-b/Z,we=ee.y+ue/Z,_e=((le-G)*b-(we-Se)*ue)/(re*b-V*ue);I=G+re*_e-se.x,$=Se+V*_e-se.y;const ae=I*I+$*$;if(ae<=2)return new ye(I,$);ne=Math.sqrt(ae/2)}else{let z=!1;re>Number.EPSILON?ue>Number.EPSILON&&(z=!0):re<-Number.EPSILON?ue<-Number.EPSILON&&(z=!0):Math.sign(V)===Math.sign(b)&&(z=!0),z?(I=-V,$=re,ne=Math.sqrt(g)):(I=re,$=V,ne=Math.sqrt(g/2))}return new ye(I/ne,$/ne)}const ce=[];for(let se=0,te=q.length,ee=te-1,I=se+1;se<te;se++,ee++,I++)ee===te&&(ee=0),I===te&&(I=0),ce[se]=H(q[se],q[ee],q[I]);const me=[];let xe,j=ce.concat();for(let se=0,te=W;se<te;se++){const ee=U[se];xe=[];for(let I=0,$=ee.length,ne=$-1,re=I+1;I<$;I++,ne++,re++)ne===$&&(ne=0),re===$&&(re=0),xe[I]=H(ee[I],ee[ne],ee[re]);me.push(xe),j=j.concat(xe)}let Te;if(m===0)Te=Kt.triangulateShape(q,U);else{const se=[],te=[];for(let ee=0;ee<m;ee++){const I=ee/m,$=h*Math.cos(I*Math.PI/2),ne=v*Math.sin(I*Math.PI/2)+x;for(let re=0,V=q.length;re<V;re++){const ue=X(q[re],ce[re],ne);be(ue.x,ue.y,-$),I===0&&se.push(ue)}for(let re=0,V=W;re<V;re++){const ue=U[re];xe=me[re];const b=[];for(let g=0,P=ue.length;g<P;g++){const z=X(ue[g],xe[g],ne);be(z.x,z.y,-$),I===0&&b.push(z)}I===0&&te.push(b)}}Te=Kt.triangulateShape(se,te)}const Fe=Te.length,Ue=v+x;for(let se=0;se<ie;se++){const te=p?X(_[se],j[se],Ue):_[se];w?(E.copy(C.normals[0]).multiplyScalar(te.x),R.copy(C.binormals[0]).multiplyScalar(te.y),L.copy(S[0]).add(E).add(R),be(L.x,L.y,L.z)):be(te.x,te.y,0)}for(let se=1;se<=u;se++)for(let te=0;te<ie;te++){const ee=p?X(_[te],j[te],Ue):_[te];w?(E.copy(C.normals[se]).multiplyScalar(ee.x),R.copy(C.binormals[se]).multiplyScalar(ee.y),L.copy(S[se]).add(E).add(R),be(L.x,L.y,L.z)):be(ee.x,ee.y,d/u*se)}for(let se=m-1;se>=0;se--){const te=se/m,ee=h*Math.cos(te*Math.PI/2),I=v*Math.sin(te*Math.PI/2)+x;for(let $=0,ne=q.length;$<ne;$++){const re=X(q[$],ce[$],I);be(re.x,re.y,d+ee)}for(let $=0,ne=U.length;$<ne;$++){const re=U[$];xe=me[$];for(let V=0,ue=re.length;V<ue;V++){const b=X(re[V],xe[V],I);w?be(b.x,b.y+S[u-1].y,S[u-1].x+ee):be(b.x,b.y,d+ee)}}}Y(),Q();function Y(){const se=r.length/3;if(p){let te=0,ee=ie*te;for(let I=0;I<Fe;I++){const $=Te[I];ve($[2]+ee,$[1]+ee,$[0]+ee)}te=u+m*2,ee=ie*te;for(let I=0;I<Fe;I++){const $=Te[I];ve($[0]+ee,$[1]+ee,$[2]+ee)}}else{for(let te=0;te<Fe;te++){const ee=Te[te];ve(ee[2],ee[1],ee[0])}for(let te=0;te<Fe;te++){const ee=Te[te];ve(ee[0]+ie*u,ee[1]+ie*u,ee[2]+ie*u)}}n.addGroup(se,r.length/3-se,0)}function Q(){const se=r.length/3;let te=0;ge(q,te),te+=q.length;for(let ee=0,I=U.length;ee<I;ee++){const $=U[ee];ge($,te),te+=$.length}n.addGroup(se,r.length/3-se,1)}function ge(se,te){let ee=se.length;for(;--ee>=0;){const I=ee;let $=ee-1;$<0&&($=se.length-1);for(let ne=0,re=u+m*2;ne<re;ne++){const V=ie*ne,ue=ie*(ne+1),b=te+I+V,g=te+$+V,P=te+$+ue,z=te+I+ue;ze(b,g,P,z)}}}function be(se,te,ee){c.push(se),c.push(te),c.push(ee)}function ve(se,te,ee){je(se),je(te),je(ee);const I=r.length/3,$=T.generateTopUV(n,r,I-3,I-2,I-1);A($[0]),A($[1]),A($[2])}function ze(se,te,ee,I){je(se),je(te),je(I),je(te),je(ee),je(I);const $=r.length/3,ne=T.generateSideWallUV(n,r,$-6,$-3,$-2,$-1);A(ne[0]),A(ne[1]),A(ne[3]),A(ne[1]),A(ne[2]),A(ne[3])}function je(se){r.push(c[se*3+0]),r.push(c[se*3+1]),r.push(c[se*3+2])}function A(se){o.push(se.x),o.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return vd(t,n,e)}static fromJSON(e,t){const n=[];for(let o=0,s=e.shapes.length;o<s;o++){const a=t[e.shapes[o]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new gs[r.type]().fromJSON(r)),new Bs(n,e.options)}}const gd={generateTopUV:function(i,e,t,n,r){const o=e[t*3],s=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new ye(o,s),new ye(a,c),new ye(l,u)]},generateSideWallUV:function(i,e,t,n,r,o){const s=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],p=e[r*3],h=e[r*3+1],v=e[r*3+2],x=e[o*3],m=e[o*3+1],f=e[o*3+2];return Math.abs(a-u)<Math.abs(s-l)?[new ye(s,1-c),new ye(l,1-d),new ye(p,1-v),new ye(x,1-f)]:[new ye(a,1-c),new ye(u,1-d),new ye(h,1-v),new ye(m,1-f)]}};function vd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const o=i[n];t.shapes.push(o.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zi extends kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,d=e/a,p=t/c,h=[],v=[],x=[],m=[];for(let f=0;f<u;f++){const T=f*p-s;for(let S=0;S<l;S++){const w=S*d-o;v.push(w,-T,0),x.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const S=T+l*f,w=T+l*(f+1),C=T+1+l*(f+1),R=T+1+l*f;h.push(S,w,R),h.push(w,C,R)}this.setIndex(h),this.setAttribute("position",new dt(v,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Di extends kt{constructor(e=new Os([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],o=[],s=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(s,2));function l(u){const d=r.length/3,p=u.extractPoints(t);let h=p.shape;const v=p.holes;Kt.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,f=v.length;m<f;m++){const T=v[m];Kt.isClockWise(T)===!0&&(v[m]=T.reverse())}const x=Kt.triangulateShape(h,v);for(let m=0,f=v.length;m<f;m++){const T=v[m];h=h.concat(T)}for(let m=0,f=h.length;m<f;m++){const T=h[m];r.push(T.x,T.y,0),o.push(0,0,1),s.push(T.x,T.y)}for(let m=0,f=x.length;m<f;m++){const T=x[m],S=T[0]+d,w=T[1]+d,C=T[2]+d;n.push(S,w,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _d(t,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const s=t[e.shapes[r]];n.push(s)}return new Di(n,e.curveSegments)}}function _d(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Bl extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bd extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xd extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const go={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class wd{constructor(e,t,n){const r=this;let o=!1,s=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=l.length;d<p;d+=2){const h=l[d],v=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Md=new wd;class ks{constructor(e){this.manager=e!==void 0?e:Md,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const ii=new WeakMap;class yd extends ks{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=go.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let d=ii.get(s);d===void 0&&(d=[],ii.set(s,d)),d.push({onLoad:t,onError:r})}return s}const a=Bi("img");function c(){u(),t&&t(this);const d=ii.get(this)||[];for(let p=0;p<d.length;p++){const h=d[p];h.onLoad&&h.onLoad(this)}ii.delete(this),o.manager.itemEnd(e)}function l(d){u(),r&&r(d),go.remove(`image:${e}`);const p=ii.get(this)||[];for(let h=0;h<p.length;h++){const v=p[h];v.onError&&v.onError(d)}ii.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),go.add(`image:${e}`,a),o.manager.itemStart(e),a.src=e,a}}class Sd extends ks{constructor(e){super(e)}load(e,t,n,r){const o=new gt,s=new yd(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class kl extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zl extends kl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const vo=new lt,Ua=new N,Ca=new N;class Rd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ua.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ua),Ca.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ca),t.updateMatrixWorld(),vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zs extends El{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ed extends Rd{constructor(){super(new zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xs extends kl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Ed}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ad extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Pa(i,e,t,n){const r=Td(n);switch(t){case fl:return i*e;case ml:return i*e/r.components*r.byteLength;case Ts:return i*e/r.components*r.byteLength;case gl:return i*e*2/r.components*r.byteLength;case Ls:return i*e*2/r.components*r.byteLength;case pl:return i*e*3/r.components*r.byteLength;case Xt:return i*e*4/r.components*r.byteLength;case Us:return i*e*4/r.components*r.byteLength;case yr:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vo:case Wo:return Math.max(i,16)*Math.max(e,8)/4;case Go:case Ho:return Math.max(i,8)*Math.max(e,8)/2;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case es:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ts:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ns:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case is:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case rs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case os:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ss:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case as:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ls:case cs:case us:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ds:case hs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fs:case ps:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Td(i){switch(i){case Qt:case cl:return{byteLength:1,components:1};case Ii:case ul:case Wi:return{byteLength:2,components:1};case Es:case As:return{byteLength:2,components:4};case zn:case Rs:case dn:return{byteLength:4,components:1};case dl:case hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ss}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ss);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gl(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Ld(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((h,v)=>h.start-v.start);let p=0;for(let h=1;h<d.length;h++){const v=d[p],x=d[h];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++p,d[p]=x)}d.length=p+1;for(let h=0,v=d.length;h<v;h++){const x=d[h];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:o,update:s}}var Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cd=`#ifdef USE_ALPHAHASH
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
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
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
#endif`,Od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
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
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hd=`#ifdef USE_IRIDESCENCE
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
#endif`,Wd=`#ifdef USE_BUMPMAP
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$d=`#define PI 3.141592653589793
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
} // validated`,eh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,th=`vec3 transformedNormal = objectNormal;
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
#endif`,nh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ih=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ah=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lh=`#ifdef USE_ENVMAP
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
#endif`,ch=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uh=`#ifdef USE_ENVMAP
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
#endif`,dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ph=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vh=`#ifdef USE_GRADIENTMAP
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
}`,_h=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wh=`uniform bool receiveShadow;
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
#endif`,Mh=`#ifdef USE_ENVMAP
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
#endif`,yh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ah=`PhysicalMaterial material;
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
#endif`,Th=`struct PhysicalMaterial {
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
}`,Lh=`
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
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ph=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ih=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kh=`#if defined( USE_POINTS_UV )
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
#endif`,zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xh=`#ifdef USE_MORPHTARGETS
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
#endif`,qh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qh=`#ifdef USE_NORMALMAP
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
#endif`,$h=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,of=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mf=`float getShadowMask() {
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
}`,gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,_f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,Rf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cf=`uniform sampler2D t2D;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`#ifdef ENVMAP_TYPE_CUBE
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`#include <common>
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
}`,Of=`#if DEPTH_PACKING == 3200
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
}`,Bf=`#define DISTANCE
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
}`,kf=`#define DISTANCE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`uniform float scale;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Wf=`#include <common>
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
}`,Xf=`uniform vec3 diffuse;
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
}`,qf=`#define LAMBERT
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
}`,Yf=`#define LAMBERT
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
}`,Zf=`#define MATCAP
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
}`,Kf=`#define MATCAP
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
}`,Jf=`#define NORMAL
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
}`,jf=`#define NORMAL
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
}`,Qf=`#define PHONG
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
}`,$f=`#define PHONG
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
}`,ep=`#define STANDARD
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
}`,tp=`#define STANDARD
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
}`,np=`#define TOON
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
}`,ip=`#define TOON
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
}`,rp=`uniform float size;
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
}`,op=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,ap=`uniform vec3 color;
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
}`,lp=`uniform float rotation;
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
}`,cp=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Ud,alphahash_pars_fragment:Cd,alphamap_fragment:Pd,alphamap_pars_fragment:Dd,alphatest_fragment:Id,alphatest_pars_fragment:Nd,aomap_fragment:Fd,aomap_pars_fragment:Od,batching_pars_vertex:Bd,batching_vertex:kd,begin_vertex:zd,beginnormal_vertex:Gd,bsdfs:Vd,iridescence_fragment:Hd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:Xd,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:Zd,color_fragment:Kd,color_pars_fragment:Jd,color_pars_vertex:jd,color_vertex:Qd,common:$d,cube_uv_reflection_fragment:eh,defaultnormal_vertex:th,displacementmap_pars_vertex:nh,displacementmap_vertex:ih,emissivemap_fragment:rh,emissivemap_pars_fragment:oh,colorspace_fragment:sh,colorspace_pars_fragment:ah,envmap_fragment:lh,envmap_common_pars_fragment:ch,envmap_pars_fragment:uh,envmap_pars_vertex:dh,envmap_physical_pars_fragment:Mh,envmap_vertex:hh,fog_vertex:fh,fog_pars_vertex:ph,fog_fragment:mh,fog_pars_fragment:gh,gradientmap_pars_fragment:vh,lightmap_pars_fragment:_h,lights_lambert_fragment:bh,lights_lambert_pars_fragment:xh,lights_pars_begin:wh,lights_toon_fragment:yh,lights_toon_pars_fragment:Sh,lights_phong_fragment:Rh,lights_phong_pars_fragment:Eh,lights_physical_fragment:Ah,lights_physical_pars_fragment:Th,lights_fragment_begin:Lh,lights_fragment_maps:Uh,lights_fragment_end:Ch,logdepthbuf_fragment:Ph,logdepthbuf_pars_fragment:Dh,logdepthbuf_pars_vertex:Ih,logdepthbuf_vertex:Nh,map_fragment:Fh,map_pars_fragment:Oh,map_particle_fragment:Bh,map_particle_pars_fragment:kh,metalnessmap_fragment:zh,metalnessmap_pars_fragment:Gh,morphinstance_vertex:Vh,morphcolor_vertex:Hh,morphnormal_vertex:Wh,morphtarget_pars_vertex:Xh,morphtarget_vertex:qh,normal_fragment_begin:Yh,normal_fragment_maps:Zh,normal_pars_fragment:Kh,normal_pars_vertex:Jh,normal_vertex:jh,normalmap_pars_fragment:Qh,clearcoat_normal_fragment_begin:$h,clearcoat_normal_fragment_maps:ef,clearcoat_pars_fragment:tf,iridescence_pars_fragment:nf,opaque_fragment:rf,packing:of,premultiplied_alpha_fragment:sf,project_vertex:af,dithering_fragment:lf,dithering_pars_fragment:cf,roughnessmap_fragment:uf,roughnessmap_pars_fragment:df,shadowmap_pars_fragment:hf,shadowmap_pars_vertex:ff,shadowmap_vertex:pf,shadowmask_pars_fragment:mf,skinbase_vertex:gf,skinning_pars_vertex:vf,skinning_vertex:_f,skinnormal_vertex:bf,specularmap_fragment:xf,specularmap_pars_fragment:wf,tonemapping_fragment:Mf,tonemapping_pars_fragment:yf,transmission_fragment:Sf,transmission_pars_fragment:Rf,uv_pars_fragment:Ef,uv_pars_vertex:Af,uv_vertex:Tf,worldpos_vertex:Lf,background_vert:Uf,background_frag:Cf,backgroundCube_vert:Pf,backgroundCube_frag:Df,cube_vert:If,cube_frag:Nf,depth_vert:Ff,depth_frag:Of,distanceRGBA_vert:Bf,distanceRGBA_frag:kf,equirect_vert:zf,equirect_frag:Gf,linedashed_vert:Vf,linedashed_frag:Hf,meshbasic_vert:Wf,meshbasic_frag:Xf,meshlambert_vert:qf,meshlambert_frag:Yf,meshmatcap_vert:Zf,meshmatcap_frag:Kf,meshnormal_vert:Jf,meshnormal_frag:jf,meshphong_vert:Qf,meshphong_frag:$f,meshphysical_vert:ep,meshphysical_frag:tp,meshtoon_vert:np,meshtoon_frag:ip,points_vert:rp,points_frag:op,shadow_vert:sp,shadow_frag:ap,sprite_vert:lp,sprite_frag:cp},Ee={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Yt={basic:{uniforms:wt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:wt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:wt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:wt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:wt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:wt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:wt([Ee.points,Ee.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:wt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:wt([Ee.common,Ee.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:wt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:wt([Ee.sprite,Ee.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:wt([Ee.common,Ee.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:wt([Ee.lights,Ee.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Yt.physical={uniforms:wt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const _r={r:0,b:0,g:0},Cn=new $t,up=new lt;function dp(i,e,t,n,r,o,s){const a=new Ze(0);let c=o===!0?0:1,l,u,d=null,p=0,h=null;function v(S){let w=S.isScene===!0?S.background:null;return w&&w.isTexture&&(w=(S.backgroundBlurriness>0?t:e).get(w)),w}function x(S){let w=!1;const C=v(S);C===null?f(a,c):C&&C.isColor&&(f(C,1),w=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,w){const C=v(w);C&&(C.isCubeTexture||C.mapping===Nr)?(u===void 0&&(u=new ut(new Yi(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:mi(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Cn.copy(w.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(up.makeRotationFromEuler(Cn)),u.material.toneMapped=Je.getTransfer(C.colorSpace)!==et,(d!==C||p!==C.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=C,p=C.version,h=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new ut(new Zi(2,2),new gn({name:"BackgroundMaterial",uniforms:mi(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Je.getTransfer(C.colorSpace)!==et,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||p!==C.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=C,p=C.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,w){S.getRGB(_r,Rl(i)),n.buffers.color.setClear(_r.r,_r.g,_r.b,w,s)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),c=w,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:x,addToRenderList:m,dispose:T}}function hp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let o=r,s=!1;function a(_,U,F,k,W){let q=!1;const X=d(k,F,U);o!==X&&(o=X,l(o.object)),q=h(_,k,F,W),q&&v(_,k,F,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,w(_,U,F,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function d(_,U,F){const k=F.wireframe===!0;let W=n[_.id];W===void 0&&(W={},n[_.id]=W);let q=W[U.id];q===void 0&&(q={},W[U.id]=q);let X=q[k];return X===void 0&&(X=p(c()),q[k]=X),X}function p(_){const U=[],F=[],k=[];for(let W=0;W<t;W++)U[W]=0,F[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:k,object:_,attributes:{},index:null}}function h(_,U,F,k){const W=o.attributes,q=U.attributes;let X=0;const ie=F.getAttributes();for(const H in ie)if(ie[H].location>=0){const me=W[H];let xe=q[H];if(xe===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(xe=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(xe=_.instanceColor)),me===void 0||me.attribute!==xe||xe&&me.data!==xe.data)return!0;X++}return o.attributesNum!==X||o.index!==k}function v(_,U,F,k){const W={},q=U.attributes;let X=0;const ie=F.getAttributes();for(const H in ie)if(ie[H].location>=0){let me=q[H];me===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(me=_.instanceColor));const xe={};xe.attribute=me,me&&me.data&&(xe.data=me.data),W[H]=xe,X++}o.attributes=W,o.attributesNum=X,o.index=k}function x(){const _=o.newAttributes;for(let U=0,F=_.length;U<F;U++)_[U]=0}function m(_){f(_,0)}function f(_,U){const F=o.newAttributes,k=o.enabledAttributes,W=o.attributeDivisors;F[_]=1,k[_]===0&&(i.enableVertexAttribArray(_),k[_]=1),W[_]!==U&&(i.vertexAttribDivisor(_,U),W[_]=U)}function T(){const _=o.newAttributes,U=o.enabledAttributes;for(let F=0,k=U.length;F<k;F++)U[F]!==_[F]&&(i.disableVertexAttribArray(F),U[F]=0)}function S(_,U,F,k,W,q,X){X===!0?i.vertexAttribIPointer(_,U,F,W,q):i.vertexAttribPointer(_,U,F,k,W,q)}function w(_,U,F,k){x();const W=k.attributes,q=F.getAttributes(),X=U.defaultAttributeValues;for(const ie in q){const H=q[ie];if(H.location>=0){let ce=W[ie];if(ce===void 0&&(ie==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),ie==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor)),ce!==void 0){const me=ce.normalized,xe=ce.itemSize,j=e.get(ce);if(j===void 0)continue;const Te=j.buffer,Fe=j.type,Ue=j.bytesPerElement,Y=Fe===i.INT||Fe===i.UNSIGNED_INT||ce.gpuType===Rs;if(ce.isInterleavedBufferAttribute){const Q=ce.data,ge=Q.stride,be=ce.offset;if(Q.isInstancedInterleavedBuffer){for(let ve=0;ve<H.locationSize;ve++)f(H.location+ve,Q.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ve=0;ve<H.locationSize;ve++)m(H.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let ve=0;ve<H.locationSize;ve++)S(H.location+ve,xe/H.locationSize,Fe,me,ge*Ue,(be+xe/H.locationSize*ve)*Ue,Y)}else{if(ce.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)f(H.location+Q,ce.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let Q=0;Q<H.locationSize;Q++)S(H.location+Q,xe/H.locationSize,Fe,me,xe*Ue,xe/H.locationSize*Q*Ue,Y)}}else if(X!==void 0){const me=X[ie];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(H.location,me);break;case 3:i.vertexAttrib3fv(H.location,me);break;case 4:i.vertexAttrib4fv(H.location,me);break;default:i.vertexAttrib1fv(H.location,me)}}}}T()}function C(){L();for(const _ in n){const U=n[_];for(const F in U){const k=U[F];for(const W in k)u(k[W].object),delete k[W];delete U[F]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;const U=n[_.id];for(const F in U){const k=U[F];for(const W in k)u(k[W].object),delete k[W];delete U[F]}delete n[_.id]}function E(_){for(const U in n){const F=n[U];if(F[_.id]===void 0)continue;const k=F[_.id];for(const W in k)u(k[W].object),delete k[W];delete F[_.id]}}function L(){M(),s=!0,o!==r&&(o=r,l(o.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function fp(i,e,t){let n;function r(l){n=l}function o(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function s(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let h=0;for(let v=0;v<d;v++)h+=u[v];t.update(h,n,1)}function c(l,u,d,p){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<l.length;v++)s(l[v],u[v],p[v]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,u,0,p,0,d);let v=0;for(let x=0;x<d;x++)v+=u[x]*p[x];t.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function pp(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(E){return!(E!==Xt&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const L=E===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Qt&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==dn&&!L)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:w,vertexTextures:C,maxSamples:R}}function mp(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new Dn,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const h=d.length!==0||p||n!==0||r;return r=p,n=d.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,h){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||v===null||v.length===0||o&&!m)o?u(null):l();else{const T=o?0:n,S=T*4;let w=f.clippingState||null;c.value=w,w=u(v,p,S,h);for(let C=0;C!==S;++C)w[C]=t[C];f.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,h,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,v!==!0||m===null){const f=h+x*4,T=p.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,w=h;S!==x;++S,w+=4)s.copy(d[S]).applyMatrix4(T,a),s.normal.toArray(m,w),m[w+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function gp(i){let e=new WeakMap;function t(s,a){return a===Oo?s.mapping=di:a===Bo&&(s.mapping=hi),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===Oo||a===Bo)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new Du(c.height);return l.fromEquirectangularTexture(i,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const si=4,Da=[.125,.215,.35,.446,.526,.582],On=20,_o=new zs,Ia=new Ze;let bo=null,xo=0,wo=0,Mo=!1;const In=(1+Math.sqrt(5))/2,ri=1/In,Na=[new N(-In,ri,0),new N(In,ri,0),new N(-ri,0,In),new N(ri,0,In),new N(0,In,-ri),new N(0,In,ri),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],vp=new N;class Fa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,o={}){const{size:s=256,position:a=vp}=o;bo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bo,xo,wo),this._renderer.xr.enabled=Mo,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Wi,format:Xt,colorSpace:fi,depthBuffer:!1},r=Oa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oa(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_p(o)),this._blurMaterial=bp(o,e,t)}return r}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,_o)}_sceneToCubeUV(e,t,n,r,o){const c=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,h=d.toneMapping;d.getClearColor(Ia),d.toneMapping=hn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const x=new pi({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),m=new ut(new Yi,x);let f=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,f=!0):(x.color.copy(Ia),f=!0);for(let S=0;S<6;S++){const w=S%3;w===0?(c.up.set(0,l[S],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[S],o.y,o.z)):w===1?(c.up.set(0,0,l[S]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[S],o.z)):(c.up.set(0,l[S],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[S]));const C=this._cubeSize;br(r,w*C,S>2?C:0,C,C),d.setRenderTarget(r),f&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=p,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===di||e.mapping===hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ba());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new ut(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;br(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,_o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Na[(r-o-1)%Na.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ut(this._lodPlanes[r],l),p=l.uniforms,h=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*On-1),x=o/v,m=isFinite(o)?1+Math.floor(u*x):On;m>On&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${On}`);const f=[];let T=0;for(let E=0;E<On;++E){const L=E/x,M=Math.exp(-L*L/2);f.push(M),E===0?T+=M:E<m&&(T+=2*M)}for(let E=0;E<f.length;E++)f[E]=f[E]/T;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=s==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=v,p.mipInt.value=S-n;const w=this._sizeLods[r],C=3*w*(r>S-si?r-S+si:0),R=4*(this._cubeSize-w);br(t,C,R,3*w,2*w),c.setRenderTarget(t),c.render(d,_o)}}function _p(i){const e=[],t=[],n=[];let r=i;const o=i-si+1+Da.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let c=1/a;s>i-si?c=Da[s-i+si-1]:s===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,p=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,v=6,x=3,m=2,f=1,T=new Float32Array(x*v*h),S=new Float32Array(m*v*h),w=new Float32Array(f*v*h);for(let R=0;R<h;R++){const E=R%3*2/3-1,L=R>2?0:-1,M=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];T.set(M,x*v*R),S.set(p,m*v*R);const _=[R,R,R,R,R,R];w.set(_,f*v*R)}const C=new kt;C.setAttribute("position",new jt(T,x)),C.setAttribute("uv",new jt(S,m)),C.setAttribute("faceIndex",new jt(w,f)),e.push(C),r>si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oa(i,e,t){const n=new Gn(i,e,t);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function bp(i,e,t){const n=new Float32Array(On),r=new N(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ba(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function ka(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Gs(){return`

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
	`}function xp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Oo||c===Bo,u=c===di||c===hi;if(l||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Fa(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Fa(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function wp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ki("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Mp(i,e,t,n){const r={},o=new WeakMap;function s(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",s),delete r[p.id];const h=o.get(p);h&&(e.remove(h),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const h in p)e.update(p[h],i.ARRAY_BUFFER)}function l(d){const p=[],h=d.index,v=d.attributes.position;let x=0;if(h!==null){const T=h.array;x=h.version;for(let S=0,w=T.length;S<w;S+=3){const C=T[S+0],R=T[S+1],E=T[S+2];p.push(C,R,R,E,E,C)}}else if(v!==void 0){const T=v.array;x=v.version;for(let S=0,w=T.length/3-1;S<w;S+=3){const C=S+0,R=S+1,E=S+2;p.push(C,R,R,E,E,C)}}else return;const m=new(bl(p)?Sl:yl)(p,1);m.version=x;const f=o.get(d);f&&e.remove(f),o.set(d,m)}function u(d){const p=o.get(d);if(p){const h=d.index;h!==null&&p.version<h.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function yp(i,e,t){let n;function r(p){n=p}let o,s;function a(p){o=p.type,s=p.bytesPerElement}function c(p,h){i.drawElements(n,h,o,p*s),t.update(h,n,1)}function l(p,h,v){v!==0&&(i.drawElementsInstanced(n,h,o,p*s,v),t.update(h,n,v))}function u(p,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,o,p,0,v);let m=0;for(let f=0;f<v;f++)m+=h[f];t.update(m,n,1)}function d(p,h,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/s,h[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,o,p,0,x,0,v);let f=0;for(let T=0;T<v;T++)f+=h[T]*x[T];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Sp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Rp(i,e,t){const n=new WeakMap,r=new st;function o(s,a,c){const l=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=n.get(a);if(p===void 0||p.count!==d){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};p!==void 0&&p.texture.dispose();const h=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;h===!0&&(S=1),v===!0&&(S=2),x===!0&&(S=3);let w=a.attributes.position.count*S,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*C*4*d),E=new xl(R,w,C,d);E.type=dn,E.needsUpdate=!0;const L=S*4;for(let _=0;_<d;_++){const U=m[_],F=f[_],k=T[_],W=w*C*4*_;for(let q=0;q<U.count;q++){const X=q*L;h===!0&&(r.fromBufferAttribute(U,q),R[W+X+0]=r.x,R[W+X+1]=r.y,R[W+X+2]=r.z,R[W+X+3]=0),v===!0&&(r.fromBufferAttribute(F,q),R[W+X+4]=r.x,R[W+X+5]=r.y,R[W+X+6]=r.z,R[W+X+7]=0),x===!0&&(r.fromBufferAttribute(k,q),R[W+X+8]=r.x,R[W+X+9]=r.y,R[W+X+10]=r.z,R[W+X+11]=k.itemSize===4?r.w:1)}}p={count:d,texture:E,size:new ye(w,C)},n.set(a,p),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let h=0;for(let x=0;x<l.length;x++)h+=l[x];const v=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:o}}function Ep(i,e,t,n){let r=new WeakMap;function o(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function s(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:s}}const Vl=new gt,za=new Tl(1,1),Hl=new xl,Wl=new mu,Xl=new Al,Ga=[],Va=[],Ha=new Float32Array(16),Wa=new Float32Array(9),Xa=new Float32Array(4);function wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=Ga[r];if(o===void 0&&(o=new Float32Array(r),Ga[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Br(i,e){let t=Va[e];t===void 0&&(t=new Int32Array(e),Va[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ap(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Cp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Xa.set(n),i.uniformMatrix2fv(this.addr,!1,Xa),pt(t,n)}}function Pp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Wa.set(n),i.uniformMatrix3fv(this.addr,!1,Wa),pt(t,n)}}function Dp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Ha.set(n),i.uniformMatrix4fv(this.addr,!1,Ha),pt(t,n)}}function Ip(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function Bp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Vp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(za.compareFunction=_l,o=za):o=Vl,t.setTexture2D(e||o,r)}function Hp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wl,r)}function Wp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Xl,r)}function Xp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hl,r)}function qp(i){switch(i){case 5126:return Ap;case 35664:return Tp;case 35665:return Lp;case 35666:return Up;case 35674:return Cp;case 35675:return Pp;case 35676:return Dp;case 5124:case 35670:return Ip;case 35667:case 35671:return Np;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return Bp;case 36294:return kp;case 36295:return zp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}function Yp(i,e){i.uniform1fv(this.addr,e)}function Zp(i,e){const t=wi(e,this.size,2);i.uniform2fv(this.addr,t)}function Kp(i,e){const t=wi(e,this.size,3);i.uniform3fv(this.addr,t)}function Jp(i,e){const t=wi(e,this.size,4);i.uniform4fv(this.addr,t)}function jp(i,e){const t=wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qp(i,e){const t=wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $p(i,e){const t=wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function em(i,e){i.uniform1iv(this.addr,e)}function tm(i,e){i.uniform2iv(this.addr,e)}function nm(i,e){i.uniform3iv(this.addr,e)}function im(i,e){i.uniform4iv(this.addr,e)}function rm(i,e){i.uniform1uiv(this.addr,e)}function om(i,e){i.uniform2uiv(this.addr,e)}function sm(i,e){i.uniform3uiv(this.addr,e)}function am(i,e){i.uniform4uiv(this.addr,e)}function lm(i,e,t){const n=this.cache,r=e.length,o=Br(t,r);ft(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Vl,o[s])}function cm(i,e,t){const n=this.cache,r=e.length,o=Br(t,r);ft(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Wl,o[s])}function um(i,e,t){const n=this.cache,r=e.length,o=Br(t,r);ft(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Xl,o[s])}function dm(i,e,t){const n=this.cache,r=e.length,o=Br(t,r);ft(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Hl,o[s])}function hm(i){switch(i){case 5126:return Yp;case 35664:return Zp;case 35665:return Kp;case 35666:return Jp;case 35674:return jp;case 35675:return Qp;case 35676:return $p;case 5124:case 35670:return em;case 35667:case 35671:return tm;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return rm;case 36294:return om;case 36295:return sm;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}class fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qp(t.type)}}class pm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hm(t.type)}}class mm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function qa(i,e){i.seq.push(e),i.map[e.id]=e}function gm(i,e,t){const n=i.name,r=n.length;for(yo.lastIndex=0;;){const o=yo.exec(n),s=yo.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){qa(t,l===void 0?new fm(a,i,e):new pm(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new mm(a),qa(t,d)),t=d}}}class Ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);gm(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Ya(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const vm=37297;let _m=0;function bm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const Za=new We;function xm(i){Je._getMatrix(Za,Je.workingColorSpace,i);const e=`mat3( ${Za.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Ur:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ka(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+bm(i.getShaderSource(e),a)}else return o}function wm(i,e){const t=xm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Mm(i,e){let t;switch(e){case Hc:t="Linear";break;case Wc:t="Reinhard";break;case Xc:t="Cineon";break;case qc:t="ACESFilmic";break;case Zc:t="AgX";break;case Kc:t="Neutral";break;case Yc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xr=new N;function ym(){Je.getLuminanceCoefficients(xr);const i=xr.x.toFixed(4),e=xr.y.toFixed(4),t=xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function Rm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Em(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Li(i){return i!==""}function Ja(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ja(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function ws(i){return i.replace(Am,Lm)}const Tm=new Map;function Lm(i,e){let t=Xe[e];if(t===void 0){const n=Tm.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ws(t)}const Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qa(i){return i.replace(Um,Cm)}function Cm(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function $a(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Pm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Dm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case hi:e="ENVMAP_TYPE_CUBE";break;case Nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Im(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:e="ENVMAP_MODE_REFRACTION";break}return e}function Nm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case al:e="ENVMAP_BLENDING_MULTIPLY";break;case Gc:e="ENVMAP_BLENDING_MIX";break;case Vc:e="ENVMAP_BLENDING_ADD";break}return e}function Fm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Om(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const c=Pm(t),l=Dm(t),u=Im(t),d=Nm(t),p=Fm(t),h=Sm(t),v=Rm(o),x=r.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Li).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Li).join(`
`),f.length>0&&(f+=`
`)):(m=[$a(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),f=[$a(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==hn?Mm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,wm("linearToOutputTexel",t.outputColorSpace),ym(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),s=ws(s),s=Ja(s,t),s=ja(s,t),a=ws(a),a=Ja(a,t),a=ja(a,t),s=Qa(s),a=Qa(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===la?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===la?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=T+m+s,w=T+f+a,C=Ya(r,r.VERTEX_SHADER,S),R=Ya(r,r.FRAGMENT_SHADER,w);r.attachShader(x,C),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function E(U){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(x)||"",k=r.getShaderInfoLog(C)||"",W=r.getShaderInfoLog(R)||"",q=F.trim(),X=k.trim(),ie=W.trim();let H=!0,ce=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,C,R);else{const me=Ka(r,C,"vertex"),xe=Ka(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+q+`
`+me+`
`+xe)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(X===""||ie==="")&&(ce=!1);ce&&(U.diagnostics={runnable:H,programLog:q,vertexShader:{log:X,prefix:m},fragmentShader:{log:ie,prefix:f}})}r.deleteShader(C),r.deleteShader(R),L=new Ar(r,x),M=Em(r,x)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,vm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_m++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}let Bm=0;class km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zm(e),t.set(e,n)),n}}class zm{constructor(e){this.id=Bm++,this.code=e,this.usedTimes=0}}function Gm(i,e,t,n,r,o,s){const a=new wl,c=new km,l=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let h=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,_,U,F,k){const W=F.fog,q=k.geometry,X=M.isMeshStandardMaterial?F.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),H=ie&&ie.mapping===Nr?ie.image.height:null,ce=v[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const me=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xe=me!==void 0?me.length:0;let j=0;q.morphAttributes.position!==void 0&&(j=1),q.morphAttributes.normal!==void 0&&(j=2),q.morphAttributes.color!==void 0&&(j=3);let Te,Fe,Ue,Y;if(ce){const Qe=Yt[ce];Te=Qe.vertexShader,Fe=Qe.fragmentShader}else Te=M.vertexShader,Fe=M.fragmentShader,c.update(M),Ue=c.getVertexShaderID(M),Y=c.getFragmentShaderID(M);const Q=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),be=k.isInstancedMesh===!0,ve=k.isBatchedMesh===!0,ze=!!M.map,je=!!M.matcap,A=!!ie,se=!!M.aoMap,te=!!M.lightMap,ee=!!M.bumpMap,I=!!M.normalMap,$=!!M.displacementMap,ne=!!M.emissiveMap,re=!!M.metalnessMap,V=!!M.roughnessMap,ue=M.anisotropy>0,b=M.clearcoat>0,g=M.dispersion>0,P=M.iridescence>0,z=M.sheen>0,Z=M.transmission>0,G=ue&&!!M.anisotropyMap,Se=b&&!!M.clearcoatMap,le=b&&!!M.clearcoatNormalMap,we=b&&!!M.clearcoatRoughnessMap,_e=P&&!!M.iridescenceMap,ae=P&&!!M.iridescenceThicknessMap,de=z&&!!M.sheenColorMap,Pe=z&&!!M.sheenRoughnessMap,De=!!M.specularMap,Re=!!M.specularColorMap,Ve=!!M.specularIntensityMap,D=Z&&!!M.transmissionMap,he=Z&&!!M.thicknessMap,Me=!!M.gradientMap,Ce=!!M.alphaMap,fe=M.alphaTest>0,oe=!!M.alphaHash,Ne=!!M.extensions;let He=hn;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(He=i.toneMapping);const nt={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:Te,fragmentShader:Fe,defines:M.defines,customVertexShaderID:Ue,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:ve,batchingColor:ve&&k._colorsTexture!==null,instancing:be,instancingColor:be&&k.instanceColor!==null,instancingMorph:be&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:fi,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:je,envMap:A,envMapMode:A&&ie.mapping,envMapCubeUVHeight:H,aoMap:se,lightMap:te,bumpMap:ee,normalMap:I,displacementMap:p&&$,emissiveMap:ne,normalMapObjectSpace:I&&M.normalMapType===$c,normalMapTangentSpace:I&&M.normalMapType===vl,metalnessMap:re,roughnessMap:V,anisotropy:ue,anisotropyMap:G,clearcoat:b,clearcoatMap:Se,clearcoatNormalMap:le,clearcoatRoughnessMap:we,dispersion:g,iridescence:P,iridescenceMap:_e,iridescenceThicknessMap:ae,sheen:z,sheenColorMap:de,sheenRoughnessMap:Pe,specularMap:De,specularColorMap:Re,specularIntensityMap:Ve,transmission:Z,transmissionMap:D,thicknessMap:he,gradientMap:Me,opaque:M.transparent===!1&&M.blending===li&&M.alphaToCoverage===!1,alphaMap:Ce,alphaTest:fe,alphaHash:oe,combine:M.combine,mapUv:ze&&x(M.map.channel),aoMapUv:se&&x(M.aoMap.channel),lightMapUv:te&&x(M.lightMap.channel),bumpMapUv:ee&&x(M.bumpMap.channel),normalMapUv:I&&x(M.normalMap.channel),displacementMapUv:$&&x(M.displacementMap.channel),emissiveMapUv:ne&&x(M.emissiveMap.channel),metalnessMapUv:re&&x(M.metalnessMap.channel),roughnessMapUv:V&&x(M.roughnessMap.channel),anisotropyMapUv:G&&x(M.anisotropyMap.channel),clearcoatMapUv:Se&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(M.sheenRoughnessMap.channel),specularMapUv:De&&x(M.specularMap.channel),specularColorMapUv:Re&&x(M.specularColorMap.channel),specularIntensityMapUv:Ve&&x(M.specularIntensityMap.channel),transmissionMapUv:D&&x(M.transmissionMap.channel),thicknessMapUv:he&&x(M.thicknessMap.channel),alphaMapUv:Ce&&x(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(I||ue),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(ze||Ce),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:j,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===et,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ot,flipSided:M.side===yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ne&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&M.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function f(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)_.push(U),_.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(T(_,M),S(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function T(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function S(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function w(M){const _=v[M.type];let U;if(_){const F=Yt[_];U=Lu.clone(F.uniforms)}else U=M.uniforms;return U}function C(M,_){let U;for(let F=0,k=u.length;F<k;F++){const W=u[F];if(W.cacheKey===_){U=W,++U.usedTimes;break}}return U===void 0&&(U=new Om(i,_,M,o),u.push(U)),U}function R(M){if(--M.usedTimes===0){const _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function E(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:w,acquireProgram:C,releaseProgram:R,releaseShaderCache:E,programs:u,dispose:L}}function Vm(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,c){i.get(s)[a]=c}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function Hm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function el(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tl(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d,p,h,v,x,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:h,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=h,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function a(d,p,h,v,x,m){const f=s(d,p,h,v,x,m);h.transmission>0?n.push(f):h.transparent===!0?r.push(f):t.push(f)}function c(d,p,h,v,x,m){const f=s(d,p,h,v,x,m);h.transmission>0?n.unshift(f):h.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,p){t.length>1&&t.sort(d||Hm),n.length>1&&n.sort(p||el),r.length>1&&r.sort(p||el)}function u(){for(let d=e,p=i.length;d<p;d++){const h=i[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:c,finish:u,sort:l}}function Wm(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new tl,i.set(n,[s])):r>=o.length?(s=new tl,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ze};break;case"SpotLight":t={position:new N,direction:new N,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function qm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ym=0;function Zm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Km(i){const e=new Xm,t=qm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,o=new lt,s=new lt;function a(l){let u=0,d=0,p=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,v=0,x=0,m=0,f=0,T=0,S=0,w=0,C=0,R=0,E=0;l.sort(Zm);for(let M=0,_=l.length;M<_;M++){const U=l[M],F=U.color,k=U.intensity,W=U.distance,q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=F.r*k,d+=F.g*k,p+=F.b*k;else if(U.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(U.sh.coefficients[X],k);E++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ie=U.shadow,H=t.get(U);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,n.directionalShadow[h]=H,n.directionalShadowMap[h]=q,n.directionalShadowMatrix[h]=U.shadow.matrix,T++}n.directional[h]=X,h++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(F).multiplyScalar(k),X.distance=W,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,n.spot[x]=X;const ie=U.shadow;if(U.map&&(n.spotLightMap[C]=U.map,C++,ie.updateMatrices(U),U.castShadow&&R++),n.spotLightMatrix[x]=ie.matrix,U.castShadow){const H=t.get(U);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=q,w++}x++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(F).multiplyScalar(k),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=X,m++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const ie=U.shadow,H=t.get(U);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,H.shadowCameraNear=ie.camera.near,H.shadowCameraFar=ie.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=q,n.pointShadowMatrix[v]=U.shadow.matrix,S++}n.point[v]=X,v++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(k),X.groundColor.copy(U.groundColor).multiplyScalar(k),n.hemi[f]=X,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;const L=n.hash;(L.directionalLength!==h||L.pointLength!==v||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==T||L.numPointShadows!==S||L.numSpotShadows!==w||L.numSpotMaps!==C||L.numLightProbes!==E)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=w+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,L.directionalLength=h,L.pointLength=v,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=T,L.numPointShadows=S,L.numSpotShadows=w,L.numSpotMaps=C,L.numLightProbes=E,n.version=Ym++)}function c(l,u){let d=0,p=0,h=0,v=0,x=0;const m=u.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const S=l[f];if(S.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),d++}else if(S.isSpotLight){const w=n.spot[h];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),h++}else if(S.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),s.identity(),o.copy(S.matrixWorld),o.premultiply(m),s.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),v++}else if(S.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function nl(i){const e=new Km(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function s(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function Jm(i){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new nl(i),e.set(r,[a])):o>=s.length?(a=new nl(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qm=`uniform sampler2D shadow_pass;
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
}`;function $m(i,e,t){let n=new Is;const r=new ye,o=new ye,s=new st,a=new bd({depthPacking:Qc}),c=new xd,l={},u=t.maxTextureSize,d={[mn]:yt,[yt]:mn,[Ot]:Ot},p=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:jm,fragmentShader:Qm}),h=p.clone();h.defines.HORIZONTAL_PASS=1;const v=new kt;v.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ut(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let f=this.type;this.render=function(R,E,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Sn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=f!==cn&&this.type===cn,W=f===cn&&this.type!==cn;for(let q=0,X=R.length;q<X;q++){const ie=R[q],H=ie.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ce=H.getFrameExtents();if(r.multiply(ce),o.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/ce.x),r.x=o.x*ce.x,H.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/ce.y),r.y=o.y*ce.y,H.mapSize.y=o.y)),H.map===null||k===!0||W===!0){const xe=this.type!==cn?{minFilter:Pt,magFilter:Pt}:{};H.map!==null&&H.map.dispose(),H.map=new Gn(r.x,r.y,xe),H.map.texture.name=ie.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const me=H.getViewportCount();for(let xe=0;xe<me;xe++){const j=H.getViewport(xe);s.set(o.x*j.x,o.y*j.y,o.x*j.z,o.y*j.w),F.viewport(s),H.updateMatrices(ie,xe),n=H.getFrustum(),w(E,L,H.camera,ie,this.type)}H.isPointLightShadow!==!0&&this.type===cn&&T(H,L),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,U)};function T(R,E){const L=e.update(x);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Gn(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(E,null,L,p,x,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(E,null,L,h,x,null)}function S(R,E,L,M){let _=null;const U=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)_=U;else if(_=L.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const F=_.uuid,k=E.uuid;let W=l[F];W===void 0&&(W={},l[F]=W);let q=W[k];q===void 0&&(q=_.clone(),W[k]=q,E.addEventListener("dispose",C)),_=q}if(_.visible=E.visible,_.wireframe=E.wireframe,M===cn?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:d[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=i.properties.get(_);F.light=L}return _}function w(R,E,L,M,_){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===cn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const k=e.update(R),W=R.material;if(Array.isArray(W)){const q=k.groups;for(let X=0,ie=q.length;X<ie;X++){const H=q[X],ce=W[H.materialIndex];if(ce&&ce.visible){const me=S(R,ce,M,_);R.onBeforeShadow(i,R,E,L,k,me,H),i.renderBufferDirect(L,null,k,me,R,H),R.onAfterShadow(i,R,E,L,k,me,H)}}}else if(W.visible){const q=S(R,W,M,_);R.onBeforeShadow(i,R,E,L,k,q,null),i.renderBufferDirect(L,null,k,q,R,null),R.onAfterShadow(i,R,E,L,k,q,null)}}const F=R.children;for(let k=0,W=F.length;k<W;k++)w(F[k],E,L,M,_)}function C(R){R.target.removeEventListener("dispose",C);for(const L in l){const M=l[L],_=R.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const e0={[Uo]:Co,[Po]:No,[Do]:Fo,[ui]:Io,[Co]:Uo,[No]:Po,[Fo]:Do,[Io]:ui};function t0(i,e){function t(){let D=!1;const he=new st;let Me=null;const Ce=new st(0,0,0,0);return{setMask:function(fe){Me!==fe&&!D&&(i.colorMask(fe,fe,fe,fe),Me=fe)},setLocked:function(fe){D=fe},setClear:function(fe,oe,Ne,He,nt){nt===!0&&(fe*=He,oe*=He,Ne*=He),he.set(fe,oe,Ne,He),Ce.equals(he)===!1&&(i.clearColor(fe,oe,Ne,He),Ce.copy(he))},reset:function(){D=!1,Me=null,Ce.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,Me=null,Ce=null,fe=null;return{setReversed:function(oe){if(he!==oe){const Ne=e.get("EXT_clip_control");oe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),he=oe;const He=fe;fe=null,this.setClear(He)}},getReversed:function(){return he},setTest:function(oe){oe?Q(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(oe){Me!==oe&&!D&&(i.depthMask(oe),Me=oe)},setFunc:function(oe){if(he&&(oe=e0[oe]),Ce!==oe){switch(oe){case Uo:i.depthFunc(i.NEVER);break;case Co:i.depthFunc(i.ALWAYS);break;case Po:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case Do:i.depthFunc(i.EQUAL);break;case Io:i.depthFunc(i.GEQUAL);break;case No:i.depthFunc(i.GREATER);break;case Fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=oe}},setLocked:function(oe){D=oe},setClear:function(oe){fe!==oe&&(he&&(oe=1-oe),i.clearDepth(oe),fe=oe)},reset:function(){D=!1,Me=null,Ce=null,fe=null,he=!1}}}function r(){let D=!1,he=null,Me=null,Ce=null,fe=null,oe=null,Ne=null,He=null,nt=null;return{setTest:function(Qe){D||(Qe?Q(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(Qe){he!==Qe&&!D&&(i.stencilMask(Qe),he=Qe)},setFunc:function(Qe,nn,qt){(Me!==Qe||Ce!==nn||fe!==qt)&&(i.stencilFunc(Qe,nn,qt),Me=Qe,Ce=nn,fe=qt)},setOp:function(Qe,nn,qt){(oe!==Qe||Ne!==nn||He!==qt)&&(i.stencilOp(Qe,nn,qt),oe=Qe,Ne=nn,He=qt)},setLocked:function(Qe){D=Qe},setClear:function(Qe){nt!==Qe&&(i.clearStencil(Qe),nt=Qe)},reset:function(){D=!1,he=null,Me=null,Ce=null,fe=null,oe=null,Ne=null,He=null,nt=null}}}const o=new t,s=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},p=new WeakMap,h=[],v=null,x=!1,m=null,f=null,T=null,S=null,w=null,C=null,R=null,E=new Ze(0,0,0),L=0,M=!1,_=null,U=null,F=null,k=null,W=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=ie>=1):H.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=ie>=2);let ce=null,me={};const xe=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),Te=new st().fromArray(xe),Fe=new st().fromArray(j);function Ue(D,he,Me,Ce){const fe=new Uint8Array(4),oe=i.createTexture();i.bindTexture(D,oe),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<Me;Ne++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(he+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return oe}const Y={};Y[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),s.setFunc(ui),ee(!1),I(na),Q(i.CULL_FACE),se(Sn);function Q(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function ge(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function be(D,he){return d[D]!==he?(i.bindFramebuffer(D,he),d[D]=he,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=he),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ve(D,he){let Me=h,Ce=!1;if(D){Me=p.get(he),Me===void 0&&(Me=[],p.set(he,Me));const fe=D.textures;if(Me.length!==fe.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ne=fe.length;oe<Ne;oe++)Me[oe]=i.COLOR_ATTACHMENT0+oe;Me.length=fe.length,Ce=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(Me)}function ze(D){return v!==D?(i.useProgram(D),v=D,!0):!1}const je={[Fn]:i.FUNC_ADD,[Sc]:i.FUNC_SUBTRACT,[Rc]:i.FUNC_REVERSE_SUBTRACT};je[Ec]=i.MIN,je[Ac]=i.MAX;const A={[Tc]:i.ZERO,[Lc]:i.ONE,[Uc]:i.SRC_COLOR,[To]:i.SRC_ALPHA,[Fc]:i.SRC_ALPHA_SATURATE,[Ic]:i.DST_COLOR,[Pc]:i.DST_ALPHA,[Cc]:i.ONE_MINUS_SRC_COLOR,[Lo]:i.ONE_MINUS_SRC_ALPHA,[Nc]:i.ONE_MINUS_DST_COLOR,[Dc]:i.ONE_MINUS_DST_ALPHA,[Oc]:i.CONSTANT_COLOR,[Bc]:i.ONE_MINUS_CONSTANT_COLOR,[kc]:i.CONSTANT_ALPHA,[zc]:i.ONE_MINUS_CONSTANT_ALPHA};function se(D,he,Me,Ce,fe,oe,Ne,He,nt,Qe){if(D===Sn){x===!0&&(ge(i.BLEND),x=!1);return}if(x===!1&&(Q(i.BLEND),x=!0),D!==yc){if(D!==m||Qe!==M){if((f!==Fn||w!==Fn)&&(i.blendEquation(i.FUNC_ADD),f=Fn,w=Fn),Qe)switch(D){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFunc(i.ONE,i.ONE);break;case ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ra:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,S=null,C=null,R=null,E.set(0,0,0),L=0,m=D,M=Qe}return}fe=fe||he,oe=oe||Me,Ne=Ne||Ce,(he!==f||fe!==w)&&(i.blendEquationSeparate(je[he],je[fe]),f=he,w=fe),(Me!==T||Ce!==S||oe!==C||Ne!==R)&&(i.blendFuncSeparate(A[Me],A[Ce],A[oe],A[Ne]),T=Me,S=Ce,C=oe,R=Ne),(He.equals(E)===!1||nt!==L)&&(i.blendColor(He.r,He.g,He.b,nt),E.copy(He),L=nt),m=D,M=!1}function te(D,he){D.side===Ot?ge(i.CULL_FACE):Q(i.CULL_FACE);let Me=D.side===yt;he&&(Me=!Me),ee(Me),D.blending===li&&D.transparent===!1?se(Sn):se(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),o.setMask(D.colorWrite);const Ce=D.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(D){_!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),_=D)}function I(D){D!==xc?(Q(i.CULL_FACE),D!==U&&(D===na?i.cullFace(i.BACK):D===wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),U=D}function $(D){D!==F&&(X&&i.lineWidth(D),F=D)}function ne(D,he,Me){D?(Q(i.POLYGON_OFFSET_FILL),(k!==he||W!==Me)&&(i.polygonOffset(he,Me),k=he,W=Me)):ge(i.POLYGON_OFFSET_FILL)}function re(D){D?Q(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function V(D){D===void 0&&(D=i.TEXTURE0+q-1),ce!==D&&(i.activeTexture(D),ce=D)}function ue(D,he,Me){Me===void 0&&(ce===null?Me=i.TEXTURE0+q-1:Me=ce);let Ce=me[Me];Ce===void 0&&(Ce={type:void 0,texture:void 0},me[Me]=Ce),(Ce.type!==D||Ce.texture!==he)&&(ce!==Me&&(i.activeTexture(Me),ce=Me),i.bindTexture(D,he||Y[D]),Ce.type=D,Ce.texture=he)}function b(){const D=me[ce];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(D){Te.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Te.copy(D))}function Pe(D){Fe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Fe.copy(D))}function De(D,he){let Me=l.get(he);Me===void 0&&(Me=new WeakMap,l.set(he,Me));let Ce=Me.get(D);Ce===void 0&&(Ce=i.getUniformBlockIndex(he,D.name),Me.set(D,Ce))}function Re(D,he){const Ce=l.get(he).get(D);c.get(he)!==Ce&&(i.uniformBlockBinding(he,Ce,D.__bindingPointIndex),c.set(he,Ce))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ce=null,me={},d={},p=new WeakMap,h=[],v=null,x=!1,m=null,f=null,T=null,S=null,w=null,C=null,R=null,E=new Ze(0,0,0),L=0,M=!1,_=null,U=null,F=null,k=null,W=null,Te.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:Q,disable:ge,bindFramebuffer:be,drawBuffers:ve,useProgram:ze,setBlending:se,setMaterial:te,setFlipSided:ee,setCullFace:I,setLineWidth:$,setPolygonOffset:ne,setScissorTest:re,activeTexture:V,bindTexture:ue,unbindTexture:b,compressedTexImage2D:g,compressedTexImage3D:P,texImage2D:_e,texImage3D:ae,updateUBOMapping:De,uniformBlockBinding:Re,texStorage2D:le,texStorage3D:we,texSubImage2D:z,texSubImage3D:Z,compressedTexSubImage2D:G,compressedTexSubImage3D:Se,scissor:de,viewport:Pe,reset:Ve}}function n0(i,e,t,n,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ye,u=new WeakMap;let d;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,g){return h?new OffscreenCanvas(b,g):Bi("canvas")}function x(b,g,P){let z=1;const Z=ue(b);if((Z.width>P||Z.height>P)&&(z=P/Math.max(Z.width,Z.height)),z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const G=Math.floor(z*Z.width),Se=Math.floor(z*Z.height);d===void 0&&(d=v(G,Se));const le=g?v(G,Se):d;return le.width=G,le.height=Se,le.getContext("2d").drawImage(b,0,0,G,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+Se+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(b,g,P,z,Z=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=g;if(g===i.RED&&(P===i.FLOAT&&(G=i.R32F),P===i.HALF_FLOAT&&(G=i.R16F),P===i.UNSIGNED_BYTE&&(G=i.R8)),g===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(G=i.R8UI),P===i.UNSIGNED_SHORT&&(G=i.R16UI),P===i.UNSIGNED_INT&&(G=i.R32UI),P===i.BYTE&&(G=i.R8I),P===i.SHORT&&(G=i.R16I),P===i.INT&&(G=i.R32I)),g===i.RG&&(P===i.FLOAT&&(G=i.RG32F),P===i.HALF_FLOAT&&(G=i.RG16F),P===i.UNSIGNED_BYTE&&(G=i.RG8)),g===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(G=i.RG8UI),P===i.UNSIGNED_SHORT&&(G=i.RG16UI),P===i.UNSIGNED_INT&&(G=i.RG32UI),P===i.BYTE&&(G=i.RG8I),P===i.SHORT&&(G=i.RG16I),P===i.INT&&(G=i.RG32I)),g===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(G=i.RGB8UI),P===i.UNSIGNED_SHORT&&(G=i.RGB16UI),P===i.UNSIGNED_INT&&(G=i.RGB32UI),P===i.BYTE&&(G=i.RGB8I),P===i.SHORT&&(G=i.RGB16I),P===i.INT&&(G=i.RGB32I)),g===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),P===i.UNSIGNED_INT&&(G=i.RGBA32UI),P===i.BYTE&&(G=i.RGBA8I),P===i.SHORT&&(G=i.RGBA16I),P===i.INT&&(G=i.RGBA32I)),g===i.RGB&&(P===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),P===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),g===i.RGBA){const Se=Z?Ur:Je.getTransfer(z);P===i.FLOAT&&(G=i.RGBA32F),P===i.HALF_FLOAT&&(G=i.RGBA16F),P===i.UNSIGNED_BYTE&&(G=Se===et?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function w(b,g){let P;return b?g===null||g===zn||g===Ni?P=i.DEPTH24_STENCIL8:g===dn?P=i.DEPTH32F_STENCIL8:g===Ii&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===zn||g===Ni?P=i.DEPTH_COMPONENT24:g===dn?P=i.DEPTH_COMPONENT32F:g===Ii&&(P=i.DEPTH_COMPONENT16),P}function C(b,g){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Pt&&b.minFilter!==Bt?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function R(b){const g=b.target;g.removeEventListener("dispose",R),L(g),g.isVideoTexture&&u.delete(g)}function E(b){const g=b.target;g.removeEventListener("dispose",E),_(g)}function L(b){const g=n.get(b);if(g.__webglInit===void 0)return;const P=b.source,z=p.get(P);if(z){const Z=z[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(b),Object.keys(z).length===0&&p.delete(P)}n.remove(b)}function M(b){const g=n.get(b);i.deleteTexture(g.__webglTexture);const P=b.source,z=p.get(P);delete z[g.__cacheKey],s.memory.textures--}function _(b){const g=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let Z=0;Z<g.__webglFramebuffer[z].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[z][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)i.deleteFramebuffer(g.__webglFramebuffer[z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=b.textures;for(let z=0,Z=P.length;z<Z;z++){const G=n.get(P[z]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),s.memory.textures--),n.remove(P[z])}n.remove(b)}let U=0;function F(){U=0}function k(){const b=U;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),U+=1,b}function W(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function q(b,g){const P=n.get(b);if(b.isVideoTexture&&re(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&P.__version!==b.version){const z=b.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(P,b,g);return}}else b.isExternalTexture&&(P.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+g)}function X(b,g){const P=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){Y(P,b,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+g)}function ie(b,g){const P=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){Y(P,b,g);return}t.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+g)}function H(b,g){const P=n.get(b);if(b.version>0&&P.__version!==b.version){Q(P,b,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+g)}const ce={[ko]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[zo]:i.MIRRORED_REPEAT},me={[Pt]:i.NEAREST,[Jc]:i.NEAREST_MIPMAP_NEAREST,[ji]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},xe={[eu]:i.NEVER,[su]:i.ALWAYS,[tu]:i.LESS,[_l]:i.LEQUAL,[nu]:i.EQUAL,[ou]:i.GEQUAL,[iu]:i.GREATER,[ru]:i.NOTEQUAL};function j(b,g){if(g.type===dn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Bt||g.magFilter===Gr||g.magFilter===ji||g.magFilter===kn||g.minFilter===Bt||g.minFilter===Gr||g.minFilter===ji||g.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ce[g.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ce[g.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ce[g.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,me[g.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,xe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Pt||g.minFilter!==ji&&g.minFilter!==kn||g.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Te(b,g){let P=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",R));const z=g.source;let Z=p.get(z);Z===void 0&&(Z={},p.set(z,Z));const G=W(g);if(G!==b.__cacheKey){Z[G]===void 0&&(Z[G]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,P=!0),Z[G].usedTimes++;const Se=Z[b.__cacheKey];Se!==void 0&&(Z[b.__cacheKey].usedTimes--,Se.usedTimes===0&&M(g)),b.__cacheKey=G,b.__webglTexture=Z[G].texture}return P}function Fe(b,g,P){return Math.floor(Math.floor(b/P)/g)}function Ue(b,g,P,z){const G=b.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,P,z,g.data);else{G.sort((ae,de)=>ae.start-de.start);let Se=0;for(let ae=1;ae<G.length;ae++){const de=G[Se],Pe=G[ae],De=de.start+de.count,Re=Fe(Pe.start,g.width,4),Ve=Fe(de.start,g.width,4);Pe.start<=De+1&&Re===Ve&&Fe(Pe.start+Pe.count-1,g.width,4)===Re?de.count=Math.max(de.count,Pe.start+Pe.count-de.start):(++Se,G[Se]=Pe)}G.length=Se+1;const le=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),_e=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ae=0,de=G.length;ae<de;ae++){const Pe=G[ae],De=Math.floor(Pe.start/4),Re=Math.ceil(Pe.count/4),Ve=De%g.width,D=Math.floor(De/g.width),he=Re,Me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ve,D,he,Me,P,z,g.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function Y(b,g,P){let z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=i.TEXTURE_3D);const Z=Te(b,g),G=g.source;t.bindTexture(z,b.__webglTexture,i.TEXTURE0+P);const Se=n.get(G);if(G.version!==Se.__version||Z===!0){t.activeTexture(i.TEXTURE0+P);const le=Je.getPrimaries(Je.workingColorSpace),we=g.colorSpace===un?null:Je.getPrimaries(g.colorSpace),_e=g.colorSpace===un||le===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ae=x(g.image,!1,r.maxTextureSize);ae=V(g,ae);const de=o.convert(g.format,g.colorSpace),Pe=o.convert(g.type);let De=S(g.internalFormat,de,Pe,g.colorSpace,g.isVideoTexture);j(z,g);let Re;const Ve=g.mipmaps,D=g.isVideoTexture!==!0,he=Se.__version===void 0||Z===!0,Me=G.dataReady,Ce=C(g,ae);if(g.isDepthTexture)De=w(g.format===Oi,g.type),he&&(D?t.texStorage2D(i.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,De,ae.width,ae.height,0,de,Pe,null));else if(g.isDataTexture)if(Ve.length>0){D&&he&&t.texStorage2D(i.TEXTURE_2D,Ce,De,Ve[0].width,Ve[0].height);for(let fe=0,oe=Ve.length;fe<oe;fe++)Re=Ve[fe],D?Me&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Re.width,Re.height,de,Pe,Re.data):t.texImage2D(i.TEXTURE_2D,fe,De,Re.width,Re.height,0,de,Pe,Re.data);g.generateMipmaps=!1}else D?(he&&t.texStorage2D(i.TEXTURE_2D,Ce,De,ae.width,ae.height),Me&&Ue(g,ae,de,Pe)):t.texImage2D(i.TEXTURE_2D,0,De,ae.width,ae.height,0,de,Pe,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,De,Ve[0].width,Ve[0].height,ae.depth);for(let fe=0,oe=Ve.length;fe<oe;fe++)if(Re=Ve[fe],g.format!==Xt)if(de!==null)if(D){if(Me)if(g.layerUpdates.size>0){const Ne=Pa(Re.width,Re.height,g.format,g.type);for(const He of g.layerUpdates){const nt=Re.data.subarray(He*Ne/Re.data.BYTES_PER_ELEMENT,(He+1)*Ne/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,He,Re.width,Re.height,1,de,nt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Re.width,Re.height,ae.depth,de,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,De,Re.width,Re.height,ae.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?Me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Re.width,Re.height,ae.depth,de,Pe,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,De,Re.width,Re.height,ae.depth,0,de,Pe,Re.data)}else{D&&he&&t.texStorage2D(i.TEXTURE_2D,Ce,De,Ve[0].width,Ve[0].height);for(let fe=0,oe=Ve.length;fe<oe;fe++)Re=Ve[fe],g.format!==Xt?de!==null?D?Me&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Re.width,Re.height,de,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,De,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?Me&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Re.width,Re.height,de,Pe,Re.data):t.texImage2D(i.TEXTURE_2D,fe,De,Re.width,Re.height,0,de,Pe,Re.data)}else if(g.isDataArrayTexture)if(D){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,De,ae.width,ae.height,ae.depth),Me)if(g.layerUpdates.size>0){const fe=Pa(ae.width,ae.height,g.format,g.type);for(const oe of g.layerUpdates){const Ne=ae.data.subarray(oe*fe/ae.data.BYTES_PER_ELEMENT,(oe+1)*fe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,ae.width,ae.height,1,de,Pe,Ne)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,de,Pe,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,de,Pe,ae.data);else if(g.isData3DTexture)D?(he&&t.texStorage3D(i.TEXTURE_3D,Ce,De,ae.width,ae.height,ae.depth),Me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,de,Pe,ae.data)):t.texImage3D(i.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,de,Pe,ae.data);else if(g.isFramebufferTexture){if(he)if(D)t.texStorage2D(i.TEXTURE_2D,Ce,De,ae.width,ae.height);else{let fe=ae.width,oe=ae.height;for(let Ne=0;Ne<Ce;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,De,fe,oe,0,de,Pe,null),fe>>=1,oe>>=1}}else if(Ve.length>0){if(D&&he){const fe=ue(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Ce,De,fe.width,fe.height)}for(let fe=0,oe=Ve.length;fe<oe;fe++)Re=Ve[fe],D?Me&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,de,Pe,Re):t.texImage2D(i.TEXTURE_2D,fe,De,de,Pe,Re);g.generateMipmaps=!1}else if(D){if(he){const fe=ue(ae);t.texStorage2D(i.TEXTURE_2D,Ce,De,fe.width,fe.height)}Me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Pe,ae)}else t.texImage2D(i.TEXTURE_2D,0,De,de,Pe,ae);m(g)&&f(z),Se.__version=G.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Q(b,g,P){if(g.image.length!==6)return;const z=Te(b,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+P);const G=n.get(Z);if(Z.version!==G.__version||z===!0){t.activeTexture(i.TEXTURE0+P);const Se=Je.getPrimaries(Je.workingColorSpace),le=g.colorSpace===un?null:Je.getPrimaries(g.colorSpace),we=g.colorSpace===un||Se===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const _e=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,de=[];for(let oe=0;oe<6;oe++)!_e&&!ae?de[oe]=x(g.image[oe],!0,r.maxCubemapSize):de[oe]=ae?g.image[oe].image:g.image[oe],de[oe]=V(g,de[oe]);const Pe=de[0],De=o.convert(g.format,g.colorSpace),Re=o.convert(g.type),Ve=S(g.internalFormat,De,Re,g.colorSpace),D=g.isVideoTexture!==!0,he=G.__version===void 0||z===!0,Me=Z.dataReady;let Ce=C(g,Pe);j(i.TEXTURE_CUBE_MAP,g);let fe;if(_e){D&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Ve,Pe.width,Pe.height);for(let oe=0;oe<6;oe++){fe=de[oe].mipmaps;for(let Ne=0;Ne<fe.length;Ne++){const He=fe[Ne];g.format!==Xt?De!==null?D?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,0,0,He.width,He.height,De,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,Ve,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,0,0,He.width,He.height,De,Re,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,Ve,He.width,He.height,0,De,Re,He.data)}}}else{if(fe=g.mipmaps,D&&he){fe.length>0&&Ce++;const oe=ue(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Ve,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ae){D?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,de[oe].width,de[oe].height,De,Re,de[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,de[oe].width,de[oe].height,0,De,Re,de[oe].data);for(let Ne=0;Ne<fe.length;Ne++){const nt=fe[Ne].image[oe].image;D?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,0,0,nt.width,nt.height,De,Re,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,Ve,nt.width,nt.height,0,De,Re,nt.data)}}else{D?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De,Re,de[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,De,Re,de[oe]);for(let Ne=0;Ne<fe.length;Ne++){const He=fe[Ne];D?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,0,0,De,Re,He.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,Ve,De,Re,He.image[oe])}}}m(g)&&f(i.TEXTURE_CUBE_MAP),G.__version=Z.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function ge(b,g,P,z,Z,G){const Se=o.convert(P.format,P.colorSpace),le=o.convert(P.type),we=S(P.internalFormat,Se,le,P.colorSpace),_e=n.get(g),ae=n.get(P);if(ae.__renderTarget=g,!_e.__hasExternalTextures){const de=Math.max(1,g.width>>G),Pe=Math.max(1,g.height>>G);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,G,we,de,Pe,g.depth,0,Se,le,null):t.texImage2D(Z,G,we,de,Pe,0,Se,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,Z,ae.__webglTexture,0,$(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,Z,ae.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(b,g,P){if(i.bindRenderbuffer(i.RENDERBUFFER,b),g.depthBuffer){const z=g.depthTexture,Z=z&&z.isDepthTexture?z.type:null,G=w(g.stencilBuffer,Z),Se=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=$(g);ne(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,G,g.width,g.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,G,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,G,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,b)}else{const z=g.textures;for(let Z=0;Z<z.length;Z++){const G=z[Z],Se=o.convert(G.format,G.colorSpace),le=o.convert(G.type),we=S(G.internalFormat,Se,le,G.colorSpace),_e=$(g);P&&ne(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,we,g.width,g.height):ne(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,we,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,we,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=n.get(g.depthTexture);z.__renderTarget=g,(!z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q(g.depthTexture,0);const Z=z.__webglTexture,G=$(g);if(g.depthTexture.format===Fi)ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(g.depthTexture.format===Oi)ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ze(b){const g=n.get(b),P=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const z=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",Z)};z.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=z}if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const z=b.texture.mipmaps;z&&z.length>0?ve(g.__webglFramebuffer[0],b):ve(g.__webglFramebuffer,b)}else if(P){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=i.createRenderbuffer(),be(g.__webglDepthbuffer[z],b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,G)}}else{const z=b.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),be(g.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(b,g,P){const z=n.get(b);g!==void 0&&ge(z.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&ze(b)}function A(b){const g=b.texture,P=n.get(b),z=n.get(g);b.addEventListener("dispose",E);const Z=b.textures,G=b.isWebGLCubeRenderTarget===!0,Se=Z.length>1;if(Se||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=g.version,s.memory.textures++),G){P.__webglFramebuffer=[];for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[le]=[];for(let we=0;we<g.mipmaps.length;we++)P.__webglFramebuffer[le][we]=i.createFramebuffer()}else P.__webglFramebuffer[le]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let le=0;le<g.mipmaps.length;le++)P.__webglFramebuffer[le]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(Se)for(let le=0,we=Z.length;le<we;le++){const _e=n.get(Z[le]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),s.memory.textures++)}if(b.samples>0&&ne(b)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const we=Z[le];P.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[le]);const _e=o.convert(we.format,we.colorSpace),ae=o.convert(we.type),de=S(we.internalFormat,_e,ae,we.colorSpace,b.isXRRenderTarget===!0),Pe=$(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,de,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,P.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),be(P.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),j(i.TEXTURE_CUBE_MAP,g);for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0)for(let we=0;we<g.mipmaps.length;we++)ge(P.__webglFramebuffer[le][we],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,we);else ge(P.__webglFramebuffer[le],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(g)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,we=Z.length;le<we;le++){const _e=Z[le],ae=n.get(_e);let de=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(de=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ae.__webglTexture),j(de,_e),ge(P.__webglFramebuffer,b,_e,i.COLOR_ATTACHMENT0+le,de,0),m(_e)&&f(de)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,z.__webglTexture),j(le,g),g.mipmaps&&g.mipmaps.length>0)for(let we=0;we<g.mipmaps.length;we++)ge(P.__webglFramebuffer[we],b,g,i.COLOR_ATTACHMENT0,le,we);else ge(P.__webglFramebuffer,b,g,i.COLOR_ATTACHMENT0,le,0);m(g)&&f(le),t.unbindTexture()}b.depthBuffer&&ze(b)}function se(b){const g=b.textures;for(let P=0,z=g.length;P<z;P++){const Z=g[P];if(m(Z)){const G=T(b),Se=n.get(Z).__webglTexture;t.bindTexture(G,Se),f(G),t.unbindTexture()}}}const te=[],ee=[];function I(b){if(b.samples>0){if(ne(b)===!1){const g=b.textures,P=b.width,z=b.height;let Z=i.COLOR_BUFFER_BIT;const G=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(b),le=g.length>1;if(le)for(let _e=0;_e<g.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const we=b.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let _e=0;_e<g.length;_e++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);const ae=n.get(g[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,P,z,0,0,P,z,Z,i.NEAREST),c===!0&&(te.length=0,ee.length=0,te.push(i.COLOR_ATTACHMENT0+_e),b.depthBuffer&&b.resolveDepthBuffer===!1&&(te.push(G),ee.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let _e=0;_e<g.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);const ae=n.get(g[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const g=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function $(b){return Math.min(r.maxSamples,b.samples)}function ne(b){const g=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function re(b){const g=s.render.frame;u.get(b)!==g&&(u.set(b,g),b.update())}function V(b,g){const P=b.colorSpace,z=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||P!==fi&&P!==un&&(Je.getTransfer(P)===et?(z!==Xt||Z!==Qt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}function ue(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=ie,this.setTextureCube=H,this.rebindTextures=je,this.setupRenderTarget=A,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ne}function i0(i,e){function t(n,r=un){let o;const s=Je.getTransfer(r);if(n===Qt)return i.UNSIGNED_BYTE;if(n===Es)return i.UNSIGNED_SHORT_4_4_4_4;if(n===As)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cl)return i.BYTE;if(n===ul)return i.SHORT;if(n===Ii)return i.UNSIGNED_SHORT;if(n===Rs)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===fl)return i.ALPHA;if(n===pl)return i.RGB;if(n===Xt)return i.RGBA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===ml)return i.RED;if(n===Ts)return i.RED_INTEGER;if(n===gl)return i.RG;if(n===Ls)return i.RG_INTEGER;if(n===Us)return i.RGBA_INTEGER;if(n===yr||n===Sr||n===Rr||n===Er)if(s===et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===yr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===yr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Vo||n===Ho||n===Wo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Go)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ho)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Xo||n===qo)return s===et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Yo)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zo||n===Ko||n===Jo||n===jo||n===Qo||n===$o||n===es||n===ts||n===ns||n===is||n===rs||n===os||n===ss||n===as)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Zo)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ko)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jo)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qo)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$o)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===es)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ts)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ns)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===is)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rs)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===os)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ss)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===as)return s===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ls||n===cs||n===us)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===ls)return s===et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cs)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===us)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ds||n===hs||n===fs||n===ps)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===ds)return o.COMPRESSED_RED_RGTC1_EXT;if(n===hs)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fs)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ps)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const r0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o0=`
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

}`;class s0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ll(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gn({vertexShader:r0,fragmentShader:o0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a0 extends _i{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,d=null,p=null,h=null,v=null;const x=typeof XRWebGLBinding<"u",m=new s0,f={},T=t.getContextAttributes();let S=null,w=null;const C=[],R=[],E=new ye;let L=null;const M=new Ut;M.viewport=new st;const _=new Ut;_.viewport=new st;const U=[M,_],F=new Ad;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=C[Y];return Q===void 0&&(Q=new uo,C[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=C[Y];return Q===void 0&&(Q=new uo,C[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=C[Y];return Q===void 0&&(Q=new uo,C[Y]=Q),Q.getHandSpace()};function q(Y){const Q=R.indexOf(Y.inputSource);if(Q===-1)return;const ge=C[Q];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,l||s),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<C.length;Y++){const Q=R[Y];Q!==null&&(R[Y]=null,C[Y].disconnect(Q))}k=null,W=null,m.reset();for(const Y in f)delete f[Y];e.setRenderTarget(S),h=null,p=null,d=null,r=null,w=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ie),T.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,be=null,ve=null;T.depth&&(ve=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=T.stencil?Oi:Fi,be=T.stencil?Ni:zn);const ze={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:o};d=this.getBinding(),p=d.createProjectionLayer(ze),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new Gn(p.textureWidth,p.textureHeight,{format:Xt,type:Qt,depthTexture:new Tl(p.textureWidth,p.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ge={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new Gn(h.framebufferWidth,h.framebufferHeight,{format:Xt,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(a),Ue.setContext(r),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Y){for(let Q=0;Q<Y.removed.length;Q++){const ge=Y.removed[Q],be=R.indexOf(ge);be>=0&&(R[be]=null,C[be].disconnect(ge))}for(let Q=0;Q<Y.added.length;Q++){const ge=Y.added[Q];let be=R.indexOf(ge);if(be===-1){for(let ze=0;ze<C.length;ze++)if(ze>=R.length){R.push(ge),be=ze;break}else if(R[ze]===null){R[ze]=ge,be=ze;break}if(be===-1)break}const ve=C[be];ve&&ve.connect(ge)}}const H=new N,ce=new N;function me(Y,Q,ge){H.setFromMatrixPosition(Q.matrixWorld),ce.setFromMatrixPosition(ge.matrixWorld);const be=H.distanceTo(ce),ve=Q.projectionMatrix.elements,ze=ge.projectionMatrix.elements,je=ve[14]/(ve[10]-1),A=ve[14]/(ve[10]+1),se=(ve[9]+1)/ve[5],te=(ve[9]-1)/ve[5],ee=(ve[8]-1)/ve[0],I=(ze[8]+1)/ze[0],$=je*ee,ne=je*I,re=be/(-ee+I),V=re*-ee;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(V),Y.translateZ(re),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ve[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const ue=je+re,b=A+re,g=$-V,P=ne+(be-V),z=se*A/b*ue,Z=te*A/b*ue;Y.projectionMatrix.makePerspective(g,P,z,Z,ue,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function xe(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Q=Y.near,ge=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),F.near=_.near=M.near=Q,F.far=_.far=M.far=ge,(k!==F.near||W!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,W=F.far),F.layers.mask=Y.layers.mask|6,M.layers.mask=F.layers.mask&3,_.layers.mask=F.layers.mask&5;const be=Y.parent,ve=F.cameras;xe(F,be);for(let ze=0;ze<ve.length;ze++)xe(ve[ze],be);ve.length===2?me(F,M,_):F.projectionMatrix.copy(M.projectionMatrix),j(Y,F,be)};function j(Y,Q,ge){ge===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ms*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(p===null&&h===null))return c},this.setFoveation=function(Y){c=Y,p!==null&&(p.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return f[Y]};let Te=null;function Fe(Y,Q){if(u=Q.getViewerPose(l||s),v=Q,u!==null){const ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let be=!1;ge.length!==F.cameras.length&&(F.cameras.length=0,be=!0);for(let A=0;A<ge.length;A++){const se=ge[A];let te=null;if(h!==null)te=h.getViewport(se);else{const I=d.getViewSubImage(p,se);te=I.viewport,A===0&&(e.setRenderTargetTextures(w,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(w))}let ee=U[A];ee===void 0&&(ee=new Ut,ee.layers.enable(A),ee.viewport=new st,U[A]=ee),ee.matrix.fromArray(se.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(se.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(te.x,te.y,te.width,te.height),A===0&&(F.matrix.copy(ee.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),be===!0&&F.cameras.push(ee)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const A=d.getDepthInformation(ge[0]);A&&A.isValid&&A.texture&&m.init(A,r.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let A=0;A<ge.length;A++){const se=ge[A].camera;if(se){let te=f[se];te||(te=new Ll,f[se]=te);const ee=d.getCameraImage(se);te.sourceTexture=ee}}}}for(let ge=0;ge<C.length;ge++){const be=R[ge],ve=C[ge];be!==null&&ve!==void 0&&ve.update(be,Q,l||s)}Te&&Te(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),v=null}const Ue=new Gl;Ue.setAnimationLoop(Fe),this.setAnimationLoop=function(Y){Te=Y},this.dispose=function(){}}}const Pn=new $t,l0=new lt;function c0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Rl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,T,S,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),d(m,f)):f.isMeshPhongMaterial?(o(m,f),u(m,f)):f.isMeshStandardMaterial?(o(m,f),p(m,f),f.isMeshPhysicalMaterial&&h(m,f,w)):f.isMeshMatcapMaterial?(o(m,f),v(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),x(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===yt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===yt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),S=T.envMap,w=T.envMapRotation;S&&(m.envMap.value=S,Pn.copy(w),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),m.envMapRotation.value.setFromMatrix4(l0.makeRotationFromEuler(Pn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function u0(i,e,t,n){let r={},o={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const w=S.program;n.uniformBlockBinding(T,w)}function l(T,S){let w=r[T.id];w===void 0&&(v(T),w=u(T),r[T.id]=w,T.addEventListener("dispose",m));const C=S.program;n.updateUBOMapping(T,C);const R=e.render.frame;o[T.id]!==R&&(p(T),o[T.id]=R)}function u(T){const S=d();T.__bindingPointIndex=S;const w=i.createBuffer(),C=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function d(){for(let T=0;T<a;T++)if(s.indexOf(T)===-1)return s.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const S=r[T.id],w=T.uniforms,C=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,E=w.length;R<E;R++){const L=Array.isArray(w[R])?w[R]:[w[R]];for(let M=0,_=L.length;M<_;M++){const U=L[M];if(h(U,R,M,C)===!0){const F=U.__offset,k=Array.isArray(U.value)?U.value:[U.value];let W=0;for(let q=0;q<k.length;q++){const X=k[q],ie=x(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,F+W,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,W),W+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(T,S,w,C){const R=T.value,E=S+"_"+w;if(C[E]===void 0)return typeof R=="number"||typeof R=="boolean"?C[E]=R:C[E]=R.clone(),!0;{const L=C[E];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return C[E]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function v(T){const S=T.uniforms;let w=0;const C=16;for(let E=0,L=S.length;E<L;E++){const M=Array.isArray(S[E])?S[E]:[S[E]];for(let _=0,U=M.length;_<U;_++){const F=M[_],k=Array.isArray(F.value)?F.value:[F.value];for(let W=0,q=k.length;W<q;W++){const X=k[W],ie=x(X),H=w%C,ce=H%ie.boundary,me=H+ce;w+=ce,me!==0&&C-me<ie.storage&&(w+=C-me),F.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=ie.storage}}}const R=w%C;return R>0&&(w+=C-R),T.__size=w,T.__cache={},this}function x(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const w=s.indexOf(S.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function f(){for(const T in r)i.deleteBuffer(r[T]);s=[],r={},o={}}return{bind:c,update:l,dispose:f}}class Vs{constructor(e={}){const{canvas:t=lu(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=s;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let C=!1;this._outputColorSpace=Mt;let R=0,E=0,L=null,M=-1,_=null;const U=new st,F=new st;let k=null;const W=new Ze(0);let q=0,X=t.width,ie=t.height,H=1,ce=null,me=null;const xe=new st(0,0,X,ie),j=new st(0,0,X,ie);let Te=!1;const Fe=new Is;let Ue=!1,Y=!1;const Q=new lt,ge=new N,be=new st,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function je(){return L===null?H:1}let A=n;function se(y,O){return t.getContext(y,O)}try{const y={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ss}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",fe,!1),A===null){const O="webgl2";if(A=se(O,y),A===null)throw se(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let te,ee,I,$,ne,re,V,ue,b,g,P,z,Z,G,Se,le,we,_e,ae,de,Pe,De,Re,Ve;function D(){te=new wp(A),te.init(),De=new i0(A,te),ee=new pp(A,te,e,De),I=new t0(A,te),ee.reversedDepthBuffer&&p&&I.buffers.depth.setReversed(!0),$=new Sp(A),ne=new Vm,re=new n0(A,te,I,ne,ee,De,$),V=new gp(w),ue=new xp(w),b=new Ld(A),Re=new hp(A,b),g=new Mp(A,b,$,Re),P=new Ep(A,g,b,$),ae=new Rp(A,ee,re),le=new mp(ne),z=new Gm(w,V,ue,te,ee,Re,le),Z=new c0(w,ne),G=new Wm,Se=new Jm(te),_e=new dp(w,V,ue,I,P,h,c),we=new $m(w,P,ee),Ve=new u0(A,$,ee,I),de=new fp(A,te,$),Pe=new yp(A,te,$),$.programs=z.programs,w.capabilities=ee,w.extensions=te,w.properties=ne,w.renderLists=G,w.shadowMap=we,w.state=I,w.info=$}D();const he=new a0(w,A);this.xr=he,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const y=te.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=te.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(X,ie,!1))},this.getSize=function(y){return y.set(X,ie)},this.setSize=function(y,O,K=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,ie=O,t.width=Math.floor(y*H),t.height=Math.floor(O*H),K===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(X*H,ie*H).floor()},this.setDrawingBufferSize=function(y,O,K){X=y,ie=O,H=K,t.width=Math.floor(y*K),t.height=Math.floor(O*K),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(U)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,O,K,J){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,O,K,J),I.viewport(U.copy(xe).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(j)},this.setScissor=function(y,O,K,J){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,O,K,J),I.scissor(F.copy(j).multiplyScalar(H).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(y){I.setScissorTest(Te=y)},this.setOpaqueSort=function(y){ce=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,K=!0){let J=0;if(y){let B=!1;if(L!==null){const pe=L.texture.format;B=pe===Us||pe===Ls||pe===Ts}if(B){const pe=L.texture.type,Ae=pe===Qt||pe===zn||pe===Ii||pe===Ni||pe===Es||pe===As,Ie=_e.getClearColor(),Le=_e.getClearAlpha(),ke=Ie.r,Ge=Ie.g,Oe=Ie.b;Ae?(v[0]=ke,v[1]=Ge,v[2]=Oe,v[3]=Le,A.clearBufferuiv(A.COLOR,0,v)):(x[0]=ke,x[1]=Ge,x[2]=Oe,x[3]=Le,A.clearBufferiv(A.COLOR,0,x))}else J|=A.COLOR_BUFFER_BIT}O&&(J|=A.DEPTH_BUFFER_BIT),K&&(J|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),_e.dispose(),G.dispose(),Se.dispose(),ne.dispose(),V.dispose(),ue.dispose(),P.dispose(),Re.dispose(),Ve.dispose(),z.dispose(),he.dispose(),he.removeEventListener("sessionstart",qt),he.removeEventListener("sessionend",Js),Rn.stop()};function Me(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=$.autoReset,O=we.enabled,K=we.autoUpdate,J=we.needsUpdate,B=we.type;D(),$.autoReset=y,we.enabled=O,we.autoUpdate=K,we.needsUpdate=J,we.type=B}function fe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function oe(y){const O=y.target;O.removeEventListener("dispose",oe),Ne(O)}function Ne(y){He(y),ne.remove(y)}function He(y){const O=ne.get(y).programs;O!==void 0&&(O.forEach(function(K){z.releaseProgram(K)}),y.isShaderMaterial&&z.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,K,J,B,pe){O===null&&(O=ve);const Ae=B.isMesh&&B.matrixWorld.determinant()<0,Ie=hc(y,O,K,J,B);I.setMaterial(J,Ae);let Le=K.index,ke=1;if(J.wireframe===!0){if(Le=g.getWireframeAttribute(K),Le===void 0)return;ke=2}const Ge=K.drawRange,Oe=K.attributes.position;let Ye=Ge.start*ke,$e=(Ge.start+Ge.count)*ke;pe!==null&&(Ye=Math.max(Ye,pe.start*ke),$e=Math.min($e,(pe.start+pe.count)*ke)),Le!==null?(Ye=Math.max(Ye,0),$e=Math.min($e,Le.count)):Oe!=null&&(Ye=Math.max(Ye,0),$e=Math.min($e,Oe.count));const ct=$e-Ye;if(ct<0||ct===1/0)return;Re.setup(B,J,Ie,K,Le);let it,tt=de;if(Le!==null&&(it=b.get(Le),tt=Pe,tt.setIndex(it)),B.isMesh)J.wireframe===!0?(I.setLineWidth(J.wireframeLinewidth*je()),tt.setMode(A.LINES)):tt.setMode(A.TRIANGLES);else if(B.isLine){let Be=J.linewidth;Be===void 0&&(Be=1),I.setLineWidth(Be*je()),B.isLineSegments?tt.setMode(A.LINES):B.isLineLoop?tt.setMode(A.LINE_LOOP):tt.setMode(A.LINE_STRIP)}else B.isPoints?tt.setMode(A.POINTS):B.isSprite&&tt.setMode(A.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))tt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Be=B._multiDrawStarts,rt=B._multiDrawCounts,Ke=B._multiDrawCount,Et=Le?b.get(Le).bytesPerElement:1,Hn=ne.get(J).currentProgram.getUniforms();for(let At=0;At<Ke;At++)Hn.setValue(A,"_gl_DrawID",At),tt.render(Be[At]/Et,rt[At])}else if(B.isInstancedMesh)tt.renderInstances(Ye,ct,B.count);else if(K.isInstancedBufferGeometry){const Be=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,rt=Math.min(K.instanceCount,Be);tt.renderInstances(Ye,ct,rt)}else tt.render(Ye,ct)};function nt(y,O,K){y.transparent===!0&&y.side===Ot&&y.forceSinglePass===!1?(y.side=yt,y.needsUpdate=!0,Ji(y,O,K),y.side=mn,y.needsUpdate=!0,Ji(y,O,K),y.side=Ot):Ji(y,O,K)}this.compile=function(y,O,K=null){K===null&&(K=y),f=Se.get(K),f.init(O),S.push(f),K.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),y!==K&&y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const J=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const pe=B.material;if(pe)if(Array.isArray(pe))for(let Ae=0;Ae<pe.length;Ae++){const Ie=pe[Ae];nt(Ie,K,B),J.add(Ie)}else nt(pe,K,B),J.add(pe)}),f=S.pop(),J},this.compileAsync=function(y,O,K=null){const J=this.compile(y,O,K);return new Promise(B=>{function pe(){if(J.forEach(function(Ae){ne.get(Ae).currentProgram.isReady()&&J.delete(Ae)}),J.size===0){B(y);return}setTimeout(pe,10)}te.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Qe=null;function nn(y){Qe&&Qe(y)}function qt(){Rn.stop()}function Js(){Rn.start()}const Rn=new Gl;Rn.setAnimationLoop(nn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(y){Qe=y,he.setAnimationLoop(y),y===null?Rn.stop():Rn.start()},he.addEventListener("sessionstart",qt),he.addEventListener("sessionend",Js),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(O),O=he.getCamera()),y.isScene===!0&&y.onBeforeRender(w,y,O,L),f=Se.get(y,S.length),f.init(O),S.push(f),Q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Fe.setFromProjectionMatrix(Q,Zt,O.reversedDepth),Y=this.localClippingEnabled,Ue=le.init(this.clippingPlanes,Y),m=G.get(y,T.length),m.init(),T.push(m),he.enabled===!0&&he.isPresenting===!0){const pe=w.xr.getDepthSensingMesh();pe!==null&&kr(pe,O,-1/0,w.sortObjects)}kr(y,O,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(ce,me),ze=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ze&&_e.addToRenderList(m,y),this.info.render.frame++,Ue===!0&&le.beginShadows();const K=f.state.shadowsArray;we.render(K,y,O),Ue===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){const pe=O.cameras;if(B.length>0)for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++){const Le=pe[Ae];Qs(J,B,y,Le)}ze&&_e.render(y);for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++){const Le=pe[Ae];js(m,y,Le,Le.viewport)}}else B.length>0&&Qs(J,B,y,O),ze&&_e.render(y),js(m,y,O);L!==null&&E===0&&(re.updateMultisampleRenderTarget(L),re.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(w,y,O),Re.resetDefaultState(),M=-1,_=null,S.pop(),S.length>0?(f=S[S.length-1],Ue===!0&&le.setGlobalState(w.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function kr(y,O,K,J){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)K=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Fe.intersectsSprite(y)){J&&be.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);const Ae=P.update(y),Ie=y.material;Ie.visible&&m.push(y,Ae,Ie,K,be.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Fe.intersectsObject(y))){const Ae=P.update(y),Ie=y.material;if(J&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),be.copy(y.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),be.copy(Ae.boundingSphere.center)),be.applyMatrix4(y.matrixWorld).applyMatrix4(Q)),Array.isArray(Ie)){const Le=Ae.groups;for(let ke=0,Ge=Le.length;ke<Ge;ke++){const Oe=Le[ke],Ye=Ie[Oe.materialIndex];Ye&&Ye.visible&&m.push(y,Ae,Ye,K,be.z,Oe)}}else Ie.visible&&m.push(y,Ae,Ie,K,be.z,null)}}const pe=y.children;for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++)kr(pe[Ae],O,K,J)}function js(y,O,K,J){const B=y.opaque,pe=y.transmissive,Ae=y.transparent;f.setupLightsView(K),Ue===!0&&le.setGlobalState(w.clippingPlanes,K),J&&I.viewport(U.copy(J)),B.length>0&&Ki(B,O,K),pe.length>0&&Ki(pe,O,K),Ae.length>0&&Ki(Ae,O,K),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Qs(y,O,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[J.id]===void 0&&(f.state.transmissionRenderTarget[J.id]=new Gn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Wi:Qt,minFilter:kn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const pe=f.state.transmissionRenderTarget[J.id],Ae=J.viewport||U;pe.setSize(Ae.z*w.transmissionResolutionScale,Ae.w*w.transmissionResolutionScale);const Ie=w.getRenderTarget(),Le=w.getActiveCubeFace(),ke=w.getActiveMipmapLevel();w.setRenderTarget(pe),w.getClearColor(W),q=w.getClearAlpha(),q<1&&w.setClearColor(16777215,.5),w.clear(),ze&&_e.render(K);const Ge=w.toneMapping;w.toneMapping=hn;const Oe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),f.setupLightsView(J),Ue===!0&&le.setGlobalState(w.clippingPlanes,J),Ki(y,K,J),re.updateMultisampleRenderTarget(pe),re.updateRenderTargetMipmap(pe),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let $e=0,ct=O.length;$e<ct;$e++){const it=O[$e],tt=it.object,Be=it.geometry,rt=it.material,Ke=it.group;if(rt.side===Ot&&tt.layers.test(J.layers)){const Et=rt.side;rt.side=yt,rt.needsUpdate=!0,$s(tt,K,J,Be,rt,Ke),rt.side=Et,rt.needsUpdate=!0,Ye=!0}}Ye===!0&&(re.updateMultisampleRenderTarget(pe),re.updateRenderTargetMipmap(pe))}w.setRenderTarget(Ie,Le,ke),w.setClearColor(W,q),Oe!==void 0&&(J.viewport=Oe),w.toneMapping=Ge}function Ki(y,O,K){const J=O.isScene===!0?O.overrideMaterial:null;for(let B=0,pe=y.length;B<pe;B++){const Ae=y[B],Ie=Ae.object,Le=Ae.geometry,ke=Ae.group;let Ge=Ae.material;Ge.allowOverride===!0&&J!==null&&(Ge=J),Ie.layers.test(K.layers)&&$s(Ie,O,K,Le,Ge,ke)}}function $s(y,O,K,J,B,pe){y.onBeforeRender(w,O,K,J,B,pe),y.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(w,O,K,J,y,pe),B.transparent===!0&&B.side===Ot&&B.forceSinglePass===!1?(B.side=yt,B.needsUpdate=!0,w.renderBufferDirect(K,O,J,B,y,pe),B.side=mn,B.needsUpdate=!0,w.renderBufferDirect(K,O,J,B,y,pe),B.side=Ot):w.renderBufferDirect(K,O,J,B,y,pe),y.onAfterRender(w,O,K,J,B,pe)}function Ji(y,O,K){O.isScene!==!0&&(O=ve);const J=ne.get(y),B=f.state.lights,pe=f.state.shadowsArray,Ae=B.state.version,Ie=z.getParameters(y,B.state,pe,O,K),Le=z.getProgramCacheKey(Ie);let ke=J.programs;J.environment=y.isMeshStandardMaterial?O.environment:null,J.fog=O.fog,J.envMap=(y.isMeshStandardMaterial?ue:V).get(y.envMap||J.environment),J.envMapRotation=J.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,ke===void 0&&(y.addEventListener("dispose",oe),ke=new Map,J.programs=ke);let Ge=ke.get(Le);if(Ge!==void 0){if(J.currentProgram===Ge&&J.lightsStateVersion===Ae)return ta(y,Ie),Ge}else Ie.uniforms=z.getUniforms(y),y.onBeforeCompile(Ie,w),Ge=z.acquireProgram(Ie,Le),ke.set(Le,Ge),J.uniforms=Ie.uniforms;const Oe=J.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Oe.clippingPlanes=le.uniform),ta(y,Ie),J.needsLights=pc(y),J.lightsStateVersion=Ae,J.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMap.value=B.state.directionalShadowMap,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotShadowMap.value=B.state.spotShadowMap,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMap.value=B.state.pointShadowMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),J.currentProgram=Ge,J.uniformsList=null,Ge}function ea(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=Ar.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function ta(y,O){const K=ne.get(y);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function hc(y,O,K,J,B){O.isScene!==!0&&(O=ve),re.resetTextureUnits();const pe=O.fog,Ae=J.isMeshStandardMaterial?O.environment:null,Ie=L===null?w.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:fi,Le=(J.isMeshStandardMaterial?ue:V).get(J.envMap||Ae),ke=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ge=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Oe=!!K.morphAttributes.position,Ye=!!K.morphAttributes.normal,$e=!!K.morphAttributes.color;let ct=hn;J.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ct=w.toneMapping);const it=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,tt=it!==void 0?it.length:0,Be=ne.get(J),rt=f.state.lights;if(Ue===!0&&(Y===!0||y!==_)){const xt=y===_&&J.id===M;le.setState(J,y,xt)}let Ke=!1;J.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==rt.state.version||Be.outputColorSpace!==Ie||B.isBatchedMesh&&Be.batching===!1||!B.isBatchedMesh&&Be.batching===!0||B.isBatchedMesh&&Be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Be.instancing===!1||!B.isInstancedMesh&&Be.instancing===!0||B.isSkinnedMesh&&Be.skinning===!1||!B.isSkinnedMesh&&Be.skinning===!0||B.isInstancedMesh&&Be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Be.instancingMorph===!1&&B.morphTexture!==null||Be.envMap!==Le||J.fog===!0&&Be.fog!==pe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==le.numPlanes||Be.numIntersection!==le.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==Ge||Be.morphTargets!==Oe||Be.morphNormals!==Ye||Be.morphColors!==$e||Be.toneMapping!==ct||Be.morphTargetsCount!==tt)&&(Ke=!0):(Ke=!0,Be.__version=J.version);let Et=Be.currentProgram;Ke===!0&&(Et=Ji(J,O,B));let Hn=!1,At=!1,Mi=!1;const ot=Et.getUniforms(),Dt=Be.uniforms;if(I.useProgram(Et.program)&&(Hn=!0,At=!0,Mi=!0),J.id!==M&&(M=J.id,At=!0),Hn||_!==y){I.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ot.setValue(A,"projectionMatrix",y.projectionMatrix),ot.setValue(A,"viewMatrix",y.matrixWorldInverse);const St=ot.map.cameraPosition;St!==void 0&&St.setValue(A,ge.setFromMatrixPosition(y.matrixWorld)),ee.logarithmicDepthBuffer&&ot.setValue(A,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ot.setValue(A,"isOrthographic",y.isOrthographicCamera===!0),_!==y&&(_=y,At=!0,Mi=!0)}if(B.isSkinnedMesh){ot.setOptional(A,B,"bindMatrix"),ot.setOptional(A,B,"bindMatrixInverse");const xt=B.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),ot.setValue(A,"boneTexture",xt.boneTexture,re))}B.isBatchedMesh&&(ot.setOptional(A,B,"batchingTexture"),ot.setValue(A,"batchingTexture",B._matricesTexture,re),ot.setOptional(A,B,"batchingIdTexture"),ot.setValue(A,"batchingIdTexture",B._indirectTexture,re),ot.setOptional(A,B,"batchingColorTexture"),B._colorsTexture!==null&&ot.setValue(A,"batchingColorTexture",B._colorsTexture,re));const It=K.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&ae.update(B,K,Et),(At||Be.receiveShadow!==B.receiveShadow)&&(Be.receiveShadow=B.receiveShadow,ot.setValue(A,"receiveShadow",B.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Dt.envMap.value=Le,Dt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&O.environment!==null&&(Dt.envMapIntensity.value=O.environmentIntensity),At&&(ot.setValue(A,"toneMappingExposure",w.toneMappingExposure),Be.needsLights&&fc(Dt,Mi),pe&&J.fog===!0&&Z.refreshFogUniforms(Dt,pe),Z.refreshMaterialUniforms(Dt,J,H,ie,f.state.transmissionRenderTarget[y.id]),Ar.upload(A,ea(Be),Dt,re)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ar.upload(A,ea(Be),Dt,re),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ot.setValue(A,"center",B.center),ot.setValue(A,"modelViewMatrix",B.modelViewMatrix),ot.setValue(A,"normalMatrix",B.normalMatrix),ot.setValue(A,"modelMatrix",B.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const xt=J.uniformsGroups;for(let St=0,zr=xt.length;St<zr;St++){const En=xt[St];Ve.update(En,Et),Ve.bind(En,Et)}}return Et}function fc(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function pc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,O,K){const J=ne.get(y);J.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ne.get(y.texture).__webglTexture=O,ne.get(y.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){const K=ne.get(y);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0};const mc=A.createFramebuffer();this.setRenderTarget=function(y,O=0,K=0){L=y,R=O,E=K;let J=!0,B=null,pe=!1,Ae=!1;if(y){const Le=ne.get(y);if(Le.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(A.FRAMEBUFFER,null),J=!1;else if(Le.__webglFramebuffer===void 0)re.setupRenderTarget(y);else if(Le.__hasExternalTextures)re.rebindTextures(y,ne.get(y.texture).__webglTexture,ne.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Oe=y.depthTexture;if(Le.__boundDepthTexture!==Oe){if(Oe!==null&&ne.has(Oe)&&(y.width!==Oe.image.width||y.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(y)}}const ke=y.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ae=!0);const Ge=ne.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?B=Ge[O][K]:B=Ge[O],pe=!0):y.samples>0&&re.useMultisampledRTT(y)===!1?B=ne.get(y).__webglMultisampledFramebuffer:Array.isArray(Ge)?B=Ge[K]:B=Ge,U.copy(y.viewport),F.copy(y.scissor),k=y.scissorTest}else U.copy(xe).multiplyScalar(H).floor(),F.copy(j).multiplyScalar(H).floor(),k=Te;if(K!==0&&(B=mc),I.bindFramebuffer(A.FRAMEBUFFER,B)&&J&&I.drawBuffers(y,B),I.viewport(U),I.scissor(F),I.setScissorTest(k),pe){const Le=ne.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+O,Le.__webglTexture,K)}else if(Ae){const Le=O;for(let ke=0;ke<y.textures.length;ke++){const Ge=ne.get(y.textures[ke]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+ke,Ge.__webglTexture,K,Le)}}else if(y!==null&&K!==0){const Le=ne.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Le.__webglTexture,K)}M=-1},this.readRenderTargetPixels=function(y,O,K,J,B,pe,Ae,Ie=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){I.bindFramebuffer(A.FRAMEBUFFER,Le);try{const ke=y.textures[Ie],Ge=ke.format,Oe=ke.type;if(!ee.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-J&&K>=0&&K<=y.height-B&&(y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ie),A.readPixels(O,K,J,B,De.convert(Ge),De.convert(Oe),pe))}finally{const ke=L!==null?ne.get(L).__webglFramebuffer:null;I.bindFramebuffer(A.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(y,O,K,J,B,pe,Ae,Ie=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le)if(O>=0&&O<=y.width-J&&K>=0&&K<=y.height-B){I.bindFramebuffer(A.FRAMEBUFFER,Le);const ke=y.textures[Ie],Ge=ke.format,Oe=ke.type;if(!ee.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ye),A.bufferData(A.PIXEL_PACK_BUFFER,pe.byteLength,A.STREAM_READ),y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ie),A.readPixels(O,K,J,B,De.convert(Ge),De.convert(Oe),0);const $e=L!==null?ne.get(L).__webglFramebuffer:null;I.bindFramebuffer(A.FRAMEBUFFER,$e);const ct=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await cu(A,ct,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ye),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,pe),A.deleteBuffer(Ye),A.deleteSync(ct),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,K=0){const J=Math.pow(2,-K),B=Math.floor(y.image.width*J),pe=Math.floor(y.image.height*J),Ae=O!==null?O.x:0,Ie=O!==null?O.y:0;re.setTexture2D(y,0),A.copyTexSubImage2D(A.TEXTURE_2D,K,0,0,Ae,Ie,B,pe),I.unbindTexture()};const gc=A.createFramebuffer(),vc=A.createFramebuffer();this.copyTextureToTexture=function(y,O,K=null,J=null,B=0,pe=null){pe===null&&(B!==0?(ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=B,B=0):pe=0);let Ae,Ie,Le,ke,Ge,Oe,Ye,$e,ct;const it=y.isCompressedTexture?y.mipmaps[pe]:y.image;if(K!==null)Ae=K.max.x-K.min.x,Ie=K.max.y-K.min.y,Le=K.isBox3?K.max.z-K.min.z:1,ke=K.min.x,Ge=K.min.y,Oe=K.isBox3?K.min.z:0;else{const It=Math.pow(2,-B);Ae=Math.floor(it.width*It),Ie=Math.floor(it.height*It),y.isDataArrayTexture?Le=it.depth:y.isData3DTexture?Le=Math.floor(it.depth*It):Le=1,ke=0,Ge=0,Oe=0}J!==null?(Ye=J.x,$e=J.y,ct=J.z):(Ye=0,$e=0,ct=0);const tt=De.convert(O.format),Be=De.convert(O.type);let rt;O.isData3DTexture?(re.setTexture3D(O,0),rt=A.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(re.setTexture2DArray(O,0),rt=A.TEXTURE_2D_ARRAY):(re.setTexture2D(O,0),rt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,O.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,O.unpackAlignment);const Ke=A.getParameter(A.UNPACK_ROW_LENGTH),Et=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Hn=A.getParameter(A.UNPACK_SKIP_PIXELS),At=A.getParameter(A.UNPACK_SKIP_ROWS),Mi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,it.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,it.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ke),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ge),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Oe);const ot=y.isDataArrayTexture||y.isData3DTexture,Dt=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const It=ne.get(y),xt=ne.get(O),St=ne.get(It.__renderTarget),zr=ne.get(xt.__renderTarget);I.bindFramebuffer(A.READ_FRAMEBUFFER,St.__webglFramebuffer),I.bindFramebuffer(A.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let En=0;En<Le;En++)ot&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ne.get(y).__webglTexture,B,Oe+En),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ne.get(O).__webglTexture,pe,ct+En)),A.blitFramebuffer(ke,Ge,Ae,Ie,Ye,$e,Ae,Ie,A.DEPTH_BUFFER_BIT,A.NEAREST);I.bindFramebuffer(A.READ_FRAMEBUFFER,null),I.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||ne.has(y)){const It=ne.get(y),xt=ne.get(O);I.bindFramebuffer(A.READ_FRAMEBUFFER,gc),I.bindFramebuffer(A.DRAW_FRAMEBUFFER,vc);for(let St=0;St<Le;St++)ot?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,It.__webglTexture,B,Oe+St):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,It.__webglTexture,B),Dt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,xt.__webglTexture,pe,ct+St):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,xt.__webglTexture,pe),B!==0?A.blitFramebuffer(ke,Ge,Ae,Ie,Ye,$e,Ae,Ie,A.COLOR_BUFFER_BIT,A.NEAREST):Dt?A.copyTexSubImage3D(rt,pe,Ye,$e,ct+St,ke,Ge,Ae,Ie):A.copyTexSubImage2D(rt,pe,Ye,$e,ke,Ge,Ae,Ie);I.bindFramebuffer(A.READ_FRAMEBUFFER,null),I.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Dt?y.isDataTexture||y.isData3DTexture?A.texSubImage3D(rt,pe,Ye,$e,ct,Ae,Ie,Le,tt,Be,it.data):O.isCompressedArrayTexture?A.compressedTexSubImage3D(rt,pe,Ye,$e,ct,Ae,Ie,Le,tt,it.data):A.texSubImage3D(rt,pe,Ye,$e,ct,Ae,Ie,Le,tt,Be,it):y.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,pe,Ye,$e,Ae,Ie,tt,Be,it.data):y.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,pe,Ye,$e,it.width,it.height,tt,it.data):A.texSubImage2D(A.TEXTURE_2D,pe,Ye,$e,Ae,Ie,tt,Be,it);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ke),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Et),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Hn),A.pixelStorei(A.UNPACK_SKIP_ROWS,At),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Mi),pe===0&&O.generateMipmaps&&A.generateMipmap(rt),I.unbindTexture()},this.initRenderTarget=function(y){ne.get(y).__webglFramebuffer===void 0&&re.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?re.setTextureCube(y,0):y.isData3DTexture?re.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?re.setTexture2DArray(y,0):re.setTexture2D(y,0),I.unbindTexture()},this.resetState=function(){R=0,E=0,L=null,I.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const ql=":root{font-family:Arial,Apple SD Gothic Neo,Malgun Gothic,sans-serif;color:#292929;background:#fff;font-synthesis:none}*{box-sizing:border-box}body{margin:0}button,input{font:inherit}button{cursor:pointer;color:inherit;background:#fff;border:1px solid #aaa;min-height:44px;padding:10px 17px;font-size:12px}button:disabled{opacity:.45;cursor:default}button:focus-visible,input:focus-visible,[tabindex]:focus-visible,a:focus-visible{outline:3px solid #333;outline-offset:4px}a{color:inherit}h1,p,dl,dd{margin:0}#fold-app{max-width:1240px;margin:auto;padding:0 48px}.demo-header{display:flex;justify-content:space-between;gap:20px;padding:25px 0;border-bottom:1px solid #ddd;font-size:10px;line-height:1.8}.demo-header span{letter-spacing:1px}.demo-intro{display:flex;align-items:end;justify-content:space-between;gap:30px;padding:42px 0 30px}.overline{font-size:11px;color:#666;margin-bottom:14px}h1{font-size:29px;font-weight:500;letter-spacing:-.6px}.demo-intro>div>p:last-child{font-size:13px;line-height:1.9;color:#555;margin-top:16px}dl{font-size:11px;line-height:1.8}dl>div{display:flex;gap:20px;padding:5px 0}dt{color:#666;min-width:55px}.viewer{border:1px solid #c8c8c8;background:#fafafa}.viewer-top,.viewer-bottom{display:flex;justify-content:space-between;gap:20px;padding:18px 22px;font-size:11px;line-height:1.7}.viewer-top{border-bottom:1px solid #e3e3e3}.viewer-top span:last-child{color:#666}.viewer-bottom{border-top:1px solid #e3e3e3}.stage{height:530px;position:relative;perspective:1800px;overflow:hidden;touch-action:pan-y;-webkit-user-select:none;user-select:none}.stage[data-state=folded]{cursor:grab}.stage.dragging{cursor:grabbing}.rig{position:absolute;top:50%;left:50%;width:0;height:0;transform-style:preserve-3d}.turntable{position:absolute;left:-120px;top:-140px;width:240px;height:280px;transform-style:preserve-3d}.package-root{width:240px;height:280px;position:relative;transform-style:preserve-3d}.panel{position:absolute;transform-style:preserve-3d}.paper,.paper-inside{position:absolute;inset:0;backface-visibility:hidden;pointer-events:none}.paper{transform:translateZ(.12px)}.paper>img{display:block;width:100%;height:100%;pointer-events:none}.paper-inside{background:#fff9fc;transform:rotateY(180deg) translateZ(.12px)}.front{width:240px;height:280px;left:0;top:0}.left{width:80px;height:280px;left:-80px;top:0;transform-origin:right center}.back{width:240px;height:280px;left:-240px;top:0;transform-origin:right center}.right{width:80px;height:280px;left:240px;top:0;transform-origin:left center}.glue{width:30.4px;height:280px;left:-30.4px;top:0;transform-origin:right center}.glue .paper-inside{clip-path:polygon(100% 0,0 3%,0 85%,18% 92%,100% 100%)}.lid{width:240px;height:80px;left:0;top:-80px;transform-origin:center bottom}.lid-tuck{width:240px;height:30.4px;left:0;top:-30.4px;transform-origin:center bottom}.lid-tuck .paper-inside{border-radius:20px 20px 0 0}.dust-left-top,.dust-right-top{width:80px;height:55.8px;left:0;top:-55.8px;transform-origin:center bottom}.dust-left-top .paper-inside,.dust-right-top .paper-inside{clip-path:polygon(0 100%,0 75%,12% 55%,18% 0,90% 0,100% 100%)}.bottom-front,.bottom-back{width:240px;height:66.4px;left:0;top:280px;transform-origin:center top}.bottom-front .paper-inside,.bottom-back .paper-inside{clip-path:polygon(0 0,100% 0,97% 100%,66% 60%,49.5% 60%,49.5% 72%,40% 72%,33% 100%,4% 100%)}.dust-left-bottom,.dust-right-bottom{width:80px;height:44.6px;left:0;top:280px;transform-origin:center top}.dust-left-bottom .paper-inside,.dust-right-bottom .paper-inside{clip-path:polygon(0 0,100% 0,78% 38%,65% 100%,27% 100%)}.package-shadow{position:absolute;left:calc(50% - 105px);top:calc(50% + 165px);width:210px;height:12px;border-radius:50%;background:#333;filter:blur(11px);opacity:0;pointer-events:none}.main-controls{display:flex;justify-content:center;gap:12px;padding:25px 0}.primary{background:#303030;color:#fff;border-color:#303030;min-width:185px}.detail-controls{display:flex;justify-content:space-between;align-items:end;gap:35px;border-top:1px solid #ddd;padding:25px 0}.scrubber{flex:1;max-width:430px}.scrubber label{font-size:11px;display:block;margin-bottom:15px}.scrubber input{width:100%;accent-color:#444;min-height:26px;margin:0}.rotation-controls{display:flex;gap:7px;flex-wrap:wrap}.rotation-controls button{font-size:11px;padding:10px 12px}.demo-notes{padding:0 0 35px;font-size:11px;color:#555;line-height:1.9}.demo-notes p+p{margin-top:10px}.demo-notes strong{color:#333;margin-right:9px}@media(max-width:700px){#fold-app{padding:0 20px}.demo-header{font-size:9px;padding:17px 0;gap:12px}.demo-intro{display:block;padding:28px 0 22px}h1{font-size:25px}.demo-intro>div>p:last-child{font-size:12px}.demo-intro dl{font-size:10px;margin-top:18px}.demo-intro dl>div{padding:2px 0}.overline{font-size:10px}.viewer-top,.viewer-bottom{padding:13px 12px;font-size:10px;gap:10px}.viewer-top{flex-wrap:wrap}.viewer-top span:last-child{font-size:9px}.stage{height:390px;perspective:1100px}.main-controls{gap:8px;padding:20px 0}.main-controls button{font-size:11px;padding:10px 12px}.primary{min-width:160px}.detail-controls{display:block;padding:20px 0}.scrubber{max-width:none}.rotation-controls{margin-top:20px;justify-content:center;gap:6px}.rotation-controls button{font-size:10px;padding:10px}.demo-notes{font-size:10px}.package-shadow{top:calc(50% + 110px);width:130px;left:calc(50% - 65px)}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important}}.render-filters{position:absolute;pointer-events:none}.paper>img,.paper-inside>img{position:absolute;inset:0;width:100%;height:100%;display:block}.paper>.ink-original{opacity:calc(1 - var(--clean-mix,0))}.paper>.ink-clean{opacity:var(--clean-mix,0);filter:url(#no-cutlines)}.paper-inside{background:none!important;clip-path:none!important;border-radius:0!important}.paper-inside>img{transform:scaleX(-1);filter:url(#paper-stock)}.bottom-backing{position:absolute;left:0;top:279.1px;width:240px;height:80px;background:#efa0c3;transform-origin:center top;transform:rotateX(-90deg);backface-visibility:hidden;opacity:var(--base-opacity,0)}.bottom-main,.diagonal-hinge{position:absolute;inset:0;transform-style:preserve-3d}.diagonal-hinge{transform-origin:100% 0}.bottom-main .paper>img,.bottom-main .paper-inside>img{clip-path:polygon(0 0,100% 0,78.47% 77.66%,65.78% 59.57%,49.56% 59.57%,49.56% 72.34%,40.12% 72.34%,32.74% 100%,3.83% 100%)}.diagonal-hinge .paper>img,.diagonal-hinge .paper-inside>img{clip-path:polygon(100% 0,96.16% 12.77%,98.82% 36.17%,97.05% 100%,78.47% 77.66%)}.bottom-backing{background:none;backface-visibility:visible;transform-style:preserve-3d;top:279.5px}.base-outside,.base-inside{position:absolute;inset:0;backface-visibility:hidden}.base-outside{background:#efa0c3;transform:translateZ(.12px)}.base-inside{background:#f8c4dc;transform:rotateY(180deg) translateZ(.12px)}",Yl=":host{font-family:inherit;color:#423d33;container-type:inline-size}button,input{font:inherit}button{border:1px solid #cfc8ba;border-radius:2px;background:#fff;color:#776b56;font-size:11px;font-weight:400;min-height:44px;transition:background .15s}button:not(:disabled):hover{border-color:#96866c;background:#f1eee7}button:focus-visible,input:focus-visible,[tabindex]:focus-visible{outline:2px solid #96805a;outline-offset:3px}.model-name{font-size:16px;font-weight:400;color:#494537}.dimensions{color:#968872;font-size:10px;line-height:1.8}.viewer{border:1px solid #d9d2c5;border-radius:0;background:#f7f7f5;overflow:hidden}.viewer-top,.viewer-bottom{padding:13px 16px;border-color:#ddd6c8;color:#8b7c63;font-size:10px;gap:10px}.viewer-top{flex-wrap:wrap}.viewer-top span:last-child{color:#968b77}.stage{height:390px;background:#f7f7f5}.primary{background:#32352c;color:#f3eee0;border-color:#32352c;min-width:175px}.primary:not(:disabled):hover{border-color:#32352c;background:#484b40;color:#fff}.main-controls{gap:8px;padding:20px 0}.detail-controls{border-color:#ddd6c8;gap:20px;padding:20px 0}.scrubber label{color:#968872}.scrubber input{accent-color:#877450}.rotation-controls{gap:6px}.rotation-controls button{padding:8px 12px}.demo-notes{color:#9a8c74;font-size:10px;line-height:1.9}.viewer-bottom{min-height:52px}#progress-text{color:#8f7851}@container (max-width:740px){.detail-controls{display:block}.scrubber{max-width:none}.rotation-controls{margin-top:15px;justify-content:flex-start}.stage{height:360px}.model-name{font-size:15px}}@container (max-width:400px){.stage{height:300px}.viewer-top,.viewer-bottom{font-size:9px;padding:12px}.main-controls{justify-content:flex-start}.main-controls button{padding:9px 11px;font-size:10px}.primary{min-width:152px}.rotation-controls button{padding:8px 10px;font-size:10px}.demo-notes{font-size:9px}}@media(prefers-reduced-motion:reduce){*{transition:none!important}}",So=new Map;function Zl(i){return So.has(i)||So.set(i,new Sd().loadAsync(i).then(e=>(e.colorSpace=un,e.minFilter=Bt,e.magFilter=Bt,e.generateMipmaps=!1,e))),So.get(i)}const d0=`varying vec2 vUv;varying vec3 vNormal;
void main(){vUv=uv;vNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,h0=`precision highp float;
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
}`;function Kl(i,e,t){const n=e||[[0,0],[100,0],[100,100],[0,100]],r=Array.from({length:16},()=>new st);n.forEach(([a,c],l)=>{const[u,d]=n[(l+1)%n.length];r[l].set(a/100,1-c/100,u/100,1-d/100)});const o=new gn({vertexShader:d0,fragmentShader:h0,side:Ot,depthTest:!0,depthWrite:!0,toneMapped:!1,uniforms:{printMap:{value:i},texSize:{value:new ye(i.image.width,i.image.height)},stock:{value:new N},clean:{value:0},edges:{value:r},edgeCount:{value:n.length}}}),s=new Ze(t).convertLinearToSRGB();return o.uniforms.stock.value=new N(s.r,s.g,s.b),o}const Ro=i=>Math.max(0,Math.min(1,i)),f0=i=>i*i*(3-2*i);let p0=0;function m0(i,e,t={}){const n=e[0],r=n.shape==="pouch",o=`retail-${++p0}`,[s,a,c]=n.dimensions,l=`${n.label} ${n.title}`,u=i.attachShadow({mode:"open"}),d=I=>u.querySelector(I),p=I=>u.querySelectorAll(I);u.innerHTML=`<style>${ql}
 :host{display:block;min-width:0;font-family:Arial,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;color:#292929}.model-name{font-size:17px;margin:0 0 9px;font-weight:600}.dimensions{font-size:11px;margin:0 0 18px;color:#555;line-height:1.8}.stage{height:470px;touch-action:pan-y}.stage canvas{display:block;width:100%;height:100%}.main-controls{padding:20px 0;flex-wrap:wrap}.scrubber{max-width:360px}.demo-notes{padding-bottom:0}.demo-notes p{margin:0}.viewer-bottom{min-height:55px}.render-error{padding:35px;font-size:12px;line-height:1.9}
 @media(max-width:700px){.stage{height:370px}.model-name{font-size:15px}.dimensions{font-size:10px}.detail-controls{display:block}.scrubber{max-width:none}.rotation-controls{margin-top:18px}.viewer-top{font-size:9px}.demo-notes{font-size:10px}}
 ${Yl}</style><div class="widget"><h4 class="model-name">${l}</h4><p class="dimensions">${n.dimensionNote}</p>
 <section class="viewer" aria-label="${l} 입체 목업"><div class="viewer-top"><span id="view-state">01 / 평면 그래픽</span><span id="view-hint">자료를 불러오는 중</span></div><div class="stage" tabindex="0" role="group" aria-label="${l}. 입체 상태에서 드래그 회전, 휠 확대·축소가 가능합니다." data-state="loading"></div><div class="viewer-bottom"><span id="phase-text" aria-live="polite">자료를 불러오는 중</span><span id="progress-text">0%</span></div></section>
 <div class="main-controls"><button id="fold-toggle" class="primary" disabled>3D 목업으로 보기</button><button id="flat-reset" disabled>평면 그래픽으로 초기화</button></div>
 <div class="detail-controls"><div class="scrubber"><label for="${o}">${r?"앞뒤 인쇄면 → 실링 파우치":"전면 그래픽 → 입체 진열 팩"}</label><input id="${o}" class="fold-progress" type="range" min="0" max="100" step="1" value="0" disabled /></div><div class="rotation-controls" role="group" aria-label="패키지 시점"><button data-view="front" disabled>정면</button><button data-view="back" disabled>뒷면</button><button data-view="side" disabled>측면</button><button data-view="bottom" disabled>바닥</button><button data-view="reset" disabled>초기 시점</button></div></div>
 <div class="demo-notes"><p>${r?"제공된 앞·뒷면으로 봉투를 만들고, 상하 실링과 중앙의 볼륨을 표현했습니다.":"제공 전면 그래픽으로 얇은 진열 팩과 원형 배지의 높이감을 표현했습니다. 후면은 자료가 없어 무지로 표시합니다."}</p><p>약 2초 입체 전환 · 드래그 회전 · 휠 확대/축소 · 초기 시점에서 배율 복원.</p></div></div>`;const h=d(".stage"),v=d("#fold-toggle"),x=d(".fold-progress");let m=t.progress??0,f=t.rx??-12,T=t.ry??-28,S=t.zoom??1,w,C,R,E,L,M,_,U=!1,F=!1,k=!1,W=0,q=!1,X=0,ie=0;const H=[],ce=[],me=[],xe=[];i.dataset.variant=n.id,i.dataset.state="loading",i.dataset.dimensions=n.dimensions.join(",");function j(I){const $=new Bl({color:I,roughness:.5,metalness:.03,side:Ot});return H.push($),$}function Te(I){const $=Kl(I,null,n.stock),ne=$.uniforms.edges.value;let re=$.uniforms.edgeCount.value;for(const g of n.sealLines)ne[re++].set(0,1-g,1,1-g);const[V,ue,b]=n.hole;for(let g=0;g<8;g++){const P=g*Math.PI/4,z=(g+1)*Math.PI/4;ne[re++].set(V+b*Math.cos(P),1-ue+b*s/a*Math.sin(P),V+b*Math.cos(z),1-ue+b*s/a*Math.sin(z))}return $.uniforms.edgeCount.value=re,H.push($),$}function Fe(I=a/2,$=-a/2,ne=!1){const re=new Os;if(re.moveTo(-s/2,I),re.lineTo(s/2,I),re.lineTo(s/2,$),re.lineTo(-s/2,$),re.closePath(),ne){const[V,ue,b]=n.hole,g=new vs;g.absarc((V-.5)*s,a/2-ue*a,b*s,0,Math.PI*2,!0),re.holes.push(g)}return re}function Ue(I){const $=I.getAttribute("position"),ne=[];for(let re=0;re<$.count;re++)ne.push($.getX(re)/s+.5,$.getY(re)/a+.5);return I.setAttribute("uv",new dt(ne,2)),ce.push(I),I}function Y(I,$,ne,re=!1){const V=new ut(Ue($),ne);I.add(V);const ue=$.getAttribute("position"),b=[];for(let g=0;g<ue.count;g++){const P=ue.getX(g),z=ue.getY(g),Z=Ro((a/2-15-z)/(a-30)),G=Ro(P/s+.5);b.push(r?.16+(re?c/2*Math.pow(Math.max(0,Math.sin(Math.PI*G)*Math.sin(Math.PI*Z)),.8):0):c/2+.02)}return me.push({mesh:V,depth:b}),V}function Q(I){C=new Ds,C.background=new Ze("#f7f7f5"),C.add(new zl("#ffffff","#b7acb5",2));const $=new xs("#ffffff",2.2);$.position.set(-120,200,300),C.add($),R=new Ut(30,1,10,5e3),E=new Ct,C.add(E),L=new Ct,M=new Ct,E.add(L,M);const ne=Te(I.front),re=I.back?Te(I.back):j("#f6f1f3");for(const[b,g]of[[L,ne],[M,re]])if(r){Y(b,new Di(Fe(a/2,a/2-15,!0),48),g);const P=new Zi(s,a-30,56,48);Y(b,P,g,!0),Y(b,new Di(Fe(-a/2+15,-a/2),8),g)}else Y(b,new Di(Fe(a/2,-a/2,!0),64),g);const V=new Bs(Fe(a/2,-a/2,!0),{depth:r?.3:c,bevelEnabled:!1,curveSegments:48,steps:1});V.translate(0,0,-(r?.3:c)/2),ce.push(V);const ue=new pi;if(ue.visible=!1,H.push(ue),_=new ut(V,[ue,j(r?n.stock:"#e2d5dc")]),E.add(_),!r){const b=I.front;for(const g of[420,590])for(const P of[120,290,460]){const z=.13675213675213677*s,Z=(P/585-.5)*s,G=a/2-g/b.image.height*a,Se=new Fr(z,64),le=Se.getAttribute("position"),we=[];for(let Pe=0;Pe<le.count;Pe++)we.push((le.getX(Pe)+Z)/s+.5,(le.getY(Pe)+G)/a+.5);Se.setAttribute("uv",new dt(we,2)),ce.push(Se);const _e=new Ct,ae=new ut(Se,Te(b));ae.position.z=.85,_e.add(ae);const de=new Or(z,z,1.6,64,1,!0);de.rotateX(Math.PI/2),ce.push(de),_e.add(new ut(de,j(n.group==="daiso"?"#dac28d":n.stock))),_e.position.set(Z,G,0),L.add(_e),xe.push(_e)}}}function ge(){W&&cancelAnimationFrame(W),W=0,q=!1,h.classList.remove("dragging"),h.removeAttribute("aria-busy"),v.disabled=!U}function be(){if(!U||F)return;const I=f0(m),$=Math.PI/180;for(const{mesh:Z,depth:G}of me){const Se=Z.geometry.getAttribute("position");for(let le=0;le<Se.count;le++)Se.setZ(le,G[le]*I);Se.needsUpdate=!0,Z.geometry.computeVertexNormals()}L.position.x=r?-s*.6*(1-I):0,M.position.x=r?s*.6*(1-I):0,M.rotation.y=Math.PI*I,M.visible=r||m>.001,_.scale.z=I,_.visible=m>.001;for(const Z of xe)Z.visible=m>.001,Z.position.z=(c/2+.85)*I,Z.scale.z=I;H.forEach(Z=>{Z.uniforms?.clean&&(Z.uniforms.clean.value=I)}),E.rotation.set(-f*I*$,T*I*$,0,"XYZ");const ne=h.clientWidth,re=h.clientHeight,V=ne/re,ue=Math.tan(R.fov*$/2),b=Math.max(a/2/ue,s*(r?2.25:1.1)/2/ue/V)*1.16,g=Math.hypot(s,a,c)/2/Math.sin(R.fov*$/2)*1.15;R.aspect=V,R.position.z=(b+(g-b)*I)/S,R.updateProjectionMatrix(),w.render(C,R);const P=m>=.999,z=m<=.001;i.dataset.state=h.dataset.state=z?"flat":P?"folded":"partial",d("#view-state").textContent=z?"01 / 평면 그래픽":P?"03 / 입체 패키지":"02 / 입체 전환",d("#view-hint").textContent=P?"드래그 회전 · 휠 확대/축소":"휠 확대/축소",d("#phase-text").textContent=z?r?"앞면 · 뒷면 인쇄 그래픽":"전면 인쇄 그래픽":P?"완성 · 드래그로 회전":r?"앞뒤 면 조립 · 실링과 볼륨 형성":"진열 팩 · 배지 높이감 형성",d("#progress-text").textContent=Math.round(m*100)+"%",x.value=Math.round(m*100),x.setAttribute("aria-valuetext",`${P?"입체 목업":"평면에서 입체로 전환"}, ${Math.round(m*100)}퍼센트`),v.textContent=P?"평면 그래픽으로 보기":z?"3D 목업으로 보기":"이어서 3D로 보기",p("[data-view]").forEach(Z=>Z.disabled=!P)}function ve(){U&&!F&&(w.setSize(h.clientWidth,h.clientHeight,!1),be())}async function ze(){if(!(k||F)){k=!0;try{w=new Vs({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"}),w.setPixelRatio(Math.min(devicePixelRatio,1.5)),h.append(w.domElement);const I=Object.fromEntries(await Promise.all(Object.entries(n.textures).map(async([$,ne])=>[$,await Zl(ne)])));if(F)return;Q(I),U=!0,v.disabled=x.disabled=d("#flat-reset").disabled=!1,ve()}catch(I){i.dataset.state=h.dataset.state="error",d("#phase-text").textContent="3D 표시 실패",h.innerHTML='<p class="render-error">3D 화면을 표시할 수 없습니다. 최신 Chrome 또는 Safari에서 다시 열어주세요.</p>',console.error(I)}}}function je(I){if(!U)return;ge();const $=m;if(matchMedia("(prefers-reduced-motion: reduce)").matches){m=I,be();return}v.disabled=!0,h.setAttribute("aria-busy","true");const ne=performance.now(),re=Math.max(1,2e3*Math.abs(I-$)),V=ue=>{const b=Ro((ue-ne)/re);m=$+(I-$)*b,be(),b<1?W=requestAnimationFrame(V):(ge(),be())};W=requestAnimationFrame(V)}v.onclick=()=>je(m>=.999?0:1),d("#flat-reset").onclick=()=>{f=-12,T=-28,S=1,je(0)},x.oninput=()=>{ge(),m=Number(x.value)/100,be()};const A={front:[0,0],back:[0,180],side:[0,-82],bottom:[85,30],reset:[-12,-28]};p("[data-view]").forEach(I=>I.onclick=()=>{[f,T]=A[I.dataset.view],I.dataset.view==="reset"&&(S=1),be()}),h.onpointerdown=I=>{m<.999||W||(q=!0,X=I.clientX,ie=I.clientY,h.setPointerCapture(I.pointerId),h.classList.add("dragging"))},h.onpointermove=I=>{q&&(T+=(I.clientX-X)*.5,f=Math.max(-90,Math.min(90,f-(I.clientY-ie)*.35)),X=I.clientX,ie=I.clientY,be())},h.onpointerup=h.onpointercancel=()=>{q=!1,h.classList.remove("dragging")},h.onkeydown=I=>{m<.999||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(I.key)||(I.preventDefault(),I.key==="ArrowLeft"&&(T-=10),I.key==="ArrowRight"&&(T+=10),I.key==="ArrowUp"&&(f=Math.max(-90,f-10)),I.key==="ArrowDown"&&(f=Math.min(90,f+10)),be())},h.addEventListener("wheel",I=>{if(!U||W)return;I.preventDefault();const $=I.deltaY*(I.deltaMode===1?16:I.deltaMode===2?h.clientHeight:1);S=Math.max(.65,Math.min(2.5,S*Math.exp(-Math.max(-200,Math.min(200,$))*.0015))),be()},{passive:!1});const se=new ResizeObserver(ve);se.observe(h);const te=new IntersectionObserver(I=>{I.some($=>$.isIntersecting)&&(ze(),te.disconnect())},{rootMargin:"500px"});te.observe(i);const ee={getState(){return{progress:m,rx:f,ry:T,zoom:S}},setView(I,$){f=I,T=$,be()},setBackground(I){C&&(C.background.set(I),be())},destroy(){F=!0,ge(),te.disconnect(),se.disconnect(),ce.forEach(I=>I.dispose()),H.forEach(I=>I.dispose()),w?.dispose(),u.innerHTML=""}};return i.viewer=ee,ee}const il=i=>Math.max(0,Math.min(1,i)),g0=i=>i*i*(3-2*i);let v0=0;function Jl(i,e,t={}){if(["retail-card","pouch"].includes(e[0].shape))return m0(i,e,t);const n=i.attachShadow({mode:"open"}),r=++v0,o=e[0],s=V=>n.querySelector(V),a=V=>n.querySelectorAll(V),c=o.title?`${o.label} ${o.title}`:o.group==="full"?"풀박스":`${o.label} ${o.group==="single"?"싱글팩":"리미티드 에디션"}`;n.innerHTML=`<style>${ql}
 :host{display:block;min-width:0;font-family:Arial,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;color:#292929}.model-name{font-size:17px;margin:0 0 9px;font-weight:600}.dimensions{font-size:11px;margin:0 0 18px;color:#555}.stage{height:470px;touch-action:pan-y}.stage canvas{display:block;width:100%;height:100%}.main-controls{padding:20px 0;flex-wrap:wrap}.scrubber{max-width:360px}.demo-notes{padding-bottom:0}.demo-notes p{margin:0}.render-error{padding:35px;font-size:12px;line-height:1.9}.viewer-bottom{min-height:55px}
 @media(max-width:700px){.stage{height:370px}.model-name{font-size:15px}.dimensions{font-size:10px}.detail-controls{display:block}.scrubber{max-width:none}.rotation-controls{margin-top:18px}.viewer-top{font-size:9px}.demo-notes{font-size:10px}}
 ${Yl}</style><div class="widget"><h4 class="model-name">${c}</h4><p class="dimensions">${o.dimensionNote||`${o.dimensions.join(" × ")} mm · ${o.group==="single"?"제공 사양 기준":"인수인계 규격 기록 기준"}`}</p>
 <section class="viewer" aria-label="${c} 전개도 접힘 뷰어"><div class="viewer-top"><span id="view-state">01 / 평면 전개도</span><span id="view-hint">자료를 불러오는 중</span></div><div class="stage" tabindex="0" role="group" aria-label="${c}. 마우스 휠로 확대·축소하고, 접은 후 드래그 또는 방향키로 회전할 수 있습니다." data-state="loading"></div><div class="viewer-bottom"><span id="phase-text" aria-live="polite">자료를 불러오는 중</span><span id="progress-text">0%</span></div></section>
 <div class="main-controls"><button id="fold-toggle" class="primary" disabled>접어서 3D로 보기</button><button id="flat-reset" disabled>전개도로 초기화</button>${o.shape==="display"?'<button id="display-toggle" disabled aria-pressed="false">진열형으로 보기</button>':""}</div>
 <div class="detail-controls"><div class="scrubber"><label for="fold-progress-${r}">접힘 단계 직접 살펴보기</label><input id="fold-progress-${r}" class="fold-progress" type="range" min="0" max="100" step="1" value="0" disabled aria-valuetext="평면 전개도, 0퍼센트"/></div><div class="rotation-controls" role="group" aria-label="완성된 패키지 시점"><button data-view="front" disabled>정면</button><button data-view="back" disabled>뒷면</button><button data-view="side" disabled>측면</button><button data-view="bottom" disabled>바닥</button><button data-view="reset" disabled>초기 시점</button></div></div>
 <div class="demo-notes"><p>전개도 → 약 2초 접힘 → 드래그 회전 · 휠 확대/축소 → 다시 펼치기. 칼선은 펼친 전개도에서만 표시합니다.</p><p>제공 그래픽과 규격 기록을 바탕으로 한 시각적 시연입니다. 생산용 조립·접착 순서와 종이 두께의 정밀 검증은 별도입니다.</p></div></div>`;const l=s(".stage"),u=s("#fold-toggle"),d=s(".fold-progress"),[p,h,v]=o.dimensions,{tuck:x,dustTop:m,bottom:f,dustBottom:T,glue:S}=o.heights;let w,C,R,E,L,M,_=!1,U=!1,F=!1,k=t.progress??0,W=0,q=t.rx??-12,X=t.ry??-28,ie=t.zoom??1,H=!1,ce=0,me=0,xe=t.displayOpen??!1;const j={},Te=[],Fe=[],Ue=[],Y=(V,ue)=>g0(il((k-V)/(ue-V)));i.dataset.variant=o.id,i.dataset.state="loading",i.dataset.dimensions=o.dimensions.join(",");function Q(){W&&cancelAnimationFrame(W),W=0,H=!1,l.classList.remove("dragging"),l.removeAttribute("aria-busy"),u.disabled=!_}function ge(V,ue,b,g=0,P=0,z=0){const Z=b||[[0,0],[100,0],[100,100],[0,100]],G=Z.map(([ae,de])=>new ye(g+V*ae/100-z,-P-ue*de/100)),Se=Kt.triangulateShape(G,[]),le=[],we=[];for(const ae of Se){let[de,Pe,De]=ae;const Re=G[de],Ve=G[Pe],D=G[De];(Ve.x-Re.x)*(D.y-Re.y)-(Ve.y-Re.y)*(D.x-Re.x)<0&&([Pe,De]=[De,Pe]);for(const he of[de,Pe,De])le.push(G[he].x,G[he].y,0),we.push(Z[he][0]/100,1-Z[he][1]/100)}const _e=new kt;return _e.setAttribute("position",new dt(le,3)),_e.setAttribute("uv",new dt(we,2)),_e.computeVertexNormals(),Fe.push(_e),_e}function be(V,ue){const b=Kl(V,ue,o.stock);return Te.push(b),b}function ve(V,ue,b,g,P=0,z=0){const Z=new Ct;if(ue.add(Z),j[V]=Z,o.shape==="display"&&["front","left","right"].includes(V)){const G=o.tearHeight*100,Se=V==="front"?[[0,G],[100,G],[100,100],[0,100]]:V==="left"?[[0,0],[100,G],[100,100],[0,100]]:[[0,G],[100,0],[100,100],[0,100]],le=V==="front"?[[0,0],[100,0],[100,G],[0,G]]:V==="left"?[[0,0],[100,0],[100,G]]:[[0,0],[100,0],[0,G]];Z.add(new ut(ge(b,g,Se,P,z),be(ze[V],Se)));const we=new ut(ge(b,g,le,P,z),be(ze[V],le));Z.add(we),Ue.push(we)}else if(V==="bottom-front"||V==="bottom-back"){Z.add(new ut(ge(b,g,o.bottomMain),be(ze[V],o.bottomMain)));const G=new Ct;G.position.x=b,Z.add(G),G.add(new ut(ge(b,g,o.bottomTab,0,0,b),be(ze[V],o.bottomTab))),j[V+"-tab"]=G}else Z.add(new ut(ge(b,g,null,P,z),be(ze[V])));return Z}let ze={};function je(){C=new Ds,C.background=new Ze("#f7f7f5"),R=new Ut(30,1,10,5e3),R.position.z=1e3,E=new Ct,C.add(E),L=new Ct,L.position.set(-p/2,h/2,v/2),E.add(L);const V=ve("left",L,v,h,-v,0),ue=ve("back",V,p,h,-p,0);ue.position.x=-v;const b=ve("glue",ue,S,h,-S,0);b.position.x=-p;const g=ve("right",L,v,h);g.position.x=p,ve("front",L,p,h);const P=ve("lid",L,p,v,0,-v),z=ve("lid-tuck",P,p,x,0,-x);z.position.y=v,ve("dust-left-top",V,v,m,-v,-m),ve("dust-right-top",g,v,m,0,-m);const Z=ve("dust-left-bottom",V,v,T,-v,0);Z.position.y=-h;const G=ve("dust-right-bottom",g,v,T);G.position.y=-h;const Se=ve("bottom-front",L,p,f);Se.position.y=-h,ve("bottom-back",ue,p,f).position.set(-p,-h,0);const we=ge(p,v),_e=new pi({color:o.stock,side:Ot});if(Te.push(_e),M=new ut(we,_e),M.rotation.x=Math.PI/2,M.position.y=-h+(o.shape==="display"?1:.32),L.add(M),o.shape==="display"){const ae=new pi({color:"#fff9fc",side:yt});Te.push(ae),_e.side=mn,M.add(new ut(we,ae))}}function A(){if(!_||U)return;const V=Math.PI/180;j.left.rotation.y=-90*V*Y(.08,.32),j.back.rotation.y=-90*V*Y(.26,.52),j.right.rotation.y=90*V*Y(.4,.61),j.glue.rotation.y=-90*V*Y(.5,.65);for(const de of["dust-left-top","dust-right-top"])j[de].rotation.x=-90*V*Y(.61,.73);for(const de of["dust-left-bottom","dust-right-bottom"])j[de].rotation.x=90*V*Y(.62,.73);j["bottom-back"].rotation.x=90*V*Y(.69,.82),j["bottom-front"].rotation.x=90*V*Y(.74,.87);const ue=new N(o.diagonal[0]*p,o.diagonal[1]*f,0).normalize();for(const de of["bottom-front-tab","bottom-back-tab"])j[de].quaternion.setFromAxisAngle(ue,Math.PI*Y(.57,.74)),j[de].position.z=-.35*Y(.57,.74);j.lid.rotation.x=-90*V*Y(.76,.94),j["lid-tuck"].rotation.x=-90*V*Y(.87,.98);const b=Y(.6,1);if(j["dust-left-top"].position.y=j["dust-right-top"].position.y=-.4*b,j["dust-left-bottom"].position.y=j["dust-right-bottom"].position.y=-h+.6*b,j["bottom-back"].position.y=-h+.25*b,j.glue.position.set(-p+.65*b,0,0),j["lid-tuck"].position.set(0,v-.65*b,0),o.shape==="display"){const de=xe&&k>=.999;Ue.forEach(Pe=>Pe.visible=!de);for(const Pe of["lid","dust-left-top","dust-right-top"])j[Pe].visible=!de;s("#display-toggle").disabled=k<.999,s("#display-toggle").textContent=de?"상단 닫힌 형태로 보기":"진열형으로 보기",s("#display-toggle").setAttribute("aria-pressed",String(de))}M.visible=k>.88,Te.forEach(de=>{de.uniforms&&(de.uniforms.clean.value=Y(.03,.65))});const g=Y(0,1);E.rotation.set(-q*g*V,X*g*V,0,"XYZ"),E.position.set((p+S)/2*(1-g),-(v+x-f)/2*(1-g),0);const P=l.clientWidth,z=l.clientHeight,Z=P/z;R.aspect=Z;const G=Math.tan(R.fov*V/2),Se=Math.max((h+v+x+f)/2/G,(2*p+2*v+S)/2/G/Z)*1.13,le=Math.hypot(p,h,v)/2/Math.sin(R.fov*V/2)*1.12;R.position.z=(Se+(le-Se)*g)/ie,R.updateProjectionMatrix(),w.render(C,R);const we=k>=.999,_e=k<=.001;l.dataset.state=i.dataset.state=_e?"flat":we?"folded":"partial",s("#view-state").textContent=_e?"01 / 평면 전개도":we?"03 / 입체 패키지":"02 / 접힘 과정",s("#view-hint").textContent=we?"드래그 회전 · 휠 확대/축소":"휠 확대/축소 · 연결된 면 접기";const ae=_e?"평면 전개도":k<.61?"옆면과 뒷면 접기":k<.76?"안쪽 날개 접기":k<.9?"바닥과 덮개 접기":we?"완성 · 드래그로 회전":"덮개 마무리";s("#phase-text").textContent=ae,s("#progress-text").textContent=Math.round(k*100)+"%",d.value=Math.round(k*100),d.setAttribute("aria-valuetext",ae+", "+Math.round(k*100)+"퍼센트"),u.textContent=we?"전개도로 펼치기":_e?"접어서 3D로 보기":"이어서 접기",a("[data-view]").forEach(de=>de.disabled=!we)}function se(){!w||!_||(w.setSize(l.clientWidth,l.clientHeight,!1),A())}async function te(){if(!(F||U)){F=!0;try{w=new Vs({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"}),w.setPixelRatio(Math.min(devicePixelRatio,1.5)),l.append(w.domElement),w.domElement.addEventListener("webglcontextlost",ue=>{ue.preventDefault(),Q(),s("#phase-text").textContent="3D 화면이 중단됐습니다. 페이지를 새로 열어주세요."});const V=await Promise.all(Object.entries(o.textures).map(async([ue,b])=>[ue,await Zl(b)]));if(U)return;ze=Object.fromEntries(V),je(),_=!0,u.disabled=d.disabled=s("#flat-reset").disabled=!1,se()}catch(V){i.dataset.state=l.dataset.state="error",l.innerHTML='<p class="render-error">이 브라우저에서 3D 화면을 표시할 수 없습니다. 최신 Chrome 또는 Safari에서 다시 열어주세요.</p>',s("#phase-text").textContent="3D 표시 실패",console.error(V)}}}function ee(V){if(!_)return;Q();const ue=k;if(matchMedia("(prefers-reduced-motion: reduce)").matches||Math.abs(V-ue)<1e-4){k=V,A();return}const b=performance.now(),g=2e3*Math.abs(V-ue);u.disabled=!0,l.setAttribute("aria-busy","true");const P=z=>{const Z=il((z-b)/g);k=ue+(V-ue)*Z,A(),Z<1?W=requestAnimationFrame(P):(Q(),A())};W=requestAnimationFrame(P)}u.onclick=()=>{q=-12,X=-28,ee(k>=.999?0:1)},s("#flat-reset").onclick=()=>{q=-12,X=-28,ie=1,ee(0)},d.oninput=()=>{Q(),k=Number(d.value)/100,A()},s("#display-toggle")&&(s("#display-toggle").onclick=()=>{xe=!xe,A()});const I={front:[0,0],back:[0,180],side:[0,-90],bottom:[85,30],reset:[-12,-28]};a("[data-view]").forEach(V=>V.onclick=()=>{[q,X]=I[V.dataset.view],V.dataset.view==="reset"&&(ie=1),A()}),l.onpointerdown=V=>{k<.999||W||(H=!0,ce=V.clientX,me=V.clientY,l.setPointerCapture(V.pointerId),l.classList.add("dragging"))},l.onpointermove=V=>{H&&(X+=(V.clientX-ce)*.5,q=Math.max(-90,Math.min(90,q-(V.clientY-me)*.35)),ce=V.clientX,me=V.clientY,A())},l.onpointerup=l.onpointercancel=()=>{H=!1,l.classList.remove("dragging")},l.onkeydown=V=>{k<.999||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(V.key)||(V.preventDefault(),V.key==="ArrowLeft"&&(X-=10),V.key==="ArrowRight"&&(X+=10),V.key==="ArrowUp"&&(q=Math.max(-90,q-10)),V.key==="ArrowDown"&&(q=Math.min(90,q+10)),A())},l.addEventListener("wheel",V=>{if(!_||W)return;V.preventDefault();const ue=V.deltaY*(V.deltaMode===1?16:V.deltaMode===2?l.clientHeight:1);ie=Math.max(.65,Math.min(2.5,ie*Math.exp(-Math.max(-200,Math.min(200,ue))*.0015))),A()},{passive:!1});const $=new ResizeObserver(se);$.observe(l);const ne=new IntersectionObserver(V=>{V.some(ue=>ue.isIntersecting)&&(te(),ne.disconnect())},{rootMargin:"500px"});ne.observe(i);const re={getState(){return{progress:k,rx:q,ry:X,zoom:ie,displayOpen:xe}},getInteriorBounds(){if(!_)return null;L.updateWorldMatrix(!0,!0);const V=new lt().copy(L.matrixWorld).invert(),ue={};for(const b of["glue","lid-tuck"]){const g=new xi;j[b].traverse(P=>{if(!P.isMesh)return;const z=P.geometry.getAttribute("position");for(let Z=0;Z<z.count;Z++)g.expandByPoint(new N().fromBufferAttribute(z,Z).applyMatrix4(P.matrixWorld).applyMatrix4(V))}),ue[b]={min:g.min.toArray(),max:g.max.toArray()}}return ue},setBackground(V){C&&(C.background.set(V),A())},setView(V,ue){q=V,X=ue,A()},projectBottom(){return _?(L.updateWorldMatrix(!0,!1),[[0,-h,0],[p,-h,0],[p,-h,-v],[0,-h,-v]].map(V=>{const ue=new N(...V).applyMatrix4(L.matrixWorld).project(R);return[(ue.x+1)/2*l.clientWidth,(1-ue.y)/2*l.clientHeight]})):[]},destroy(){U=!0,Q(),ne.disconnect(),$.disconnect(),Fe.forEach(V=>V.dispose()),Te.forEach(V=>V.dispose()),w?.dispose(),n.innerHTML=""}};return i.viewer=re,re}const _0=[{id:"single-pink",group:"single",label:"하츄핑",dimensions:[120,140,40],stock:"#efa0c3",shape:"single",heights:{tuck:15.163727959697733,dustTop:27.858942065491185,bottom:33.14861460957179,dustBottom:22.216624685138537,glue:15.163727959697733},bottomMain:[[0,0],[100,0],[78.46607669616519,77.6595744680851],[65.78171091445427,59.57446808510638],[49.557522123893804,59.57446808510638],[49.557522123893804,72.3404255319149],[40.117994100294986,72.3404255319149],[32.743362831858406,100],[3.8348082595870205,100]],bottomTab:[[100,0],[96.16519174041298,12.76595744680851],[98.82005899705014,36.17021276595745],[97.05014749262537,100],[78.46607669616519,77.6595744680851]],diagonal:[.2153392330383481,.776595744680851],source:"싱글팩-01.png",textures:{front:new URL(""+new URL("front-e5GXidIH.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-DMiR0G3S.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-BRXMtE7b.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-CMX7rSdK.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGNCAYAAACIb4iHAAADWUlEQVR4nO3YTW6rQBAA4bblKyB5wf1PxgLJhyAbY2GCMWBqfqSqVV6yeJ86zTjDZRiGKK2+aRe/f0vsWOwTLiKGiIj7o4u+afNgV3AREcP90S3+IAn2KG4ehl0D3h/doQflNOxZ01vrMPYL7vD01tqFJX61e1rF5sbNe8Pm+NXu6Vba9NZ6m+zziS0KOO0WJx0rKbrmBuxJLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSixVddhLbsTWqptsNV0jIvqmze3Y1DjZKva2vjWopWqxxe9tXZO9P7rchs29JlvDWTtfg6L3tq6dzQ3Y0zUiYnzInntb7CrUN9laemFnq1BknyZb5N7WuQYR5a9CvZOd1jdtcXv7D1vyX2Gra1Da7i5iS53utwfsUtJ0P2JLnO7qZJ/gYqa79ZwtAvwVO1mH7Ofurk+w3B8Um7DThy0nePNkF8DJ0bvWYOE4Swo+/FfX5HRIBt6Nna3D+GUS8KHJ5gIfXoMc4J9uCqnBP19rUoJPuYOlAp92YZyDifdmp95u5x8aE/Ap6NOv4vdHh60F9t6AWAv0JcfKWhzqMgzDj6RtzW8a90e36z/umzbd66OFKe++KiV91zV/+GLn3S7ZGiw1gQ4R69f/vmnzYqeQeIIjltFJd3at8f3E+O/JUfdWEdiI1z6/HWtzcBFrsFTftP9gxWKfDdPpFrMGH7pMH7bSJzs2RJQ/2bFLRMQfLcG714zJpU8AAAAASUVORK5CYII=",import.meta.url).href,lid:new URL(""+new URL("lid-BCx3X8mq.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BNtBl9OP.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-CYDHFBH2.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-DIjeEmX6.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CqsAvOWF.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-BpulUVxU.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-DqrnRkT3.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-v27nUHFX.png",import.meta.url).href,import.meta.url).href}},{id:"single-lavender",group:"single",label:"다이아나핑",dimensions:[120,140,40],stock:"#b6a1ca",shape:"single",heights:{tuck:15.202020202020202,dustTop:27.92929292929293,bottom:33.23232323232323,dustBottom:22.272727272727273,glue:15.202020202020202},bottomMain:[[0,0],[100,0],[78.46607669616519,77.6595744680851],[65.78171091445427,59.57446808510638],[49.557522123893804,59.57446808510638],[49.557522123893804,72.3404255319149],[40.117994100294986,72.3404255319149],[32.743362831858406,100],[3.8348082595870205,100]],bottomTab:[[100,0],[96.16519174041298,12.76595744680851],[98.82005899705014,36.17021276595745],[97.05014749262537,100],[78.46607669616519,77.6595744680851]],diagonal:[.2153392330383481,.776595744680851],source:"싱글팩-02.png",textures:{front:new URL(""+new URL("front-Bk8Csp7z.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-DdBvJthX.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-BR6quRuh.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DYNtUgPc.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGMCAYAAABDM1siAAAET0lEQVR4nO3dzW7TQBiF4TMhoiwQu0gVigR3wf3fSxeRegUptMOChgbjOHbqY88rnXcLi0eTL/6ZxGmptaqVDrv9xX97/vFV2wUtvQ0B7x8f6un/1O12eewVnCRdfKnt2CGc9LZ6Y5odOwInDazeULNg3/PSTukm7AicNBPwvFFY50s7uk93/dgmcJ3K8fiGXeulndL2EnKN1Ruq1rOZbWX1htpKqmfQZitF2qyNmFKwroJ1VAXCFoGwQh26KgmrYH0F6ypYV8G6CtYVBltJ1wa5YXQWrCsMFnU0kIL1FayrYF0F6ypYV8G6CtZVsK6CdRWsq2BdYbDZN3AWrKtgXQXrKlhXwboK1lWwrjhY1MU36iN81MoqWF8YbL2742DL8cjBSqAxkIL1FayrYF0F6ypYV8E6yqc1zoJ1FayrYF0F64qDRZ1uUfuzImFRY6BgfQVrKYcuVzl0GcNgUT8nJAXrK1hXwboK1lWwroJ1FayrYF1xsLWCsKWAsMoYmMoYGAvWVbCugnUVrKtgLeVCxhgHSxoD1oNAT08crESaWQXrK1hLpONsTrfOOFjUzIq0sgrWFwib46wvEJZ0nCVdG6D+ugoKi3rgsr6Q3mA5KRgL1lWwroL1hDopoFY2ZzBfwboK1lWwroK1lJ1vY8G6CtZVsK6CdRWsI9RPBhSBsFKwvoJ1FayrYF1xsKTvG7A+UyB9hC8Fa4r1BiOtbHYRjWGwLx9BTy1tnvLni3xxsKTvIkokbK66jAXrKlhXwboK1hUHuyHd3bKeUyCNgUhY1Mxmk8NUIY0B6nmwzKwzDhY1syJhSYcu1lUX6tOaHGeNcbCoowHqpJA3mCnUtzylYH1hsKgfENl8AJ0Uyga0sqgxkEBY1CYHC/tMwpJuGFEXMqjHVVArK5GwpEOXRMLm2sBYsK6CdYQ63aIOXazPbl9AK1tJW56sN5iC9RWsKwwW9SBQyYNAplAnhWxyOAvWEeoNJgXri4PN97qMBesqWFcb/TmTIcKtLCYkFjG3yJVFhMF2726bn1vMykqv2MNuv7ZjVJiV7bu7bXpuMSsr0bD3jw+S/nmTNTsKrJVdGzCljST1jEJzDW0mNzm3vDGQGKPAXNnzXle3rbntfnHyNAqtdnEMWpzd/7Atr+7gG+yw2zc1t73YVlf36qGrpdW9iO2sbhPgwZXtnNVWB48+g7UAvoo9H4e1waNWtufoULQCevKFTOfMtih4NLZnHE4tBp60smuDJ4/BmuCbLr7XAt98p7AGeLbbmiXA78LePz4susKzrOxS4NnG4Ap4FvSst+IDYGkG8Oz7Bl3wnGNh2eRwvfGsOzIDq3wT2L591L28PENPAi/2FH53LKTbLuQX3Zjrm+Wxd8+r/cxFD7qM2a5adcuze7vfc6j7WxO/HNFZ5SJd3hRcHXvqDF10YZWbwZ4aWuVSa12BNK5XaJWkn9+/tI09ddjt669vnxnY1+pvSwkiXPbOs+0AAAAASUVORK5CYII=",import.meta.url).href,lid:new URL(""+new URL("lid-Dutmkx9N.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-CKc2vOVf.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-D0z99_53.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-DZhGv1a9.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CsI1X4sH.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CrG4jeDt.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-ogJ-mMfB.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-CUupCh0Q.png",import.meta.url).href,import.meta.url).href}},{id:"single-purple",group:"single",label:"이클립스핑",dimensions:[120,140,40],stock:"#755695",shape:"single",heights:{tuck:15.202020202020202,dustTop:27.92929292929293,bottom:33.23232323232323,dustBottom:22.272727272727273,glue:15.202020202020202},bottomMain:[[0,0],[100,0],[78.46607669616519,77.6595744680851],[65.78171091445427,59.57446808510638],[49.557522123893804,59.57446808510638],[49.557522123893804,72.3404255319149],[40.117994100294986,72.3404255319149],[32.743362831858406,100],[3.8348082595870205,100]],bottomTab:[[100,0],[96.16519174041298,12.76595744680851],[98.82005899705014,36.17021276595745],[97.05014749262537,100],[78.46607669616519,77.6595744680851]],diagonal:[.2153392330383481,.776595744680851],source:"싱글팩-03.png",textures:{front:new URL(""+new URL("front-BebZoQRK.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-BJJUt85G.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-DNKqWfXl.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DOd5pDR6.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGMCAYAAABDM1siAAAEaUlEQVR4nO2du27bQBBFL2klSJqkMuAARv7/w1wIcBekyUubxkpkmqQoiZe7B7intWEcjIa7M7NLuSulqBX294+TP/v29Yt2G7qMMif48PxUjr9zuNttL3tGTpImP2q77Jyc9D96S1hddoGcNBO9OVaRveWjvYSrZBfISSsJnrJI1vnRXsKobCtyQ/7J1vpoF9NLuynJWtGb5HAS2Said4adpHIi2i691Nd2uITIusDIdgLJFoFku44kS1q6yh+QrBRZHxhZ1tIlkGwi6wQjWw4g2XQKTjCyqNUAtc5KIFlUp5Di20lkXUTWRWRdRNZFZF1E1kIhySqyPiLrAiOLasUz5HDBiixqPqvI+sDIolYD5QEzElkXkXURWRccWdLRkkSSRW23qPsGiawLVGQVWQ+stkYk2YzpjUTWBUcWVc9mNTCCkUVtt6wzBYFkUZGVQLKFtM6yLvuSIitF1kdkLWQiYySyLiLrIrIuIusisi4i6yKyLjCyhdSKp1NwElkXkXURWReRdYA6rZEi6wMjm0M7FzlacpETRicY2aSBC1RkJZAsqkRMbeAksi4wsqhNQYqsB9R2m5x1gpFF5WzeYXQSWQeoTgH1IlCWLhf56mwnkXURWReRdRFZBz1pu9UdSVYkWVIhc0jDaCSyLiLrIrIuIusisi4i6yKyLiLrIrIO8s8fnETWRWRdcGRRx6EiyZJOxSWSbHLWSGQtoFaDPGBGImsB9YApsj4wsh3qvoFAsqz3FFCyAsmiHrBMEZ1E1kVkXWBkUess6g0QVCGTHcxJZF1E1gVHlrQpSCRZ0g7WkV6qyAuXTjCyPSln80azi34HkkV9zQWrByPJoqou1GoggWRRVReqns1ExklkHaCGyRJIlrUakGoDKbI+IusAdQ7WvwPJ7t6DZDvS3ABVGxx+RdbDgdSK//kJkk3VZeNQQLIiRVaR9RFZF5G10HcgWZEiK5Asq7sl9WCH3yBZ1nGoIusjsi4i6yKyLiLrIrIuIusishZQxTepYWRFVpH1gZFFnd2yrkoJKNvVllgKLrIYkLKIvOVEFlV1CSzbdt6iLkccTxj394+1VRbBiazeyrabt+nBXHRS//D8JOnVQ9ZsKnAiK6LsSCo0yVRkm8xbThqc1gaEVOBEVhOyL9FtKm+LBve6jqnQKpNp0GLuvpFtObqzD9j+/rGpvB2VbTW6Z5eulqI7KTuIbhPCs5Ed7GrVhRfvYC0In5U9TYfawosiO7I6dKogfXEhM9jZthO+ZIo4kg4nf2YDLp0b1BS+6v5sTeGriu8awjddUK8hvFpbs4XwTbIPz0+bRniVyG4ivOZpzRnhm6VXP8KfEZZWEF59bjAUXistbDc5HA+e/SbHTJSvEraPj4bl5Yn0xcKbzLqGaSFdV8hvOpgby+VLuucqU8QR6W7JuKrqyHPY7o8sda+oPp8dRLmTpoeC1WWPnEh3mohyM7JH5qLclVIqKC3jRbRI0vdPn9uWPbK/fyw/PnxkyL5Q/gKnQS31mWptmAAAAABJRU5ErkJggg==",import.meta.url).href,lid:new URL(""+new URL("lid--WvKRmvn.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-Bf_4jwr7.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-BVLFq6Tn.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-j0Gldl1h.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-BDvY_-gu.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-h6fJxT8y.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-BIObAEvy.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-B5VtVAMG.png",import.meta.url).href,import.meta.url).href}},{id:"full-box",group:"full",label:"풀박스",dimensions:[127,146,125],stock:"#c9b9d8",shape:"full",heights:{tuck:18.33816425120773,dustTop:59.951690821256044,bottom:80.05314009661836,dustBottom:63.1256038647343,glue:17.280193236714975},bottomMain:[[0,0],[100,0],[50,78.4],[50,83.3],[36.1,100],[12.2,100],[7.8,95.2]],bottomTab:[[100,0],[96.1,15],[97.2,91.2],[93.6,100],[64.2,100],[50,78.4]],diagonal:[.5,.784],source:"풀박스.png",textures:{front:new URL(""+new URL("front-DxgCBSra.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-B66TpQTD.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-CZM9lG24.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DlVhPi0m.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-CQnXX3_1.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-CO3tq9Ga.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BYEAbdVL.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-KkK1Ws7B.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-D50KtCWr.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CB884Hev.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-VKOVXq2_.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-DWjBssOd.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-ByTnCZtZ.png",import.meta.url).href,import.meta.url).href}},{id:"limited-blue",group:"limited",label:"다이아나핑",dimensions:[209,146,125],stock:"#9fcde1",shape:"limited",heights:{tuck:18.38256658595642,dustTop:71.76271186440678,bottom:80.24697336561744,dustBottom:62.924939467312356,glue:17.322033898305087},bottomMain:[[0,0],[100,0],[69.93,78.41],[49.83,78.41],[49.83,83.26],[41.72,100],[4.73,100],[2.2,95.2]],bottomTab:[[100,0],[98.14,7.5],[99.49,15.86],[98.31,93.83],[96.79,100],[78.38,100],[69.93,78.41]],diagonal:[.3007,.7841],source:"리미티드에디션-01.png",textures:{front:new URL(""+new URL("front-2otkuX8h.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-CMJ_d1NQ.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-wqLkAjir.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DXKBYbHJ.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-CJCr71zt.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-CzDDMAwJ.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-DUmjOo3O.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-Bj0Dh9Oc.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-Q3POZwDJ.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-DxCSGxKt.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CWdBHUTi.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-Bb1hcE2j.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BYQrNlEn.png",import.meta.url).href,import.meta.url).href}},{id:"limited-purple",group:"limited",label:"이클립스핑",dimensions:[209,146,125],stock:"#aa9ccf",shape:"limited",heights:{tuck:18.38256658595642,dustTop:71.76271186440678,bottom:80.24697336561744,dustBottom:62.924939467312356,glue:17.322033898305087},bottomMain:[[0,0],[100,0],[69.93,78.41],[49.83,78.41],[49.83,83.26],[41.72,100],[4.73,100],[2.2,95.2]],bottomTab:[[100,0],[98.14,7.5],[99.49,15.86],[98.31,93.83],[96.79,100],[78.38,100],[69.93,78.41]],diagonal:[.3007,.7841],source:"리미티드에디션-02.png",textures:{front:new URL(""+new URL("front-CyY7EI6N.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-DCRdAkby.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-0rCWM6j1.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DQF4vOVd.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-B7axEelj.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-D8iIkkkk.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-DjM59GgK.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-4uccvSD8.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-B8s4zKWp.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-DbEP0n3K.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CwaMzh0v.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-DUqWrnmA.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-DZShgkQG.png",import.meta.url).href,import.meta.url).href}}],b0=[{id:"daiso-1",group:"daiso",label:"골드",stock:"#efa0c3",shape:"retail-card",dimensions:[200,244.7863247863248,4],dimensionNote:"추정 약 200 × 245 × 4 mm · 배지 지름과 원본 비율 기준 · 후면 무지",title:"다이소 딱지",hole:[.49914529914529915,.040502793296089384,.02564102564102564],sealLines:[.1829608938547486],source:"다이소딱지-01.png",textures:{front:new URL(""+new URL("front-BdzM2YL7.png",import.meta.url).href,import.meta.url).href}},{id:"display-1",group:"display",label:"하츄핑",stock:"#efa0c3",shape:"display",dimensions:[250,146.3150289017341,127.16763005780348],dimensionNote:"추정 약 250 × 146 × 127 mm · 파우치 20개 수납과 전개도 비율 기준",title:"딱지 파우치 디스플레이 박스",heights:{tuck:25.65028901734104,dustTop:76.58959537572255,bottom:74.78323699421965,dustBottom:63.58381502890174,glue:15.534682080924856},bottomMain:[[0,0],[100,0],[74.56647398843931,85.02415458937197],[50,85.02415458937197],[50,89.3719806763285],[46.82080924855491,100],[5.202312138728324,100]],bottomTab:[[100,0],[98.121387283237,7.246376811594203],[98.121387283237,100],[78.90173410404624,100],[74.56647398843931,85.02415458937197]],diagonal:[.2543352601156069,.8502415458937198],tearHeight:.6345679012345679,source:"딱지파우치_디스플레이박스-01.png",textures:{front:new URL(""+new URL("front-BIsDPo87.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-sAgV_f8P.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-5gk4WA1-.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DHm7xnd6.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGVCAYAAABn6ghxAAALIklEQVR4nO2dy44dRxnHf3V8bMdOHCeWhsTBwvbE4/gix5YnCCJE2LDgKXgCtjwFCzZ5DiTegD0IdrBBCAkhj0ABgRUsOdP9sejTPX3O9KWuXZfjv+SJ4+mu+vevv657VysRIUWdHNxq/vL0W8if/wXrC6hUzHbmHrwP/3yFvK5R33+I+vhTUYefIX/8DevoBo+/DS+/bv7h+CPUk++JunsMd4+3D17a7MnBLXh0A65egd/9He6/h7r3CHX4XLj7Gbz1zuT5Qc2e3dob8NUr5PolVkcP4PAZ6qfHwnsfzaahgDZQvZptzcn99+F/36AAfvwUdfQUdfdY+PC+U/rOZk8ObiGH14ENhWc34d5j+OSHyO3nohSs3rqI7YMs3Q8LsycHt5APr8K7l+FvL+HOdXj0CPXgB8jt53D52nlXnkqcWbPdrX1wA/XVK+TaJXh8BA8/hzvP4fpNkHE7IkAtsFJhzJ4c3NqKO/n8Y9S9J8gnX8AHR3AW81qqa0H5Mtvd2qsXUX/5Dzz9AHX/U7j7DDn6go27YYMatqWqWV28ACJmV7lr9sXhIdx5F548hjvPkAc/gstdeTdxg/UlAiKCUsopftfq5Wvkl786M9eT2v2HHc39vpMIclqjLl6wMtlqtcmv/RNMUtXOaawmM5i5ZVp3dHOQiDSlgqFU92PGrF8pqtPKKYXlzIoglbCC5kHTPa339+XMbkqCqrIvYMbN+m6Ut7F7WllXZgvGbCORpkazUXizA/FpW4wtThag9mnWvckxoba8rUWrVFCclR5RyALUp5p0lULqGpGRJqJu+Lu0S6SWnZNVl2ZLv6pqpGpaAqqSuF3xuhLUhU0oiCBVTV3VTdUsnMXjbLdGA5trSSynFVI1+TSkpzNwJ6vTThy6cGlrMv1LjvaA2WjSrEmDw4tmsiuHrEkR5uegaZVDFtAi4rUxOZFdYWR1tUDc7ilZnxq5AWmaHZGe2aVrshEVSBb06AYuEQolqytfdAcO2XOyPrVDN22zOzIzG7m8LZispkL1HMzNRmyM5xsGXh+fAKGQL1n9rnecwY98yerK6+CHgfIla0TCFzaDdPIl631SUfdATbr5kg0ijyXC/pBduibbH7I6T7s2e427tD9kgVkiPovuPSOrI93AnblLb8iGkh+zC1UOe0hWQ9rwJw7cU7ILVA57SlZHjnH7hmwo7bHZwDXZHpPVkEtNtudkA9ZkGZJNbM3h2XHbB2ZINhPlZ1Yp/MZtoGcgP7IxXsS3gR+ObIDZnGhhYHMzt82mWjlslN8Dlrxiv7Vko6Bmfc/m5EvWd7Xru67Jl2yQanfmTul3IHMm22nBmszkZhZAVlPe+GsmtD9kl26z50/WewfSk/Inm2oHMn+y3uVpnXhBZBPr7eZHNsEidVALrjfY13fFhy7cZ7X7Zr1BX7rVro/1LzqHlEO209ysoceGz1RSBZLVVOgOZL5kXYvU0G32fMmOPdU+azKXNkK+ZJUaBrhUOTqn/Mj6mqgI3UbIj6z2ttaR2wj5kU1Wxe0ckWrXPH+ySwx52pTt+ZMdayN0v/Qg5zUyi+9boKG+pXzDYPHPwhiOiOdLVluRYrscsskUDsXtdpJatVsO2bFqN9bwfYZkldr6CM5cHMX6/pnXcYPQWgNcOnin2cG8qpHNfvBS1UhdQyXNxxo2m9kHkeYm92sAdeki1DVUzR9V1UilqE8Vojb/z6r5fUStAV7/47/N54VEqNtN7HvGRi/a8XNEpmmtAeSb08YUva66Uss3GWfUmJ35gIhPgC4ZZVjO7mi3KJuk6rvYK3rLgPbBaglPds3bA3yq+BfbjYquEHRdXrhcPBzYftjLCYMxLTEW1kp6aZZPdlYh2sd5vlRhSWLJ2IUsyUKHyWdLUK3mCmYzZUp2I5ue7hLrFCB3ssCiDWoTFUAWrGiELncLIQvJxW5BZMGIhlYHcy9XzI1Kk8ZuB3OU8GxnblgFkgXvJYPNJEqGZHWv0KFHsasuvMuftAtM10eadvvI+G7k6KT56uuMwuDK2wNmTeh67mDO5Z0PWTx0a3Q7mD5G0QsgC2ZPvM76LA+j6IWQBe90m8MMYtdlTiG2vHZrbGLXhHBhZMGsGxJsCYsqkaypQrTKyDJmTV6Nihi7GZIFfboQrUeRKVlIhm572u6pGZOF6HR3ex59wpmThah0p3oUBZCF6LE7pJlujUFKCxguJAxaJUS3MLKQDN0CyYI5XR1yb2ZrWpmGmS5dqzmFxGUxW0O00iFTsmA4COfZiUb+GZOFMHRNh03LHaaPTbc9vsxh+hTotueUN0yfCt1N+tmQVXifWtI9zpyukBFZ0DSrjIbnNXO2WDVXHlnjpSUh2ru0L7abJByikV50t8Yo1EMtRMul8a1z+du7Shml7rco6x7iYhvfMenOpZ0sWQV6PYUU6G7F8EbJkm3VJzxqNgW6kOlOaLONb6OKKmTJQHGNb0kndqEoshulErvlkQ0auwYJRyeruh/zMt5AxPfBWe4xp3NtZ5N2OkeLYZgZ9IabjUKmj0mGbKupa7OeWgoxswQ9wgMZJEd2Sk5TS0axa6OdkHd/EUj7QDvD/Qcv8zBolRDdNpNCyEJydAsiC2Z0A84nQESyQ8NDc/K6v4FJI9151//UFWR/g1DNyELJgvEDYdzJzGUCREdmr1hBWLpt+mVNgJjSDfZi5XgemZIF4+EcXbou96C/1iFjsjbSpeswPN+qALIhYtd02HRABZBtFahksCVcEFkIVrPZEPb/IhAEa6jHDwPjdV1ar5UEMtHtgz9/6ApgtY4PGOYNN2RX29+tGU/Nc+59CbMVRzcBksy3a9S44c39F9Ahu0nMLHO7xTFDZ6URrEMaIGz28lovoWDTNa0GCHdk5z4Hk4Ias0JT3pl2BE2GOB3Unr0CqE/jfkNJV43ZavsLVUbFWOAB5P756ZYGAxo02/+UhZYWGiDJn2ynkC9g5jQBYiP/LwIFHD6NT9b7nEKoms0wj/hkDRTOrG1l5WuYPnZvwsisVc3mkfC6S7Rzo5kQ6H8+RRmkPZYXGT1gCpdt28CsSHPsCjkvULfK28H08LZt+ssLNudY5G5xir+YXcDw9OZiSxSrBvl4LQ1CVxpeR76NK43dfHRGEX0rFOG1Xu6b/2rWQluETT8S1r/OnVPD12COiyX7Mlwj45yfk/TCIKZ6V7s69y86J9uUEK4Pnepma1oX2ufZ97MctIL+A6uXmOHh24o1fGRD2IXtgFn9oLQhrPMC+5i8lLPWMWyoCbP6uS8Vw35bXd0Pi3M1DM+YNStUXQjrlMdhWl3dD9sEnEZkzHJ2iuHu3POUDd67XXboaHDuVt5ewx9+PXmiaQ03m6uGhsrjFQdXkF98OWu4Pc+qJ+nppqxu/vZPyJ1rWoZbwlZh4aG3vAIwMQy7YbGc6e4BMzUcQyt612lveBnCLVkPhu1k4rlfzkYhLKr5o3PabqUQlbDNiEwcwudyP6+x6jZJwlNtgw7PkoaninCdhoyDYfdqq5+CbnvWkbC94a60wKzxvXhI7OZu2lOIGhI23ZpohG37YB4Im1N26TA6EbZpE7v2bq0Nm47eg5+uuIdibdkRGQ8P3bxpn4McwUsJ3yMyQQmHGD5SgHInfN50yHkwD4a3FXrSzivhJdbIeCO81IIeL4aXXH3kbHjppVJOhmOs67I2HGsRmpXhmCvmzhu2GORYUtuGfz9tOLZZMDCcglkYM2wxyLGUzhveUUpmoTGsxginZhaAc4YBlEJNfbI1tl5896Gov75E/fxnyL9fpG0Wzgzzk2fpm4Ue4RzMApx857b8H5eAF6E0cD4wAAAAAElFTkSuQmCC",import.meta.url).href,lid:new URL(""+new URL("lid-TYOhicBo.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BMv_rRHh.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-BkN7rhR-.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-9lcNBxub.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-B8P4Zo5d.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-vlKUikdG.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-C5SjvFfc.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BTaT2_6E.png",import.meta.url).href,import.meta.url).href}},{id:"pouch-1",group:"pouch",label:"하츄핑",stock:"#efa0c3",shape:"pouch",dimensions:[120,130,12],dimensionNote:"120 × 130 mm · 상하 실링 15 mm · 내용물 두께 약 12 mm 추정",title:"딱지 파우치",hole:[.5,.05675675675675676,.020527859237536656],sealLines:[.11621621621621622,.8810810810810811],source:"딱지파우치-01.png",textures:{front:new URL(""+new URL("front-Bj9gZaBp.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-Bfy1hUOt.png",import.meta.url).href,import.meta.url).href}},{id:"daiso-2",group:"daiso",label:"샤이닝",stock:"#b6a1ca",shape:"retail-card",dimensions:[200,244.7863247863248,4],dimensionNote:"추정 약 200 × 245 × 4 mm · 배지 지름과 원본 비율 기준 · 후면 무지",title:"다이소 딱지",hole:[.49914529914529915,.040502793296089384,.02564102564102564],sealLines:[.1829608938547486],source:"다이소딱지-02.png",textures:{front:new URL(""+new URL("front-CiLv1Drm.png",import.meta.url).href,import.meta.url).href}},{id:"display-2",group:"display",label:"다이아나핑",stock:"#b6a1ca",shape:"display",dimensions:[250,146.3150289017341,127.16763005780348],dimensionNote:"추정 약 250 × 146 × 127 mm · 파우치 20개 수납과 전개도 비율 기준",title:"딱지 파우치 디스플레이 박스",heights:{tuck:25.65028901734104,dustTop:76.58959537572255,bottom:74.78323699421965,dustBottom:63.58381502890174,glue:15.534682080924856},bottomMain:[[0,0],[100,0],[74.56647398843931,85.02415458937197],[50,85.02415458937197],[50,89.3719806763285],[46.82080924855491,100],[5.202312138728324,100]],bottomTab:[[100,0],[98.121387283237,7.246376811594203],[98.121387283237,100],[78.90173410404624,100],[74.56647398843931,85.02415458937197]],diagonal:[.2543352601156069,.8502415458937198],tearHeight:.6345679012345679,source:"딱지파우치_디스플레이박스-02.png",textures:{front:new URL(""+new URL("front-BxlsOXbH.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-BdpBmYzh.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-TPXL9KdZ.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-BJrnwN5C.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGVCAYAAABn6ghxAAAMH0lEQVR4nO2dS48dRxXH/9Vzx4/xCwdNgmGSGFt+YcZOGIZEBAFZI+VTsGXLjhUfAfE5kPgALGHJBgRSVkgocSQERNbYk5nbdVj07b7V9/ajzqmq7qoa/ovEsruqzv31qVOnHt2tiAgx6sX+AQCgPHoTxaf/Bi7tQMVibG2cPrwN9cVrYKmx/Og7WD58j87vHePSX/+AxdwGlh8eQL08QQGg/OBbOD/6kJb3jnF697h17e5fJjb2xf4ByudfB/auYudP/4Q+vI3lk6dY3j+is7s/QHnlxmD5oMY2t/bZG1D/eg28cQn68WOcP/gezn7+AS1v3WHV59XYplM8vQ316hwFgLOfPYd+8j7O7h3T2VtP2gWY/cXZ2Bf7Bygf3QIA7ABYHt/B+eNDnD75MV6/c0RFUWD3yi7XLkOq+VFsY1/sH0C/vQe6eRnFP15CP7qJ5eFTnD79EU7fOUZ5+Tqpdf0g0lIrtzRqbHNrDyu/U1+7hOXhA3x1+BFO3/0+zm/eAYAWtxZFAnRJUIVqV2yNmprKO419sX/Q8rvzn9zH2aNn+OrxT3H65sMt44aloLXGTrFjX6RHi9o4/fYe6Noudv7+JZZH38D502c4+/b7OHn4cXWldPRQAJUaancBEHF+5apdw9jPH9yDfnATy+ffxdn99/Dqlx+jvHyj41KZ6t9IWkMVBTsCmFqo/57hi9/+ftg4ywbMjtUuTtClRlH7LcdgtbaqWP2R4IHikHSpVy3LVfgxZVxEGqQlPFTzEyczFqSgl6VTFV6NHXJFAkGXJZRC5dz2tTbeMx1ZVB2tXJLYc8eN9Zyc03Ip7meTkgUArQla1NFGjFVMBDauSCCQoKMpNQNZpRTKUpaJDWZdgpF8VOvhFyiK8ZFIGbdrcrK1dFlahzAiAmnyO63hBI6yLLFD6+YVCkCtK9AlQWsNKnWTW8w6Fdd6ndwQCHqpQVpX1Gu7DfrjxvalUo5SqIZfDQCaoPumP0bbQcja/D5C5YcKynqeNlsHk8jKWKXi+E1xWGEpK2O5gwOnPxLIOt7mRxYAM2EOo0zJCuT7ZuRLNmS8tak7X7L8eGvvtDbxNl+yAPgLFB6VOdkZlaCxAYd97ig2FG8TJMsVAxcn1gLDsTxFsiqg3wpibc+dK3xXGFIpukF4+bgRCZP1GMBd1VV3wmSZIYyTjPsYHFImGzLeutedMtm4lb6xIYd9l2Q8fbLsfsvCJb9t6ZMNmYxzj4eZy0o5kI1z5pAD2TiVj7FRjWTViYR+hRwcuMk4kJMbxLRSQ6CsyMY1OORENrw4N2J2YzmyPCMT2gw75Uc2lpEsP7KxjGTpkR2HFsdIlh5ZIOj2rZVsbkSaZK00M/6MyXLleSTLmey8I1nL2CB2eBwcmGTnfRfClrFzDw5DyrmDVZprDSxBskxUc3WzBMkC/L2sYLs5/RUnStaQd2ieDginTxYYoztPPMiD7NzqcvNoje1SO5/dOqWmMOi9jE7u43RdumS3T6n5e6+Ij0dd0iULIJocoeuOJk7WkPelUMcpRj5kgbhmu3mRtdJEs91uY2M6b2IoEzeIZHAwh91MyBqKZQKZH1kgjglknmRjUD7Gsid5QQe+kYOTsWnklGfAXi7IEfIhCyCeHAHZkTU0b46QM1lg3hwhb7JzKj9jY8kR8iMbMkfg3LX8yAIIliNw7prsJIekkAdl6gYb8jrsXuyXOEagfI3lDrv/f4mjrdj7r4xrL/ZLHAHMOuxmTtbQ1DlCUmQXALB3/crqowwaRACV5frDTpqqF4j3uJTxWZkOCXKEgTdLLADg6q296tXrunphff1/0oSyLEElNX+eUwsAePXlq4qqptXnAABQZTRRP1UbDZPvKtBPdwEApyengLGTRyDjowvs5oJpAdRbjm2DeG8lqX/YdhmCqr6TwBvOOukmFQ3kr8dsjWRD57+oKeLWRppk3TrQyInFVQvCJfwYvq4ikZuxHX7Vr9Xdc6DrlayNOzQXCupOxg16t5YUN85suIMVYQHdZMgCfa9tk34fMvAKefpk1xK8LDSg7+ZEVjgM899vZaWcyNaSDDlt37W6fuTCHMlO4bvjiU6OZGvJfdc6IxtoJmeyE8VdoJNuzmRryRc7ub5rXhs/WbX+Nuyi/gsArE++Sxo12+hfcNpsiRrC8ZOtNcuRVOFOXuJvnGQtWpjFBLPh+o+wjw4Jk12JS0o0GxbcRU8PAjWFBGXWJYdKF69PetYNxE2Gk756bcRn2XTDukP6HayliHw3M7LALL7bRThDskDYx1tbzWxkAFgTzpQsIE50OOr74GlayTdiNjaTvVumBL7LTtA72kqQ7AQhVLpdZSpBsoB8t5p/REPQUKVEyQLiH83r6XLfTZgsIKJLwCS+mzhZIFrfzYAsMKHv2mtkkUNYa6CVyEzcoBZre8Us538lMjOyLvI8wYyO7FBHYyxyYPYkPTqytboICx4EErXMLtJFOFqytUzCK2OZDik60CHcWaT12Znoya5V7916OmkxJPckJ8W9W9UkwuF992K9F7HyJxi/mkF4QrrpkV2LhKQkZS7iVHz9o5m+y17n8HXeIEL1nzcQz2y511/ELXyR79aXc5XSuoECRg0u6gu7LpvSd5vsRKlemy1fgWVaENYdqudMuwtG4wY2ahkbgzusy12kvVux77oo7b3bDY36bqBHqMaUPtlafYRFE0wPdBMkK/mmnWSC6Ug3QbLAIN1x32XIgW6iZIFpfVdAOGGygMh3p1ocSZwsVkvq4gVmQqiRLX2yY9FzkJv0jlgUi4as2nxgsUMjixwy35XMKJq39w1cHg3ZWkOEB41tfLeHbojZ8BDh6MjW6iJstyIDePBdnmrCynhJg5Wxbu4g2AFq1VG7RU5fV9mUzB2ESU6H8iUr9d3mH7lJzobyJduSJElvleETTo+s+AiA00DBV3pknZ4kYfrudpJj77uzkZUcnWpvgAj9SZKk09bINk54dp/lEG4ZK/Vdm5Gtv6w94dnJcjRykoOnoaxs1CO3LtgukT7ZUL5rpQHC6ZP1IqnvmhduKFqy8ql4gKxsjHDXYke0ZGuZhO3WDQJlZZUxloSRAFlTwsMRjDLSgh3iTcUF7mA7UNiEtPTcoDr4ZX+rQk4whwgXALCzKNx6/ESqyC52WLScQ5mQcAEARcFzAxe5tLKaihPUzjTGtqIDk3Dz1NJUZE0juFqHLpLN5QFZdJAk6o2xRJrfogdxRrjGWK1J/BiUS3TgEC4AoFyW8LbwH1AFAOilbj3gOKXvcipoQlcKGnioYlrfbTQQf9PLuvo0m+/WlaR85nsx9I8t32U4pNf+uv1EcwJi7YpPnOh0KR2yiPC9iEPKmGytmeiK9m7rHFQyaLh40mCc7ZNLGG3ercAP36uPRgIVLqYV0kFDcDmApDuY/PjKJJ0uYbIrKSnhwHS9kvW5cNwV4gaPUXPb9bLDWNdF2xEjiM/6JGxq/LDvREtDNgoaDXwTtjNWGB18E04qzrISGaVWtCSZjElXOKOcnKyLH4vOz7q4oIsfz3diDmAbLDLW6RUCZh0Aa+owezTgREXh98GMlmr5OrEU+r2IqvmPh7oGJqLbj7JKFpGb8uyinXU1c7uQS55eCXdUtTDrd12pbBF2rKwrHvc/Heogn4SbOhVQ0M0Frv/5d00jDRQHg0Ps/RCAgt66imu//k1jcEuOq4ZNcU+Ui2/+8W/QD270G+ygpmd7UgEAmwZvwfCxLuuBcNPBQhI25fK7Cxi/dwrC66C/WbmdsXVRABMSBt8rzDgbPeHNQWFywk3DFr+/awSblHAtG9J9icx8hNHvFUNZV1MuFsI2KWKnwVPJ5GCbz05OuJY5ZHOS73kJgz9TYBL2l8YQZNMae8KqmGHJs8MMwIJwc/X8S56T+7Dr7HaQcIu0h0jhYyrOI+xgtK91g0GDe/14ilXEHgX3Yd+riL0Gd/oxMPuSpwKg2IQtjA65Pjto8GBMnumUJ5/wgKZY+fZGeKpl+lHCYx1QknW5yNklpt4AsTa4i/QcuzViwnNtLQni8Lz7YGyD5960Yxk8t7EAw+AYjAUsDY7FWMDC4JiMBSqDVZ/BsRkLAOgzWMX8xNJnP3xCxacvcfKrX6D4z2dxGwusDT7/5Hn8xgJrg5MwFgA+v/su/Q9WZMQj4TblGgAAAABJRU5ErkJggg==",import.meta.url).href,lid:new URL(""+new URL("lid-COuQJ5cq.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-DPaUIvec.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-CoSWr-M4.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-DyMy9Evq.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-BusKU_Sv.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-z04hDaDz.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-_ytD71Kv.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BeN7Um8Y.png",import.meta.url).href,import.meta.url).href}},{id:"pouch-2",group:"pouch",label:"다이아나핑",stock:"#b6a1ca",shape:"pouch",dimensions:[120,130,12],dimensionNote:"120 × 130 mm · 상하 실링 15 mm · 내용물 두께 약 12 mm 추정",title:"딱지 파우치",hole:[.5,.05675675675675676,.020527859237536656],sealLines:[.11621621621621622,.8810810810810811],source:"딱지파우치-02.png",textures:{front:new URL(""+new URL("front-DBzll1nM.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-L1hydHCK.png",import.meta.url).href,import.meta.url).href}},{id:"daiso-3",group:"daiso",label:"스파클",stock:"#755695",shape:"retail-card",dimensions:[200,245.12820512820514,4],dimensionNote:"추정 약 200 × 245 × 4 mm · 배지 지름과 원본 비율 기준 · 후면 무지",title:"다이소 딱지",hole:[.49914529914529915,.040446304044630406,.02564102564102564],sealLines:[.18270571827057183],source:"다이소딱지-03.png",textures:{front:new URL(""+new URL("front-DvJc3sVP.png",import.meta.url).href,import.meta.url).href}},{id:"display-3",group:"display",label:"이클립스핑",stock:"#755695",shape:"display",dimensions:[250,146.3150289017341,127.16763005780348],dimensionNote:"추정 약 250 × 146 × 127 mm · 파우치 20개 수납과 전개도 비율 기준",title:"딱지 파우치 디스플레이 박스",heights:{tuck:25.65028901734104,dustTop:76.58959537572255,bottom:74.78323699421965,dustBottom:63.58381502890174,glue:15.534682080924856},bottomMain:[[0,0],[100,0],[74.56647398843931,85.02415458937197],[50,85.02415458937197],[50,89.3719806763285],[46.82080924855491,100],[5.202312138728324,100]],bottomTab:[[100,0],[98.121387283237,7.246376811594203],[98.121387283237,100],[78.90173410404624,100],[74.56647398843931,85.02415458937197]],diagonal:[.2543352601156069,.8502415458937198],tearHeight:.6345679012345679,source:"딱지파우치_디스플레이박스-03.png",textures:{front:new URL(""+new URL("front-BQkxmqo-.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-BMoc_exG.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-CSOjSXRJ.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-Cgrnh9CU.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-CkRK4kjm.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-DRDMzO9U.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BnocQkHz.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-c5SOTFAq.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-zNUH0wdE.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CqZTE5i4.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CN3Aps6S.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-ZdskTHOy.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BX7ZqwhK.png",import.meta.url).href,import.meta.url).href}},{id:"pouch-3",group:"pouch",label:"이클립스핑",stock:"#755695",shape:"pouch",dimensions:[120,130,12],dimensionNote:"120 × 130 mm · 상하 실링 15 mm · 내용물 두께 약 12 mm 추정",title:"딱지 파우치",hole:[.5,.05675675675675676,.020527859237536656],sealLines:[.11621621621621622,.8810810810810811],source:"딱지파우치-03.png",textures:{front:new URL(""+new URL("front-wqKkdR0Z.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-BdUrXAp4.png",import.meta.url).href,import.meta.url).href}}],Hi=[{id:"A001",title:"카피라이트 가이드",group:"brand",source:"COPYRIGHT.ai",credit:"",kind:"document",src:new URL(""+new URL("A001-aoBPiBCZ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A002",title:"전체 제품 라인업",group:"product",source:"공통_썸네일.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A002-DpRrkLfO.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A003",title:"프린세스 캐치! 티니핑 로고",group:"brand",source:"로고.png",credit:"",kind:"image",width:1300,height:1300,src:new URL(""+new URL("A003-BrwH5VOQ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A004",title:"로고·카피라이트 가이드 6페이지",group:"brand",source:"로고_카피라이트_가이드라인.pdf",credit:"",kind:"document",src:new URL(""+new URL("A004-CiS58igM.webp",import.meta.url).href,import.meta.url).href,pages:[new URL(""+new URL("A004-CiS58igM.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-2-CHShFYa6.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-3-GMFbJFuS.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-4-CnCirEj-.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-5-BJauCt5m.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-6-CirN_2mo.webp",import.meta.url).href,import.meta.url).href]},{id:"A005",title:"리미티드 2종 라인업",group:"product",source:"리미티드/PNG/깨끗한 화이트 배경.png",credit:"",kind:"image",width:906,height:467,src:new URL(""+new URL("A005-p7ySwXBq.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A006",title:"이클립스핑 리미티드",group:"product",source:"리미티드/PNG/레이어 0.png",credit:"",kind:"image",width:820,height:673,src:new URL(""+new URL("A006-DYSxLsVP.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A007",title:"다이아나핑 리미티드",group:"product",source:"리미티드/PNG/레이어 11.png",credit:"",kind:"image",width:819,height:675,src:new URL(""+new URL("A007-Bqti81fq.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A008",title:"리미티드 구성",group:"product",source:"리미티드/그룹.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A008-8m0baskg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A009",title:"리미티드 대표 비주얼",group:"product",source:"리미티드/대표이미지.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A009-2Q3wIW0u.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A010",title:"다이아나핑 싱글팩",group:"product",source:"싱글팩/PNG/다이아나핑.png",credit:"",kind:"image",width:629,height:815,src:new URL(""+new URL("A010-pRxLI05u.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A011",title:"이클립스핑 싱글팩",group:"product",source:"싱글팩/PNG/이클립스핑.png",credit:"",kind:"image",width:625,height:810,src:new URL(""+new URL("A011-kNaUbrmq.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A012",title:"다이아나핑 패키지 다른 각도",group:"product",source:"싱글팩/PNG/일반_다이아나핑 복사.png",credit:"",kind:"image",width:791,height:943,src:new URL(""+new URL("A012-MfjW-C-6.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A013",title:"이클립스핑 패키지 다른 각도",group:"product",source:"싱글팩/PNG/일반_이클립스핑 복사.png",credit:"",kind:"image",width:791,height:943,src:new URL(""+new URL("A013-pz2oFL1f.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A014",title:"하츄핑 패키지 다른 각도",group:"product",source:"싱글팩/PNG/일반_하츄핑 복사.png",credit:"",kind:"image",width:791,height:943,src:new URL(""+new URL("A014-J1z7cou1.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A015",title:"하츄핑 싱글팩",group:"product",source:"싱글팩/PNG/하츄핑.png",credit:"",kind:"image",width:625,height:809,src:new URL(""+new URL("A015-Gn2XwwUy.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A016",title:"싱글팩 3종 구성",group:"product",source:"싱글팩/그룹 (1).png",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A016-CKdJOEo_.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A017",title:"싱글팩 3종 라인업",group:"product",source:"싱글팩/그룹 (2).png",credit:"",kind:"image",width:1300,height:740,src:new URL(""+new URL("A017-GovsCjJl.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A018",title:"이클립스핑 제품 이미지",group:"product",source:"싱글팩/기본 (1).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A018-C5PmGReN.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A019",title:"하츄핑 제품 이미지",group:"product",source:"싱글팩/기본 (2).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A019-DftAen3R.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A020",title:"다이아나핑 제품 이미지",group:"product",source:"싱글팩/기본 (3).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A020-BUZgAKUi.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A021",title:"싱글팩 대표 비주얼",group:"product",source:"싱글팩/대표이미지.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A021-BPPnOR_h.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A022",title:"다이아나핑 팩·케이스·배지",group:"product",source:"싱글팩/케이스컷 (1).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A022--bcudOUP.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A023",title:"이클립스핑 팩·케이스·배지",group:"product",source:"싱글팩/케이스컷 (2).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A023-Da5aWh2m.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A024",title:"하츄핑 팩·케이스·배지",group:"product",source:"싱글팩/케이스컷 (3).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A024-Cpdu0FuV.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A025",title:"후기 콘셉트 카드 01",group:"digital",source:"인스타/01.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A025-D9KcDXUo.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A026",title:"후기 콘셉트 카드 02",group:"digital",source:"인스타/02.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A026-COucjxfY.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A027",title:"후기 콘셉트 카드 03",group:"digital",source:"인스타/03.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A027-CAyx-NZv.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A028",title:"후기 콘셉트 카드 04",group:"digital",source:"인스타/04.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A028-C49qTXT0.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A029",title:"상품 상세페이지 전체",group:"digital",source:"인스타/260609_티니핑상페_원본.png",credit:"",kind:"image",width:780,height:14964,src:new URL(""+new URL("A029-CqUbFD5y.webp",import.meta.url).href,import.meta.url).href,pages:[],preview:new URL(""+new URL("A029-preview-C9uso0yz.webp",import.meta.url).href,import.meta.url).href},{id:"A030",title:"AI 제품 연출 비주얼",group:"usage",source:"인스타/ChatGPT Image 2026년 7월 28일 오후 01_51_37 복사.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A030-sS0--Tka.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A031",title:"출시 이벤트 표지",group:"digital",source:"인스타/ㄹㄴㅇㄹ (2).jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A031-Ii4AWEDc.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A032",title:"3가지 배지 타입 안내",group:"digital",source:"인스타/ㄹㄴㅇㄹ (3).jpg",credit:"",kind:"image",width:1040,height:1300,src:new URL(""+new URL("A032-tl29_WZO.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A033",title:"3가지 케이스 안내",group:"digital",source:"인스타/ㄹㄴㅇㄹ (4).jpg",credit:"",kind:"image",width:1040,height:1300,src:new URL(""+new URL("A033-RLNAntI0.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A034",title:"이벤트 참여 안내",group:"digital",source:"인스타/ㄹㄴㅇㄹ (5).jpg",credit:"",kind:"image",width:1040,height:1300,src:new URL(""+new URL("A034-9iwMtlKo.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A035",title:"제품 활용 소개 카드",group:"digital",source:"인스타/인스타_카드뉴스.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A035-uLSoj6af.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A036",title:"다이어리 꾸미기 카드",group:"digital",source:"인스타/카드뉴스_다이어리.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A036-D1HHS67_.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A037",title:"싱글팩 소개 카드",group:"digital",source:"인스타/카드뉴스_싱글팩.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A037-tkA3JD3z.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A038",title:"제품 홍보 포스터",group:"promotion",source:"인스타/티니핑딱지_홍보포스터.jpg",credit:"",kind:"image",width:919,height:1300,src:new URL(""+new URL("A038-Ygs9Lv9F.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A039",title:"다이소 골드 타입",group:"packaging",source:"지기구조/다이소딱지-01.png",credit:"",kind:"image",width:585,height:716,src:new URL(""+new URL("A039-D4v7S040.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A040",title:"다이소 샤이닝 타입",group:"packaging",source:"지기구조/다이소딱지-02.png",credit:"",kind:"image",width:585,height:716,src:new URL(""+new URL("A040-S_wMPuVr.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A041",title:"다이소 스파클 타입",group:"packaging",source:"지기구조/다이소딱지-03.png",credit:"",kind:"image",width:585,height:717,src:new URL(""+new URL("A041-C4ElZ9li.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A042",title:"하츄핑 파우치 앞뒤",group:"packaging",source:"지기구조/딱지파우치-01.png",credit:"",kind:"image",width:842,height:596,src:new URL(""+new URL("A042-DjoWZh-A.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A043",title:"다이아나핑 파우치 앞뒤",group:"packaging",source:"지기구조/딱지파우치-02.png",credit:"",kind:"image",width:842,height:596,src:new URL(""+new URL("A043-BqMDjPUQ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A044",title:"이클립스핑 파우치 앞뒤",group:"packaging",source:"지기구조/딱지파우치-03.png",credit:"",kind:"image",width:842,height:596,src:new URL(""+new URL("A044-Cdd4Gx2U.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A045",title:"하츄핑 디스플레이 전개도",group:"packaging",source:"지기구조/딱지파우치_디스플레이박스-01.png",credit:"",kind:"image",width:1300,height:633,src:new URL(""+new URL("A045-DXgJci11.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A046",title:"다이아나핑 디스플레이 전개도",group:"packaging",source:"지기구조/딱지파우치_디스플레이박스-02.png",credit:"",kind:"image",width:1300,height:633,src:new URL(""+new URL("A046-CKxmPAw8.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A047",title:"이클립스핑 디스플레이 전개도",group:"packaging",source:"지기구조/딱지파우치_디스플레이박스-03.png",credit:"",kind:"image",width:1300,height:633,src:new URL(""+new URL("A047-BnUd3Gbp.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A048",title:"리미티드 1+1 이벤트",group:"promotion",source:"지기구조/리미티드_이벤트.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A048-CuZ3BMFl.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A049",title:"다이아나핑 리미티드 전개도",group:"packaging",source:"지기구조/리미티드에디션-01.png",credit:"",kind:"image",width:1300,height:700,src:new URL(""+new URL("A049-CXTcNlLg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A050",title:"이클립스핑 리미티드 전개도",group:"packaging",source:"지기구조/리미티드에디션-02.png",credit:"",kind:"image",width:1300,height:700,src:new URL(""+new URL("A050-CmGRRcly.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A051",title:"하츄핑 싱글팩 전개도",group:"packaging",source:"지기구조/싱글팩-01.png",credit:"",kind:"image",width:1300,height:919,src:new URL(""+new URL("A051-CTRc-5WU.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A052",title:"다이아나핑 싱글팩 전개도",group:"packaging",source:"지기구조/싱글팩-02.png",credit:"",kind:"image",width:1300,height:919,src:new URL(""+new URL("A052-C2wYdsih.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A053",title:"이클립스핑 싱글팩 전개도",group:"packaging",source:"지기구조/싱글팩-03.png",credit:"",kind:"image",width:1300,height:919,src:new URL(""+new URL("A053-DXV-lyzb.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A054",title:"물류용 카톤박스 인쇄 그래픽",group:"production",source:"지기구조/카톤박스.png",credit:"",kind:"image",width:1300,height:321,src:new URL(""+new URL("A054-Dc4LGRjr.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A055",title:"크리스탈 케이스 보호 파우치",group:"production",source:"지기구조/케이스파우치.png",credit:"",kind:"image",width:1041,height:618,src:new URL(""+new URL("A055-BIEH9qdk.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A056",title:"풀박스 전개도",group:"packaging",source:"지기구조/풀박스.png",credit:"",kind:"image",width:1300,height:824,src:new URL(""+new URL("A056-E-Rtk_DU.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A057",title:"블루 케이스 · 보관 연출",group:"usage",source:"컨셉컷/34.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A057-DRiIUZpw.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A058",title:"다이아나핑 · 제품 구성 연출",group:"usage",source:"컨셉컷/36.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A058-BSPrGWIg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A059",title:"핑크 케이스 · 침실 연출",group:"usage",source:"컨셉컷/38.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A059-DThxwxuI.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A060",title:"블루 케이스 · 생활 공간 연출",group:"usage",source:"컨셉컷/39.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A060-DlDeSZt9.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A061",title:"핑크 케이스 · 선반 전시",group:"usage",source:"컨셉컷/42.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A061-Kpg24czI.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A062",title:"자석 배지 · 보드 활용",group:"usage",source:"컨셉컷/43.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A062-O9QQ2SKI.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A063",title:"핑크 케이스 · 전시 연출",group:"usage",source:"컨셉컷/44.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A063-DmpGhSYD.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A064",title:"퍼플 케이스 · 배지 넣기",group:"usage",source:"컨셉컷/47.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A064-B16JOuoc.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A065",title:"블루 케이스 · 배지 넣기",group:"usage",source:"컨셉컷/52.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A065-CUio22GL.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A066",title:"다이아나핑 · 탁상 구성",group:"usage",source:"컨셉컷/53.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A066-v93I7zu8.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A067",title:"퍼플 케이스 · 사용 연출",group:"usage",source:"컨셉컷/55.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A067-vZkd6QHF.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A068",title:"핑크 케이스 · 탁상 구성",group:"usage",source:"컨셉컷/56.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A068-CobA29q_.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A069",title:"핑크 케이스 · 보관 연출 01",group:"usage",source:"컨셉컷/58.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A069-CoNlK4mD.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A070",title:"핑크 케이스 · 보관 연출 02",group:"usage",source:"컨셉컷/59.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A070-BxP_7Cp7.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A071",title:"아이 놀이 콘셉트 01",group:"usage",source:"컨셉컷/66.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A071-DvRC7Omg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A072",title:"아이 놀이 콘셉트 02",group:"usage",source:"컨셉컷/69.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A072-MOTBjPqQ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A073",title:"아이 놀이 콘셉트 03",group:"usage",source:"컨셉컷/72.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A073-CpqFVpMW.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A074",title:"아이 놀이 콘셉트 04",group:"usage",source:"컨셉컷/73.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A074-DMI9jL2D.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A075",title:"아이 놀이 콘셉트 05",group:"usage",source:"컨셉컷/74.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A075-DYrQqjtt.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A076",title:"이클립스핑 · 후기 콘셉트",group:"usage",source:"컨셉컷/82.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A076-R1imCyhg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A077",title:"다이아나핑 · 후기 콘셉트",group:"usage",source:"컨셉컷/83.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A077-Bbn168Ce.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A078",title:"블루 크리스탈 케이스",group:"usage",source:"컨셉컷/기본_01.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A078-h4Am-4RB.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A079",title:"핑크 크리스탈 케이스",group:"usage",source:"컨셉컷/기본_02.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A079-DwHfTixV.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A080",title:"퍼플 크리스탈 케이스",group:"usage",source:"컨셉컷/기본_03.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A080-f2hsvjnf.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A081",title:"제공 제품 사양",group:"production",source:"티니핑미스터리뱃지_사양.txt",credit:"",kind:"text",text:`1. 딱지 스팩
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

2400개 1파레트`,src:null,pages:[]},{id:"A082",title:"풀박스 제품 이미지",group:"product",source:"풀박스/레이어 1.png",credit:"",kind:"image",width:610,height:670,src:new URL(""+new URL("A082-Cl9oaX5r.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A083",title:"풀박스 구성",group:"product",source:"풀박스/풀박스_단색배경.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A083-BhJsK5aL.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A084",title:"풀박스 대표 비주얼",group:"product",source:"풀박스/풀박스_이미지.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A084-vhist52g.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"B001",title:"배지 제작 시트 · 앞면과 공통 뒷면",group:"badge",source:"260417_티니핑3종딱지(최종칼선).pdf",credit:"",kind:"document",src:new URL(""+new URL("badge-front-BeRoCcsF.webp",import.meta.url).href,import.meta.url).href,pages:[new URL(""+new URL("badge-front-BeRoCcsF.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-back-BOkZlx0J.webp",import.meta.url).href,import.meta.url).href]}];new URL("data:image/webp;base64,UklGRtgPAABXRUJQVlA4IMwPAACwOQCdASpuAG4APjESiEKiISEXKu9kIAMEtABkC9Mm++b80Wv/2r8EflT8VfBHpfy5ec/+n9zvah/QfsB/rp0pfMJ+2/7Se8P/svUV/WvUG/qn+16yT0D/3Q9OD91vhA/tP/T9LbBSd+v6jwj8eHtz25/tPtxY+7Rf5T92v2fmr35/E/UI9gf7fxJduFZf0BfbP7B/0/Df1dPDvsAfq//v/XrvtfRvYC/P/qzf2//x8xP6H/ov2p+Av+e/3DrTejh+6DwOfbs7Oe/fBGCVP8fC7piJDMsQfRaK38Bm/iq4NmPjc71kUB+yA+u8f28Ay9cNTbH3VxNfKMB/URq4m6VeVZRgPOTiHe7SjhPHrGuvF7ESBKdis8bFWz41sEf1JVWoGq+YnuTI3uHl3c5hGOBgT+7/7igbZII8Qb/ZYX6X60z+AzVR14u6pW6byZSPfY5a85Klw9jLaJi29n9djD2hoMetVoyhIP6Eo9AhhQW7oZMa3W9h8fVEBXP+EsATQ+ZlD0mGpimf1Ogq2g+VBJl97W5xa5hhizn/OCunzySibq3RiUSx3oLyAJZXcnTI7+rhYFmPLtrH2H1G2C+5zstioE2UumJaQGr/PXdqSVOBG4Pa7mdFQAD+/3yAJ7YletVx1r23McXhuCK7eJj9sUKjPpeLXM7D//4lb5X8+cxJOi9OG2iV8kx4eCFI0z7VYAw6kLmSlkZGz7cKr/jl8vnJcohPBDnrgKDEcpIdhUdiobh0vWEX2gBMw/fbd6ctFswJLy8DJsw7cwrXiaUC2pmXlZpR+nR55aguGfWX+nmY0k2Ei7hYZMZbbB8tbFCxuog0hNMZAQr0RwCKU07sjZ0uI9b9lzc6jWsmzx8LEqV2fBfD1oTA9LrjGQAFNjvmzbYXpqlGLsNvQ9ax8kZCPWjGrjLMPOF8GHLXuPmQILo1tKKzMo2gMTdDc8CTR6cWXKyuktkWbsBOXWc8S0VdDoYhb1EqZdnrRgEk9iwVriH28BNdkBcVNul32+R95mbEu1t3gyM7XPo7SGH803il7McyPuMO++ZwRRxrJL0xZAY6w1Zm38Bb6boeK+x1PSlTWwGcTE9EdPNqCsLA8kf+du0DPlhhRd9mp5aXbj98r8fY+bHR3JC1wSja4OiemurefQ7c5FblA4e0B6VXFURBa30ng/76ji+YP00gvstdcRH93IaMIFliObUdeyORufK2hFOS9wAm+lf8iv8N59ECWWcJsRIC58yB3/2gjvjG8R7XXI12gMxvti7zeQpJobm60Rl7rW5Bx/HIUnKFgpux73/16X0ZgEKb4NLt7X5xcN/OLI7zHV/NY+rFdsP2A+9m7zpgbix/zlTFNs77xjvVEF13DelGI23OG1J1P+mE9KBaLsAdIRDtzMJNPCK/92xGmTW1llkpvTJcbA3ZhrNJSB3sGpFxGMpQ+TU7t6neWEelZFYo7XhcHsHSZmMkSrp4H2T8QJtqIwNGeIz5GEz6eoL7Es5n2XGferhHMb3fOpe5Ko6luM9yyb4tZhyCjnqlB+bI+hpVEtOA7khMQYndflMXnvbeG2EaiTMzfJg113iYwcxKaIZIOl5ChTgEvIc2ORYQjz7S9qQce8ko7hKMkSw3WHjOp66ilvcdvkeAKR83eUeMfPVPGGJaONDuZPu8MVibIOYZSsr/d+En28N1BdvybTF+Ea/kGi8P/j/vugVicSRPWUvlTzI/HQnCnb2W3VuXJZjwmcwzxKPMjgIUocXl/w+WvT1UnrgHtaIJr7fk1unG6SPnbhmZJ232eiWKJSa8Si2RsgRS39174OR2b62GXBw74H4T48bL5XKhK+x98QyagZSgDbdetOMYuq5XErq77s9jvCP3R9bqwojA3Uvs0JPEgrPIDQ/lJ/e3sb7ZBJf7X5LJKoINQIYxYoSW2rtIM1YIzIu13WxLMRFQedNe3pDXp9pV/6MSX594MH/ij38i+5w4dYpU30bTWekNcKNa60dWTHt0aym6E0SjekUkElAjX5q/fqkwQsvenbTT57ZuKoNmEcSHi/zuI0qSzIIkR31CCHktXukshfve0XxEexUUnM2N5Dh1clfJtjW25dCXQKSVmQXa7z8z2EHIgw2PVS33BEMP/du8P1rxFhVyrt2bhplbXeRGgFQU9LaOs5xN/aWKciHg9ivjMb8/LaHA/5EERrwms9POiz0MUfmcFMsFEo/BbU8h2px84n6lZfZJ0wf1CsGZ+UuF3mMOQg0wqXyVHQxsKQez6GbP1L+StbKjxT+/IpczRhdWdyZfn6R4p9em8CIxT5xFFY6LoX5/1QaksscW9yunlLGjZ/f/a7Jm4rBzeSI4f4fZdfxIVDJepL4rukFlRTN7bL7hjSn6e9z2Zd5ecDSvBArl/MK+6uvOldujNv7ZCqnHKHA8MwKBNzzjvwvbm16/dFKmtFUiX50wvdUkVv2MsuvPodP3Y6QQ2kENwMF4a3GhpMnU4K9dQo7lrnpp6+NWyoN5JT5c3+Rj079bwqYkXbM3iDg9lvPtCoz7stuDjj/tO/Qd1swEmLcDv3rPlheAXYEVQWI7bz9fnypPYN+3EYhZ0hjfRJMitcqL16sORGxihvSBlezl1TmFkBpGVCsrqXDHA09Da0bqp0aMLREibC9UO5lBO/wMpeh0OmpEtpmvNX8gOTV+HoklRT5otbx88W6YKSe6kXYiK/09uZc+sFNbWOz+rhVDuhmVRgwHmD53ue9KBD6qTmMdEmX6fBasoYkKXUzUs+FAd5iFtsj6zx2D1oaUq3JMHV9AQYIfEFlRWVq+CJtZxnVC2kp/9tL6xNOacLVuPOQBdOMU+TpZEXUMKUmf09YAwrtkAcKzTY2uRa1kG9HJmk7dXfC6OHi2lR2+cVZ0kf2PdPyy318kQ8hwahxbg8nqGxpmnH7EpPKAE2ItaYRtcy0uOBKjSVxYh4sytQyZ/EKQ3FV1z0joJfYXm7GmZ368vahWH/A/NjmRAFgU9pJ2RZCPu9UlDFjuTv9oJX1UbRxyB9LKtPndJOS7ay1SV0r1p/wMRT3ZY6t6KNeQj7KV7o8BGsJceYTL/4ytdRv/xmOzvvbGKsNNwQvS3HdpEyiDiBmuDKIhmqRV3tU6Kf/+bkez829vm2tPuR52g7Yag/vwk1NFtwzgIVa+lnF3zPVPf17cQWvInZUURZLGsoCJS0vBY7Py3tY/67KeGpoxeOxStTLS0V/qDy1Er71+qJpy4Nwz7i/qrLVobRSb3Xo1lU8BO7EIVci5Sa/E8CfgGyA+VZfFpuvPqr+S7DujFIQEbedXvkjseGcSw/924AV3+HWU64D7hY01FtPe1LwcjtTvQh5Z9+3vbIWAB18OEhlPwzy+sfAxMkAjZc1GHKu1C+T8ubpaWAiyVnpZMw/kl8tyBDy7KMf18rwM3KCXxWFsIcCtLqMM8qBZkvhRF46/ghEdvanejrM3ZKN7hoHyKwHTF8ww/9sgJFuJHq+V/Yjt8ePfHZNncrVaZlLQ6V6MJxoK5oeDgpn9sidSaE9843UuEh40b5L9QLVLkk99fF6X6EHTfzVW9q+rufvF56v7MJfsXT5bg7DriKRLwvOe15ans9zY6Iulb+frU4gAYXvEmkDujkd/46+v0NejyHJCbIVwOUOoM4NmTch27AO+ZyaVWH8iifmHpQpRflgNdyz176ZRlQFfVEmPEs/gNlg4da4Tq/Pf45rkYa3ognj/WhVwBq4Q3lU2U+R4DkUPwKXmg/24oDvG0fA4/4hzoDQ6TBTW7m/bV5XB+R9t6c7z2PMaOBrSW2c7JErWfrh0G73BrPU2NyctT9KSCyt+N670WsePWsH7mYUmywpnUMekrRew3guTkBi8XasnDorB4cn5Wv+hKtPch9ztETFZjcZJzhi+P5tPCqMMzem6beM0zsWRz8JARGtuQHWGbao4cRdSBIg6sfQvn+rj5kDhMVizjoJc1Hu7eZMRbdG/YiN6hjaoZVlaSKc883kV60CqECKpUyp8ndRwRCmWDyosTFaHE9r8bXomUAQLa/Qf9duWaH1Rf2ILDxf5UFwmuyb5+CHN68HSO3+0n+z76yEC+kmnOAsDpknFD7fxrNsETw95oarZlcx8drN9Ttl+jR55KKFbAQHqVr3ZyQaxGVD7L05+1dlsPDHVHQ3FjHMVdTFQXyTkEOphc+Zzq6c3L5Be43mEU4ThiA1ayExZr9gUfjuWyAYIPoR5S+S+kcAsgXViu53Nvlhf1DdkI4JzP3x986MsHKwImyacSZevgIT8EKr0hCQc+PkQspZe1j2Cn9GMgWRvMwryQZdBOfMh+np4LQ4AvHi6mtjCKI+caQ+hHV6ECLkpj9O/h2xFMwtszXZTlYtLA/vFbNVq7yKXhc3qTOGxI0bzlAJQgvQl4GYJiBDy0533CxoesNyJrtO5W/vc3a7N4lqXOtwMaQfi9x4B2IYauhkHxwEd+xdqyLsQS+Fva+zTaSu3sKaTKG3Hhgn3ComN4EQqvUfZZVnk2Tdqi27nbXgfIrGPNTFt29K9UX7iHuUN5Twy3awdbivngHJdZgfGPurcfEOW+nObxGL6bef7wQ68aOWeVF5S0zGSU/O9blxU6cPqcXATHA3sUVOwormKn309OaVQnW0KvEcpi9aVp8pyzdpnrITVHB74VRq5yC31r8hhUnahIB71UnNu+m/gSUwx+eIdpAnM+hxz4ZJRhGS/tZr5HYQr6UQbfCAw7C+n1NjtXPzeUL22gkvncYL9aIyulFCRSZuJlm16fBQzSHknQTEfTteZ7do90rG0ewK4yfWXEvsSiuuBs5llyyhshTeBfZ1V0PZSWRBP0vN1HTBGq6Gma0iT7Sz/NlZGxRne/O36OocU1BDK5F1h2Bjtqzuafjo3fLzKoJaKRvIZ8iLWwb/G2o7z4CzgkSr49Ir0+rbkObf/+eiCD3OhUPY5JUSermkCkdgehAcsTsyLmzYisV2Sz9kkDU8N1cIZx6h8FVgxqAPEqlkSlFG6JwjQbNnH5NXabJ7+hBaz5kD7HXi9fq/ft3rwlwd4GvkMhImQ/APuXd7+790GtEOHiXMLJPkBnMStq5cfVKK1R5O5anbhTBFyNE6g/BcI8MGdNrXXcwnqcqPgUy5DxSmSI8KGdRQR9hcpSoB4zZZ2HNTNs8aXZVGKF4brtit/zD2/nmnVY3mdaKUR7d6/QxDC9TMX953qpTtRRXsqH2EwZS3nthTU7ghbaD39iRZvY8DASmL51tENDYg+fqDyhi3MOOpLyYBj3SB/pshC8NlHjeM9kT1TtkXj7Zb/5lqeAsGcCrm6zVEPcKBtNhbDAcvr45CRGT39Qb5Fo5g62/A2FjMG8BIM+pqs62fteL+gAAMBeMcboTmzGQyx4DziXd1EYhc8miTnHrQAAAA=",import.meta.url).href,new URL(""+new URL("badge-sample-2-C9akOfRk.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-3-BacbPyRw.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-4-BljmGkla.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-5-DWGY2Bab.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-6-BSEwgY1Y.webp",import.meta.url).href,import.meta.url).href;const Tr={B001:{pages:[{url:new URL(""+new URL("B001-1.svg-DLOshZ_2.gz",import.meta.url).href,import.meta.url).href,width:1842.52001953125,height:1388.97998046875},{url:new URL(""+new URL("B001-2.svg-DuMFJMti.gz",import.meta.url).href,import.meta.url).href,width:1836.8499755859375,height:1383.31005859375}]},A004:{pages:[{url:new URL(""+new URL("A004-1.svg-Dm4KXuBb.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-2.svg-BMoD3VSE.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-3.svg-CZujMGnP.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-4.svg-B-_pYSMP.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-5.svg-C_KC-hjD.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-6.svg-Coy9z03B.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625}]},A001:{pages:[{url:new URL(""+new URL("A001-1.svg-DdwMotaf.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625}]}},Ms=[{id:"gold",label:"골드",description:"금색 링 · 클로버 보석 프레임"},{id:"sparkle",label:"스파클",description:"은색 링 · 하트 보석 프레임"},{id:"shining",label:"샤이닝",description:"캐릭터 컬러 링 · 원형 보석 프레임"}],en=[{id:"badge-08",sourcePosition:8,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:1,column:8,frontPrint:[1254.330319862666,34.01955173522468,1424.4090600201464,204.098291892705],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,42.523488743098696,1415.9051230122723,195.59435488483098],back:[1262.9755859375,36.71195983886719,1415.7635498046875,189.4999542236328],typeIndex:1,label:"골드 01",thumbnail:new URL(""+new URL("badge-08-DE-FqJsL.webp",import.meta.url).href,import.meta.url).href},{id:"badge-09",sourcePosition:9,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:1,column:9,frontPrint:[1421.5748266986036,34.01955173522468,1591.653566856084,204.098291892705],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,42.523488743098696,1583.1496298482098,195.59435488483098],back:[1430.2200927734375,36.71195983886719,1583.008056640625,189.4999542236328],typeIndex:2,label:"골드 02",thumbnail:new URL(""+new URL("badge-09-DmH9n4DQ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-10",sourcePosition:10,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:1,column:10,frontPrint:[1588.8187231829786,34.01942966491218,1758.897463340459,204.0981698223925],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,42.523366672786196,1750.3935263325848,195.59423281451848],back:[1597.4639892578125,36.71195983886719,1750.251953125,189.4999542236328],typeIndex:3,label:"골드 03",thumbnail:new URL(""+new URL("badge-10-BejpQ3og.webp",import.meta.url).href,import.meta.url).href},{id:"badge-18",sourcePosition:18,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:2,column:8,frontPrint:[1254.330319862666,198.42891452819345,1424.4090600201464,368.50765468567374],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,206.93285153606746,1415.9051230122723,360.0037176777997],back:[1262.9755859375,201.1211395263672,1415.7635498046875,353.90911865234375],typeIndex:4,label:"골드 04",thumbnail:new URL(""+new URL("badge-18-XlSUykBc.webp",import.meta.url).href,import.meta.url).href},{id:"badge-19",sourcePosition:19,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:2,column:9,frontPrint:[1421.5748266986036,198.42891452819345,1591.653566856084,368.50765468567374],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,206.93285153606746,1583.1496298482098,360.0037176777997],back:[1430.2200927734375,201.1211395263672,1583.008056640625,353.90911865234375],typeIndex:5,label:"골드 05",thumbnail:new URL(""+new URL("badge-19-DBne2Zis.webp",import.meta.url).href,import.meta.url).href},{id:"badge-20",sourcePosition:20,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:2,column:10,frontPrint:[1588.8187231829786,198.42879245788095,1758.897463340459,368.50753261536124],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,206.93272946575496,1750.3935263325848,360.0035956074872],back:[1597.4639892578125,201.1211395263672,1750.251953125,353.90911865234375],typeIndex:6,label:"골드 06",thumbnail:new URL(""+new URL("badge-20-CIL8-nl4.webp",import.meta.url).href,import.meta.url).href},{id:"badge-28",sourcePosition:28,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:3,column:8,frontPrint:[1254.330319862666,362.838345985713,1424.4090600201464,532.9170861431933],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,371.342282993587,1415.9051230122723,524.4131491353193],back:[1262.9755859375,365.53057861328125,1415.7635498046875,518.3185424804688],typeIndex:7,label:"골드 07",thumbnail:new URL(""+new URL("badge-28-CcBXr4M_.webp",import.meta.url).href,import.meta.url).href},{id:"badge-29",sourcePosition:29,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:3,column:9,frontPrint:[1421.5748266986036,362.838345985713,1591.653566856084,532.9170861431933],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,371.342282993587,1583.1496298482098,524.4131491353193],back:[1430.2200927734375,365.53057861328125,1583.008056640625,518.3185424804688],typeIndex:8,label:"골드 08",thumbnail:new URL(""+new URL("badge-29-Dd0k_HIo.webp",import.meta.url).href,import.meta.url).href},{id:"badge-30",sourcePosition:30,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:3,column:10,frontPrint:[1588.8187231829786,362.8382239154005,1758.897463340459,532.9169640728808],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,371.3421609232745,1750.3935263325848,524.4130270650068],back:[1597.4639892578125,365.53057861328125,1750.251953125,518.3185424804688],typeIndex:9,label:"골드 09",thumbnail:new URL(""+new URL("badge-30-DfvCrJrR.webp",import.meta.url).href,import.meta.url).href},{id:"badge-38",sourcePosition:38,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:4,column:8,frontPrint:[1254.330319862666,527.2477087786817,1424.4090600201464,697.326448936162],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,535.7516457865557,1415.9051230122723,688.822511928288],back:[1262.9755859375,529.9398803710938,1415.7635498046875,682.7278442382812],typeIndex:10,label:"골드 10",thumbnail:new URL(""+new URL("badge-38-Cg79xo4X.webp",import.meta.url).href,import.meta.url).href},{id:"badge-39",sourcePosition:39,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:4,column:9,frontPrint:[1421.5748266986036,527.2477087786817,1591.653566856084,697.326448936162],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,535.7516457865557,1583.1496298482098,688.822511928288],back:[1430.2200927734375,529.9398803710938,1583.008056640625,682.7278442382812],typeIndex:11,label:"골드 11",thumbnail:new URL(""+new URL("badge-39-B_YUpvKk.webp",import.meta.url).href,import.meta.url).href},{id:"badge-40",sourcePosition:40,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:4,column:10,frontPrint:[1588.8187231829786,527.2477087786817,1758.897463340459,697.326448936162],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,535.7516457865557,1750.3935263325848,688.822511928288],back:[1597.4639892578125,529.9398803710938,1750.251953125,682.7278442382812],typeIndex:12,label:"골드 12",thumbnail:new URL(""+new URL("badge-40-DBsTG2MC.webp",import.meta.url).href,import.meta.url).href},{id:"badge-48",sourcePosition:48,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:5,column:8,frontPrint:[1254.330319862666,691.6571326068067,1424.4090600201464,861.735872764287],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,700.1610696146807,1415.9051230122723,853.231935756413],back:[1262.9755859375,694.3494873046875,1415.7635498046875,847.137451171875],typeIndex:13,label:"골드 13",thumbnail:new URL(""+new URL("badge-48-rZmMYQXx.webp",import.meta.url).href,import.meta.url).href},{id:"badge-49",sourcePosition:49,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:5,column:9,frontPrint:[1421.5748266986036,691.6571326068067,1591.653566856084,861.735872764287],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,700.1610696146807,1583.1496298482098,853.231935756413],back:[1430.2200927734375,694.3494873046875,1583.008056640625,847.137451171875],typeIndex:14,label:"골드 14",thumbnail:new URL(""+new URL("badge-49-Dhx76ABa.webp",import.meta.url).href,import.meta.url).href},{id:"badge-50",sourcePosition:50,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:5,column:10,frontPrint:[1588.8187231829786,691.6571326068067,1758.897463340459,861.735872764287],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,700.1610696146807,1750.3935263325848,853.231935756413],back:[1597.4639892578125,694.3494873046875,1750.251953125,847.137451171875],typeIndex:15,label:"골드 15",thumbnail:new URL(""+new URL("badge-50-5Am-PpTX.webp",import.meta.url).href,import.meta.url).href},{id:"badge-58",sourcePosition:58,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:6,column:8,frontPrint:[1254.330319862666,856.0665564349317,1424.4090600201464,1026.145296592412],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,864.5704934428057,1415.9051230122723,1017.641359584538],back:[1262.9755859375,858.7587890625,1415.7635498046875,1011.5467529296875],typeIndex:16,label:"골드 16",thumbnail:new URL(""+new URL("badge-58-CbB1XB4w.webp",import.meta.url).href,import.meta.url).href},{id:"badge-59",sourcePosition:59,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:6,column:9,frontPrint:[1421.5748266986036,856.0665564349317,1591.653566856084,1026.145296592412],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,864.5704934428057,1583.1496298482098,1017.641359584538],back:[1430.2200927734375,858.7587890625,1583.008056640625,1011.5467529296875],typeIndex:17,label:"골드 17",thumbnail:new URL(""+new URL("badge-59-CELhVXQJ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-60",sourcePosition:60,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:6,column:10,frontPrint:[1588.8187231829786,856.0666785052442,1758.897463340459,1026.1454186627245],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,864.5706155131182,1750.3935263325848,1017.6414816548505],back:[1597.4639892578125,858.7587890625,1750.251953125,1011.5467529296875],typeIndex:18,label:"골드 18",thumbnail:new URL(""+new URL("badge-60-BAzuZeiE.webp",import.meta.url).href,import.meta.url).href},{id:"badge-68",sourcePosition:68,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:7,column:8,frontPrint:[1254.330319862666,1020.4759802630567,1424.4090600201464,1190.554720420537],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,1028.9799172709309,1415.9051230122723,1182.050783412663],back:[1262.9755859375,1023.1682739257812,1415.7635498046875,1175.956298828125],typeIndex:19,label:"골드 19",thumbnail:new URL(""+new URL("badge-68-D6yD2wXZ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-69",sourcePosition:69,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:7,column:9,frontPrint:[1421.5748266986036,1020.4759802630567,1591.653566856084,1190.554720420537],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,1028.9799172709309,1583.1496298482098,1182.050783412663],back:[1430.2200927734375,1023.1682739257812,1583.008056640625,1175.956298828125],typeIndex:20,label:"골드 20",thumbnail:new URL(""+new URL("badge-69-DZ9miDly.webp",import.meta.url).href,import.meta.url).href},{id:"badge-70",sourcePosition:70,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:7,column:10,frontPrint:[1588.8187231829786,1020.4761023333692,1758.897463340459,1190.5548424908495],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,1028.9800393412434,1750.3935263325848,1182.0509054829754],back:[1597.4639892578125,1023.1682739257812,1750.251953125,1175.956298828125],typeIndex:21,label:"골드 21",thumbnail:new URL(""+new URL("badge-70-DgXjk1az.webp",import.meta.url).href,import.meta.url).href},{id:"badge-78",sourcePosition:78,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:8,column:8,frontPrint:[1254.330319862666,1184.8853735736036,1424.4090600201464,1354.964113731084],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,1193.3893105814777,1415.9051230122723,1346.4601767232098],back:[1262.9755859375,1187.57763671875,1415.7635498046875,1340.36572265625],typeIndex:22,label:"골드 22",thumbnail:new URL(""+new URL("badge-78-Cd2vu3Y5.webp",import.meta.url).href,import.meta.url).href},{id:"badge-79",sourcePosition:79,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:8,column:9,frontPrint:[1421.5748266986036,1184.8853735736036,1591.653566856084,1354.964113731084],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,1193.3893105814777,1583.1496298482098,1346.4601767232098],back:[1430.2200927734375,1187.57763671875,1583.008056640625,1340.36572265625],typeIndex:23,label:"골드 23",thumbnail:new URL(""+new URL("badge-79-DRsnIm3D.webp",import.meta.url).href,import.meta.url).href},{id:"badge-80",sourcePosition:80,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:8,column:10,frontPrint:[1588.8187231829786,1184.885495643916,1758.897463340459,1354.9642358013964],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,1193.3894326517902,1750.3935263325848,1346.4602987935223],back:[1597.4639892578125,1187.57763671875,1750.251953125,1340.36572265625],typeIndex:24,label:"골드 24",thumbnail:new URL(""+new URL("badge-80-IkvXAdCT.webp",import.meta.url).href,import.meta.url).href},{id:"badge-03",sourcePosition:3,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:3,frontPrint:[418.042203407588,34.04199741393562,588.1209435650683,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,42.54593442180963,579.6170065571943,195.61680056354191],back:[426.7555236816406,36.71195983886719,579.5435180664062,189.4999542236328],typeIndex:1,label:"스파클 01",thumbnail:new URL(""+new URL("badge-03-C2Andf4t.webp",import.meta.url).href,import.meta.url).href},{id:"badge-04",sourcePosition:4,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:4,frontPrint:[584.8421912005567,34.04199741393562,754.920931358037,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,42.54593442180963,746.416994350163,195.61680056354191],back:[593.9993896484375,36.71195983886719,746.7874145507812,189.4999542236328],typeIndex:2,label:"스파클 02",thumbnail:new URL(""+new URL("badge-04-evTzyb21.webp",import.meta.url).href,import.meta.url).href},{id:"badge-05",sourcePosition:5,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:5,frontPrint:[752.1222204974317,34.04199741393562,922.200960654912,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,42.54593442180963,913.697023647038,195.61680056354191],back:[761.24365234375,36.71195983886719,914.0316162109375,189.4999542236328],typeIndex:3,label:"스파클 03",thumbnail:new URL(""+new URL("badge-05-COCRur_e.webp",import.meta.url).href,import.meta.url).href},{id:"badge-07",sourcePosition:7,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:7,frontPrint:[1086.824216347041,34.63428257018562,1256.9029565045214,204.71302272766593],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,43.13821957805963,1248.3990194966473,196.20908571979191],back:[1095.731689453125,36.71195983886719,1248.5196533203125,189.4999542236328],typeIndex:4,label:"스파클 04",thumbnail:new URL(""+new URL("badge-07-VA6G1nD3.webp",import.meta.url).href,import.meta.url).href},{id:"badge-13",sourcePosition:13,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:3,frontPrint:[418.042203407588,198.44202182799813,588.1209435650683,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,206.94595883587215,579.6170065571943,360.0168249776044],back:[426.7555236816406,201.1211395263672,579.5435180664062,353.90911865234375],typeIndex:5,label:"스파클 05",thumbnail:new URL(""+new URL("badge-13-BFRXnlsh.webp",import.meta.url).href,import.meta.url).href},{id:"badge-14",sourcePosition:14,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:4,frontPrint:[584.8421912005567,198.44202182799813,754.920931358037,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,206.94595883587215,746.416994350163,360.0168249776044],back:[593.9993896484375,201.1211395263672,746.7874145507812,353.90911865234375],typeIndex:6,label:"스파클 06",thumbnail:new URL(""+new URL("badge-14-DtQvtGMO.webp",import.meta.url).href,import.meta.url).href},{id:"badge-15",sourcePosition:15,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:5,frontPrint:[752.1222204974317,198.44202182799813,922.200960654912,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,206.94595883587215,913.697023647038,360.0168249776044],back:[761.24365234375,201.1211395263672,914.0316162109375,353.90911865234375],typeIndex:7,label:"스파클 07",thumbnail:new URL(""+new URL("badge-15-czov33Tv.webp",import.meta.url).href,import.meta.url).href},{id:"badge-17",sourcePosition:17,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:7,frontPrint:[1086.824216347041,198.53052280456063,1256.9029565045214,368.60926296204093],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,207.03445981243465,1248.3990194966473,360.1053259541669],back:[1095.731689453125,201.1211395263672,1248.5196533203125,353.90911865234375],typeIndex:8,label:"스파클 08",thumbnail:new URL(""+new URL("badge-17-QyXdOENZ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-24",sourcePosition:24,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:3,column:4,frontPrint:[584.8421912005567,362.8420386126661,754.920931358037,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,371.3459756205401,746.416994350163,524.4168417622724],back:[593.9993896484375,365.53057861328125,746.7874145507812,518.3185424804688],typeIndex:9,label:"스파클 09",thumbnail:new URL(""+new URL("badge-24-D06_EHHY.webp",import.meta.url).href,import.meta.url).href},{id:"badge-25",sourcePosition:25,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:3,column:5,frontPrint:[752.1222204974317,362.8420386126661,922.200960654912,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,371.3459756205401,913.697023647038,524.4168417622724],back:[761.24365234375,365.53057861328125,914.0316162109375,518.3185424804688],typeIndex:10,label:"스파클 10",thumbnail:new URL(""+new URL("badge-25-DtDCPFNy.webp",import.meta.url).href,import.meta.url).href},{id:"badge-27",sourcePosition:27,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:3,column:7,frontPrint:[1086.824216347041,363.2766089251661,1256.9029565045214,533.3553490826464],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,371.7805459330401,1248.3990194966473,524.8514120747724],back:[1095.731689453125,365.53057861328125,1248.5196533203125,518.3185424804688],typeIndex:11,label:"스파클 11",thumbnail:new URL(""+new URL("badge-27-Cd6A13TO.webp",import.meta.url).href,import.meta.url).href},{id:"badge-34",sourcePosition:34,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:4,column:4,frontPrint:[584.8421912005567,527.2420630267286,754.920931358037,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,535.7460000346026,746.416994350163,688.8168661763349],back:[593.9993896484375,529.9398803710938,746.7874145507812,682.7278442382812],typeIndex:12,label:"스파클 12",thumbnail:new URL(""+new URL("badge-34-Cd0ySSwt.webp",import.meta.url).href,import.meta.url).href},{id:"badge-35",sourcePosition:35,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:4,column:5,frontPrint:[752.1222204974317,527.2420630267286,922.200960654912,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,535.7460000346026,913.697023647038,688.8168661763349],back:[761.24365234375,529.9398803710938,914.0316162109375,682.7278442382812],typeIndex:13,label:"스파클 13",thumbnail:new URL(""+new URL("badge-35-DOwYXlfS.webp",import.meta.url).href,import.meta.url).href},{id:"badge-37",sourcePosition:37,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:4,column:7,frontPrint:[1086.824216347041,527.4719824603224,1256.9029565045214,697.5507226178026],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,535.9759194681964,1248.3990194966473,689.0467856099286],back:[1095.731689453125,529.9398803710938,1248.5196533203125,682.7278442382812],typeIndex:14,label:"스파클 14",thumbnail:new URL(""+new URL("badge-37-CbOkyFPI.webp",import.meta.url).href,import.meta.url).href},{id:"badge-44",sourcePosition:44,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:5,column:4,frontPrint:[584.8421912005567,691.6420264056349,754.920931358037,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,700.1459634135089,746.416994350163,853.2168295552411],back:[593.9993896484375,694.3494873046875,746.7874145507812,847.137451171875],typeIndex:15,label:"스파클 15",thumbnail:new URL(""+new URL("badge-44-B0QQhtl8.webp",import.meta.url).href,import.meta.url).href},{id:"badge-45",sourcePosition:45,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:5,column:5,frontPrint:[752.1222204974317,691.6420264056349,922.200960654912,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,700.1459634135089,913.697023647038,853.2168295552411],back:[761.24365234375,694.3494873046875,914.0316162109375,847.137451171875],typeIndex:16,label:"스파클 16",thumbnail:new URL(""+new URL("badge-45-DmxY66ow.webp",import.meta.url).href,import.meta.url).href},{id:"badge-47",sourcePosition:47,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:5,column:7,frontPrint:[1086.824216347041,691.9851050189161,1256.9029565045214,862.0638451763964],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,700.4890420267901,1248.3990194966473,853.5599081685224],back:[1095.731689453125,694.3494873046875,1248.5196533203125,847.137451171875],typeIndex:17,label:"스파클 17",thumbnail:new URL(""+new URL("badge-47-CeRviWJJ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-54",sourcePosition:54,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:6,column:4,frontPrint:[584.8421912005567,856.0420508196974,754.920931358037,1026.1207909771776],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,864.5459878275714,746.416994350163,1017.6168539693036],back:[593.9993896484375,858.7587890625,746.7874145507812,1011.5467529296875],typeIndex:18,label:"스파클 18",thumbnail:new URL(""+new URL("badge-54-B5s3ZlQK.webp",import.meta.url).href,import.meta.url).href},{id:"badge-55",sourcePosition:55,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:6,column:5,frontPrint:[752.1222204974317,856.0420508196974,922.200960654912,1026.1207909771776],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,864.5459878275714,913.697023647038,1017.6168539693036],back:[761.24365234375,858.7587890625,914.0316162109375,1011.5467529296875],typeIndex:19,label:"스파클 19",thumbnail:new URL(""+new URL("badge-55-DODeslOI.webp",import.meta.url).href,import.meta.url).href},{id:"badge-57",sourcePosition:57,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:6,column:7,frontPrint:[1086.824216347041,856.3358130267286,1256.9029565045214,1026.414553184209],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,864.8397500346026,1248.3990194966473,1017.9106161763349],back:[1095.731689453125,858.7587890625,1248.5196533203125,1011.5467529296875],typeIndex:20,label:"스파클 20",thumbnail:new URL(""+new URL("badge-57-BoHgYb2v.webp",import.meta.url).href,import.meta.url).href},{id:"badge-64",sourcePosition:64,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:7,column:4,frontPrint:[584.8421912005567,1020.4420141986036,754.920931358037,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,1028.9459512064777,746.416994350163,1182.0168173482098],back:[593.9993896484375,1023.1682739257812,746.7874145507812,1175.956298828125],typeIndex:21,label:"스파클 21",thumbnail:new URL(""+new URL("badge-64-9ht6MIZ6.webp",import.meta.url).href,import.meta.url).href},{id:"badge-65",sourcePosition:65,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:7,column:5,frontPrint:[752.1222204974317,1020.4420141986036,922.200960654912,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,1028.9459512064777,913.697023647038,1182.0168173482098],back:[761.24365234375,1023.1682739257812,914.0316162109375,1175.956298828125],typeIndex:22,label:"스파클 22",thumbnail:new URL(""+new URL("badge-65-DdkxeC42.webp",import.meta.url).href,import.meta.url).href},{id:"badge-74",sourcePosition:74,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:8,column:4,frontPrint:[584.8421912005567,1184.842038612666,754.920931358037,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,1193.3459756205402,746.416994350163,1346.4168417622723],back:[593.9993896484375,1187.57763671875,746.7874145507812,1340.36572265625],typeIndex:23,label:"스파클 23",thumbnail:new URL(""+new URL("badge-74-PcRnXs2E.webp",import.meta.url).href,import.meta.url).href},{id:"badge-75",sourcePosition:75,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:8,column:5,frontPrint:[752.1222204974317,1184.842038612666,922.200960654912,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,1193.3459756205402,913.697023647038,1346.4168417622723],back:[761.24365234375,1187.57763671875,914.0316162109375,1340.36572265625],typeIndex:24,label:"스파클 24",thumbnail:new URL(""+new URL("badge-75-Cu6sRJZU.webp",import.meta.url).href,import.meta.url).href},{id:"badge-01",sourcePosition:1,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:1,column:1,frontPrint:[83.60220859557624,34.04199741393562,253.68094875305655,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,42.54593442180963,245.17701174518254,195.61680056354191],back:[92.26741027832031,36.71195983886719,245.05540466308594,189.4999542236328],typeIndex:1,label:"샤이닝 01",thumbnail:new URL(""+new URL("badge-01-z9KiWMp0.webp",import.meta.url).href,import.meta.url).href},{id:"badge-02",sourcePosition:2,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:1,column:2,frontPrint:[250.88221500426766,34.04199741393562,420.96095516174796,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,42.54593442180963,412.45701815387395,195.61680056354191],back:[259.51129150390625,36.71195983886719,412.2992858886719,189.4999542236328],typeIndex:2,label:"샤이닝 02",thumbnail:new URL(""+new URL("badge-02-DHBRGsSq.webp",import.meta.url).href,import.meta.url).href},{id:"badge-06",sourcePosition:6,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:1,column:6,frontPrint:[919.7811255267286,34.82433841735359,1089.859865684209,204.9030785748339],bleedMM:3,finishedDiameterMM:54,front:[928.2850625346026,43.3282754252276,1081.3559286763348,196.39914156695988],back:[928.487548828125,36.71195983886719,1081.2755126953125,189.4999542236328],typeIndex:3,label:"샤이닝 03",thumbnail:new URL(""+new URL("badge-06-C_JSAFg0.webp",import.meta.url).href,import.meta.url).href},{id:"badge-11",sourcePosition:11,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:2,column:1,frontPrint:[83.60220859557624,198.44202182799813,253.68094875305655,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,206.94595883587215,245.17701174518254,360.0168249776044],back:[92.26741027832031,201.1211395263672,245.05540466308594,353.90911865234375],typeIndex:4,label:"샤이닝 04",thumbnail:new URL(""+new URL("badge-11-DHLpc7QZ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-12",sourcePosition:12,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:2,column:2,frontPrint:[250.88221500426766,198.44202182799813,420.96095516174796,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,206.94595883587215,412.45701815387395,360.0168249776044],back:[259.51129150390625,201.1211395263672,412.2992858886719,353.90911865234375],typeIndex:5,label:"샤이닝 05",thumbnail:new URL(""+new URL("badge-12-DCfR1xAr.webp",import.meta.url).href,import.meta.url).href},{id:"badge-16",sourcePosition:16,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:2,column:6,frontPrint:[919.7803625872755,198.7830786517286,1089.8591027447558,368.8618188092089],bleedMM:3,finishedDiameterMM:54,front:[928.2842995951495,207.28701565960262,1081.3551657368816,360.3578818013349],back:[928.487548828125,201.1211395263672,1081.2755126953125,353.90911865234375],typeIndex:6,label:"샤이닝 06",thumbnail:new URL(""+new URL("badge-16-CTzAvAez.webp",import.meta.url).href,import.meta.url).href},{id:"badge-21",sourcePosition:21,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:1,frontPrint:[83.60220859557624,362.8420386126661,253.68094875305655,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,371.3459756205401,245.17701174518254,524.4168417622724],back:[92.26741027832031,365.53057861328125,245.05540466308594,518.3185424804688],typeIndex:7,label:"샤이닝 07",thumbnail:new URL(""+new URL("badge-21-NIdd2ZW2.webp",import.meta.url).href,import.meta.url).href},{id:"badge-22",sourcePosition:22,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:2,frontPrint:[250.88221500426766,362.8420386126661,420.96095516174796,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,371.3459756205401,412.45701815387395,524.4168417622724],back:[259.51129150390625,365.53057861328125,412.2992858886719,518.3185424804688],typeIndex:8,label:"샤이닝 08",thumbnail:new URL(""+new URL("badge-22-BVzALAYL.webp",import.meta.url).href,import.meta.url).href},{id:"badge-23",sourcePosition:23,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:3,frontPrint:[418.042203407588,362.8420386126661,588.1209435650683,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,371.3459756205401,579.6170065571943,524.4168417622724],back:[426.7555236816406,365.53057861328125,579.5435180664062,518.3185424804688],typeIndex:9,label:"샤이닝 09",thumbnail:new URL(""+new URL("badge-23-3N0N0K4-.webp",import.meta.url).href,import.meta.url).href},{id:"badge-26",sourcePosition:26,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:6,frontPrint:[919.7803015521192,363.05091617614266,1089.8590417095995,533.129656333623],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,371.5548531840167,1081.3551047017254,524.625719325749],back:[928.487548828125,365.53057861328125,1081.2755126953125,518.3185424804688],typeIndex:10,label:"샤이닝 10",thumbnail:new URL(""+new URL("badge-26-BBKF5945.webp",import.meta.url).href,import.meta.url).href},{id:"badge-31",sourcePosition:31,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:1,frontPrint:[83.60220859557624,527.2420630267286,253.68094875305655,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,535.7460000346026,245.17701174518254,688.8168661763349],back:[92.26741027832031,529.9398803710938,245.05540466308594,682.7278442382812],typeIndex:11,label:"샤이닝 11",thumbnail:new URL(""+new URL("badge-31-CtwaKdwO.webp",import.meta.url).href,import.meta.url).href},{id:"badge-32",sourcePosition:32,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:2,frontPrint:[250.88221500426766,527.2420630267286,420.96095516174796,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,535.7460000346026,412.45701815387395,688.8168661763349],back:[259.51129150390625,529.9398803710938,412.2992858886719,682.7278442382812],typeIndex:12,label:"샤이닝 12",thumbnail:new URL(""+new URL("badge-32-DoB35F9k.webp",import.meta.url).href,import.meta.url).href},{id:"badge-33",sourcePosition:33,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:3,frontPrint:[418.042203407588,527.2420630267286,588.1209435650683,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,535.7460000346026,579.6170065571943,688.8168661763349],back:[426.7555236816406,529.9398803710938,579.5435180664062,682.7278442382812],typeIndex:13,label:"샤이닝 13",thumbnail:new URL(""+new URL("badge-33-C_vBQs8e.webp",import.meta.url).href,import.meta.url).href},{id:"badge-36",sourcePosition:36,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:6,frontPrint:[919.7803015521192,527.3186011126661,1089.8590417095995,697.3973412701464],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,535.8225381205401,1081.3551047017254,688.8934042622724],back:[928.487548828125,529.9398803710938,1081.2755126953125,682.7278442382812],typeIndex:14,label:"샤이닝 14",thumbnail:new URL(""+new URL("badge-36-BU5XfqNk.webp",import.meta.url).href,import.meta.url).href},{id:"badge-41",sourcePosition:41,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:1,frontPrint:[83.60220859557624,691.6420264056349,253.68094875305655,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,700.1459634135089,245.17701174518254,853.2168295552411],back:[92.26741027832031,694.3494873046875,245.05540466308594,847.137451171875],typeIndex:15,label:"샤이닝 15",thumbnail:new URL(""+new URL("badge-41-sv0NYG45.webp",import.meta.url).href,import.meta.url).href},{id:"badge-42",sourcePosition:42,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:2,frontPrint:[250.88221500426766,691.6420264056349,420.96095516174796,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,700.1459634135089,412.45701815387395,853.2168295552411],back:[259.51129150390625,694.3494873046875,412.2992858886719,847.137451171875],typeIndex:16,label:"샤이닝 16",thumbnail:new URL(""+new URL("badge-42-eAkGDu0d.webp",import.meta.url).href,import.meta.url).href},{id:"badge-43",sourcePosition:43,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:3,frontPrint:[418.0421881487989,691.6420264056349,588.1209283062792,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[426.54612515667293,700.1459634135089,579.6169912984052,853.2168295552411],back:[426.7555236816406,694.3494873046875,579.5435180664062,847.137451171875],typeIndex:17,label:"샤이닝 17",thumbnail:new URL(""+new URL("badge-43-B-R7zh4F.webp",import.meta.url).href,import.meta.url).href},{id:"badge-46",sourcePosition:46,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:6,frontPrint:[919.7803015521192,691.5863013079786,1089.8590417095995,861.6650414654589],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,700.0902383158526,1081.3551047017254,853.1611044575849],back:[928.487548828125,694.3494873046875,1081.2755126953125,847.137451171875],typeIndex:18,label:"샤이닝 18",thumbnail:new URL(""+new URL("badge-46-BqF9wPY3.webp",import.meta.url).href,import.meta.url).href},{id:"badge-52",sourcePosition:52,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:6,column:2,frontPrint:[250.88221500426766,856.0420508196974,420.96095516174796,1026.1207909771776],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,864.5459878275714,412.45701815387395,1017.6168539693036],back:[259.51129150390625,858.7587890625,412.2992858886719,1011.5467529296875],typeIndex:19,label:"샤이닝 19",thumbnail:new URL(""+new URL("badge-52-CGMpcjvJ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-56",sourcePosition:56,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:6,column:6,frontPrint:[919.7803015521192,856.7039770892286,1089.8590417095995,1026.782717246709],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,865.2079140971026,1081.3551047017254,1018.2787802388349],back:[928.487548828125,858.7587890625,1081.2755126953125,1011.5467529296875],typeIndex:20,label:"샤이닝 20",thumbnail:new URL(""+new URL("badge-56-Cvemc1GB.webp",import.meta.url).href,import.meta.url).href},{id:"badge-62",sourcePosition:62,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:7,column:2,frontPrint:[250.88221500426766,1020.4420141986036,420.96095516174796,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,1028.9459512064777,412.45701815387395,1182.0168173482098],back:[259.51129150390625,1023.1682739257812,412.2992858886719,1175.956298828125],typeIndex:21,label:"샤이닝 21",thumbnail:new URL(""+new URL("badge-62-DBFLMbtl.webp",import.meta.url).href,import.meta.url).href},{id:"badge-63",sourcePosition:63,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:7,column:3,frontPrint:[418.042203407588,1020.4420141986036,588.1209435650683,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,1028.9459512064777,579.6170065571943,1182.0168173482098],back:[426.7555236816406,1023.1682739257812,579.5435180664062,1175.956298828125],typeIndex:22,label:"샤이닝 22",thumbnail:new URL(""+new URL("badge-63-CuC8TDLf.webp",import.meta.url).href,import.meta.url).href},{id:"badge-72",sourcePosition:72,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:8,column:2,frontPrint:[250.88221500426766,1184.842038612666,420.96095516174796,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,1193.3459756205402,412.45701815387395,1346.4168417622723],back:[259.51129150390625,1187.57763671875,412.2992858886719,1340.36572265625],typeIndex:23,label:"샤이닝 23",thumbnail:new URL(""+new URL("badge-72-pm8cvWoA.webp",import.meta.url).href,import.meta.url).href},{id:"badge-73",sourcePosition:73,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:8,column:3,frontPrint:[418.042203407588,1184.842038612666,588.1209435650683,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,1193.3459756205402,579.6170065571943,1346.4168417622723],back:[426.7555236816406,1187.57763671875,579.5435180664062,1340.36572265625],typeIndex:24,label:"샤이닝 24",thumbnail:new URL(""+new URL("badge-73-BHFfZ8n8.webp",import.meta.url).href,import.meta.url).href}],jl=["badge-48","badge-07","badge-06"],Eo=new Map;function Hs(i,e=0){const t=`${i}:${e}`;return Eo.has(t)||Eo.set(t,(async()=>{const n=Tr[i]?.pages[e];if(!n)throw new Error("벡터 페이지가 없습니다.");const r=await fetch(n.url);if(!r.ok)throw new Error("벡터 자료를 불러오지 못했습니다.");const o=await r.arrayBuffer(),s=new Uint8Array(o,0,Math.min(2,o.byteLength)),a=s[0]===31&&s[1]===139?await new Response(new Blob([o]).stream().pipeThrough(new DecompressionStream("gzip"))).text():new TextDecoder().decode(o);if(!a.includes("<svg"))throw new Error("벡터 자료 형식이 올바르지 않습니다.");const c=new Blob([a],{type:"image/svg+xml"}),l=URL.createObjectURL(c);return{...n,text:a,url:l}})()),Eo.get(t)}async function x0(i,e,t=2048){const n=await Hs("B001",i==="front"?0:1),[r,o,s,a]=e;return(i==="back"?n.text.replace(/<path\b(?=[^>]*\bstroke="#ec148d")[^>]*\/>/g,""):n.text).replace(/<svg\b[^>]*>/,l=>l.replace(/\bwidth="[^"]*"/,`width="${t}"`).replace(/\bheight="[^"]*"/,`height="${t}"`).replace(/\bviewBox="[^"]*"/,`viewBox="${r} ${o} ${s-r} ${a-o}"`))}async function w0(i,e,t){const n=await x0(i,e,t),r=URL.createObjectURL(new Blob([n],{type:"image/svg+xml"}));try{const o=new Image;o.src=r,await o.decode();const s=document.createElement("canvas");s.width=s.height=t;const a=s.getContext("2d");return a.fillStyle="#fff",a.fillRect(0,0,t,t),a.drawImage(o,0,0,t,t),s}finally{URL.revokeObjectURL(r)}}const Ws={"badge-08":{1024:new URL(""+new URL("badge-08-front-1024-KpIUse9J.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-08-front-2048-B0ueNsAL.webp",import.meta.url).href,import.meta.url).href},"badge-09":{1024:new URL(""+new URL("badge-09-front-1024-BHzfL91Z.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-09-front-2048-BJEhTulG.webp",import.meta.url).href,import.meta.url).href},"badge-10":{1024:new URL(""+new URL("badge-10-front-1024-BW2trwVb.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-10-front-2048-Bc9u0csb.webp",import.meta.url).href,import.meta.url).href},"badge-18":{1024:new URL(""+new URL("badge-18-front-1024-CNW1vMsR.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-18-front-2048-CPbCMWiK.webp",import.meta.url).href,import.meta.url).href},"badge-19":{1024:new URL(""+new URL("badge-19-front-1024-BM_nQUe5.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-19-front-2048-BW8tpg_f.webp",import.meta.url).href,import.meta.url).href},"badge-20":{1024:new URL(""+new URL("badge-20-front-1024-p4kpyLL2.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-20-front-2048-bJ8sH0PZ.webp",import.meta.url).href,import.meta.url).href},"badge-28":{1024:new URL(""+new URL("badge-28-front-1024-DkkmqjkY.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-28-front-2048-DmYpVocG.webp",import.meta.url).href,import.meta.url).href},"badge-29":{1024:new URL(""+new URL("badge-29-front-1024-Du9vDwEk.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-29-front-2048-CoCzp3Rw.webp",import.meta.url).href,import.meta.url).href},"badge-30":{1024:new URL(""+new URL("badge-30-front-1024-B033RabT.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-30-front-2048-Bb5kSoGT.webp",import.meta.url).href,import.meta.url).href},"badge-38":{1024:new URL(""+new URL("badge-38-front-1024-DpVDNxCa.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-38-front-2048-Cd93ntsk.webp",import.meta.url).href,import.meta.url).href},"badge-39":{1024:new URL(""+new URL("badge-39-front-1024-B3wORdZZ.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-39-front-2048-bWtL5qRz.webp",import.meta.url).href,import.meta.url).href},"badge-40":{1024:new URL(""+new URL("badge-40-front-1024-BxS5sSER.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-40-front-2048-3vLTiwEC.webp",import.meta.url).href,import.meta.url).href},"badge-48":{1024:new URL(""+new URL("badge-48-front-1024-CJNlKfFY.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-48-front-2048-CgWRTIXa.webp",import.meta.url).href,import.meta.url).href},"badge-49":{1024:new URL(""+new URL("badge-49-front-1024-BpjpHbjD.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-49-front-2048-8b4N_RWO.webp",import.meta.url).href,import.meta.url).href},"badge-50":{1024:new URL(""+new URL("badge-50-front-1024-Cg9Y0Qrk.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-50-front-2048-dIzGrzgI.webp",import.meta.url).href,import.meta.url).href},"badge-58":{1024:new URL(""+new URL("badge-58-front-1024-CBNmS-xF.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-58-front-2048-fbuHwG8l.webp",import.meta.url).href,import.meta.url).href},"badge-59":{1024:new URL(""+new URL("badge-59-front-1024-DBMP3pN4.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-59-front-2048-BnJgSwbV.webp",import.meta.url).href,import.meta.url).href},"badge-60":{1024:new URL(""+new URL("badge-60-front-1024-DAu6kIVx.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-60-front-2048-DAm0m-yL.webp",import.meta.url).href,import.meta.url).href},"badge-68":{1024:new URL(""+new URL("badge-68-front-1024-Zay7iu5d.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-68-front-2048-7qg0CPLU.webp",import.meta.url).href,import.meta.url).href},"badge-69":{1024:new URL(""+new URL("badge-69-front-1024-B24upS42.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-69-front-2048-BhxVU_Jf.webp",import.meta.url).href,import.meta.url).href},"badge-70":{1024:new URL(""+new URL("badge-70-front-1024-BY3fLouq.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-70-front-2048-DiIJa36L.webp",import.meta.url).href,import.meta.url).href},"badge-78":{1024:new URL(""+new URL("badge-78-front-1024-DAVDWsnG.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-78-front-2048-BXfHiCla.webp",import.meta.url).href,import.meta.url).href},"badge-79":{1024:new URL(""+new URL("badge-79-front-1024-BGN3Ufjd.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-79-front-2048-k2eWYaPB.webp",import.meta.url).href,import.meta.url).href},"badge-80":{1024:new URL(""+new URL("badge-80-front-1024-hXkNobvI.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-80-front-2048-DWpcVu6X.webp",import.meta.url).href,import.meta.url).href},"badge-03":{1024:new URL(""+new URL("badge-03-front-1024-C4mgMaOK.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-03-front-2048-Cnu47AWC.webp",import.meta.url).href,import.meta.url).href},"badge-04":{1024:new URL(""+new URL("badge-04-front-1024-CnbsV_Du.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-04-front-2048-qQUdF-RN.webp",import.meta.url).href,import.meta.url).href},"badge-05":{1024:new URL(""+new URL("badge-05-front-1024-BK1JMTGK.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-05-front-2048-Cn29ylag.webp",import.meta.url).href,import.meta.url).href},"badge-07":{1024:new URL(""+new URL("badge-07-front-1024-DhU6U8TK.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-07-front-2048-sQI9D8t7.webp",import.meta.url).href,import.meta.url).href},"badge-13":{1024:new URL(""+new URL("badge-13-front-1024-DYatd-dM.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-13-front-2048-CEAQNZdd.webp",import.meta.url).href,import.meta.url).href},"badge-14":{1024:new URL(""+new URL("badge-14-front-1024-D6VfA9o9.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-14-front-2048-2xQS9duF.webp",import.meta.url).href,import.meta.url).href},"badge-15":{1024:new URL(""+new URL("badge-15-front-1024-D5OhrY35.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-15-front-2048-D0v682f_.webp",import.meta.url).href,import.meta.url).href},"badge-17":{1024:new URL(""+new URL("badge-17-front-1024-BX1G3WhZ.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-17-front-2048-CsbVNRek.webp",import.meta.url).href,import.meta.url).href},"badge-24":{1024:new URL(""+new URL("badge-24-front-1024-D-uglhuf.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-24-front-2048-BsS5Pp8E.webp",import.meta.url).href,import.meta.url).href},"badge-25":{1024:new URL(""+new URL("badge-25-front-1024-CdX7l5jG.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-25-front-2048-dTUwg1Ca.webp",import.meta.url).href,import.meta.url).href},"badge-27":{1024:new URL(""+new URL("badge-27-front-1024-BHYrAcBM.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-27-front-2048-uUtT3cPS.webp",import.meta.url).href,import.meta.url).href},"badge-34":{1024:new URL(""+new URL("badge-34-front-1024-ClMZs_kE.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-34-front-2048-DRlEwpXc.webp",import.meta.url).href,import.meta.url).href},"badge-35":{1024:new URL(""+new URL("badge-35-front-1024-UEQFWC5d.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-35-front-2048-DOaqPbYT.webp",import.meta.url).href,import.meta.url).href},"badge-37":{1024:new URL(""+new URL("badge-37-front-1024-Bq3Vf0HW.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-37-front-2048-Dj2fS0Jy.webp",import.meta.url).href,import.meta.url).href},"badge-44":{1024:new URL(""+new URL("badge-44-front-1024-BDTBzNew.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-44-front-2048-ClbV74RY.webp",import.meta.url).href,import.meta.url).href},"badge-45":{1024:new URL(""+new URL("badge-45-front-1024-DLIkZMkw.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-45-front-2048-BD75eSRJ.webp",import.meta.url).href,import.meta.url).href},"badge-47":{1024:new URL(""+new URL("badge-47-front-1024-Bi7ooV5u.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-47-front-2048-mfSTbZ_t.webp",import.meta.url).href,import.meta.url).href},"badge-54":{1024:new URL(""+new URL("badge-54-front-1024-BFqwQ0nQ.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-54-front-2048-Bgb_Lh7X.webp",import.meta.url).href,import.meta.url).href},"badge-55":{1024:new URL(""+new URL("badge-55-front-1024-eWyBVxQR.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-55-front-2048-BzmWv-oM.webp",import.meta.url).href,import.meta.url).href},"badge-57":{1024:new URL(""+new URL("badge-57-front-1024-DOzO59mb.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-57-front-2048--Kr1olAB.webp",import.meta.url).href,import.meta.url).href},"badge-64":{1024:new URL(""+new URL("badge-64-front-1024-CzY1z-KV.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-64-front-2048-hL7MgvcY.webp",import.meta.url).href,import.meta.url).href},"badge-65":{1024:new URL(""+new URL("badge-65-front-1024-DGkHGnLq.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-65-front-2048-CJxYZujb.webp",import.meta.url).href,import.meta.url).href},"badge-74":{1024:new URL(""+new URL("badge-74-front-1024-CqQphw2Z.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-74-front-2048-DkxezEtp.webp",import.meta.url).href,import.meta.url).href},"badge-75":{1024:new URL(""+new URL("badge-75-front-1024-bg76x8Pv.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-75-front-2048-DtDgAsNm.webp",import.meta.url).href,import.meta.url).href},"badge-01":{1024:new URL(""+new URL("badge-01-front-1024-Rf0vA4_c.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-01-front-2048-D7pAQUWe.webp",import.meta.url).href,import.meta.url).href},"badge-02":{1024:new URL(""+new URL("badge-02-front-1024-DQYPbUOD.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-02-front-2048-CCe2Bvw_.webp",import.meta.url).href,import.meta.url).href},"badge-06":{1024:new URL(""+new URL("badge-06-front-1024-TYfGWCmx.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-06-front-2048-Ynhsiupy.webp",import.meta.url).href,import.meta.url).href},"badge-11":{1024:new URL(""+new URL("badge-11-front-1024-D1wBHL3R.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-11-front-2048-DFUhUK2m.webp",import.meta.url).href,import.meta.url).href},"badge-12":{1024:new URL(""+new URL("badge-12-front-1024-DPeQizYg.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-12-front-2048-CFQDj-gp.webp",import.meta.url).href,import.meta.url).href},"badge-16":{1024:new URL(""+new URL("badge-16-front-1024-TuYGSdar.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-16-front-2048-Ck6c--d4.webp",import.meta.url).href,import.meta.url).href},"badge-21":{1024:new URL(""+new URL("badge-21-front-1024-1kDVbj8L.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-21-front-2048-CTcxE-c7.webp",import.meta.url).href,import.meta.url).href},"badge-22":{1024:new URL(""+new URL("badge-22-front-1024-LtsIAEx-.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-22-front-2048-DoB0dXSu.webp",import.meta.url).href,import.meta.url).href},"badge-23":{1024:new URL(""+new URL("badge-23-front-1024-DIKhfgya.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-23-front-2048-Uw-z3hgS.webp",import.meta.url).href,import.meta.url).href},"badge-26":{1024:new URL(""+new URL("badge-26-front-1024-06WPoV6P.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-26-front-2048-BEEp01DV.webp",import.meta.url).href,import.meta.url).href},"badge-31":{1024:new URL(""+new URL("badge-31-front-1024-YbFn3EaT.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-31-front-2048-D7KcZ8CM.webp",import.meta.url).href,import.meta.url).href},"badge-32":{1024:new URL(""+new URL("badge-32-front-1024-BvtusoLC.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-32-front-2048-CVqKL76h.webp",import.meta.url).href,import.meta.url).href},"badge-33":{1024:new URL(""+new URL("badge-33-front-1024-LiyEuZJF.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-33-front-2048-DB5j7dic.webp",import.meta.url).href,import.meta.url).href},"badge-36":{1024:new URL(""+new URL("badge-36-front-1024-D6uKaqAG.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-36-front-2048-Cx61lgEe.webp",import.meta.url).href,import.meta.url).href},"badge-41":{1024:new URL(""+new URL("badge-41-front-1024-Y5MqdqYL.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-41-front-2048-Dz6FTSld.webp",import.meta.url).href,import.meta.url).href},"badge-42":{1024:new URL(""+new URL("badge-42-front-1024-iwDr8O6d.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-42-front-2048-BLgVr4EK.webp",import.meta.url).href,import.meta.url).href},"badge-43":{1024:new URL(""+new URL("badge-43-front-1024-Q86y2L0w.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-43-front-2048-TzFOD1RF.webp",import.meta.url).href,import.meta.url).href},"badge-46":{1024:new URL(""+new URL("badge-46-front-1024-BIHOO1Sv.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-46-front-2048-Dwt7Do6h.webp",import.meta.url).href,import.meta.url).href},"badge-52":{1024:new URL(""+new URL("badge-52-front-1024-DGX89P1y.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-52-front-2048--m84a1UG.webp",import.meta.url).href,import.meta.url).href},"badge-56":{1024:new URL(""+new URL("badge-56-front-1024-DR97FmXY.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-56-front-2048-DxbzDKqN.webp",import.meta.url).href,import.meta.url).href},"badge-62":{1024:new URL(""+new URL("badge-62-front-1024-DNVOLObF.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-62-front-2048-BoN0f0Ba.webp",import.meta.url).href,import.meta.url).href},"badge-63":{1024:new URL(""+new URL("badge-63-front-1024-B0DSIIDw.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-63-front-2048-Dg8QiKtl.webp",import.meta.url).href,import.meta.url).href},"badge-72":{1024:new URL(""+new URL("badge-72-front-1024-Z3fekoR5.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-72-front-2048-SeS3STRw.webp",import.meta.url).href,import.meta.url).href},"badge-73":{1024:new URL(""+new URL("badge-73-front-1024-ByMaSXl-.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("badge-73-front-2048-CKbiXRtk.webp",import.meta.url).href,import.meta.url).href}},vi={1024:new URL(""+new URL("common-back-1024-D9lGZeS6.webp",import.meta.url).href,import.meta.url).href,2048:new URL(""+new URL("common-back-2048-DZQ3Tiv6.webp",import.meta.url).href,import.meta.url).href,rectangle:[92.26741027832031,36.71195983886719,245.05540466308594,189.4999542236328]},Ft=new Map,M0=64*1024*1024,y0=new Set([vi[1024],vi[2048]]);function S0(){let i=0;for(const e of Ft.values())e.ready&&(i+=e.image.naturalWidth*e.image.naturalHeight*4);for(const[e,t]of Ft){if(i<=M0)break;!t.ready||y0.has(e)||(i-=t.image.naturalWidth*t.image.naturalHeight*4,Ft.delete(e))}}function Xs(i){if(Ft.has(i)){const n=Ft.get(i);return Ft.delete(i),Ft.set(i,n),n.promise}const e=new Image,t={image:e,ready:!1};return e.decoding="async",e.src=i,t.promise=e.decode().then(()=>(t.ready=!0,S0(),e)).catch(n=>{throw Ft.delete(i),n}),Ft.set(i,t),t.promise}function Ao(i,e,t=1024){const r=(e==="back"?vi:Ws[i.id])?.[t>1024?"2048":"1024"],o=Ft.get(r);return o?.ready?(Ft.delete(r),Ft.set(r,o),o.image):null}function Ql(){return Xs(vi[1024])}function qs(i){return typeof i=="string"&&(i=en.find(e=>e.id===i)),i?Promise.all([Xs(Ws[i.id][1024]),Ql()]):Promise.resolve()}function wr(i,e,t){if(t<=2048){const n=e==="back"?vi:Ws[i.id];return Xs(n[t>1024?"2048":"1024"])}return w0(e,e==="back"?vi.rectangle:i.front,t)}const rl=Math.PI/180;function R0(i,e){const t=i.querySelector(".badge-3d-stage"),n=i.querySelector(".badge-3d-status");let r,o,s,a,c,l,u=!1,d=!1,p=null,h=0,v=0,x=1,m=!1,f=0,T=0,S=0,w=0,C=!1;const R=[],E=[];let L,M,_;function U(){r=new Vs({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"}),r.setPixelRatio(Math.min(devicePixelRatio,2)),r.toneMapping=hn,r.outputColorSpace=Mt,t.append(r.domElement),o=new Ds,o.background=new Ze("#f7f7f5"),o.add(new zl("#ffffff","#d3cbd2",2));const j=new xs("#ffffff",2);j.position.set(-70,95,150),o.add(j);const Te=new xs("#ffffff",.7);Te.position.set(100,-40,80),o.add(Te),s=new zs(-64,64,32,-32,.1,1e3),a=new Ct,o.add(a),_=new Nu(new Uint8Array([255,255,255,255]),1,1),_.colorSpace=Mt,_.needsUpdate=!0;const Fe=new Fr(27,192);R.push(Fe);for(const Ue of["front","back"]){const Y=new pi({color:"#fff",toneMapped:!1,map:_});E.push(Y);const Q=new ut(Fe,Y);Q.position.z=Ue==="front"?1.005:-1.005,Ue==="back"&&(Q.rotation.y=Math.PI),a.add(Q),Ue==="front"?c=Q:l=Q}for(const[Ue,Y,Q]of[[1.6,0,"#454247"],[.2,.9,"#ede8ed"],[.2,-.9,"#ede8ed"]]){const ge=new Or(26.98,26.98,Ue,192,1,!0);ge.rotateX(Math.PI/2),R.push(ge);const be=new Bl({color:Q,roughness:.65,metalness:.05});E.push(be);const ve=new ut(ge,be);ve.position.z=Y,a.add(ve)}u=!0,s.position.z=120,r.compile(o,s),k()}function F(){if(!u||d)return;const j=t.clientWidth,Te=t.clientHeight;if(!j||!Te)return;const Fe=j/Te,Ue=Math.max(64,64/Fe);s.left=-Ue*Fe/2,s.right=Ue*Fe/2,s.top=Ue/2,s.bottom=-Ue/2,s.position.z=120,s.zoom=x,s.updateProjectionMatrix(),a.rotation.set(-h*rl,v*rl,0,"XYZ"),r.render(o,s),t.dataset.face=Math.abs((v%360+360)%360-180)<90?"back":"front",i.querySelector(".badge-zoom-value").textContent=Math.round(x*100)+"%"}function k(){r&&!d&&t.clientWidth&&t.clientHeight&&(r.setSize(t.clientWidth,t.clientHeight,!1),F(),p&&!C&&H())}function W(){const j=Math.min(t.clientWidth,t.clientHeight)*Math.min(devicePixelRatio,2)*x;return Math.min(r.capabilities.maxTextureSize,j>1500?4096:j>750?2048:1024)}function q(j){const Te=new gt(j);return Te.needsUpdate=!0,Te.colorSpace=Mt,Te.anisotropy=Math.min(8,r.capabilities.getMaxAnisotropy()),Te}function X(j,Te,Fe){j&&L?.image!==j&&(L?.dispose(),L=q(j),c.material.map=L,c.material.needsUpdate=!0,c.visible=!0),Te&&M?.image!==Te&&(M?.dispose(),M=q(Te),l.material.map=M,l.material.needsUpdate=!0,l.visible=!0),w=Fe,t.dataset.state="ready",t.dataset.textureSize=String(Fe),t.removeAttribute("aria-busy"),F()}async function ie(j,Te=!1,Fe=null){const Ue=en.find(Q=>Q.id===j);if(!Ue)return;const Y=++S;p=Ue,Te&&(h=0,v=0,x=1),w=0,C=!0,i.dataset.badge=j,i.querySelector(".badge-selected-title").textContent=`${Ue.label} · ${Ue.typeDescription}`,e?.(Ue);try{u||U(),r.setSize(t.clientWidth,t.clientHeight,!1);const Q=Ao(Ue,"front",2048)||Ao(Ue,"front")||(Fe?.complete&&Fe.naturalWidth?Fe:null),ge=Ao(Ue,"back");c.visible=!!Q,l.visible=!0,ge||(M?.dispose(),M=null,l.material.map=_,l.material.needsUpdate=!0),Q?(X(Q,ge,Q.naturalWidth||Q.width),n.textContent="드래그 회전 · 휠 확대/축소 · 앞면/뒷면 선택"):(t.dataset.state="loading",t.setAttribute("aria-busy","true"),n.textContent="인쇄면을 준비하는 중",F());const be=Math.max(W(),w),[ve,ze]=await Promise.all([wr(Ue,"front",be),wr(Ue,"back",be)]);if(d||Y!==S)return;C=!1,X(ve,ze,be),n.textContent="드래그 회전 · 휠 확대/축소 · 앞면/뒷면 선택",H()}catch(Q){if(Y!==S||d)return;C=!1,t.removeAttribute("aria-busy"),w||(t.dataset.state="error"),n.textContent="배지 화면을 불러오지 못했습니다. 다시 선택해주세요.",console.error(Q)}}async function H(){if(!u||!p||C)return;const j=W();if(j<=w)return;const Te=p.id,Fe=++S,Ue=p;C=!0;try{const[Y,Q]=await Promise.all([wr(Ue,"front",j),wr(Ue,"back",j)]);if(d||Fe!==S||p.id!==Te)return;C=!1,X(Y,Q,j),n.textContent="드래그 회전 · 휠 확대/축소 · 앞면/뒷면 선택",H()}catch(Y){Fe===S&&!d&&(C=!1,n.textContent="현재 인쇄면으로 표시 중입니다. 다시 확대하면 재시도합니다.",console.error(Y))}}function ce(j){x=Math.max(.7,Math.min(2.8,j)),F(),H()}t.addEventListener("wheel",j=>{if(!u)return;j.preventDefault();const Te=j.deltaY*(j.deltaMode===1?16:j.deltaMode===2?t.clientHeight:1);ce(x*Math.exp(-Math.max(-200,Math.min(200,Te))*.0015))},{passive:!1}),t.onpointerdown=j=>{u&&(m=!0,f=j.clientX,T=j.clientY,t.setPointerCapture(j.pointerId),t.classList.add("dragging"))},t.onpointermove=j=>{m&&(v+=(j.clientX-f)*.5,h=Math.max(-90,Math.min(90,h-(j.clientY-T)*.4)),f=j.clientX,T=j.clientY,F())},t.onpointerup=t.onpointercancel=()=>{m=!1,t.classList.remove("dragging")},t.onkeydown=j=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(j.key)&&(j.preventDefault(),j.stopPropagation(),j.key==="ArrowLeft"&&(v-=10),j.key==="ArrowRight"&&(v+=10),j.key==="ArrowUp"&&(h=Math.max(-90,h-10)),j.key==="ArrowDown"&&(h=Math.min(90,h+10)),F())},i.querySelectorAll("[data-badge-view]").forEach(j=>j.onclick=()=>{const Te=j.dataset.badgeView;Te==="front"&&(h=0,v=0),Te==="back"&&(h=0,v=180),Te==="edge"&&(h=-10,v=82),Te==="reset"&&(h=0,v=0,x=1),F()}),i.querySelector('[data-badge-zoom="in"]').onclick=()=>ce(x*1.25),i.querySelector('[data-badge-zoom="out"]').onclick=()=>ce(x/1.25);const me=new ResizeObserver(k);me.observe(t);const xe={prepare(){!u&&!d&&U()},select:ie,getState(){return{badge:p?.id,rx:h,ry:v,zoom:x,resolution:w,loading:C}},destroy(){d=!0,S++,me.disconnect(),L?.dispose(),M?.dispose(),_?.dispose(),R.forEach(j=>j.dispose()),E.forEach(j=>j.dispose()),r?.dispose(),r?.forceContextLoss(),t.replaceChildren()}};return i.badgeViewer=xe,xe}const Ys=[..._0,...b0],E0=new Map(Hi.map(i=>[i.id,i])),Ht=i=>E0.get(i),pn=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Nn=(i,e,t="",n="")=>`<div class="section-heading"><span class="section-number">${i}</span><div>${n?`<p class="eyebrow">${n}</p>`:""}<h2>${e}</h2>${t?`<p class="section-description">${t}</p>`:""}</div></div>`;function yn(i,{caption:e=!0,cls:t="",eager:n=!1}={}){const r=Ht(i);return`<figure class="work-image ${t}" data-asset="${i}"><button class="image-button" data-open-asset="${i}" aria-label="${pn(r.title)} 크게 보기"><img src="${r.preview||r.src}" alt="${pn(r.title)}" ${n?'fetchpriority="high"':'loading="lazy"'} decoding="async" width="${r.width||1e3}" height="${r.height||1e3}"/>${r.credit?'<span class="ai-tag">AI 연출</span>':""}<span class="image-expand" aria-hidden="true">↗</span></button>${e?`<figcaption>${pn(r.title)}${r.credit?"<span>ChatGPT 생성 · Photoshop 후보정</span>":""}</figcaption>`:""}</figure>`}const oi=(i,e="")=>`<div class="image-grid ${e}">${i.map(t=>yn(t)).join("")}</div>`,A0=[{id:"single",num:"03",name:"싱글팩",tag:"기본 구성",description:"랜덤 배지 3개와 크리스탈 케이스 1개를 하나의 패키지에 담았습니다.",detail:"하츄핑·다이아나핑·이클립스핑의 캐릭터와 색상을 구분하고, 로고와 제품 정보의 위치는 공통된 틀로 연결했습니다.",contents:[["배지","3개"],["크리스탈 케이스","1개"]],hero:"A017",images:["A024","A022","A023"],captions:"캐릭터별 구성품",types:!0},{id:"full",num:"04",name:"풀박스",tag:"3종 한 박스",description:"싱글팩 3종을 한 번에 만나는 구성. 배지 9개와 케이스 3개를 담았습니다.",detail:"작은 팩의 디자인을 확장해 외부에서도 수집 구성과 제품 라인업이 보이도록 정리했습니다.",contents:[["싱글팩","3개"],["배지 / 케이스","9개 / 3개"]],hero:"A082",images:["A083","A084"],captions:"제품 구성과 대표 비주얼"},{id:"limited",num:"05",name:"리미티드 에디션",tag:"5팩 구성",description:"배지 15개와 케이스 5개를 담은 리미티드 구성입니다.",detail:"다이아나핑과 이클립스핑의 컬러를 중심으로, 넓어진 패키지 면에서도 캐릭터와 수집 요소가 함께 읽히도록 구성했습니다.",contents:[["싱글팩","5개"],["배지 / 케이스","15개 / 5개"]],hero:"A005",images:["A009","A008"],captions:"리미티드 2종과 대표 비주얼",types:!0},{id:"daiso",num:"06",name:"다이소 딱지",tag:"유통 채널 확장",description:"원형 자석 배지와 캐릭터 자석, 총 12개를 함께 보여주는 진열 팩입니다.",detail:"박스에서 꺼내는 경험과 달리, 매대에서 구성과 타입을 바로 볼 수 있는 전면 그래픽으로 전개했습니다.",contents:[["구성","원형 배지 + 캐릭터 자석"],["타입","골드 · 샤이닝 · 스파클"]],hero:"A039",images:[],types:!0,flat:!0},{id:"display",num:"07",name:"딱지 파우치 디스플레이 박스",tag:"매대 진열",description:"개별 파우치 20개를 모아 담는 진열용 박스입니다.",detail:"운송·보관 시 닫힌 형태와, 상단 절취 후 제품을 꺼낼 수 있는 진열 형태를 같은 전개도에서 살펴볼 수 있습니다.",contents:[["딱지 파우치","20개"],["캐릭터","하츄핑 · 다이아나핑 · 이클립스핑"]],hero:"A045",images:[],types:!0,display:!0},{id:"pouch",num:"08",name:"딱지 파우치",tag:"개별 포장",description:"배지 3개를 담는 120 × 130mm 개별 포장입니다.",detail:"앞면에는 캐릭터와 제품 분위기를, 뒷면에는 구성·주의사항·제품 정보를 배치했습니다. 상하 실링과 걸이 구멍까지 함께 확인할 수 있습니다.",contents:[["배지","3개"],["상하 실링","각 15mm"]],hero:"A042",images:[],types:!0,flat:!0}],T0={"single-pink":"A015","single-lavender":"A010","single-purple":"A011","limited-blue":"A007","limited-purple":"A006","daiso-1":"A039","daiso-2":"A040","daiso-3":"A041","display-1":"A045","display-2":"A046","display-3":"A047","pouch-1":"A042","pouch-2":"A043","pouch-3":"A044"};function L0(i){const e=Ys.filter(t=>t.group===i.id);return`<section class="section package-section" id="${i.id}">${Nn(i.num,i.name,"",i.tag)}<div class="package-layout"><div class="product-overview"><div class="product-visual" data-product-visual>${yn(i.hero,{cls:i.display?"dieline-hero":""})}</div><div class="product-copy"><p class="lead">${i.description}</p><p>${i.detail}</p><dl class="contents-list">${i.contents.map(([t,n])=>`<div><dt>${t}</dt><dd>${n}</dd></div>`).join("")}</dl><p class="small-note">담당: 패키지 그래픽 · 제품 정보 구성 · OEM 제작 소통</p></div></div><div class="package-interaction"><div class="interaction-heading"><h3>${i.flat?"평면 그래픽에서 입체 목업으로":"전개도에서 입체 패키지로"}</h3><p>${i.display?"접은 뒤 ‘진열형으로 보기’를 눌러 상단을 분리해보세요.":"드래그로 회전하고, 마우스 휠로 확대해보세요."}</p></div>${e.length>1?`<div class="design-selector" role="group" aria-label="${i.name} 디자인 선택">${e.map((t,n)=>`<button type="button" data-design="${t.id}" aria-pressed="${n===0}" aria-controls="${i.id}-viewer">${t.label}</button>`).join("")}</div>`:""}<div id="${i.id}-viewer" class="package-viewer-mount" data-package="${i.id}" data-model="${e[0].id}"></div></div></div>${i.images.length?`<details class="work-details"><summary>${i.captions}<span>${i.images.length}개 이미지 +</span></summary>${oi(i.images)}</details>`:""}</section>`}const Zs={product:"제품 이미지",packaging:"패키지·전개도",badge:"배지 제작 시트",usage:"AI 연출 이미지",digital:"상세페이지·SNS",promotion:"광고·프로모션",production:"제작·사양",brand:"브랜드 가이드"},U0=Hi.map(i=>`<article class="archive-card" data-library-group="${i.group}" data-library-title="${pn(i.title+" "+i.source)}">${i.src?yn(i.id,{caption:!1}):`<button class="document-button" data-open-asset="${i.id}"><span>SPECIFICATION</span><strong>제품 사양</strong><span>원본 기록 읽기 ↗</span></button>`}<h4>${pn(i.title)}</h4><p>${pn(Zs[i.group])}${i.credit?" · AI 연출":""}</p></article>`).join("");document.querySelector("#app").innerHTML=`
<main id="main">${_c(Ht,yn)}
<div class="scope-strip"><div><strong>6</strong><span>패키지 유형</span></div><div><strong>15</strong><span>패키지 디자인</span></div><div><strong>72</strong><span>배지 라인업</span></div><p>DESIGN & PRODUCTION / 전유빈<br/>선행 기획: 대표·실장 · 원작 IP: SAMG Entertainment</p></div>
<section class="section" id="badges">${Nn("02","작은 배지에서 시작한<br/>수집의 경험.","골드·스파클·샤이닝의 3가지 타입, 제품 표기 기준 각 24종의 라인업입니다.","BADGE DESIGN")}<div class="badge-samples" aria-label="타입별 대표 배지 3D 보기">${jl.map(i=>en.find(e=>e.id===i)).map(i=>`<button class="badge-sample-button" data-badge-id="${i.id}" aria-label="하츄핑 ${i.typeLabel} 3D로 크게 보기"><img src="${i.thumbnail}" alt="하츄핑 ${i.typeLabel} 앞면" loading="lazy" width="384" height="384"/><span>하츄핑 · ${i.typeLabel} · 3D로 보기 ↗</span></button>`).join("")}</div><p class="badge-intro-copy">같은 타입 안의 반복 캐릭터를 정리해 총 72종으로 모았습니다. 인쇄 여분을 제외한 배지를 누르면 완성선 기준의 앞뒤를 3D로 볼 수 있습니다.</p><div class="badge-catalog-heading"><h3>타입별 배지 컬렉션</h3><p>골드 24종 · 스파클 24종 · 샤이닝 24종</p></div><div class="badge-type-controls segmented" role="group" aria-label="배지 타입 선택">${Ms.map((i,e)=>`<button data-badge-type="${i.id}" aria-pressed="${e===0}" aria-controls="badge-catalog">${i.label} <span>24</span></button>`).join("")}</div><p class="badge-type-description" id="badge-type-description">${Ms[0].description}</p><div class="badge-catalog" id="badge-catalog" aria-label="골드 배지 24종">${en.map(i=>`<button class="badge-catalog-item" data-badge-id="${i.id}" data-badge-type-item="${i.type}" ${i.type!=="gold"?"hidden":""} aria-label="${i.label}, 3D 목업 열기"><img src="${i.thumbnail}" alt="${i.label} 앞면" loading="lazy" width="384" height="384"/><span>${i.label} <span aria-hidden="true">↗</span></span></button>`).join("")}</div><details class="work-details badge-source-details" id="badge-source-details"><summary>제작 원본 PDF · 앞면과 공통 뒷면<span>인쇄용 원본 보기 +</span></summary><div class="segmented" role="group" aria-label="배지 제작 시트 면 선택"><button data-badge-side="0" aria-pressed="true">앞면 제작 시트</button><button data-badge-side="1" aria-pressed="false">공통 뒷면 시트</button></div><figure class="work-image badge-sheet"><button class="image-button" data-open-asset="B001" aria-label="원본 벡터 배지 제작 시트 확대"><img id="badge-sheet-image" src="${Ht("B001").pages[0]}" alt="배지 제작 시트 앞면" loading="lazy"/><span class="image-expand" aria-hidden="true">↗</span></button><figcaption id="badge-sheet-caption">제공 PDF · 앞면 제작 시트 · 원본 벡터 불러오는 중</figcaption></figure><p class="small-note">제작 원본은 반복과 인쇄 여분을 포함한 그대로 보존했습니다. 위 컬렉션과 3D 목업은 중복을 정리하고 완성선 기준으로 표시합니다.</p></details></section>
<div class="section-divider"><span>PACKAGE DESIGN</span><p>하나의 제품을, 여러 구성과 판매 방식으로.</p></div>
${A0.map(L0).join("")}
<section class="section" id="experience">${Nn("09","꺼낸 뒤의 경험까지.","배지를 보호하고, 색상을 고르고, 생활 공간에 전시하는 구성입니다.","CRYSTAL CASE & PLAY")}${oi(["A079","A078","A080"],"three-col")}<div class="experience-notes"><article><span>KEEP</span><h3>안전하게 보관하기</h3><p>투명 케이스 안에 배지를 넣고, 수집한 캐릭터를 꺼내볼 수 있는 구성.</p></article><article><span>DISPLAY</span><h3>내 공간에 전시하기</h3><p>핑크·블루·퍼플 케이스로 패키지 밖에서도 이어지는 제품의 분위기.</p></article><article><span>PLAY</span><h3>자석으로 놀이하기</h3><p>보드나 자석이 붙는 공간에서 배지를 옮기며 즐기는 활용.</p></article></div>${oi(["A062","A064","A065"],"three-col")}<p class="ai-disclosure">위 케이스 및 활용 이미지는 ChatGPT 이미지 생성 후 Adobe Photoshop으로 후보정한 AI 연출 이미지입니다.</p></section>
<section class="section" id="usage">${Nn("10","사용하는 장면을 설계하다.","제품의 보관·전시·놀이를 생활 속 장면으로 보여주는 이미지 작업입니다.","AI IMAGE DIRECTION")}<div class="ai-credit"><strong>ChatGPT 이미지 생성 × Adobe Photoshop 후보정</strong><p>후기·사용 장면은 100% ChatGPT 이미지 생성 기능으로 제작하고 Photoshop으로 후보정했습니다. 실제 고객 후기나 실촬영 사진이 아닌, 제품 사용과 후기 상황을 연출한 콘셉트 이미지입니다.</p></div>${oi(["A061","A069","A071","A073","A076","A030"],"usage-gallery")}<details class="work-details"><summary>다른 공간과 사용 장면<span>추가 연출 이미지 +</span></summary>${oi(["A057","A058","A059","A060","A063","A066","A067","A068","A070","A072","A074","A075","A077"],"three-col")}</details><div class="method-strip"><div><span>01 / 장면 설정</span><p>보관·전시·놀이의 맥락</p></div><div><span>02 / 이미지 생성</span><p>ChatGPT로 상황 시각화</p></div><div><span>03 / 후보정</span><p>Photoshop으로 최종 이미지 정리</p></div></div></section>
<section class="section" id="digital">${Nn("11","제품을 이해하고,<br/>관심을 이어가는 콘텐츠.","상세페이지, 인스타그램 카드뉴스, 프로모션으로 제품의 구성과 활용을 전달했습니다.","DIGITAL COMMUNICATION")}<article class="digital-row"><div class="digital-copy"><p class="eyebrow">01 / PRODUCT DETAIL PAGE</p><h3>전체 구성을 이해시키는<br/>한 장의 긴 흐름.</h3><p>제품 소개부터 팩별 구성, 배지 타입, 자석 활용, 케이스 전시와 제품 정보까지 연결했습니다.</p><ul class="plain-list"><li>패키지마다 다른 구성 수량을 비교</li><li>수집·놀이·보관의 사용 장면 제시</li><li>주의사항과 제품 정보를 마지막에 정리</li></ul><button class="outline-button" data-open-asset="A029">상세페이지 전체 확대 ↗</button><p class="small-note">휴대폰 화면 안에서 스크롤해 전체를 볼 수 있습니다. 포함된 후기·사용 장면은 AI 연출 이미지입니다.</p></div><div class="phone-position"><div class="phone-mockup"><div class="phone-speaker" aria-hidden="true"></div><div class="phone-screen detail-screen" tabindex="0" role="region" aria-label="상품 상세페이지 전체, 휴대폰 안에서 세로 스크롤"><img src="${Ht("A029").src}" alt="티니핑 미스터리 뱃지 상품 상세페이지 전체" loading="lazy" width="${Ht("A029").width}" height="${Ht("A029").height}"/></div><div class="phone-home" aria-hidden="true"></div></div><p class="caption">화면 안에서 스크롤 ↓</p></div></article><article class="digital-row social-row"><div class="digital-copy"><p class="eyebrow">02 / SOCIAL CONTENT</p><h3>소개에서 활용으로,<br/>카드 한 장씩 이어지는 이야기.</h3><p>제품 소개 카드, 출시 이벤트 안내, 후기 콘셉트 카드를 목적에 맞춰 묶었습니다. 원본 이미지의 비율을 유지해 작은 화면에서도 디자인을 살펴볼 수 있습니다.</p><div class="social-groups" role="group" aria-label="SNS 콘텐츠 묶음"><button data-social-group="intro" aria-pressed="true">제품·활용</button><button data-social-group="event" aria-pressed="false">출시 이벤트</button><button data-social-group="reviews" aria-pressed="false">후기 콘셉트</button></div><p id="social-description" class="small-note">싱글팩 소개 · 제품 활용 · 다이어리 꾸미기.</p><p class="small-note">콘텐츠별 검토용 묶음이며 실제 게시 순서를 의미하지 않습니다. 후기 콘셉트 카드의 사용 장면은 AI 생성·후보정 이미지입니다.</p></div><div class="phone-position"><div class="phone-mockup"><div class="phone-speaker" aria-hidden="true"></div><div class="phone-screen social-screen"><div class="social-account">TEENIEPING <span>DESIGN CONTENT</span></div><button class="social-image-button" id="social-image-open" data-open-asset="A037" aria-label="현재 SNS 카드 크게 보기"><img id="social-image" src="${Ht("A037").src}" alt="싱글팩 소개 카드" loading="lazy"/></button><div class="social-card-caption"><strong id="social-title">싱글팩 소개 카드</strong><span id="social-credit">제품 소개 콘텐츠</span></div></div><div class="phone-home" aria-hidden="true"></div></div><div class="carousel-controls"><button id="slide-prev" aria-label="이전 SNS 카드">←</button><span id="slide-count" aria-live="polite">1 / 3</span><button id="slide-next" aria-label="다음 SNS 카드">→</button></div></div></article><div class="promotion-heading"><p class="eyebrow">03 / POSTER & PROMOTION</p><h3>구매 접점에 맞춘 비주얼 확장.</h3></div>${oi(["A038","A048"],"poster-grid")}</section>
<section class="section" id="production">${Nn("12","디자인 파일을 넘어,<br/>제작을 연결하는 역할.","상품 패키지와 배지, 구성품 케이스 컨택, OEM 제작사 소통을 함께 맡았습니다.","PRODUCTION & BRAND APPLICATION")}<div class="production-grid"><article><span class="eyebrow">구성품 포장</span><h3>크리스탈 케이스 보호 파우치</h3>${yn("A055")}<p>본품 외에 구성품을 보호하는 포장까지 제품 정보와 브랜드 표기를 연결했습니다.</p></article><article><span class="eyebrow">물류 포장</span><h3>카톤박스 인쇄 그래픽</h3>${yn("A054")}<p>개별 제품 패키지에서 운송용 외포장까지 이어지는 인쇄 그래픽 자료입니다.</p></article></div><div class="brand-application"><div><p class="eyebrow">LICENSED BRAND</p><h3>공식 IP의 기준 안에서.</h3><p>공식 로고·카피라이트 자료를 바탕으로 제품과 매체에 적용했습니다. 원작 캐릭터와 IP는 SAMG Entertainment의 권리이며, 이 포트폴리오는 개인의 디자인 담당 범위를 정리한 작업 사례입니다.</p><div class="reference-links"><button data-open-asset="A004">로고·카피라이트 가이드 6p ↗</button><button data-open-asset="A001">제공 카피라이트 자료 ↗</button><button data-open-asset="A081">제공 제품 사양 ↗</button></div></div><figure class="brand-logo"><img src="${Ht("A003").src}" alt="공식 프린세스 캐치! 티니핑 로고" loading="lazy"/><figcaption>© SAMG. All rights reserved.</figcaption></figure></div><details class="work-details"><summary>목업 규격과 표기 기준<span>제공 사양 / 추정 치수 +</span></summary><div class="table-scroll"><table><thead><tr><th>유형</th><th>가로 × 세로 × 깊이 (mm)</th><th>기준</th></tr></thead><tbody><tr><td>싱글팩</td><td>120 × 140 × 40</td><td>제공 사양</td></tr><tr><td>풀박스</td><td>127 × 146 × 125</td><td>인수인계 기록</td></tr><tr><td>리미티드</td><td>209 × 146 × 125</td><td>인수인계 기록</td></tr><tr><td>다이소 딱지</td><td>약 200 × 245 × 4</td><td>배지 지름·그래픽 비율로 추정</td></tr><tr><td>파우치 디스플레이</td><td>약 250 × 146 × 127</td><td>20개 수납·전개도 비율로 추정</td></tr><tr><td>딱지 파우치</td><td>120 × 130 × 약 12</td><td>가로·세로는 제공 사양, 두께 추정</td></tr></tbody></table></div><p class="small-note">3D 목업은 포트폴리오 검토용으로 재구성했습니다. 추정 치수는 실측·발주 규격이 아니며, 다이소 팩 후면은 자료가 없어 무지로 표시했습니다.</p></details></section>
<section class="section closing" id="closing">${Nn("13","하나의 IP를,<br/>일관된 제품 경험으로.","배지에서 패키지, 보관과 놀이, 판매 콘텐츠까지 연결한 작업입니다.","DELIVERED SCOPE")}<div class="closing-grid">${yn("A021",{caption:!1})}<div><h3>전유빈 · 디자인 전담</h3><ul class="closing-scope"><li>전반적인 패키지·배지 디자인</li><li>구성품 케이스 컨택</li><li>OEM 제작사 커뮤니케이션</li><li>상세페이지·SNS·프로모션 비주얼</li><li>ChatGPT 이미지 생성·Photoshop 후보정</li></ul><div class="closing-credit"><p>선행 기획: 입사 전 대표·실장</p><p>원작 IP: SAMG Entertainment</p><p>© SAMG. All rights reserved.</p></div></div></div></section>
<section class="section archive" id="archive"><details id="asset-library"><summary><div><p class="eyebrow">WORK ARCHIVE</p><h2>전체 작업 자료</h2><p>대표 작업 외의 구도·버전과 제공 제작 자료까지 모았습니다.</p></div><span>${Hi.length}개 자료 펼치기 +</span></summary><div class="archive-tools"><label>분류<select id="library-filter"><option value="all">전체</option>${Object.entries(Zs).map(([i,e])=>`<option value="${i}">${e}</option>`).join("")}</select></label><label class="archive-search">검색<input id="library-search" type="search" placeholder="제품명 또는 작업명"/></label><span id="library-count" aria-live="polite">${Hi.length}개 자료</span></div><div class="archive-grid">${U0}</div><p id="library-empty" hidden>검색 결과가 없습니다. 다른 단어로 찾아보세요.</p><p class="small-note">제공 ZIP의 84개 파일과 별도 배지 제작 PDF를 모두 연결했습니다. 후기·사용 장면은 AI 연출 작업입니다.</p></details></section>
</main><footer class="footer"><a href="#cover">YUBIN JEON</a><p>티니핑 미스터리 뱃지 · 디자인 포트폴리오<br/>원작 IP © SAMG. All rights reserved.</p><a href="#cover">처음으로 ↑</a></footer>
<dialog id="asset-dialog" aria-labelledby="asset-dialog-title"><div class="dialog-toolbar"><div><span id="asset-dialog-category"></span><h2 id="asset-dialog-title"></h2></div><button id="asset-dialog-close" aria-label="이미지 확대 창 닫기">닫기 ×</button></div><div class="dialog-navigation"><button id="asset-prev" aria-label="같은 분류의 이전 자료">← 이전</button><span id="asset-dialog-credit"></span><button id="asset-next" aria-label="같은 분류의 다음 자료">다음 →</button></div><div class="dialog-content" id="asset-dialog-content"></div><p class="dialog-source" id="asset-dialog-source"></p></dialog>
<dialog id="badge-dialog" aria-labelledby="badge-dialog-title"><div class="dialog-toolbar"><div><span>BADGE · 3D MOCKUP</span><h2 id="badge-dialog-title">배지 앞뒤 3D 목업</h2></div><button id="badge-dialog-close" aria-label="배지 3D 목업 닫기">닫기 ×</button></div><div id="badge-viewer"><div class="badge-model-top"><strong class="badge-selected-title"></strong><span>완성 지름 54 mm · 두께 2 mm</span></div><div class="badge-3d-stage" tabindex="0" role="group" aria-label="배지 3D 모델. 드래그 또는 방향키로 회전하고 휠로 확대할 수 있습니다."></div><p class="badge-3d-status" aria-live="polite">인쇄면을 불러오는 중</p><div class="badge-model-controls"><div role="group" aria-label="배지 시점"><button data-badge-view="front">앞면</button><button data-badge-view="back">뒷면</button><button data-badge-view="edge">옆면·두께</button><button data-badge-view="reset">초기 시점</button></div><div role="group" aria-label="배지 확대 배율"><button data-badge-zoom="out" aria-label="배지 축소">−</button><span class="badge-zoom-value">100%</span><button data-badge-zoom="in" aria-label="배지 확대">+</button></div></div><div class="badge-model-navigation"><button data-badge-next="-1">← 이전 배지</button><span>인쇄 여분 3mm 제외 · 앞·뒷면 완성선 기준</span><button data-badge-next="1">다음 배지 →</button></div></div></dialog>`;bc();const ai=document.querySelector(".menu-toggle");function $l(){ai.setAttribute("aria-expanded","false"),ai.textContent="메뉴 열기",document.querySelector(".site-header").classList.remove("menu-open")}ai.addEventListener("click",()=>{const i=ai.getAttribute("aria-expanded")!=="true";ai.setAttribute("aria-expanded",String(i)),ai.textContent=i?"메뉴 닫기":"메뉴 열기",document.querySelector(".site-header").classList.toggle("menu-open",i)});document.querySelectorAll("nav a").forEach(i=>i.addEventListener("click",$l));document.addEventListener("keydown",i=>{i.key==="Escape"&&$l()});document.querySelectorAll(".package-viewer-mount").forEach(i=>Jl(i,Ys.filter(e=>e.id===i.dataset.model)));document.querySelectorAll(".design-selector").forEach(i=>i.addEventListener("click",e=>{const t=e.target.closest("button[data-design]");if(!t||t.getAttribute("aria-pressed")==="true")return;const n=i.closest(".package-section"),r=n.querySelector(".package-viewer-mount"),o=r.viewer.getState();r.viewer.destroy();const s=document.createElement("div");s.id=r.id,s.className=r.className,s.dataset.package=r.dataset.package,s.dataset.model=t.dataset.design,r.replaceWith(s),Jl(s,Ys.filter(c=>c.id===t.dataset.design),o),i.querySelectorAll("button").forEach(c=>c.setAttribute("aria-pressed",String(c===t)));const a=T0[t.dataset.design];a&&(n.querySelector("[data-product-visual]").innerHTML=yn(a,{cls:n.id==="display"?"dieline-hero":""}))}));let ol=0;async function ec(i){const e=++ol;document.querySelectorAll("[data-badge-side]").forEach(t=>t.setAttribute("aria-pressed",String(Number(t.dataset.badgeSide)===i)));try{const t=await Hs("B001",i);if(e!==ol)return;const n=document.querySelector("#badge-sheet-image");n.src=t.url,n.dataset.vector="true",n.alt=i?"배지 제작 시트 공통 뒷면":"배지 제작 시트 앞면",document.querySelector("#badge-sheet-caption").textContent=`제공 PDF · ${i?"공통 뒷면":"앞면"} 제작 시트 · 원본 벡터`}catch{document.querySelector("#badge-sheet-caption").textContent="원본 벡터를 불러오지 못했습니다. 다시 선택해주세요."}}document.querySelectorAll("[data-badge-side]").forEach(i=>i.addEventListener("click",()=>ec(Number(i.dataset.badgeSide))));const tc=new IntersectionObserver(i=>{i.some(e=>e.isIntersecting)&&(ec(0),tc.disconnect())},{rootMargin:"400px"});tc.observe(document.querySelector("#badge-sheet-image"));function nc(i){const e=Ms.find(t=>t.id===i);if(e){document.querySelectorAll("[data-badge-type]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.badgeType===i))),document.querySelectorAll(".badge-catalog-item").forEach(t=>t.hidden=t.dataset.badgeTypeItem!==i),document.querySelector("#badge-type-description").textContent=e.description,document.querySelector("#badge-catalog").setAttribute("aria-label",`${e.label} 배지 24종`);for(const t of en.filter(n=>n.type===i).slice(0,4))qs(t).catch(()=>{})}}document.querySelectorAll("[data-badge-type]").forEach(i=>i.onclick=()=>nc(i.dataset.badgeType));const Pr=document.querySelector("#badge-dialog");let Mr=null,ic=null,Dr=en[0].id;function rc(){return Mr||(Mr=R0(document.querySelector("#badge-viewer"),i=>{Dr=i.id}),Mr.prepare()),Mr}function oc(i){const e=en.find(r=>r.id===i);if(!e)return;Dr=i,nc(e.type);const t=!Pr.open;t&&(ic=document.activeElement,Pr.showModal(),document.body.classList.add("dialog-open"));const n=document.querySelector(`[data-badge-id="${i}"] img`);rc().select(i,t,n)}document.addEventListener("click",i=>{const e=i.target.closest("[data-badge-id]");e&&oc(e.dataset.badgeId)});document.querySelectorAll("[data-badge-next]").forEach(i=>i.onclick=()=>{const e=en.find(r=>r.id===Dr),t=en.filter(r=>r.type===e.type),n=t.findIndex(r=>r.id===Dr);oc(t[(n+Number(i.dataset.badgeNext)+t.length)%t.length].id)});document.querySelector("#badge-dialog-close").onclick=()=>Pr.close();Pr.addEventListener("close",()=>{document.body.classList.remove("dialog-open"),ic?.focus()});function C0(i){const e=i.target.closest("[data-badge-id]");e&&qs(e.dataset.badgeId).catch(()=>{})}for(const i of["pointerover","pointerdown","focusin"])document.addEventListener(i,C0,{passive:!0});Ql().catch(()=>{});const sc=new IntersectionObserver(i=>{if(i.some(e=>e.isIntersecting)){rc();const e=[...jl,...en.filter(n=>n.type==="gold").slice(0,6).map(n=>n.id)];let t=Promise.resolve();for(const n of e)t=t.then(()=>qs(n)).catch(()=>{});sc.disconnect()}},{rootMargin:"700px"});sc.observe(document.querySelector("#badges"));const P0={intro:{ids:["A037","A035","A036"],description:"싱글팩 소개 · 제품 활용 · 다이어리 꾸미기."},event:{ids:["A031","A032","A033","A034"],description:"출시 이벤트 표지부터 배지·케이스 소개와 참여 안내까지."},reviews:{ids:["A025","A026","A027","A028"],description:"ChatGPT 생성과 Photoshop 후보정으로 제작한 후기 콘셉트 카드입니다. 실제 고객 후기가 아닙니다."}};let ys="intro",Ui=0;function Ks(i=0){const e=P0[ys];Ui=(Ui+i+e.ids.length)%e.ids.length;const t=Ht(e.ids[Ui]);document.querySelector("#social-image").src=t.src,document.querySelector("#social-image").alt=t.title,document.querySelector("#social-image-open").dataset.openAsset=t.id,document.querySelector("#social-title").textContent=t.title,document.querySelector("#social-credit").textContent=t.credit?"AI 연출 · ChatGPT 생성 / Photoshop 후보정":ys==="event"?"출시 이벤트 안내 디자인":"제품 소개·활용 콘텐츠",document.querySelector("#slide-count").textContent=`${Ui+1} / ${e.ids.length}`,document.querySelector("#social-description").textContent=e.description}document.querySelectorAll("[data-social-group]").forEach(i=>i.addEventListener("click",()=>{ys=i.dataset.socialGroup,Ui=0,Ks(),document.querySelectorAll("[data-social-group]").forEach(e=>e.setAttribute("aria-pressed",String(e===i)))}));document.querySelector("#slide-prev").onclick=()=>Ks(-1);document.querySelector("#slide-next").onclick=()=>Ks(1);const Jt=document.querySelector("#asset-dialog");let ac=null,lc=null,Lr=0;async function cc(i){const e=Ht(i);if(!e)return;const t=++Lr;ac=i,document.querySelector("#asset-dialog-title").textContent=e.title,document.querySelector("#asset-dialog-category").textContent=Zs[e.group],document.querySelector("#asset-dialog-credit").textContent=e.credit?"AI 연출 · ChatGPT 생성 / Adobe Photoshop 후보정":"",document.querySelector("#asset-dialog-source").textContent=`제공 자료: ${e.source}`;const n=document.querySelector("#asset-dialog-content");if(n.innerHTML=e.kind==="text"?`<div class="source-text"><p>제공된 원본 사양 기록입니다. 단위와 중량 등이 모호한 항목은 최종 확정 사양으로 인용하지 않았습니다.</p><pre>${pn(e.text)}</pre></div>`:Tr[i]?'<p class="vector-loading" role="status">PDF의 원본 벡터를 불러오는 중…</p>':(e.pages.length?e.pages:[e.src]).map((r,o)=>`<figure><img src="${r}" alt="${pn(e.title)}${e.pages.length?" · "+(o+1)+"페이지":""}"/>${e.pages.length?`<figcaption>${o+1} / ${e.pages.length}</figcaption>`:""}</figure>`).join(""),n.scrollTop=0,Jt.open||(lc=document.activeElement,Jt.showModal(),document.body.classList.add("dialog-open")),Tr[i])try{const r=await Promise.all(Tr[i].pages.map((s,a)=>Hs(i,a)));if(t!==Lr||!Jt.open)return;n.innerHTML=`<div class="vector-zoom-controls"><span>PDF 원본 벡터 확대</span><button data-vector-zoom="out" aria-label="PDF 축소">−</button><output id="vector-zoom-value">100%</output><button data-vector-zoom="in" aria-label="PDF 확대">+</button><button data-vector-zoom="reset">화면에 맞춤</button></div><div class="vector-pages">${r.map((s,a)=>`<figure><img src="${s.url}" data-vector-source="${i}" alt="${pn(e.title)} · ${a+1}페이지"/><figcaption>${a+1} / ${r.length}</figcaption></figure>`).join("")}</div>`;let o=1;n.querySelectorAll("[data-vector-zoom]").forEach(s=>s.onclick=()=>{o=s.dataset.vectorZoom==="reset"?1:Math.max(.5,Math.min(4,o*(s.dataset.vectorZoom==="in"?1.5:1/1.5))),n.querySelector(".vector-pages").style.width=o*100+"%",n.querySelector("#vector-zoom-value").textContent=Math.round(o*100)+"%"})}catch{t===Lr&&Jt.open&&(n.innerHTML='<p role="alert">원본 벡터를 불러오지 못했습니다. 창을 닫고 다시 열어주세요.</p>')}}function uc(){Jt.close()}document.addEventListener("click",i=>{const e=i.target.closest("[data-open-asset]");e&&cc(e.dataset.openAsset)});document.querySelector("#asset-dialog-close").onclick=uc;Jt.addEventListener("close",()=>{Lr++,document.body.classList.remove("dialog-open"),lc?.focus()});Jt.addEventListener("click",i=>{if(i.target===Jt){const e=Jt.getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&uc()}});function Ir(i){const e=Ht(ac),t=Hi.filter(r=>r.group===e.group),n=t.findIndex(r=>r.id===e.id);cc(t[(n+i+t.length)%t.length].id)}document.querySelector("#asset-prev").onclick=()=>Ir(-1);document.querySelector("#asset-next").onclick=()=>Ir(1);Jt.addEventListener("keydown",i=>{i.key==="ArrowRight"&&(i.preventDefault(),Ir(1)),i.key==="ArrowLeft"&&(i.preventDefault(),Ir(-1))});function dc(){const i=document.querySelector("#library-filter").value,e=document.querySelector("#library-search").value.trim().toLocaleLowerCase();let t=0;document.querySelectorAll(".archive-card").forEach(n=>{const r=(i==="all"||n.dataset.libraryGroup===i)&&n.dataset.libraryTitle.toLocaleLowerCase().includes(e);n.hidden=!r,r&&t++}),document.querySelector("#library-count").textContent=t+"개 자료",document.querySelector("#library-empty").hidden=t>0}document.querySelector("#library-filter").onchange=dc;document.querySelector("#library-search").oninput=dc;
