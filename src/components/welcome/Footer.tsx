import Panda from "../../assets/panda.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="welcome-footer fc">
        <div className="welcome-footer-text">
          <Typography variant="h5" color="lightblue" fontWeight="bolder">
            Ibanban
          </Typography>
          <Typography style={{ fontStyle: "italic" }}>
            © Copyright 2022
          </Typography>
          <Typography style={{ fontStyle: "italic" }}>
            All rights reserved.
          </Typography>
        </div>
        <div className="welcome-footer-icons">
          <a href="https://www.linkedin.com/in/nateazevedo/" target="_blank">
            <LinkedInIcon style={{ fontSize: "45px", marginRight: "20px" }} />
          </a>
          <a href="https://github.com/nathanielazevedo" target="_blank">
            <GitHubIcon style={{ fontSize: "45px" }} />
          </a>
        </div>
        <img
          src={Panda}
          width="104px"
          height="104px"
          style={{ paddingTop: "10px" }}
        />
      </div>
    </div>
  );
};

export default Footer;
