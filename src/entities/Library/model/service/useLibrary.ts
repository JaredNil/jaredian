import { useState } from 'react';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { defaultContent } from './default';
import { NamespaceType } from '../types/library';
import { libraryAction } from '../slice/librarySlice';

export const useLibrary = (path: string) => {
	const [libraryState, setLibraryState] = useState<NamespaceType[] | null>(null);
	if (!libraryState) {
		setLibraryState(defaultContent);
	}

	const dispatch = useAppDispatch();

	console.log('USE_LIBRARY');

	const updateLibraryData = (): void => {
		const pathToContent = path.split('').map((e) => Number(e));
		pathToContent.shift();

		if (libraryState) {
			dispatch(libraryAction.setCurrentLibraryData(libraryState));
		} else console.warn('libraryState - пуст');
	};

	return { updateLibraryData };
};
