import React from "react";

import AddMonster from "./AddMonster";
import MonsterCard from "./MonsterCard";
import useMonsters from "./useMonsters";

const MonsterInMyPocketCollection: React.FC = () => {
  const { monsters, unsavedChanges, addMonster, saveMonsters, deleteMonster } =
    useMonsters();

  const onClickSave: React.MouseEventHandler = React.useCallback(
    (e) => {
      saveMonsters();
      e.preventDefault();
    },
    [saveMonsters]
  );

  const onDeleteMonster: React.MouseEventHandler = React.useCallback(
    (e) => {
      const monsterId = e.currentTarget.getAttribute("data-monsterid");
      if (monsterId !== null) {
        deleteMonster(monsterId);
      }
    },
    [deleteMonster]
  );

  return (
    <div className="container">
      <h1>Monster In My Pocket Collection {unsavedChanges && "*"}</h1>
      <p>Keep track of your collection of monsters</p>

      <AddMonster addMonster={addMonster} />
      <button className="btn btn-primary" onClick={onClickSave}>
        Save Changes
      </button>

      <div className="row">
        {monsters.map((monster) => (
          <MonsterCard
            key={monster.id}
            monster={monster}
            onDeleteMonster={onDeleteMonster}
          />
        ))}
      </div>
    </div>
  );
};

export default MonsterInMyPocketCollection;
