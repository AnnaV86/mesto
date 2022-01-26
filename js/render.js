const render = (arr) => {
  if (arr.length === 1) {
    const cardElement = cardPlaсe
      .querySelector('.element-item')
      .cloneNode(true);
    cardElement.querySelector('.element-item__photo').src = arr[0].link;
    cardElement.querySelector('.element-item__title').textContent = arr[0].name;
    cardElement
      .querySelector('.element-item__like')
      .addEventListener('click', (evt) => buttonLike(evt));
    elements.prepend(cardElement);
    // photoElement.addEventListener('click', () => {
    //   const photo = document.querySelector('.popup__photo-img');
    //   console.log(photo);
    //   const title = document.querySelector('.popup__title-img');
    //   title.textContent = titleElement;
    //   photo.src = arr[0].link;
    //   imgPopup.classList.add('popup_opened');
    // });
    deleteCardElement();
  } else {
    for (let i = 0; i <= arr.length - 1; i++) {
      const cardElement = cardPlaсe
        .querySelector('.element-item')
        .cloneNode(true);
      const photoElement = cardElement.querySelector('.element-item__photo');
      photoElement.src = arr[i].link;
      const titleElement = (cardElement.querySelector(
        '.element-item__title'
      ).textContent = arr[i].name);
      cardElement
        .querySelector('.element-item__like')
        .addEventListener('click', (evt) => buttonLike(evt));
      photoElement.addEventListener('click', () => {
        const photo = document.querySelector('.popup__photo-img');
        console.log(photo);
        const title = document.querySelector('.popup__title-img');
        title.textContent = titleElement;
        photo.src = arr[i].link;
        imgPopup.classList.add('popup_opened');
      });
      elements.append(cardElement);
    }
  }
};
