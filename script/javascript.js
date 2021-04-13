// ハンバーガー
const burgerBtn = document.getElementById('burger-Btn'),
      headerNav = document.getElementById('header__Nav'),
      Body = document.body;

burgerBtn.addEventListener('click',function(){
  headerNav.classList.toggle('open');
  burgerBtn.classList.toggle('cross');
  Body.classList.toggle('noscroll');
});

// スティッキーヘッダー
  const $header = document.querySelector('header'),
        fvHeight = document.getElementsByClassName('fv')[0].clientHeight,
        winX = window.innerWidth;

          if(winX > 768){
            addEventListener('scroll',function(){
              if(pageYOffset > fvHeight){
                $header.classList.add('fixed');
              }else{
                $header.classList.remove('fixed');
              }
            })
          }

// スライダー
let mySwiper = new Swiper('.swiper-container',{
  loop : true,
  autoplay: {
    delay: 2000
  },
  speed : 1000,
  effect : 'fade'
});