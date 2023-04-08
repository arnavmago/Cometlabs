import * as React from "react";

import { hoverStyles } from "@/components/Link";

// for logo component of COMETLABS
import Logo from "@/components/Logo";

// contains different links used in website
import { InternalLinks } from "@/content/Links";
import { Box, Container, Grid, Stack, Typography, Divider, Drawer, IconButton } from "@mui/material";
// import { makeStyles } from '@mui/material/styles';
import { HiMenu } from "react-icons/hi";
//for logged in user, to show secondary header
import HeaderMenu from "./HeaderMenu";
import { DefaultUser } from "@/backend/functions";
import { FilledButton, TextButton } from "@/styles/theme";

interface HeaderProps {
  noLogo?: boolean;
  window?: () => Window;
  user: DefaultUser;
  noLink?: boolean;
  isDashboard?: boolean;
}

import { useRouter } from "next/router";

const drawerWidth = 240;


// defines whole header component
export default function Header(props: HeaderProps) {
  const { noLogo } = props; // is there is logo or not
  const { noLink } = props; // is there is logo or not
  const { window } = props;
  const { user } = props;
  const { isDashboard } = props;
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const container = window !== undefined ? () => window().document.body : undefined;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // if no user logged in , then to show, login and signup options
  const LoginOptions = () => (
    <Stack direction="row" justifyContent="flex-end" spacing={1}>
      <TextButton href={InternalLinks.SIGNUP_PAGE}>
        <Typography variant="BodyMedium" color="primary.main">Sign up</Typography>
      </TextButton>
      <FilledButton
        variant="contained"
        href={InternalLinks.SIGNIN_PAGE}
      >
        <Typography variant="BodyMedium" color="onprimary.main">Login</Typography>
      </FilledButton>
    </Stack>
  );

  //  Different Navigation links for all main pages in header menu
  const links = (
    <>
      <Typography
        onClick={() => { router.push(InternalLinks.EXPLORE_PAGE) }}
        component="span"
        color="textPrimary"
        variant="TitleMedium" sx={hoverStyles}
      >
        Explore
      </Typography>
      <Typography
        onClick={() => { router.push(InternalLinks.CAREERS_PAGE) }}
        paragraph
        variant="TitleMedium"
        color="textPrimary" sx={hoverStyles}
      >
        Hire Developers
      </Typography>
      <Typography
        onClick={() => { router.push(InternalLinks.COMMUNITY_PAGE) }}
        component="span"
        color="textPrimary"
        variant="TitleMedium" sx={hoverStyles}
      >
        Community
      </Typography>
    </>
  );

  // Drawer's content 
  const drawer = (
    <div>
      <Grid item xs={"auto"} sx={{ display: "flex", my: 2 }} justifyContent="center" textAlign={"center"}>
        <div onClick={() => { router.push(InternalLinks.LANDING_PAGE) }}>
          <Logo />
        </div>
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
    <Box sx={{ width: "100%", palette: "dark" }}>
      <Container sx={{ mt: { sm: 4, xs: 2 }, mb: { sm: 5, xs: 3 } }}>
        <Grid container sx={{ flexWrap: "nowrap" }} alignItems="center" justifyContent="space-between">
          <Grid item xs={"auto"} sx={{ display: "flex", alignItems: "center" }}>
            {!isDashboard && <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' }, mr: 1 }}
            >
              <HiMenu />
            </IconButton>}
            {!noLogo && (
              // <Link href={InternalLinks.LANDING_PAGE} noLinkStyle>
              <div onClick={() => { router.push(InternalLinks.LANDING_PAGE) }}>
                <Logo />
              </div>
              // </Link>
            )}
          </Grid>
          {!noLink &&
            <>{!mobileOpen ? (
              <Grid item xs={"auto"} sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Stack direction="row" textAlign="center" justifyContent="center" spacing={2}>
                  {links}
                </Stack>
              </Grid>
            ) : (
              <>
                {!isDashboard && showdrawer}
              </>
              // showdrawer
              // <></>
            )}
            </>
          }
          <Grid item xs={"auto"} sx={{ display: "flex", justifyContent: "flex-end", paddingRight: "20px" }}>
            {!!user ? <HeaderMenu user={user} /> : <LoginOptions />}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
