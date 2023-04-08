import * as React from "react";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight
} from "react-icons/hi";
import Carousel from "react-multi-carousel";
import {
  ButtonGroupProps,
} from "react-multi-carousel/lib/types";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { biggestcard } from "@/components/Carousels/responsive";

interface ShowcaseProps {
  title: string;
}

const ShowcaseContainer = styled("div")({
  width: "100%",
  padding: "44px 0px",
  position: "relative",
  marginTop: "50px",
});

const ShowcaseBiggest: React.FC<ShowcaseProps> = (props) => {
  const { children } = props;


  const ShowcaseHeader = ({ next, previous }: ButtonGroupProps) => {
    return (
      <Box sx={{ position: "absolute", top: 0, width: "100%" }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography
            variant="TitleLarge"
            sx={{ flexGrow: 1, maxWidth: `calc(100vw - 200px)` }}
            noWrap
          >
            {props.title}
          </Typography>
          <div style={{ display: "flex" }}>
            <IconButton aria-label="previous" onClick={() => !!previous && previous()}>
              <HiOutlineArrowCircleLeft />
            </IconButton>
            <IconButton aria-label="next" onClick={() => !!next && next()}>
              <HiOutlineArrowCircleRight />
            </IconButton>
          </div>
        </Stack>
      </Box>
    );
  };

  return (
    <ShowcaseContainer>
      <Carousel
        autoPlay={true}
        infinite={true}
        transitionDuration={30}
        responsive={biggestcard}
        ssr
        arrows={false}
        showDots={false}
        renderButtonGroupOutside
        customButtonGroup={<ShowcaseHeader />}
      >
        {children}
      </Carousel>
    </ShowcaseContainer>
  );
};


export default ShowcaseBiggest;
