import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import TopNav from "./components/nav/TopNav";
import SideNav from "./components/nav/SideNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Welcome from "./pages/Welcome";
import Overview from "./pages/Overview";
import Spelling from "./pages/Spelling";
import Games from "./pages/Games";
import Jumper from "./pages/JumpingJIao";
import PlanetDefenderWrapper from "./pages/PlanetDefenderWrapper";
import FourOFour from "./pages/FourOFour";
import Map from "./pages/Map";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1a1a1a",
      paper: "#1a1a1a",
    },
  },
  typography: {
    fontFamily: "Rubik, sans-serif;",
  },
});
const App = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        {/* <Box sx={{ maxWidth: "100vw", overflowX: "hidden" }}> */}
        <CssBaseline />
        {/* <TopNav setSideNavOpen={setSideNavOpen} /> */}
        <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
        <div id="main">
          <Routes>
            <Route
              path="/ibanban/"
              element={<Welcome set={setSideNavOpen} />}
            />
            <Route path="/ibanban/map" element={<Map />} />
            <Route
              path="/ibanban/deck/:deckName/review"
              element={<Overview />}
            />
            <Route
              path="/ibanban/deck/:deckName/spelling"
              element={<Spelling />}
            />
            <Route path="/ibanban/deck/:deckName/games" element={<Games />} />
            <Route
              path="/ibanban/deck/:deckName/games/planetDefender"
              element={<PlanetDefenderWrapper />}
            />
            <Route
              path="/ibanban/deck/:deckName/games/spellingNinja"
              element={<Spelling />}
            />
            <Route
              path="/ibanban/deck/:deckName/games/jumpingJiao"
              element={<Jumper />}
            />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </div>
        {/* </Box> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
