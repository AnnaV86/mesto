import { Popup } from './Popup.js';
import { api, cardsList } from '../pages/index.js';
import { Card } from '../components/Card.js';

export class PopupDeleteCard extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
  }

  _deleteAcceptance(cardDelete, card) {
    api
      .deleteCard(cardDelete._id)
      .then(() => card.deleteCard())
      .catch((err) => console.log(err))
      .finally(this.close());
  }
  setEventListener(cardDelete, card) {
    super.setEventListeners();
    this._element
      .querySelector('.popup__button')
      .addEventListener('click', () => {
        this._deleteAcceptance(cardDelete, card);
      });
  }
}
