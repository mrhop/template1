/**
 * Created by Donghui Huo on 2015/8/28.
 */
var $ = global.$ = global.jQuery = require('jquery');
var $site = require("./site");
require("flexslider");
require("mixitup");
require("fancybox");
//response-nav
$(document).ready(function () {
    $(".toggleMenu").click(function (e) {
        $site.changeMenu();
        e.preventDefault();
    })
    $(".mask").click(function (e) {
        $site.changeMenu();
        e.preventDefault();
    })
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false
    });

    $('.portfolio-wrapper').hover(function () {
        $(this).find(".label").css("bottom", 0);
    }, function () {
        $(this).find(".label").css("bottom", "-40px");
    })

    $('#portfoliolist').mixItUp();
    $('#portfoliolist').on('mixEnd', function(e, state){
        $('div.portfolio:visible a.fancyShow').fancybox({
            padding: 0,
            prevEffect: 'fade',
            nextEffect: 'fade',
            closeBtn: false,
            arrows: false,
            nextClick: true
        });
    });
});
