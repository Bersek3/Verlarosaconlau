document.addEventListener("DOMContentLoaded", function() {
    // Manejo de la visibilidad de la barra de navegación al hacer scroll
    var prevScrollpos = window.pageYOffset;
    var navbar = document.getElementById("art-menu");
  
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
        navbar.classList.remove("hidden");
      } else {
        navbar.classList.add("hidden");
      }
      prevScrollpos = currentScrollPos;
    };
  
    // Manejo de los carruseles
    const carousels = [
      { container: '.carousel', dotsClass: '.nav-dot' },
      { container: '.carousel-2', dotsClass: '.nav-dot-2' },
      { container: '.carousel-3', dotsClass: '.nav-dot-3' },
      { container: '.carousel-4', dotsClass: '.nav-dot-4' }
    ];
  
    carousels.forEach(({ container, dotsClass }) => {
      const carousel = document.querySelector(container);
      const dots = carousel.querySelectorAll(dotsClass);
      const slides = carousel.querySelectorAll('ul > li');
      let index = 0;
      const totalSlides = slides.length;
  
      function updateDots() {
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      }
  
      function nextSlide() {
        index = (index + 1) % totalSlides;
        updateDots();
      }
  
      function startCarousel() {
        setInterval(nextSlide, 1500); // Cambia la imagen cada 1.5 segundos
      }
  
      function setupCarousel() {
        slides.forEach((slide, i) => {
          if (i === totalSlides - 1) {
            slide.style.animation = 'none';
            setTimeout(() => {
              slide.style.animation = '';
              nextSlide();
            }, 2000); // Pausa de 2 segundos en la última imagen
          }
        });
      }
  
      updateDots();
      startCarousel();
      setupCarousel();
    });
  });
  