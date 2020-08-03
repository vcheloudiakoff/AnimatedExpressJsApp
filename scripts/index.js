$(document).ready(function() {
    $('#rectangle').css('display', 'flex').hide();
    onloadFadesAnimation();
});

function onloadFadesAnimation() {
    $('#buttonText a').text("PRET ?");

    $('#rectangle').fadeIn(2500, function(){
        $('#rectangle').fadeOut(2500, function() {
            $('#buttonText a').text('CLIQUEZ !');
            $('#rectangle').attr('id', 'rectangleBorder');
            $('#rectangleBorder').fadeIn(1500, function(){
            })
        })
    });
}