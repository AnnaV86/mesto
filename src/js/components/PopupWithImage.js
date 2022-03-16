import { Popup } from './Popup.js';
import { photoElementBigTitle, photoElementBig } from '../utils/constant.js';

export class PopupWithImage extends Popup {
  constructor(name, link, selectorPopup) {
    super(selectorPopup);
		this._name = name;
    this._link = link;
  }

  open() {
    photoElementBigTitle.textContent = this._name;
    photoElementBig.src = this._link;
    photoElementBig.alt = this._name;
    super.open();
  }
}
