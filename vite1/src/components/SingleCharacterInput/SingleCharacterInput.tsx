import React, { ChangeEventHandler } from "react";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const ALL_THE_LETTERS: string[] = Array(26)
  .fill(null)
  .map((_, i) => String.fromCharCode("A".charCodeAt(0) + i));

const SingleCharacterInput: React.FC<Props> = ({ value, onChange }) => {
  const onInputChange: ChangeEventHandler<HTMLSelectElement> =
    React.useCallback(({ target: { value } }) => onChange(value), [onChange]);

  return (
    <select className="form-select" value={value} onChange={onInputChange}>
      {ALL_THE_LETTERS.map((letter) => (
        <option key={letter} value={letter}>
          {letter}
        </option>
      ))}
    </select>
  );
};
export default SingleCharacterInput;
