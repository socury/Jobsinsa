const selectMenu = (type) => {
    const classes = document.getElementsByClassName(type);
    const wraps = document.getElementsByClassName("wrapControl");

    // wraps에 있는 모든 요소의 active 클래스를 제거
    for (let i = 0; i < wraps.length; i++) {
        wraps[i].classList.remove("active");
    }

    // classes에 있는 모든 요소에 active 클래스를 추가
    for (let i = 0; i < classes.length; i++) {
        classes[i].classList.add("active");
    }
}