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

export default function Event() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Typography variant="h2">이벤트/프로모션 정보 선택 동의</Typography>
      <Typography variant="basic" color="gray.scale7" mt={"30px"}>
        제 1 조 [목적]
        <br /> 서클플랫폼 주식회사 (이하 ‘회사’라 한다)가 제공하는 바이어리
        서비스(이하 ‘서비스’라 한다)는 이용자에게 보다 다양한 정보를 제공하고,
        서비스의 질을 향상시키기 위하여「개인정보보호법」,「정보통신망 이용촉진
        및 정보보호 등에 관한 법률」및 「신용정 보의 이용 및 보호에 관한
        법률」의 규정을 준수하여 회사 또는 회사의 제휴사를 통해 이용자의
        개인정보를 상품소개 및 홍보 등 영업목적으로 활용할 수 있습니다.
        <br />
        <br />
        제 2 조 [수집 및 활용 관련 정보]
        <br />
        개인정보 활용업체, 수집항목 및 이용목적은 아래와 같습니다. 개인정보의
        마케팅 정보활용 제공에 관한 동의서에 동의하신 이용자의 정보만 제공되며,
        제공된 정보는 명시된 이용목적을 벗어나 이용되지 않고, 개인정보의 유출 등
        사고가 일어나지 않도록 더욱 철저한 보안이 이루어지도록 노력하고
        있습니다.
        <br />
        <br />
        활용업체 : 서클플랫폼 주식회사
        <br />
        개인정보 수집 항목 : 휴대폰번호, 이메일, 거래쇼핑몰 계정정보(ID, PW 등)
        <br />
        개인정보 수집 이용 목적 : 이벤트 운영 및 광고성 정보 전송, 서비스 관련
        정보 전송 보유 및 이용기간 : 이용자가 동의를 철회하거나, 탈퇴시까지
        보유•이용
        <br />
        <br />
        제 3조(제3자 정보제공의 동의 철회)
        <br />
        본 동의서에 동의하고 가입하신 신규 이용자 중 정보제공을 철회
        <br /> 하고 싶은 이용자는 이미 제공된 개인정보라 하더라도, 언제든지
        열람, 정정, 삭제를 요구할 수 있습니다. 열람, 정정, 삭제 및 정보제공 동의
        철회는 회사 이메일(help@cplat.io)를 통해 요청할수 있습니다. 회사는
        이용자의 소중한 정보를 보호하기 위하여 신속하게 처리되도록 최선의 노력을
        다하겠습니다.
      </Typography>
    </>
  );
}
