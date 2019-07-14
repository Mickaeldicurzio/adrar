$(document).ready(function () {
    window.addEventListener('scroll', function(e){
        var scrolled = window.pageYOffset;
        var background = document.querySelector(".parallax");
        var coords = '0% '+ (- (scrolled *0.3) + 'px');
        background.style.backgroundPosition  = coords;
    });
});
