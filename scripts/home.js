$(document).ready(function() {
    onloadResize();
});

function onloadResize() {
    $('#rectangleBorder').animate({
        width: "150%",
        height: "100%"
    }, 2500, function() {
        $('#rectangleBorder').fadeOut(500, function(){
            $('.header').animate({
                height: '0vh'
            }, 2000)
        });
    });
}