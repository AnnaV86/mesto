import { initialCards } from './initialCards.js';

const imgPopup = document.querySelector('.popup_type_img');
const placePopup = document.querySelector('.popup_type_place');
const profilePopup = document.querySelector('.popup_type_profile');
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

const togglePopup = (element) => {
  element.classList.toggle('popup_opened');
};

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

const displayCard = (cardElement, card) => {
  const photoElement = cardElement.querySelector('.element-item__photo');
  const cardName = card.name;
  photoElement.src = card.link;
  photoElement.alt = cardName;
  const titleElement = (cardElement.querySelector(
    '.element-item__title'
  ).textContent = cardName);

  photoElement.addEventListener('click', () => {
    const photo = document.querySelector('.popup__photo-img');
    const title = document.querySelector('.popup__title-img');
    title.textContent = titleElement;
    photo.src = card.link;
    photo.alt = card.name;

    togglePopup(imgPopup);
  });
};

const renderCards = (cards) => {
  cards.forEach((card) => {
    const cardElement = placeCard
      .querySelector('.element-item')
      .cloneNode(true);

    deleteCard(cardElement);

    listenerLike(cardElement);

    displayCard(cardElement, card);

    if (cards.length === 1) {
      elements.prepend(cardElement);
    } else {
      elements.append(cardElement);
    }
  });
};

renderCards(initialCards);

const openProfilePopup = () => {
  nameText.value = profileName.textContent;
  aboutMe.value = profileAboutMe.textContent;
  togglePopup(profilePopup);
};

profileEditing.addEventListener('click', openProfilePopup);

const openNewCardPopup = () => {
  placeName.value = null;
  placeLink.value = null;
  togglePopup(placePopup);
};

newCard.addEventListener('click', openNewCardPopup);

popupsClose.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const popup = evt.target.closest('.popup');
    togglePopup(popup);
  });
});

const submitPopup = (evt) => {
  const popup = evt.target.closest('.popup');

  evt.preventDefault();

  if (popup.classList.contains('popup_type_profile')) {
    profileName.textContent = nameText.value;
    profileAboutMe.textContent = aboutMe.value;
    togglePopup(popup);
  } else if (popup.classList.contains('popup_type_place')) {
    const newElement = [
      {
        name: placeName.value,
        link: placeLink.value,
      },
    ];
    togglePopup(popup);

    renderCards(newElement);
  }
};

popupsSave.forEach((item) => {
  item.addEventListener('submit', (evt) => {
    submitPopup(evt);
  });
});
