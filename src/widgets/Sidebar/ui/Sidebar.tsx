/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import { getWideSidebar, userAction } from 'entities/User';
import { memo, useEffect } from 'react';
import { CiSquarePlus } from 'react-icons/ci';
import { LuArrowLeftToLine } from 'react-icons/lu';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr';

import sidebarLogo from 'shared/assets/jaredian.svg';
import sidebarLogoText from 'shared/assets/jaredian_text.svg';
import { successUploadToastr } from 'shared/config/toastr/toastr.config';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from 'shared/ui/Icon/Icon';

import { Book } from './Book';

import clsGlobal from '../../../app/styles/index.module.scss';
import cls from './Sidebar.module.scss';

export const Sidebar: React.FC = memo(() => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const isWideSidebar = useSelector(getWideSidebar);

	const onToggleSidebar = (): void => {
		dispatch(userAction.toggleExpand());
	};
	const onToggleBurger = () => {
		toastr.error('Отказано', `Фича еще не реализована`, successUploadToastr);
	};

	useEffect(() => console.log('RENDER SIDEBAR_COMPONENT'));

	if (isWideSidebar) {
		return (
			<div className={clsGlobal.sidebar}>
				<div className={cls.title} onClick={() => navigate('/')}>
					<Icon Svg={sidebarLogo} className={cls.title__logo} />
					<Icon Svg={sidebarLogoText} className={cls.title__text} />
				</div>
				<div className={cls.sidebar__toogle} onClick={onToggleSidebar}>
					<LuArrowLeftToLine size={30} color="#000" />
				</div>
				<div className={cls.sidebar__add} onClick={onToggleBurger}>
					<CiSquarePlus size={42} color="#000" />
				</div>

				<Book />
			</div>
		);
	}
});
