const message = 'Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.';

const rendomIntegerByLodash = (min, max) => _.random(_.ceil(Math.abs(min)), _.floor(Math.abs(max)));
rendomIntegerByLodash(-12.8, 3.149);


function getRandomInteger (min, max) {

  min = Math.ceil(Math.abs(min));
  max = Math.floor(Math.abs(max));

  const randomeInteger = min + Math.random() * (max + 1 - min);

  return Math.floor(randomeInteger);
}
getRandomInteger(-12.8, 3.149);


function sliceComment (text, warningQuantity) {
  text = message.textContent;
  const textQuantity = message.length;

  if (textQuantity > warningQuantity) {
    return false;
  }

  return true;
}
sliceComment(message, 140);
