import Image from "next/image";
import { Container, Typography, Button, Divider } from "@mui/material";
import Column from "./Column";
import Row from "./Row";
import { numberFormat } from "../../utility/math";

export default function StatusBox({ status }) {
  return (
    <Row
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        width: 37,
        height: 24,
        background: "#89929E",
        borderRadius: "4px",
      }}
    >
      <Typography variant="small" color="primary.white">
        완료
      </Typography>
    </Row>
  );
}
