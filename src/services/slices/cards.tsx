import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCard } from '../../utils/types';
import { useAppDispatch } from '../store';


interface CardState {
  loading: boolean,
  error: string,
  cards: TCard[]
}

const initialState: CardState = {
  loading: false,
  error: '',
  cards: []
}

interface CardsPayload {
  cards: TCard[]
}

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
    }
  }
});

export const cardsReducer = cardsSlice.reducer;

