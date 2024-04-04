import { memo, useState, type ReactElement } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies

import { classNames } from 'shared/lib/classNames/classNames';

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
		<div
			className={classNames(
				cls.Sidebar,
				{
					[cls.collapsed]: collapsed,
				},
				[className]
			)}
		>
			Sidebar
		</div>
	);
});

export default Sidebar;
