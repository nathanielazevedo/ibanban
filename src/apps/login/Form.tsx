import Login from "./Login";
import { useState } from "react";
import Register from "./Register";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const isLogin = pageType === "login";
  const { palette } = useTheme();

  return (
    <>
      {isLogin ? <Login /> : <Register setPageType={setPageType} />}
      <Box>
        <Typography
          onClick={() => {
            setPageType(isLogin ? "register" : "login");
          }}
          sx={{
            textDecoration: "underline",
            color: palette.primary.main,
            "&:hover": {
              cursor: "pointer",
              color: palette.primary.light,
            },
          }}
        >
          {isLogin
            ? "Don't have an account? Sign Up here."
            : "Already have an account? Login here."}
        </Typography>
        <Link to="/map">
          <Typography
            sx={{
              textDecoration: "underline",
              color: palette.primary.main,
              "&:hover": {
                cursor: "pointer",
                color: palette.primary.light,
              },
            }}
          >
            Go back to Ibanban Map.
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default Form;
