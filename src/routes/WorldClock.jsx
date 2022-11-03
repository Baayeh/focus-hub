import WorldMap from "../components/World-map";
import LocationTimestamp from "../components/Location-timestamp";

const WorldClock = () => {
  return (
    <section
      id="world-clock"
      className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-start"
    >
      <section className="world-map-container w-[60%] sm:w-[60%] md:w-[100%] lg:w-[60%] hidden sm:hidden md:block">
        <WorldMap></WorldMap>
      </section>
      <section className="location-time-list w-full sm:w-full md:w-[80%] lg:w-[40%] mx-auto mt-2 sm:mt-2 md:mt-0 lg:mt-5 p-4">
        <LocationTimestamp></LocationTimestamp>
      </section>
    </section>
  );
};

export default WorldClock;
