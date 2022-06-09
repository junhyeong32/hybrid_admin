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

export function DateInput({ title, placeholder, value, setValue, ...props }) {
  return (
    <Column
      justifyContent="start"
      alignItems="start"
      sx={{
        width: "25%",
        ".css-17vdz66": {
          width: "100% !important",
        },
        // borderBottom: "1px solid #0D1D41",
      }}
    >
      <Typography variant="h6">{title}</Typography>
      {/* <LocalizationProvider className="date" dateAdapter={AdapterDateFns}>
        <DateRangePicker
          calendars={2}
          value={value}
          className="date"
          endText={<Image src="/logo.png" width={15} height={15} alt="" />}
          mask=""
          sx={{
            width: "100%",
            ".css-17vdz66": {
              width: "100% !important",
            },
          }}
          inputFormat="yyyy-MM-dd"
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <RenderInput
                endText={
                  <Image src="/logo.png" width={15} height={15} alt="" />
                }
                variant="standard"
                {...startProps}
              />
              <RenderInput variant="standard" {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider> */}

      {/* <DatePicker onChange={(e) => setValue(e)} value={value} /> */}
    </Column>
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
