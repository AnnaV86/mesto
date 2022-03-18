import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({ selectorPopup, handleFormSubmit }) {
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _getInputValues() {
    this._inputList = this._element.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
  }
  setEventListeners() {
    this._element.addEventListener('submit', this._handleSubmit);
    super.setEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
    this._form.removeEventListener('submit', this._handleSubmit);
  }
}
