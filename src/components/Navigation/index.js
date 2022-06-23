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

export default function Navigation({ title }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [loading, setLoading] = useState(false);

  //TODO
  //router에 따른 이미지 변화 작업

  return (
    <nav>
      {navigationList.map((list, key) => {
        return (
          <Column alignItems={"center"} key={key}>
            {list.img && (
              <Image
                src={list.img}
                width={list.img_width}
                height={list.img_height}
              />
            )}
            <Link href={list.href}>{list.text}</Link>
          </Column>
        );
      })}
      <Column></Column>
    </nav>
  );
}
