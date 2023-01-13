import React, { ReactElement } from "react";

export interface Option<T> {
  value: T;
  displayString: string;
}

interface Props<T> {
  options: Option<T>[];
  value: string;
  onChange: (value: T) => void;
}

const SelectBox = <T,>({
  options,
  value,
  onChange,
}: Props<T>): ReactElement => {
  const onChangeEvent: React.ChangeEventHandler<HTMLSelectElement> =
    React.useCallback(
      ({ target: { value } }) => {
        options
          .filter(({ displayString }) => displayString === value)
          .forEach(({ value }) => onChange(value));
      },
      [onChange]
    );

  return (
    <select className="form-select" onChange={onChangeEvent} value={value}>
      {options.map(({ displayString }) => (
        <option value={displayString}>{displayString}</option>
      ))}
    </select>
  );
};

export default SelectBox;
