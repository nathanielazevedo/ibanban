import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import Tab from "./TopNavTab";
import Panda from "../../assets/panda.svg";

type TopNav = {
  setSideNavOpen: (state: boolean) => void;
};

const TopNav = ({ setSideNavOpen }: TopNav) => {
  const location = useLocation();
  const showTabs = location.pathname.split("/").includes("deck");

  return (
    <AppBar className="top-nav" elevation={0}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <MenuIcon className="menuIcon" onClick={() => setSideNavOpen(true)} />
        {showTabs && (
          <div
            style={{
              display: "flex",
              justifySelf: "flex-start",
              marginLeft: "20px",
            }}
          >
            {["Overview", "Spelling", "Games"].map((name, i) => {
              return <Tab key={i} name={name} />;
            })}
          </div>
        )}
      </div>
      <Link
        to="/ibanban/"
        style={{
          display: "flex",
          alignItems: "center",
          paddingRight: "40px",
        }}
      >
        <img
          src={Panda}
          width="32px"
          height="32px"
          style={{ marginRight: "10px", paddingTop: "5px" }}
        />
        <Typography sx={{ fontSize: "25px", color: "lightblue" }}>
          Ibanban
        </Typography>
      </Link>
    </AppBar>
  );
};

export default TopNav;
