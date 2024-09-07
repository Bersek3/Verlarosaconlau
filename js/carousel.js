document.addEventListener("DOMContentLoaded", function() {
  // Manejo de la visibilidad de la barra de navegación al hacer scroll
  let prevScrollpos = window.pageYOffset;
  const navbar = document.getElementById("art-menu");

  window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
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
      { container: '.carousel-4', dotsClass: '.nav-dot-4' },
      { container: '.carousel-5', dotsClass: '.nav-dot-5' },
      { container: '.carousel-6', dotsClass: '.nav-dot-6' },
      { container: '.carousel-7', dotsClass: '.nav-dot-7' }
      // Agrega más carruseles aquí si es necesario
  ];

  let visibleCount = 6; // Número inicial de carruseles visibles

  function showNextSet() {
      const wrappers = document.querySelectorAll('.carousel-wrapper');
      const totalWrappers = wrappers.length;
      const remainingWrappers = totalWrappers - (visibleCount - 6);
      
      for (let i = visibleCount - 6; i < visibleCount; i++) {
          if (wrappers[i]) {
              wrappers[i].style.display = 'block';
          }
      }

      visibleCount += remainingWrappers > 3 ? 3 : remainingWrappers; // Aumenta el número de carruseles visibles, pero no más de los restantes

      if (visibleCount > totalWrappers) {
          document.getElementById('load-more').style.display = 'none'; // Oculta el botón si no hay más carruseles
      }
  }

  document.getElementById('load-more').addEventListener('click', showNextSet);

  // Inicializa el primer conjunto de carruseles visibles
  showNextSet();
});
