$(function(){
    /* 브라우저 너비 높이값 얻어서 변수 할당 | 콘솔출력 */
    var browserWidth = $(window).width();
    var browserHeight = $(window).height();
    console.log('브라우저 너비값 : ' + browserWidth);
    console.log('브라우저 높이값 : ' + browserHeight);

    /* DOM객체에 동적 높이값 적용 */
    $('#wrap').css({height:browserHeight});
});