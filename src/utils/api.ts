import { BASE_URL } from "./constants";

export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6',
  headers: {
    authorization: 'f4364e86-dc65-4e42-997a-34b37541ff0c',
    'Content-Type': 'application/json'
  }
};

export const deleteCard = (cardId: any) => {
  return fetch(`${BASE_URL}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'f4364e86-dc65-4e42-997a-34b37541ff0c',
    }
  })
}

/*
GET https://nomoreparties.co/v1/cohortId/users/me 
{
  "name": "Jacques Cousteau",
  "about": "Sailor, researcher",
  "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
  "_id": "e20537ed11237f86bbb20ccb",
  "cohort": "cohort0"
} 

GET https://nomoreparties.co/v1/cohortId/cards 
[
  {
    "likes": [],
    "_id": "5d1f0611d321eb4bdcd707dd",
    "name": "Байкал",
    "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    "owner": {
      "name": "Jacques Cousteau",
      "about": "Sailor, researcher",
      "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
      "_id": "ef5f7423f7f5e22bef4ad607",
      "cohort": "local"
    },
    "createdAt": "2019-07-05T08:10:57.741Z"
  },
  {
    "likes": [],
    "_id": "5d1f064ed321eb4bdcd707de",
    "name": "Архыз",
    "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    "owner": {
      "name": "Jacques Cousteau",
      "about": "Sailor, researcher",
      "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
      "_id": "ef5f7423f7f5e22bef4ad607",
      "cohort": "local"
    },
    "createdAt": "2019-07-05T08:11:58.324Z"
  }
] 

PATCH https://nomoreparties.co/v1/cohortId/users/me 
fetch('https://nomoreparties.co/v1/cohortId/users/me', {
  method: 'PATCH',
  headers: {
    authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Marie Skłodowska Curie',
    about: 'Physicist and Chemist'
  })
});
{
  "name": "Marie Skłodowska Curie",
  "about": "Physicist and Chemist",
  "avatar": "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
  "_id": "e20537ed11237f86bbb20ccb",
  "cohort": "cohort0",
} 

POST https://nomoreparties.co/v1/cohortId/cards 
В заголовках запроса, кроме токена, необходимо отправить Content-Type, 
а в теле — JSON с двумя свойствами — name и link. 
В name должно быть название создаваемой карточки, а в link — ссылка на картинку. 
Если запрос прошёл успешно, сервер вернёт ответ с объектом новой карточки:
  {
    "likes": [],
    "_id": "5d1f0611d321eb4bdcd707dd",
    "name": "Байкал",
    "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    "owner": {
      "name": "Jacques Cousteau",
      "about": "Sailor, researcher",
      "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
      "_id": "ef5f7423f7f5e22bef4ad607",
      "cohort": "local"
    },
    "createdAt": "2019-07-05T08:10:57.741Z"
  }, 


  У каждой карточки есть свойство likes — оно содержит массив пользователей, лайкнувших карточку:
{
  "likes": [],
  ...другие данные карточки
} 

DELETE https://nomoreparties.co/v1/cohortId/cards/cardId 
Вместо cardId в URL нужно подставить параметр _id карточки, которую нужно удалить. _id каждой карточки есть в её JSON:
{
  "likes": [],
  "_id": "5d1f0611d321eb4bdcd707dd", — вот он
  ...другие данные карточки
} 
В результате запрос на удаление этой карточки должен выглядеть так:
DELETE https://nomoreparties.co/v1/cohortId/cards/5d1f0611d321eb4bdcd707dd 

Чтобы лайкнуть карточку, отправьте PUT-запрос:
PUT https://nomoreparties.co/v1/cohortId/cards/likes/cardId 
Чтобы убрать лайк, нужно отправить DELETE-запрос с тем же URL:
DELETE https://nomoreparties.co/v1/cohortId/cards/likes/cardId 
Вместо cardId в URL нужно подставить свойство _id соответствующей карточки.
В ответе придёт обновлённый JSON с карточкой. Массив лайков в нём будет уже обновлён.

PATCH https://nomoreparties.co/v1/cohortId/users/me/avatar 
В теле запроса передайте JSON с единственным свойством — avatar. 
Это свойство должно хранить ссылку на новый аватар. Если отправить не ссылку, сервер вернёт ошибку.

_________________________________


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
// данные профилей когорты с сервера - вывожу в консоль
fetch('https://nomoreparties.co/v1/plus-cohort-6/users/', {
  headers: {
    authorization: 'f4364e86-dc65-4e42-997a-34b37541ff0c'
  }
  })
  .then(res => res.json())
  .then((result) => {
    console.log(result);
});


// карточки с сервера - вывожу в консоль
fetch('https://nomoreparties.co/v1/plus-cohort-6/cards', {
  headers: {
    authorization: 'f4364e86-dc65-4e42-997a-34b37541ff0c'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
});


export const apiGetProfile = `${config.baseUrl}/users/me`;
export const apiGetCards = `${config.baseUrl}/cards`;
export const apiChangeAvatar = `${config.baseUrl}/users/me/avatar`;
export const apiLikeCards = `${config.baseUrl}/cards/likes/${'id'}`;
export const apiCards = `${config.baseUrl}/cards/${'id'}`;
*/