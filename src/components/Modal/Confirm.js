import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../../../styles/js/modal";
import shareStyles from "../../../styles/js/modal";
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
} from "@mui/material";
import Column from "../Box/Column";
import Row from "../Box/Row";
import TextBox from "../Box/Text";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "notistack";
import Axios from "../../utility/api";
import { useCookies } from "react-cookie";
import { ModalContext } from "../../contexts/ModalContext";
import { InformationSelectInput } from "../InformationInput";

const MessageBox = ({ text }) => {
  return (
    <Typography
      variant="normal"
      sx={{ wordBreak: "break-all", letterSpacing: "-0.05em" }}
    >
      {text.split("\n").map((txt) => (
        <>
          {txt}
          <br />
        </>
      ))}
    </Typography>
  );
};

export default function Confirm({ index, modal_props, deleteModalList }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [user_info] = useState(cookies.user_info);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState("서명");
  const [message, setMessage] = useState("");

  const { modal_list, modal_data, addModalList, addModalData } =
    useContext(ModalContext);

  console.log("start");
  return (
    <Modal
      open={modal_props.is_open}
      onClose={() => {
        deleteModalList(index);
        !modal_props && false;
      }}
    >
      <Box
        sx={{
          width: "411px",
          height: "185px",
          ...styles.modal,
          padding: "21px 38px 19px 38px",
        }}
      >
        <Column justifyContent="between" sx={{ height: "100%" }}>
          <Row
            alignItems="center"
            justifyContent="start"
            sx={{ borderBottom: "1px solid #0D1D41", pb: "9px" }}
          >
            <Image src="/logo_color.png" width={85} height={14} alt="" />
          </Row>

          <Column>
            <Typography variant="h4">{modal_data.text}</Typography>
            <Typography variant="h6" color="primary.red">
              {modal_data.warning_text}
            </Typography>
          </Column>

          <Row justifyContent="center" sx={{ gap: "19px" }}>
            <Button
              variant="contained"
              color="dark_gray"
              sx={{ width: "100px", height: "30px", p: 0 }}
              onClick={() => deleteModalList(index)}
            >
              <Typography variant="h4" color="primary.white">
                취소
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "100px", height: "30px", p: 0 }}
              onClick={handleImprove}
            >
              <Typography variant="h4" color="primary.white">
                확인
              </Typography>
            </Button>
          </Row>
        </Column>
      </Box>
    </Modal>
  );
}
