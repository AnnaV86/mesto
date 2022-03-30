const placePopup = document.querySelector('.popup_type_place');
const profilePopup = document.querySelector('.popup_type_profile');
const avatarPopup = document.querySelector('.popup_type_avatar');
const profileName = document.querySelector('.profile__name');
const profileEditing = document.querySelector('.profile__editing');
const profileAboutMe = document.querySelector('.profile__about-me');
const nameText = document.querySelector('#profName');
const aboutMe = document.querySelector('#profAboutMe');
const elements = document.querySelector('.elements');
const newCard = document.querySelector('.profile__new');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const placePopupForm = placePopup.querySelector('.popup__form');
const avatarPopupForm = avatarPopup.querySelector('.popup__form');
const popups = document.querySelectorAll('.popup');
const photoElementBig = document.querySelector('.popup__photo-img');
const photoElementBigTitle = document.querySelector('.popup__title-img');
const imgPopup = document.querySelector('.popup_type_img');
const avatarEditing = document.querySelector('.profile__avatar-editing');

export {
  placePopup,
  profilePopup,
  avatarPopup,
  profileName,
  profileEditing,
  profileAboutMe,
  nameText,
  aboutMe,
  elements,
  newCard,
  profilePopupForm,
  placePopupForm,
  avatarPopupForm,
  popups,
  photoElementBig,
  photoElementBigTitle,
  imgPopup,
  avatarEditing,
};
