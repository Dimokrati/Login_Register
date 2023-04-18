import React, {useState} from 'react';
import { 
    TextField,
    Box,
    FormControl,
    IconButton,
    Checkbox,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormControlLabel,
    Link,
    Typography,
    Button
 } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((showPassword) => !showPassword);

  return (
    <div>
        <Box sx={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                }}>
            <Box
                sx={{
                    width: '50ch',
                    height: 700,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.54)',
                    flexDirection: 'column',
                }}
            >
                <Box 
                    sx={{
                        width: '100%',
                        display:'flex', 
                        flexDirection: 'column',
                        justifyContent: 'start'
                    }}
                >
                    <Typography 
                        sx={{fontSize: '50px', fontWeight: 'bold'  ,fontFamily: " 'Montserrat', sans-serif"}} 
                        variant='h3'>Welcome back</Typography>
                    <Typography sx={{color: '#8a8a8a'}} variant='subtitle1'>Welcome back! Please enter your details</Typography>
                </Box>
                <TextField id='email'  sx={{ m: 3, width: '100%' }} size='normal' variant='outlined' label='Email' color='secondary'  margin='normal' 
                InputProps={{
                    style: {
                        color: "#616060"
                    }
                }}/>
                <FormControl sx={{ m: 1, width: '100%' }} color='secondary' variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        size='normal'
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                                color='white'
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>}
                    label="Password"
                    inputProps={{style:{color: '#616060'}}}/>
                </FormControl>
                <Box
                    sx={{
                        width: '100%',
                        height: '40px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '10px'
                    }}
                >
                    <FormControlLabel 
                        control={<Checkbox color='secondary' sx={{ '& .MuiSvgIcon-root': { fontSize: 20} }}/>} 
                        label={<Typography sx={{color: '#616060'}} variant='body2'>Remember me</Typography>} 
                    />
                    <Link href='#' underline='none' color='secondary' variant='body2'>Forgot password</Link>
                </Box>
                <Button sx={{textTransform: 'unset', marginBottom:'10px'}} variant="contained"  color='secondary' size='large' fullWidth>Sign in</Button>
                <Button
                    sx={{textTransform: 'unset', marginBottom:'25px'}} 
                    variant="outlined" 
                    color='secondary'
                    startIcon={<GoogleIcon />} 
                    size='large' 
                    fullWidth>
                        Sign in with Google
                </Button>
                <Box
                    sx={{display:'flex', gap:'5px'}}
                >
                    <Typography sx={{color: '#8a8a8a'}} variant='body2'>Don't have an account?</Typography>
                    <Link href='#' underline='none' color='secondary' variant='body2'>Sign up</Link>
                </Box>
            </Box>
            
        </Box>
    </div>
  )
}

export default LoginForm
