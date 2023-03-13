import { Box, Typography } from "@mui/material";

const Footer = ({
  deckName,
  deckLength,
}: {
  deckName: string;
  deckLength: number;
}) => {
  return (
    <Box className="overview-footer">
      <Typography>{deckName}</Typography>
      <Typography>{deckLength}</Typography>
    </Box>
  );
};

export default Footer;
