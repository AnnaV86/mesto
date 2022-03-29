(()=>{"use strict";var e=document.querySelector(".popup_type_place"),t=document.querySelector(".popup_type_profile"),n=(document.querySelector(".profile__name"),document.querySelector(".profile__editing")),r=(document.querySelector(".profile__about-me"),document.querySelector("#profName")),o=document.querySelector("#profAboutMe"),i=(document.querySelector(".elements"),document.querySelector(".profile__new")),a=(t.querySelector(".popup__form"),e.querySelector(".popup__form")),u=(document.querySelectorAll(".popup"),document.querySelector(".popup__photo-img")),c=document.querySelector(".popup__title-img");function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".popup_type_img");var s=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._text=t.name,this._link=t.link,this._cardSelector=n,this._handleCardClick=r,this._card=t}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element-item").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element-item__delete").addEventListener("click",(function(){e._deleteCard()})),this._likeButton.addEventListener("click",(function(){e._like()})),this._photo.addEventListener("click",(function(){e._handleCardClick(e._text,e._link)}))}},{key:"_deleteCard",value:function(){this._element.remove(),this._card=null}},{key:"_like",value:function(){this._likeButton.classList.toggle("like-active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".element-item__title").textContent=this._text,this._photo=this._element.querySelector(".element-item__photo"),this._photo.src=this._link,this._photo.alt=this._text,this._likeButton=this._element.querySelector(".element-item__like"),this._setEventListeners(),this._element}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=n,this._form=this._element.querySelector(t.formSelector),this._inputList=Array.from(this._form.querySelectorAll(t.inputSelector)),this._buttonSubmit=this._form.querySelector(t.submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonSubmit.classList.add(f.inactiveButtonClass),this._buttonSubmit.disabled=!0):(this._buttonSubmit.classList.remove(f.inactiveButtonClass),this._buttonSubmit.disabled=!1)}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(f.inputErrorClass),n.textContent=t,n.classList.add(f.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(f.inputErrorClass),t.classList.remove(f.errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?this._container.prepend(e):this._container.append(e)}}],n&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectorPopup=t,this._element=document.querySelector(t),this._form=document.querySelector(".popup__form"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._element.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._element.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close")&&e.close()}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e,t){c.textContent=e,u.src=t,u.alt=e,S(E(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function I(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e){var t,n=e.selectorPopup,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._handleSubmit=t._handleSubmit.bind(x(t)),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._element.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this._handleFormSubmit(this._getInputValues())}},{key:"setEventListeners",value:function(){this._element.addEventListener("submit",this._handleSubmit),L(R(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){L(R(a.prototype),"close",this).call(this),this._form.reset(),this._form.removeEventListener("submit",this._handleSubmit)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._aboutMeSelector=r,this._avatarSelector=o,this._name=document.querySelector(this._nameSelector),this._about=document.querySelector(this._aboutMeSelector),this._avatar=document.querySelector(this._avatarSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._name.textContent=n,this._about.textContent=e,this._avatar.src=t}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://nomoreparties.co/v1/cohort-39/",headers:{authorization:"948b0f51-8156-492a-af46-4004deceb58a","Content-Type":"application/json"}}),M=new h(f,t),F=new h(f,e),N=new U({nameSelector:".profile__name",aboutMeSelector:".profile__about-me",avatarSelector:".profile__avatar"}),z=new j(".popup_type_img");z.setEventListeners();var $=function(e,t){z.open(e,t)},G=function(e){return new s(e,"#element-item",$).generateCard()},H=new d({renderer:function(e){var t=G(e);H.addItem(t)}},".elements");H.renderItems([{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}]),Promise(D.getUserInfo()).then((function(e){console.log(e);var t,n,r=(n=3,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1],a=r[2];N.setUserInfo(o,i,a)})).catch((function(e){return console.log(e)})),M.enableValidation(),F.enableValidation();var J=new B({selectorPopup:".popup_type_profile",handleFormSubmit:function(e){N.setUserInfo(e),J.close()}});J.setEventListeners(),n.addEventListener("click",(function(){var e=N.getUserInfo();r.value=e.name,o.value=e.about,J.open(),M.resetValidation()}));var K=new B({selectorPopup:".popup_type_place",handleFormSubmit:function(){var e={name:placeName.value,link:placeLink.value};H.addItem(G(e),!0),K.close()}});K.setEventListeners(),i.addEventListener("click",(function(){a.reset(),K.open(),F.resetValidation()}))})();