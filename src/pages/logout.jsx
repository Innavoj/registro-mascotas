import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import ButtonAction from "../components/Button";
import SendIcon from "@mui/icons-material/Send";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { app } from '../config/firebase';
// Initialize Firebase Authentication and get a reference to the service

import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/authSlice";



export default function LogoutPages() {

  const userActive = useSelector((state) => state.isauth.value)
  const dispatch = useDispatch()
  //console.log('valor de useActive en LogoutPages: ' + userActive)

  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const navigate = useNavigate();


   function logoutUser() {
     const auth = getAuth();
     signOut(auth)
       .then(() => {
         // Sign-out successful.
         dispatch(logout())
         console.log('logout exitoso de firebase: ' + userActive);
         return navigate('/');

       })
       .catch((error) => {
         // An error happened.
         alert('Error en logout de firebase: ' + error);
       });
   };

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 2, textAlign: "center" }}>
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
                <Typography
                  fontFamily="serif"
                  variant="h4"
                  sx={{ pt: 2, pb: 2 }}
                >
                  REGVAD
                </Typography>

                <Box component="form">

                <Typography
                  fontFamily="serif"
                  variant="h5"
                  sx={{ pt: 2, pb: 2 }}
                >
                  Esta Seguro que quiere salir de la Aplicacion ?
                </Typography>
                  <Stack spacing={2}>
                  <ButtonAction
                    onClick={() => navigate('/dashboard')}
                    color="inherit"
                    variant="contained"
                    texto="cancelar"
                    
                  />
                  <ButtonAction
                    onClick={() => logoutUser()}
                    color="error"
                    variant="contained"
                    texto="Aceptar"
                    endIcon={<SendIcon />}
                  />
                  </Stack>
                  <Divider sx={{ mt: 2, mb: 1 }}></Divider>
                  
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}