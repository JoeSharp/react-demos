import React from "react";
import MonsterCardProperty from "./MonsterCardProperty";
import { Monster } from "./types";
import { MonsterApi } from "./useMonsters";

interface Props {
  monster: Monster;
  onDeleteMonster: React.MouseEventHandler;
}

const MonsterCard: React.FC<Props> = ({
  monster: { id, name, points },
  onDeleteMonster,
}) => (
  <div className="card" style={{ width: "18rem" }}>
    <div className="card-body">
      <MonsterCardProperty label="Name" value={name} />
      <MonsterCardProperty label="Points" value={points.toString()} />
      <button
        className="btn btn-danger"
        data-monsterid={id}
        onClick={onDeleteMonster}
      >
        Delete
      </button>
    </div>
  </div>
);
export default MonsterCard;
