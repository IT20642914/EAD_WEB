import React from "react";
import styles from "./CustomDatePicker.module.scss";

import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/red.css";
// import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import "react-multi-date-picker/styles/colors/analog_time_picker_red.css";
import { StyledTextField } from '../../../assets/theme/theme';
import DatePicker from "react-multi-date-picker";
const CustomDatePicker: React.FC<{
  value: any;
  onChange: any;
  onFocus: any;
  label: string;
  helperText: any;
  required: boolean;
  disabled: boolean;
  readOnly: boolean;
  error: boolean;
  multiple?: boolean;
  placeholder: string;
  minDate?: any;
  maxDate?: any;
  range?:boolean;
}> = ({
  value,
  onChange,
  onFocus,
  label,
  helperText,
  required,
  disabled,
  readOnly,
  error,
  multiple,
  placeholder,
  minDate,
  maxDate,
  range,
  ...rest
}) => {
  return (
    <div>
      <DatePicker
        {...rest}
        sort
        multiple={multiple}
        range={range}
        format="YYYY/MM/DD"
        numberOfMonths={2}
        readOnly={readOnly}
        onChange={onChange}
        value={value}
        minDate={minDate}
        maxDate={maxDate}
        className="bg-dark red"
        inputClass={
          error ? "custom-datepicker-input error" : "custom-datepicker-input"
        }
        containerClassName={styles.customContainer}
        style={{
          width: "100%",
        }}
        render={
          <StyledTextField
            fullWidth
            size='small'
            error={error}
            placeholder={placeholder}
            label={label}
            helperText={helperText}
            onFocus={onFocus}
            required={required}
            disabled={disabled}
          />}

      />
    </div>
  );
};

export default CustomDatePicker;
