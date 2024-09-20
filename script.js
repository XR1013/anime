const btn = document.querySelector("button");
const box = document.querySelector("article");

// btn click event
btn.addEventListener("click", () => {
    // call Anime
    // new Anime(동작대상, {변경할 css속성 프로퍼티}, {duration:모션시간})
    // 속성값 설정시 px단위는 숫자로만 입력
    // 퍼센트 단위는 문자열로 감싸서 입력
    // 모션시간인 duration은 숫자만 입력 (ms단위) 디폴트값: 500
    new Anime(box, { top: "50%", left: "50%" }, { duration: 1000 });
});