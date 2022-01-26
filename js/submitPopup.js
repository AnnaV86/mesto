function popupSubmit(evt) {
  const popup = evt.target.closest('.popup');
  if (popup.classList.contains('popup__profile')) {
    evt.preventDefault();
    profileName.textContent = nameText.value;
    profileAboutMe.textContent = aboutMe.value;
    PopupClose(evt);
  } else if (popup.classList.contains('popup__place')) {
    evt.preventDefault();
    const newElement = [
      {
        name: placeName.value,
        link: placeLink.value,
      },
    ];
    PopupClose(evt);
    render(newElement);
  }
}
