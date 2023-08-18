$(document).ready(function(){

  // gnb
  $(function(){
    $('#mark').click(function(){
      $('.check').attr('class','checked');
    })
  });

// gnb li up&down
$('.sub_wrap').click(function(){
  $('.sub').slideToggle('fast');
  if($('.down_btn').hasClass("down_btn")){
    $('.down_btn').removeClass('down_btn').addClass('up_btn');
  } else {
    $('.up_btn').removeClass('up_btn').addClass('down_btn');
  };
  return false;
});


// 메인슬라이드
$('#main1').addClass('on');
$('#thumb1').addClass('active');

$('#thumb1, #thumb2, #thumb3, #thumb4').click(function() {
$(this).addClass('active').siblings().removeClass('active');
let mainId = $(this).attr('id').replace('thumb', 'main');
$('#' + mainId).addClass('on').siblings().removeClass('on');

let thumbId = $(this).attr('id');
  if (thumbId === 'thumb1') {
    $('#thumb1').css('z-index', 4);
    $('#thumb2').css('z-index', 3);
    $('#thumb3').css('z-index', 2);
    $('#thumb4').css('z-index', 1);
  } else if (thumbId === 'thumb2') {
    $('#thumb1').css('z-index', 3);
    $('#thumb2').css('z-index', 4);
    $('#thumb3').css('z-index', 3);
    $('#thumb4').css('z-index', 2);
  } else if (thumbId === 'thumb3') {
    $('#thumb1').css('z-index', 2);
    $('#thumb2').css('z-index', 3);
    $('#thumb3').css('z-index', 4);
    $('#thumb4').css('z-index', 3);
  } else if (thumbId === 'thumb4') {
    $('#thumb1').css('z-index', 1);
    $('#thumb2').css('z-index', 2);
    $('#thumb3').css('z-index', 3);
    $('#thumb4').css('z-index', 4);
  }
});

  // 아코디언
  


  // address 접히기


});