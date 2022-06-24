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
import Privacy from "./Privacy";
import Service from "./Terms";
import Event from "./Event";

export default function Terms() {
  const router = useRouter();
  const temrs_type = router.query.terms;

  return (
    <Column sx={{ p: "17px 20px 62px 20px", overflowY: "scroll" }}>
      <Row justifyContent={"end"} sx={{ mb: "50px", cursor: "pointer" }}>
        <Image
          src="/x.png"
          width={24}
          height={24}
          alt="x"
          onClick={() => router.back()}
        />
      </Row>
      <Column>
        {temrs_type === "terms" ? (
          <Service />
        ) : temrs_type === "privacy" ? (
          <Privacy />
        ) : (
          <Event />
        )}
      </Column>
    </Column>
  );
}
