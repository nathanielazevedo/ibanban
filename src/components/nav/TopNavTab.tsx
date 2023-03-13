import { Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

const Tab = ({ name }: { name: string }) => {
  const location = useLocation();
  const splitLocation = location.pathname.split("/");
  splitLocation[4] = name.toLowerCase();
  const finalRoute = splitLocation.join("/");

  return (
    <Typography
      variant="subtitle2"
      sx={{ color: "rgb(255, 255, 255, 0.7)" }}
      mr="20px"
    >
      <NavLink
        to={finalRoute}
        className={({ isActive }) => (isActive ? "active tab" : "tab")}
      >
        {name}
      </NavLink>
    </Typography>
  );
};

export default Tab;
