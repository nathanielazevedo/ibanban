import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const TopNav = () => {
  const [tab, setTab] = useState<string>();
  const [sideNav, setSideNav] = useState<boolean>(false);

  return (
    <AppBar
      elevation={0}
      sx={{
        height: "70px",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: "0 25px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <MenuIcon
          onClick={() => setSideNav(true)}
          sx={{ cursor: "pointer", color: "rgb(255, 255, 255, 0.7)" }}
        />
        {tab && (
          <div
            style={{
              display: "flex",
              justifySelf: "flex-start",
              marginLeft: "20px",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ cursor: "pointer", color: "rgb(255, 255, 255, 0.7)" }}
              mr="20px"
              onClick={() => setTab("overview")}
            >
              Overview
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ cursor: "pointer", color: "rgb(255, 255, 255, 0.7)" }}
              onClick={() => setTab("spelling")}
              mr="20px"
            >
              Spelling
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ cursor: "pointer", color: "rgb(255, 255, 255, 0.7)" }}
              onClick={() => setTab("game")}
              mr="20px"
            >
              Games
            </Typography>
          </div>
        )}
      </div>
      <Typography>Ibanban</Typography>
    </AppBar>
  );
};

export default TopNav;
