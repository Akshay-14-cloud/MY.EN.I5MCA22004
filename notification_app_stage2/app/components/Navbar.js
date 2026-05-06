"use client";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Notification System
        </Typography>

        <Button color="inherit" onClick={() => router.push("/")}>
          All
        </Button>

        <Button color="inherit" onClick={() => router.push("/priority")}>
          Priority
        </Button>
      </Toolbar>
    </AppBar>
  );
}