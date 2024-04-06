/* eslint-disable jsx-a11y/control-has-associated-label */
import { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import { MdManageAccounts } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

import { getWideSidebar, userAction } from 'entities/User';

import { AuthModal } from 'features/Auth';
import SearchDynamic from 'features/SearchDynamic/SearchDynamic';

import sidebarLogo from 'shared/assets/jaredian.svg';
import sidebarLogoText from 'shared/assets/jaredian_text.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import cls from './Header.module.scss';

export const Header: React.FC = memo(() => {
	const [isAuthModal, setIsAuthModal] = useState(false);

	const dispatch = useAppDispatch();
	const isWideSidebar = useSelector(getWideSidebar);

	const navigate = useNavigate();

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onToggleSidebar = (): void => {
		dispatch(userAction.toggleExpand());
	};

	useEffect(() => console.log('RENDER HEADER_COMPONENT'));

	return (
		<div className={cls.header}>
			<div className={cls.header__title}>
				<div className={cls.header__title_path}>
					<span>NAMESPACE/ESSENCE/POINT - OF DYNAMIC SEARCH</span>
				</div>
				{!isWideSidebar && (
					<div className={cls.header__title_logo}>
						<Icon Svg={sidebarLogo} className={cls.header__title_logo_1} />
						<Icon Svg={sidebarLogoText} className={cls.header__title_logo_2} />
					</div>
				)}
			</div>
			<div className={cls.header__line}>
				<div className={cls.header__line_routes}>
					{!isWideSidebar && (
						<button onClick={onToggleSidebar} type="button" className={cls.route}>
							<FaArrowRightFromBracket size={23} />
						</button>
					)}
					<button onClick={() => navigate(-1)} type="button" className={cls.route}>
						<HiOutlineChevronLeft size={23} />
					</button>
					<button onClick={() => navigate(1)} type="button" className={cls.route}>
						<HiOutlineChevronRight size={23} />
					</button>
				</div>
				<div className={cls.header__line_search}>
					<SearchDynamic />
				</div>
				<div className={cls.header__line_routes}>
					{isAuthModal && <AuthModal isOpen={isAuthModal} onClose={() => onCloseModal()} />}
					<button type="button" onClick={() => onShowModal()} className={cls.account}>
						DEMO
						<MdManageAccounts className="text-black" size={40} />
					</button>
				</div>
			</div>
		</div>
	);
});
