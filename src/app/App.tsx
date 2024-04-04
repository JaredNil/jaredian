import { Suspense } from 'react';

import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';

import { useTheme } from './providers/ThemeProvider';
import { ContentWrapper } from './ui/ContentWrapper';

const App: React.FC = () => {
	const { theme } = useTheme();

	return (
		<div
			className={classNames('app app_dark_theme', {}, [
				// theme
			])}
		>
			<Suspense fallback="">
				<Sidebar />
				<ContentWrapper />
			</Suspense>
		</div>
	);
};

export default App;
