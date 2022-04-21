import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      const { question } = payload;
      state.value.push(question);
    },
    remove: (state, { payload }) => {
      const { pos } = payload;
      const temp = state.value.filter((q, i) => i !== pos);
      state.value = [...temp];
    },
    update: (state, { payload }) => {
      state.value;
    },
  },
});

export const { add, remove, update } = questionSlice.actions;

export default questionSlice.reducer;
