const photoElementBig = document.querySelector('.popup__photo-img');
const photoElementBigTitle = document.querySelector('.popup__title-img');
const imgPopup = document.querySelector('.popup_type_img');

export class Card {
  constructor(card, cardSelector) {
    this._text = card.name;
    this._link = card.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.element-item')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector('.element-item__delete')
      .addEventListener('click', () => {
        this._deleteCard();
      });
    this._element
      .querySelector('.element-item__like')
      .addEventListener('click', () => {
        this._like();
      });
    this._element
      .querySelector('.element-item__photo')
      .addEventListener('click', () => {
        this._handleOpenPopup();
      });
  }

  _deleteCard() {
    this._element.remove();
  }

  _like() {
    this._element
      .querySelector('.element-item__like')
      .classList.toggle('like-active');
  }

  _handleOpenPopup() {
    photoElementBigTitle.textContent = this._text;
    photoElementBig.src = this._link;
    photoElementBig.alt = this._text;

    imgPopup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleClosePopup);
  }

  _handleClosePopup() {
    imgPopup.classList.remove('popup_opened');
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element-item__title').textContent =
      this._text;
    this._element.querySelector('.element-item__photo').src = this._link;
    this._element.querySelector('.element-item__photo').alt = this._text;

    return this._element;
  }
}
