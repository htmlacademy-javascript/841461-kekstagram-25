const LIKESQUENTITYMIN = 15;
const LIKESQUENTITYMAX = 200;
const COMMENTSQUANTITYMIN = 0;
const COMMENTSQUANTITYMAX = 20;
const VALIDCOMMENTLENGTH = 140;
const PHOTOSQUANTITY = 25;
const CEIL_FILTER_VALUE = 100;
const SIZE_STEP = 25;
const CEIL_WIDTH = 100;
const ALERT_SHOW_TIME = 10000;
const IMAGE_TYPES = ['jpg', 'jpeg', 'png'];
const RANDOM_FILTERED_QUANTITY = 10;
const TIMEOUT_DELAY = 800;
const ALL_LANG = ['en', 'nl', 'de', 'fr', 'ua', 'ru'];
/*const ALL_LANG = [
  {name:'en', url:'./img/lang_gb.svg',},
  {name:'nl', url:'./img/lang_nl.svg',},
  {name:'de', url:'./img/lang_de.svg',},
  {name:'fr', url:'./img/lang_fr.svg',},
  {name:'ua', url:'./img/lang_ua.svg',},
  {name:'ru', url:'./img/lang_ru.svg',}
];*/

const descriptions = ['Водоём на плоскогорье', 'На тёплом морском берегу', 'На пляж - это туда!', 'Девушка с обложки', 'Странная еда', 'Что-то, похожее на Теслу', 'И это всё?!', 'Выглядит, как морс', 'Поймать самолёт', 'Шкафчик для обуви', 'Море где-то там', 'Вот это - точно Ауди!', 'Сюда б немножко гарнира','Ну, а потом - Суши с котом', 'Домашние сапоги', 'Самое красивое место в мире', 'Жаль, что это не видео', 'Раритет и Олд скулл', 'Удачное изобретение', 'Стандартный отель', 'Полезная еда', 'Морской закат - всегда романтика', 'Зад не видно, поэтому кто, - не понятно', 'Рок концерт, по видимому. Видео в студию!', 'Попал товарищ. Джип не спасёт'];

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name:'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name:'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',

  },
  {
    name:'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name:'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
  {
    name:'space',
    style: 'hue-rotate',
    min: 10,
    max: 90,
    step: 5,
    unit: 'deg',
  }
];

const DEFAULT_EFFECT = EFFECTS[0];

export {
  LIKESQUENTITYMIN,
  LIKESQUENTITYMAX,
  COMMENTSQUANTITYMIN,
  COMMENTSQUANTITYMAX,
  VALIDCOMMENTLENGTH,
  PHOTOSQUANTITY,
  ALERT_SHOW_TIME,
  descriptions,
  SIZE_STEP,
  CEIL_WIDTH,
  CEIL_FILTER_VALUE,
  EFFECTS,
  DEFAULT_EFFECT,
  IMAGE_TYPES,
  RANDOM_FILTERED_QUANTITY,
  TIMEOUT_DELAY,
  ALL_LANG,
};
