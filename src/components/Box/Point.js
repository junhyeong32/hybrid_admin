import Image from "next/image";
import { Container, Typography, Button, Divider, Box } from "@mui/material";
import Column from "./Column";
import Row from "./Row";
import { numberFormat } from "../../utility/math";
import BackgroundImage from "./BackgroundImage";
import { useState } from "react";

export default function PointBox({ data }) {
  const [like, setLike] = useState(false);

  //TODO
  //버튼 만들기
  return (
    <Column
      justifyContent={"between"}
      alignItems={"center"}
      sx={{
        width: "33%",
        height: 148,
        background: "#F6F8FA",
        // border: "1px solid #E9EBEE",
        borderRadius: "6px",
        p: "22px 0 10px 0",
      }}
    >
      <BackgroundImage w={40} height={40} url="back.png" />
      <Typography variant="small" color="gray.scale6">
        무신사
      </Typography>
      <Typography variant="h7">{numberFormat(3000)}원</Typography>
      <Box onClick={() => setLike(like ? false : true)}>
        <Image
          src={like ? "/home/star_color.png" : "/home/star.png"}
          width={24}
          height={24}
          alt="like"
          layout="fixed"
        />
      </Box>
    </Column>
  );
}
