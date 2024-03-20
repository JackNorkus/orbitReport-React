import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from "./components/satData";


function App() {
  const [sat, setSat] = useState(satData); //sat will be used to compare changes in state. setSat is a function that will be used to update the state.
  const displaySats = [...new Set(satData.map((data) => data.orbitType))]; //The Set object lets you store UNIQUE values of any type.
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => { //A callback function, like newSatDisplay, is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };
  return (
    <div>
      <Banner />
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;