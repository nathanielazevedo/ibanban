import { Box, Paper, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const games = [
    { title: "Spelling Ninja", difficulty: "easy" },
    { title: "Planet Defender", difficulty: "easy" },
    { title: "Jumping Jiao", difficulty: "In Dev" },
    { title: "Self Hearing", difficulty: "In Dev" },
  ];
  return (
    <Box className="bg-primary h-[90vh]">
      <Box className="w-[320px] sm:w-[520px] m-auto bg-primary pt-5">
        {games.map((game, i) => (
          <Link to={location.pathname + "/" + game.title.replace(/\s+/g, "")}>
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
                  boxShadow: game.difficulty == "In Dev" ? 0 : 20,
                },
              }}
            >
              <Typography
                color={game.difficulty == "In Dev" ? "grey" : "white"}
                variant="h5"
              >
                {game.title}
              </Typography>

              <Typography
                color={game.difficulty == "In Dev" ? "grey" : "lightgreen"}
                variant="h6"
              >
                {game.difficulty}
              </Typography>
            </Paper>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Main;
