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
import Step1 from "./Step1";
import Step2 from "./Step2";
import Terms from "./Terms";
import { useRouter } from "next/router";

export default function SignupForm() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [cerfication_num, setCerficationNum] = useState("");
  const [cookies, setCookie] = useCookies();
  const [step, setStep] = useState(3);
  const [terms, setTerms] = useState([]);

  const handelGetAuthenticationCode = async () => {
    if (phone.length !== 11) {
      return;
    }
    const cerfication = await cpiatApi.Post("user/send_authentication_code", {
      PhoneNo: phone,
    });

    if (cerfication?.code === "200") {
      setToken(cerfication?.data[0].SmsToken);
      setStep(step + 1);
    }
  };

  const handelCerfication = async () => {
    if (phone.length !== 11) {
      return;
    }
    const cerfication = await cpiatApi.Post("user/send_authentication_code", {
      PhoneNo: phone,
    });

    if (cerfication?.code === "200") {
      setToken(cerfication?.data[0].SmsToken);
      setStep(step + 1);
    }
  };

  const handleAgreeTerms = () => {
    if (terms[1] && terms[2]) router.replace("link-shop");
  };

  return (
    <Layout
      back_action={() => setStep(step === 1 ? router.push("/") : step - 1)}
    >
      <Column justifyContent={"between"} sx={{ width: "100%", height: "100%" }}>
        {step === 1 ? (
          <Step1 phone={phone} setPhone={setPhone} />
        ) : step === 2 ? (
          <Step2
            cerfication_num={cerfication_num}
            setCerficationNum={setCerficationNum}
            action={handelGetAuthenticationCode}
          />
        ) : (
          step === 3 && <Terms terms={terms} setTerms={setTerms} />
        )}

        <Button
          variant="contained"
          color={
            phone.length === 11 || (terms[1] && terms[2])
              ? "primary"
              : "button_gray"
          }
          sx={{
            width: "100%",
            height: 56,
            color: "white",
          }}
          onClick={() => {
            step === 1
              ? handelGetAuthenticationCode()
              : step === 2
              ? handelCerfication()
              : handleAgreeTerms();
          }}
        >
          ??????
        </Button>
      </Column>
    </Layout>
  );
}
