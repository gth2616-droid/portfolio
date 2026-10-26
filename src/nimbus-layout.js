// Adapted from the upstream HTML snapshot in vendor/nimbus/original.html.
export function renderNimbus(asset,photo){return `    <section class="hero nimbus-hero" id="cover" aria-labelledby="hero-title">
      <iframe class="shader-bg" src="${matchMedia('(prefers-reduced-motion: reduce)').matches?'about:blank':'https://fragcoord.xyz/embed/c6zisyc6?viewport=1422x800'}"
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

            ${[['cli','A015','하츄핑','01'],['api','A010','다이아나핑','02'],['console','A011','이클립스핑','03']].map(([tab,id,name,num],i)=>`<div class="console-pane ${i===0?'active':''}" data-pane="${tab}" id="hero-pane-${tab}" role="tabpanel" aria-labelledby="hero-tab-${tab}" ${i?'hidden':''}><div class="console-product-label"><span>SINGLE PACK / ${num}</span><span>120 × 140 × 40 mm</span></div><button class="hero-art-button" data-open-asset="${id}" aria-label="${name} 패키지 크게 보기"><img src="${asset(id).src}" alt="${name} 싱글팩" width="625" height="809" ${i?'':'fetchpriority="high"'} decoding="async"/></button><div class="console-product-label"><span>${name} 싱글팩</span><span>배지 3개 · 케이스 1개 ↗</span></div></div>`).join('')}
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
          ${[
['infra','01 / DESIGN','사내 유일<br/>디자이너.','패키지 전반과 배지 그래픽을 전담했습니다. 대표·실장이 입사 전에 기획한 완구를, 신입 입사 후 수습기간을 마치고 제품화했습니다.','A017'],
['residency','02 / SOURCING','보관과 전시를<br/>함께 생각하다.','배지는 자석으로 놀고 크리스탈 케이스에 보관·전시하는 장난감입니다. 구성품 케이스의 공급처 컨택과 제품 구성 실무를 맡았습니다.','A079'],
['scaling','03 / PRODUCTION','디자인에서<br/>실제 제작까지.','패키지·배지 디자인을 인쇄와 생산에 연결하며 OEM 제작사와 직접 소통했습니다. 제품 포장부터 물류용 카톤박스 그래픽까지 적용했습니다.','A054'],
['visibility','04 / COMMUNICATION','제품의 경험을<br/>보여주는 콘텐츠.','상세페이지·SNS·프로모션 비주얼을 제작했습니다. 후기·사용 장면은 ChatGPT 이미지 생성과 Adobe Photoshop 후보정으로 만든 AI 연출 이미지입니다.','A037']
].map(([key,label,title,text,id],i)=>`<article class="accordion-card ${i===0?'active':''}" data-accordion-card="${key}"><div class="accordion-copy"><span class="source-card-label">${label}</span><h3>${title}</h3><p>${text}</p></div><div class="accordion-visual">${photo(id,{caption:true})}</div></article>`).join('')}
        </div>
      </div>
    </section>

`;}
