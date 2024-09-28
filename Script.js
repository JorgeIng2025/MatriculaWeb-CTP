const slider = document.querySelector('.slider figure');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function showSlide(index){
    const slideWidth = document.querySelector('.producto').clientWidth
    slider.style.transform = `translateX(${-slideWidth * index}px)`;

}
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slider.children.length - 1; // Volver al último slide si estamos en el primero
    }
    showSlide(currentIndex);
  });
  
  nextButton.addEventListener('click', () => {
    if (currentIndex < slider.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Volver al primer slide si estamos en el último
    }
    showSlide(currentIndex);
  });

  