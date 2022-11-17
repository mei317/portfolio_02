/* eslint-disable prefer-const */
// /* eslint-disable prefer-const */
// /* eslint-disable no-undef */
import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  new router()
  const hoge = 'hoge'
  console.log(hoge)
})


// カーソル

const cursor = $(".u-cursor");
$(document).on("mousemove",(e) => {
  const x = e.clientX
  const y = e.clientY
  cursor.css({
    "opacity": "1",
    "top": `${y}` + "px",
    "left": `${x}` + "px"
  })
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
          top_margin = 700 ;
      if( scroll_top > offset_top - top_margin ){
          $(this).addClass('fadeIn');
      }
    });
  });

  // titleフェードイン

  // eslint-disable-next-line prefer-arrow-callback
  $(window).on('scroll',function(){
    let scroll_top = $(window).scrollTop();
    $('.c-contents__title').each(function(){
      let offset_top = $(this).offset().top,
          top_margin = 800 ;
      if( scroll_top > offset_top - top_margin ){
          $(this).addClass('fadeIn');
      }
    });
  });

  // snsフェードイン

  // eslint-disable-next-line prefer-arrow-callback
  $(window).on('scroll',function(){
    let scroll_top = $(window).scrollTop();
    $('.p-contentsSns__list li').each(function(){
      let offset_top = $(this).offset().top,
          top_margin = 700 ;
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
    $('.p-contentsHistory__item a img').each(function(){
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
  // $(window).on('scroll',function(){
  //   let scroll_top = $(window).scrollTop();
  //   $('.u-lastHistory a img').each(function(){
  //     let offset_top = $(this).offset().top,
  //         top_margin = 200 ;
  //     if( scroll_top > offset_top - top_margin ){
  //         $(this).addClass('fadeIn');
  //     }else{
  //         $(this).removeClass('fadeIn');
  //     }
  //   });
  // });

  //contentsTitle時間差フェードイン

  // eslint-disable-next-line prefer-arrow-callback
  // $(window).on('scroll',function(){
  //   let scroll_top = $(window).scrollTop();
  //   $('.c-contactTitle').each(function(){
  //     let offset_top = $(this).offset().top,
  //         top_margin = 500;
  //     if( scroll_top > offset_top - top_margin ){
  //         $(this).addClass('fadeIn');
  //     }else{
  //         $(this).removeClass('fadeIn');
  //     }
  //   });
  // });




