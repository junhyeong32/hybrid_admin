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
import { navigationList } from "./navigationList";
import { useRouter } from "next/router";

export default function Navigation({ title }) {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [loading, setLoading] = useState(false);

  console.log(router.pathname.split("/")[1]);

  return (
    <nav>
      {navigationList.map((list, key) => {
        return (
          <Column
            justifyContent={"between"}
            alignItems={"center"}
            key={key}
            sx={{ height: 44 }}
          >
            {list.img && (
              <Image
                src={
                  `/${router.pathname.split("/")[1]}` === list.href
                    ? list.route_img
                    : list.img
                }
                width={list.img_width}
                height={list.img_height}
              />
            )}
            <Typography
              variant="small"
              color={
                `/${router.pathname.split("/")[1]}` === list.href
                  ? "primary"
                  : "gray"
              }
            >
              <Link href={list.href}>{list.text}</Link>
            </Typography>
          </Column>
        );
      })}
    </nav>
  );
}
