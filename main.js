// main.js
$(function(){
    // 이미지,배경
    var titleData = [
        {
            imgUrl: './images/ice1.png',
            bgUrl:'./images/Untitled-2.png'
        },
        {
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
    });

    $('.pager > ul > li').eq(1).click(function(){
        $('figure img')
       .attr('src',titleData[1].imgUrl);
       $('#title figure').css('background-image',`url(${titleData[1].bgUrl})`);
    });

    $('.pager > ul > li').eq(2).click(function(){
        $('figure img')
        .attr('src',titleData[2].imgUrl);
        $('#title figure').css('background-image',`url(${titleData[2].bgUrl})`);
    });

});        