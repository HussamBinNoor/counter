import {createSlice} from '@reduxjs/toolkit';
import {setlogin, setlogout} from './action';

const initialState = {
  isLoggedIn: true,
};

const counterSlice = createSlice({
  name: 'isLoggedIn',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setlogin, state => {
      state.isLoggedIn = true;
    });
    builder.addCase(setlogout, state => {
      state.isLoggedIn = false;
    });
  },
});

export default counterSlice.reducer;
