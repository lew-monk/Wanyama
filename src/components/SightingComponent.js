import { useState } from "react";
import { useDispatch } from "react-redux";
import { animals } from "../helpers/animals";
import { add } from "./AnimalSightingSlice";

const AddSighting = () => {
  const [animal, setAnimal] = useState(null);
  const [location, setLocation] = useState(null);
  const [marker, setMarker] = useState();
  const dispatch = useDispatch();
  const date = new Date();
  date.setHours(date.getHours());

  const handleSightingSubmission = () => {
    document.querySelector(".container").classList.remove("slide-open");
    document.querySelector(".add-button").classList.remove("open");
    const animalSighting = {
      animal,
      location,
      marker,
      date,
    };
    dispatch(add(animalSighting));
  };

  return (
    <div className="container">
      <div className="spotted-animal">
        {animals.map((animal, index) => {
          return (
            <div
              key={index}
              className="animal-image"
              onClick={() => {
                setAnimal(animal.name);
                setMarker(animal.marker);
                if (navigator.geolocation) {
                  console.log(
                    navigator.geolocation.getCurrentPosition((position) =>
                      setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                      })
                    )
                  );
                } else {
                  console.log("Not Available");
                }
              }}
            >
              <img src={animal.image} alt="animal" />
            </div>
          );
        })}
      </div>
      <div className="add-sighting">
        <button type="submit" onClick={handleSightingSubmission}>
          Add {animal} to sighting map?
        </button>
      </div>
    </div>
  );
};

export default AddSighting;
