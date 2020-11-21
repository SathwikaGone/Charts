import React, { useState } from "react";
import "./App.css";
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";
import PieChart from "./Components/PieChart";
import Doughnut from "./Components/DoughnutChart";
import BasicTable from "./Components/BasicTable";
function App() {
  const [Item, setItem] = useState(true);

  const handleClick = () => {
    setItem(!Item);
  };

  return (
    <div className="App">
      <h2>{Item ? "Chart.Js" : "React-Table"} in React.js</h2>
      <button onClick={handleClick}>{Item ? "React-Table" : "Chart.Js"}</button>
      {Item ? (
        <React.Fragment>
          <div className="Appp">
            <BarChart />
            <LineChart />
          </div>
          <div className="Appp">
            <PieChart />
            <Doughnut />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <BasicTable />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
