import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import TopNav from "./components/nav/TopNav";
import SideNav from "./components/nav/SideNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Welcome from "./pages/Welcome";
import Overview from "./pages/Overview";
import Spelling from "./pages/Spelling";
import Games from "./pages/Games";
import PlanetDefender from "./components/planetDefender/PlanetDefender";
import PlanetDefenderWrapper from "./pages/PlanetDefenderWrapper";

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
        <Box sx={{ maxheight: "100vh", maxWidth: "100vw" }}>
          <CssBaseline />
          <TopNav setSideNavOpen={setSideNavOpen} />
          <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
          <div
            id="main"
            style={{ height: "calc(100vh - 70px)", marginTop: "70px" }}
          >
            <Routes>
              <Route path="/ibanban/" element={<Welcome />} />
              <Route
                path="/ibanban/deck/:deckName/overview"
                element={<Overview />}
              />
              <Route
                path="/ibanban/deck/:deckName/overview"
                element={<Overview />}
              />
              <Route
                path="/ibanban/deck/:deckName/spelling"
                element={<Spelling />}
              />
              <Route path="/ibanban/deck/:deckName/games" element={<Games />} />
              <Route
                path="/ibanban/deck/:deckName/games/planetDefender"
                element={
                  <PlanetDefenderWrapper>
                    <PlanetDefender />
                  </PlanetDefenderWrapper>
                }
              />
              <Route path="*" element={<>Not found</>} />
            </Routes>
          </div>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
