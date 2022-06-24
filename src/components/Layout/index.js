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
  CircularProgress,
} from "@mui/material";
import Column from "../Box/Column";
import Row from "../Box/Row";
import { LoadingButton } from "@mui/lab";
import { useCookies } from "react-cookie";
import Header from "../Header";
import Navigation from "../Navigation";

export default function Layout({ children, title, back_action, nav, sx }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header title={title} back_action={back_action} />
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
        <Container
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "calc(100% - 107px)",
            pb: "16px",
            ...sx,
          }}
        >
          {children}
        </Container>
      )}
      {nav && <Navigation />}
    </>
  );
}
