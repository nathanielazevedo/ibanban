import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

// PAGES
import Map from "./apps/ibanban/Map";
import Welcome from "./apps/welcome/Welcome";
import Navbar from "./components/Navbar";
import FourOFour from "./components/FourOFour";
import Overview from "./apps/ibanban/main/DeckMain";
import Spelling from "./apps/ibanban/games/spellingNinja/SpellingNinja";
import Jumper from "./apps/ibanban/games/jumpingJiao/JumpingJIao";
import PlanetDefenderWrapper from "./apps/ibanban/games/planetDefender/PlanetDefenderWrapper";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={createTheme(themeSettings("dark"))}>
        <CssBaseline />
        <div id="main" className="min-h-[100vh] bg-primary">
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<Welcome />} />
              <Route path="/map" element={<Map />} />
              <Route path="/deck/:deckName" element={<Overview />} />
              <Route
                path="/deck/:deckName/planetDefender"
                element={<PlanetDefenderWrapper />}
              />
              <Route
                path="/deck/:deckName/SpellingNinja"
                element={<Spelling />}
              />
              <Route path="/deck/:deckName/jumpingJao" element={<Jumper />} />
              <Route path="*" element={<FourOFour />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
