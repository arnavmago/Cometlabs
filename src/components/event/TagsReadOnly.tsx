import * as React from "react";
import { useFormContext } from "react-hook-form";
import { HiOutlineTag } from "react-icons/hi";
import {
    Box,
    Chip,
    Grid,
    Typography
} from "@mui/material";
import { alpha, styled } from "@mui/system";

import { type } from "./types";

export const Tag = styled(Chip)(({ theme }) => ({
    borderRadius: "4px",
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    color: theme.palette.primary.main
}));

export default function FestTechTags() {
    const { watch } = useFormContext();
    const selectedTags: Array<type> = watch("details.tags")

    return (
        <div>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <HiOutlineTag />
                <Typography variant="TitleMedium" sx={{ ml: "8px" }}>
                    Technologies Focused
                </Typography>
            </Box>
            <div>
                {selectedTags.length === 0 && (
                    <Typography
                        variant="LabelMedium"
                        align="center"
                        sx={{ mt: 1, mb: 1 }}
                    >
                        No Tags Selected
                    </Typography>
                )}
                <Grid container rowGap={1} sx={{ justifyContent: "space-between", alignContent: "center" }}>
                    {selectedTags.map((tag, index) => (
                        <Grid item xs="auto" key={tag.name + index}>
                            <Tag label={tag.name} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}
