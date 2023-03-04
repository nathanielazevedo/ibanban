import {
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Titles } from "../data/Titles";

const Drawer = () => {
  return (
    <MuiDrawer
      open={false}
      //   onClose={() => setSideNav(false)}
      variant="temporary"
      PaperProps={{
        elevation: 0,
      }}
    >
      <List>
        {Titles.map((text, index) => (
          <ListItem
            key={index}
            sx={{
              padding: "0 55px",
            }}
            onClick={() => {}}
          >
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption">{text.english}</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
};

export default Drawer;
