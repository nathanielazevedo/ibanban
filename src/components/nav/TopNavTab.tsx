//functionality
import { NavLink, useLocation } from "react-router-dom";

//components
import { Typography } from "@mui/material";

const TopNavTab = ({ name }: { name: string }) => {
  const location = useLocation();
  const splitLocation = location.pathname.split("/");
  splitLocation[4] = name.toLowerCase();
  const finalRoute = splitLocation.join("/");

  return (
    <Typography className="top-nav-tab" variant="subtitle2">
      <NavLink to={finalRoute} className="tab">
        {name}
      </NavLink>
    </Typography>
  );
};

export default TopNavTab;
