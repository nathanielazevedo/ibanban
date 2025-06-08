import { useParams } from "react-router-dom";
import decks from "../data/index";

//components
import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import Games from "../games/GamesMain";
import WordCard from "./components/WordCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Overview = () => {
  const { deckName } = useParams();
  if (!deckName) return <></>;

  const deck = decks[deckName];
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Box
        sx={{
          margin: "0 auto",
          pb: 10,
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="overview tabs"
          >
            <Tab label="Words" {...a11yProps(0)} />
            <Tab label="Sentences" {...a11yProps(1)} />
            <Tab label="Games" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Box
            sx={{
              width: { xs: "320px", sm: "520px" },
              margin: "0 auto",
              paddingTop: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {deck.words.map((word, i) => (
              <WordCard key={i} word={word} />
            ))}
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Box
            sx={{
              width: { xs: "320px", sm: "520px" },
              margin: "0 auto",
              paddingTop: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {deck.sentences.map((word, i) => (
              <WordCard key={i} word={word} />
            ))}
          </Box>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Games />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Overview;
