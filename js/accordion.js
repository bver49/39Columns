
$(document).ready(function() {
    // Collapsible Menu
    function accordion(trigger) {

        //variables
        var $button = $(trigger),//trigger firing the event
            visible = true;//flag for wayfinding

            $button.hover().css({'cursor': 'pointer'}); // give the trigger a pointer on :hover

        //event
        $button.click(function() {

            if ( ! visible ) {
                $button.removeClass('active');

                $('.panel-title .icon').html('');

                $(this).next().slideUp('slow',function() {
                    $(this).addClass('visuallyhidden').slideDown(0);
                    $('.panel-content').attr( 'aria-expanded','false' );
                });
            }else {
                $button.addClass('active');

                $('.panel-title.active .icon').html('close');

                $(this).next().slideUp(0, function() {
                    $('.panel-content').attr( 'aria-expanded','true' );
                    $(this).removeClass('visuallyhidden').slideDown('slow');
                });
            }

            // the flag visibility dude
            visible = ! visible;
            return false
        });
    }

    //call to widget trigger1
    accordion('#trigger1');
    //call to widget trigger2
    accordion('#trigger2');
    //call to widget trigger3
    accordion('#trigger3');
    //call to widget trigger4
    accordion('#trigger4');
    //call to widget trigger5
    accordion('#trigger5');
    //call to widget trigger6
    accordion('#trigger6');
    //call to widget trigger7
    accordion('#trigger7');
    //call to widget trigger8
    accordion('#trigger8');
	//call to widget trigger1
    accordion('#trigger9');
    //call to widget trigger2
    accordion('#trigger10');
    //call to widget trigger3
    accordion('#trigger11');
    //call to widget trigger4
    accordion('#trigger12');
    //call to widget trigger5
    accordion('#trigger13');
    //call to widget trigger6
    accordion('#trigger14');
    //call to widget trigger7
    accordion('#trigger15');
    //call to widget trigger8
    accordion('#trigger16');

});//end document.ready()