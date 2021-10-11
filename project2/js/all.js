// all.js

$(function(){

//navwrap jquery
var $header = $('.hdrWrap'),
    $nav = $('.navWrap'),
    $menu = $header.find('.bars');

    $menu.click(function(){
        $nav.slideToggle(1000);
    });

    

});
