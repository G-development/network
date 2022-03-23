import React from "react";
import Network from "./Network";
import data from "./data";
// import * as d3 from "d3";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Network data={data} />
      </header>
    </div>
  );
}

export default App;
