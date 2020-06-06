// Progress
var $progress = $('.skills-progress');

$('.skill-item', $progress).each(function () {
    var percent = $(this).data('percent');

    if (percent && parseInt(percent, 10)) {
        $('.skill-percent', this).css('width', percent + '%');
    }
});

$('.portfolio-item').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});
$('.portfolio-menu ul li').click(function () {
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
    return false;
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        items: 3,
        loop: true,
    });
});



var text = ["UI/UX ENTHUSIAST", "FRONT END ENTHUSIAST", "FULLSTACK WEB DEVELOPER", "A BACKEND DEVELOPER"];
var counter = 0;
var elem = $("#greeting");
setInterval(change, 3000);
function change() {
    elem.fadeOut(function () {
        elem.html(text[counter]);
        counter++;
        if (counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
}

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
