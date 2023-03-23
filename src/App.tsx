import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Overview from "./pages/Overview";
import Spelling from "./pages/Spelling";
import Jumper from "./pages/JumpingJIao";
import PlanetDefenderWrapper from "./pages/PlanetDefenderWrapper";
import FourOFour from "./pages/FourOFour";
import Map from "./pages/Map";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import Navbar from "./components/nav/Navbar";
import LoginPage from "./pages/loginPage";
import { useSelector } from "react-redux";
import ProfilePage from "./pages/social/profilePage";
import HomePage from "./pages/social/homepage";
import { useAppSelector } from "./hooks/redux";

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
