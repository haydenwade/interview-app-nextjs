"use client";
import {
    Button,
    Checkbox,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";
import { useState, useEffect } from "react";

export default function PairProgrammingPage() {
  const requirements = [
    "Use this code base: modify existing files, create new files, and add new dependencies as needed",
    "Use Material UI (MUI - https://mui.com/material-ui/all-components/) for styling",
    "Create as many components as needed to complete the tasks",
    "Create as many API endpoints as needed to complete the tasks",
    "Explain some of your design decisions as you go along",
  ];
  
  const workItems = [
    "Create API endpoint to fetch list of earthquakes from USGS API (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson)",
    "Create a new page to display a list of earthquakes using the API endpoint you just created; Display high level information about the earthquake (name, magnitude, nearest city, time of occurrence)",
    "Create a new page to display a single earthquake; Display detailed information about the earthquake: list of all nearest cities and their distance from the earthquake epicenter",
    "Update the list of earthquakes page to include a link to the single earthquake page",
    "Update the list of earthquakes to allow filtering by magnitude",
    "Add a summary section to the list of earthquakes page that shows the total number of earthquakes and the average magnitude of all earthquakes",
  ];

  // Initialize state from local storage or use default values
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    () =>
      JSON.parse(localStorage.getItem("checkedItems") || "[]") ||
      Array(workItems.length).fill(false)
  );

  useEffect(() => {
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleToggle = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleClearAll = () => {
    setCheckedItems(Array(workItems.length).fill(false));
  };

  return (
    <Stack gap={2} alignItems={"center"}>
      <Typography variant="h1">Pair Programming</Typography>
      <Typography variant="h2">Instructions</Typography>
      <Typography>
        Work together to complete the following tasks. Check off each task as
        you complete it. You will be leading. Feel free to use any resources you
        want to complete the tasks.
      </Typography>
      <Typography variant="h3">Requirements</Typography>
      <List>
        {requirements.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${index + 1}. ${item}`} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h3">Work Items</Typography>
      <List>
        {workItems.map((item, index) => (
          <ListItem key={index} onClick={() => handleToggle(index)}>
            <Checkbox checked={checkedItems[index] || false} />
            <ListItemText primary={`${index + 1}. ${item}`} />
          </ListItem>
        ))}
      </List>
      <Stack flexDirection={"row"} gap={2}>
        <Button onClick={handleClearAll} variant="outlined">
          Clear All
        </Button>
        <Button href="/follow-up" variant="contained">
          Next
        </Button>
      </Stack>
    </Stack>
  );
}
