import { Box, Paper, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();

  const games = [
    {
      title: "Spelling Ninja",
      difficulty: "easy",
      previous: "none",
      name: "spellingNinja",
    },
    {
      title: "Planet Defender",
      difficulty: "easy",
      previous: "spellingNinja",
      name: "planetDefender",
    },
    // {
    //   title: "Jumping Jao",
    //   difficulty: "easy",
    //   previous: "planetDefender",
    //   name: "jumpingJao",
    // },
  ];

  return (
    <Box>
      <Box
        sx={{
          width: { xs: "320px", sm: "520px" },
          margin: "0 auto",
          // paddingTop: 2,
        }}
      >
        {games.map((game, i) => (
          <Link
            key={i}
            to={`${location.pathname}/${game.title.replace(/\s+/g, "")}`}
            style={{ textDecoration: "none" }}
          >
            <Paper
              elevation={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
                padding: "20px",
                // backgroundColor: "#1a1a1a",
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
            >
              <Typography
                color={game.difficulty === "In Dev" ? "grey.500" : "white"}
              >
                {game.title}
              </Typography>
            </Paper>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Main;
