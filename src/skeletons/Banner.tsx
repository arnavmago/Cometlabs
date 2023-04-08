import * as React from "react";

import Skeleton from "@mui/material/Skeleton";
import { Stack } from "@mui/material";

export default function BannerSkeleton() {
    const height = "60px";
    const width = "60px";
    return (
        <>
            <Stack spacing={2} sx={{ alignItems: "center", mb: 10 }}>
                <Skeleton variant="rectangular" height="200px" width="600px" />
                <Skeleton variant="rectangular" height="100px" width="600px" />
                <Skeleton variant="rectangular" height="50px" width="300px" />
                <Stack spacing={2} direction="row">
                    <Skeleton variant="rectangular" height={height} width={width} />
                    <Skeleton variant="rectangular" height={height} width={width} />
                    <Skeleton variant="rectangular" height={height} width={width} />
                    <Skeleton variant="rectangular" height={height} width={width} />
                    <Skeleton variant="rectangular" height={height} width={width} />
                    <Skeleton variant="rectangular" height={height} width={width} />
                </Stack>
            </Stack>
        </>
    );
}
