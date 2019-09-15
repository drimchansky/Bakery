const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slider__item');
const image = document.querySelector('.slider__image');

const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

const nextSlide = () => {
  // get current image
  const currentImage = slider.querySelector('.slider__current');

  currentImage.classList.remove('slider__current');

  if (currentImage.nextElementSibling) {
    currentImage.nextElementSibling.classList.add('slider__current');
  } else {
    slides[0].classList.add('slider__current');
  }
  image.dataset.image = slider.querySelector(
    '.slider__current',
  ).dataset.image;
};

const prevSlide = () => {
  const currentImage = slider.querySelector('.slider__current');

  currentImage.classList.remove('slider__current');

  if (currentImage.previousElementSibling) {
    currentImage.previousElementSibling.classList.add(
      'slider__current',
    );
  } else {
    slides[slides.length - 1].classList.add('slider__current');
  }
  image.dataset.image = slider.querySelector(
    '.slider__current',
  ).dataset.image;
};

const clickOnImage = e => {
  if (
    e.target.dataset.image &&
    e.target.classList.contains('slider__item')
  ) {
    const currentImage = slider.querySelector('.slider__current');
    currentImage.classList.remove('slider__current');

    const data = e.target.dataset.image;
    e.target.classList.add('slider__current');
    image.dataset.image = data;
    console.log(data);
  }
};

slider.addEventListener('click', clickOnImage);

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
