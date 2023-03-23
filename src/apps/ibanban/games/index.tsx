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
    <Box>
      <Box className="w-[320px] sm:w-[520px] m-auto pt-5">
        {games.map((game, i) => (
          <Link
            to={
              game.difficulty == "In Dev"
                ? ""
                : location.pathname + "/" + game.title.replace(/\s+/g, "")
            }
          >
            <Paper
              key={i}
              elevation={2}
              className="flex justify-between items-center mt-5 p-5 hover:bg-primary"
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
