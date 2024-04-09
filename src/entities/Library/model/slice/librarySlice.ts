import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { DataType, LibrarySchema, NamespaceType } from '../types/library';

const initialState: LibrarySchema = {
	dataType: DataType.COMMON,
	data: undefined,

	isLoadingData: true,
};

export const librarySlice = createSlice({
	name: 'library',
	initialState: () => initialState,
	reducers: {
		setOnLoadingData: (state) => {
			state.isLoadingData = true;
		},
		setOffLoadingData: (state) => {
			state.isLoadingData = false;
		},
		setCurrentLibraryData: (state, action: PayloadAction<NamespaceType[]>) => {
			console.log(action.payload);
			state.data = action.payload;
		},
	},
});

export const { actions: libraryAction } = librarySlice;
export const { reducer: libraryReducer } = librarySlice;
