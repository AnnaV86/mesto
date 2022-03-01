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
    this._element = this._getTemplate();
    this._element
      .querySelector('.element-item__delete')
      .addEventListener('click', () => {
        console.log('Start2');
        this._deleteCard();
      });
  }
  _deleteCard() {
    const cardElement = this._getTemplate();
    this._element.remove();
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
