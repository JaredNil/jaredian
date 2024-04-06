/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import { memo, useEffect, useState } from 'react';
import { getWideSidebar, userAction } from 'entities/User';
import { useSelector } from 'react-redux';
import { LuArrowLeftToLine } from 'react-icons/lu';

import clsGlobal from 'app/styles/index.module.scss';

import sidebarLogo from 'shared/assets/jaredian.svg';
import sidebarLogoText from 'shared/assets/jaredian_text.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Book } from './Book';
import cls from './Sidebar.module.scss';

export const Sidebar: React.FC = memo(() => {
	const [collapsed, setCollapsed] = useState(false);

	const dispatch = useAppDispatch();
	const isWideSidebar = useSelector(getWideSidebar);

	const onToggleSidebar = (): void => {
		dispatch(userAction.toggleExpand());
	};

	useEffect(() => console.log('RENDER SIDEBAR_COMPONENT'));

	if (isWideSidebar) {
		return (
			<div
				className={classNames(clsGlobal.sidebar, {
					[cls.collapsed]: collapsed,
				})}
			>
				<div className={cls.title}>
					<Icon Svg={sidebarLogo} className={cls.title__logo} />
					<Icon Svg={sidebarLogoText} className={cls.title__text} />
				</div>
				<div className={`${cls.sidebar__toogle} ${!isWideSidebar ? cls.sidebar__toogle_close : ''}`} onClick={onToggleSidebar}>
					<LuArrowLeftToLine size={30} />
				</div>

				<Book />
			</div>
		);
	}
});
