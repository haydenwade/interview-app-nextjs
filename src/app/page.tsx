'use client';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const agendaItems = [
    { text: "Introductions (2 minutes)", route: "/" },
    { text: "Pair programming (25 minutes)", route: "/pair-programming" },
    { text: "Follow-up questions (2 minutes)", route: "/follow-up" },
    { text: "System design (5 minutes)", route: "/system-design" },
    { text: "Non-technical questions (5 minutes)", route: "/non-technical" },
    { text: "Open for questions (5 minutes)", route: "/" },
  ];

  return (
    <Stack gap={2} alignItems={"center"}>
      <Typography variant="h1">Welcome!</Typography>
      <Typography variant="h2">Agenda</Typography>
      <Typography variant="h6">(45 minutes)</Typography>
      <List>
        {agendaItems.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => {
              router.push(item.route);
            }}
          >
            <ListItemText primary={`${index + 1}. ${item.text}`} />
          </ListItem>
        ))}
      </List>
      <Button href="/pair-programming" variant="contained">
        Let&apos;s get started!
      </Button>
    </Stack>
  );
}
