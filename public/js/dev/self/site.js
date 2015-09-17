/**
 * Created by Donghui Huo on 2015/8/31.
 */
var $ = require("jQuery");
module.exports = (function ($, window, undefined) {
    'use strict';
    $.Site = function () {
        //add window size change
        $(window).resize(function(){
            if($(window).width()>=768){
                $("#menu-mobile").removeClass("fadeInDown fadeOutUp").addClass("init");
            }
        })
    };
    $.Site.prototype = {
        changeMenu:function(){
            if($("#menu-mobile").hasClass("init")){
                $("#menu-mobile").removeClass("init");
            }
            if($("#menu-mobile").hasClass("fadeInDown")){
                $("#menu-mobile").removeClass("fadeInDown").addClass("fadeOutUp");
                $(".mask").hide();
            }else{
                $("#menu-mobile").removeClass("fadeOutUp").addClass("fadeInDown");
                $(".mask").show();
            }
        }
    };

    return new $.Site();
})($,window)