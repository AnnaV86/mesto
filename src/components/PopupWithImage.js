import { Popup } from './Popup.js';
import { photoElementBigTitle, photoElementBig } from '../utils/constant.js';

export class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
  }

  open(name, link) {
    photoElementBigTitle.textContent = name;
    photoElementBig.src = link;
    photoElementBig.alt = name;
    super.open();
  }
}
