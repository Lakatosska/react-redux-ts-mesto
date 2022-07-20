import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCard } from "../../utils/types";

interface CardState {
  loading: boolean,
  error: string,
  card: TCard | null
};

interface CardPayload {
  card: TCard
};

const initialState: CardState = {
  loading: false,
  error: '',
  card: null
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    openPopupImageAction(state, action: PayloadAction<CardPayload>) {
      state.card = action.payload.card
    },
  }
});

export const {
  openPopupImageAction
} = cardSlice.actions;

export default cardSlice.reducer;