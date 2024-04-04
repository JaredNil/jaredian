import { AppRouter } from 'app/providers/router';
import { Title } from 'shared/ui/Title/Title';

export const ContentWrapper: React.FC = () => {
	return (
		<main>
			<Title size="l">Common page content</Title>
			<AppRouter />
		</main>
	);
};
