export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._initialArray.forEach((item) => {
      this._renderer(item); // вызываем renderer, передав item
    });
  }

  addItem(card, isPrepend) {
    if (isPrepend) {
      this._container.prepend(card);
    } else {
      this._container.append(card);
    }
  }
}
