import { Box } from "@mui/material";
import stack from "../../utils/stack";

type Footer = {
  stack: stack;
  children: React.ReactNode;
};

const Footer = ({ stack, children }: Footer) => {
  return (
    <Box
      sx={{
        height: "150px",
        width: "100%",
        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 2rem",
        position: "absolute",
        bottom: 0,
      }}
    >
      {children}
    </Box>
  );
};

export default Footer;
