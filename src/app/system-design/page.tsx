"use client";
import {
    Button,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";

export default function SystemDesignPage() {
  const workItems = [
    "Graph the number of earthquakes that have occurred over the last 30 days",
    "Create a page to display a map of all earthquakes that have occurred in the last 24 hours",
    "Send text notifications to users when an earthquake occurs over magnitude 5.0",
  ];
  return (
    <Stack gap={2} alignItems={"center"}>
      <Typography variant="h1">System Design</Typography>
      <Typography variant="h2">Requirements</Typography>
      <Typography>
        In words describe how you would design a system to track earthquakes
        over time, as this data from the endpoint is only a single day worth of
        earthquakes. Future use cases we need to support are:
      </Typography>
      <List>
        {workItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${index + 1}. ${item}`} />
          </ListItem>
        ))}
      </List>
      <Typography>
        <strong>
          Feel free to write down your thoughts in a google doc or text file.
        </strong>
      </Typography>
      <Button href="/non-technical" variant="contained">
        Next
      </Button>
    </Stack>
  );
}
