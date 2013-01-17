function validateNum(num) {
    var re16digit = /^\d{16}$/
    if (!re16digit.test(num)) {
        return false;
    } else {
        return true;
    }
}

$(function(){

    var $counter = $('h2 span'),
        ms = 3000,
        increment = 1;

    $('button').on('click',function() {

        var cc = $('#credit').val().replace(/[^\d]/g, '');

        if (!validateNum(cc)) {
            $('.messages').html("Please enter a valid credit card number");
        } else {
            $('#content').fadeOut(300, "swing", function(){
                $('#wtf').fadeIn();
            });
        }

        return false;

    });

    setInterval(function() {
        var val = +$counter.html();
        $counter.html(val + increment);
    }, ms);

});