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

export default function Inquiry() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <Layout title={"1:1 문의하기"} nav>
      <Column
        justifyContent={"start"}
        sx={{ width: "100%", height: "100%", gap: "16px" }}
      >
        <BackgroundInput
          background={"#F1F3F4"}
          placeholder={"제목을 입력해주세요"}
          h={56}
          value={title}
          setValue={setTitle}
        />

        <Typography variant="basic" mt="10px">
          문의내용
        </Typography>
        <BackgroundInput
          background={"#F1F3F4"}
          placeholder={"내용을 입력해주세요"}
          value={contents}
          setValue={setContents}
          //   h={319}
          multiline
          rows={10}
        />
        <Button
          sx={{ height: 56 }}
          variant="contained"
          color={title && contents ? "primary" : "button_gray"}
        >
          문의 등록하기
        </Button>
      </Column>
    </Layout>
  );
}
