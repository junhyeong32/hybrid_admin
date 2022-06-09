import Image from "next/image";
import { Typography } from "@mui/material";
import Row from "./Row";

export default function Tab({
  title,
  menu_list,
  tabOnClick,
  refreshOnclick,
  closeOnClick,
  ...props
}) {
  return (
    <Row
      key={menu_list}
      alignItems="center"
      justifyContent="center"
      sx={{
        width: 170,
        gap: "25px",
        background: "#FFFFFF",
        boxShadow: "0px -2px 2px rgba(0, 0, 0, 0.15)",
        borderRadius: "5px 5px 0px 0px",
        cursor: "pointer",
        pl: "5px",
      }}
      onClick={(e) => {
        if (e.target.className === "close-btn") return;
        tabOnClick();
      }}
      {...props}
    >
      <Typography variant="h5">{title}</Typography>

      <Row sx={{ columnGap: "10px" }}>
        <Image
          src="/refresh.png"
          width={12}
          height={12}
          alt=""
          onClick={refreshOnclick}
        />
        <Image
          className="close-btn"
          src="/x.png"
          width={12}
          height={12}
          alt=""
          onClick={(e) => {
            e.preventDefault();
            closeOnClick();
          }}
        />
      </Row>
    </Row>
  );
}
