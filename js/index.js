const imgPopup = document.querySelector('.popup__img');
const placePopup = document.querySelector('.popup__place');
const profilePopup = document.querySelector('.popup__profile');
const popupsClose = document.querySelectorAll('.popup__close');
const popupsSave = document.querySelectorAll('.popup__input');
const profileName = document.querySelector('.profile__name');
const profileEditing = document.querySelector('.profile__editing');
const profileAboutMe = document.querySelector('.profile__about-me');
const nameText = document.querySelector('#profName');
const aboutMe = document.querySelector('#profAboutMe');
const placeCard = document.querySelector('#element-item').content;
const elements = document.querySelector('.elements');
const newCard = document.querySelector('.profile__new');
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

const deleteCard = (cardElement) =>
  cardElement
    .querySelector('.element-item__delete')
    .addEventListener('click', () => {
      cardElement.remove();
    });

const listenerLike = (cardElement) =>
  cardElement
    .querySelector('.element-item__like')
    .addEventListener('click', (evt) => {
      evt.target.classList.toggle('like-active');
    });

const displayCard = (cardElement, cards, index) => {
  const photoElement = cardElement.querySelector('.element-item__photo');
  photoElement.src = cards[index].link;
  const titleElement = (cardElement.querySelector(
    '.element-item__title'
  ).textContent = cards[index].name);

  photoElement.addEventListener('click', () => {
    const photo = document.querySelector('.popup__photo-img');
    const title = document.querySelector('.popup__title-img');
    title.textContent = titleElement;
    photo.src = cards[index].link;

    imgPopup.classList.add('popup_opened');
  });
};

const renderCards = (cards) => {
  for (let index = 0; index <= cards.length - 1; index++) {
    const cardElement = placeCard
      .querySelector('.element-item')
      .cloneNode(true);

    deleteCard(cardElement);

    listenerLike(cardElement);

    displayCard(cardElement, cards, index);

    if (cards.length === 1) {
      elements.prepend(cardElement);
    } else {
      elements.append(cardElement);
    }
  }
};

renderCards(initialCards);

const openProfilePopup = () => {
  nameText.value = profileName.textContent;
  aboutMe.value = profileAboutMe.textContent;
  profilePopup.classList.add('popup_opened');
};

profileEditing.addEventListener('click', openProfilePopup);

const openNewCardPopup = () => {
  placeName.value = null;
  placeLink.value = null;
  placePopup.classList.add('popup_opened');
};

newCard.addEventListener('click', openNewCardPopup);

const closePopup = (evt) => {
  const popup = evt.target.closest('.popup');

  popup.classList.remove('popup_opened');
};

popupsClose.forEach((item) => {
  item.addEventListener('click', (evt) => {
    closePopup(evt);
  });
});

const submitPopup = (evt) => {
  const popup = evt.target.closest('.popup');

  evt.preventDefault();

  if (popup.classList.contains('popup__profile')) {
    profileName.textContent = nameText.value;
    profileAboutMe.textContent = aboutMe.value;

    closePopup(evt);
  } else if (popup.classList.contains('popup__place')) {
    const newElement = [
      {
        name: placeName.value,
        link: placeLink.value,
      },
    ];

    closePopup(evt);

    renderCards(newElement);
  }
};

popupsSave.forEach((item) => {
  item.addEventListener('submit', (evt) => {
    submitPopup(evt);
  });
});
