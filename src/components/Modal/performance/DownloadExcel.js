import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../../../../styles/js/modal";
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
  Divider,
} from "@mui/material";
import Column from "../../Box/Column";
import Row from "../../Box/Row";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "notistack";
import Axios from "../../../utility/api";
import { useCookies } from "react-cookie";
import { ModalContext } from "../../../contexts/ModalContext";

export default function DownloadExcel({ index, modal_props, deleteModalList }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [user_info] = useState(cookies.user_info);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState("서명");
  const [select, setSelect] = useState("전체");

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
        <Column
          alignItems={"center"}
          justifyContent="between"
          sx={{ height: "100%" }}
        >
          <Image src="/logo_color.png" width={85} height={18} alt="logo" />
          <Divider sx={{ width: "100%", border: "1px solid #0D1D41" }} />
          <Select
            variant="standard"
            sx={{
              width: 177,
              textAlign: "center",
              borderBottom: "1px solid #2D2D2D",
            }}
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <MenuItem value="전체">전체</MenuItem>
          </Select>
          <Typography variant="h6">
            선택한 등급까지의 타겟이 다운로드됩니다.
          </Typography>

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
              //   onClick={handleImprove}
            >
              <Typography variant="h4" color="primary.white">
                다운로드
              </Typography>
            </Button>
          </Row>
        </Column>
      </Box>
    </Modal>
  );
}
