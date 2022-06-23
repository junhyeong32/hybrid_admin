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
import Column from "../Box/Column";

export default function UnderLineInput({
  title,
  placeholder,
  value,
  setValue,
  w,
  xs_w,
  ...props
}) {
  return (
    <Box
      sx={{
        width: w,
        borderBottom: "1px solid #0D1D41",
      }}
    >
      <Input
        sx={{
          "& input::placeholder": {
            fontSize: "10px",
            color: "#909090 !important",
            fontWeight: "bold",
          },
          pl: "12px",
        }}
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          e.preventDefault();
        }}
        props="true"
      />
    </Box>
  );
}

export function OutLineInput({
  title,
  placeholder,
  value,
  setValue,
  sx,
  w,
  h,
}) {
  return (
    <Box sx={{ ...sx, width: w }}>
      <TextField
        sx={{
          "& input::placeholder": {
            fontSize: "10px",
            color: "#909090 !important",
            fontWeight: "bold",
            paddingLeft: 0,
          },
        }}
        InputProps={{
          style: {
            height: h || 30,
            borderRadius: 5,
            paddingLeft: 0,
          },
        }}
        variant="outlined"
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          e.preventDefault();
        }}
        props="true"
      />
    </Box>
  );
}

export function BackgroundInput({
  title,
  placeholder,
  value,
  setValue,
  sx,
  w,
  h,
  type,
  background,
}) {
  return (
    <TextField
      sx={{
        "& input::placeholder": {
          fontSize: "16px",
          color: "#909090 !important",
          fontWeight: "bold",
          paddingLeft: 0,
          pl: "16px",
        },
      }}
      disableunderline="true"
      InputProps={{
        // disableUnderLine: true,
        disableunderline: "true",
        pl: "16px",
        style: {
          height: h || 30,
          borderRadius: 5,
          paddingLeft: 0,
          background: background,
          border: "none",
          pl: "16px",
        },
      }}
      variant="standard"
      type={type}
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        e.preventDefault();
      }}
      props="true"
    />
  );
}

export function LabelUnderLineInput({
  title,
  placeholder,
  value,
  setValue,
  w,
  sx,
  xs_w,
  ...props
}) {
  return (
    <Column
      justifyContent="start"
      alignItems="start"
      sx={{
        width: w,
        borderBottom: "1px solid #0D1D41",
        ...sx,
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Input
        sx={{
          "& input::placeholder": {
            fontSize: "10px",
            color: "#909090 !important",
            fontWeight: "bold",
          },
          pl: "12px",
        }}
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          e.preventDefault();
        }}
        props="true"
      />
    </Column>
  );
}

export function LabelOutLineInput({
  title,
  placeholder,
  value,
  setValue,
  w,
  sx,
  xs_w,
  ...props
}) {
  return (
    <Column
      justifyContent="start"
      alignItems="start"
      sx={{
        width: w,
        borderBottom: "1px solid #0D1D41",
        ...sx,
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <TextField
        sx={{
          "& input::placeholder": {
            fontSize: "10px",
            color: "#909090 !important",
            fontWeight: "bold",
            height: 30,
          },

          pl: "12px",
        }}
        inputProps={{
          style: {
            height: 30,
            paddingLeft: "12px",
          },
        }}
        variant="outlined"
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          e.preventDefault();
        }}
        props="true"
      />

      {/* <Input
        sx={{
          "& input::placeholder": {
            fontSize: "10px",
            color: "#909090 !important",
            fontWeight: "bold",
          },
          pl: "12px",
        }}
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          e.preventDefault();
        }}
        props="true"
      /> */}
    </Column>
  );
}
