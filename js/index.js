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
const cardPlace = document.querySelector('#element-item').content;
const elements = document.querySelector('.elements');
const newCard = document.querySelector('.profile__new');
const placePopup = document.querySelector('.popup__place');

const cardDelete = (cardElement) =>
  cardElement
    .querySelector('.element-item__delete')
    .addEventListener('click', () => {
      cardElement.remove();
    });

const likeListener = (cardElement) =>
  cardElement
    .querySelector('.element-item__like')
    .addEventListener('click', (evt) => {
      evt.target.classList.toggle('like-active');
    });

const cardDisplay = (cardElement, arr, index) => {
  const photoElement = cardElement.querySelector('.element-item__photo');
  photoElement.src = arr[index].link;
  const titleElement = (cardElement.querySelector(
    '.element-item__title'
  ).textContent = arr[index].name);

  photoElement.addEventListener('click', () => {
    const photo = document.querySelector('.popup__photo-img');
    const title = document.querySelector('.popup__title-img');
    title.textContent = titleElement;
    photo.src = arr[index].link;

    imgPopup.classList.add('popup_opened');
  });
};

const render = (arr) => {
  for (let index = 0; index <= arr.length - 1; index++) {
    const cardElement = cardPlace
      .querySelector('.element-item')
      .cloneNode(true);

    cardDelete(cardElement);

    likeListener(cardElement);

    cardDisplay(cardElement, arr, index);

    if (arr.length === 1) {
      elements.prepend(cardElement);
    } else {
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

profileEditing.addEventListener('click', profilePopupOpen);

function newCardPopupOpen() {
  placeName.value = '';
  placeLink.value = '';
  placePopup.classList.add('popup_opened');
}

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

  evt.preventDefault();

  if (popup.classList.contains('popup__profile')) {
    profileName.textContent = nameText.value;
    profileAboutMe.textContent = aboutMe.value;

    PopupClose(evt);
  } else if (popup.classList.contains('popup__place')) {
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

function imgPopupOpen() {
  imgPopup.classList.add('popup_opened');
}
