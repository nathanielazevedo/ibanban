import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import router from "./router/routes";
import { RouterProvider } from "react-router-dom";

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

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <Box sx={{ maxheight: "100vh", maxWidth: "100vw" }}>
      <CssBaseline />
      <TopNav />
      <SideNav />
      <RouterProvider router={router} />
    </Box>
  </ThemeProvider>
);

export default App;
