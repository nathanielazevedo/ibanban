import { Box, Paper, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import LockIcon from "@mui/icons-material/Lock";

const Main = () => {
  const location = useLocation();
  const levels = useAppSelector((state) => state.level);
  const currentLevel = useAppSelector((state) => state?.currentLevel);
  console.log(currentLevel);
  const games = [
    { title: "Spelling Ninja", difficulty: "easy" },
    { title: "Planet Defender", difficulty: "easy" },
  ];

  return (
    <Box>
      <Box className="w-[320px] sm:w-[520px] m-auto pt-5">
        {games.map((game, i) => {
          let completed = false;
          if (i === 0) {
            completed = true;
          } else {
            let lowerCaseFirstLevel = game.title.split("")[0].toLowerCase();
            let titleAsKey =
              lowerCaseFirstLevel +
              games[i - 1].title.slice(1).replace(/\s+/g, "");
            console.log(currentLevel);
            if (levels[currentLevel]) {
              // getting level info
              const spot = levels[currentLevel]; // ex. spelling defender
              if (spot[titleAsKey]) {
                // getting game info
                completed = true;
              }
            }
          }

          return (
            <Link
              key={i}
              to={
                game.difficulty == "In Dev" || !completed
                  ? ""
                  : location.pathname + "/" + game.title.replace(/\s+/g, "")
              }
            >
              <Paper
                key={i}
                elevation={2}
                className={`flex justify-between items-center mt-5 p-5 hover:bg-primary ${
                  completed ? "" : "opacity-50"
                }`}
              >
                <Typography
                  color={game.difficulty == "In Dev" ? "grey" : "white"}
                >
                  {game.title}
                </Typography>

                <Typography color={"grey"}>
                  {!completed ? <LockIcon fontSize="large" /> : game.difficulty}
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
