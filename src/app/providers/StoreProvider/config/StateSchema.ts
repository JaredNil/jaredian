import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';
import { AxiosInstance } from 'axios';

import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/Auth';
import { CounterSchema } from 'entities/Counter/model/types/counter';
import { AddPageSchema } from 'pages/AddPage/model/types/addPageSchema';
import { LibrarySchema } from 'entities/Library/model/types/library';

export interface StateSchema {
	user: UserSchema;
	counter: CounterSchema;

	// page reducer
	addPage?: AddPageSchema;

	// async reducer
	auth?: AuthSchema;
	library?: LibrarySchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkConfig<T> {
	serializedErrorType: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
	navigate?: (to: To, options?: NavigateOptions) => void;
}
