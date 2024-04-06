/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @typescript-eslint/no-shadow */
import { memo, useCallback, useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import { TbFileUpload } from 'react-icons/tb';
import { TiInfoLarge } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { twMerge } from 'tailwind-merge';

// import { AuthModal } from 'features/Auth/ui/AuthModal/AuthModal';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
// import { TransitEffect, useTransit } from 'shared/lib/hooks/useTransit/useTransit';
// import { Button } from 'shared/ui/Button/Button';
// import { HeaderLoader } from 'shared/ui/HeaderLoader/HeaderLoader';
// import { logoutByServer } from 'entities/User/model/service/logoutByServer';
// import { getUsername } from '../../entities/User/model/selectors/getUsername/getUsername';
// import { getIsLoadingUser } from '../../entities/User/model/selectors/getIsLoadingUser/getIsLoadingUser';

import { Button } from 'shared/ui/Button/Button';
import { AuthModal } from 'features/Auth';
import cls from './Header.module.scss';

export const Header: React.FC = memo(() => {
	const [isAuthModal, setIsAuthModal] = useState(false);

	const navigate = useNavigate();

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	useEffect(() => console.log('RENDER HEADER_COMPONENT'));

	return (
		<header className={cls.header}>
			<div className={cls.router}>
				<button onClick={() => navigate(-1)} type="button" className={cls.route}>
					<HiOutlineChevronLeft size={23} />
				</button>
				<button onClick={() => navigate(1)} type="button" className={cls.route}>
					<HiOutlineChevronRight size={23} />
				</button>
			</div>
			<div className={cls.router}>
				<button onClick={() => navigate('/')} type="button" className={cls.route}>
					<HiHome className="text-black" size={20} />
				</button>
				<button type="button" onClick={() => navigate('/search')} className={cls.route}>
					<BiSearch className="text-black" size={20} />
				</button>
				{isAuthModal && <AuthModal isOpen={isAuthModal} onClose={() => onCloseModal()} />}
				<button type="button" onClick={() => onShowModal()} className={cls.route}>
					<TbFileUpload className="text-black" size={20} />
				</button>
			</div>
		</header>
	);
});
