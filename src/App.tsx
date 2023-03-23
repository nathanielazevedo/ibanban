import { useMemo } from "react";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { useAppSelector } from "./hooks/redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// PAGES
import Map from "./apps/ibanban";
import Welcome from "./apps/welcome";
import LoginPage from "./apps/login";
import Navbar from "./components/nav/Navbar";
import HomePage from "./apps/social/homepage";
import FourOFour from "./components/FourOFour";
import Overview from "./apps/ibanban/main";
import ProfilePage from "./apps/social/profilePage";
import Spelling from "./apps/ibanban/games/spellingNinja";
import Jumper from "./apps/ibanban/games/jumpingJiao/JumpingJIao";
import PlanetDefenderWrapper from "./apps/ibanban/games/planetDefender/PlanetDefenderWrapper";

const App = () => {
  const mode = useSelector((state) => "dark");
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useAppSelector((state) => state.token));

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div id="main" className="min-h-[100vh] bg-primary">
          <Routes>
            <Route path="/ibanban/login" element={<LoginPage />} />
            <Route path="/ibanban/social">
              <Route
                path="home"
                element={
                  isAuth ? <HomePage /> : <Navigate to="/ibanban/login" />
                }
              />
              <Route
                path="profile/:userId"
                element={
                  isAuth ? <ProfilePage /> : <Navigate to="/ibanban/login" />
                }
              />
            </Route>
            <Route element={<Navbar />}>
              <Route path="/ibanban/" element={<Welcome />} />
              <Route path="/ibanban/map" element={<Map />} />
              <Route path="/ibanban/deck/:deckName" element={<Overview />} />
              <Route
                path="/ibanban/deck/:deckName/planetDefender"
                element={<PlanetDefenderWrapper />}
              />
              <Route
                path="/ibanban/deck/:deckName/SpellingNinja"
                element={<Spelling />}
              />
              <Route
                path="/ibanban/deck/:deckName/jumpingJiao"
                element={<Jumper />}
              />
              <Route path="*" element={<FourOFour />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
