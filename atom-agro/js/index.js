const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    delay: 2000,
    spaceBetween: 10,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    breakpoints: {
      320: {
          slidesPerView: 2
      },
      768: {
          slidesPerView: 4
      },
    }
  });
  Fancybox.bind("[data-fancybox]", {
  });