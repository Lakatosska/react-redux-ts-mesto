import axios from 'axios';
import { cardsSlice } from './slices/cards';
import { AppDispatch, AppThunk, useAppDispatch } from './store';
import { apiGetCards } from '../utils/api';


export const fetchCards = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(cardsSlice.actions.cardsFetching())
      const response = await axios.get('https://nomoreparties.co/v1/plus-cohort-6/cards', {
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


/*
export const getCardsRequest = (url: string) => {
  return axios({
    method: 'GET',
    url: url,
    headers: {
      authorization: 'f4364e86-dc65-4e42-997a-34b37541ff0c',
    },
  });
}

export const getCardsData = (url: string): AppThunk => {
  return function (dispatch) {
    getCardsRequest(url)
    .then(data =>
      console.log(data.data)) 

    .catch(error => console.log(error))
  }
}
export const fetchCards = (url: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(cardsSlice.actions.fetching())
      const response = await axios.get({
        url: url,
        headers: {
          authorization: 'f4364e86-dc65-4e42-997a-34b37541ff0c',
        }
      })

      console.log(response)

      dispatch(cardsSlice.actions.fetchSuccess(
        response.data.results
      ))
    }
    catch (e) {
     dispatch(cardsSlice.actions.fetchError(e as Error))
    }
  }
}
*/


/*
console.log(fetchCards('https://nomoreparties.co/v1/plus-cohort-6/cards'))
url: '/cards',
        baseURL: 'https://nomoreparties.co/v1/plus-cohort-6',
        headers: {
          authorization: 'f4364e86-dc65-4e42-997a-34b37541ff0c',
          'Content-Type': 'application/json'
        }
*/