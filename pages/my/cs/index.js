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
  { text: "공지사항", route: "cs/notice" },
  { text: "FAQ", route: "cs/faq" },
  { text: "1:1 문의", route: "cs/inquiry" },
  { text: "문의내역", route: "cs/history" },
];

export default function Cs() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout title={"고객지원"} nav>
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
