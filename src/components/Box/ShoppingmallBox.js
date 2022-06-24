import Image from "next/image";
import { Container, Typography, Button, Divider } from "@mui/material";
import Column from "./Column";
import Row from "./Row";
import { numberFormat } from "../../utility/math";

export default function ShoppingmallBox({ data }) {
  return (
    <Row
      alignItems={"center"}
      sx={{
        width: "100%",
        height: 72,
        background: "#F7F5FF",
        borderRadius: "6px",
        mt: 1,
      }}
      onClick={() => router.push(`/order/${data}`)}
    >
      <Image src={"/"} width={49} height={35} alt="" />
      <Column>
        <Typography variant="normal" sx={{ fontWeight: 600 }}>
          무신사
        </Typography>
        <Typography variant="normal" color={"gray.scale6"}>
          sample123@google.com
        </Typography>
      </Column>
    </Row>
  );
}
