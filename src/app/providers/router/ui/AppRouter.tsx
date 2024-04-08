/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from 'shared/ui/Loader/Loader';

import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter: React.FC = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = <Suspense fallback={<Loader />}>{route.element}</Suspense>;
		return <Route key={route.path} path={route.path} element={element} />;
	}, []);

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
