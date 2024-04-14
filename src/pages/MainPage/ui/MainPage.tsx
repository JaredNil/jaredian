import { getCurrentLibraryDataType, getCurrentLibraryIsLoading, getCurrentLibraryState } from 'entities/Library';
import { useLibrary } from 'entities/Library/model/service/useLibrary';
import { libraryReducer } from 'entities/Library/model/slice/librarySlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { LibraryCommon } from './Library/LibraryCommon';
import cls from './MainPage.module.scss';

const initialReducers: ReducerList = {
	library: libraryReducer,
};

const MainPage: React.FC = () => {
	const location = useLocation();
	const pathToContent = location.hash.split('').map((e) => Number(e));

	const libraryCurrent = useSelector(getCurrentLibraryState);
	const isLoadingLibrary = useSelector(getCurrentLibraryIsLoading);
	const libraryCurrentType = useSelector(getCurrentLibraryDataType);

	const { updateLibraryData } = useLibrary(location.hash);

	useEffect(() => {
		if (!libraryCurrent) {
			updateLibraryData();
		}
	}, []);

	console.log('MAIN PAGE RENDER ---');

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<div className={cls.page}>
				<div className={cls.header__title}>
					<div className={cls.header__title_path}>
						<span>
							NAMESPACE {pathToContent[1]}/ESSENCE{pathToContent[2]}/POINT{pathToContent[3]}
						</span>
						<div className={cls.page__header}>На данный момент тип запроса - {`${libraryCurrentType} ${location.hash}`}</div>
					</div>
				</div>

				<LibraryCommon />
				<div className={cls.page__footer}>JaredN </div>
			</div>
		</DynamicModuleLoader>
	);
};

export default MainPage;
