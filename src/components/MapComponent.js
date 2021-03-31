import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const key = process.env.REACT_APP_MAP_API_KEY;
const libraries = ["places"];

const styles = {
  width: "100%",
  height: "100vh",
};

const Maps = (animal) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
    libraries,
  });

  if (!isLoaded) return <p>Map is being Loaded</p>;
  if (loadError) return <p>Error Loading Map</p>;

  const center = { lat: -1.4145819658056933, lng: 34.90696351982482 };

  return (
    <div>
      <GoogleMap zoom={12} center={center} mapContainerStyle={styles}>
        {animal.animal.map((sighting) => {
          return (
            <Marker
              id={sighting.timeSpotted}
              position={{
                lat: sighting.location["lat"],
                lng: sighting.location["lng"],
              }}
            >
              {console.log(sighting.location)}
            </Marker>
          );
        })}
      </GoogleMap>
    </div>
  );
};

export default Maps;
