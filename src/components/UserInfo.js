export class UserInfo {
  constructor({ name, about, avatar }) {
    this._name = name;
    this._aboutMeSelector = about;
    this._avatarSelector = avatar;
    this._name = document.querySelector(this._nameSelector);
    this._aboutMe = document.querySelector(this._aboutMeSelector);
    this._avatar = document.querySelector(this._avatarSelector);
  }
  getUserInfo() {
    const userData = {
      nameText: this._name.textContent,
      aboutMe: this._aboutMe.textContent,
    };

    return userData;
  }

  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._aboutMe.textContent = userData.about;
    this._avatar.src = userData.avatar;
  }
}
