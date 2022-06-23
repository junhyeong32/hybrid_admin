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

export default function SignupForm() {
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [cerfication_num, setCerficationNum] = useState("");
  const [cookies, setCookie] = useCookies();
  const [step, setStep] = useState(1);
  return (
    <Layout>
      {step === 1 ? (
        <Column>
          <Typography>휴대폰 번호 입력</Typography>
          <Typography>
            휴대전화 번호는 암호화되어 안전하게 보관됩니다.
          </Typography>
          <BackgroundInput
            background="#F1F3F4"
            value={phone}
            setValue={setPhone}
            w={335}
            h={58}
          />
          <Button
            variant="contained"
            color={phone.length === 11 ? "primary" : "gray"}
            sx={{
              maxWidth: 335,
              width: "100%",
              height: 56,
              mt: 1,
              color: "white",
            }}
            onClick={async () => {
              // setStep(step + 1);
              if (phone.length !== 11) {
                return;
              }
              const cerfication = await cpiatApi.Post(
                "user/send_authentication_code",
                {
                  PhoneNo: phone,
                }
              );

              if (cerfication?.code === "200") {
                setToken(cerfication?.data[0].SmsToken);
                setStep(step + 1);
              }
            }}
          >
            다음
          </Button>
        </Column>
      ) : step === 2 ? (
        <Column>
          <Typography>인증번호 입력</Typography>
          <Typography>입력하신 휴대폰으로 인증번호를 전송했습니다</Typography>
          <BackgroundInput
            background="#F1F3F4"
            value={cerfication_num}
            setValue={setCerficationNum}
            w={335}
            h={58}
          />
          <Button
            variant="contained"
            color={phone.length === 11 ? "primary" : "gray"}
            sx={{
              maxWidth: 335,
              width: "100%",
              height: 56,
              mt: 1,
              color: "white",
            }}
            onClick={async () => {
              // setStep(step + 1);
              if (!cerfication_num) {
                return;
              }
              const cerfication = await cpiatApi.Post(
                "user/verify_authentication_code",
                {
                  SmsToken: token,
                  SmsCode: cerfication_num,
                }
              );

              if (cerfication?.code === "200") {
                setCookie(
                  "access_token",
                  cerfication?.data[0].VerificationToken,
                  {
                    path: "/",
                    maxAge: 86400,
                  }
                );
                setStep(step + 1);
              }
            }}
          >
            다음
          </Button>
        </Column>
      ) : (
        step === 3 && ""
      )}
    </Layout>
  );
}
