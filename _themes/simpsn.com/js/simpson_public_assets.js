// Main JS for simpson.com

// Fade in the images after they load

    function loadMarquee() {
          $( ".inner" ).fadeIn( "400" );
    }

    setTimeout(loadMarquee, 400);

// Add Id to blog listing items in the read more section and hide the current post
$(document).ready(function () {
    var uid = 1;
    function addRSSID () {

    // Add Unique ID to parent items
        $('.hs-rss-item').each(function() {
        this.id = 'blogPost' + (uid++);
    });

      var texts = {};
      texts[$('#hs_cos_wrapper_name').text() || ''] = true;

      // Add Unique ID to blog post titles
      $('.hs-rss-title').each(function() {
        this.id = 'blogPostTitle' + (uid++);
        var $item = $(this);
        var text = $item.text();
        if (text in texts) {
          $item.parent().hide();
        }
        else {
          texts[text] = true;
        }
      });
    }

    addRSSID();
});

// Center the main H1 marquee headlines vertically
$(document).ready(function () {

    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
        };
    })();

    function centerHeadline () {
        var marquee = $("#marquee").outerHeight();
        var headline = $("#marquee-headline").outerHeight();
        var offset = (marquee - headline) / 2;

        $("#marquee-headline").css("top", offset);
    }


    // Call centerHeadline at page load, with a delay
    centerHeadline();

    // Extra call just in case
    setTimeout(centerHeadline,1000);

    // Call me crazy, but I want it centered
    setTimeout(centerHeadline,3000);

    // Call updateOffset when browser resize event fires
    $(window).resize(function() {
        delay(function(){
            centerHeadline();
        }, 1000);
    });
});


//Get dat mobile nav ready
$(function() {

     /**
      * Mobile Nav
      *
      * Toggle Side Menu - Left or Right
      */

    // Prepend a mobile icon to the header
    $(".custom-menu-primary").after('<a class="mobile-icon"><span></span></a>');

	// Prepend a close icon to the menu
	$(".custom-menu-primary .hs-menu-flow-horizontal>ul").before('<a class="close-icon"><span></span></a>');

	// Add body class on mobile icon click
	$(".mobile-icon, .close-icon").click(function(){
	$("body").toggleClass("show-mobile-nav ");
	});

	// Set the menu height to 100% of the document
	function setMenuHeight(){
        var height = $(document).outerHeight(true);
        $(".custom-menu-primary").height(height);
	}

	setMenuHeight();
	$(window).resize(setMenuHeight);

	// Wrap body contents with a div so the transforms will work
	$("body").find("script").remove().end().wrapInner("<div id='site-wrapper' />");

});
