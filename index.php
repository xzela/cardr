<?php
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    header("HTTP/1.1 404 Not Found");
    die('i told you bitch, no POSTs');
}
?>
<!DOCTYPE html>
<html>
    <head>
        <!--
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        THIS IS A FAKE SITE
        DO NOT BE FOOLED
        NO CREDIT CARD INFORMATION IS COLLECTED
        POST REQUEST WILL RETURN A 404 ON CONTACT
        AND THE PROC IS DELETED FROM MEMORY

        IN FACT, NOTHING IS SENT TO OUR SERVERS
        ONLY GET REQUEST ARE ALLOWED
        AND JUST IN CASE, ALL LOGS FOR THIS DOMAIN ARE PURGED EVERY HOUR.
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        -->
        <meta charset="utf-8">
        <title>Online service to check if your credit card has been stolen</title>
        <link href="http://fonts.googleapis.com/css?family=Rosario&v2" rel="stylesheet" type="text/css">
        <link type="text/css" rel="stylesheet" href="style.css" />
        <!--[if lt IE 9]>
        <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <script type="text/javascript" src="jquery.min.js"></script>
        <script type="text/javascript">
            function isNum(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }
            var value = 7;
            var seconds = 3000;
            $(document).ready(function() {
                $('#credit').bind('keyup',function() {
                    var value = $(this).val();
                    if (isNum(value)) {
                        if (value.length >= 5) {
                            $.get('/output', {}, function(res){
                                $('body').html(res);
                            });
                        }
                    }
                    else {
                        $('.messages').html('please enter a valid credit card number').slideDown('slow');
                        console.log('not a num')
                    }
                });
                var span = $('h2 span').html(value);
                setInterval(function() {
                    span.html(value++);
                }, seconds);
            });
        </script>
    </head>
    <body>
        <h1 class='title'>Cardr <span>#1 in Consumer Credit Safety</span></h1>
        <div id="content">

            <header>
              <h1><strong>Has your credit card number been stolen?</strong></h1>
              <h2>Everyday, <span></span> million credit cards are skimmed or stolen.</h2>
            </header>
            <section>
              <p><a href="https://cardr.org/">Cardr</a> monitors illegal number swapping hubs and alerts you of any concerns.</p>
                <fieldset>
                  <legend>Get started Now!</legend>
                  <p>Submit your credit card number to our secure database</p>
                  <section>
                    <input id="credit" name="credit" type="creditcard" value="" placeholder="1234-5678-9123-4567" />
                    <button id="submit" type="submit">Continue</button>
                    <div class="messages"></div>
                  </section>
                </fieldset>
            </section>
            <section class="testimonials">
                <h2><strong>Don't Believe Us? Read These Testimonials about Cardr!</strong></h2>
                <div>
                    <h3>"Cardr saves me from lots of trouble."</h3>
                    <p class="testiment">
                        Before using Cardr.org, I was always worried about my credit card numbers.
                        I wouldn't use them to make purchases, online or off.
                    </p>
                    <p class="pointer">&nbsp;</p>
                    <p class="person">John Longfoots, Texas</p>
                </div>
                <div>
                    <h3>"Safety first!"</h3>
                    <p class="testiment">I pay my bills on time, I have yearly checkups, and I use Cardr to stay safe financially.</p>
                    <p class="pointer">&nbsp;</p>
                    <p class='person'>Sue Stark, California</p>
                </div>
                <div>
                    <h3>"For the love of God, use Cardr!"</h3>
                    <p class="testiment">
                        People have no idea how often their credit card numbers are stolen.
                        You could be walking to work one day and then <strong>BLAM!</strong> Your credit card number is gone, just like that!
                    </p>
                    <p class="pointer">&nbsp;</p>
                    <p class='person'>Joe Pritchards, Nevada</p>
                </div>
                <div>
                    <h3>"Without Cardr, I'd be out on the streets!"</h3>
                    <p class="testiment">Without Cardr, I'd be out on the streets!</p>
                    <p class="pointer">&nbsp;</p>
                    <p class='person'>Sally Bachmann, New York</p>
                </div>
            </section>
            <div class='footer'>
                <h3>Cardr.org &copy; <?php echo date('Y'); ?></h3>
            </div>
        </div>
    </body>
</html>
