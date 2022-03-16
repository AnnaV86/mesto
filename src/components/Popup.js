export class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
    this._element = document.querySelector(selectorPopup);
  }

  open() {
    this._element.classList.add('popup_opened');
    this._setEventListeners();
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  close() {
    this._element.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _setEventListeners() {
    this._element.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
      if (evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });
  }
}