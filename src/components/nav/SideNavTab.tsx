//components
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

type SideTab = {
  title: string;
  setSideNavOpen: (state: boolean) => void;
};

const SideTab = ({ title, setSideNavOpen }: SideTab) => {
  return (
    <NavLink
      replace
      onClick={() => setSideNavOpen(false)}
      to={`/ibanban/deck/${title.replaceAll(" ", "_")}/overview`}
      className={({ isActive }) => (isActive ? "side-tab-active" : "")}
    >
      <ListItem sx={{ padding: "0 4vw" }}>
        <ListItemButton>
          <ListItemText
            primary={<Typography variant="caption">{title}</Typography>}
          />
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
};

export default SideTab;
