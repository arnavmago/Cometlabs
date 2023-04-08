import * as React from "react";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";

export default function FestCardSkeleton() {
  return (
    <>
      <CarouselTop />
      <Boxes width="320px" height="520px" />
    </>
  );
}

interface dimentions {
  width: string;
  height: string;
  total?: number;
}

const Boxes = ({ width, height, total }: dimentions) => {
  return (
    <>
      <Stack direction="row" spacing={1} sx={{ justifyContent: "center", mt: 4 }}>
        {total ? [..."testingtesting"].map((_image, index) => index < total && (
          <Skeleton variant="rectangular" width={width} height={height} key={index} />
        )) : (
          <>
            <Skeleton variant="rectangular" width={width} height={height} />
            <Skeleton variant="rectangular" width={width} height={height} />
            <Skeleton variant="rectangular" width={width} height={height} />
          </>
        )}
      </Stack>

    </>
  )
}

const CarouselTop = () => {
  return (
    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
      <Skeleton width="500px" height="50px" />
      <Stack spacing={1} direction="row">
        <Skeleton variant="circular" width={30} height={30} />
        <Skeleton variant="circular" width={30} height={30} />
      </Stack>
    </Stack>
  )
}


export const NewsSkeleton = () => {
  return (
    <>
      <CarouselTop />
      <Skeleton variant="rectangular" width="500px" sx={{ mt: 4, mx: "auto" }} />
    </>
  )
}

export const News = () => {
  return (
    <>
      <Boxes width="170px" height="120px" total={6} />
      <Boxes width="170px" height="120px" total={3} />
    </>
  )
}

export const ReachingHeights = () => {
  return (
    <div style={{ margin: '80px auto' }}>
      <Skeleton variant="rectangular" width="400px" />
      <Boxes width="350px" height="200px" />
    </div>
  )
}

export const TrustedByLeadingBrands = () => {
  return (
    <div style={{ margin: '80px auto' }}>
      <Skeleton variant="rectangular" width="400px" height="40px" sx={{ mb: 2 }} />
      <Skeleton variant="rectangular" width="50%" />
      <Boxes width="150px" height="100px" total={6} />
      <Boxes width="150px" height="100px" total={6} />
      <Boxes width="150px" height="100px" total={6} />
    </div>
  )
}

export const FoundingTeam = () => {
  return (
    <div style={{ margin: '80px auto' }}>
      <Skeleton variant="rectangular" width="400px" height="40px" sx={{ mb: 2 }} />
      <Skeleton variant="rectangular" width="50%" />
      <Boxes width="280px" height="300px" total={4} />
      <Boxes width="280px" height="300px" total={3} />
    </div>
  )
}

export const BackedBy = () => {
  return (
    <div style={{ margin: '80px auto' }}>
      <Skeleton variant="rectangular" width="400px" height="40px" sx={{ mb: 2 }} />
      <Skeleton variant="rectangular" width="50%" />
      <Boxes width="150px" height="100px" total={6} />
    </div>
  )
}

export const AdvisoryBoard = () => {
  return (
    <FoundingTeam />
  )
}

export const FourSectionsSkeleton = () => {
  return (
    <Container>
      <ReachingHeights />
      <TrustedByLeadingBrands />
      <FoundingTeam />
      <BackedBy />
      <AdvisoryBoard />
    </Container>
  )
}