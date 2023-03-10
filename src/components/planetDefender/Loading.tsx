import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function CircularIndeterminate({
  className,
}: {
  className: string;
}) {
  return (
    <Box
      className={className}
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
        sx={{ display: className == "dropPage" ? "none" : "" }}
      />
      <Typography
        mt="50px"
        sx={{ display: className == "dropPage" ? "none" : "" }}
      >
        Preparing awesomeness...
      </Typography>
    </Box>
  );
}
