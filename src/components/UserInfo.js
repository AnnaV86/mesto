export class UserInfo {
  constructor({ nameSelector, aboutMeSelector, avatarSelector }) {
    this._nameSelector = nameSelector;
    this._aboutMeSelector = aboutMeSelector;
    this._avatarSelector = avatarSelector;
    this._name = document.querySelector(this._nameSelector);
    this._about = document.querySelector(this._aboutMeSelector);
    this._avatar = document.querySelector(this._avatarSelector);
  }
  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      about: this._about.textContent,
    };

    return userData;
  }

  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._about.textContent = userData.about;
    this._avatar.src = userData.avatar;
  }
}
