$(document).ready(function () {

    var HomeHero = '.hero';
    var w = $(window);

    setTimeout($(window).on('scroll', function () {
        if ($(HomeHero).length <= 0) return;

        var HomeHeroHeight = $(HomeHero).innerHeight();
        if (w.scrollTop() <= HomeHeroHeight) {
            $('.navbar').removeClass('white')
        } else {
            $('.navbar').addClass('white')
        }
    }), 1000)
})
