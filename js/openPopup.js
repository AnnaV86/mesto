function profilePopupOpen() {
  nameText.value = profileName.textContent;
  aboutMe.value = profileAboutMe.textContent;
  popupProfile.classList.add('popup_opened');
}

function newCardPopupOpen() {
  placePopup.classList.add('popup_opened');
}

function imgPopupOpen(evt, photoElement, titleElement) {
  const popup = evt.target.closest('.popup');
  imgPopup.classList.add('popup_opened');
}
