import {
  placePopup,
  profilePopup,
  avatarPopup,
  profileEditing,
  nameText,
  aboutMe,
  newCard,
  avatarEditing,
  photoElementBigTitle,
  photoElementBig,
} from '../utils/constant.js';
import { Card } from '../components/Card.js';
import { config, FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api';
import './index.css';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-39/',
  headers: {
    authorization: '948b0f51-8156-492a-af46-4004deceb58a',
    'Content-Type': 'application/json',
  },
});

const profileFormValidator = new FormValidator(config, profilePopup);
const cardFormValidator = new FormValidator(config, placePopup);
const avatarFormValidator = new FormValidator(config, avatarPopup);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

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

const popupImg = new PopupWithImage(
  '.popup_type_img',
  photoElementBigTitle,
  photoElementBig
);

popupImg.setEventListeners();

const deleteCard = (cardDelete, element) => {
  api
    .deleteCard(cardDelete._id)
    .then(() => {
      element.remove();
      cardDelete = null;
    })
    .then(() => popupDelete.close())
    .catch((err) => console.log(err));
};

const popupDelete = new PopupWithConfirmation('.popup_type_delete');

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
    userId,
    putLike,
    deleteLike
  );

  function handlePopupDelete(cardDelete, element) {
    popupDelete.open();
    popupDelete.callBack(() => {
      deleteCard(cardDelete, element);
    });
  }
  function putLike(card, likeCount, likeButton) {
    api
      .putLike(card._id)
      .then((res) => (likeCount.textContent = res.likes.length))
      .then(() => likeButton.classList.add('like-active'))
      .catch((err) => console.log(err));
  }

  function deleteLike(card, likeCount, likeButton) {
    api
      .deleteLike(card._id)
      .then((res) => (likeCount.textContent = res.likes.length))
      .then(() => likeButton.classList.remove('like-active'))
      .catch((err) => console.log(err));
  }

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

const profileFormPopup = new PopupWithForm({
  selectorPopup: '.popup_type_profile',
  handleFormSubmit: (userData, element) => {
    profileFormPopup.renderLoading('Сохранение...');
    api
      .patchUserInfo(userData)
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .then(() => profileFormPopup.renderLoading())
      .then(() => profileFormPopup.close())
      .catch((err) => console.log(err));
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
  handleFormSubmit: (newCard, element) => {
    cardFormPopup.renderLoading('Сохранение...');
    api
      .postNewCard(newCard)
      .then((res) => {
        cardsList.addItem(createCard(res), true);
      })
      .then(() => cardFormPopup.renderLoading())
      .then(() => cardFormPopup.close())
      .catch((err) => console.log(err));
  },
});

cardFormPopup.setEventListeners();

const openNewCardPopup = () => {
  cardFormPopup.open();

  cardFormValidator.resetValidation();
};

newCard.addEventListener('click', openNewCardPopup);

const avatarFormPopup = new PopupWithForm({
  selectorPopup: '.popup_type_avatar',
  handleFormSubmit: (link, element) => {
    avatarFormPopup.renderLoading('Сохранение...');
    api
      .patchAvatar(link.avatarLink)
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .then(() => avatarFormPopup.renderLoading())
      .then(() => avatarFormPopup.close())
      .catch((err) => console.log(err));
  },
});

avatarFormPopup.setEventListeners();

const openAvatarPopup = () => {
  avatarFormPopup.open();

  avatarFormValidator.resetValidation();
};

avatarEditing.addEventListener('click', openAvatarPopup);
