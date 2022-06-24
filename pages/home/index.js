import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Row from "../../src/components/Box/Row";
import Column from "../../src/components/Box/Column";
import { Typography, Button } from "@mui/material";
import { useState } from "react";
import { useCookies } from "react-cookie";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isAndroid,
  isIOS,
} from "react-device-detect";
import { useRouter } from "next/router";
import HomeLayout from "../../src/components/Layout/HomeLayout";
import OrderBox from "../../src/components/Box/OrderBox";
import { numberFormat } from "../../src/utility/math";
import ShoppingmallBox from "../../src/components/Box/ShoppingmallBox";

export default function Home() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [order_list, setOrderList] = useState([]);

  return (
    <HomeLayout title="홈">
      <Row sx={{ width: "100%", gap: 1, mt: "18px" }}>
        <Row
          justifyContent={"between"}
          alignItems={"center"}
          sx={{
            background: "#F7F5FF",
            width: "70%",
            height: 82,
            p: 2,
            borderRadius: "6px",
          }}
        >
          <Column onClick={() => router.push("home/point")}>
            <Typography variant="normal">즐겨찾는 쇼핑몰 포인트</Typography>
            <Row alignItems={"center"} sx={{ gap: 1 }}>
              <Image
                src="/home/z.png"
                width={20}
                height={20}
                alt="z"
                layout="fixed"
              />
              <Typography variant="h4" color="primary">
                {numberFormat(10000)}원
              </Typography>
            </Row>
          </Column>
          <Image
            src="/home/>.png"
            width={16}
            height={16}
            alt=">"
            layout="fixed"
          />
        </Row>
        <Column
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            background: "#F7F8F9",
            width: "30%",
            height: 82,
            borderRadius: "6px",
            gap: 1,
          }}
        >
          <Image
            src="/home/icn_chart.png"
            width={36}
            height={36}
            alt="chart"
            layout="fixed"
          />
          <Typography variant="normal">내 소비통계</Typography>
        </Column>
      </Row>

      <Row justifyContent={"between"} sx={{ width: "100%", mt: "44px" }}>
        <Typography>주문내역</Typography>
        <Image src="/home/filter.png" width={28} height={28} alt="filter" />
      </Row>

      <Column
        alignItems={"center"}
        justifyContent={order_list?.length === 0 ? "center" : "start"}
        sx={{
          width: "100vw",
          background: "#F6F8FA",
          height: "100%",
          minHeight: "calc(100vh - 335px)",
          mt: "20px",
        }}
      >
        {order_list?.length === 0 ? (
          <>
            <Typography variant="normal" color={"gray.scale6"} align="center">
              최근 3개월 간 수집되는 주문내역이 없습니다
              <br /> 이용하고 계신 다른 쇼핑몰을 추가해보시겠어요?
            </Typography>
            <Button
              variant="outlined"
              sx={{ p: 0, width: 122, height: 34, mt: "16px" }}
            >
              <Typography variant="basic" color="primary">
                쇼핑몰 추가하기
              </Typography>
            </Button>
          </>
        ) : (
          <OrderBox />
        )}
      </Column>
    </HomeLayout>
  );
}
