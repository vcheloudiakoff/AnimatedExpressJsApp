
$(document).ready(function()
{
    onloadFadesAnimation();
});

function onloadFadesAnimation() {
    console.log("Into function onloadFadesAnimation");
    
    // Ce fadeIn ne fonctionne pas
    // $('#rectangle').fadeIn(2500);
    
    $('#rectangle').fadeOut(2500, function() {
        $('#rectangle').attr('id', 'rectangleBorder');
        $('#rectangleBorder').fadeIn(1500, function(){
            // next
        })
    });
    
}