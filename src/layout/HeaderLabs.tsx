import * as React from "react";

// for link component for different tabs of header
import Link from "@/components/Link";

// for logo component of COMETLABS
import Logo from "@/components/Logo";

// contains different links used in website
import { InternalLinks } from "@/content/Links";
// import { Box, Grid, Stack, Typography, Divider, Drawer, IconButton, AppBar, Toolbar, Tooltip } from "@mui/material";
import { Box, Grid, Stack, Divider, Drawer, IconButton, AppBar, Toolbar, Tooltip } from "@mui/material";
// import { makeStyles } from '@mui/material/styles';
import { HiMenu } from "react-icons/hi";
//for logged in user, to show secondary header
import HeaderMenu from "./HeaderMenu";
import { DefaultUser } from "@/backend/functions";
import { FilledButton, TextButton } from "@/styles/theme";
import { useSession } from "next-auth/react";
import style from "@/styles/typography-styles.module.css";

interface HeaderProps {
    noLogo?: boolean;
    window?: () => Window;
    type: string;
    id: string;
}

const drawerWidth = 240;


// defines whole header component
export default function Header({ type, id, noLogo, window }: HeaderProps) {
    const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
    const { data: session } = useSession();
    const user: DefaultUser = session?.user as DefaultUser;
    const container = window !== undefined ? () => window().document.body : undefined;
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [previewId, setPreviewId] = React.useState("#");

    // if no user logged in , then to show, login and signup options
    const LoginOptions = () => (
        <Stack direction="row" justifyContent="flex-end" spacing={1}>
            <TextButton href={InternalLinks.SIGNUP_PAGE}>
                {/* <Typography variant="BodyMedium" color="primary.main"> */}
                <p className={style.BodyMedium} style={{ color: "#c4c6d0" }}>
                    Sign up </p>
                {/* </Typography> */}
            </TextButton>
            <FilledButton
                variant="contained"
                href={InternalLinks.SIGNIN_PAGE}
            >
                {/* <Typography variant="BodyMedium" color="onprimary.main"> */}
                <p className={style.BodyMedium} style={{ color: "#c4c6d0" }}>
                    Login </p>
                {/* </Typography> */}
            </FilledButton>
        </Stack>
    );

    React.useEffect(() => {
        async function foo() {
            const user: DefaultUser = JSON.parse(localStorage.getItem("user") || "{}");
            const accessToken = "Token " + user.accessToken;
            let team = await fetch(process.env.NEXT_PUBLIC_API_URL + "/organize/getTeam",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        Authorization: accessToken,
                    },
                    body: JSON.stringify({ eventId: id })
                }
            )
            if (team.ok) {
                const teamm = await team.json();
                if (teamm && teamm.team_id) {
                    const [submit] = await Promise.all([
                        fetch(process.env.NEXT_PUBLIC_API_URL + "/organize/getsubmission",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json;charset=utf-8",
                                    Authorization: accessToken,
                                },
                                body: JSON.stringify({ eventId: id, team_id: teamm.team_id })
                            }
                        ),
                    ])
                    if (submit.ok) {
                        setPreviewId(InternalLinks.LANDING_PAGE + `/Explore/${type}/Dashboard/Preview/` + id);
                    }
                }
            }
        }
        foo()
    })

    //  Different Navigation links for all main pages in header menu
    const links = (
        <>
            <Link href={InternalLinks.LANDING_PAGE + `/Explore/${type}/Dashboard/Dev/` + id} hoverStyle>
                {/* <Typography
                    component="span"
                    color="textPrimary"
                    variant="LabelLarge"
                > */}
                <p className={style.LabelLarge} style={{ color: "#c4c6d0" }}>
                    Team & Details </p>
                {/* </Typography> */}
            </Link>
            {/* <Link href={"#"} hoverStyle>
                <Typography
                    component="span"
                    color="textPrimary"
                    variant="LabelLarge"
                >
                    Playground
                </Typography>
            </Link> */}
            {previewId != "#" ? (
                <Link href={previewId} hoverStyle>
                    {/* <Typography
                        component="span"
                        color="textPrimary"
                        variant="LabelLarge"
                    > */}
                    <p className={style.LabelLarge} style={{ color: "#c4c6d0" }}>
                        Preview </p>
                    {/* </Typography> */}
                </Link>
            ) : (
                <Tooltip title="Submit to See Preivew">
                    {/* <Typography
                        component="span"
                        color="textPrimary"
                        variant="LabelLarge"
                    > */}
                    <p className={style.LabelLarge} style={{ color: "#c4c6d0" }}>
                        Preview </p>
                    {/* </Typography> */}
                </Tooltip>
            )}
            {/* <Link href={ExternalLinks.COMMUNITY_PAGE.href} hoverStyle> */}
            {/* <Typography
                component="span"
                color="textPrimary"
                variant="LabelLarge"
            >
                LeaderBoard
            </Typography> */}
            {/* </Link> */}
        </>
    );

    // Drawer's content 
    const drawer = (
        <div>
            <Grid item xs={"auto"} textAlign={"center"}>
                <Link href={InternalLinks.LANDING_PAGE} noLinkStyle>
                    <Logo />
                </Link>
            </Grid>
            <Divider />
            <Grid item xs={"auto"} sx={{ display: "flex", flexDirection: "column", margin: "10px" }} alignItems={"center"}>
                {links}
            </Grid>
            <Divider />
        </div>
    );


    // Drawer for mobile view
    const showdrawer = (
        <Box
            component="nav"
            aria-label="mailbox folders"
        >
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );


    //actual header element
    return (
        <AppBar color="inherit"
            elevation={2}
            position="fixed"
            sx={{ maxHeight: "64px" }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Grid container sx={{ flexWrap: "nowrap" }} alignItems="center" justifyContent="space-between">
                    <Grid item xs={"auto"} sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' } }}
                        >
                            <HiMenu />
                        </IconButton>
                        {!noLogo && (
                            <Link href={InternalLinks.LANDING_PAGE} noLinkStyle>
                                <Logo />
                            </Link>
                        )}
                    </Grid>
                    {!mobileOpen ? (
                        <Grid item xs={"auto"} sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Stack direction="row" textAlign="center" justifyContent="center" spacing={2}>
                                {links}
                            </Stack>
                        </Grid>
                    ) : (showdrawer)}
                    <Grid item xs={"auto"} sx={{ display: "flex", justifyContent: "flex-end", paddingRight: "20px" }}>
                        {!!user ? <HeaderMenu user={user} /> : <LoginOptions />}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
