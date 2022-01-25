const popup = document.querySelector('.popup');
const profileEditing = document.querySelector('.profile__editing');
const popupClose = document.querySelector('.popup__close');
const popupSave = document.querySelector('.popup__input');
let profileName = document.querySelector('.profile__name');
let profileAboutMe = document.querySelector('.profile__about-me');
let nameText = document.querySelector('#profName');
let aboutMe = document.querySelector('#profAboutMe');

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

const cardPlaсe = document.querySelector('#element-item').content;
const elements = document.querySelector('.elements');

for (let i = 0; i <= initialCards.length - 1; i++) {
  const cardElement = cardPlaсe.querySelector('.element-item').cloneNode(true);
  cardElement.querySelector('.element-item__photo').src = initialCards[i].link;
  cardElement.querySelector('.element-item__title').textContent =
    initialCards[i].name;
  elements.append(cardElement);
  console.log(elements);
}

function profilePopupOpen() {
  nameText.value = profileName.textContent;
  aboutMe.value = profileAboutMe.textContent;
  popup.classList.add('popup_opened');
}

profileEditing.addEventListener('click', profilePopupOpen);

function profilePopupClose() {
  popup.classList.remove('popup_opened');
}

popupClose.addEventListener('click', profilePopupClose);

function popupSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameText.value;
  profileAboutMe.textContent = aboutMe.value;
  profilePopupClose();
}

popupSave.addEventListener('submit', popupSubmit);
