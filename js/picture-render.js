
const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureListFragment = document.createDocumentFragment();

const createPictureList = (pictures) => {
  pictures.forEach(({url, likes, comments, description}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureImg = pictureElement.querySelector('.picture__img');
    pictureImg.src = url;
    pictureImg.alt = description;
    const pictureInfoContainer = pictureElement.querySelector('.picture__info');
    const pictureComments = pictureInfoContainer.querySelector('.picture__comments');
    pictureComments.textContent = comments;
    const pictureLikes = pictureInfoContainer.querySelector('.picture__likes');
    pictureLikes.textContent = likes;
    pictureInfoContainer.appendChild(pictureComments);
    pictureInfoContainer.appendChild(pictureLikes);
    pictureListFragment.appendChild(pictureElement);
  });
  pictureContainer.appendChild(pictureListFragment);

};


export {
  createPictureList,
};
