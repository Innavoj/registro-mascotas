// import { ClerkProvider } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

//import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { Box } from "@mui/material";
import MenuBar from "../components/MenuBar";

export default function MainLayouts() {
  return (
    <>
      <MenuBar />
      <main>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </main>
      <Footer />
    </>
  );
}
