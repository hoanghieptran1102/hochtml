$(function() {
    $(".intro-section").parallax({
        imageSrc: "images/bg-1.jpg",
        speed: .2
    }), $(".services-section").parallax({
        imageSrc: "images/bg-2.jpg",
        speed: .2
    }), $(".contact-section").parallax({
        imageSrc: "images/bg-3.jpg",
        speed: .2
    }), $.scrollUp({
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 1e3,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 300,
        scrollText: "",
        scrollImg: !0
    }), $(window).on("scroll", function() {
        $(document).height() - $(window).height() === $(window).scrollTop() ? $("#scrollUp").css("bottom", "80px") : $("#scrollUp").css("bottom", "30px")
    }), $(".single-page-nav").singlePageNav({
        offset: $(".single-page-nav").outerHeight(),
        speed: 1500,
        filter: ":not(.external)",
        updateHash: !0
    }), $(".navbar-toggle").click(function() {
        $(".single-page-nav").toggleClass("show")
    }), $(".single-page-nav a").click(function() {
        $(".single-page-nav").removeClass("show")
    })
});