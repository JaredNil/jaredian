import { classNames } from 'shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
	return <div className={classNames(cls.NotFoundPage, {}, [])}>Страница не найдена</div>;
};

export default NotFoundPage;
