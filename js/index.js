import { initialCards } from './initialCards.js';
import { Card } from './Card.js';
import { config, FormValidator } from './FormValidator.js';

const placePopup = document.querySelector('.popup_type_place');
const profilePopup = document.querySelector('.popup_type_profile');
const profileName = document.querySelector('.profile__name');
const profileEditing = document.querySelector('.profile__editing');
const profileAboutMe = document.querySelector('.profile__about-me');
const nameText = document.querySelector('#profName');
const aboutMe = document.querySelector('#profAboutMe');
const elements = document.querySelector('.elements');
const newCard = document.querySelector('.profile__new');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const placePopupForm = placePopup.querySelector('.popup__form');
const popups = document.querySelectorAll('.popup');
const photoElementBig = document.querySelector('.popup__photo-img');
const photoElementBigTitle = document.querySelector('.popup__title-img');
const imgPopup = document.querySelector('.popup_type_img');
const validForm1 = new FormValidator(config, profilePopup);
const validForm2 = new FormValidator(config, placePopup);

const closePopup = (element) => {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
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

const handleCardClick = (name, link) => {
  photoElementBigTitle.textContent = name;
  photoElementBig.src = link;
  photoElementBig.alt = name;

  openPopup(imgPopup);
};

const renderCard = (card, container, isPrepend) => {
  if (isPrepend) {
    container.prepend(card);
  } else {
    container.append(card);
  }
};

const createCard = (item) => {
  const card = new Card(item, '#element-item', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
};

initialCards.forEach((element) => {
  const cardElement = createCard(element);

  renderCard(cardElement, elements, false);
});

validForm1.enableValidation();
validForm2.enableValidation();

const openProfilePopup = () => {
  nameText.value = profileName.textContent;
  aboutMe.value = profileAboutMe.textContent;

  openPopup(profilePopup);

  validForm1._resetValidation();
};

profileEditing.addEventListener('click', openProfilePopup);

const openNewCardPopup = () => {
  placePopupForm.reset();

  openPopup(placePopup);

  validForm2._resetValidation();
};

newCard.addEventListener('click', openNewCardPopup);

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  });
});

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameText.value;
  profileAboutMe.textContent = aboutMe.value;

  closePopup(profilePopup);
};

profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();

  const newElement = {
    name: placeName.value,
    link: placeLink.value,
  };
  const cardElement = createCard(newElement);

  renderCard(cardElement, elements, true);

  closePopup(placePopup);
};

placePopupForm.addEventListener('submit', handleCardFormSubmit);
