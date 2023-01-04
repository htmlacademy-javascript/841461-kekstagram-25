
import {
  isEscapeKey,
  isEnterKey,
} from './util.js';

import {
  translations,
} from './translations.js';

import {
  useOfHash,
} from './language.js';

const modal = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const alertSuccessFragment = document.createDocumentFragment();
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const alertErrorFragment = document.createDocumentFragment();

const createSuccesMessageUpload = () => {
  const messageElement = successTemplate.cloneNode(true);
  const messageContainer = messageElement.querySelector('.success__inner');
  const messageTitle = messageElement.querySelector('.success__title');
  const messageButton = messageElement.querySelector('.success__button');
  messageTitle.textContent = (translations['successMessage'][useOfHash]).replace(/^[^a-zа-яё]*([a-zа-яё])/i, (letter) => letter.toUpperCase());
  messageButton.textContent = (translations['successButton'][useOfHash]).replace(/^[^a-zа-яё]*([a-zа-яё])/i, (letter) => letter.toUpperCase());
  document.addEventListener('keydown', onPopupEnterKeydown);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onOverlayClick);
  messageElement.querySelector('.success__button').addEventListener('click', onHideAlertButtonClick);
  messageElement.appendChild(messageContainer);
  alertSuccessFragment.appendChild(messageElement);
  modal.append(alertSuccessFragment);
  modal.style.overflow = 'hidden';
};

const createErrorMessageUpload = () => {
  const messageElement = errorTemplate.cloneNode(true);
  const messageContainer = messageElement.querySelector('.error__inner');
  const messageTitle = messageElement.querySelector('.error__title');
  const messageButton = messageElement.querySelector('.error__button');
  messageTitle.textContent = (translations['errorMessage'][useOfHash]).replace(/^[^a-zа-яё]*([a-zа-яё])/i, (letter) => letter.toUpperCase());
  messageButton.textContent = (translations['errorButton'][useOfHash]).replace(/^[^a-zа-яё]*([a-zа-яё])/i, (letter) => letter.toUpperCase());
  document.addEventListener('keydown', onPopupEnterKeydown);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onOverlayClick);
  messageElement.querySelector('.error__button').addEventListener('click', onHideAlertButtonClick);
  messageElement.appendChild(messageContainer);
  alertErrorFragment.appendChild(messageElement);
  modal.append(alertErrorFragment);
};

function onHideAlertButtonClick() {
  hideAlert();
}

function onPopupEnterKeydown(evt) {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    hideAlert();
  }
}

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideAlert();
  }
}

function onOverlayClick() {
  hideAlert();
}

function hideAlert() {
  const alertMessage = document.querySelector('.success') || document.querySelector('.error');
  modal.removeChild(alertMessage);
  document.removeEventListener('keydown', onPopupEnterKeydown);
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onOverlayClick);
}

export {
  createSuccesMessageUpload,
  createErrorMessageUpload,
};
