import LoginLayout from "../../Layout/LoginLayout";
import Column from "../../Box/Column";
import Row from "../../Box/Row";
import { Typography, Button, FormControlLabel, Checkbox } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../Layout";
import { useState } from "react";
import { useEffect } from "react";

const termsList = [
  "전체 약관에 동의합니다",
  "[필수] 서비스 이용 약관 동의",
  "[필수] 개인정보 수집 및 이용 동의",
  "[선택] 이벤트/프로모션 정보 선택 동의",
];

export default function Terms({ terms, setTerms }) {
  const [all_check, setAllcheck] = useState(true);

  useEffect(
    () =>
      all_check
        ? setTerms([false, false, false, false])
        : setTerms([true, true, true, true]),
    [all_check]
  );
  return (
    <>
      <Typography variant="h1">약관동의</Typography>
      <Typography color="gray.scale7">
        서비스 이용을 위한 가입약관을 확인해주세요
      </Typography>
      {termsList.map((list, key) => {
        return (
          <Row key={key} alignItems={"center"}>
            <FormControlLabel
              label={
                <Typography
                  variant="normal"
                  //   sx={{
                  //     color: checkbox_reduce[index]?.checked
                  //       ? "#000000"
                  //       : "#909090",
                  //   }}
                >
                  {list}
                </Typography>
              }
              control={
                <Checkbox
                  checked={terms[key] || false}
                  onClick={(e) => {
                    if (key === 0) {
                      all_check ? setAllcheck(false) : setAllcheck(true);
                    } else {
                      setTerms(() => {
                        const new_ters = [...terms];

                        new_ters[key] = e.target.checked;
                        return new_ters;
                      });
                    }
                  }}
                  icon={
                    <Image
                      src={`/signup/icn_reg_check.png`}
                      width={24}
                      height={24}
                      alt=""
                    />
                  }
                  checkedIcon={
                    <Image
                      src={`/signup/icn_reg_color_check.png`}
                      width={24}
                      height={24}
                      alt=""
                    />
                  }
                />
              }
            />
            <Typography
              variant="small"
              color="gray.scale6"
              sx={{ textDecoration: "underline" }}
            >
              전문보기
            </Typography>
          </Row>
        );
      })}
    </>
  );
}
