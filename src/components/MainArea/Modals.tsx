import { DefaultUser } from "@/backend/functions";
import { CardContainer } from "@/styles/theme";
import { Modal, Grid, Typography } from "@mui/material";
import { FestecTracks, TrackCard } from "./PlaygroundArea";

const ModalPlayground = ({ open, setOpen, user }: ModalType) => {
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Grid container>
                <Grid item sx={{ borderRadius: "4px", textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", justifyContent: "space-between", alignContent: "center", width: { xs: "80%", sm: "70%", md: "50%" } }}>
                    <CardContainer elevation={0} sx={{ p: 3, pb: { md: 7, xs: 4 }, maxWidth: "200x" }}>
                        <Typography paragraph sx={{ mb: 5 }} variant="TitleLarge">Explore COMETLABS</Typography>
                        <Grid direction="row" container spacing={2} justifyContent="center" alignItems="center">
                            {FestecTracks.map(
                                (festectracks, i) =>
                                    <Grid item key={"pg-" + i}>
                                        <TrackCard
                                            // index={i}
                                            user={user}
                                            {...festectracks}
                                        />
                                    </Grid>
                            )}
                        </Grid>
                    </CardContainer>
                </Grid>
            </Grid>
        </Modal>
    )
}

export default ModalPlayground

interface ModalType {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    user: DefaultUser | undefined
}