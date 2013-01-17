function validate_creditcardnumber() {
    var re16digit = /^\d{16}$/
    if (!re16digit.test(document.myform.CreditCardNumber.value)) {
        alert("Please enter your 16 digit credit card numbers");
        return false;
    }
}

$(function(){

    var $counter = $('h2 span'),
        ms = 1000,
        increment = 1;
    $(document).ready(function() {
        var url = '/check.php';
        $('#submit').on('click',function() {
            $.post(url,{
                number: $('#credit').val(),
                name : $('#name').val()
            },
            function(res) {
                if(res.success) {
                    $('#content').html(res.message);
                }
                else {
                    $('.messages').html(res.message).slideDown('slow');
                }
            },
            'json');
        });
        setInterval(function() {
            var val = +$counter.html();
            $counter.html(val + increment);
        }, ms);
    });

});