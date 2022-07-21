import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cardsReducer from './slices/cards';
import profileReducer from './slices/profile';
import cardReducer from './slices/card';
import { ThunkAction } from '@reduxjs/toolkit';
//import { cardsSlice.actions }

export const rootReducer = combineReducers({
  cardsReducer,
  profileReducer,
  cardReducer
  
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  })
});

export type TRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export type TActions =
  | any

export type AppThunk = ThunkAction<void, TRootState, unknown, TActions>;
