import { initialCards } from './initialCards.js';
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

const clearElement = (element) => {
  element
    .querySelectorAll('.popup__error')
    .forEach((item) => item.classList.remove(config.errorClass));

  element
    .querySelectorAll(config.inputSelector)
    .forEach((item) => item.classList.remove(config.inputErrorClass));
};

const closePopup = (element) => {
  element.classList.remove('popup_opened');
};

const statusButton = (element) => {
  const isInputFilled = Array.from(
    element.querySelectorAll('.popup__input')
  ).every((string) => string.value.length > 2);

  if (!isInputFilled) {
    element
      .querySelector('.popup__button')
      .classList.add(config.inactiveButtonClass);
  } else {
    element
      .querySelector('.popup__button')
      .classList.remove(config.inactiveButtonClass);
  }
};

const openPopup = (element) => {
  element.classList.add('popup_opened');
};

const popupCloseEsc = (element) => {
  const checkKeyEsc = (evt) => {
    if (evt.key === 'Escape') {
      closePopup(element);

      clearElement(element);

      document.removeEventListener('keydown', checkKeyEsc);
    }
  };

  document.addEventListener('keydown', checkKeyEsc);
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

const renderCard = (card, container, isPrepend) => {
  if (isPrepend) {
    container.prepend(card);
  } else {
    container.append(card);
  }
};

const createCard = ({ name, link }) => {
  const cardElement = placeCard.querySelector('.element-item').cloneNode(true);
  const photoElement = cardElement.querySelector('.element-item__photo');
  cardElement.querySelector('.element-item__title').textContent = name;
  photoElement.src = link;
  photoElement.alt = name;

  deleteCard(cardElement);

  listenerLike(cardElement);

  photoElement.addEventListener('click', () => {
    photoElementBigTitle.textContent = name;
    photoElementBig.src = link;
    photoElementBig.alt = name;

    openPopup(imgPopup);

    popupCloseEsc(imgPopup);
  });

  return cardElement;
};

initialCards.forEach((element) => {
  const card = createCard(element);

  renderCard(card, elements, false);
});

const openProfilePopup = () => {
  nameText.value = profileName.textContent;
  aboutMe.value = profileAboutMe.textContent;

  openPopup(profilePopup);

  statusButton(profilePopup);

  popupCloseEsc(profilePopup);
};

profileEditing.addEventListener('click', openProfilePopup);

const openNewCardPopup = () => {
  placeName.value = '';
  placeLink.value = '';

  openPopup(placePopup);

  statusButton(placePopup);

  popupCloseEsc(placePopup);
};

newCard.addEventListener('click', openNewCardPopup);

popupsClose.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const popup = evt.target.closest('.popup');

    closePopup(popup);

    clearElement(popup);
  });
});

const editingProfile = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameText.value;
  profileAboutMe.textContent = aboutMe.value;

  closePopup(profilePopup);

  clearElement(profilePopup);
};

profilePopupForm.addEventListener('submit', editingProfile);

const addingCard = (evt) => {
  evt.preventDefault();

  const newElement = {
    name: placeName.value,
    link: placeLink.value,
  };

  const card = createCard(newElement);

  renderCard(card, elements, true);

  closePopup(placePopup);
};

placePopupForm.addEventListener('submit', addingCard);
popups.forEach((item) => {
  item.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(item);

      clearElement(item);
    }
  });
});
