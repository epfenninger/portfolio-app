import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Tiles from "./components/TileGrid.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Tiles />
    </div>
  );
}

export default App;
