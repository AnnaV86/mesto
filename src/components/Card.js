export class Card {
  constructor(card, cardSelector, handleCardClick) {
    this._text = card.name;
    this._link = card.link;
    this._like = card.likes.length;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._card = card;
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
    this._likeButton.addEventListener('click', () => {
      this._like();
    });
    this._photo.addEventListener('click', () => {
      this._handleCardClick(this._text, this._link);
    });
  }

  _deleteCard() {
    this._element.remove();
    this._card = null;
  }

  _like() {
    this._likeButton.classList.toggle('like-active');
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element-item__title').textContent =
      this._text;
    this._photo = this._element.querySelector('.element-item__photo');
    this._photo.src = this._link;
    this._photo.alt = this._text;
    this._likeButton = this._element.querySelector('.element-item__like');
    this._element.querySelector('.like-count').textContent = this._like;
    this._setEventListeners();

    return this._element;
  }
}
