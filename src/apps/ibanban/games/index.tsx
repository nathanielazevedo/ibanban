import { Box, Paper, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import LockIcon from "@mui/icons-material/Lock";
import CheckIcon from "@mui/icons-material/Check";

const Main = () => {
  const location = useLocation();
  const levels = useAppSelector((state) => state.level);
  const currentLevel = useAppSelector((state) => state?.currentLevel);
  const levelInfo = levels[currentLevel];

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
          let completed = levelInfo[game.name];
          let unlocked = i == 0 ? true : levelInfo[game.previous];
          const getIcon = () => {
            if (completed) return <CheckIcon style={{ color: "green" }} />;
            if (i === 0 || unlocked) return <></>;
            else return <LockIcon fontSize="large" />;
          };

          return (
            <Link
              key={i}
              to={
                !unlocked
                  ? ""
                  : location.pathname + "/" + game.title.replace(/\s+/g, "")
              }
            >
              <Paper
                key={i}
                elevation={2}
                className={`flex justify-between items-center mt-5 p-5 hover:bg-primary ${
                  unlocked ? "" : "opacity-50"
                }`}
              >
                <Typography
                  color={game.difficulty == "In Dev" ? "grey" : "white"}
                >
                  {game.title}
                </Typography>

                <Typography color={"grey"}>{getIcon()}</Typography>
              </Paper>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default Main;
