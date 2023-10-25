import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Typography() {
  return (
    <Stack>
      <Button variant="contained" color="success" sx={{height: '38px', fontSize:12}}>
        Buy Pre-Made Setup
      </Button>
    </Stack>
  );
}