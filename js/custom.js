$(".slider-sec").slick({
    dots: true,
    infinite: true,
    autoplay: true
});

$(document).ready(function() {
    $("button.btn.menu").click(function() {
        $(".header-menu > ul").addClass("open");
    });

    $("button.btn.close").click(function() {
        $(".header-menu > ul").removeClass("open");
    });
});
AOS.init();