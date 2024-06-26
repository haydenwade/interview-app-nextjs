"use client";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function FollowUpPage() {
  const items = [
    "If you had more time what would you do differently?",
    "What was the most challenging part of this project?",
    "Any vulnerabilities you see in your code/solution?",
    "How would you productionize this solution?",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <Stack gap={2} alignItems={"center"}>
      <Typography variant="h1">Follow Up Questions</Typography>
      <Typography variant="h5">{items[currentIndex]}</Typography>
      {currentIndex < items.length - 1 && (
        <Button onClick={handleNext} variant="contained">
          Next
        </Button>
      )}
      {currentIndex === items.length - 1 && (
        <Button href="/system-design" variant="contained">
          Done
        </Button>
      )}
    </Stack>
  );
}
