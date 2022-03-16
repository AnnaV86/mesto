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
  photoElementBig,
  photoElementBigTitle,
} from './utils/constant.js';
import { Card } from './components/Card.js';
import { config, FormValidator } from './components/FormValidator.js';
import { Section } from './components/Section.js';
import { Popup } from './components/Popup.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';

const validForm1 = new FormValidator(config, profilePopup);
const validForm2 = new FormValidator(config, placePopup);

const handleCardClick = (name, link) => {
  const popupImg = new PopupWithImage(name, link, '.popup_type_img');

  popupImg.open();
};

const renderCard = (card, container, isPrepend) => {
  if (isPrepend) {
    container.prepend(card);
  } else {
    container.append(card);
  }
};

const createCard = (item) => {
  console.log(item);
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

  const card = new Popup('.popup_type_profile');

  card.open();

  validForm1.resetValidation();
};

profileEditing.addEventListener('click', openProfilePopup);

const openNewCardPopup = () => {
  placePopupForm.reset();

  const card = new Popup('.popup_type_place');

  card.open();

  validForm2.resetValidation();
};

newCard.addEventListener('click', openNewCardPopup);

profilePopupForm.addEventListener('submit', () => {
  const form = new PopupWithForm({
    selectorPopup: '.popup_type_profile',
    handleFormSubmit: () => {
      profileName.textContent = nameText.value;
      profileAboutMe.textContent = aboutMe.value;

      const card = new Popup('.popup_type_profile');

      card.close();
    },
  });
  form.setEventListeners();
});

placePopupForm.addEventListener('submit', () => {
  const form = new PopupWithForm({
    selectorPopup: '.popup_type_place',
    handleFormSubmit: () => {
      const newElement = {
        name: placeName.value,
        link: placeLink.value,
      };
      const cardElement = createCard(newElement);

      renderCard(cardElement, elements, true);

      const card = new Popup('.popup_type_place');

      card.close();
    },
  });
  form.setEventListeners();
});
