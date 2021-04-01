import "./App.css";
import Maps from "./components/MapComponent";
import AddSighting from "./components/SightingComponent";
import { animalSelector } from "./components/AnimalSightingSlice";
import { useSelector } from "react-redux";

function App() {
  const animalsSighted = useSelector(animalSelector);

  const handleAdd = (e) => {
    document.querySelector(".add-button").classList.toggle("open");
    document.querySelector(".container").classList.toggle("slide-open");
    document
      .querySelector(".spotted-animal")
      .classList.toggle("spotted-animal-open");
  };

  return (
    <div className="App">
      <div className="add-button" onClick={handleAdd}>
        <img
          src={window.location.origin + "/assets/images/Add-Button.png"}
          alt="add-button"
        />
      </div>
      <div className="map">{/* <Maps animal={animalsSighted} /> */}</div>
      <AddSighting />
    </div>
  );
}

export default App;
