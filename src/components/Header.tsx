import { Box } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { useRef } from 'react';

const Header = () => {
  const inputRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current?.querySelector('input')?.value);
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
