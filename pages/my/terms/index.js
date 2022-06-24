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
import RouteButton from "../../../src/components/Button/Route";

const textList = [
  { text: "이용약관", route: "terms/terms" },
  { text: "개인정보 처리방침", route: "terms/privacy" },
  { text: "이벤트/프로모션 정보 동의", route: "terms/evnet" },
];

export default function Terms() {
  return (
    <Layout title={"이용약관"} nav>
      <Column
        justifyContent={"start"}
        sx={{ width: "100%", height: "100%", mt: "50px", gap: "38px" }}
      >
        {textList.map((list, key) => (
          <RouteButton text={list.text} route={list.route} key={key} />
        ))}
      </Column>
    </Layout>
  );
}
