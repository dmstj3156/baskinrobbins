$(function(){
    $('#gnb').on('mouseover', function(){
        $('.depth2, .nav_bg').addClass('show')
      })
  
      $('#gnb').on('mouseout', function(){
        $('.depth2, .nav_bg').removeClass('show')
      })
})