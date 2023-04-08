import * as React from "react";

import Skeleton from "@mui/material/Skeleton";
import { Container, Stack } from "@mui/material";

export default function HeaderSkeleton() {
    return (
        <Container>
            <Stack direction="row" sx={{ justifyContent: "space-between", mb: 6, mt: 3 }}>
                <Skeleton variant="rectangular" height="40px" width="100px" />
                <Stack direction="row" spacing={1}>
                    <Skeleton width="100px" />
                    <Skeleton width="100px" />
                    <Skeleton width="100px" />
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Skeleton width="100px" />
                    <Skeleton variant="circular" height="50px" width="50px" />
                </Stack>
            </Stack>
        </Container>
    );
}

interface isCircle {
    props?: boolean;
}

const StackLine = ({ props }: isCircle) => {
    const variant = props ? "circular" : "rectangular";
    const width = props ? "30px" : "150px";
    const height = props ? "30px" : "20px";
    const direction = props ? "row" : "column";
    return (
        <Stack spacing={1} direction={direction}>
            {!props && <Skeleton variant={variant} width={width} height="30px" sx={{ mb: 2 }} />}
            <Skeleton variant={variant} width={width} height={height} />
            <Skeleton variant={variant} width={width} height={height} />
            <Skeleton variant={variant} width={width} height={height} />
            <Skeleton variant={variant} width={width} height={height} />
            <Skeleton variant={variant} width={width} height={height} />
        </Stack>
    )
}

export const FooterSkeleton = () => {
    return (
        <Container>
            <Stack direction="row" spacing={1} sx={{ justifyContent: "space-between", my: 6 }}>
                <Stack spacing={3}>
                    <Skeleton variant="rectangular" height="40px" width="100px" />
                    <StackLine props={true} />
                    <div>
                        <Skeleton width="100px" />
                        <Skeleton />
                    </div>
                </Stack>
                <div></div>
                <StackLine />
                <StackLine />
                <StackLine />
                <StackLine />
            </Stack>
        </Container>
    )
}