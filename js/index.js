const popup = document.querySelector('.popup');
const profileEditing = document.querySelector('.profile__editing');
const popupClose = document.querySelector('.popup__close');
const popupSave = document.querySelector('.popup__save');
let profileName = document.querySelector('.profile__name');
let profileAboutMe = document.querySelector('.profile__about-me');
profileName.insertAdjacentText('afterbegin', 'Жак-Ив Кусто');
profileAboutMe.insertAdjacentText('afterbegin', 'Исследователь океана');
let nameText = document.querySelector('.popup__name-text');
let aboutMe = document.querySelector('.popup__about-me');

profileEditing.addEventListener('click', function () {
  nameText.value = profileName.textContent;
  aboutMe.value = profileAboutMe.textContent;
  popup.classList.add('popup_opened');
});

popupClose.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

popupSave.addEventListener('click', (evt) => {
  evt.preventDefault();
  nameText = document.querySelector('.popup__name-text');
  aboutMe = document.querySelector('.popup__about-me');

  profileName.textContent = nameText.value;
  profileAboutMe.textContent = aboutMe.value;
  popup.classList.remove('popup_opened');
});
