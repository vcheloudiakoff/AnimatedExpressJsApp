$(document).ready(function() {
    onloadRightResize();
})

function onloadRightResize() {
    $('.splittedContainer #thirdCol').animate({
        width: '100vw'
    }, 1000)
    $('.splittedContainer > #firstCol, #secondCol').animate({
        width: '0%',
    }, 1000)
}