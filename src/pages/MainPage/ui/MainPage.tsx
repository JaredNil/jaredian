import { getCurrentLibraryDataType, getCurrentLibraryIsLoading, getCurrentLibraryState } from 'entities/Library';
import { useLibrary } from 'entities/Library/model/service/useLibrary';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Title } from 'shared/ui/Title/Title';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { libraryReducer } from 'entities/Library/model/slice/librarySlice';
import { useEffect } from 'react';

const initialReducers: ReducerList = {
	library: libraryReducer,
};

const MainPage: React.FC = () => {
	const location = useLocation();

	const isLoadingLibrary = useSelector(getCurrentLibraryIsLoading);
	const libraryCurrentType = useSelector(getCurrentLibraryDataType);
	const libraryCurrent = useSelector(getCurrentLibraryState);

	const { updateLibraryData } = useLibrary(location.hash);

	useEffect(() => {
		if (!libraryCurrent) {
			updateLibraryData();
		}
	}, []);

	console.log('MAIN PAGE RENDER ---');
	console.log(libraryCurrent);

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<div>
				{location.hash}
				На данный момент тип запроса - {`${libraryCurrentType}`}
				{libraryCurrent && (
					<div>
						{libraryCurrent.map((ns) => {
							return <div> {ns.namespace}</div>;
						})}
					</div>
				)}
			</div>
		</DynamicModuleLoader>
	);
};

export default MainPage;
