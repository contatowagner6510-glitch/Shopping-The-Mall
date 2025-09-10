
document.querySelectorAll('.slider-container, .slider-container-movie').forEach(container => {
  const slider = container.querySelector('.slider');
  const btnPrev = container.querySelector('.prev');
  const btnNext = container.querySelector('.next');
  
  const cardCount = slider.children.length;
  const cardsVisible = 4;
  let currentIndex = 0;
  
  function updateSlider() {
    const cardWidth = slider.children[0].offsetWidth + 10; // card width + margin-right (aprox)
    const maxIndex = cardCount - cardsVisible;
    if(currentIndex < 0) currentIndex = 0;
    if(currentIndex > maxIndex) currentIndex = maxIndex;
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
  
  btnPrev.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
  });
  
  btnNext.addEventListener('click', () => {
    currentIndex++;
    updateSlider();
  });
  
  // Inicia o slider
  updateSlider();
});
