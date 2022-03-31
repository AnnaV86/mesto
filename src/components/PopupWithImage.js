import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(selectorPopup, photoElementBigTitle, photoElementBig) {
    super(selectorPopup);
    this._photoBigTitle = photoElementBigTitle;
    this._photoBig = photoElementBig;
  }

  open(name, link) {
    this._photoBigTitle.textContent = name;
    this._photoBig.src = link;
    this._photoBig.alt = name;
    super.open();
  }
}
