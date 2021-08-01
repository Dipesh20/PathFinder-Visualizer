import "./App.css";
import PathfinderVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
function App() {
  const [algoId,setAlgoId] = useState(0)
  return (
    <div className="App">
      <div style={{ marginTop: "20px", border: "3px solid black" }}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={()=>}>Dijkstra's Algorithm</Dropdown.Item>
            <Dropdown.Item>Depth First Search</Dropdown.Item>
            <Dropdown.Item>Breadth First Search</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <PathfinderVisualizer algoId={algoId}></PathfinderVisualizer>
    </div>
  );
}

export default App;
