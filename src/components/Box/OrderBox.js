import Image from "next/image";
import { Container, Typography, Button, Divider } from "@mui/material";
import Column from "./Column";
import Row from "./Row";
import { numberFormat } from "../../utility/math";

export default function OrderBox({ data }) {
  return (
    <Column
      sx={{
        width: 315,
        height: 153,
        borderBottom: "1px solid #0D1D41",
        background: "#FFFFFF",
        border: "1px solid #E9EBEE",
        borderRadius: "6px",
        mt: 2.2,
      }}
      onClick={() => router.push(`/order/${data}`)}
    >
      <Row justifyContent={"between"} sx={{ p: "14px" }}>
        <Row>
          <Image src={"/"} width={20} height={20} alt="" />
          <Typography variant="h6" align="left">
            {}스마트 스토어
          </Typography>
        </Row>
        <Typography variant="h6" color="primary">
          {}배송
        </Typography>
      </Row>
      <Divider />
      <Row sx={{ p: "14px" }}>
        <Image src="/" width={82} height={82} alt="" />
        <Column>
          <Typography
            variant="normal"
            color="gray.scale6"
            className="text_line"
          >
            케이스모아
          </Typography>
          <Typography
            variant="normal"
            color="gray.scale8"
            className="text_line"
          >
            갤럭시노트20 울트라 케이스 3종..
          </Typography>

          <Typography variant="h5" color="gray.scale8">
            {numberFormat(2000)}원
          </Typography>
        </Column>
      </Row>
    </Column>
  );
}
