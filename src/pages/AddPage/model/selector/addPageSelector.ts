import { StateSchema } from 'app/providers/StoreProvider';

export const getIsLoadingAddPage = (state: StateSchema) => state.addPage?.isLoading;
