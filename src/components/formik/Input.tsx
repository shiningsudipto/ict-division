import React from "react";
import { ErrorMessage, Field } from "formik";

interface InputProps {
  name: string;
  label: string;
  subLabel?: string;
  type?: string;
  error?: boolean;
  value?: string;
  readOnly?: boolean;
  placeholder?: string;
  prefix?: string;
  inputClassName?: string;
  defaultValue?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  subLabel,
  type = "text",
  error,
  value,
  readOnly,
  placeholder,
  prefix,
  inputClassName,
  defaultValue,
  required,
}) => {
  return (
    <div
      className={`flex flex-col flex-grow font-publicSans ${prefix}--formik-input`}
    >
      <label htmlFor={name} className="font-semibold mb-3">
        {label}
      </label>
      <Field
        defaultValue={defaultValue}
        value={value}
        readOnly={readOnly}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`h-[50px] lg:px-5 px-2 border border-primary-foreground rounded-md focus-visible:outline-primary-foreground w-full ${
          error ? "fieldError" : ""
        } lg:font-normal font-medium input-field-shadow ${
          readOnly ? "bg-background" : ""
        } ${inputClassName ? inputClassName : ""}`}
      />
      {subLabel && (
        <p className="mt-[10px] text-sm font-medium text-secondary">
          {subLabel}
        </p>
      )}
      <ErrorMessage name={name} component="p" className="text-danger" />
    </div>
  );
};

export default Input;
