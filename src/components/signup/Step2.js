import LoginLayout from "../Layout/LoginLayout";
import Column from "../Box/Column";
import Row from "../Box/Row";
import { Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Layout from "../Layout";
import { BackgroundInput } from "../Input";
import { useState } from "react";
import cpiatApi from "../../utility/cplatApi";
import { useCookies } from "react-cookie";

export default function Step2({ cerfication_num, setCerficationNum, action }) {
  return (
    <>
      <Typography>인증번호 입력</Typography>
      <Typography>입력하신 휴대폰으로 인증번호를 전송했습니다</Typography>
      <Row sx={{ width: "100%", gap: 1 }}>
        <BackgroundInput
          background="#F1F3F4"
          value={cerfication_num}
          setValue={setCerficationNum}
          w="100%"
          h={58}
        />
        <Button
          variant="outlined"
          sx={{ width: 83, height: 58, p: 0 }}
          onClick={action}
        >
          <Typography color="primary">재전송</Typography>
        </Button>
      </Row>
      <Typography variant="small" color="primary.gray">
        인증 유효시간 : 3분 0초
      </Typography>
    </>
  );
}
