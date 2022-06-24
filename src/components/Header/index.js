import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Grid,
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Container,
} from "@mui/material";
import Column from "../Box/Column";
import Row from "../Box/Row";
import { LoadingButton } from "@mui/lab";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Navigation from "../Navigation";

export default function Header({ title, back_action }) {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [loading, setLoading] = useState(false);

  return (
    <Row
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ width: "100%", p: "24px 20px 40px 20px", position: "relative" }}
    >
      <Box sx={{ position: "absolute", left: 10, cursor: "pointer" }}>
        <Image
          src="/back.png"
          width={24}
          height={24}
          alt="back"
          onClick={() => (back_action ? back_action() : router.back())}
        />
      </Box>
      <Typography variant="h6">{title}</Typography>
    </Row>
  );
}
