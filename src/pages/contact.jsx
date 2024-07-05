import { Box, Container, Divider, Grid, Paper, TextField, Toolbar, Typography } from "@mui/material";
import ButtonAction from "../components/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";


export default function ContactPages() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


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
              <Paper elevation="3" 
                sx={{ textAlign: "center", p: "1.2em", borderRadius: "0.5em" }}
              >
                <Typography color="secondary"
                  fontFamily="serif"
                  variant="h4"
                  sx={{ pt: 2, pb: 2 }}
                >
                   Contáctame
                </Typography>

                <Box component="form">
                  <TextField
                    color="primary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    type="text"
                    name="name"
                    variant="standard"
                    label="Name"
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                  />
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
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    fullWidth
                    type="text"
                    name="subject"
                    variant="standard"
                    label="Your Subject..."
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                  />
                  <TextField
                    color="primary"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    fullWidth
                    type="text"
                    name="message"
                    variant="outlined"
                    label="Your Messages..."
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                    multiline
                  />
                  
                  <Divider sx={{ mt: 2, mb: 1 }}></Divider>
                  <ButtonAction
                    
                    color="secondary"
                    variant="contained"
                    texto="Send"
                    endIcon={<SendIcon />}
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      </>
    )
}