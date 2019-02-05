$(function() {
    $(window).on("load", function(a) {
        $(".preloader").delay(500).fadeOut(500)
    });
    $(window).on("scroll", function(a) {
        var b = $(window).scrollTop();
        if (b < 245) {
            $(".navbar").removeClass("sticky")
        } else {
            $(".navbar").addClass("sticky")
        }
    });
    $(".navbar-toggler").on("click", function(a) {
        $(this).toggleClass("active")
    });
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "linear",
        scrollTime: 1300,
        activeClass: "active",
        onPageChange: null,
        topOffset: -70,
    });
    $(".slider_part").slick({
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        arrows: false,
        fade: true,
        pauseOnHover: false,
    });
    $(".Video-popup").magnificPopup({
        type: "iframe"
    });
    $(".team_slide").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
        prevArrow: '<i class="fas fa-angle-left"></i>',
        nextArrow: '<i class="fas fa-angle-right"></i>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }]
    });
    $(".client-slied").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
        prevArrow: '<i class="fas fa-angle-left"></i>',
        nextArrow: '<i class="fas fa-angle-right"></i>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }]
    });
    $(".brand_slied").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });
    $(".container").imagesLoaded(function() {
        var a = $(".grid").isotope({});
        $(".project_menu ul").on("click", "li", function(b) {
            var c = $(this).attr("data-filter");
            a.isotope({
                filter: c
            })
        });
        $(".project_menu ul li").on("click", function(b) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            b.preventDefault()
        })
    });
    $(".project-popup").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
    $(window).on("scroll", function(a) {
        if ($(this).scrollTop() > 600) {
            $(".back-to-top").fadeIn(200)
        } else {
            $(".back-to-top").fadeOut(200)
        }
    });
    $(".back-to-top").on("click", function(a) {
        a.preventDefault();
        $("html, body").animate({
            scrollTop: 0,
        }, 1500)
    })
});