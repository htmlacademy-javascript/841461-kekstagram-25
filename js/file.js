
import {
  IMAGE_TYPES,
} from './variables.js';

const imageInput = document.querySelector('[type=file]');
const imageDialog = document.querySelector('.img-upload__preview');
const imagePlaceholder = document.querySelector('img');
const thumbnails = document.querySelectorAll('.effects__preview');

const uploadFile = () => {
  const file = imageInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = IMAGE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imageDialog.innerHTML = '';
    imagePlaceholder.src = URL.createObjectURL(file);
    imagePlaceholder.classList.add('placeholder-container__item');
    imagePlaceholder.classList.add('lng--alt-of-placeholder');
    imageDialog.append(imagePlaceholder);

    for (const thumbnail of thumbnails) {
      thumbnail.innerHTML = '';
      const miniImg = document.createElement('img');
      miniImg.classList.add('effects__img');
      miniImg.src = imagePlaceholder.src;
      miniImg.style.objectFit = 'cover';
      thumbnail.style.backgroundImage = 'none';
      thumbnail.value = '';
      thumbnail.append(miniImg);
    }
  }
};

export {
  uploadFile,
};
