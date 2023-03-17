import { Box, Paper, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const games = [
    "Spelling Ninja",
    "Planet Defender",
    "Jumper Jiao",
    "Self Hearing",
  ];
  return (
    <Box className="overview-container">
      {games.map((title, i) => (
        <Link to={location.pathname + "/" + title.replace(/\s+/g, "")}>
          <Paper
            key={i}
            elevation={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
              padding: "30px 20px",
              ":hover": {
                boxShadow: 20,
              },
            }}
          >
            <Typography color="white" variant="h5">
              {title}
            </Typography>

            <Typography color="lightgreen" variant="h6">
              easy
            </Typography>
          </Paper>
        </Link>
      ))}
    </Box>
  );
};

export default Main;
