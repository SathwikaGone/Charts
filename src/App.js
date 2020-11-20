import "./App.css";
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";
import PieChart from "./Components/PieChart";
import Doughnut from "./Components/DoughnutChart";
function App() {
  return (
    <div className="App">
      <h2>Chart.js in React.js</h2>
      <div className="Appp">
        <BarChart />
        <LineChart />
      </div>
      <div className="Appp">
        <PieChart />
        <Doughnut />
      </div>
    </div>
  );
}

export default App;
