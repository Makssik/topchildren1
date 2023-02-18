// const buyBtn = document.querySelector('.hero__button');
// const backdropEl = document.querySelector('.backdrop');
// buyBtn.addEventListener('click', () => {
//   backdropEl.classList.toggle('is-hidden');
// });

// const toggleBtn = document.querySelector('.modal__button--close');
// console.log(toggleBtn);
// toggleBtn.addEventListener('click', () => {
//   backdropEl.classList.toggle('is-hidden');
// });

import slider from './js/slider.js';
slider();
// Get the modal
let modal = document.querySelector('.modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let modalImg = document.querySelector('#image');

// Get the element that closes the modal
let closeModal = document.querySelector('.modal-background');

// Get the images from the page
let images = document.querySelectorAll('.thumbnail');

// Get the previous and next buttons
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

// Counter for the current image
let counter = 0;

// Open the modal when an image is clicked
images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = image.src;
    counter = Number(image.dataset.index);
  });
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Go to the previous image
prev.addEventListener('click', () => {
  counter--;

  if (counter < 0) {
    counter = images.length - 1;
  }

  modalImg.src = images[counter].src;
});

// Go to the next image
next.addEventListener('click', () => {
  counter++;

  if (counter > images.length - 1) {
    counter = 0;
  }

  modalImg.src = images[counter].src;
});

