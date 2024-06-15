import React from "react";
import { useState } from "react";
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
import SendIcon from "@mui/icons-material/Send";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { app } from '../config/firebase';
// Initialize Firebase Authentication and get a reference to the service

import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/authSlice";



export default function LoginPages() {

  const userActive = useSelector((state) => state.isauth.value)
  const dispatch = useDispatch()
  //console.log('valor de useActive en LoginPages: ' + userActive)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

   const loginUser = async () => {
    const auth = getAuth(app);
     
    const Credential = await signInWithEmailAndPassword(auth, email, password)
    try {
      const useremail = Credential.user.email
      const { token, expirationTime} = await Credential.user.getIdTokenResult()
      console.log('login exitoso en Firebase: ' + useremail )
      console.log('Token: ' + token )
      console.log('Tiempo de Expiration: ' + expirationTime)
      dispatch(login())
      return navigate('/dashboard')
    } catch (error) {
      alert(' Error en login de Firebase: ' + error)
    }

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
                  <TextField
                    color="primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    type="email"
                    name="email"
                    variant="standard"
                    label="Email"
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                  />
                  <TextField
                    color="primary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    type="password"
                    name="password"
                    variant="standard"
                    label="Password"
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                  />

                  <ButtonAction
                    onClick={() => loginUser()}
                    color="info"
                    variant="contained"
                    texto="Log In"
                    endIcon={<SendIcon />}
                  />
                  <Divider sx={{ mt: 2, mb: 1 }}></Divider>
                  <Typography variant="subtitle2" sx={{ mt: 2, mb: 2 }}>
                    No tienes una cuenta? <Link to="/register">Sign Up</Link>
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
