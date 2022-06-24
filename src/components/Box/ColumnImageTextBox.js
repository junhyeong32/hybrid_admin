import Image from "next/image";
import { Container, Typography, Button } from "@mui/material";
import Column from "./Column";
import Row from "./Row";

export default function ColumnImageTextBox({ text, img, loading, sx }) {
  return (
    <Column alignItems={"center"}>
      <Row
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          width: 28,
          height: 28,
          background: "#5B43EF",
          borderRadius: "50%",
          mb: "4px",
        }}
      >
        <Image src={img} width={16} height={16} alt="" layout="fixed" />
      </Row>
      <Typography variant="small">{text}</Typography>
    </Column>
  );
}
