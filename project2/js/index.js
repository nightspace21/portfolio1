// index.js

$(function(){

//index_cnt3_news jquery code/

    var $newspoto = $('.cnt3_news'),
        $cnt3artgroup = $newspoto.find('.artgroup'),
        $cnt3article = $cnt3artgroup.find('article'),
        $newsbtprev = $newspoto.find('.btprev'),
        $newsbtnext = $newspoto.find('.btnext')
        i = 0;

    $cnt3artgroup.css({left: -25+'%'});
    $cnt3artgroup.children(':last').prependTo($cnt3artgroup);

    $newsbtnext.click(function(){
        $cnt3article.removeClass('center');
        $cnt3artgroup.stop().animate({left: -50+'%'}, function(){
            $cnt3artgroup.children(':first').appendTo($cnt3artgroup);
            $cnt3artgroup.css({left: -25+'%'});
            $cnt3article.eq(i).addClass('center');
        });
        i = (i+1)%6
        console.log(i);
    });

    $newsbtprev.click(function(){
        $cnt3article.removeClass('center');
        $cnt3artgroup.animate({left: 0+'%'}, function(){
            $cnt3article.eq(i).addClass('center');
            $(this).children(':last').prependTo($cnt3artgroup);
            $cnt3artgroup.css({left:-25+'%'});
        });
        i = (i+5)%6
        console.log(i);
    });



//index_cnt4_offices jquery code/
    var $officepoto = $('.cnt4_offices'),
        $artgroup = $officepoto.find('.artgroup article'),
        $btprev = $officepoto.find('.btns .btprev'),
        $btnext = $officepoto.find('.btns .btnext'),
        $n = $officepoto.find('.num span'),
        i = 0;

    $artgroup.css({left: -100+'%'});
    $artgroup.children(':last').prependTo($artgroup);

    $btnext.on('click', btnext);
    $btprev.on('click', btprev);

    function btnext(){
        $artgroup.animate({left: -200+'%'}, function(){
            $(this).children(':first').appendTo($artgroup);
            $artgroup.css({left:-100+'%'});
        });
        i = (i+1)%8;
        $n.text(i+1);
    }

    function btprev(){
        $artgroup.animate({left: 0+'%'}, function(){
            $(this).children(':last').prependTo($artgroup);
            $artgroup.css({left:-100+'%'});
        });
        i = (i+7)%8;
        $n.text(i+1);
    }





});//close jquery function - dont' erase last session!