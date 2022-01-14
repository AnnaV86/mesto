const popup = document.querySelector('.popup');
const profileEditing = document.querySelector('.profile__editing');
const popupClose = document.querySelector('.popup__close');
const popupSave = document.querySelector('.popup__input');
let profileName = document.querySelector('.profile__name');
let profileAboutMe = document.querySelector('.profile__about-me');
let nameText = document.querySelector('#profName');
let aboutMe = document.querySelector('#profAboutMe');

function popupOpen() {
  nameText.value = profileName.textContent;
  aboutMe.value = profileAboutMe.textContent;
  popup.classList.add('popup_opened');
}

profileEditing.addEventListener('click', popupOpen);

function popupClose() {
  popup.classList.remove('popup_opened');
}

popupClose.addEventListener('click', popupClose);

function popupSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameText.value;
  profileAboutMe.textContent = aboutMe.value;
  popupClose();
}

popupSave.addEventListener('submit', popupSubmit);
