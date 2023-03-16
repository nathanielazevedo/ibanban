import { Box } from "@mui/material";
import stack from "../../utils/PlanetDefender";

type Footer = {
  stack: stack;
  children: React.ReactNode;
};

const Footer = ({ stack, children }: Footer) => {
  return <Box className="planet-defender-footer">{children}</Box>;
};

export default Footer;
