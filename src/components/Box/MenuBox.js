import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import Row from "./Row";

export default function MenuBox({ img_src, text, onClick }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: "100%",
        columnGap: "10.6px",
        display: "flex",
        justifyContent: "flex-start",
        heigth: 57,
        borderRadius: 0,
        "&.MuiButtonBase-root:active": {
          bgcolor: "transparent",
        },
        padding: "0 0 15px 0",
        "&:hover": {
          backgroundColor: "none",
          color: "primary",
        },
        "&:active": {
          backgroundColor: "none",
        },
      }}
    >
      <Image src={img_src} width={22} height={22} alt="setting" />
      <Typography variant="h6" color="primary.white">
        {text}
      </Typography>
    </Button>
  );
}
