import { configureStore } from '@reduxjs/toolkit';
import notesSlice from './notes/NotesSlice';

const store = configureStore({
  reducer: {
    notes: notesSlice,
    // Otros reducers aquí si los tienes
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
