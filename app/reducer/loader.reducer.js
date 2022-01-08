import {createSlice} from '@reduxjs/toolkit';

export const loading = createSlice({
  name: 'load',

  initialState: {
    loader: true,
  },

  reducers: {
    getLoad: (state, action) => {
      return {
        ...state,
        loader: action.payload,
      };
    },
    setLoadSuccess: (state, action) => {
      return {
        ...state,
        loader: action.payload,
      };
    },
  },
});

export const {getLoad, setLoadSuccess} = loading.actions;

export default loading.reducer;
