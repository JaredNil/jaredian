import { useState } from 'react';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Title } from 'shared/ui/Title/Title';
import { addPageReducer } from '../model/slice/addPageSlice';

const reducers: ReducerList = {
	addPage: addPageReducer,
};

const AddPage: React.FC = () => {
	return <DynamicModuleLoader reducers={reducers}>AddPage</DynamicModuleLoader>;
};

export default AddPage;
