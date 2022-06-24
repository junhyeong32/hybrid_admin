import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  CircularProgress,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import getDepthOfTeam from "../../../hooks/share/getDepthOfTeam";
import getLastTeam from "../../../hooks/share/getLastTeam";
import { tradeHedaerList } from "./tradeHeaderList";
import Row from "../../Box/Row";

export default function TradeTable({
  data,
  row_check,
  setRowCheck,
  row_user_info,
  setRowUserInfo,
}) {
  const [all_checked, setAllChecked] = useState(false);
  const [checked, setChecked] = useState([]);
  const Root = styled("div")`
    table {
      box-shadow: none;
      width: 100%;
      height: 100%;
    }

    th {
      color: #171d23;
      height: 37px;
      border-bottom: 1px solid #e9ebee;
      text-align: center;
      box-shadow: none;
      font-weight: bold;
      font-size: 12px;
      padding: 0;
    }
    td {
      padding: 8px;
      font-size: 12px;
    }
  `;

  return (
    <Root sx={{ width: "100%" }}>
      <TableContainer>
        <Table
          sx={{
            width: "100%",
          }}
        >
          <TableHead>
            <TableRow key="head">
              {tradeHedaerList?.map((data, key) => (
                <TableCell key={key} align="center">
                  {data}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </Root>
  );
}
