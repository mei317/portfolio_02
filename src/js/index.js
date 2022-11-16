import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  new router()
  const hoge = 'hoge'
  console.log(hoge)
})



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

$('.fadeIn').each(function(){
    const WINDOW_HEIGHT = $(window).scrollTop();
    const TARGET_HEIGHT = $(this).offset().top - 300;
    if( WINDOW_HEIGHT > TARGET_HEIGHT){
        $(this).addClass('in');
        $('.fadeIn.in').each(function(i){
            const delay = 100;
            $(this).delay(i * delay).queue(function(next){
                $(this).addClass('show');
                next();
            })
        })
    }
});

$('.img-wrap img:nth-child(n+2)').hide();
setInterval(() => {
  $(".img-wrap img:first-child").fadeOut(2000);
  $(".img-wrap img:nth-child(2)").fadeIn(2000);
  $(".img-wrap img:first-child").appendTo(".img-wrap");
}, 4500);

