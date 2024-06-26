import { Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { NavigateOptions } from 'react-router';
import { $api } from 'shared/api/api';
import { To } from 'react-router-dom';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { rtkApi } from 'shared/api/rtkApi';

// export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>, navigate?: (to: To, options?: NavigateOptions) => void) {
// 	const rootReducers: ReducersMapObject<StateSchema> = {
// 		...asyncReducers,
// 		user: userReducer,
// 		counter: counterReducer,
// 	};

// 	const reducerManager = createReducerManager(rootReducers);

// 	const extraArg: ThunkExtraArg = {
// 		api: $api,
// 		navigate,
// 	};

// 	const store = configureStore({
// 		reducer: reducerManager.reduce as Reducer<StateSchema>,
// 		devTools: __IS_DEV__,
// 		preloadedState: initialState,
// 		middleware: (getDefaultMiddleware) =>
// 			getDefaultMiddleware({
// 				thunk: {
// 					extraArgument: extraArg,
// 				},
// 			}),
// 	});

// 	// @ts-ignore
// 	store.reducerManager = reducerManager;

// 	return store;
// }

// export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const extraArg: ThunkExtraArg = {
		api: $api,
	};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<StateSchema>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg,
				},
			}),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
