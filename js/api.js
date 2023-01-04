
import {
  showAlert,
} from './util.js';

const getData = async (onSuccess) => {
  try {
    const response = await fetch('https://27.javascript.pages.academy/kekstagram-simple/data');
    if (!response.ok) {
      throw new Error('Не удалось загрузить фотографии');
    }
    const pictures = await response.json();
    onSuccess(pictures);
  } catch (error) {
    showAlert('Не удалось загрузить фотографии. Перезагрузите страницу');
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch('https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        body,
      });

    if (!response.ok) {
      throw new Error ('Не удалось отправить форму. Попробуйте ещё раз.');
    }
    onSuccess();
  } catch(error) {
    onFail(error.message);
  }
};

export {
  getData,
  sendData,
};
