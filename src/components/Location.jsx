import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const Location = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC47oDK7fMdFE4x84tQ5js_q9rdsHxoeYk",
  });
  const center = useMemo(() => ({ lat: 51.50093, lng: -0.3828 }), []);

  return (
    <div className="px-4">
      <h1 className="font-bold  py-4">
        Royal Sweets <br /> 14A, King Street,UB24DA
      </h1>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerStyle={{ height: "60vh", width: "40vh" }}
          center={center}
          zoom={10}
        >
          <MarkerF position={center} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Location;
