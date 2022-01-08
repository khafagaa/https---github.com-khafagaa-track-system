import {createSlice} from '@reduxjs/toolkit';

export const countSlice = createSlice({
  name: 'count',

  initialState: {
    count: 1,
  },

  reducers: {
    increment: (state, action) => {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    decrement: (state, action) => {
      return {
        ...state,
        count: state.count - 1,
      };
    },
    payloadCount: (state, action) => {
      console.log(action.type);
      return {
        ...state,
        count:
          action.payload.operator === 'add'
            ? state.count + action.payload.num
            : state.count - action.payload.num,
      };
    },
  },
});

export const {increment, decrement, payloadCount} = countSlice.actions;

export default countSlice.reducer;
