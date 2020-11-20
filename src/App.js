import "./App.css";
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";
import PieChart from "./Components/PieChart";
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
        <LineChart />
      </div>
    </div>
  );
}

export default App;
