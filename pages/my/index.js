import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Row from "../../src/components/Box/Row";
import Column from "../../src/components/Box/Column";
import { Typography, Button } from "@mui/material";
import { useState } from "react";
import { useCookies } from "react-cookie";
import LoginLayout from "../../src/components/Layout/LoginLayout";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isAndroid,
  isIOS,
} from "react-device-detect";
import { useRouter } from "next/router";
import { BackgroundInput } from "../../src/components/Input";
import { Box } from "@mui/system";
import Layout from "../../src/components/Layout";

export default function My() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const textList = [
    { text: "회원정보수정", route: "/user" },
    { text: "고객지원", route: "/cs" },
    { text: "설정", route: "/setting" },
  ];

  return (
    <Layout title={"정보수정"} nav>
      <Column
        justifyContent={"start"}
        sx={{ width: "100%", height: "100%", mt: "50px", gap: "38px" }}
      >
        {textList.map((list, key) => (
          <Row
            alignItems={"center"}
            justifyContent={"between"}
            sx={{ width: "100%" }}
            key={key}
          >
            <Typography variant="h6">{list.text}</Typography>
            <Button onClick={() => router.push(`my/${list.route}`)}>
              <Row
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ gap: "18px" }}
              >
                <Typography variant="basic" color={"gray.scale7"}>
                  {list.text}
                </Typography>
                <Image
                  src="/my/>.png"
                  width={5}
                  height={10}
                  alt=""
                  layout="fixed"
                />
              </Row>
            </Button>
          </Row>
        ))}
      </Column>
    </Layout>
  );
}
