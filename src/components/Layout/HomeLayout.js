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

export default function HomeLayout({ children, title, el, footer, sx }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [loading, setLoading] = useState(false);
  console.log(el);

  return (
    <>
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
              width: "100%",
              minHeight: "calc(100vh - 408px)",
              p: "40px 20px 59px 20px",
              ...sx,
            }}
          >
            <Row
              justifyContent={"between"}
              alignItems={"center"}
              sx={{ width: "100%", gap: el && "11px" }}
            >
              {el ? (
                el
              ) : (
                <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
                  {title}
                </Typography>
              )}

              <Image
                src="/home/search.png"
                width={18}
                height={18}
                alt="search"
                layout="fixed"
              />
            </Row>
            {children}
          </Container>
          <Navigation />
        </>
      )}
    </>
  );
}
