const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slider__item');
const image = document.querySelector('.slider__image');

const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

const nextSlide = () => {
  // get current image
  const currentImage = slider.querySelector('.slider__current');
};

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
