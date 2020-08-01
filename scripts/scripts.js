
$(document).ready(function()
{
    onloadFadesAnimation();
});

function onloadFadesAnimation() {
    console.log("Into function onloadFadesAnimation");
    setTimeout(function(){
        $('.rectangle').addClass('rectangleBorder');
        $('.rectangle').removeClass('rectangle');
    }, 5000);
}