import {
  initialCards,
  placePopup,
  profilePopup,
  profileEditing,
  nameText,
  aboutMe,
  newCard,
  placePopupForm,
} from '../utils/constant.js';
import { Card } from '../components/Card.js';
import { config, FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
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

const profileFormPopup = new PopupWithForm({
  selectorPopup: '.popup_type_profile',
  handleFormSubmit: (userData) => {
    userInfo.setUserInfo(userData);
    profileFormPopup.close();
  },
});
profileFormPopup.setEventListeners();

const openProfilePopup = () => {
  const userData = userInfo.getUserInfo();

  nameText.value = userData.nameText;
  aboutMe.value = userData.aboutMe;

  profileFormPopup.open();

  profileFormValidator.resetValidation();
};

profileEditing.addEventListener('click', openProfilePopup);

const cardFormPopup = new PopupWithForm({
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
          cardsList.addItem(card, true);
        },
      },
      '.elements'
    );

    newElement.renderItems();

    cardFormPopup.close();
  },
});

cardFormPopup.setEventListeners();

const openNewCardPopup = () => {
  placePopupForm.reset();

  cardFormPopup.open();

  cardFormValidator.resetValidation();
};

newCard.addEventListener('click', openNewCardPopup);
