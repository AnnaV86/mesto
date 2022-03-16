const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

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

export {
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
};
