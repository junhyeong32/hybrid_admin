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
import Layout from "../../src/components/Layout";
import PointBox from "../../src/components/Box/Point";

export default function Point() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [order_list, setOrderList] = useState([]);

  return (
    <Layout>
      <Column sx={{ width: "100%" }}>
        <Typography variant="h2">포인트 전체보기</Typography>
        <Typography variant="normal" color={"gray.scale7"} mt={"6px"}>
          홈 화면에서 바로 확인 할 포인트를 선택해주세요
        </Typography>
        <Row sx={{ gap: "12px", mt: "16px" }}>
          <PointBox />
          <PointBox />
          <PointBox />
        </Row>
      </Column>
    </Layout>
  );
}
