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

export default function Home() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [cerfication_num, setCerficationNum] = useState("");

  return (
    <LoginLayout>
      <Column justifyContent={"between"} sx={{ width: "100%", height: "100%" }}>
        <Column sx={{ gap: "20px" }}>
          <Typography variant="big">
            안녕하세요!{" "}
            <Image src="/login/hand.png" width={32} height={32} alt="" />
            <br />
            <Typography variant="big" color="primary" component={"span"}>
              뭐샀지
              <Typography component={"span"} variant="big" color="black">
                입니다.
              </Typography>
            </Typography>
          </Typography>

          <Typography>
            여기저기 흩어진 나의 쇼핑 내역을
            <br />한 곳에 모아주는 쇼핑친구입니다
          </Typography>
        </Column>
        <Column sx={{ width: "100%" }} alignItems={"center"}>
          {isIOS ? (
            <>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ width: "100%", height: 56, gap: 1 }}
                onClick={() => router.push("signup")}
              >
                시작하기
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="kakao"
                fullWidth
                sx={{ width: "100%", height: 56, gap: 1, color: "blakc" }}
              >
                <Image src="/login/kakao.png" width={18} height={17} alt="" />
                카카오로 시작하기
              </Button>
              <Button
                variant="outlined"
                fullWidth
                sx={{ width: "100%", height: 56, mt: 1 }}
                onClick={() => router.push("signup")}
              >
                휴대전화로 시작하기
              </Button>
            </>
          )}

          <Typography variant="normal" color={"gray"} mt={"20px"}>
            휴대폰번호가 바뀌셨나요?
            <Link href="account">
              <a
                style={{ textDecoration: "underline", marginLeft: "8px" }}
                href=""
              >
                계정찾기
              </a>
            </Link>
          </Typography>
        </Column>
      </Column>
    </LoginLayout>
  );
}
