const popupProfile = document.querySelector('.popup__profile');
const profileEditing = document.querySelector('.profile__editing');
const imgPopup = document.querySelector('.popup__img');
const popupClose = document.querySelectorAll('.popup__close');
const popupSave = document.querySelectorAll('.popup__input');
let profileName = document.querySelector('.profile__name');
let profileAboutMe = document.querySelector('.profile__about-me');
let nameText = document.querySelector('#profName');
let aboutMe = document.querySelector('#profAboutMe');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];
const cardPlaсe = document.querySelector('#element-item').content;
const elements = document.querySelector('.elements');
const newCard = document.querySelector('.profile__new');
const placePopup = document.querySelector('.popup__place');

const buttonLike = (evt) => {
  evt.target.classList.toggle('like-active');
};

const render = (arr) => {
  if (arr.length === 1) {
    const cardElement = cardPlaсe
      .querySelector('.element-item')
      .cloneNode(true);
    const photoElement = cardElement.querySelector('.element-item__photo');
    photoElement.src = arr[0].link;

    cardElement.querySelector('.element-item__title').textContent = arr[0].name;

    cardElement
      .querySelector('.element-item__like')
      .addEventListener('click', (evt) => buttonLike(evt));
    elements.prepend(cardElement);
    photoElement.addEventListener('click', () => {
      const photo = document.querySelector('.popup__photo-img');
      const title = document.querySelector('.popup__title-img');
      title.textContent = arr[0].name;
      photo.src = arr[0].link;
      imgPopup.classList.add('popup_opened');
    });
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
render(initialCards);

function profilePopupOpen() {
  nameText.value = profileName.textContent;
  aboutMe.value = profileAboutMe.textContent;
  popupProfile.classList.add('popup_opened');
}

function newCardPopupOpen() {
  placeName.value = '';
  placeLink.value = '';
  placePopup.classList.add('popup_opened');
}

profileEditing.addEventListener('click', profilePopupOpen);
newCard.addEventListener('click', newCardPopupOpen);

function PopupClose(evt) {
  const popup = evt.target.closest('.popup');
  popup.classList.remove('popup_opened');
}

popupClose.forEach((item) => {
  item.addEventListener('click', (evt) => {
    PopupClose(evt);
  });
});

function popupSubmit(evt) {
  const popup = evt.target.closest('.popup');
  if (popup.classList.contains('popup__profile')) {
    evt.preventDefault();
    profileName.textContent = nameText.value;
    profileAboutMe.textContent = aboutMe.value;
    PopupClose(evt);
  } else if (popup.classList.contains('popup__place')) {
    evt.preventDefault();
    const newElement = [
      {
        name: placeName.value,
        link: placeLink.value,
      },
    ];
    PopupClose(evt);
    render(newElement);
  }
}

popupSave.forEach((item) => {
  item.addEventListener('submit', (evt) => {
    popupSubmit(evt);
  });
});

const deleteCardElement = () => {
  const cardDelete = elements.querySelectorAll('.element-item__delete');
  cardDelete.forEach((item) => {
    item.addEventListener('click', function () {
      const elementDelete = item.closest('.element-item');
      elementDelete.remove();
    });
  });
};

deleteCardElement();

function imgPopupOpen() {
  imgPopup.classList.add('popup_opened');
}
