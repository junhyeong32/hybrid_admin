import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Row from "../../src/components/Box/Row";
import Column from "../../src/components/Box/Column";
import { Typography, Button, LinearProgress } from "@mui/material";
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
import ColumnImageTextBox from "../../src/components/Box/ColumnImageTextBox";

export default function UserByLinkShop() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [shop_list, setShopList] = useState([]);

  const loadingList = [
    { img: "/link-shop/eyes.png", text: "계정확인" },
    { img: "/link-shop/shopping.png", text: "쇼핑몰확인" },
    { img: "/link-shop/congrate.png", text: "검색완료" },
  ];

  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        padding: "60px 20px 85px 20px",
        height: "100%",
      }}
    >
      <Row
        justifyContent={"between"}
        alignItems={"center"}
        sx={{ width: "100%", mb: "4px", p: "0 20px 0 20px" }}
      >
        {loadingList.map((list, key) => (
          <ColumnImageTextBox text={list.text} img={list.img} key={key} />
        ))}
      </Row>
      <LinearProgress />
      <Column sx={{ height: "100%", mt: "50px", gap: "10px" }}>
        <Typography variant="h2">쇼핑몰 연결</Typography>
        {shop_list?.length === 0 ? (
          <Column
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ gap: "21px", height: "calc(100% - 186px)" }}
          >
            <Image
              src="/link-shop/no_shop.png"
              width={119}
              height={80}
              alt=""
              layout="fixed"
            />
            <Typography variant="basic" color="primary.scale6">
              연결 가능한 쇼핑몰을 찾지 못했습니다
            </Typography>
            <Button variant="outlined" color="button_gray">
              <Typography variant="basic" color="gray.scale6">
                재시도하기
              </Typography>
            </Button>
          </Column>
        ) : (
          <Column sx={{ gap: "21px", height: "calc(100% - 186px)" }}>
            <Typography variant="basic" color="gray.scale6">
              {shop_list?.length}개의 쇼핑몰 연결에 성공하였습니다
            </Typography>
            <Column
              sx={{
                background: "#F7F5FF",
                border: "1px solid #5B43EF",
                borderRadius: "6px",
                width: "100%",
                height: 284,
                overflowY: "scroll",
                p: "17px 0 0 17px",
              }}
            >
              스마트 스토어
            </Column>
          </Column>
        )}

        {!loading && (
          <Column alignItems={"center"} sx={{ width: "100%", gap: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "100%", height: 56 }}
              onClick={() => router.push(`link-shop/hi`)}
            >
              개별 쇼핑몰 연결하러가기
            </Button>
            <Typography variant="normal" color="gray.scale6">
              <Link href="/home">
                {shop_list?.length === 0
                  ? "나중에 할래요"
                  : "이대로 시작할게요"}
              </Link>
            </Typography>
          </Column>
        )}
      </Column>
    </Box>
  );
}
