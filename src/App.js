import React, { useState } from "react";
import "./App.css";
import BarChart from "./Components/Charts/BarChart";
import LineChart from "./Components/Charts/LineChart";
import PieChart from "./Components/Charts/PieChart";
import Doughnut from "./Components/Charts/DoughnutChart";
import BasicTable from "./Components/Table/BasicTable";
import SortngTable from "./Components/Table/SortingTable";
import FilterTable from "./Components/Table/FilterTable";
import Practice from "./Components/Table/Practice";
import PaginationTable from "./Components/Table/PaginationTable";
import RowSelection from "./Components/Table/RowSelection";
import ColumnOrder from "./Components/Table/ColumnOrder";
import ColumnHiding from "./Components/Table/ColumnHiding";
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
          <ColumnHiding />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
