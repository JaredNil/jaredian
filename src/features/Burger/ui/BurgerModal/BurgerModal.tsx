import { Suspense, memo } from 'react';

import { Modal } from 'shared/ui/Modal';

import { BurgerFormAsync } from '../BurgerForm/BurgerForm.async';

import cls from '../modal.module.scss';

interface BurgerModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const BurgerModal: React.FC<BurgerModalProps> = memo((props: BurgerModalProps) => {
	const { isOpen, onClose } = props;

	return (
		<Modal className={`${cls.Modal} app_dark_theme`} isOpen={isOpen} onClose={onClose}>
			<Suspense fallback="">
				<BurgerFormAsync onSuccess={onClose} />
			</Suspense>
		</Modal>
	);
});
