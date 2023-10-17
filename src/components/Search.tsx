import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import { setSearchText } from '../redux/notes/notesSlice';
import { ChangeEvent } from 'react';

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.notes.searchText);
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    dispatch(setSearchText(text));
  };
  return (
    <div>
      <input
        value={searchValue}
        onChange={handleChangeText}
        type="text"
        placeholder={'Search...'}
        className={'search-box'}
      />
    </div>
  );
};
export default Search;
