import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignOutButton,
  useAuth 
} from "@clerk/clerk-react";
import { Grid, Stack } from "@mui/material";

function SingIn() {
  const { sessionId } = useAuth();
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Stack direction="row" spacing={4}>
          <Grid item>
            <SignedOut>
              <SignInButton    />
            </SignedOut>
          </Grid>

          <Grid item>
            <SignedIn>
              
              <SignOutButton    />
            </SignedIn>
          </Grid>
        </Stack>
      </Grid>
    </>
  );
}

export default SingIn;
