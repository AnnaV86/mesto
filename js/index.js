import { initialCards } from './initialCards.js';

const imgPopup = document.querySelector('.popup_type_img');
const placePopup = document.querySelector('.popup_type_place');
const profilePopup = document.querySelector('.popup_type_profile');
const popupsClose = document.querySelectorAll('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileEditing = document.querySelector('.profile__editing');
const profileAboutMe = document.querySelector('.profile__about-me');
const nameText = document.querySelector('#profName');
const aboutMe = document.querySelector('#profAboutMe');
const placeCard = document.querySelector('#element-item').content;
const elements = document.querySelector('.elements');
const newCard = document.querySelector('.profile__new');
const photoElementBig = document.querySelector('.popup__photo-img');
const photoElementBigTitle = document.querySelector('.popup__title-img');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const placePopupForm = placePopup.querySelector('.popup__form');

const togglePopup = (element) => {
  element.classList.toggle('popup_opened');
};

const deleteCard = (cardElement) =>
  cardElement
    .querySelector('.element-item__delete')
    .addEventListener('click', () => {
      cardElement.remove();
    });

const listenerLike = (cardElement) =>
  cardElement
    .querySelector('.element-item__like')
    .addEventListener('click', (evt) => {
      evt.target.classList.toggle('like-active');
    });

const renderCard = (card, container, isPrepend) => {
  if (isPrepend) {
    container.prepend(card);
  } else {
    container.append(card);
  }
};

const createCard = ({ name, link }) => {
  const cardElement = placeCard.querySelector('.element-item').cloneNode(true);
  cardElement.querySelector('.element-item__title').textContent = name;
  const photoElement = cardElement.querySelector('.element-item__photo');
  photoElement.src = link;
  photoElement.alt = name;

  deleteCard(cardElement);

  listenerLike(cardElement);

  photoElement.addEventListener('click', () => {
    photoElementBigTitle.textContent = name;
    photoElementBig.src = link;
    photoElementBig.alt = name;

    togglePopup(imgPopup);
  });

  return cardElement;
};

initialCards.forEach((element) => {
  const card = createCard(element);

  renderCard(card, elements, false);
});

const openProfilePopup = () => {
  nameText.value = profileName.textContent;
  aboutMe.value = profileAboutMe.textContent;

  togglePopup(profilePopup);
};

profileEditing.addEventListener('click', openProfilePopup);

const openNewCardPopup = () => {
  placeName.value = '';
  placeLink.value = '';

  togglePopup(placePopup);
};

newCard.addEventListener('click', openNewCardPopup);

popupsClose.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const popup = evt.target.closest('.popup');

    togglePopup(popup);
  });
});

const editingProfile = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameText.value;
  profileAboutMe.textContent = aboutMe.value;

  togglePopup(profilePopup);
};

const addingCard = (evt) => {
  evt.preventDefault();

  const newElement = {
    name: placeName.value,
    link: placeLink.value,
  };

  const card = createCard(newElement);

  renderCard(card, elements, true);

  togglePopup(placePopup);
};

const popups = document.querySelectorAll('.popup');
popups.forEach((item) =>
  item.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      togglePopup(item);
    }
  })
);

profilePopupForm.addEventListener('submit', editingProfile);
placePopupForm.addEventListener('submit', addingCard);
