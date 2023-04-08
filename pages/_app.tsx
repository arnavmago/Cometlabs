import "@/styles/carousel-styles.css";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import * as React from "react";
import createEmotionCache from "@/styles/createEmotionCache";
import { darktheme, lighttheme } from "@/styles/theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
// import DateAdapter from "@mui/lab/AdapterMoment";
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
// import {mode} from '@/layout/HeaderMenu';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface FestecProps extends AppProps {
  emotionCache?: EmotionCache;
  themePrefernce: Number;
}


export default function Festec(props: FestecProps) {
  // console.log(mode);
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;
  // theme.palette.mode = 'dark';
  // console.log(theme)

  const theme = [darktheme, lighttheme]
  const [themePreference, setThemePreference] = React.useState(1)

  pageProps.themePreference = themePreference
  pageProps.setThemePreference = setThemePreference

  React.useEffect(() => {

    let data = localStorage.getItem('theme');
    if (!data) {
      localStorage.setItem("theme", '0');
      data = '0';
      window.dispatchEvent(new Event('storage'))
    }
    setThemePreference(parseInt(data))

    window.addEventListener("storage", () => {
      const data = window.localStorage.getItem('theme');
      setThemePreference(parseInt(data || '0'))
    })
  }, [])

  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>COMETLABS</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="description" content="Building AI-Powered Developer's Ecosystem" />
          <meta name="description" content="Want to build a diversified developer portfolio? Are you looking for peer-to-peer learning? Are you striving for hiring & internship opportunities? Then you’re in the right place !!" />
        </Head>
        <ThemeProvider theme={theme[themePreference]}>
          <CssBaseline />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <SessionProvider basePath={"/api/auth"} session={session}>
              <SnackbarProvider>
                <Component {...pageProps} />
              </SnackbarProvider>
            </SessionProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </CacheProvider>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-EK5BRY9TL3`} />
      <Script strategy="lazyOnload" id="COMETLABS">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EK5BRY9TL3')
        `}
      </Script>
    </>
  );
}
