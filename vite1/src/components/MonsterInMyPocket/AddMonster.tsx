import React from "react";
import { MonsterApi } from "./useMonsters";

interface Props {
  addMonster: MonsterApi["addMonster"];
}

const AddMonster: React.FC<Props> = ({ addMonster }) => {
  const [name, setName] = React.useState<string>("Werewolf");
  const [points, setPoints] = React.useState<number>(10);

  const onAddClick: React.MouseEventHandler = React.useCallback(
    (e) => {
      e.preventDefault();
      addMonster(name, points);
    },
    [name, points, addMonster]
  );

  const onNameChange: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback(({ target: { value } }) => setName(value), [setName]);

  const onPointsChange: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback(
      ({ target: { value } }) => setPoints(parseInt(value, 10)),
      [setPoints]
    );

  return (
    <form>
      <div className="form-group">
        <label htmlFor="monster-name">Name</label>
        <input
          className="form-control"
          name="monster-name"
          value={name}
          onChange={onNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="monster-points">Points</label>
        <input
          className="form-control"
          name="monster-points"
          value={points}
          type="number"
          min={0}
          max={1000}
          onChange={onPointsChange}
        />
      </div>
      <button className="btn btn-primary" onClick={onAddClick}>
        Add Monster
      </button>
    </form>
  );
};

export default AddMonster;
