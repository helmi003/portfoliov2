import { TextField } from "@mui/material";

const TextFieldCompnent = ({
  type,
  onlyDigits,
  label,
  change,
  value,
  name,
  blur,
  touched,
  error,
  colum,
  ...otherProps
}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      type={type}
      label={label}
      onBlur={blur}
      onChange={change}
      value={value}
      name={name}
      error={!!touched && !!error}
      helperText={touched && error}
      {...otherProps}
    />
  );
};

export default TextFieldCompnent;
