import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Row from "../../../src/components/Box/Row";
import Column from "../../../src/components/Box/Column";
import { Typography, Button } from "@mui/material";
import { useState } from "react";
import { useCookies } from "react-cookie";
import LoginLayout from "../../../src/components/Layout/LoginLayout";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isAndroid,
  isIOS,
} from "react-device-detect";
import { useRouter } from "next/router";
import { BackgroundInput } from "../../../src/components/Input";
import { Box } from "@mui/system";
import Layout from "../../../src/components/Layout";
import StatusBox from "../../../src/components/Box/Status";
import SliderButton from "../../../src/components/Button/Slider";

export default function History() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Layout title={"문의내역"} nav>
      <Column
        sx={{
          width: "100%",
          borderBottom: "1px solid #E9EBEE",
          pb: "18px",
          gap: 1,
        }}
      >
        <StatusBox />
        <SliderButton open={open} setOpen={setOpen} />
      </Column>
    </Layout>
  );
}
