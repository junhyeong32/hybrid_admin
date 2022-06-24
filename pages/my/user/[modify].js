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

export default function Modify() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [id, setId] = useState("");
  const [sex, setSex] = useState("");

  const textList = ["닉네임", "휴대폰 번호", "추가정보"];

  console.log(sex);
  return (
    <Layout>
      <Column
        justifyContent={"start"}
        sx={{ width: "100%", height: "100%", mt: "40px" }}
      >
        <Typography></Typography>
        <Typography variant="basic">생년월일</Typography>
        <BackgroundInput
          background={"#F1F3F4"}
          value={sex}
          onChange={(e) =>
            setSex(() => {
              let val = "";
              if (e.target.value.length === 4) {
                val = e.target.value + "년 ";
              } else if (e.target.value.length === 8) {
                val = e.target.value + "월 ";
              } else if (e.target.value.length === 12) {
                val = e.target.value + "일";
              } else {
                val = e.target.value;
              }
              return val;
            })
          }
        />
        <Typography variant="basic">성별</Typography>
        <Row sx={{ width: "100%", gap: "11px" }}>
          <Button
            sx={{ width: "50%", height: 50 }}
            variant="outlined"
            color={sex === "female" ? "primary" : "button_gray"}
            onChange={() => setSex("female")}
          >
            <Typography
              variant="basic"
              color={sex === "female" ? "primary" : "gray.scale5"}
            >
              여성
            </Typography>
          </Button>
          <Button
            sx={{ width: "50%", height: 50 }}
            variant="outlined"
            color={sex === "male" ? "primary" : "button_gray"}
            onClick={() => setSex("male")}
          >
            <Typography
              variant="basic"
              color={sex === "male" ? "primary" : "gray.scale5"}
            >
              남성
            </Typography>
          </Button>
        </Row>
        <Row></Row>
      </Column>

      <Button
        variant="contained"
        color="primary"
        // {
        //   phone.length === 11 || (terms[1] && terms[2])
        //     ? "primary"
        //     : "button_gray"
        // }
        sx={{
          width: "100%",
          height: 56,
          color: "white",
        }}
      >
        다음
      </Button>
    </Layout>
  );
}
