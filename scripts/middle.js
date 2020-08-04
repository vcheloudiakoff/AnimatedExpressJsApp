$(document).ready(function() {
    onloadMiddleResize();
})

function onloadMiddleResize() {
    $('.splittedContainer #secondCol').animate({
        width: '100vw'
    }, 1000)
    $('.splittedContainer > #firstCol, #thirdCol').animate({
        width: '0%',
    }, 1000)
}