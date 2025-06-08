import { useState } from "react";
import { close, logo } from "../assets";
import { navLinks } from "../apps/welcome/constants";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { Outlet } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname === "/home" || pathname === "";
  const isMap = pathname === "/map";
  const { palette } = useTheme();

  const getNav = () => {
    if (isHome) {
      return (
        <Link to="/map">
          <Button />
        </Link>
      );
    } else if (isMap) {
      return <></>;
    } else {
      return (
        <Link to="/map">
          <Typography
            sx={{
              textDecoration: "underline",
              color: palette.primary.main,
              "&:hover": {
                cursor: "pointer",
                color: palette.primary.light,
              },
            }}
          >
            Back to Map
          </Typography>
        </Link>
      );
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "black",
          zIndex: 7,
          display: "flex",
          justifyContent: "center",
          px: 4,
        }}
      >
        <Box
          component="nav"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
          }}
        >
          <Link to="/home">
            <Box
              component="img"
              src={logo}
              alt="Ibanban"
              sx={{ width: "135px", height: "48px" }}
            />
          </Link>

          {getNav()}
        </Box>
      </Box>

      <Outlet />
    </>
  );
};

export default Navbar;
