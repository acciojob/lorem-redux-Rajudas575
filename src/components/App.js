import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLorem = createAsyncThunk('lorem/fetchLorem', async () => {
  const response = await fetch('https://api.lorem.com/ipsum');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
});
