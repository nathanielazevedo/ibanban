import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useInterval } from "../../hooks/useIntreval";
import { useState } from "react";

const Loading = () => {
  const [count, setCount] = useState(0);
  useInterval(
    () => {
      setCount((o) => o + 1);
    },
    count > 3 ? null : 1000
  );
  return (
    <Box
      className={count > 3 ? "dropPage" : ""}
      sx={{
        background: "black",
        display: "flex",
        position: "absolute",
        bottom: "0",
        height: "100vh",
        width: "100%",
        flexDirection: "column",
        zIndex: "50000",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress
        size={"7rem"}
        sx={{ display: count > 3 ? "none" : "" }}
      />
      <Typography mt="50px" sx={{ display: count > 3 ? "none" : "" }}>
        Preparing awesomeness...
      </Typography>
    </Box>
  );
};

export default Loading;
