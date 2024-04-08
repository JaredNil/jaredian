import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const USER_LOCALSTORAGE_KEY = 'user';
export const ARTICLES_VIEW_LOCALSTORAGE_KEY = 'articles_view';
export const LOCAL_STORAGE_THEME_KEY = 'theme';
export const LOCAL_STORAGE_LAST_DESIGN_KEY = 'last_design';

export const rtkApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		prepareHeaders: (headers) => {
			const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
			if (token) {
				headers.set('Authorization', token);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({}),
});
