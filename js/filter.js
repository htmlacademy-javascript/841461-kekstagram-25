import {
  RANDOM_FILTERED_QUANTITY,
  TIMEOUT_DELAY,
} from './variables.js';

import {
  getRandomArray,
  sortByCommentsQuantity,
  debounce,
} from './util.js';

import {
  createPictureList,
} from './picture-render.js';

import {
  getData,
} from './api.js';

const filterSection = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const filterButtons = filterForm.querySelectorAll('.img-filters__button');

const showFilters = () => {
  filterSection.classList.remove('img-filters--inactive');

  const switcher = debounce(handleFilterOnClick, TIMEOUT_DELAY);
  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener('click', switcher);
  });
  const defaultButton = filterForm.querySelector('#filter-default');
  defaultButton.click();
};

const clearPictures = () => {
  const pictures = document.querySelectorAll('.picture');
  if (pictures.length > 0) {
    pictures.forEach((picture) => picture.remove());
  }
};

function handleFilterOnClick(evt) {
  filterButtons.forEach((filterButton) => filterButton.classList.remove('img-filters__button--active'));
  evt.target.classList.add('img-filters__button--active');
  const elementID = evt.target.id;
  clearPictures();
  getData( async (pictures) => {
    switch (elementID) {
      case 'filter-random':
        pictures = getRandomArray(pictures, RANDOM_FILTERED_QUANTITY);
        break;
      case 'filter-discussed':
        pictures = sortByCommentsQuantity(pictures);
        break;
    }
    createPictureList(pictures);
  });
}

export {
  showFilters,
};
