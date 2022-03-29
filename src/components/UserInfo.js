export class UserInfo {
  constructor({ name, about, avatar }) {
    this._nameSelector = name;
    this._aboutMeSelector = about;
    this._avatarSelector = avatar;
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

  setUserInfo(name, about, avatar) {
    console.log(this._name, this._about, this._avatar);
    console.log(name, about, avatar);
    this._name.textContent = name;
    this._about.textContent = about;
    this._avatar.src = avatar;
  }
}
