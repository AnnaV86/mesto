function PopupClose(evt) {
  const popup = evt.target.closest('.popup');
  popup.classList.remove('popup_opened');
}
