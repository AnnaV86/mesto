import {
  initialCards,
  placePopup,
  profilePopup,
  profileEditing,
  nameText,
  aboutMe,
  newCard,
  profilePopupForm,
  placePopupForm,
} from '../utils/constant.js';
import { Card } from '../components/Card.js';
import { config, FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import './index.css';

const profileFormValidator = new FormValidator(config, profilePopup);
const cardFormValidator = new FormValidator(config, placePopup);
const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutMeSelector: '.profile__about-me',
});
const popupImg = new PopupWithImage('.popup_type_img');

const handleCardClick = (name, link) => {
  popupImg.open(name, link);
};

const createCard = (item) => {
  const card = new Card(item, '#element-item', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
};

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      const card = createCard(cardItem);
      cardsList.addItem(card, false);
    },
  },
  '.elements'
);

cardsList.renderItems();

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

const openProfilePopup = () => {
  const userData = userInfo.getUserInfo();

  nameText.value = userData.nameText;
  aboutMe.value = userData.aboutMe;

  const card = new Popup('.popup_type_profile');

  card.open();

  profileFormValidator.resetValidation();
};

profileEditing.addEventListener('click', openProfilePopup);

const openNewCardPopup = () => {
  placePopupForm.reset();

  const card = new Popup('.popup_type_place');

  card.open();

  cardFormValidator.resetValidation();
};

newCard.addEventListener('click', openNewCardPopup);

profilePopupForm.addEventListener('submit', () => {
  const form = new PopupWithForm({
    selectorPopup: '.popup_type_profile',
    handleFormSubmit: (userData) => {
      userInfo.setUserInfo(userData);

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
      const newElement = new Section(
        {
          items: [
            {
              name: placeName.value,
              link: placeLink.value,
            },
          ],
          renderer: (cardItem) => {
            const card = createCard(cardItem);
            card.setLikeCount;
            cardsList.addItem(card, true);
          },
        },
        '.elements'
      );

      newElement.renderItems();

      const card = new Popup('.popup_type_place');

      card.close();
    },
  });
  form.setEventListeners();
});
