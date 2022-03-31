import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({ selectorPopup, handleFormSubmit }) {
    super(selectorPopup);
    this._popupElement = document.querySelector(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
    this._handleSubmit = this._handleSubmit.bind(this);
    this._inputList = this._element.querySelectorAll('.popup__input');
    this._button = this._element.querySelector('.popup__button');
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues(), this._popupElement);
  }
  setEventListeners() {
    this._element.addEventListener('submit', this._handleSubmit);
    super.setEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(buttonText = 'Coхранить') {
    this._button.textContent = buttonText;
  }
}
