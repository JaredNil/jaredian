import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
	let location = useLocation();

	if (true) {
		return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
	}

	return children;
}
