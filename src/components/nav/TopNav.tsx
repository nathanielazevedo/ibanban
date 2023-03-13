//functionality
import { Link, useLocation } from "react-router-dom";

//components
import TopNavTab from "./TopNavTab";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";

//assets
import MenuIcon from "@mui/icons-material/Menu";
import Panda from "../../assets/panda.svg";

type TopNav = {
  setSideNavOpen: (state: boolean) => void;
};

const TopNav = ({ setSideNavOpen }: TopNav) => {
  const location = useLocation();
  const tabNames = ["Overview", "Spelling", "Games"];
  const showTabs = location.pathname.split("/").includes("deck");

  return (
    <AppBar className="top-nav" elevation={0}>
      <div className="flex-center">
        <MenuIcon className="menuIcon" onClick={() => setSideNavOpen(true)} />
        {showTabs &&
          tabNames.map((name) => <TopNavTab key={name} name={name} />)}
      </div>
      <Link to="/ibanban/" className="flex-center">
        <img src={Panda} className="top-nav-logo" />
        <Typography color="lightblue" variant="h5">
          Ibanban
        </Typography>
      </Link>
    </AppBar>
  );
};

export default TopNav;
