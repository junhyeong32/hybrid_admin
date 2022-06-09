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

export default function UnderLineSelectInput({
  title,
  placeholder,
  value,
  setValue,
  menuItems,
  w,
  ...props
}) {
  return (
    <Column
      justifyContent="start"
      alignItems="start"
      sx={{
        width: w,
        borderBottom: "1px solid #0D1D41",
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Select
        variant="standard"
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        sx={{ pl: "12px" }}
      >
        {Object.entries(menuItems).map(([value, data], key) => (
          <MenuItem value={value} key={key}>
            {data}
          </MenuItem>
        ))}
      </Select>
    </Column>
  );
}

export function OutLineSelectInput({
  title,
  placeholder,
  value,
  setValue,
  menuItems,
  w,
  ...props
}) {
  return (
    <Box sx={{ width: w }}>
      <Select
        variant="outlined"
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        sx={{ pl: "12px", height: "28px" }}
      >
        {Object.entries(menuItems).map(([value, data], key) => (
          <MenuItem value={value} key={key}>
            {data}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}

export function LabelOutLineSelectInput({
  alignItems,
  title,
  placeholder,
  value,
  setValue,
  menuItems,
  w,
  sx,
  ...props
}) {
  return (
    <Column
      justifyContent="start"
      alignItems={alignItems || "center"}
      sx={{
        width: w,
        gap: 1,
        ...sx,
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Select
        variant="outlined"
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        sx={{ pl: "12px", height: "28px" }}
      >
        {Object.entries(menuItems).map(([value, data], key) => (
          <MenuItem value={value} key={key}>
            {data}
          </MenuItem>
        ))}
      </Select>
    </Column>
  );
}
