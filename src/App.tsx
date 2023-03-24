import { useMemo } from "react";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { useAppSelector } from "./hooks/redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  createTheme,
  CssBaseline,
  PaletteOptions,
  ThemeProvider,
} from "@mui/material";

// PAGES
import Map from "./apps/ibanban";
import Welcome from "./apps/welcome";
import LoginPage from "./apps/login";
import Navbar from "./components/Navbar";
import HomePage from "./apps/social/homepage";
import FourOFour from "./components/FourOFour";
import Overview from "./apps/ibanban/main";
import ProfilePage from "./apps/social/profilePage";
import Spelling from "./apps/ibanban/games/spellingNinja";
import Jumper from "./apps/ibanban/games/jumpingJiao/JumpingJIao";
import PlanetDefenderWrapper from "./apps/ibanban/games/planetDefender/PlanetDefenderWrapper";

declare module "@mui/material/styles" {
  interface DefaultPaletteOptions extends PaletteOptions {
    palette?: {
      background?: any;
      neutral?: any;
    };
  }
  interface TypeBackground {
    alt?: string;
  }

  interface Palette {
    neutral: any;
  }
}

const App = () => {
  const mode = useSelector((state) => "dark");
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useAppSelector((state) => state.token));

  return (
    <BrowserRouter basename="/ibanban">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div id="main" className="min-h-[100vh] bg-primary">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/social">
              <Route
                path="home"
                element={isAuth ? <HomePage /> : <Navigate to="/login" />}
              />
              <Route
                path="profile/:userId"
                element={isAuth ? <ProfilePage /> : <Navigate to="/login" />}
              />
            </Route>
            <Route element={<Navbar />}>
              <Route path="/" element={<Welcome />} />
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
              <Route path="/deck/:deckName/jumpingJiao" element={<Jumper />} />
              <Route path="*" element={<FourOFour />} />
            </Route>
            <Route path="/" element={<Welcome />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
