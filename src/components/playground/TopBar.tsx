import * as React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineTimer } from "react-icons/md";
import style from "@/styles/typography-styles.module.css";


// import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { AppBar, IconButton, Stack, Toolbar } from "@mui/material";

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
          {/* <Typography
            variant="LabelLarge"
            sx={{ display: "flex", alignItems: "center" }}
          > */}
          <p className={style.LabelLarge} style={{ display: "flex", alignItems: "center" }}>
            <MdOutlineTimer style={{ marginRight: "8px" }} />
            Time Left: 00:00:00
            {/* </Typography> */}
          </p>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          {/* <Typography variant="LabelLarge"> */}
          <p className={style.LabelLarge}>
            Playground </p>
          {/* </Typography> */}
          {/* <Typography variant="LabelLarge"> */}
          <p className={style.LabelLarge}>
            Submissions </p>
          {/* </Typography> */}
          {/* <Typography variant="LabelLarge"> */}
          <p className={style.LabelLarge}>
            Leaderboard</p>
          {/* </Typography> */}
          {/* <Typography variant="LabelLarge"> */}
          <p className={style.LabelLarge}>
            Editorial </p>
          {/* </Typography> */}
        </Stack>
        {HeaderComponent}
      </Toolbar>
    </AppBar>
  );
}
