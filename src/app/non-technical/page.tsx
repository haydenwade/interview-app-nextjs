"use client";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function NonTechnicalQuestionsPage() {
  const items = [
    "Do you feel this was a fair evaluation of your skills?",
    "If you started tomorrow would I be surprised by anything?",
    "What are you looking to get out of this job?",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <Stack gap={2} alignItems={"center"}>
      <Typography variant="h1">Non-Technical Questions</Typography>
      <Typography variant="h5">{items[currentIndex]}</Typography>
      {currentIndex < items.length - 1 && (
        <Button onClick={handleNext} variant="contained">
          Next
        </Button>
      )}
      {currentIndex === items.length - 1 && (
        <Button href="/" variant="contained">
          Done
        </Button>
      )}
    </Stack>
  );
}
