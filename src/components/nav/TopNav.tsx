//functionality
import { Link, useLocation } from "react-router-dom";

//components
import TopNavTab from "./TopNavTab";
import AppBar from "@mui/material/AppBar";
import { Box, Button, Typography } from "@mui/material";

//assets
import Panda from "../../assets/panda.svg";

type TopNav = {
  setSideNavOpen: (state: boolean) => void;
};

const TopNav = ({ setSideNavOpen }: TopNav) => {
  const location = useLocation();
  const tabNames = ["Review", "Games"];
  const showTabs = location.pathname.split("/").includes("deck");

  return (
    <AppBar elevation={0} style={{ minWidth: "100vw" }}>
      <Box className="top-nav fc">
        <Box className="fc">
          <Button
            className="top-nav-button"
            variant="contained"
            onClick={() => setSideNavOpen(true)}
          >
            Decks
          </Button>
          {showTabs &&
            tabNames.map((name) => <TopNavTab key={name} name={name} />)}
        </Box>
        <Link to="/ibanban/" className="fc">
          <img src={Panda} className="top-nav-logo" />
          <Typography
            className="top-nav-ibanban"
            color="lightblue"
            variant="h4"
            fontWeight="bold"
          >
            Ibanban
          </Typography>
        </Link>
      </Box>
    </AppBar>
  );
};

export default TopNav;
