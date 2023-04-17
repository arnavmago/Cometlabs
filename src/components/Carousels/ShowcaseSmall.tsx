import * as React from "react";
import Carousel from "react-multi-carousel";

import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";

import { smallcard } from "@/components/Carousels/responsive";
import style from "@/styles/typography-styles.module.css";

interface ShowcaseProps {
  title: string;
}

const ShowcaseContainer = styled("div")({
  width: "100%",
  padding: "64px 0 20px 0",
  position: "relative",
  marginTop: "50px",
});

const ShowcaseSmall: React.FC<ShowcaseProps> = (props) => {
  const { children } = props;


  const ShowcaseHeader = () => {
    return (
      <Box sx={{ position: "absolute", top: 0, width: "100%" }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          {/* <Typography
            variant="TitleLarge"
            sx={{ flexGrow: 1, maxWidth: `calc(100vw - 200px)` }}
            noWrap
          >
            {props.title}
          </Typography> */}
          <p className={style.TitleLarge} style={{ maxWidth: 'calc(100vw-200px)' }}></p>
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
        responsive={smallcard}
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


export default ShowcaseSmall;