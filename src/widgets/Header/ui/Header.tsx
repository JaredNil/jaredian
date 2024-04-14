/* eslint-disable jsx-a11y/control-has-associated-label */
import { memo, useCallback, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CiSquarePlus } from 'react-icons/ci';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import { LuArrowLeftToLine } from 'react-icons/lu';
import { MdManageAccounts } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

import { RiHomeLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import toastr from 'toastr';

import { useLocation, useNavigate } from 'react-router-dom';

import { getWideSidebar, userAction } from 'entities/User';

import { AuthModal } from 'features/Auth';
import { BurgerModal } from 'features/Burger/ui/BurgerModal/BurgerModal';

import sidebarLogo from 'shared/assets/jaredian.svg';
import sidebarLogoText from 'shared/assets/jaredian_text.svg';
import { successUploadToastr } from 'shared/config/toastr/toastr.config';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

import cls from './Header.module.scss';

export const Header: React.FC = memo(() => {
	const [isAuthModal, setIsAuthModal] = useState(false);
	const [isBurgerModal, setIsBurgerModal] = useState(false);

	const dispatch = useAppDispatch();

	const location = useLocation();
	console.log(location);

	const navigate = useNavigate();
	const transitMainPage = useCallback(() => navigate('/'), [navigate]);
	const transitAddPage = useCallback(() => navigate('/add'), [navigate]);

	const onCloseAuthModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowAuthModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onCloseBurgerModal = useCallback(() => {
		setIsBurgerModal(false);
	}, []);

	const onShowBurgerModal = useCallback(() => {
		setIsBurgerModal(true);
	}, []);

	const onToggleSidebar = (): void => {
		dispatch(userAction.toggleExpand());
	};

	useEffect(() => console.log('RENDER HEADER_COMPONENT'));

	return (
		<div className={cls.header}>
			<div className={cls.header__line}>
				<div className={cls.header__line_routes}>
					<Button theme={ButtonTheme.HEADER_CIRCLE} size={ButtonSize.XL} onClick={() => navigate(-1)}>
						<HiOutlineChevronLeft size={23} />
					</Button>
					<Button theme={ButtonTheme.HEADER_CIRCLE} size={ButtonSize.XL} onClick={() => navigate(1)}>
						<HiOutlineChevronRight size={23} />
					</Button>
					<Button theme={ButtonTheme.HEADER_CIRCLE_EMPTY} size={ButtonSize.XL} onClick={transitMainPage}>
						<RiHomeLine size={23} />
					</Button>
					<Button theme={ButtonTheme.HEADER_CIRCLE_EMPTY} size={ButtonSize.XL} onClick={transitAddPage}>
						<CiSquarePlus className="text-black" size={23} />
					</Button>
					{isAuthModal && <AuthModal isOpen={isAuthModal} onClose={() => onCloseAuthModal()} />}
					<Button theme={ButtonTheme.HEADER_CIRCLE_EMPTY} size={ButtonSize.XL} onClick={() => onShowAuthModal()}>
						<MdManageAccounts size={23} />
					</Button>
					<div className={cls.header__account}>
						<div className={cls.header__account_title}>ACCOUNT:</div>
						<div className={cls.header__account_info}>JaredN</div>
					</div>
				</div>

				<div onClick={transitMainPage} className={`${cls.header__title_logo} svg-anima`}>
					<Icon Svg={sidebarLogo} className={cls.header__title_logo_1} />
					<Icon Svg={sidebarLogoText} className={cls.header__title_logo_2} />
				</div>

				<div className={cls.header__line_burger}>
					{isBurgerModal && <BurgerModal isOpen={isBurgerModal} onClose={() => onCloseBurgerModal()} />}

					<Button theme={ButtonTheme.HEADER_CIRCLE} size={ButtonSize.XL} onClick={() => onShowBurgerModal()}>
						<RxHamburgerMenu size={23} />
					</Button>
				</div>
			</div>
			<div className={cls.search}>
				<button className={cls.search__button} type="button" onClick={onToggleSidebar}>
					<LuArrowLeftToLine size={23} />
				</button>
				<input className={cls.input} type="text" placeholder="Динамический поиск..." />
				<AiOutlineSearch className={cls.icon} size={30} />
			</div>
		</div>
	);
});
