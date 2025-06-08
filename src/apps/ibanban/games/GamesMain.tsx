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
  ];

  return (
    <Box>
      <Box className="w-[320px] sm:w-[520px] m-auto pt-5">
        {games.map((game, i) => {
          return (
            <Link
              key={i}
              to={location.pathname + "/" + game.title.replace(/\s+/g, "")}
            >
              <Paper
                key={i}
                elevation={2}
                className={`flex justify-between items-center mt-5 p-5 hover:bg-primary`}
              >
                <Typography
                  color={game.difficulty == "In Dev" ? "grey" : "white"}
                >
                  {game.title}
                </Typography>
              </Paper>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default Main;
