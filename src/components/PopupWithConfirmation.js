import { Popup } from './Popup.js';
import { api } from '../pages/index.js';

export class PopupWithConfirmation extends Popup {
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
