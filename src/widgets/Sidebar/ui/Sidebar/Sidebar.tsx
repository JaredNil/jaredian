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
			<div className={cls.title}>
				<Icon Svg={sidebarLogo} className={cls.title__logo} />
				<Icon Svg={sidebarLogoText} className={cls.title__text} />
			</div>
			<div className={cls.sidebar}>
				<div className={cls.namespace}>
					<div className={cls.namespace__title}>namespace</div>
					<div className={cls.namespace__body}>
						<div className={cls.essence}>
							<div className={cls.essence__title}>namespace</div>
							<div className={cls.essence__points}>
								<div className={cls.point}>Point</div>
								<div className={cls.point}>Point</div>
								<div className={cls.point}>Point</div>
								<div className={cls.point}>Point</div>
								<div className={cls.point}>Point</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
});

export default Sidebar;
