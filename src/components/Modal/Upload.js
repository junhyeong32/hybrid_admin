import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  useContext,
  useEffect,
  useRef,
  useState,
  forwardRef,
  createRef,
} from "react";
import { Modal, Box, Typography, Grid, Divider, Button } from "@mui/material";
import Column from "../Box/Column";
import RowLabel from "../Box/RowLabel";
import { useCookies } from "react-cookie";
import { useSnackbar } from "notistack";
import TopLabelContents from "../Box/TopLableContents";
import Row from "../Box/Row";
import { ModalContext } from "../../contexts/ModalContext";
import { styled } from "@mui/material/styles";
import Axios from "../../utility/api";

const style = {
  width: 543,
  height: 283,
  overflowX: "hidden",
  background: "#FFFFFF",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  padding: "32px 60px 32px 60px",
  gap: 1.3,
};

const Input = styled("input")({
  display: "none",
});

export default function Upload({ index, modal_props, deleteModalList }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const { enqueueSnackbar } = useSnackbar();
  const [file, setFile] = useState("");

  console.log("file", file);

  return (
    <Modal
      open={modal_props.is_open}
      onClose={() => {
        deleteModalList(index);
        !modal_props && false;
      }}
    >
      <Box>
        <Column alignItems={"start"} justifyContent={"center"} sx={style}>
          <Typography variant="h1">엑셀 업로드</Typography>
          <Row
            alignItems={"center"}
            w={430}
            sx={{
              width: "100%",
              pl: 3,
              position: "relative",
              borderTop: "2px solid black",
              borderBottom: "2px solid black",
              height: 58,
              mb: "-12px",
            }}
          >
            <Typography
              variant="h4"
              align="left"
              sx={{ minWidth: "45px", mr: 5.2 }}
            >
              Sample
            </Typography>
            <Divider
              vertical
              sx={{
                height: "100%",
                mr: 2.8,
                border: "1px solid black",
              }}
            />
            <a href="/file/관리자_엑셀 업로드_양식.xlsx">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: 60,
                  height: 20,
                  fontSize: 12,
                  p: 0,
                  fontWeight: "bold",
                }}
              >
                다운로드
              </Button>
            </a>
          </Row>
          <Row
            alignItems={"center"}
            sx={{
              pl: 3,
              borderBottom: "2px solid black",
              width: "100%",
              height: 70,
            }}
          >
            <Typography
              variant="h4"
              sx={{ mr: "41.92px", whiteSpace: "nowrap" }}
            >
              DB 파일
            </Typography>
            <Divider
              vertical
              sx={{
                height: "100%",
                mr: 2.8,
                border: "1px solid black",
              }}
            />

            <Row
              alignItems={"center"}
              sx={{
                width: " 219px",
                height: " 36px",
                background: "#E6E6E6",
                borderRadius: " 5px",
                p: 1,
                mr: 3,
              }}
            >
              <Typography variant="small">
                {file ? file.name : "엑셀(.xlsx, .xls) 파일만 등록가능"}
              </Typography>
            </Row>
            <label htmlFor="contained-button-file">
              <Input
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                id="contained-button-file"
                // multiple
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <Button
                variant="contained"
                component="span"
                sx={{
                  width: 60,
                  height: 20,
                  fontSize: 12,
                  p: 0,
                  fontWeight: "bold",
                }}
              >
                파일선택
              </Button>
            </label>
          </Row>
          <Row
            justifyContent={"center"}
            sx={{ width: "100%", mt: 2.7, gap: 5 }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ width: 166, height: 30 }}
              onClick={async () => {
                if (!file)
                  return enqueueSnackbar("파일을 업로드 해주세요.", {
                    variant: "error",
                    autoHideDuration: 2000,
                  });
                const formData = new FormData();

                formData.append("platform", "web");
                formData.append("token", cookies.access_token);
                formData.append("file", file);
                const config = {
                  headers: {
                    "content-type": "multipart/form-data",
                  },
                };

                const upload = (
                  await Axios.Post(`document/upload-excel`, formData, config)
                )?.code;
                if (upload === 200)
                  enqueueSnackbar("파일이 업로드 되었습니다.", {
                    variant: "success",
                    autoHideDuration: 2000,
                  });
                deleteModalList(index);
              }}
            >
              <Typography variant="h4">등록</Typography>
            </Button>
            <Button
              variant="contained"
              color="dark_gray"
              sx={{ width: 166, height: 30 }}
              onClick={() => deleteModalList(index)}
            >
              <Typography variant="h4" color="primary.white">
                취소
              </Typography>
            </Button>
          </Row>
        </Column>
      </Box>
    </Modal>
  );
}
