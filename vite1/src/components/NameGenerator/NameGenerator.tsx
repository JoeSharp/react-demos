import React from "react";
import Form from "../Form";
import FormControl from "../FormControl";
import NumericalInput from "../NumericalInput";
import SingleCharacterInput from "../SingleCharacterInput";

interface Props {
  nameType: string;
}

const NameGenerator: React.FC<Props> = ({ nameType }) => {
  const [monthOfBirth, setMonthOfBirth] = React.useState<number>(1);
  const [dayOfBirth, setDayOfBirth] = React.useState<number>(1);
  const [surnameFirstChar, setSurnameFirstChar] = React.useState<string>("J");

  return (
    <div className="container">
      <h1>Generate your {nameType} name</h1>

      <Form>
        <FormControl label="Month of Birth">
          <NumericalInput
            value={monthOfBirth}
            onChange={setMonthOfBirth}
            min={1}
            max={12}
          />
        </FormControl>
        <FormControl label="Day of Birth">
          <NumericalInput
            value={dayOfBirth}
            onChange={setDayOfBirth}
            min={1}
            max={31}
          />
        </FormControl>
        <FormControl label="First Letter of Surname">
          <SingleCharacterInput
            value={surnameFirstChar}
            onChange={setSurnameFirstChar}
          />
        </FormControl>
      </Form>
    </div>
  );
};

export default NameGenerator;
