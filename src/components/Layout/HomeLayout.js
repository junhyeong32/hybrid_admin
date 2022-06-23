import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Grid,
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Container,
} from "@mui/material";
import Column from "../Box/Column";
import Row from "../Box/Row";
import { LoadingButton } from "@mui/lab";
import { useCookies } from "react-cookie";
import Header from "../Header";
import Navigation from "../Navigation";

export default function HomeLayout({ children, title, footer, sx }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header title={title} />
      {loading ? (
        <Container
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size="70px" thickness={5} color="primary" />
        </Container>
      ) : (
        <>
          <Container
            component="main"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              minHeight: "calc(100vh - 408px)",
              ...sx,
            }}
          >
            {children}
          </Container>
          <Navigation />
        </>
      )}
      {/* {footer && <Footer />} */}
    </>
  );
}
