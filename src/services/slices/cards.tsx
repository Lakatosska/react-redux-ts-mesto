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

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<TCard[]>) {
      state.loading = false;
      state.cards = action.payload
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
});

export const cardsReducer = cardsSlice.reducer;

