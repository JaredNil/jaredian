/* eslint-disable no-underscore-dangle */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
	authData: undefined,
	_inited: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
		},
		initAuthData: (state) => {
			// const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
			// if (user) {
			// 	state.authData = JSON.parse(user);
			// }
			// state._inited = true;
		},
		logout: (state) => {
			// state.authData = undefined;
			// localStorage.removeItem(USER_LOCALSTORAGE_KEY);
		},
	},
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;