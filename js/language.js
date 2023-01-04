
import {
  ALL_LANG,
} from './variables.js';

import {
  toKebabCase,
} from './util.js';

import {
  translations,
} from './translations.js';

import {
  uploadFile,
} from './file.js';

const form = document.querySelector('.img-upload__form');
const imageInput = document.querySelector('[type=file]');
const langMenuList = document.querySelector('.languages');
const textField = document.querySelector('.field');
const placeholderOfTextField = textField.getAttributeNode('placeholder');

const pristine = new Pristine(form, {
  classTo: 'text__label',
  errorTextParent: 'text__label',
  errorTextClass: 'text__error-text',
});

const changeUrlLanguage = () => {
  const lang = langMenuList.value;
  location.href = `${window.location.pathname}#${lang}`;
  location.reload();
};

const changeLanguage = () => {
  let hash = window.location.hash;
  imageInput.addEventListener('change', uploadFile);
  hash = hash.substring(1);
  if (!ALL_LANG.includes(hash)) {
    location.href = `${window.location.pathname}#en`;
    location.reload();
  }
  langMenuList.value = hash;
  return hash;
};

const useOfHash = changeLanguage();

const useChangeLanguage = () => {
  document.querySelector('title').textContent = translations['unit'][useOfHash];

  placeholderOfTextField.value = (translations['textareaPlaceholder'][useOfHash]).replace(/^[^a-zа-яё]*([a-zа-яё])/i, (letter) => letter.toUpperCase());

  textField.removeAttribute('data-pristine-required-message');
  textField.removeAttribute('data-pristine-minlength-message');
  textField.removeAttribute('data-pristine-maxlength-message');

  textField.setAttribute('data-pristine-required-message', (translations['textareaRequired'][useOfHash]).replace(/^[^a-zа-яё]*([a-zа-яё])/i, (letter) => letter.toUpperCase()));
  textField.setAttribute('data-pristine-minlength-message', (translations['textareaMinLength'][useOfHash]).replace(/^[^a-zа-яё]*([a-zа-яё])/i, (letter) => letter.toUpperCase()));
  textField.setAttribute('data-pristine-maxlength-message', (translations['textareaMaxLength'][useOfHash]).replace(/^[^a-zа-яё]*([a-zа-яё])/i, (letter) => letter.toUpperCase()));

  for (const key in translations) {
    const elem = document.querySelector(`.lng--${ toKebabCase(key)}`);

    if (elem && translations[key][useOfHash] !== undefined) {
      elem.textContent = '';
      elem.insertAdjacentHTML('beforeend', (translations[key][useOfHash]).replace(/^[^a-zа-яё]*([a-zа-яё])/i, (letter) => letter.toUpperCase()));
    }
  }
};

useChangeLanguage();
langMenuList.addEventListener('change', changeUrlLanguage);

export {
  pristine,
  useOfHash,
};
