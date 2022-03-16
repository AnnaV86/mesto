export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }
  renderItems() {
    this._initialArray.forEach((item) => {
      this._renderer(item); // вызываем renderer, передав item
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}
