document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel-wrapper');
    const buttonNext = document.getElementById('next-button');
    let currentIndex = 0;
    const itemsPerPage = 6;
  
    // Función para mostrar un grupo de carruseles
    function showCarousels(startIndex) {
      // Oculta todos los carruseles
      carousels.forEach(carousel => carousel.classList.remove('visible'));
  
      // Muestra los carruseles del grupo actual
      for (let i = startIndex; i < startIndex + itemsPerPage && i < carousels.length; i++) {
        carousels[i].classList.add('visible');
      }
    }
  
    // Mostrar los primeros 6 carruseles
    showCarousels(0);
  
    // Control del botón "Siguiente"
    buttonNext.addEventListener('click', function () {
      currentIndex += itemsPerPage;
      if (currentIndex >= carousels.length) {
        currentIndex = 0; // Vuelve al inicio si no hay más carruseles
      }
      showCarousels(currentIndex);
    });
  });