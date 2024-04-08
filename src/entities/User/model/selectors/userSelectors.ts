import { StateSchema } from 'app/providers/StoreProvider';

export const getIsLoadingUser = (state: StateSchema) => state.user.isLoading;
export const getUsername = (state: StateSchema) => state.user.username;
export const getWideSidebar = (state: StateSchema) => {
	console.log(state.user);
	return state.user.wide;
};
