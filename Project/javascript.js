const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-links li a');
let header = document.getElementById('header');
let swiper;

// Verifique se os elementos existem antes de adicionar event listeners
if (menuHamburguer && nav) {
  menuHamburguer.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

if (links) {
  links.forEach(item => {
    item.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });
}


function createSwiper(container, pagination, nextButton, prevButton) {
  return new Swiper(container, {
    slidesPerView: handlewidth(),
    spaceBetween: 30,
    pagination: {
      el: pagination,
      clickable: true,
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });
}

function handlewidth() {
  let getwidth = window.innerWidth || document.documentElement.clientWidth;
  let slideshow = 3;

  if (getwidth < 1001) {
    slideshow = 2;
  }

  if (getwidth < 700) {
    slideshow = 1;
  }

  return slideshow;
}

swiper = createSwiper(
  ".mySwiper",
  ".swiper-pagination",
  ".swiper-button-next",
  ".swiper-button-prev"
);



// Atualize o Swiper quando a janela for redimensionada
window.addEventListener('resize', () => {
  swiper.params.slidesPerView = handlewidth();
  swiper.update();
});


// Altere o estilo de fundo do cabeçalho ao rolar a página
window.addEventListener('scroll', () => {
  if (header) {
    if (window.scrollY >= 200) {
      header.style.background = '#191919';
    } else {
      header.style.background = 'transparent';
    }
  }
});
