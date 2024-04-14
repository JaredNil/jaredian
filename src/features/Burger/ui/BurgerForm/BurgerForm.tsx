import { memo } from 'react';
import { Book } from 'widgets/Sidebar/ui/Book';

import cls from '../modal.module.scss';

export interface BurgerFormProps {
	onSuccess: () => void;
}

const BurgerForm: React.FC<BurgerFormProps> = memo((props: BurgerFormProps) => {
	const { onSuccess } = props;

	return (
		<div className={cls.burgerForm}>
			<h2 className={cls.burgerForm__title}>Бургерное меню</h2>
			<Book className={cls.burgerForm__body} />
		</div>
	);
});

export default BurgerForm;
