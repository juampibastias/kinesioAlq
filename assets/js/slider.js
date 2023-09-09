$(document).ready(function(){
    $('.slider').slick({
      autoplay: false, // Opcional: Auto reproducción
      autoplaySpeed: 3000, // Opcional: Velocidad de auto reproducción
      dots: false, // Opcional: Muestra indicadores de navegación (puntos)
    });
  });

  $(document).addEventListener("DOMContentLoaded", function() {
    const readMore = document.querySelector(".read-more");
    const toggleButton = readMore.querySelector("after");
    
    toggleButton.addEventListener("click", function() {
      readMore.classList.toggle("expanded");
    });
  });
  