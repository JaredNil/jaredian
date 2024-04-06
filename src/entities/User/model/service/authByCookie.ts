import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { UserSchema } from '../types/user';

export const authByCookie = createAsyncThunk<UserSchema, void, ThunkConfig<string>>('user/authByCookie', async (_, thunkAPI) => {
	const { rejectWithValue, extra } = thunkAPI;

	try {
		const res = await extra.api.get<UserSchema>('/auth/session', {
			headers: {
				withCredentials: true,
			},
		});
		return res.data;
	} catch (error) {
		return rejectWithValue('error');
	}
});
