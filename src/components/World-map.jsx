import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { fetchUserTime } from "../store/world-clock/worldClock.thunk";

const WorldMap = () => {
  const [geoUrl, setgeoUrl] = useState(null);
  const [markers, setMarkers] = useState([]);
  const locationMarkers = useSelector(
    (state) => state.worldClock.locationMarkers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (locationMarkers.length) {
      setMarkers(
        locationMarkers.map((location) => {
          return {
            markerOffset: -30,
            name: location.name,
            coordinates: [location.longitude, location.latitude],
          };
        })
      );
    }
  }, [locationMarkers]);

  useEffect(() => {
    const geoUrlJSON =
      "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
    setgeoUrl(geoUrlJSON);
  }, []);

  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#FF5533"
              stroke=""
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#F53" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default WorldMap;
