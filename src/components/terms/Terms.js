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

export default function Terms() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Typography variant="h2">이용약관</Typography>
      <Typography variant="basic" color="gray.scale7" mt={"30px"}>
        제 1 조 [목적]
        <br />
        본 약관은 서클플랫폼 주식회사(이하 “회사”)가 제공하는 바이어리
        서비스(이하”서비스”)의 이용과 관련하여 회사와 이용자의 권리·의무 및
        책임사항, 기타 필요한 사항을 규정함을 목적으로합니다.
        <br />
        <br />
        제 2 조 [용어의 정의]
        <br />
        본 약관에서 사용하는 용어의 정의는 다음과 같습니다. 서비스: 이용자가
        쇼핑몰 구매활동을 통합 관리할 수 있도록 주문내역통합조회/검색, 배송조회,
        리뷰작성, 구매확정처리, 통계조회 등을 할 수 있는 서비스를 말합니다.
        유료서비스: 회사가 제공하는 서비스 중 이용요금이 부과되는 별도의
        서비스를 말합니다.
        <br />
        <br />
        이용자: 본 약관에 따라 회사와 서비스 이용계약을 체결하고 회사가 제공하는
        서비스를 이용하는 개인 또는 법인을 의미합니다. <br />
        <br />
        아이디(ID): 이용자 식별과 이용자의 서비스 이용을 위하여 이용자가
        선정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다.
        <br />
        <br />
        비밀번호: 아이디(ID)와 일치된 이용자임을 확인하고, 이용자의 비밀을
        보호하기 위해 이용자가 설정한 문자와 숫자의 조합을 의미합니다.
        <br />
        <br />
        스팸: 수신자가 원하지 않는데도 불구하고 정보통신망을 통해 일방적으로
        전송 또는 게시되는 영리목적의 광고성 정보를 말합니다.
        <br />
        <br />
        피싱메시지: 메시지 내용 중 인터넷 주소를 클릭하면 악성코드가 설치되어
        수신자가 모르는 사이에 금적적 피해 또는 개인·금융정보 탈취 피해를
        야기하는 메시지를 말합니다.
        <br />
        <br />
        어플리케이션: 이용자에게 회사의 서비스를 제공할 수 있는 프로그램을
        뜻하며, 앱 뿐만 아니라 웹 형태를 모두 포함합니다.
        <br />
        <br />제 3 조 [약관의 게시와 개정]
        <br /> ① 회사는 본 약관의 내용과 함께 상호, 대표자 성명, 회사
        소재지주소, 사업자등록번호, 연락처, 개인정보관리책임자 등을 이용자가
        쉽게 알 수 있도록 앱 메뉴 내에 게시합니다.
        <br /> ② 회사는 전기통신사업법, 약관 규제에 관한 법률, 개인정보보호법,
        정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 “정보통신망법”),
        전자상거래 등에서의 소비자 보호에 관한 법률 등 관련법을 위배하지 않는
        범위에서 본 약관을 개정할 수 있습니다.
      </Typography>
    </>
  );
}
