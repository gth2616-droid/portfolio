export function renderAbout(heading) {
  return `<section class="section about-section" id="about" aria-labelledby="about-name">
    ${heading('11', '관찰하고 정리하는<br/>디자이너 전유빈입니다.', '', 'ABOUT ME')}
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
  </section>`;
}
