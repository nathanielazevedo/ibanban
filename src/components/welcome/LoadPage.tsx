import { Typography } from "@mui/material";
import React from "react";

type LoadPageType = {
  showMainPage: boolean;
  showIbanban: boolean;
  englishIndex: number;
  text: string;
};

const LoadPage = ({
  showMainPage,
  englishIndex,
  showIbanban,
  text,
}: LoadPageType) => {
  return (
    <div
      className={showMainPage ? "dropPage" : ""}
      style={{
        background: "black",
        display: "flex",
        position: "absolute",
        zIndex: "5000",
        bottom: "0",
        height: "100vh",
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingTop: "20rem",
        paddingLeft: "4vw",
      }}
    >
      <Typography
        className={showMainPage ? "dropWord" : ""}
        variant="h1"
        fontSize="8rem"
        style={{ color: "grey" }}
      >
        {text.slice(0, englishIndex)}
      </Typography>
      {showIbanban && (
        <Typography
          className={showMainPage ? "dropWord" : ""}
          variant="h1"
          fontSize="8rem"
          style={{ color: "lightblue" }}
        >
          Ibanban
        </Typography>
      )}
    </div>
  );
};

export default LoadPage;
