import Image from "next/image";
import { Container, Typography, Button, Collapse } from "@mui/material";
import { useRouter } from "next/router";
import Row from "../Box/Row";
import Column from "../Box/Column";

export default function SliderButton({ open, setOpen }) {
  const router = useRouter();
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
        color="white"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          p: 0,
          ":hover": {
            boxShadow: "none",
          },
        }}
      >
        <Row justifyContent={"between"} sx={{ width: "100%", mb: 1 }}>
          <Typography variant="basic" color="gray.scale9">
            문의
          </Typography>
          <Image
            src={open ? "/top_arrow.png" : "/bottom_arrow.png"}
            width={18}
            height={18}
            alt=""
            layout="fixed"
          />
        </Row>
        <Typography variant="small" color="gray.scale6">
          2020.12.12
        </Typography>
      </Button>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{
          background: "#F6F8FA",
          p: "18px 20px 18px 20px",
          width: "100vw",
          ml: "-20px",
        }}
      >
        <Column sx={{ gap: "12px" }}>
          <Typography variant="h7">제목</Typography>
          <Typography variant="normal">contents</Typography>
        </Column>
      </Collapse>
    </>
  );
}
