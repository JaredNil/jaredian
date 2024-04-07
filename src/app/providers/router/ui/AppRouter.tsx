/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from 'shared/ui/Loader/Loader';

import { useSelector } from 'react-redux';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from './RequireAuth';

const AppRouter: React.FC = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = <Suspense fallback={<Loader />}>{route.element}</Suspense>;
		return <Route key={route.path} path={route.path} element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : <>{element}</>} />;
	}, []);

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default AppRouter;
