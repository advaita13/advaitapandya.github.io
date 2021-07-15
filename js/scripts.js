/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    $(document).ready(function () {
        const start = new Date("2016-10-01"),
            end = new Date(),
            diff = new Date(end - start),
            years = diff / 1000 / 60 / 60 / 24 / 365,
            yoe = Math.round(years);

        const desc = 'Senior Software Engineer with days ' + yoe + ' years of experience in designing and developing large scale distributed systems keeping latency, reliability, and usability in mind. ' +
            'Experience working in the Payment Industry, in particular during Japan’s big transition to cashless payments.';
        $("p#desc").text(desc);
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict
