import * as React from "react";
import Script from "next/script";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/components/createEmotionCache";
import "../styles/globals.css";
import { SnackbarProvider } from "notistack";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      maxSnack={10}
    >
      <CacheProvider value={emotionCache}>
        <Head>
          <title>LNC</title>
          <meta
            name="viewport"
            content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {/* <Script src="https://unpkg.com/typeit@8.4.0/dist/index.umd.js" /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </SnackbarProvider>
  );
}
