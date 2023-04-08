import { ReadOnly, CodeArena } from './types';
import ArenaForm from './ArenaForm';
import { Grid, Stack, Skeleton, Typography, Box } from '@mui/material';
// import ArenaDetails from "./ArenaDetails";
import dynamic from 'next/dynamic';
import ArenaTicket from './ArenaTicket';
import Share from './Share';
import TagsReadOnly from './TagsReadOnly';
import { CardContainer, FilledButton } from '@/styles/theme';
import { useSession } from 'next-auth/react';
import { DefaultUser } from '@/backend/functions';
import { InternalLinks } from '@/content/Links';
import * as React from 'react';

const ArenaDetails = dynamic(() => import("./ArenaDetails"), {
    loading: () => <Skeleton height={360} width={"100%"} />, ssr: false,
});

const Register = dynamic(() => import("./Register"), {
    loading: () => <Skeleton height={360} width={"100%"} />, ssr: false,
});

const ArenaOrganiser = dynamic(() => import("./ArenaOrganiser"), {
    loading: () => <Skeleton height={360} width={"100%"} />, ssr: false,
});

const ArenaStepper = dynamic(() => import("./ArenaStepper"), {
    loading: () => <Skeleton height={360} width={"100%"} />,
});

const ArenaStepper5 = dynamic(() => import("./ArenaStepper5"), {
    loading: () => <Skeleton height={360} width={"100%"} />,
});

interface Arena extends CodeArena, ReadOnly {
    isregistered?: isregistered;
    fest?: boolean;
}


interface isregistered {
    success?: string;
}

const CodeArenaForm = ({ isregistered, readOnly, fest, ...data }: Arena) => {
    console.log(data);
    const { data: session } = useSession();
    const user: DefaultUser = session?.user as DefaultUser;
    const [role, setrole] = React.useState<string>("")
    const isAdmin = role === 'admin' ? true : false;
    const isOrganizer = role === 'organizer' ? true : false;

    React.useEffect(() => {
        async function foo() {
            const user = JSON.parse(localStorage.getItem('user') || "{}");
            const AccessToken = "Token " + user.accessToken;
            const xyz = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/getCurrentUserRole", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    authorization: AccessToken
                },
            })
            if (xyz.ok) {
                const roleee = await xyz.json();
                setrole(roleee.role)
            }
        }
        foo()
    }, [])


    if (readOnly) {
        return (
            <ArenaForm  {...data}>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid item xs={12} sm={12} md={12} lg={8}>
                        <Stack spacing={2}>
                            <CardContainer elevation={1} sx={{ padding: "30px 40px", border: 0 }}>
                                <ArenaDetails readOnly={readOnly} />
                            </CardContainer>
                            <CardContainer elevation={1} sx={{ padding: "30px 40px", border: 0 }}>
                                <ArenaStepper5 readOnly={readOnly} />
                            </CardContainer>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4}>
                        <Stack spacing={2}>
                            {data.ticket && data.ticket.length > 0 && (<CardContainer elevation={1} sx={{ p: "20px", border: 0 }}>
                                <ArenaTicket readOnly={readOnly} />
                            </CardContainer>)}
                            {data.organiser && (<CardContainer elevation={1} sx={{ padding: "20px", border: 0 }}>
                                <ArenaOrganiser readOnly={readOnly} />
                            </CardContainer>)}
                            {data && data.details && data.details.tags && (data.details.tags.length > 0) && (<CardContainer elevation={1} sx={{ padding: "20px", border: 0 }}>
                                <TagsReadOnly />
                            </CardContainer>)}
                            {fest && <CardContainer elevation={1} sx={{ padding: "20px", border: 0 }}>
                                <Register isregistered={isregistered} {...data} />
                            </CardContainer>}
                            <CardContainer elevation={1} sx={{ padding: "20px", border: 0 }}>
                                <Share />
                            </CardContainer>
                            {data.approvedBy && (isAdmin || (isOrganizer && (user.id === data.festCreatorId))) && <CardContainer elevation={1} sx={{ padding: "20px", border: 0 }}>
                                <Box sx={{ textAlign: "center", my: 1 }}>
                                    <FilledButton sx={{ justifyContent: "center", m: "auto" }}
                                        href={InternalLinks.LANDING_PAGE + `Explore/${data.type}/Dashboard/Host/` + data.festId}
                                    >
                                        {/* InternalLinks.LANDING_PAGE + `app/Explore/${props.type}/Preview/` + props.festId */}
                                        <Typography variant="LabelMedium">Organiser's Dashboard</Typography>
                                    </FilledButton>
                                </Box>
                            </CardContainer>}
                            {/* <Paper elevation={0} sx={{ padding: "20px" }}>
                        <Button onClick={handleRegister}>
                            Register
                        </Button>
                    </Paper> */}
                        </Stack>
                    </Grid>
                </Grid>
            </ArenaForm>
        )
    }

    return (
        <ArenaForm {...data}>
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12}>
                    <CardContainer sx={{ padding: "30px 40px", border: 0, backgroundColor: "transparent", backgroundImage: "none" }}>
                        <ArenaStepper readOnly={readOnly} />
                    </CardContainer>
                </Grid>
            </Grid>
        </ArenaForm>
    )
}

export default CodeArenaForm;


// (isAdmin || (isOrganizer && (user.id === data.festCreatorId))) &&