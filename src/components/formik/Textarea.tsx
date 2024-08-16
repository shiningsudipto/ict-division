import React from "react";
import { ErrorMessage, Field } from "formik";

interface TextareaProps {
  name: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
  error?: string;
  subLabel?: string;
  placeholder?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  defaultValue,
  required,
  error,
  subLabel,
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-semibold mb-3">
        {label}
      </label>
      <Field
        defaultValue={defaultValue}
        as="textarea"
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        className={`h-[190px] py-[18px] px-5 border border-primary-foreground rounded-md focus-visible:outline-primary-foreground 
          ${
            error ? "fieldError" : ""
          } lg:font-normal font-medium input-field-shadow`}
      />
      {error ? (
        <p className="mt-[10px] text-sm font-medium text-danger">{error}</p>
      ) : (
        subLabel && (
          <p className="mt-[10px] text-sm font-medium text-secondary">
            {subLabel}
          </p>
        )
      )}
      <ErrorMessage name={name} component="p" className="text-danger" />
    </div>
  );
};

export default Textarea;
