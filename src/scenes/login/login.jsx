import React from 'react';
import LoginForm from '../../components/LoginForm';
import {Grid} from "@mui/material";
import {Image} from "mui-image";

const login = () => {
    return (
        <div className="login">
          <Grid container >
            <Grid item xs={6}>
              <LoginForm />
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


export default login
