import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import ButtonAction from "../components/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from "react-router-dom";
// import { loginGoogle } from "../redux/authServices";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Google } from "../redux/authSlice";



export default function RegisterPages() {

  const userActive = useSelector((state) => state.isauth.value)
  const dispatch = useDispatch()
  //console.log('valor de useActive en LoginPages: ' + userActive)

  const navigate = useNavigate();


  const loginGoogle = () => {
    const auth = getAuth(app);
    const googleauthprovider = new GoogleAuthProvider();
    signInWithPopup(auth, googleauthprovider)
    .then((credential) => {
    const useremail = credential.user.email
    const userid = credential.user.uid
    const accessToken = credential.user.accessToken
    console.log('Login exitoso en Google: ' + useremail );
    console.log('User Id: ' + userid);
    console.log('Token: ' + accessToken);
    dispatch(Google())
    return navigate('/dashboard')
    })
    .catch((error) =>  {
      console.log('Error en Login Google: ' + error);
    })
      
  };

  return (
    <>
     <Box component="main" sx={{ flexGrow: 1, p: 4, textAlign: "center" }}>  
      <Container maxWidth="xs">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Paper
              sx={{ textAlign: "center", p: "1.2em", borderRadius: "0.5em" }}
            >
              <Typography  fontFamily='serif'  variant='h4' sx={{pt:2, pb:2}} >REGVAD</Typography>
              <ButtonAction  onClick={() => loginGoogle()} color='primary' variant='contained' texto='Login con Google' startIcon={<GoogleIcon />}  />
              <Divider sx={{mt:2, mb:1}}>OR</Divider>
              <Box component="form">
                <TextField
                  color="primary"
                  fullWidth
                  type="text"
                  name="email"
                  variant="standard"
                  label="Email"
                  sx={{ mt: 1.5, mb: 1.5 }}
                  required
                />
                <TextField
                  color="primary"
                  fullWidth
                  type="text"
                  name="fullname"
                  variant="standard"
                  label="Full Name"
                  sx={{ mt: 1.5, mb: 1.5 }}
                  required
                />
                <TextField
                  color="primary"
                  fullWidth
                  type="text"
                  name="username"
                  variant="standard"
                  label="Username"
                  sx={{ mt: 1.5, mb: 1.5 }}
                  required
                />
                <TextField
                  color="primary"
                  fullWidth
                  type="password"
                  name="password"
                  variant="standard"
                  label="Password"
                  sx={{ mt: 1.5, mb: 1.5 }}
                  required
                />
                <Typography variant='subtitle2' sx={{mt:1.5, mb:1.5}}>Al registrarte, aceptas nuestros Términos, Política de Privacidad y Política de Cookies.</Typography>
                <ButtonAction   onClick={() => alert('login')} color='info' variant='contained' texto='Sign Up' endIcon={<SendIcon />} />
                <Divider sx={{mt:2, mb:1}} ></Divider>
                <Typography  variant='subtitle2' sx={{mt:2, mb:2}}>Tienes una cuenta? <Link to='/login' >Log In</Link> </Typography> 
                
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
     </Box> 
    </>
  );
}