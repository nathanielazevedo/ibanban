//functionality
import { register } from "../data";
import { useParams } from "react-router-dom";

//components
import { Box, Tab, Tabs, Typography } from "@mui/material";

import React from "react";
import Games from "../games";
import InfoCard from "./components/InfoCard";
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
  const deck = register[deckName];
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="bg-primary h-[90vh]">
      <Box className="bg-primary w-[90vw] m-auto">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Deck Info" {...a11yProps(0)} />
            <Tab label="Words" {...a11yProps(0)} />
            <Tab label="Sentences" {...a11yProps(1)} />
            <Tab label="Games" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box className="w-[320px] sm:w-[520px] m-auto bg-primary pt-5">
            <InfoCard deck={deck} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box className="w-[320px] sm:w-[520px] m-auto bg-primary pt-5">
            {deck.words.map((word, i) => (
              <WordCard key={i} word={word} />
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box className="w-[320px] sm:w-[520px] m-auto bg-primary pt-5">
            {deck.sentences.map((word, i) => (
              <WordCard key={i} word={word} />
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Games />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Overview;
