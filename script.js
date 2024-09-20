const [btn1, btn2, btn3] = document.querySelector("button");

btn2.addEventListner("click", () => {
    new Anime(window, {scroll: 2000},{ duration: 500} );
});