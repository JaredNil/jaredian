/* eslint-disable jsx-a11y/control-has-associated-label */
import { memo, useCallback, useEffect, useState } from 'react';
import toastr from 'toastr';
import { useSelector } from 'react-redux';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import { MdManageAccounts } from 'react-icons/md';
import { CiSquarePlus } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';

import { Link, useNavigate } from 'react-router-dom';

import { getWideSidebar, userAction } from 'entities/User';
import { getCounter } from 'entities/Counter/model/selector/counterSelector';

import { AuthModal } from 'features/Auth';
import SearchDynamic from 'features/SearchDynamic/SearchDynamic';
import sidebarLogo from 'shared/assets/jaredian.svg';
import sidebarLogoText from 'shared/assets/jaredian_text.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { successUploadToastr } from 'shared/config/toastr/toastr.config';

import cls from './Header.module.scss';
import { counterAction } from 'entities/Counter/model/slice/counterSlice';

export const Header: React.FC = memo(() => {
	const [isAuthModal, setIsAuthModal] = useState(false);

	const dispatch = useAppDispatch();
	const isWideSidebar = useSelector(getWideSidebar);

	const counter = useSelector(getCounter);

	const navigate = useNavigate();

	const onCloseAuthModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowAuthModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onToggleSidebar = (): void => {
		dispatch(userAction.toggleExpand());
	};

	const onToggleBurger = () => {
		toastr.error('Отказано', `Фича еще не реализована`, successUploadToastr);
	};

	useEffect(() => console.log('RENDER HEADER_COMPONENT'));

	return (
		<div className={cls.header}>
			<div className={cls.header__title}>
				<div className={cls.header__title_path}>
					<span>NAMESPACE/ESSENCE/POINT</span>
				</div>
				<Link to="/" className={`${cls.header__title_logo} ${isWideSidebar ? cls.logo_disable : ''}`}>
					<Icon Svg={sidebarLogo} className={cls.header__title_logo_1} />
					<Icon Svg={sidebarLogoText} className={cls.header__title_logo_2} />
				</Link>
			</div>
			<div className={cls.header__line}>
				<div className={cls.header__line_routes}>
					<button onClick={onToggleSidebar} type="button" className={`${cls.route} ${cls.sidebar_btn} ${isWideSidebar ? cls.sidebar_disable : ''}`}>
						<FaArrowRightFromBracket size={23} />
					</button>
					<button onClick={onToggleBurger} type="button" className={`${cls.route} ${cls.ham}`}>
						<RxHamburgerMenu size={23} />
					</button>
					<button onClick={() => navigate(-1)} type="button" className={cls.route}>
						<HiOutlineChevronLeft size={23} />
					</button>
					<button onClick={() => navigate(1)} type="button" className={cls.route}>
						<HiOutlineChevronRight size={23} />
					</button>
					<button onClick={() => navigate(1)} type="button" className={cls.route}>
						{counter}
					</button>
					<button onClick={() => dispatch(counterAction.plusCounter())} type="button" className={cls.route}>
						+
					</button>
				</div>

				<div className={cls.header__line_routes}>
					<Link to="/add" type="button" className={cls.account}>
						ADD
						<CiSquarePlus className="text-black" size={40} />
					</Link>
					{isAuthModal && <AuthModal isOpen={isAuthModal} onClose={() => onCloseAuthModal()} />}
					<button type="button" onClick={() => onShowAuthModal()} className={cls.account}>
						DEMO
						<MdManageAccounts className="text-black" size={40} />
					</button>
				</div>
			</div>
			<div className={cls.header__search}>
				<SearchDynamic />
			</div>
		</div>
	);
});
