import { Box, TextField } from '@material-ui/core';
import { useRef } from 'react';
import { useAppDispatch } from '../app/hooks';
import { listArtist } from '../features/artist/artistsSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // dispatch an action
    const actionType = listArtist.type;
    const actionValue = inputRef.current?.querySelector('input')?.value;
    const action = { type: actionType, payload: actionValue };
    dispatch(action);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField ref={inputRef} variant="outlined" fullWidth />
      </form>
    </Box>
  );
};

export default Header;
