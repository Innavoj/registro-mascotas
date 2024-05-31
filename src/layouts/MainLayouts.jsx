import { ClerkProvider } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HomePages from "../pages/home";
import DashboardPages from "../pages/dashboard";
import Routes from "../routes/index";
import { Box } from "@mui/material";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL = import.meta.env
  .NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL;
const NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL = import.meta.env
  .NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function MainLayouts() {
  return (
    <>
      <ClerkProvider
        routerPush={(to) => navigate(to)}
        routerReplace={(to) => navigate(to, { replace: true })}
        publishableKey={PUBLISHABLE_KEY}
        signInForceRedirectUrl={NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL}
        signUpForceRedirectUrl={NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL}
      >
        <NavBar />

        <main>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Outlet />
          </Box>
        </main>
        <Footer />
      </ClerkProvider>
    </>
  );
}
