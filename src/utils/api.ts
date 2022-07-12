//export const baseUrl = 'https://nomoreparties.co/v1/plus-cohort-6';
export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6',
  headers: {
    authorization: 'f4364e86-dc65-4e42-997a-34b37541ff0c',
    'Content-Type': 'application/json'
  }
};

export const apiGetProfile = `${config.baseUrl}/users/me`;
export const apiGetCards = `${config.baseUrl}/cards`;
export const apiChangeAvatar = `${config.baseUrl}/users/me/avatar`;
export const apiLikeCards = `${config.baseUrl}/cards/likes/${'id'}`;
export const apiCards = `${config.baseUrl}//cards/${'id'}`;



/*
export default class Api {
  constructor(options) {
    this._options = options
  }

  // функция проверки ответа
  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

  // функция загрузки данных для профиля и карточек
  getAppInfo() {
    return Promise.all([this._getInitialProfile(), this._getInitialCards()]);
  }

   // получение данных профиля с сервера
  _getInitialProfile() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: this._options.headers
    })
    .then(this._checkResponse)
  }

  // получение карточек с сервера
  _getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
      headers: this._options.headers
    })
    .then(this._checkResponse)
  }

  // редактировать данные профиля
  editUserData(name, about) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(this._checkResponse)
  }

  // добавление новой карточки
  postNewCard(name, link) {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(this._checkResponse)
  }

  // редактирование аватара
  changeAvatar(url) {
    return fetch(`${this._options.baseUrl}/users/me/avatar `, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: url
      })
    })
    .then(this._checkResponse)
  }

  // поставить лайк
  addLike(cardId) {
    return fetch(`${this._options.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._options.headers,
    })
    .then(this._checkResponse)
  }

  // удалить лайк
  deleteLike(cardId) {
    return fetch(`${this._options.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._options.headers,
    })
    .then(this._checkResponse)
  }

  // удалить карточку
  deleteCard(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._options.headers,
    })
    .then(this._checkResponse)
  }
}
*/