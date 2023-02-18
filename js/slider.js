const element = {
  buttonPrev: document.querySelector('[aria-prev]'),
  buttonFrwd: document.querySelector('[aria-frwd]'),
  wrapper: document.querySelector('.slider__wrapper'),
  list: document.querySelector('.slider__list'),
};

let offset = 0;
let maxPixelsToOffset = 0;
function slider() {
  const windowSize = window.screen.width;
  element.buttonFrwd.addEventListener('click', () => {
    if (windowSize <= 480) {
      maxPixelsToOffset = -1650;
    } else if (windowSize > 768 && windowSize <= 1440) {
      maxPixelsToOffset = -1320;
    } else if (windowSize > 1440) {
      maxPixelsToOffset = -990;
    }

    offset > maxPixelsToOffset ? (offset -= 330) : (offset = 0);

    element.list.style.left = offset + 'px';
  });
  element.buttonPrev.addEventListener('click', () => {
    if (windowSize <= 480) {
      maxPixelsToOffset = -1650;
    } else if (windowSize > 768 && windowSize <= 1440) {
      maxPixelsToOffset = -1320;
    } else if (windowSize > 1440) {
      maxPixelsToOffset = -990;
    }

      offset > maxPixelsToOffset && offset <=-1? (offset += 330) : (offset = 0);
      

    element.list.style.left = offset + 'px';
  });
}

export default slider;
