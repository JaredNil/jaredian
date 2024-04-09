import { StateSchema } from 'app/providers/StoreProvider';
import { DataType } from '../types/library';

export const getCurrentLibraryState = (state: StateSchema) => state.library?.data;
export const getCurrentLibraryDataType = (state: StateSchema) => state.library?.dataType || DataType.COMMON;
export const getCurrentLibraryIsLoading = (state: StateSchema) => state.library?.isLoadingData || true;
