export class UserInfo {
  constructor({ nameSelector, aboutMeSelector }) {
    this._nameSelector = nameSelector;
    this._aboutMeSelector = aboutMeSelector;
    this._name = document.querySelector(this._nameSelector);
    this._aboutMe = document.querySelector(this._aboutMeSelector);
  }
  getUserInfo() {
    const userData = {
      nameText: this._name.textContent,
      aboutMe: this._aboutMe.textContent,
    };

    return userData;
  }

  setUserInfo(userData) {
    this._name.textContent = userData.profileName;
    this._aboutMe.textContent = userData.profileAboutMe;
  }
}
