//scroll

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1400) { // <----- show button at 1400px down
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){ // <----- set your id to the section you want to scroll
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
