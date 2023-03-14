import React from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import { Typography, Box, Stepper, Step, StepLabel } from "@mui/material";

const SectionThree = () => {
  return (
    <div
      style={{
        height: "50vh",

        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Box>
        <Stepper alternativeLabel activeStep={2} className="stepper">
          {[
            {
              title: "Learn",
              description:
                "View our list of curarated Mandarin words. Starting from the basics",
              icon: LocalLibraryIcon,
            },
            {
              title: "Practice",
              description: "Practice spelling. No pressure, do your best.",
              icon: SpellcheckIcon,
            },
            {
              title: "Play",
              description:
                "Have fun with using your newly learned vocabulary. Play games.",
              icon: SportsEsportsIcon,
            },
          ].map((label, i) => (
            <Step key={i} sx={{ fontSize: "50px", padding: "0 30px" }}>
              <StepLabel
                sx={{ fontSize: "50px" }}
                StepIconComponent={label.icon}
              >
                <Typography color="lightblue" variant="h5">
                  {label.title}
                </Typography>
                <Typography style={{ color: "white", maxWidth: "300px" }}>
                  {label.description}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
};

export default SectionThree;
