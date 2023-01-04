import {
  ALERT_SHOW_TIME,
} from './variables.js';

const isEnterKey = (evt) => evt.key === 'Enter';
const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '15px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.fontStyle = 'bold';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'tomato';
  alertContainer.style.backgroundColor = 'white';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomArray = (array, counter) => {
  if (array.length <= counter) {
    return array;
  }
  let result = [];
  while (result.length !== counter) {
    result.push(getRandomArrayElement(array));
    result = Array.from(new Set(result));
  }
  return result;
};

const comparePictures = (itemA, itemB) => {
  const commentA = itemA.comments;
  const commentB = itemB.comments;

  return commentB - commentA;
};

const sortByCommentsQuantity = (items) => items.slice().sort(comparePictures);

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const toKebabCase = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export {
  isEnterKey,
  isEscapeKey,
  showAlert,
  getRandomArray,
  sortByCommentsQuantity,
  debounce,
  toKebabCase,
};
