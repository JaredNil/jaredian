/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';


import { CounterSchema } from '../types/counter';

const initialState: CounterSchema = {
	counter: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState: () => initialState,
	reducers: {
		plusCounter: (state) => {
			state.counter += 1;
		},
	},
});

export const { actions: counterAction } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
