import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColorButton from './ColorButton';
import { addNote } from '../redux/notes/NotesSlice';
import { RootState } from '../redux/Store';

const NoteInput = () => {
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState('red');

  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.notes.items);

  const addNewNote = () => {
    if (text === '') return;
    const note = items.filter((item) => item.note === text);
    if (note.length > 0) {
      alert('This Note Exists in the Store');
      return;
    }
    const newNote = {
      id: nanoid(5),
      note: text,
      bgColor: bgColor,
    };

    // Obtiene la cadena JSON de localStorage, o un string vacío si no existe.
    const arrayEnJSON = localStorage.getItem('notesArray') || '[]';

    // Convierte la cadena JSON en un array de objetos.
    const notesArray = JSON.parse(arrayEnJSON);

    // Agrega el nuevo objeto al array.
    notesArray.push(newNote);

    // Convierte el array actualizado en una cadena JSON.
    const notesArrayJSON = JSON.stringify(notesArray);

    // Almacena la cadena JSON en localStorage.
    localStorage.setItem('notesArray', notesArrayJSON);

    dispatch(addNote(newNote));
  };

  return (
    <div className="textarea-box">
      <textarea
        className="textarea-input"
        name=""
        id=""
        cols={30}
        rows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Your Note Here"
      />
      <ColorButton setbgColor={setBgColor} bgColor={bgColor} />
      <button className="btn-add" onClick={addNewNote}>
        +
      </button>
    </div>
  );
};

export default NoteInput;
