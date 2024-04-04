import { ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Title.module.scss';

export enum TitleTheme {
	PRIMARY = 'primary',
	ERROR = 'error',
}

export type TitleSize = 's' | 'm' | 'l';

const mapSizeToClass: Record<TitleSize, string> = {
	s: cls.size_s,
	m: cls.size_m,
	l: cls.size_l,
};

interface TitleProps {
	children: ReactNode;
	className?: string;
	size?: TitleSize;
}

export const Title: React.FC<TitleProps> = memo((props: TitleProps) => {
	const { children, className, size = 'm' } = props;

	const sizeClass = mapSizeToClass[size];
	const additionalClasses = [className, sizeClass];

	return <div className={classNames(cls.Text, {}, additionalClasses)}>{children}</div>;
});
