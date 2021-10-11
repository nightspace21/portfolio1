// sub4.js

$(function(){
    var $content = $('.cnt1_news'),
        $tab = $content.find('.tgroup .tab'),
        $artview = $content.find('.artview'),
        i = 0;

    $tab.click(function(){
        i = $(this).index(); 
        $artview.hide();
        $artview.eq(i).show();
        $tab.removeClass('clicked');
        $(this).addClass('clicked');
    });



});