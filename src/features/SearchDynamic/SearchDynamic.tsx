import { AiOutlineSearch } from 'react-icons/ai';
import cls from './SearchDynamic.module.scss';

const SearchDynamic = () => {
	return (
		<div className={cls.wrapper}>
			<input className={cls.input} type="text" placeholder="Динамический поиск..." />
			<AiOutlineSearch className={cls.icon} size={30} />
		</div>
	);
};

export default SearchDynamic;
