import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchDepartment = createAsyncThunk('department/requestDepartment', async () => {
	const result = await axios.get(`${process.env.PUBLIC_URL}/DB/members.json`);
	return result.data.members;
});

const departmentSlice = createSlice({
	name: 'department',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchDepartment.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchDepartment.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchDepartment.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default departmentSlice.reducer;
