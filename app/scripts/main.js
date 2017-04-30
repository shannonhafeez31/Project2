$(document).ready(function(){
  // Add smooth scrolling to all links
    $('a').on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== '') {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    $('.next').click(function() {
       $('html,body').animate({ scrollTop:$(this).parent().next().offset().top}, 'slow');


    });

    $('.button_nav').hide();

    $('#reel').each(function() {
        animationClick(this, 'rollOut');
    });



    function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 1000);
            $('.button_nav').fadeIn(2000);
              $('#reel').hide(2000);

        });
}
});
