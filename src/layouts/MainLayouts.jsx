import { ClerkProvider  } from '@clerk/clerk-react';
import {   Outlet   } from "react-router-dom";
 
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";



// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}



export default function MainLayouts() {
  return (
    <>
      <ClerkProvider 
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}>
        <NavBar />
        <main>
            <Outlet />
        </main>
        <Footer />
      </ClerkProvider>
    </>
  );
}
