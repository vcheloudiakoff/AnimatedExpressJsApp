
$(document).ready(function()
{
    onloadFadesAnimation();
});

function onloadFadesAnimation() {
    var beginStr = $('#rectangle').text();

    $('#buttonText a').text("Pret?");
    // Premier fadeIn ne fonctionne pas
    $('#rectangle').fadeIn(2500, function(){
        $('#rectangle').fadeOut(2500, function() {
            $('#buttonText a').text('Cliquez !');
            $('#rectangle').attr('id', 'rectangleBorder');
            $('#rectangleBorder').fadeIn(1500, function(){
            })
        })
    });
    
}