$(document).ready(function() {
    $('#rectangleBorder').css("display", "flex");
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
            }, 2000, function() {
                onloadResizeSplittedContainer();
            })
        });
    });
}


// gerer quand utiliser cette fonction
function onloadResizeSplittedContainer() {
    $('#firstCol').animate({height: "100vh"}, 1500, function() {
        $('#secondCol').animate({height: "100vh"}, 1500, function() {
            $('#thirdCol').animate({height: "100vh"}, 1500)
        })
    })
}