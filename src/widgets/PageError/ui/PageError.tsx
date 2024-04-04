// import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

const PageError: React.FC = () => {
	const reloadPage = (): void => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};

	return (
		<div className={cls.PageError}>
			<p>Произошла непредвиденная ошибка</p>
			<Button onClick={reloadPage}>Обновить страницу</Button>
		</div>
	);
};
export default PageError;
