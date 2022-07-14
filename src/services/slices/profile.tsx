import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProfile } from '../../utils/types';
import { useAppDispatch } from '../store';


interface ProfileState {
  request: boolean,
  error: string,
  profile: TProfile
}

const initialState: ProfileState = {
  request: false,
  error: '',
  profile: {
    name: '',
    about: '',
    avatar: '',
    _id: '',
    cohort: ''
  }
}

interface ProfilePayload {
  profile: TProfile
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileFetching(state) {
      state.request = true;
    },
    profileFetchingSuccess(state, action: PayloadAction<ProfilePayload>) {
      state.request = false;
      state.error = '';
      state.profile = action.payload.profile
    },
    profileFetchingError(state, action: PayloadAction<Error>) {
      state.request = false;
      state.error = action.payload.message;
    }
  }
});

export const profileReducer = profileSlice.reducer;
