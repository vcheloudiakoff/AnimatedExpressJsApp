$(document).ready(function() {
    onloadLeftResize();
})

function onloadLeftResize() {
    $('.splittedContainer #firstCol').animate({
        width: '100vw'
    }, 1000)
    $('.splittedContainer > #secondCol, #thirdCol').animate({
        width: '0%',
    }, 1000)
}