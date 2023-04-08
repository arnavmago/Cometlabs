import * as React from "react";
import { useFormContext } from "react-hook-form";
import { HiOutlineShare } from "react-icons/hi";
import { arenaDetails } from "./types";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";

import { Box, Grid, Stack, Typography } from "@mui/material";

export default function Share() {
  const { watch } = useFormContext();
  const details: arenaDetails = watch("details");
  const imageUrl = details.imageUrl ? details.imageUrl : "https://www.cometlabs.in/";

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <HiOutlineShare />
          <Typography variant="TitleMedium" sx={{ ml: "8px" }}>
            Share On
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Stack direction="row" spacing={2}>
          <FacebookShareButton url={imageUrl}>
            <FacebookIcon style={{ borderRadius: "100%" }} size="2.5rem" />
          </FacebookShareButton>
          <WhatsappShareButton url={imageUrl}>
            <WhatsappIcon style={{ borderRadius: "100%" }} size="2.5rem" />
          </WhatsappShareButton>
          <LinkedinShareButton url={imageUrl}>
            <LinkedinIcon style={{ borderRadius: "100%" }} size="2.5rem" />
          </LinkedinShareButton>
          <TelegramShareButton url={imageUrl}>
            <TelegramIcon style={{ borderRadius: "100%" }} size="2.5rem" />
          </TelegramShareButton>
          <TwitterShareButton url={imageUrl}>
            <TwitterIcon style={{ borderRadius: "100%" }} size="2.5rem" />
          </TwitterShareButton>
        </Stack>
      </Grid>
    </Grid>
  );
}
