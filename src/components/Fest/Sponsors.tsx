


import { nanoid } from "nanoid";
import dynamic from "next/dynamic";
import Image from "next/image";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { HiOutlineCloudUpload, HiOutlineXCircle } from "react-icons/hi";
import { Accept } from 'react-dropzone'
import { handleSingleImageUpload } from "@/backend/functions";
import {
  Box,
  Grid,
  GridSize,
  Paper,
  Skeleton,
  Stack,
  IconButton,
  Typography
} from "@mui/material";
import { styled } from "@mui/system";

import { ReadOnly } from "./types";

const Dropzone = dynamic(() => import("@/components/Dropzone"), {
  loading: () => <Skeleton height={70} width={70} />,
});

export const Line = styled("div")({
  height: "3px",
  flexGrow: 1,
  borderRadius: "8px",
});

const PosterContainer = styled(Paper)({
  borderRadius: "12px",
  height: "inherit",
  width: "100%",
  overflow: "hidden",
  position: "relative",
  padding: "8px",
});

type LabelType = "platinum" | "gold" | "silver" | "bronze" | "partners";

export type SponsorType = {
  platinum: SponsorPoster[];
  gold: SponsorPoster[];
  silver: SponsorPoster[];
  bronze: SponsorPoster[];
  partners: SponsorPoster[];
};

interface SponsorLabel {
  bgcolor: string;
  label: LabelType;
}

interface SponsorProps extends SponsorLabel {
  posterSize: GridSize;
  height: number;
  width: number;
}

interface SponsorPoster {
  imageUrl: string;
  id: string;
  label: LabelType;
}

export default function FestSponsors({ readOnly }: ReadOnly) {
  const { setValue, watch, getValues } = useFormContext();

  const sponsors: SponsorType = watch("sponsors") || {};

  const handleUpload = async (
    acceptedFile: File,
    label: SponsorLabel["label"]
  ) => {
    const imageUrl = await handleSingleImageUpload(
      getValues("id"),
      acceptedFile,
      "fsdg",
    );

    if (!!imageUrl) {
      const newSponsorPoster: SponsorPoster = { imageUrl, id: nanoid(), label };
      setValue(
        "sponsors." + label,
        !!sponsors[label]
          ? [...sponsors[label], newSponsorPoster]
          : [newSponsorPoster]
      );
    } else {
      alert("Image Upload Error");
    }
  };

  const handleDelete = (label: LabelType, id: string) => {
    setValue(
      "sponsors." + label,
      !!sponsors[label] ? sponsors[label].filter((s) => s.id !== id) : []
    );
  };

  const Label = ({ label, bgcolor }: SponsorLabel) => (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Line sx={{ bgcolor }} />
      <Typography variant="LabelLarge" sx={{ textTransform: "capitalize" }}>
        {label}
      </Typography>
      <Line sx={{ bgcolor }} />
    </Stack>
  );

  const Sponsor = (props: SponsorProps) => (
    <Box>
      <Label bgcolor={props.bgcolor} label={props.label} />
      <Grid container sx={{ padding: "16px 8px 8px" }} spacing={2}>

        {/* {sponsors[props.label] && (
          <Typography>Zero</Typography>)} */}

        {sponsors[props.label].length > 0 &&
          sponsors[props.label]?.map((poster: SponsorPoster) => (
            <Grid item xs={props.posterSize} key={poster.id}>
              <PosterContainer
                elevation={2}
                sx={{ height: props.height + "px" }}
              >
                {!readOnly && (
                  <IconButton
                    size="small"
                    color="secondary"
                    sx={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      zIndex: 10,
                    }}
                    onClick={() => handleDelete(props.label, poster.id)}
                  >
                    <HiOutlineXCircle />
                  </IconButton>
                )}
                <Image
                  height={props.height}
                  width={props.width}
                  layout="responsive"
                  objectFit={"contain"}
                  src={poster.imageUrl}
                  alt={poster.label + " sponsor poster"}
                />
              </PosterContainer>
            </Grid>
          ))}
        {!readOnly && (
          <Grid item xs={props.posterSize} sx={{ height: props.height }}>
            <PosterContainer elevation={2}>
              <Dropzone
                multiple={true}
                accept={"image/jpeg, image/jpg, image/png" as unknown as Accept}
                maxFiles={10}
                onDrop={(acceptedFiles: Array<File>) => {
                  acceptedFiles.forEach((file: File) =>
                    handleUpload(file, props.label)
                  );
                }}
              >
                <HiOutlineCloudUpload fontSize="1.5rem" />
              </Dropzone>
            </PosterContainer>
          </Grid>
        )}
      </Grid>
      {!readOnly && (
        <Stack sx={{ mt: 2 }}>
          <Typography variant="LabelLarge" align="center">
            <b>{"Drag & Drop"}</b>
            {" or click the "}
            <HiOutlineCloudUpload style={{ marginBottom: -4 }} />
            {" icon to "}
            <b>{"browse"}</b>
          </Typography>
          <Typography variant="LabelLarge" align="center" sx={{ mt: 1 }}>
            Accepts images (Png, Jpeg, Jpg) of dimension 384×216 or larger upto
            4Mb
          </Typography>
        </Stack>
      )}
    </Box>
  );

  const NoSponsors: boolean = Boolean(
    sponsors["platinum"].length === 0 &&
    sponsors["gold"].length === 0 &&
    sponsors["silver"].length === 0 &&
    sponsors["bronze"].length === 0 &&
    sponsors["partners"].length === 0
  );

  if (NoSponsors && readOnly) {
    return (
      <Typography variant="LabelLarge" align="center" sx={{ mt: 2 }}>
        No Sponsors/Parners Listed
      </Typography>
    );
  }

  return (
    <Stack spacing={4} sx={{ mt: 2 }}>
      {/* <Sponsor
        bgcolor="#E5E4E2"
        label="platinum"
        posterSize={6}
        height={130}
        width={300}
      /> */}
      {/* <Sponsor
        bgcolor="#B29600"
        label="gold"
        posterSize={4}
        height={100}
        width={190}
      />
      <Sponsor
        bgcolor="#CCCCCC"
        label="silver"
        posterSize={3}
        height={80}
        width={140}
      />
      <Sponsor
        bgcolor="#CD7F32"
        label="bronze"
        posterSize={2}
        height={60}
        width={90}
      /> */}
      <Sponsor
        bgcolor="#CD7F32"
        label="partners"
        posterSize={6}
        height={130}
        width={300}
      />
    </Stack>
  );
}