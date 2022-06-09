import {
  Button,
  Box,
  Typography,
  Select,
  Input,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import Column from "./Column";
import Row from "./Row";
import { forwardRef } from "react";

export default function TopLabelContents({
  title,
  placeholder,
  children,
  value,
  setValue,
  sx,
  fs,
  w,
  ...props
}) {
  return (
    <Column
      justifyContent="start"
      alignItems="start"
      sx={{
        width: w || "100%",
        borderBottom: "1px solid #0D1D41",
      }}
    >
      <Typography variant={fs || "h4"}>{title}</Typography>
      <Row wrap="wrap" sx={{ ...sx, mt: 1, pb: 0.5 }}>
        {children}
      </Row>
    </Column>
  );
}
