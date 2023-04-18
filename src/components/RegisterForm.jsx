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


const RegisterForm = () => {
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
        }}>
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
                        variant='h3'>Create account</Typography>
                    <Typography sx={{mb: 3, color: '#8a8a8a'}} variant='subtitle1'>Get access to exclusive features by creating an account</Typography>
                </Box>
        <TextField id='fullname' size='normal' variant='outlined' label='Full name'  color='secondary'  margin='normal' 
                InputProps={{
                    style: {
                        color: "#616060"
                    }
            }} sx={{ m: 1, width: '100%' }}/>
         <TextField id='fullname' size='normal' variant='outlined' label='Email'  color='secondary'  margin='normal' 
                InputProps={{
                    style: {
                        color: "#616060"
                    }
            }} sx={{ m: 1, width: '100%' }}/>
        <TextField id='fullname' size='normal' variant='outlined' label='Phone'  color='secondary'  margin='normal' 
                InputProps={{
                    style: {
                        color: "#616060"
                    }
            }} sx={{ m: 1, width: '100%' }}/>
        <FormControl sx={{ m: 1, width: '100%' }} color='secondary' variant="outlined">
                <InputLabel  htmlFor="outlined-adornment-password">Password</InputLabel>
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
        <FormControl sx={{ m: 1, width: '100%' }} color='secondary' variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Confirm</InputLabel>
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
                gap: '0px',
                alignItems: 'center',
                marginBottom: '10px'
                }}>
                    <FormControlLabel 
                        control={<Checkbox color='secondary' sx={{ '& .MuiSvgIcon-root': { fontSize: 20} }}/>} 
                        label={<Typography sx={{color: '#616060'}} variant='body2'>I've read and accept the</Typography>} 
                    />
                    <Link href='#' underline='none' color='secondary' variant='body2'>Terms and Conditions</Link>
            </Box>
            <Button sx={{textTransform: 'unset', marginBottom:'25px'}} variant="contained"  color='secondary' size='large' fullWidth>Create my account</Button>
            <Box
                sx={{display:'flex', gap:'5px'}}>
                <Typography sx={{color: '#8a8a8a'}} variant='body2'>Already have an account?</Typography>
                <Link href='#' underline='none' color='secondary' variant='body2'>Sign in</Link>
            </Box>
      </Box>
      </Box>
    </div>
  )
}

export default RegisterForm
