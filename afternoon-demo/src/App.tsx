import React from "react";
import Counter from "./Counter";
import NewThingForm from "./NewThingForm";

function App() {
  // State of the application contains

  // List of things on which counters are based
  const [listOfItems, setListOfItems] = React.useState<string[]>([
    "sheep",
    "bitcoin",
  ]);

  const name = "Joe Sharp";

  const onAddNewThing = React.useCallback(
    (newThing: string) => {
      setListOfItems((items) => [...items, newThing]); // using reducer style state update
    },
    [setListOfItems]
  );

  return (
    <div className="container">
      <h1>Hello CACI</h1>
      <p>The name is: {name}</p>

      <NewThingForm onAddNewThing={onAddNewThing} />

      {listOfItems.map((thing, i) => (
        <Counter key={i} thingIAmCounting={thing} />
      ))}
    </div>
  );
}

export default App;
