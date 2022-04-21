import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './slices/questions';

export const store = configureStore({
  reducer: { questions: questionsReducer },
});
