const selectMenu = (type) => {
    // 모든 wrapControl 요소의 active 클래스를 제거
    document.querySelectorAll('.wrapControl').forEach(control => {
        control.classList.remove('active');
    });

    // 해당 타입에 해당하는 요소에 active 클래스를 추가
    document.querySelectorAll('.' + type).forEach(element => {
        element.classList.add('active');
    });
}