import axios from 'axios';
import { cardsSlice } from './slices/cards';
import { profileSlice } from './slices/profile';
import { AppDispatch, AppThunk, useAppDispatch } from './store';
import { BASE_URL } from '../utils/constants';

const api = axios.create({
  baseURL: `https://nomoreparties.co/v1/plus-cohort-6`,
  headers: {
    authorization: 'f4364e86-dc65-4e42-997a-34b37541ff0c',
  }
});

export const fetchCards = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(cardsSlice.actions.cardsFetching())
      const response = await api.get(`/cards`)
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
      const response = await api.get(`/users/me`)
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

export const deleteCardAction = (cardId: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await api.delete(`/cards/${cardId}`)
      console.log(response)
      
      dispatch(cardsSlice.actions.deleteCardAction)
      
      
      //console.log(response.data)
    } catch (e) {
      dispatch(cardsSlice.actions.deleteCardError(e as Error))
    }
  }
};




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
