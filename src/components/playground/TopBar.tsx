import * as React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineTimer } from "react-icons/md";

import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";

export type TopBarProps = {
  HeaderComponent: JSX.Element;
};

export default function TopBar({ HeaderComponent }: TopBarProps) {
  return (
    <AppBar
      color="inherit"
      elevation={2}
      position="fixed"
      sx={{ maxHeight: "64px" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton size="small">
            <HiOutlineMenu />
          </IconButton>
          <Typography
            variant="LabelLarge"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <MdOutlineTimer style={{ marginRight: "8px" }} />
            Time Left: 00:00:00
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="LabelLarge">Playground</Typography>
          <Typography variant="LabelLarge">Submissions</Typography>
          <Typography variant="LabelLarge">Leaderboard</Typography>
          <Typography variant="LabelLarge">Editorial</Typography>
        </Stack>
        {HeaderComponent}
      </Toolbar>
    </AppBar>
  );
}
