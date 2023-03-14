import { Box, Typography } from "@mui/material";

const Footer = ({
  deckName,
  deckLength,
}: {
  deckName: string;
  deckLength: number;
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box className="overview-footer">
        <Typography>{deckName}</Typography>
        <Typography>{deckLength}</Typography>
      </Box>
    </div>
  );
};

export default Footer;
