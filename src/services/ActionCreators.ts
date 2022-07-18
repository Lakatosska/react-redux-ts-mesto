import axios from 'axios';
import { cardsSlice } from './slices/cards';
import { profileSlice } from './slices/profile';
import { AppDispatch, AppThunk, useAppDispatch } from './store';
import { apiGetCards } from '../utils/api';
import { BASE_URL } from '../utils/constants';




export const fetchCards = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(cardsSlice.actions.cardsFetching())
      const response = await axios.get(`${BASE_URL}/cards`, {
        headers: {
          authorization: 'f4364e86-dc65-4e42-997a-34b37541ff0c',
        }
      })
      console.log(response)
      dispatch(cardsSlice.actions.cardsFetchingSuccess({
        cards: response.data
      }))
      console.log(response.data)
    } catch (e) {
      dispatch(cardsSlice.actions.cardsFetchingError(e as Error))
    }
  }
}

export const fetchProfile = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(profileSlice.actions.profileFetching())
      const response = await axios.get(`${BASE_URL}/users/me`, {
        headers: {
          authorization: 'f4364e86-dc65-4e42-997a-34b37541ff0c',
        }
      })
      console.log(response)
      dispatch(profileSlice.actions.profileFetchingSuccess({
        profile: response.data
      }))
      console.log(response.data)
    } catch (e) {
      dispatch(profileSlice.actions.profileFetchingError(e as Error))
    }
  }
}

export const deleteCard = (cardId: any) => {
  return fetch(`${BASE_URL}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'f4364e86-dc65-4e42-997a-34b37541ff0c',
    }
  })
}



/*
DELETE https://nomoreparties.co/v1/cohortId/cards/cardId 
Вместо cardId в URL нужно подставить параметр _id карточки, которую нужно удалить. _id каждой карточки есть в её JSON:
{
  "likes": [],
  "_id": "5d1f0611d321eb4bdcd707dd", — вот он
  ...другие данные карточки
} 
В результате запрос на удаление этой карточки должен выглядеть так:
DELETE https://nomoreparties.co/v1/cohortId/cards/5d1f0611d321eb4bdcd707dd 
*/
