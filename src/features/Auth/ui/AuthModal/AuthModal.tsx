import { Suspense, memo } from 'react';

import { Modal } from 'shared/ui/Modal';

import { AuthFormAsync } from '../AuthForm/AuthForm.async';

import cls from '../modal.module.scss';

interface AuthModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = memo((props: AuthModalProps) => {
	const { isOpen, onClose } = props;

	return (
		<Modal className={cls.Modal} isOpen={isOpen} onClose={onClose}>
			<Suspense fallback="">
				<AuthFormAsync onSuccess={onClose} />
			</Suspense>
		</Modal>
	);
});
