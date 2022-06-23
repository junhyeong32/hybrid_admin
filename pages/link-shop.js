import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Row from "../src/components/Box/Row";
import Column from "../src/components/Box/Column";
import { Typography, Button } from "@mui/material";
import { useState } from "react";
import { useCookies } from "react-cookie";
import LoginLayout from "../src/components/Layout/LoginLayout";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isAndroid,
  isIOS,
} from "react-device-detect";
import { useRouter } from "next/router";
import { BackgroundInput } from "../src/components/Input";

export default function LinkShop() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Column sx={{ width: "100%", p: "14px 20px 59px 20px" }}>
      <Row justifyContent={"end"} sx={{ width: "100%" }}>
        <Typography color="primary">
          <Link href="home">건녀뛰기</Link>
        </Typography>
      </Row>

      <Typography variant="h1">쇼핑몰 연결</Typography>

      <Typography color="gray.scale7">
        쇼핑몰 이용하실 때 자주 사용하는 아이디와 비밀번호를 입력하시면 연결
        가능한 쇼핑몰을 연결해드릴게요
      </Typography>
      <Column alignItems={"center"} sx={{ width: "100%", gap: 2 }}>
        <BackgroundInput
          placeholder={"아이디를 입력해주세요"}
          h={56}
          background="#F1F3F4"
          value={id}
          setValue={setId}
        />
        <BackgroundInput
          placeholder={"비밀번호를 입력해주세요"}
          h={56}
          background="#F1F3F4"
          value={password}
          setValue={setPassword}
          type="password"
        />
        <Typography component={"span"} variant="normal" color="gray.scale7">
          각각 다른 아이디를 사용하시나요?
          <Typography variant="normal" sx={{ textDecoration: "underline" }}>
            <Link href="/">개별 연동하기</Link>
          </Typography>
        </Typography>

        <Button
          variant="contained"
          color={id && password ? "primary" : "button_gray"}
          sx={{ width: "100%", height: 56, p: 0 }}
        >
          연결 가능한 쇼핑몰 찾기
        </Button>
      </Column>
    </Column>
  );
}
