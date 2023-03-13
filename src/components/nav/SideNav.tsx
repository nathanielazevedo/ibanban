import { Drawer as MuiDrawer, List } from "@mui/material";
import { Titles } from "../../data/Titles";
import SideTab from "./SideNavTab";

type SideNav = {
  sideNavOpen: boolean;
  setSideNavOpen: (state: boolean) => void;
};

const SideNav = ({ sideNavOpen, setSideNavOpen }: SideNav) => {
  return (
    <MuiDrawer
      open={sideNavOpen}
      variant="temporary"
      onClose={() => setSideNavOpen(false)}
      PaperProps={{
        elevation: 0,
      }}
    >
      <List>
        {Titles.map((text, index) => (
          <SideTab
            key={index}
            title={text.english}
            setSideNavOpen={setSideNavOpen}
          />
        ))}
      </List>
    </MuiDrawer>
  );
};

export default SideNav;
