// main.js
$(function(){
   
    // 이미지,배경
    var titleData = [
        {   
            imgUrl: './images/ice1.png',
            bgUrl:'./images/Untitled-2.png'
        },
        {   text:'css',
            imgUrl: './images/ice2.png',
            bgUrl:'./images/Untitled-3.png'
        },
        {
            imgUrl: './images/ice3.png',
            bgUrl:'./images/Untitled-4.png'
        }
     ];

    //이벤트
    $('.pager > ul > li').eq(0).click(function(){
        $('figure img')
            //타이틀 제품 이미지
            .attr('src',titleData[0].imgUrl);
            //타이틀 배경 이미지
            $('#title figure').css('background-image', `url(${titleData[0].bgUrl})`);
            $('.one').html('ICECREAM');
            $('.best').html('배스킨에서만 즐길수있는 <br>31가지 맛의 아이스크림과 <br> 특별한 디저트, 그리고 음료까지!  ');
    });

    $('.pager > ul > li').eq(1).click(function(){
        $('figure img')
       .attr('src',titleData[1].imgUrl);
       $('#title figure').css('background-image',`url(${titleData[1].bgUrl})`);
       $('.one').html('ICECREAM CAKE');
       $('.best').html('아이와 어른이 좋아하는 아이스크림을 <br>하나의 케이크에서 <br>모두 즐기세요!');
    });

    $('.pager > ul > li').eq(2).click(function(){
        $('figure img')
        .attr('src',titleData[2].imgUrl);
        $('#title figure').css('background-image',`url(${titleData[2].bgUrl})`);
        $('.one').html('COFFEE');
        $('.best').html('부드러운 풍미, <br>마일드하고 부드러운 <br>배스킨라빈스만의 시그니처 블렌드!');
    });

});        