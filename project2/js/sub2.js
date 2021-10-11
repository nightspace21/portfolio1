// sub2.js

//sub2_cnt1_right jquery code/
$(function(){
    var $wrapper = $('.cnt1_right'),
        $cnt1artgroup = $wrapper.find('.artgroup');

        $cnt1artgroup.css({left:-50+'%'});
        $cnt1artgroup.children(':first').appendTo($cnt1artgroup);

    function nextImg(){
        $cnt1artgroup.delay(1500).animate({left:0}, 1500, function(){
            $(this).css({left:-50+'%'}).children(':last').prependTo(this);
            nextImg();
        });
    }
    nextImg();




//sub2_cnt4_offices jquery code/
    var $officepoto = $('.cnt4_offices'),
        $cnt4artgroup = $officepoto.find('.artgroup article'),
        $btprev = $officepoto.find('.btns .btprev'),
        $btnext = $officepoto.find('.btns .btnext'),
        $n = $officepoto.find('.num span'),
        i = 0;

        $cnt4artgroup.css({left: -100+'%'});
        $cnt4artgroup.children(':last').prependTo($cnt4artgroup);

    $btnext.on('click', btnext);
    $btprev.on('click', btprev);

    function btnext(){
        $cnt4artgroup.animate({left: -200+'%'}, function(){
            $(this).children(':first').appendTo($cnt4artgroup);
            $cnt4artgroup.css({left:-100+'%'});
    });
        i = (i+1)%8;
        $n.text(i+1);
    }

    function btprev(){
        $cnt4artgroup.animate({left: 0+'%'}, function(){
            $(this).children(':last').prependTo($cnt4artgroup);
            $cnt4artgroup.css({left:-100+'%'});
    });
        i = (i+7)%8;
        $n.text(i+1);
    }



});