$(document).ready(function(){
    Fancybox.bind('[data-fancybox="pp-img"]')
    Fancybox.bind('[data-fancybox="pp-video"]')
  })
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 10,
    navigation: {
      nextEl: '.pp-char-next',
      prevEl: '.pp-char-prev',
    },
    breakpoints: {
      320: {
          slidesPerView: 3
      },
      600: {
          slidesPerView: 5
      },
      1024: {
          slidesPerView: 7
      },
      1200: {
          slidesPerView: 8
      }
    }
  })
  