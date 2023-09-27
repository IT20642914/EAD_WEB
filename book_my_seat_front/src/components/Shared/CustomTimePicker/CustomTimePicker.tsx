import React from 'react'
import { Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StyledTimePickerInput } from '../../../assets/theme/theme';

const CustomTimePicker: React.FC<{
  value: any,
  onChange: any,
  onFocus: any,
  label: string,
  helperText: any,
  required: boolean,
  disabled: boolean,
  readOnly: boolean,
  error: boolean,
  placeholder: string,
}> = ({ value, onChange, onFocus, label, helperText, required, disabled, readOnly, error, placeholder, ...rest }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <StyledTimePickerInput
          label={label}
          value={value}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          slotProps={{
            textField: {
              size: 'small',
              helperText: helperText,
              required: required,
              placeholder: placeholder,
              onFocus: onFocus,
              error: error
            },
          }}
        />
      </Stack>
    </LocalizationProvider>
  )
}

export default CustomTimePicker
