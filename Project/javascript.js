const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-links li a');

links.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});

menuHamburguer.addEventListener('click', () => {
  nav.classList.toggle('active');
});


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

let header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
      header.style.background = '#191919';
    } else {
      header.style.background = 'transparent';
    }
  });