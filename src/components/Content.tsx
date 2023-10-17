import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import NoteItem from './NoteItem';

const Content = () => {
  const items = useSelector((state: RootState) => state.notes.items);

  let filteredNotes = items;
  const searchText = useSelector((state: RootState) => state.notes.searchText);
  if (searchText && searchText !== '') {
    filteredNotes = filteredNotes.filter((note) =>
      note.note.toLowerCase().includes(searchText.toLowerCase())
    );
  } else {
    const storedNotes = localStorage.getItem('notesArray');
    filteredNotes = storedNotes ? JSON.parse(storedNotes) : items;
  }

  return (
    <div>
      <NoteItem focus={items.length > 0} items={filteredNotes} />
    </div>
  );
};

export default Content;
