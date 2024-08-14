import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean
  ) => void;
  name: string;
  label?: string;
  placeholder?: string;
  options: Option[];
  optionsLabel?: string;
  defaultValue?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  setFieldValue,
  name,
  label,
  placeholder,
  options,
  optionsLabel,
  defaultValue,
}) => {
  return (
    <div>
      {label && <p className="font-medium mb-2">{label}</p>}
      <Select
        onValueChange={(value) => {
          setFieldValue(name, value);
        }}
        defaultValue={defaultValue}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {optionsLabel && <SelectLabel>{optionsLabel}</SelectLabel>}
            {options?.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Dropdown;
