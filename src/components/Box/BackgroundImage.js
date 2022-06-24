import Image from "next/image";
import { Box } from "@mui/material";
import Column from "./Column";
import Row from "./Row";
import { numberFormat } from "../../utility/math";

export default function BackgroundImage({ w, h, url, children, sx }) {
  console.log(`url(/${url})`);
  return (
    <Box
      sx={{
        width: w,
        height: h,
        backgroundImage: `url(/${url})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
