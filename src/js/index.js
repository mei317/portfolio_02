/* eslint-disable prefer-const */
// /* eslint-disable prefer-const */
// /* eslint-disable no-undef */
import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  new router()
  const test = 'test'
  console.log(test)
})

// ロード時フェードイン
// eslint-disable-next-line prefer-arrow-callback
$(window).on('load', function() {
  $('body').delay(500).fadeIn(1000),
  $('.p-homeHeader').delay(1200).fadeIn(1000),
  $('.p-homeMain h1').delay(1700).fadeIn(1000);
});



// トップ画像切替
$('.img-wrap img:nth-child(n+2)').hide();
setInterval(() => {
  $(".img-wrap img:first-child").fadeOut(2000);
  $(".img-wrap img:nth-child(2)").fadeIn(2000);
  $(".img-wrap img:first-child").appendTo(".img-wrap");
}, 4500);


// profileフェードイン

// eslint-disable-next-line prefer-arrow-callback
$(window).on('scroll',function(){
  let scroll_top = $(window).scrollTop();
  $('.p-contentsProfile__text').each(function(){
    let offset_top = $(this).offset().top,
        top_margin = 600 ;
    if( scroll_top > offset_top - top_margin ){
        $(this).addClass('fadeIn');
    }else{
      $(this).removeClass('fadeIn');
  }
  });
});

// titleフェードイン

// eslint-disable-next-line prefer-arrow-callback
$(window).on('scroll',function(){
  let scroll_top = $(window).scrollTop();
  $('.c-content__title').each(function(){
    let offset_top = $(this).offset().top,
        top_margin = 800 ;
    if( scroll_top > offset_top - top_margin ){
        $(this).addClass('fadeIn');
    }else{
      $(this).removeClass('fadeIn');
  }
  });
});

// contentsTitle時間差フェードイン

// eslint-disable-next-line prefer-arrow-callback
$(window).on('scroll',function(){
  let scroll_top = $(window).scrollTop();
  $('.c-content__titleContact').each(function(){
    let offset_top = $(this).offset().top,
        top_margin = 650;
    if( scroll_top > offset_top - top_margin ){
        $(this).addClass('fadeIn');
    }else{
        $(this).removeClass('fadeIn');
    }
  });
});


// snsフェードイン

// eslint-disable-next-line prefer-arrow-callback
$(window).on('scroll',function(){
  let scroll_top = $(window).scrollTop();
  $('.p-contentsSns__list li').each(function(){
    let offset_top = $(this).offset().top,
        top_margin = 650 ;
    if( scroll_top > offset_top - top_margin ){
        $(this).addClass('fadeIn');
    }else{
        $(this).removeClass('fadeIn');
    }
  });
});

// newsフェードイン

// eslint-disable-next-line prefer-arrow-callback
$(window).on('scroll',function(){
  let scroll_top = $(window).scrollTop();
  $('.p-contentsNews__item').each(function(){
    let offset_top = $(this).offset().top,
        top_margin = 700 ;
    if( scroll_top > offset_top - top_margin ){
        $(this).addClass('fadeIn');
    }else{
        $(this).removeClass('fadeIn');
    }
  });
});


// historyフェードイン

// eslint-disable-next-line prefer-arrow-callback
$(window).on('scroll',function(){
  let scroll_top = $(window).scrollTop();
  $('.p-contentsHistory__list li').each(function(){
    let offset_top = $(this).offset().top,
        top_margin = 650 ;
    if( scroll_top > offset_top - top_margin ){
        $(this).addClass('fadeIn');
    }else{
        $(this).removeClass('fadeIn');
    }
  });
});

// history時間差フェードイン

// eslint-disable-next-line prefer-arrow-callback
$(window).on('scroll',function(){
  let scroll_top = $(window).scrollTop();
  $('.p-contentsHistory__list li:last-child').each(function(){
    let offset_top = $(this).offset().top,
        top_margin = 450 ;
    if( scroll_top > offset_top - top_margin ){
        $(this).addClass('fadeIn');
    }else{
        $(this).removeClass('fadeIn');
    }
  });
});





