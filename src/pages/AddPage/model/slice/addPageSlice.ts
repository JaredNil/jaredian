/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';

import { AddPageSchema } from '../types/addPageSchema';

const initialState: AddPageSchema = {
	isLoading: true,
};

export const addPageSlice = createSlice({
	name: 'addPage',
	initialState: () => initialState,
	reducers: {
		// setUserData: (state, action: PayloadAction<UserSchema>) => {
		// 	state.username = action.payload.username;
		// },
	},
});

export const { actions: addPageAction } = addPageSlice;
export const { reducer: addPageReducer } = addPageSlice;
