import React from 'react';
import { 
  Box,
  Button,
  Typography
  } from '@mui/material';

const home = () => {
  return (
    <div>
      <Box
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw'}}>
        <Box
        sx={{display: 'flex',flexDirection: 'row',gap: '10px' , width: '30ch', height: '4ch'}}>
          <Button sx={{textTransform: 'unset'}} fullWidth href='/login' color='secondary' variant='contained'>Log in</Button>
          <Button sx={{textTransform: 'unset'}} href='/register' fullWidth color='secondary' variant='outlined'>Sign up</Button>
        </Box>
      </Box>
    </div>
  )
}

export default home
