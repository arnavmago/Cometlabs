import * as React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "@/components/Logo";
import { ExternalLinks, InternalLinks } from "@/content/Links";
import { CardContainer } from "@/styles/theme"
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import { styled } from "@mui/system";
import Copyright from "@/layout/Copyright";
import { DefaultUser } from "@/backend/functions";
import { ScopedCssBaseline, ThemeProvider } from '@mui/material';
import { darktheme } from '@/styles/theme';

interface NavLink {
  label: string;
  href: string;
  label2?: string;
}

interface FooterSectionProps {
  title: string;
  navs: Array<NavLink>;
}

interface FooterProps {
  user: DefaultUser;
}

export default function Footer({ user }: FooterProps) {
  const NavList = styled("ul")({
    listStyleType: "none",
    paddingInlineStart: 0,
  });

  const FooterSection = (props: FooterSectionProps) => (
    <Box sx={{ textAlign: "left" }}>
      <Typography variant="TitleLarge" sx={{ fontWeight: 600, fontSize: "20px", }}>
        {props.title}
      </Typography>
      <NavList sx={{ mb: "48px" }}>
        {props.navs.map((nav) => (
          <li key={nav.label} onClick={() => { window.location.href = nav.href }} style={{ display: "flex", textDecoration: "none", marginBottom: "4px" }}>
            {/* <Link href={nav.href} > */}
            <Typography variant="TitleMedium"
              sx={{ fontSize: "15px", color: "onsurfacevariant.main", "&:hover": { color: "white" } }}
            >
              {nav.label}
            </Typography>
            {!!nav.label2 && (
              <Typography
                sx={{ color: "#ffea00", fontWeight: 300, fontSize: "0.875rem", borderRadius: "5px", padding: "0 4px" }}
              >
                {nav.label2}
              </Typography>
            )}
          </li>
        ))}
      </NavList>
    </Box>
  );

  const PROFILE = user ? `${InternalLinks.PROFILE_PAGE}${user.username}` : `${InternalLinks.SIGNIN_PAGE}`

  const ABOUT_NAVS = [
    { label: "Blogs", href: InternalLinks.BLOGS_PAGE },
    { label: "Company", href: InternalLinks.COMPANY_PAGE },
    { label: "Careers", href: InternalLinks.CAREERS_PAGE },
    { label: "Reviews & Press", href: InternalLinks.REVIEWS_PRESS_PAGE },
    { label: "Privacy Policy", href: InternalLinks.TERMS_PRIVACY_PAGE },
    { label: "Terms & Conditions", href: InternalLinks.TERMS_CONDITIONS_PAGE },
    { label: "Contact us", href: InternalLinks.CONTACT_US_PAGE },
  ];

  const CUSTOMER_NAVS = [
    { label: "Hire Developers", href: InternalLinks.HIRE_DEVS_PAGE },
    { label: "OutSource", href: InternalLinks.OUTSOURCE_PAGE },
    { label: "Pricing", href: InternalLinks.PRICING_PAGE },
    { label: "Schedule a Demo", href: "https://calendly.com/rishika-cometlabs/hire-vetted-devs" },
    { label: "Sponsor CodeArenas", href: InternalLinks.SPONSOR_PAGE },
  ];

  const DEVELOPER_NAVS = [
    { label: "Explore CodeArenas", href: InternalLinks.EXPLORE_PAGE },
    { label: "Organise CodeArena", href: InternalLinks.ORGANISE_PAGE },
    { label: "Comet Profile", href: PROFILE },
    { label: "Get Hired", href: InternalLinks.GET_HIRED_PAGE },
    { label: "Join Community", href: InternalLinks.COMMUNITY_PAGE },
    { label: "Become Evangelists", href: InternalLinks.EVANGELISTS_PAGE },
  ];

  const PRODUCT_NAVS = [
    { label: "Playgrounds", href: InternalLinks.PLAYGROUND_PAGE },
    { label: "Extensions", href: InternalLinks.EXTENSIONS_PAGE },
    { label: "Status", href: InternalLinks.STATUS_PAGE },
    { label: "Change Log", href: InternalLinks.CHANGE_LOG_PAGE },
    { label: "Request a feature", href: InternalLinks.REQUEST_FEATURE_PAGE },
  ];



  return (
    <ThemeProvider theme={darktheme}>
      <ScopedCssBaseline>
        <CardContainer elevation={0}
          sx={{
            background: "transparent",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "none",
            borderRadius: 0,
            width: "100%",
            pt: 9,
            pb: 3,
            pl: "100px",
            pr: "100px",
          }}
        >
          <Container sx={{ justifyContent: "center", alignItems: "center" }} maxWidth={false}>
            <Grid container justifyContent="space-between" alignContent="center" spacing={2}>
              <Grid item xs={12} lg={4} sx={{ display: "flex", flexDirection: { sm: "row", lg: "column", xs: "column" }, justifyContent: "space-between" }}>
                {/* <NewsLetter /> */}
                <Box sx={{ width: { sm: "100%", lg: "320px", xs: "320px" }, ml: { xs: "0", sm: "0px", lg: "0" }, mb: { xs: 4, sm: 0 } }}>
                  <Logo isDark />
                  <Stack direction="row" sx={{ width: { sm: "200px", lg: "200px", xs: "200px" }, justifyContent: "space-between", "& .MuiIconButton-root": { p: 0 }, mb: 3, mt: 3 }}>
                    <IconButton aria-label="Linkedin" {...ExternalLinks.COMETLABS_LINKEDIN}>
                      <GrLinkedin color="#fff" size={"1.4rem"} />
                    </IconButton>
                    <IconButton aria-label="Facebook" {...ExternalLinks.COMETLABS_FACEBOOK}>
                      <FaFacebook color="#fff" size={"1.5rem"} />
                    </IconButton>
                    <IconButton aria-label="Twitter" {...ExternalLinks.COMETLABS_TWITTER}>
                      <FaTwitter color="#fff" size={"1.5rem"} />
                    </IconButton>
                    <IconButton aria-label="Instagram" {...ExternalLinks.COMETLABS_INSTAGRAM} >
                      <FaInstagram color="#fff" size={"1.5rem"} />
                    </IconButton>
                    <IconButton aria-label="YouTube" {...ExternalLinks.COMETLABS_YOUTUBE}>
                      <FaYoutube color="#fff" size={"1.7rem"} />
                    </IconButton>
                  </Stack>
                  <Copyright />
                  <Typography variant="BodySmall" paragraph color="surfacevariant" sx={{ mt: 0.5 }}>
                    Second Floor, Vindhya C4, IIIT-H, Gachibowli, Telangana 500032
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2}>
                <FooterSection title="Product" navs={PRODUCT_NAVS} />
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2}>
                <FooterSection title="Developers" navs={DEVELOPER_NAVS} />
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2}>
                <FooterSection title="Customers" navs={CUSTOMER_NAVS} />
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2}>
                <FooterSection title="About" navs={ABOUT_NAVS} />
              </Grid>
            </Grid>
          </Container>
        </CardContainer>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}
