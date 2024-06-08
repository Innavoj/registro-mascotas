 
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
import { Link } from "react-router-dom";
// import { loginGoogle } from "../redux/authServices";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";




 function loginGoogle() {
  const auth = getAuth();
  signInWithPopup(auth, GoogleAuthProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('login en Google' + user + token);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log('error en login de Google' + errorMessage + credential);
      // ...
    });
}

export default function RegisterPages() {


  const handleLoginGoogle = () => {
    loginGoogle();
  }

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
              <ButtonAction  onClick={loginGoogle} color='primary' variant='contained' texto='Login con Google' startIcon={<GoogleIcon />}  />
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