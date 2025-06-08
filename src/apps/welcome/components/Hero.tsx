import { Box, Typography } from "@mui/material";
import polygons from "../../../assets/polygons.png";

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        padding: "150px 24px 70px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
      }}
    >
      {/* Text content */}
      <Box
        sx={{
          flex: 1,
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(32px, 6vw, 64px)",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Learn{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(to right, #4facfe, #00f2fe)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mandarin
          </Box>
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(28px, 5vw, 56px)",
            lineHeight: 1.2,
            marginTop: "8px",
            marginBottom: "20px",
          }}
        >
          with games.
        </Typography>

        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: 1.6,
            color: "#ccc",
          }}
        >
          We offer a fun and interactive way to learn Mandarin Chinese through
          games! Our games are designed to help you build your vocabulary and
          gain confidence in using Mandarin Chinese.
        </Typography>
      </Box>

      {/* Image content */}
      <Box
        component="img"
        src={polygons}
        alt="Cool Mandarin-themed visual"
        sx={{
          flex: 1,
          maxWidth: "500px",
          width: "100%",
          borderRadius: "16px",
          boxShadow: 3,
          display: { xs: "none", sm: "block" },
        }}
      />
    </Box>
  );
};

export default Hero;
