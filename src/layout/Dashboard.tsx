import { useRouter } from "next/router";
import * as React from "react";
import { HiOutlineArrowLeft, HiMenu } from "react-icons/hi";
import { InternalLinks, ExternalLinks } from "@/content/Links";
import { useSession } from "next-auth/react";
import { Icon } from '@mui/material'
import Logo from "@/components/Logo";
import Header from "@/layout/Header";
// import {
//   Box,
//   Drawer,
//   Stack,
//   Tab,
//   Tabs,
//   Typography, IconButton
// } from "@mui/material";
import { Box, Drawer, Stack, Tab, Tabs, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { DefaultUser } from "@/backend/functions";
import Link from "@/components/Link";
import { TextButton } from "@/styles/theme";
import style from "@/styles/typography-styles.module.css";

const drawerWidth = 240;

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "20px",
  color: theme.palette.text.primary,
  textAlign: "left",
}));

export interface DashboardProps {
  title: string;
  subtitle: string;
  tabs: Array<{
    label: React.ReactNode;
    disabled: boolean;
    icon: React.ReactNode;
    component: React.ReactNode;
  }>;
}

export default function Dashboard(props: DashboardProps) {
  const { title, subtitle, tabs } = props;
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const pages = [
    { label: "Explore", link: InternalLinks.EXPLORE_PAGE },
    { label: "Hire Developers", link: ExternalLinks.HIRE_DEVS_PAGE.href },
    { label: "Community", link: ExternalLinks.COMMUNITY_PAGE.href }
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    setSelectedIndex(newValue);
  };

  // the main structure of drawer used as dashboard's component at many places
  const drawer = (
    <>
      <Box
        sx={{
          mt: 2.5,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Stack sx={{ pl: 4, mt: 3, mb: 6 }}>
          <Link href={InternalLinks.LANDING_PAGE} noLinkStyle>
            <Logo />
          </Link>
          {/* <Typography variant="TitleLarge" sx={{ mt: 4 }}> */}
          <p className={style.TitleLarge}>
            {title} </p>
          {/* </Typography> */}
          {/* <Typography
            variant="LabelLarge"
            color="onsurfacevariant.main"
            sx={{ mt: 1 }}
          > */}
          <p className={style.LabelLarge} style={{ color: "#c4c6d0" }}>
            {subtitle} </p>
          {/* </Typography> */}
        </Stack>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={selectedIndex}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              width: "5px",
            },
          }}
          sx={{
            "& .MuiButtonBase-root": {
              alignItems: "left !important",
              justifyContent: "left !important",
              p: 0,
              pl: 4,
              height: "20px !important",
              minHeight: "40px",
            },
            "& .Mui-selected": {
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
            },
            "& .MuiTab-root": {
              // minHeight: "20px"
            }
          }}
        >
          {tabs.map((tab, i) => (
            // <StyledTab wrapped icon={<Icon fontSize="small">{tab.icon}</Icon>} iconPosition="start" label={<Typography variant="TitleMedium">{tab.label}</Typography>} disabled={tab.disabled} {...a11yProps(i)} key={i} />
            <StyledTab wrapped icon={<Icon fontSize="small">{tab.icon}</Icon>} iconPosition="start" label={<p className={style.TitleMedium}>{tab.label}</p>} disabled={tab.disabled} {...a11yProps(i)} key={i} />

          ))}
        </Tabs>
      </Box>
      <TextButton sx={{ ml: 3, mb: 2, width: 'max-content' }}
        startIcon={<HiOutlineArrowLeft />}
        onClick={() => router.back()}
      >
        {/* <Typography variant="LabelLarge"> */}
        <p className={style.LabelLarge}>
          Back </p>
        {/* </Typography> */}
      </TextButton>
    </>
  );

  const DashboardDrawer = (
    <>
      <Box
        sx={{
          mt: 2.5,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Stack sx={{ pl: 4, mt: 3, mb: 6 }}>
            <Link href={InternalLinks.LANDING_PAGE} noLinkStyle>
              <Logo />
            </Link>
            {/* <Typography variant="TitleLarge" sx={{ mt: 4 }}> */}
            <p className={style.TitleLarge}>
              {title} </p>
            {/* </Typography> */}
            {/* <Typography
              variant="LabelLarge"
              color="onsurfacevariant.main"
              sx={{ mt: 1 }}
            > */}
            <p className={style.LabelLarge} style={{ color: "#c4c6d0" }}>
              {subtitle} </p>
            {/* </Typography> */}
          </Stack>
          {/* <Typography
            variant="LabelLarge"
            color="onsurfacevariant.main" sx={{ pl: 3, mb: 1 }}> */}
          <p className={style.LabelLarge} style={{ color: "#c4c6d0" }}>
            Tabs </p>
          {/* </Typography> */}
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={selectedIndex}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                width: "5px",
              },
            }}
            sx={{
              "& .MuiButtonBase-root": {
                alignItems: "left !important",
                justifyContent: "left !important",
                p: 0,
                pl: 4,
                height: "20px !important",
                minHeight: "40px",
              },
              "& .Mui-selected": {
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
              },
              "& .MuiTab-root": {
                // minHeight: "20px"
              }, mb: 4, minHeight: "80px"
            }}
          >
            {tabs.map((tab, i) => (
              // <StyledTab wrapped icon={<Icon fontSize="small">{tab.icon}</Icon>} iconPosition="start" label={<Typography variant="TitleMedium">{tab.label}</Typography>} disabled={tab.disabled} key={i} />
              <StyledTab wrapped icon={<Icon fontSize="small">{tab.icon}</Icon>} iconPosition="start" label={<p className={style.TitleMedium}>{tab.label}</p>} disabled={tab.disabled} key={i} />
            ))}
          </Tabs>
          {/* <Typography
            variant="LabelLarge"
            color="onsurfacevariant.main" sx={{ pl: 3, mb: 1 }}> */}
          <p className={style.LabelLarge} style={{ color: "#c4c6d0" }}>
            Pages </p>
          {/* </Typography> */}
          <Tabs
            orientation="vertical"
            variant="scrollable"
            sx={{
              "& .MuiButtonBase-root": {
                alignItems: "left !important",
                justifyContent: "left !important",
                p: 0,
                pl: 4,
                height: "20px !important",
                minHeight: "40px",
              },
              "& .Mui-selected": {
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
              },
              "& .MuiTab-root": {
                // minHeight: "20px"
              }, mb: 4, minHeight: "80px"
            }}
          >
            {pages.map((page, i) => (
              // <StyledTab wrapped iconPosition="start" onClick={() => { router.push("https://cometlabs.in/" + page.link) }} label={<Typography variant="TitleMedium">{page.label}</Typography>} {...a11yProps(i)} key={i} />
              <StyledTab wrapped iconPosition="start" onClick={() => { router.push("https://cometlabs.in/" + page.link) }} label={<p className={style.TitleMedium}>{page.label}</p>} {...a11yProps(i)} key={i} />

            ))}
          </Tabs>
        </div>
        <TextButton sx={{ ml: 1, mb: 2, width: 'max-content' }}
          startIcon={<HiOutlineArrowLeft />}
          onClick={() => router.back()}
        >
          {/* <Typography variant="LabelLarge"> */}
          <p className={style.LabelLarge}>
            Back </p>
          {/* </Typography> */}
        </TextButton>
      </Box>
    </>
  );

  const { data: session } = useSession();
  const user: DefaultUser = session?.user as DefaultUser;

  // returning the overall basic structure of Dashboard
  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: 0,
              backgroundImage: "none",
            },
          }}
        >
          {DashboardDrawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: 0,
              backgroundImage: "none",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          height: "100vh", overflow: "auto",
          flexGrow: 1,
          width: { md: `calc(100vw - ${drawerWidth}px)` },
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, ml: 2 }}
          >
            <HiMenu />
          </IconButton>
          <Header noLogo user={user} isDashboard />
        </div>
        {tabs.map((tab, i) => (
          <TabPanel key={i} value={selectedIndex} index={i}>
            {tab.component}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}
