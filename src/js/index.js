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
import { Popup } from './components/Popup.js';

const validForm1 = new FormValidator(config, profilePopup);
const validForm2 = new FormValidator(config, placePopup);

const handleCardClick = (name, link) => {
  photoElementBigTitle.textContent = name;
  photoElementBig.src = link;
  photoElementBig.alt = name;

  const card = new Popup('.popup_type_img');

  card.open();
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

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameText.value;
  profileAboutMe.textContent = aboutMe.value;

  const card = new Popup('.popup_type_profile');

  Popup.close();
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

  const card = new Popup('.popup_type_place');

  card.close();
};

placePopupForm.addEventListener('submit', handleCardFormSubmit);
