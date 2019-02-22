$(window).on('load', function () {
    $('.loader').fadeOut(500, function () {
        $(this).remove();
    });      
});

/*global $ */
$(document).ready(function ($) {
    'use strict';
 
    new WOW().init();

    $('.header-nav .btn').on('click', function () {
        $(this).toggleClass('open');
        $('.navbar-menu').toggleClass('show-menue');
        $('.header-nav .over-lay').toggleClass('show-menue');
        $('body').toggleClass('no-scroll');
    });

    $('.header-nav .over-lay').on('click', function () {
        $('.header-nav .btn').removeClass('open');
        $('.navbar-menu').removeClass('show-menue');
        $('.header-nav .over-lay').removeClass('show-menue');
        $('body').css('overflow-y','auto');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.header-nav').addClass("nav-fixed");
        }
        else {
            $('.header-nav').removeClass("nav-fixed");
        }
    });

    $('.nav-item').click(function(){
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    })

    $(".navbar-menu a").on("click", function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top - (80)
        }, 500);
    });

    $('.nav-lang').click(function(){
        $('.lang-box').toggleClass('show-lang');
    });

    $('.header-owl').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        navText: ["<i class='icofont icofont-thin-right'></i>", "<i class='icofont icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.header-nav').addClass("navbar-fixed-top");
        }
        else {
            $('.header-nav').removeClass("navbar-fixed-top");
        }
    });

    var a = 0;
    $(window).scroll(function() {
        var oTop = $('.counts').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.count-num').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            a = 1;
        }
    });

    $('.testimonial').owlCarousel({
        rtl: true,
        items:10,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: false,
        dots:true,
        navText: ["<i class='icofont icofont-thin-right'></i>", "<i class='icofont icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.works').masonry({
        itemSelector: '.work-box'
    });

    $('.form-control').focus(function(){
        $(this).parent('.field').addClass('animation');
    });
    $('.form-control').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.field').addClass('animation');
            
        }
    });
    $('.form-control').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.field').removeClass('animation');
    });
    

});


