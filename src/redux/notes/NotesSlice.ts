import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AddNotePayload = {
  id: string;
  note: string;
  bgColor: string;
};

export interface NoteType {
  id: string;
  note: string;
  bgColor: string;
}

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: <NoteType[]>[],
    searchText: '',
  },
  reducers: {
    addNote: (state, action: PayloadAction<AddNotePayload>) => {
      state.items.push(action.payload);
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { addNote, setSearchText } = notesSlice.actions;
export default notesSlice.reducer;
