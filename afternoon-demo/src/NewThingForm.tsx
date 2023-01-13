import React, { ChangeEventHandler, FormEventHandler } from "react";

interface Props {
  onAddNewThing: (newThing: string) => void;
}

const NewThingForm: React.FC<Props> = ({ onAddNewThing }) => {
  // Current 'new thing' being formulated by the user
  const [newThing, setNewThing] = React.useState<string>("");

  // Callback for the form input changing
  const onNewThingInputChanged: ChangeEventHandler<HTMLInputElement> =
    React.useCallback(
      ({ target: { value } }) => {
        setNewThing(value);
      },
      [setNewThing]
    );

  // Callback for the form being submitted
  const onSubmitNewThing: FormEventHandler = React.useCallback(
    (e) => {
      e.preventDefault(); // prevent page refresh
      onAddNewThing(newThing);
    },
    [newThing, onAddNewThing]
  );

  return (
    <form onSubmit={onSubmitNewThing}>
      <label>Name of Thing</label>
      <input type="text" value={newThing} onChange={onNewThingInputChanged} />

      <button>Add</button>
    </form>
  );
};

export default NewThingForm;
