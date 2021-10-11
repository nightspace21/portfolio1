// sub3.js

$(function(){
    
    var $cnt1 = $('.cnt1_brands'),
        $artview1 = $cnt1.find('.artview'),
        $artview2 = $cnt1.find('.artview2'),
        $btnext = $cnt1.find('.btNext'),
        $btprev = $cnt1.find('.btPrev'),
        $artgroup1 = $artview1.find('.artgroup'),
        $artgroup2 = $artview2.find('.artgroup2'),
        $tab = $artgroup2.find('.image'),
        i = 0;

    $artview1.css({left: 0+'%'});
    $artview1.children(':first').prependTo($artview1);

    $artgroup2.css({left: 0+'%'});
    $artgroup2.children(':first').prependTo($artgroup2);
    


    $btnext.click(function(){
        $artgroup1.animate({left: 0+'%'}, function(){
            $(this).children(':first').appendTo($artgroup1);
            i = $(this).index();
            $artview1.find('.artgroup .brand').hide();
            $artview1.find('.artgroup .brand').eq(i).show();
            $tab.removeClass('clicked');
            $artgroup1.css({left: -0+'%'});
        });
        $artgroup2.animate({left: 0+'%'}, function(){
            $(this).children(':first').appendTo($artgroup2).removeClass('clicked');
            $(this).children(':first').addClass('clicked');
            $artgroup2.css({left: -0+'%'});
        });
        i = (i+1)%4;
    });

    $btprev.click(function(){
        $artgroup1.animate({left: 0+'%'}, function(){
            $(this).children(':last').prependTo($artgroup1);
            i = $(this).index();
            $artview1.find('.artgroup .brand').hide();
            $artview1.find('.artgroup .brand').eq(i).show();
            $tab.removeClass('clicked');
            $artgroup1.css({left: 0+'%'});
        });
        $artgroup2.animate({left: 0+'%'}, function(){
            $(this).children(':last').prependTo($artgroup2).addClass('clicked');
            $artgroup2.css({left: 0+'%'});
        });
        i = (i+3)%4;
    });

    $tab.click(function(){
        i = $(this).index();
        $artview1.find('.artgroup .brand').hide();
        $artview1.find('.artgroup .brand').eq(i).show();
        $tab.removeClass('clicked');
        $(this).addClass('clicked');
    });


});