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
import { Api } from '../components/Api';
import './index.css';

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-39/',
  headers: {
    authorization: '948b0f51-8156-492a-af46-4004deceb58a',
    'Content-Type': 'application/json',
  },
});

const profileFormValidator = new FormValidator(config, profilePopup);
const cardFormValidator = new FormValidator(config, placePopup);

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutMeSelector: '.profile__about-me',
  avatarSelector: '.profile__avatar',
});

const popupImg = new PopupWithImage('.popup_type_img');

popupImg.setEventListeners();

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
    renderer: (cardItem) => {
      const card = createCard(cardItem);
      cardsList.addItem(card);
    },
  },
  '.elements'
);

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then((res) => {
    const [cards, userData] = res;
    userInfo.setUserInfo(userData);
    cardsList.renderItems(cards);
  })
  .catch((err) => console.log(err));

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

const profileFormPopup = new PopupWithForm({
  selectorPopup: '.popup_type_profile',
  handleFormSubmit: (userData) => {
    api
      .patchUserInfo(userData)
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .catch((err) => console.log(err))
      .finally(profileFormPopup.close());
  },
});
profileFormPopup.setEventListeners();

const openProfilePopup = () => {
  const userData = userInfo.getUserInfo();

  nameText.value = userData.name;
  aboutMe.value = userData.about;

  profileFormPopup.open();

  profileFormValidator.resetValidation();
};

profileEditing.addEventListener('click', openProfilePopup);

const cardFormPopup = new PopupWithForm({
  selectorPopup: '.popup_type_place',
  handleFormSubmit: (newCard) => {
    api
      .postNewCard(newCard)
      .then((res) => {
        console.log('пришло с сервера', res);
        cardsList.addItem(createCard(res), true);
      })
      .catch((err) => console.log(err))
      .finally(cardFormPopup.close());
  },
});

cardFormPopup.setEventListeners();

const openNewCardPopup = () => {
  placePopupForm.reset();

  cardFormPopup.open();

  cardFormValidator.resetValidation();
};

newCard.addEventListener('click', openNewCardPopup);
