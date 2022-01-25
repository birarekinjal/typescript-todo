import React from 'react';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
// import { CustomInputProps } from '../../interfaces/types';


export type CustomInputProps = {
  label?: string;
  placeholder?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  autoFocus?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  defaultValue?: any;
  disabled?: boolean;
  type?: string;
  value?: any;
  variant?: 'filled' | 'outlined' | 'standard';
  name?: string;
  required?: boolean;
  inputProps?: object;
  isControlled?: boolean;
  accept?: any;
  registeredEvents?: any;
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  id,
  onChange,
  autoComplete,
  autoFocus,
  color,
  defaultValue,
  disabled,
  type,
  value,
  variant,
  name,
  required,
  inputProps,
  isControlled,
  accept,
  registeredEvents,
}) => {
  return (
    <FormControl variant="standard">
      {
        isControlled ? (
          <TextField
            id={id}
            label={label}
            placeholder={placeholder}
            onChange={onChange}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            disabled={disabled}
            color={color}
            type={type}
            value={value}
            variant={variant}
            name={name}
            required={required}
            InputProps={inputProps}
          />
        ) : (
          <TextField
            {...(registeredEvents || {})}
            placeholder={placeholder}
            disabled={disabled}
            type={accept}
            autoFocus={autoFocus}
            id={id}
            // onClick={onChange}
            onChange={onChange}
          />
        )
      }
    </FormControl>
  );
};

export default CustomInput;