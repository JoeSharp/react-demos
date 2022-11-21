import { ReactElement } from "react";

export interface Props {
  label: string;
  children: ReactElement;
}

const FormControl: React.FC<Props> = ({ label, children }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      {children}
    </div>
  );
};

export default FormControl;
