function validateNum(num) {
    var re16digit = /^\d{4}$/
    if (!re16digit.test(num)) {
        return false;
    } else {
        return true;
    }
}

function display() {
    $('#content').fadeOut(300, "swing", function(){
        $('#wtf').fadeIn();
    });
}

$(document).ready(function(){

    var $counter = $('h2 span'),
        ms = 3000,
        increment = 1;

    $('button').on('click',function() {

        var cc = $('#credit').val().replace(/[^\d]/g, '');

        if (!validateNum(cc)) {
            $('.messages').html("Please enter a valid credit card number");
        } else {
            display();
        }

        return false;

    });

    $('#credit').on('keyup', function() {
        var num = $(this).val();
        if(num.length >= 4 && !isNaN(num)) {
            display();
        }
    });

    setInterval(function() {
        var val = +$counter.html();
        $counter.html(val + increment);
    }, ms);

});
