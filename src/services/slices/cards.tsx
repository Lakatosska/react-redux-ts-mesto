import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCard } from '../../utils/types';
import { useAppDispatch } from '../store';


interface CardsState {
  loading: boolean,
  error: string,
  cards: TCard[]
};

const initialState: CardsState = {
  loading: false,
  error: '',
  cards: []
};

interface CardsPayload {
  cards: TCard[]
};

interface CardPayload {
  card: TCard
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    cardsFetching(state) {
      state.loading = true;
    },
    cardsFetchingSuccess(state, action: PayloadAction<CardsPayload>) {
      state.loading = false;
      state.error = '';
      state.cards = action.payload.cards
    },
    cardsFetchingError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
    deleteCardAction(state, action: PayloadAction<CardPayload>) {
      state.cards = [...state.cards].filter(item => item._id !== action.payload.card._id)
    },
    deleteCardError(state, action: PayloadAction<Error>) {
      state.error = action.payload.message;
    },   
  }
});

export const {
  cardsFetching,
  cardsFetchingSuccess,
  cardsFetchingError,
  deleteCardAction,
  deleteCardError
} = cardsSlice.actions;

export default cardsSlice.reducer;

