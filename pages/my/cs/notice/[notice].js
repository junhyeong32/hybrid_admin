import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Row from "../../../../src/components/Box/Row";
import Column from "../../../../src/components/Box/Column";
import { Typography, Button, Divider } from "@mui/material";
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

export default function NoticeDetail() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

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
      <Typography variant="h6" color="gray.scale9">
        [이벤트] 뭐샀지 앱 런칭 기념 이벤트! 100% 꽝 없는 럭키박스(6/1~6/30)
      </Typography>
      <Typography variant="small" color="gray.scale6" mt={2} mb={2}>
        2020.12.12
      </Typography>

      <Divider />

      <Typography variant="basic" color="gray.scale9" mt={3}>
        text
      </Typography>
    </Column>
  );
}
