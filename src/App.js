import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AdvancedShoppingList from "./Components/AdvancedShoppingList";

function App() {
  return (
    <div className="App">
      <AdvancedShoppingList list={[]} owner="anil"></AdvancedShoppingList>
    </div>
  );
}

export default App;
