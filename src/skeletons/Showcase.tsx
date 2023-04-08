import * as React from "react";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function ShowcaseSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width={"100%"} height={520} />
    </Stack>
  );
}
