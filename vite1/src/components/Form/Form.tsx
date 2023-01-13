import { ReactElement } from "react";

interface Props {
  children: ReactElement[];
}

const Form: React.FC<Props> = ({ children }) => {
  return <form className="form">{children.map((c) => c)}</form>;
};

export default Form;
