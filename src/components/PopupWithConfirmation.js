import { Popup } from './Popup.js';
export class PopupWithConfirmation extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
  }

  deleteAccept(deleteCard) {
    this._deleteCard = deleteCard;
  }

  setEventListeners() {
    super.setEventListeners();
    this._element.addEventListener('submit', (e) => {
      e.preventDefault();
      this._deleteCard();
    });
  }
}
