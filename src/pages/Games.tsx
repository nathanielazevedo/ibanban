import { Box, Paper, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const games = ["spellingNinja", "planetDefender"];
  return (
    <Box className="overview-container">
      {games.map((title, i) => (
        <Link to={location.pathname + "/" + title}>
          <Paper
            key={i}
            elevation={2}
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              padding: "30px 50px",
            }}
          >
            <Box width="100%">
              <Typography color="white" variant="h5">
                {title}
              </Typography>
            </Box>
          </Paper>
        </Link>
      ))}
    </Box>
  );
};

export default Main;
