import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Row from "../src/components/Box/Row";
import Column from "../src/components/Box/Column";
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
import HomeLayout from "../src/components/Layout/HomeLayout";
import OrderBox from "../src/components/Box/OrderBox";
import { numberFormat } from "../src/utility/math";
import ShoppingmallBox from "../src/components/Box/ShoppingmallBox";
import BackgroundImage from "../src/components/Box/BackgroundImage";
import { BackgroundInput } from "../src/components/Input";

export default function Shoppingmall() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [order_list, setOrderList] = useState([]);
  const [menu, setMenu] = useState("my");
  const [search, setSearch] = useState("");

  //TODO
  //1. 헤더 교체
  //2. 박스안 이미지 넣기

  return (
    <HomeLayout
      el={
        <BackgroundInput
          background={"#F1F3F4"}
          placeholder="쇼핑몰 검색"
          w="90%"
          h={40}
          value={search}
          setvalue={setSearch}
        />
      }
    >
      <Row sx={{ width: "100vw" }}>
        <Button
          sx={{
            width: "50%",
            p: 0,
            borderBottom: menu === "my" && "2px solid #5B43EF",
            borderRadius: 0,
            height: 50,
          }}
          onClick={() => setMenu("my")}
        >
          <Typography
            variant="basic"
            color={menu === "my" ? "primary" : "gray.scale5"}
          >
            내 쇼핑몰
          </Typography>
        </Button>
        <Button
          sx={{
            width: "50%",
            p: 0,
            borderBottom: menu === "link" && "2px solid #5B43EF",
            borderRadius: 0,
            height: 50,
          }}
          onClick={() => setMenu("link")}
        >
          <Typography
            variant="basic"
            color={menu === "link" ? "primary" : "gray.scale5"}
          >
            추가연결
          </Typography>
        </Button>
      </Row>
      <Column sx={{ width: "100%", gap: 2, mt: "40px" }}>
        {menu === "my" && (
          <Typography
            variant="h2"
            component={"span"}
            sx={{ lineHeight: "32px" }}
          >
            총{" "}
            <Typography variant="h2" color="primary" component={"span"}>
              4
            </Typography>
            개의 쇼핑몰에 <br /> 연결되어있습니다
          </Typography>
        )}
        <Column sx={{ width: "100%", gap: 1 }}>
          <ShoppingmallBox />
        </Column>
      </Column>
    </HomeLayout>
  );
}
