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

export default function Header({ title }) {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [loading, setLoading] = useState(false);

  return (
    <Row alignItems={"start"} sx={{ width: "100%", p: "24px 20px 59px 20px" }}>
      <Image
        src="/back.png"
        width={24}
        height={24}
        alt="back"
        onClick={() => router.back()}
      />
      <Typography variant="h4">{title}</Typography>
    </Row>
  );
}
