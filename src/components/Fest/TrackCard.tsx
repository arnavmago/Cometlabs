import Image from "next/image";
import * as React from "react";
import {
  HiOutlineInformationCircle
} from "react-icons/hi";

import { Track } from "@/content/Technologies";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { InternalLinks } from "@/content/Links";
import { DefaultUser } from "@/backend/functions";
import { v4 as uuid } from 'uuid';
// import { useRouter } from "next/router";

const PlaygroundFlipCard = styled(Paper)({
  backgroundColor: "transparent",
  perspective: "1000px",
  height: "120px",
  minWidth: "120px",
  width: "inherit",
});

const QuizFlipCard = styled(Paper)({
  backgroundColor: "transparent",
  perspective: "1000px",
  height: "90px",
  minWidth: "200px",
  width: "inherit",
});

const FlipCardInner = styled(Paper)({
  position: "relative",
  width: "100%",
  height: "100%",
  transition: "transform 0.8s",
  transformStyle: "preserve-3d",
  borderRadius: "4px",
});

const FlipCardFront = styled(Stack)({
  position: "absolute",
  width: "100%",
  height: "100%",
  WebkitBackfaceVisibility: "hidden" /* Safari */,
  backfaceVisibility: "hidden",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "white",
  borderRadius: "inherit",
});

const FlipCardBack = styled(Stack)({
  position: "absolute",
  width: "100%",
  height: "100%",
  WebkitBackfaceVisibility: "hidden" /* Safari */,
  backfaceVisibility: "hidden",
  transform: "rotateY(180deg)",
  borderRadius: "inherit",
  backgroundColor: "white",
  alignItems: "center",
  justifyContent: "center",
});

interface TrackCardProps extends Track {
  selected?: boolean;
  href?: string;
  sx?: any;
  user: DefaultUser;
  hack?: boolean;
}

export default function TrackCard({
  selected,
  href,
  sx,
  hack,
  ...props
}: TrackCardProps) {
  const [flipped, setFlipped] = React.useState(false);
  const type = hack ? "h" : "f";
  // const router = useRouter();
  const isQuiz: boolean = props.type === "quiz";
  const id = uuid();


  const Card = (
    <FlipCardInner
      sx={{
        transform: flipped ? "rotateY(180deg)" : "",
        boxShadow: selected ? "none" : "0px 4px 10px 0px #00000026",
      }}
    >
      <FlipCardFront direction={isQuiz ? "row" : "column"} spacing={1}>
        <Image
          src={props.imageUrl}
          height={60}
          width={60}
          layout={"fixed"}
          alt={props.title + "-logo"}
        />
        <Typography sx={{ fontWeight: 500, mt: 1 }}>{props.title}</Typography>
        {!!href && props.user && props.user.username && (
          <Button
            // onClick={() => handleClick()}
            href={InternalLinks.LABS_PAGE + '/' + (props.title).toLowerCase() + "/" + props.user.username + "/" + type + "/" + id}
          >
            Go to Playground
          </Button>
        )}
      </FlipCardFront>
      <FlipCardBack
        sx={{ transform: flipped ? "rotateY(180deg)" : "" }}
        onClick={(e) => {
          e.stopPropagation();
          setFlipped(false);
        }}
      >
        <Typography align="center">{props.description}</Typography>
      </FlipCardBack>
      {!flipped && (
        <Box
          sx={{ position: "absolute", zIndex: 100, top: "8px", right: "8px" }}
          onClick={(e) => {
            e.stopPropagation();
            setFlipped(true);
          }}
        >
          <HiOutlineInformationCircle color="lightblue" />
        </Box>
      )}
    </FlipCardInner>
  );

  if (isQuiz) {
    return <QuizFlipCard>{Card}</QuizFlipCard>;
  }

  return <PlaygroundFlipCard sx={{ ...sx }}>{Card}</PlaygroundFlipCard>;
}
