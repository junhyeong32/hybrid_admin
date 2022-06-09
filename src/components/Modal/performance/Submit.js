import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../../../../styles/js/modal";
import shareStyles from "../../../../styles/js/modal";
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
import TextBox from "../../Box/Text";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "notistack";
import Axios from "../../../utility/api";
import { useCookies } from "react-cookie";
import { ModalContext } from "../../../contexts/ModalContext";
import { InformationSelectInput } from "../../InformationInput";
import TopLabelContents from "../../Box/TopLableContents";

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

export default function Submit({ index, modal_props, deleteModalList }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [user_info] = useState(cookies.user_info);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState("서명");
  const [message, setMessage] = useState("");

  const { modal_list, modal_data, addModalList, addModalData } =
    useContext(ModalContext);

  useEffect(() => {
    if (reason === "서명") setMessage("서명을 확인해주세요.");
    else if (reason === "고객명") setMessage("고객명을 확인해주세요.");
    else if (reason === "증권번호") setMessage("증권번호를 확인해주세요.");
    else if (reason === "보험사") setMessage("보험사를 확인해주세요.");
    else setMessage("");
  }, [reason]);

  const handleImprove = async () => {
    setLoading(true);
    const res = (
      await Axios.Post("document/need-update", {
        platform: "web",
        token: cookies.access_token,
        reason: message,
        document_codes: Array.isArray(modal_props.document_codes)
          ? modal_props.document_codes.join(",")
          : modal_props.document_codes,
      })
    )?.code;

    if (res === 200) {
      enqueueSnackbar("보완요청이 완료되었습니다..", {
        variant: "success",
        autoHideDuration: 2000,
      });
      deleteModalList(index);
      window.parent.postMessage(
        {
          message: "detail_reload",
          value: "detail_reload",
        },
        "*"
      );
    } else {
      enqueueSnackbar(res?.message, {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
    return () => {
      setLoading(false);
    };
  };

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
          <Row sx={{ borderBottom: "1px solid black", pb: 2.2 }}>
            <Image src="/logo_color.png" width={86} height={14} alt="" />
          </Row>

          <Typography variant="h4">제출 하시겠습니까?</Typography>
          <Typography variant="small" color="primary.red">
            제출 완료 시 수정이 불가능합니다.
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
              //   onClick={() => {
              //     window.parent.postMessage(
              //       {
              //         message: "openTargetModal",
              //         value: {},
              //       },
              //       "*"
              //     );
              //   }}
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
