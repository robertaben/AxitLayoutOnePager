$(function () { // galima rasyti ir $(document).ready(function) {
    $('.contact').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.sectionTen').offset().top
        }, 1500);
    });

    $('.features').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.sectionThree').offset().top
        }, 1500);
    });

    $('.about').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.sectionSix').offset().top
        }, 1500);
    });

    $('.pricing').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.sectionSeven').offset().top
        }, 1500);
    });

    $('.reviews').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.sectionEight').offset().top
        }, 1500);
    });

    $('.mobileMenu li').click(function () {
        $('.mobileMenu').hide()
    })

    $('.sandwich').click(function () {
        $('.mobileMenu').slideToggle(500);
    });

    $('.download').click(function () {
        $(".popup-overlay, .popup-content").addClass("active");
    });

    $(".close, .popup-overlay").click(function () {
        $(".popup-overlay, .popup-content").removeClass("active");
    });
});