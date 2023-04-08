import * as React from "react";

import { Box, Grid, Stack } from "@mui/material";


// General interface of Banner component
interface BannerProps {
    PrimaryHeading: string | React.ReactNode;
    PrimaryDescription: string | React.ReactNode;
    SecondaryComponent?: React.ReactNode;
    TertiaryComponent?: React.ReactNode;
}


// Basic UI of banner
export default function Banner(props: BannerProps) {
    const { PrimaryHeading, PrimaryDescription, SecondaryComponent, TertiaryComponent } = props;
    return (
        <Box sx={{ display: "flex", alignItems: "center", margin: "120px auto 100px auto" }} >
            <Stack
                justifyContent="center"
                alignItems="self-start"
                spacing={5}
                sx={{ width: "100%" }}
            >
                <Grid container direction="row" spacing={6} justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={10} md={7}>
                        <Box>
                            {PrimaryHeading}
                            {PrimaryDescription}
                            {TertiaryComponent}
                        </Box>
                    </Grid>
                    <Grid item xs={8} sm={6} md={5} sx={{ width: "432px !important" }}>
                        {SecondaryComponent}
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    );
}