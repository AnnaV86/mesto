import {
  placePopup,
  profilePopup,
  avatarPopup,
  profileEditing,
  nameText,
  aboutMe,
  newCard,
  placePopupForm,
  avatarPopupForm,
  avatarEditing,
} from '../utils/constant.js';
import { Card } from '../components/Card.js';
import { config, FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api';
import './index.css';
import { Popup } from '../components/Popup.js';
import { PopupDeleteCard } from '../components/PopupDeleteCard.js';

export const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-39/',
  headers: {
    authorization: '948b0f51-8156-492a-af46-4004deceb58a',
    'Content-Type': 'application/json',
  },
});

const profileFormValidator = new FormValidator(config, profilePopup);
const cardFormValidator = new FormValidator(config, placePopup);
const avatarFormValidator = new FormValidator(config, avatarPopup);

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutMeSelector: '.profile__about-me',
  avatarSelector: '.profile__avatar',
});

let userId = '';

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then((res) => {
    const [cards, userData] = res;
    userId = userData._id;
    userInfo.setUserInfo(userData);
    cardsList.renderItems(cards);
  })
  .catch((err) => console.log(err));

const popupImg = new PopupWithImage('.popup_type_img');

popupImg.setEventListeners();

const popupDelete = new PopupDeleteCard('.popup_type_delete');

popupDelete.setEventListeners();

const handleCardClick = (name, link) => {
  popupImg.open(name, link);
};

const createCard = (item) => {
  const card = new Card(
    item,
    '#element-item',
    handleCardClick,
    handlePopupDelete,
    userId
  );

  function handlePopupDelete(cardDelete) {
    popupDelete.open();
    popupDelete.setEventListener(cardDelete, card);
  }

  const cardElement = card.generateCard();

  return cardElement;
};

export const cardsList = new Section(
  {
    renderer: (cardItem) => {
      const card = createCard(cardItem);
      cardsList.addItem(card);
    },
  },
  '.elements'
);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

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

const avatarFormPopup = new PopupWithForm({
  selectorPopup: '.popup_type_avatar',
  handleFormSubmit: (link) => {
    api
      .patchAvatar(link.avatarLink)
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .catch((err) => console.log(err))
      .finally(avatarFormPopup.close());
  },
});

avatarFormPopup.setEventListeners();

const openAvatarPopup = () => {
  avatarPopupForm.reset();

  avatarFormPopup.open();

  avatarFormValidator.resetValidation();
};

avatarEditing.addEventListener('click', openAvatarPopup);
