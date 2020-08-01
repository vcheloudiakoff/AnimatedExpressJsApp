
$(document).ready(function()
{
    onloadFadesAnimation();
});

function onloadFadesAnimation() {
    console.log("Into function onloadFadesAnimation");
    $('#rectangle').fadeOut(5000, function() {
        $('#rectangle').attr('id', 'rectangleBorder');
        $('#rectangleBorder').fadeIn(2500, function(){
            
        })
    });
}