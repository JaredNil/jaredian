import { memo, type ButtonHTMLAttributes, ReactNode } from 'react';

import { Mods, classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
	HEADER_CIRCLE = 'header__circle',
	HEADER_CIRCLE_EMPTY = 'header__circle_empty',
	HEADER_BLOCK = 'header__block',
	HEADER_BLOCK_EMPTY = 'header__block_empty',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	size?: ButtonSize;
	disabled?: boolean;
	children: ReactNode;
}

export const Button = memo<ButtonProps>((props: ButtonProps) => {
	const {
		children,
		className,
		theme = ButtonTheme.HEADER_BLOCK,
		//
		size = ButtonSize.M,
		disabled = false,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls[theme]]: true,
		[cls[size]]: true,
		[cls.disabled]: disabled,
	};

	return (
		<button
			type="button"
			className={classNames(
				cls.Button,
				mods,
				[className]
				//
			)}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});
