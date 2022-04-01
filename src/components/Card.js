export class Card {
  constructor(
    card,
    cardSelector,
    handleCardClick,
    handlePopupDelete,
    userId,
    putLike,
    deleteLike,
    deleteCard,
    handleLike
  ) {
    this._userId = userId;
    this._text = card.name;
    this._link = card.link;
    this._likeLength = card.likes.length;
    this._myLike = card.likes.filter((like) => like._id === userId).length > 0;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handlePopupDelete = handlePopupDelete;
    this._card = card;
    this._owner = card.owner._id === userId;
    this._putLike = putLike;
    this._deleteLike = deleteLike;
    this._deleteCard = deleteCard;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.element-item')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    if (this._owner) {
      this._buttonDelete.addEventListener('click', () =>
        this._handlePopupDelete(this._card, this._element)
      );
    }
    this._likeButton.addEventListener('click', () => {
      this._like();
    });
    this._photo.addEventListener('click', () => {
      this._handleCardClick(this._text, this._link);
    });
  }

  addActiveLike(card) {
    this._likeCount.textContent = card.likes.length;
    this._likeButton.classList.add('like-active');
  }

  deleteActiveLike(card) {
    this._likeCount.textContent = card.likes.length;
    this._likeButton.classList.remove('like-active');
  }
  _like() {
    if (this._likeButton.classList.contains('like-active')) {
      this._deleteLike(this);
    } else {
      this._putLike(this);
    }
  }
  generateCard() {
    this._element = this._getTemplate();
    this._likeCount = this._element.querySelector('.like-count');
    this._buttonDelete = this._element.querySelector('.element-item__delete');
    this._likeButton = this._element.querySelector('.element-item__like');
    this._element.querySelector('.element-item__title').textContent =
      this._text;
    this._photo = this._element.querySelector('.element-item__photo');
    this._photo.src = this._link;
    this._photo.alt = this._text;

    if (this._myLike) {
      this._likeButton.classList.add('like-active');
    }
    this._likeCount.textContent = this._likeLength;

    if (this._owner) {
      this._buttonDelete.classList.add('element-item__delete_type_active');
    }
    this._setEventListeners();

    return this._element;
  }
}
