import { useCallback } from "react";

interface Props {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}

const NumericalInput: React.FC<Props> = ({ value, onChange, min, max }) => {
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      ({ target: { value } }) => onChange(parseInt(value, 10)),
      [onChange]
    );

  return (
    <input
      className="form-control"
      type="number"
      value={value}
      onChange={onChangeHandler}
      min={min}
      max={max}
    />
  );
};

NumericalInput.defaultProps = {
  min: 0,
  max: 100,
};

export default NumericalInput;
