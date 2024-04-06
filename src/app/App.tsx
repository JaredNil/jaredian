import { Suspense, useEffect } from 'react';

import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';

import { Header } from 'widgets/Header';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

import cls from './styles/index.module.scss';

const App: React.FC = () => {
	const { theme } = useTheme();

	useEffect(() => console.log('RENDER APPCOMPONENT'));

	return (
		<div
			className={classNames('app app_dark_theme', {}, [
				// theme
			])}
		>
			<Suspense fallback="">
				<aside className={cls.sidebarWrapper}>
					<Sidebar />
				</aside>
				<main className={cls.mainWrapper}>
					<header className={cls.headerContent}>
						<Header />
					</header>
					<div className={cls.mainContent}>
						<AppRouter />
					</div>
				</main>
			</Suspense>
		</div>
	);
};

export default App;
