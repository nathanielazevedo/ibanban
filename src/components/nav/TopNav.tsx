//functionality
import { Link, useLocation } from "react-router-dom";

//components
import TopNavTab from "./TopNavTab";
import AppBar from "@mui/material/AppBar";
import { Button, Typography } from "@mui/material";

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
      <div className="top-nav">
        <div className="flex-center">
          <Button
            style={{ marginRight: "20px" }}
            variant="outlined"
            onClick={() => setSideNavOpen(true)}
          >
            Decks
          </Button>
          {showTabs &&
            tabNames.map((name) => <TopNavTab key={name} name={name} />)}
        </div>
        <Link to="/ibanban/" className="flex-center">
          <img src={Panda} className="top-nav-logo" />
          <Typography color="lightblue" variant="h4" fontWeight="bold">
            Ibanban
          </Typography>
        </Link>
      </div>
    </AppBar>
  );
};

export default TopNav;
