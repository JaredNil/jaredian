// eslint-disable-next-line import/no-extraneous-dependencies
import { memo, useState, type ReactElement } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import sidebarLogo from 'shared/assets/jaredian.svg';
import sidebarLogoText from 'shared/assets/jaredian_text.svg';
import { Icon } from 'shared/ui/Icon/Icon';

import cls from './Sidebar.module.scss';

interface SidebarProps {
	children?: ReactElement[];
	className?: string;
}

const Sidebar: React.FC<SidebarProps> = memo(({ className, children }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggleSidebar = (): void => {
		setCollapsed((collapsedPrev) => !collapsedPrev);
	};

	return (
		<aside
			className={classNames(
				cls.Sidebar,
				{
					[cls.collapsed]: collapsed,
				},
				[className]
			)}
		>
			<div className={cls.sidebar__title}>
				<Icon Svg={sidebarLogo} className={cls.sidebar__title_logo} />
				<Icon Svg={sidebarLogoText} className={cls.sidebar__title_text} />
			</div>
		</aside>
	);
});

export default Sidebar;
