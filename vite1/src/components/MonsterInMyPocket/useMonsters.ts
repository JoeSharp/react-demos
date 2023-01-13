import React from "react";
import { v4 as uuid } from "uuid";

import { Monster } from "./types";

export interface MonsterApi {
  monsters: Monster[];
  unsavedChanges: boolean;
  saveMonsters: () => void;
  addMonster: (name: string, points: number) => void;
  deleteMonster: (id: string) => void;
}

const LOCAL_STORAGE_KEY = "monster-in-my-pocket";

const useMonsters = (): MonsterApi => {
  const [unsavedChanges, setUnsavedChanges] = React.useState<boolean>(false);
  const [monsters, setMonsters] = React.useState<Monster[]>([]);

  // Load any existing monsters from local storage on mount
  React.useEffect(() => {
    const existing = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (existing !== null) {
      setMonsters(JSON.parse(existing));
    }
  }, []);

  // Function to update the local storage
  const saveMonsters = React.useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(monsters));
    setUnsavedChanges(false);
  }, [monsters]);

  const deleteMonster = React.useCallback(
    (id: string) => {
      setMonsters((ms) => ms.filter((m) => m.id !== id));
    },
    [setMonsters]
  );

  // Add a new monster to the collection
  const addMonster = React.useCallback(
    (name: string, points: number) => {
      const newMonster: Monster = {
        id: uuid(),
        name,
        points,
      };
      setMonsters((monsters) => [...monsters, newMonster]);
      setUnsavedChanges(true);
    },
    [setMonsters]
  );

  return { monsters, unsavedChanges, saveMonsters, addMonster, deleteMonster };
};

export default useMonsters;
