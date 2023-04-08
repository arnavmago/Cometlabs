// this component will return playground cards, ready to use anywhere.
import { Grid, Box } from "@mui/material";
import { FestecTracks } from "@/content/Technologies";
import TrackCard from "@/components/Fest/TrackCard";
import { useSession } from "next-auth/react";
import { DefaultUser } from "@/backend/functions";
// import ShowcaseSmall from "@/components/Carousels/ShowcaseSmall";

interface play {
    hack?: boolean;
}


// whole play area where each play card is coming from Fest/TrackCard
const PlayArea = ({ hack }: play) => {
    const { data: session } = useSession();
    const user: DefaultUser = session?.user as DefaultUser;
    // const username = user.username
    return (
        <Box sx={{ width: "100%", position: "relative" }}>
            {/* <Typography
        variant="LabelLarge"
        sx={{ flexGrow: 1, marginBottom: "30px" }}
        noWrap>
        Explore LABS
      </Typography> */}
            <Grid direction="row" container spacing={2} justifyContent="space-between" alignItems="center">
                {FestecTracks.map(
                    (festectracks, i) =>
                        i % 2 == 0 && (
                            <Grid item key={"pg-" + i}>
                                <TrackCard
                                    hack={hack}
                                    user={user}
                                    {...festectracks}
                                    href={festectracks.href}
                                    sx={{ height: "200px", width: "160px" }}
                                />
                            </Grid>
                        )
                )}
            </Grid>
        </Box>
    );
}


export default PlayArea;
