import React from 'react'
import RegisterForm from '../../components/RegisterForm';
import {Grid} from "@mui/material";
import {Image} from "mui-image";

const register = () => {
  return (
       <div className="register">
          <Grid container >
            <Grid item xs={6}>
              <RegisterForm />
            </Grid>
            <Grid item xs={6}>
              <Image 
                src="https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHVycGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" height='100vh'
                width='50vw'
                duration={1000}/>
            </Grid>
          </Grid>
        </div>
      );
}

export default register
