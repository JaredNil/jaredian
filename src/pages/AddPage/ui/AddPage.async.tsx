import { lazy } from 'react';

// export const AddPageAsync = lazy(async () => import('./AddPage'));

export const AddPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			setTimeout(() => resolve(import('./AddPage')), 1400);
		})
);
