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
      to={`/ibanban/deck/${title.replaceAll(" ", "_")}/overview`}
      replace
      className={({ isActive }) => (isActive ? "side-tab-active" : "")}
      onClick={() => setSideNavOpen(false)}
    >
      <ListItem
        sx={{
          padding: "0 55px",
        }}
        onClick={() => {}}
      >
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
