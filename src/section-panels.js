const labels = {cover:'표지',overview:'프로젝트',badges:'대표 배지','badge-collection':'배지 컬렉션','package-index':'패키지 소개',single:'싱글팩',full:'풀박스',limited:'리미티드',daiso:'다이소',display:'디스플레이 박스',pouch:'파우치',experience:'홍보·컨셉','commerce-screen':'판매 화면','social-screen':'인스타그램','poster-screen':'포스터',about:'소개',footer:'마무리'};
export function getSectionPanels() {
  return [...document.querySelectorAll('main > section[id]:not(#digital), #package-index, #digital .digital-row, #poster-screen, footer.footer')].map(element => ({element,id:element.id,anchor:element.id==='commerce-screen'?'digital':element.id,label:labels[element.id]}));
}
