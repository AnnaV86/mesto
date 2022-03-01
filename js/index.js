import { initialCards } from './initialCards.js';
import { Card } from './card.js';
import { config } from './validate.js';

const imgPopup = document.querySelector('.popup_type_img');
const placePopup = document.querySelector('.popup_type_place');
const profilePopup = document.querySelector('.popup_type_profile');
const popupsClose = document.querySelectorAll('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileEditing = document.querySelector('.profile__editing');
const profileAboutMe = document.querySelector('.profile__about-me');
const nameText = document.querySelector('#profName');
const aboutMe = document.querySelector('#profAboutMe');
const placeCard = document.querySelector('#element-item').content;
const elements = document.querySelector('.elements');
const newCard = document.querySelector('.profile__new');
const photoElementBig = document.querySelector('.popup__photo-img');
const photoElementBigTitle = document.querySelector('.popup__title-img');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const placePopupForm = placePopup.querySelector('.popup__form');
const popups = document.querySelectorAll('.popup');

const clearPopup = (popup) => {
  popup
    .querySelectorAll('.popup__error')
    .forEach((item) => item.classList.remove(config.errorClass));

  popup
    .querySelectorAll(config.inputSelector)
    .forEach((item) => item.classList.remove(config.inputErrorClass));
};

const closePopup = (element) => {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

const checkingStatusButton = (element) => {
  const buttonElement = element.querySelector('.popup__button');
  const isInputFilled = Array.from(
    element.querySelectorAll('.popup__input')
  ).every((string) => string.value.length > 2);

  if (!isInputFilled) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const openPopup = (element) => {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

// const deleteCard = (cardElement) =>
//   cardElement
//     .querySelector('.element-item__delete')
//     .addEventListener('click', () => {
//       cardElement.remove();
//     });

const listenerLike = (cardElement) =>
  cardElement
    .querySelector('.element-item__like')
    .addEventListener('click', (evt) => {
      evt.target.classList.toggle('like-active');
    });

const renderCard = (card, container, isPrepend) => {
  if (isPrepend) {
    container.prepend(card);
  } else {
    container.append(card);
  }
};

// const createCard = ({ name, link }) => {
//   // const photoElement = cardElement.querySelector('.element-item__photo');
//   // cardElement.querySelector('.element-item__title').textContent = name;
//   // photoElement.src = link;
//   // photoElement.alt = name;

//   deleteCard(cardElement);

//   listenerLike(cardElement);

//   photoElement.addEventListener('click', () => {
//     photoElementBigTitle.textContent = name;
//     photoElementBig.src = link;
//     photoElementBig.alt = name;

//     openPopup(imgPopup);
//   });

//   return cardElement;
// };

initialCards.forEach((element) => {
  const card = new Card(element, '#element-item');
  const cardElement = card.generateCard();

  renderCard(cardElement, elements, false);
});

const openProfilePopup = () => {
  nameText.value = profileName.textContent;
  aboutMe.value = profileAboutMe.textContent;

  openPopup(profilePopup);

  checkingStatusButton(profilePopup);

  clearPopup(profilePopup);
};

profileEditing.addEventListener('click', openProfilePopup);

const openNewCardPopup = () => {
  placeName.value = '';
  placeLink.value = '';

  openPopup(placePopup);

  checkingStatusButton(placePopup);

  clearPopup(placePopup);
};

newCard.addEventListener('click', openNewCardPopup);

popupsClose.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const popup = evt.target.closest('.popup');

    closePopup(popup);
  });
});

const editingProfile = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameText.value;
  profileAboutMe.textContent = aboutMe.value;

  closePopup(profilePopup);
};

profilePopupForm.addEventListener('submit', editingProfile);

const addingCard = (evt) => {
  evt.preventDefault();

  const newElement = {
    name: placeName.value,
    link: placeLink.value,
  };

  const card = new Card(newElement, '#element-item');
  const cardElement = card.generateCard();

  renderCard(cardElement, elements, true);

  closePopup(placePopup);
};

placePopupForm.addEventListener('submit', addingCard);
popups.forEach((item) => {
  item.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(item);
    }
  });
});
