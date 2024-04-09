import { StateSchema } from 'app/providers/StoreProvider';

export const getCurrentLibraryState = (state: StateSchema) => state.library?.data;
export const getCurrentLibraryDataType = (state: StateSchema) => state.library?.dataType;
export const getCurrentLibraryIsLoading = (state: StateSchema) => state.library?.isLoadingData || true;
