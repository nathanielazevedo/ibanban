import Form from "./Form";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const LoginPage = () => {
  const theme = useTheme();
  const isNoneMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        sx={{
          backgroundColor: `${theme.palette.background.alt}`,
        }}
        // backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Ibanban Social
        </Typography>
      </Box>
      <Box
        width={isNoneMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        sx={{
          backgroundColor: `${theme.palette.background.alt}`,
        }}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Ibanban Social! Share your Chinese experiences.
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
