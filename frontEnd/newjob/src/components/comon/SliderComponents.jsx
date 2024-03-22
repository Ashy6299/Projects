import React from "react";
import { Slider, Stack, Typography } from "@mui/material";

const SliderComponents = ({
  defaultValue,
  max,
  min,
  step,
  onchange,
  value,
  label,
  unit,
  amount,
}) => {
  return (
    <Stack my={2}>
      <Stack gap={1}>
        <Typography variant='subtitle2'>{label}</Typography>
        <Typography variant='h5'>
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label='Default'
        valueLabelDisplay='auto'
        marks
        step={step}
        onChange={onchange}
        value={value}
        label={label}
        unit={unit}
        amount={amount}
      />
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='caption' color='text.secondary'>
          {unit} {min}
        </Typography>
        <Typography variant='caption' color='text.secondary'>
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponents;
