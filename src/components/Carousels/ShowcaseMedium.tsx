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

import { mediumcard } from "@/components/Carousels/responsive";

interface ShowcaseProps {
  title: string;
}

const ShowcaseContainer = styled("div")({
  minHeight: 300,
  width: "100%",
  padding: "64px 0 44px 0",
  position: "relative",
  marginTop: "50px",
});

const ShowcaseMedium: React.FC<ShowcaseProps> = (props) => {
  const { children } = props;


  const ShowcaseHeader = ({ next, previous }: ButtonGroupProps) => {
    return (
      <Box sx={{ position: "absolute", top: 0, width: "100%", mb: "30px" }}>
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
        centerMode={true}
        responsive={mediumcard}
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


export default ShowcaseMedium;
