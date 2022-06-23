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

export default function Step1({ phone, setPhone }) {
  return (
    <>
      <Typography>휴대폰 번호 입력</Typography>
      <Typography>휴대폰번호 입력으로 간편하게 시작해보세요</Typography>
      <BackgroundInput
        background="#F1F3F4"
        value={phone}
        setValue={setPhone}
        h={58}
      />
    </>
  );
}
