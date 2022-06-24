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

export default function Privacy() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Typography variant="h2">개인정보처리방침</Typography>
      <Typography variant="basic" color="gray.scale7" mt={"30px"}>
        서클플랫폼 주식회사(이하 “회사”)는 「정보통신망 이용촉진 및 정보보호
        등에 관한 법률」 등 모든 관련 법규를 준수하며, 회사의 서비스를 이용하는
        고객(이하 “이용자”)의 개인정보가 보호받을 수 있도록 최선을 다하고
        있습니다.
        <br />
        <br />
        ‘개인정보처리방침’이란 이용자의 소중한 개인정보를 보호함으 로써 이용자가
        안심하고 서비스를 이용할 수 있도록 회사가 준수 해야 할 지침을
        의미합니다. 회사는 개인정보처리방침을 개정하 는 경우 웹사이트
        공지사항(또는 개별공지)을 통하여 공지할 예 정이오니 서비스 이용시에
        수시로 확인해주시기 바랍니다. 제 1 조 [수집하는 개인정보의 항목 및
        수집방법] ① 수집하는 개인정보의 항목 1) 회사는 회원가입 또는 서비스 이용
        시 고객상담, 각종 서비스 의 제공을 위하여 다음과 같은 개인정보를 수집
        이용하고 있습니 다.
        <br />
        <br />
        가. 필수정보
        <br /> - 아이디, 비밀번호, 상호(법인명), 성명(대표자명), 사업자등록
        번호, 업태/업종, 사업자유형, 사업장주소 및 우편번호, 본인확인 값 (CI,
        DI)
        <br />
        - 담당자명, 회사 전화번호, 담당자 이메일,
        <br />
        - 거래쇼핑몰 관리자정보, 거래쇼핑몰 계정정보 (ID, PW, 2 차 비밀번호 등),
        거래쇼핑몰 등록정보 (상호,사업자등록번호, 대표 자명, 대표전 연락처,
        정산은행명, 예금주, 계좌번호 등), 거래쇼핑몰 판매정보 (배송정보,
        상품등록내역, 매출내역, 정산내역, 반품내역, 리뷰정보 등)
        <br /> 나 .선택정보
        <br />
        - 담당자 직급, 담당자 휴대전화번호, 팩스번호, 직원 수<br />
        ② 서비스 이용 과정이나 사업 처리 과정에서 다음과 같은 정보들이 자동으로
        생성되어 수집될 수 있습니다.
        <br />
        - IP Address, 쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록
        <br />
        ③ 유료 서비스 이용 시 다음과 같은 정보들이 수집될 수 있습니 다.
        <br />
        가. 신용카드 결제 시 : 카드사명, 카드번호 등<br />
        나. 계좌이체 결제 시 : 송금자 이름, 송금 일자, 송금 은행 등<br />④
        서비스 제공 또는 법정대리인의 동의 절차 등 본인확인이 필요한 경우 다음과
        같은 정보가 수집될 수 있습니다.
      </Typography>
    </>
  );
}
