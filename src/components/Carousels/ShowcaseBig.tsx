import * as React from "react";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight
} from "react-icons/hi";
import Carousel from "react-multi-carousel";
import {
  ButtonGroupProps,
} from "react-multi-carousel/lib/types";

import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { bigcard } from "@/components/Carousels/responsive";
import style from "@/styles/typography-styles.module.css";

interface ShowcaseProps {
  title: string;
}

const ShowcaseContainer = styled("div")({
  minHeight: 300,
  width: "100%",
  padding: "44px 0px",
  position: "relative",
});

const ShowcaseBig: React.FC<ShowcaseProps> = (props) => {
  const { children } = props;


  const ShowcaseHeader = ({ next, previous }: ButtonGroupProps) => {
    return (
      <Box sx={{ position: "absolute", top: 0, width: "100%" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" >
          {/* <Typography
            variant="TitleLarge"
            sx={{ flexGrow: 1, maxWidth: `calc(100vw - 100px)` }}
            noWrap
          >
            {props.title}
          </Typography> */}
          <p className={style.TitleLarge} style={{ maxWidth: 'calc(100vw-100px)' }}></p>
          <div style={{ display: "flex" }}>
            {/* <IconButton aria-label="previous" onClick={() => !!previous && previous()}>
              <HiOutlineArrowCircleLeft />
            </IconButton>
            <IconButton aria-label="next" onClick={() => !!next && next()}>
              <HiOutlineArrowCircleRight />
            </IconButton> */}
            <a href="#" onClick={() => !!previous && previous()} aria-label="previous" style={{ border: "none", background: "none", cursor: "pointer", textDecoration: "none" }}>
              <HiOutlineArrowCircleLeft />
            </a>
            <a href="#" onClick={() => !!next && next()} aria-label="next" style={{ border: "none", background: "none", cursor: "pointer", textDecoration: "none" }}>
              <HiOutlineArrowCircleRight />
            </a>

          </div>
        </Stack>
      </Box>
    );
  };

  return (
    <ShowcaseContainer >
      <Carousel
        responsive={bigcard}
        focusOnSelect={false}
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



export default ShowcaseBig;
