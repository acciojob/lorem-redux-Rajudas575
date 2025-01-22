import { createSlice } from '@reduxjs/toolkit';
import { fetchLorem } from './actions';

const loremSlice = createSlice({
  name: 'lorem',
  initialState: {
    content: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.content = action.payload.content;
      })
      .addCase(fetchLorem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default loremSlice.reducer;
