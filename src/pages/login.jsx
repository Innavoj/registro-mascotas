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
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { app } from '../config/firebase';
// Initialize Firebase Authentication and get a reference to the service








export default function LoginPages() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function loginUser() {
    const auth = getAuth(app);
    console.log('email: ' + email + 'password: ' + password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const emailuser = userCredential.user.email;
        const tokenId = userCredential.user.getIdToken();
        const userActive = true;
        
        console.log('login de firebase' + emailuser + tokenId);
        console.log('usuario Activo: ' + userActive);
        return userActive && navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error en login de firebase' + errorMessage);
      });
  };

  function logoutUser() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('logout de firebase');
      })
      .catch((error) => {
        // An error happened.
        console.log('error en logout de firebase');
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
                    onClick={loginUser}
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
