import Panda from "../../assets/panda.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          height: "200px",
          width: "85vw",
          borderTop: "solid rgba(255, 255, 255, 0.12) 1px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 100px",
        }}
      >
        <div>
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
        <div>
          <LinkedInIcon style={{ fontSize: "45px", marginRight: "20px" }} />
          <GitHubIcon style={{ fontSize: "45px" }} />
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
