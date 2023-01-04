
import {
  SIZE_STEP,
  CEIL_WIDTH,
  EFFECTS,
  DEFAULT_EFFECT,
} from './variables.js';

const form = document.querySelector('.img-upload__form');
const userDialog = form.querySelector('.img-upload__preview-container');
const imageDialog = userDialog.querySelector('.img-upload__preview');
const image = imageDialog.querySelector('img');
const scaleFloorInput = userDialog.querySelector('.scale__control--smaller');
const scaleCeilInput = userDialog.querySelector('.scale__control--bigger');
const scaleResult = userDialog.querySelector('.scale__control--value');
const sliderElement = form.querySelector('.effect-level__slider');
const valueElement = form.querySelector('.effect-level__value');
const inputComment = form.querySelector('.text__description');
const defaultInput = form.querySelector('#effect-none');

let carrentWidth = CEIL_WIDTH;
let currentEffect = DEFAULT_EFFECT;

const onScaleFloorInput = () => {

  if (carrentWidth > SIZE_STEP || carrentWidth === CEIL_WIDTH) {
    carrentWidth = carrentWidth - SIZE_STEP;
    scaleResult.value = `${carrentWidth}%`;
    image.style.transform = `scale(${carrentWidth / 100})`;
  }
};

const onScaleCeilInput = () => {

  if (carrentWidth < CEIL_WIDTH || carrentWidth === SIZE_STEP) {
    carrentWidth = carrentWidth + SIZE_STEP;
    scaleResult.value = `${carrentWidth}%`;
    image.style.transform = `scale(${carrentWidth / 100})`;
  }
};

const isDefault = () => currentEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max,
  });

  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  image.style.filter = 'none';
  image.className = '';
  valueElement.value = '';

  if(isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  image.style.filter = `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  image.classList.add(`effects__preview--${currentEffect.name}`);
  valueElement.value = sliderValue;
};

const resetEffectsValue = () => {
  currentEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
updateSlider();

const resetOtherFieldsValue = () => {
  defaultInput.checked = true;
  inputComment.value = '';
  image.style.transform = 'none';
  carrentWidth = CEIL_WIDTH;
  scaleResult.value = `${CEIL_WIDTH}%`;
};

const initImageListeners = () => {

  scaleCeilInput.addEventListener('click', onScaleCeilInput);
  scaleFloorInput.addEventListener('click', onScaleFloorInput);
  form.addEventListener('change', onFormChange);
  sliderElement.noUiSlider.on('update', onSliderUpdate);
};

const destroyImageListeners = () => {

  scaleCeilInput.removeEventListener('click', onScaleCeilInput);
  scaleFloorInput.removeEventListener('click', onScaleFloorInput);
  form.removeEventListener('change', onFormChange);
  sliderElement.noUiSlider.off('update', onSliderUpdate);
};

export {
  initImageListeners,
  resetOtherFieldsValue,
  resetEffectsValue,
  destroyImageListeners,
};
