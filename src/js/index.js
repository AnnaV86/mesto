import {
  initialCards,
  placePopup,
  profilePopup,
  profileName,
  profileEditing,
  profileAboutMe,
  nameText,
  aboutMe,
  elements,
  newCard,
  profilePopupForm,
  placePopupForm,
  popups,
  photoElementBig,
  photoElementBigTitle,
  imgPopup,
} from './utils/constant.js';
import { Card } from './components/Card.js';
import { config, FormValidator } from './components/FormValidator.js';
import { Section } from './components/Section.js';

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

  validForm1.resetValidation();
};

profileEditing.addEventListener('click', openProfilePopup);

const openNewCardPopup = () => {
  placePopupForm.reset();

  openPopup(placePopup);

  validForm2.resetValidation();
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
