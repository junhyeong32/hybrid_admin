import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Row from "../../../../src/components/Box/Row";
import Column from "../../../../src/components/Box/Column";
import { Typography, Button } from "@mui/material";
import { useState } from "react";
import { useCookies } from "react-cookie";
import LoginLayout from "../../../../src/components/Layout/LoginLayout";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isAndroid,
  isIOS,
} from "react-device-detect";
import { useRouter } from "next/router";
import { BackgroundInput } from "../../../../src/components/Input";
import { Box } from "@mui/system";
import Layout from "../../../../src/components/Layout";
import RouteButton from "../../../../src/components/Button/Route";

export default function Notice() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <Layout title={"공지사항"} nav>
      <Column sx={{ gap: "16px" }}>
        <Row
          alignItems={"start"}
          sx={{
            gap: 1,
            width: "100%",
            height: "100%",
            gap: "16px",
            borderBottom: "1px solid #E9EBEE",
            pb: "18px",
          }}
          onClick={() => router.push("notice/id")}
        >
          <Image
            src="/new.png"
            width={20}
            height={18}
            alt="new"
            layout="fixed"
          />

          <Column sx={{ gap: 1 }}>
            <Typography variant="basic" color="gray.scale9">
              [이벤트] 뭐샀지 앱 런칭 기념 이벤트! 100% 꽝 없는
              럭키박스(6/1~6/30)
            </Typography>
            <Typography variant="small" color="gray.scale6">
              2020.12.12
            </Typography>
          </Column>
        </Row>
      </Column>
    </Layout>
  );
}
