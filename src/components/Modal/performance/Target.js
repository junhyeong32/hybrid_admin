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
import UnderLineInput from "../../Input";

export default function Target({ index, modal_props, deleteModalList }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [user_info] = useState(cookies.user_info);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState("서명");
  const [message, setMessage] = useState("");
  const [life_fp, setLifeFp] = useState(0);
  const [life_case, setLifeCase] = useState(0);
  const [non_life_fp, setNonLifeFp] = useState(0);
  const [non_life_case, seNontLifeCase] = useState(0);

  useEffect(() => {
    if (reason === "서명") setMessage("서명을 확인해주세요.");
    else if (reason === "고객명") setMessage("고객명을 확인해주세요.");
    else if (reason === "증권번호") setMessage("증권번호를 확인해주세요.");
    else if (reason === "보험사") setMessage("보험사를 확인해주세요.");
    else setMessage("");
  }, [reason]);

  const handleSubmit = async () => {
    setLoading(true);
    const res = (
      await Axios.Post("document/target", {
        platform: "web",
        token: cookies.access_token,
        date: date,
        type: "start or end",
        for_personal: "기본으로 0, SM의 MY TARGET 제출 시에만 1",
        ...life_fp,
        ...life_case,
        ...non_life_fp,
        ...non_life_case,
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
          width: "420px",
          height: "701px",
          ...styles.modal,
          padding: "10px",
        }}
      >
        <Column
          justifyContent="stsart"
          alignItems={"center"}
          sx={{ height: "100%" }}
        >
          <Row sx={{ width: "100%", cursor: "pointer" }}>
            <Image
              src="/thin_x.png"
              width={50}
              height={50}
              alt="x"
              onClick={() => deleteModalList(index)}
            />
          </Row>
          <Image
            src="/logo_text.png"
            width={176}
            height={60}
            alt=""
            layout="fixed"
          />
          <Row justifyContent={"end"} sx={{ width: "100%", mr: 6 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "100px", height: "30px", p: 0 }}
              // onClick={handleImprove}
            >
              <Row alignItems={"center"}>
                <Image
                  src="/revise.png"
                  width={15}
                  height={14}
                  alt=""
                  layout="fixed"
                />
                <Typography variant="h6" color="primary.white" ml={0.5}>
                  타겟 수정하기
                </Typography>
              </Row>
            </Button>
          </Row>
          <Row
            alignItems="center"
            justifyContent="start"
            sx={{
              width: "100%",
              borderBottom: "1px solid #0D1D41",
              pb: "9px",
              width: 350,
            }}
          >
            <Typography variant="h5">내 마감 TARGET</Typography>
          </Row>
          <Column sx={{ gap: 1.1, mt: 2.2, width: 298 }}>
            <Column>
              <Typography variant="h6">생명 보험 FP</Typography>
              <UnderLineInput value={life_fp} setValue={setLifeFp} />
            </Column>
            <Column>
              <Typography variant="h6">생명 보험 CASE</Typography>
              <UnderLineInput value={life_case} setValue={setLifeCase} />
            </Column>
            <Column>
              <Typography variant="h6">손해 보험 FP</Typography>
              <UnderLineInput value={non_life_fp} setValue={setNonLifeFp} />
            </Column>
            <Column>
              <Typography variant="h6">손해 보험 CASE</Typography>
              <UnderLineInput value={non_life_case} setValue={seNontLifeCase} />
            </Column>
          </Column>

          <Box
            width={350}
            sx={{ borderBottom: "1px solid black", mt: 1.5, mb: 2.8 }}
          />

          <Row justifyContent={"between"} sx={{ width: 298 }}>
            <Column alignItems={"center"}>
              <Typography variant="h5">TOTAL FP</Typography>
              <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
                1
              </Typography>
            </Column>
            <Column alignItems={"center"}>
              <Typography variant="h5">TOTAL CASE</Typography>
              <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
                1
              </Typography>
            </Column>
          </Row>
          <Row alignItems={"center"} sx={{ gap: 1, mt: 2 }}>
            <Image
              src="/!.png"
              width={24}
              height={22}
              alt="x"
              onClick={() => deleteModalList(index)}
            />
            <Typography variant="h4" color="primary.red">
              제출 완료 시 수정이 불가합니다.
            </Typography>
          </Row>

          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "100%",
              height: "62px",
              p: 0,
              bottom: 0,
              left: 0,
              position: "fixed",
            }}
            onClick={() => {
              window.parent.postMessage(
                {
                  message: "openConfirmModal",
                  value: {},
                },
                "*"
              );
            }}
          >
            <Typography variant="h2" color="primary.white">
              제출
            </Typography>
          </Button>
        </Column>
      </Box>
    </Modal>
  );
}
