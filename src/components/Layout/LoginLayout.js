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

export default function LoginLayout({
  children,
  title,
  description,
  bottom,
  header,
  sx,
}) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [loading, setLoading] = useState(false);

  return (
    <>
      {header && <Header title={title} />}
      <main>
        {loading ? (
          <Container
            component="article"
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
            component="article"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-between",
              alignItems: "center",
              minHeight: "calc(100vh - 208px)",
              height: "100%",
              p: "85px 20px 59px 20px",
              ...sx,
            }}
          >
            {children}
          </Container>
        )}
      </main>
      {/* {footer && <Footer />} */}
    </>
  );
}
