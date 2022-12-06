import React, { useState, useEffect, useRef } from "react";
import WorldMap from "../components/World-map";
import LocationTimestamp from "../components/Location-timestamp";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { TbPlus } from "react-icons/tb";
import { BsCheckAll } from "react-icons/bs";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useSelector, useDispatch } from "react-redux";
import { OverlayPanel } from "primereact/overlaypanel";
import { fromEvent, debounceTime, distinctUntilChanged } from "rxjs";
import {
  searchLocation,
  fetchUserTime,
} from "../store/world-clock/worldClock.thunk";
import {
  clearSearchResults,
  updateLocationMarker,
} from "../store/world-clock/worldClock.slice";

const WorldClock = () => {
  const worldTimeStore = useSelector((state) => state.worldClock.worldTime);
  const locationSearchResult = useSelector(
    (state) => state.worldClock.locationSearchResult
  );
  const searching = useSelector((state) => state.worldClock.locationSearching);

  const [displayAddLocation, setdisplayAddLocation] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [worldTime, setWorldTime] = useState([]);
  const [location, setLocation] = useState("");
  const [locationDetails, setLocationDetails] = useState(null);

  const op = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setWorldTime(worldTimeStore);
  }, [worldTimeStore]);

  useEffect(() => {
    if (displayAddLocation) {
      const inputIdTimeout = setTimeout(() => {
        const userInputEvent$ = fromEvent(
          document.getElementById("search-location-field"),
          "keyup"
        )
          .pipe(debounceTime(800), distinctUntilChanged())
          .subscribe((event) => {
            searchLocationFromUserInput(event);
          });

        return () => userInputEvent$.unsubscribe();
      }, 1000);

      return () => {
        clearTimeout(inputIdTimeout);
      };
    }
  }, [displayAddLocation]);

  const searchLocationFromUserInput = (event) => {
    if (event) {
      dispatch(searchLocation(event.target.value));
      op.current.show(event);
    }
  };

  const updateEditedLocations = () => {
    setEditMode(false);
  };

  const closeSearchLocationDialog = () => {
    setdisplayAddLocation(false);
    dispatch(clearSearchResults());
  };

  const searchTimeForLocation = () => {
    dispatch(fetchUserTime(location))
      .unwrap()
      .then((response) => {
        dispatch(
          updateLocationMarker({
            latitude: locationDetails.latitude,
            longitude: locationDetails.longitude,
            name: locationDetails.name,
            country: locationDetails.country,
          })
        );
      });
    setdisplayAddLocation(false);
    setLocation("");
  };

  const setSelectedLocation = (event, result) => {
    setLocation(result.name);
    setLocationDetails(result);
    op.current.hide(event);
    dispatch(clearSearchResults());
  };

  const renderFooter = () => {
    return (
      <div className="flex items-center space-x-4 pt-3">
        <button
          onClick={() => closeSearchLocationDialog()}
          type="button"
          className="w-[100%] py-3 bg-gray-200 hover:bg-gray-300 text-secondaryColor rounded-md shadow-md flex items-center justify-center"
        >
          <FaTimes className="mr-2"></FaTimes>
          Cancel
        </button>
        <button
          type="button"
          className="w-[100%] py-3 bg-primaryColor hover:bg-primaryDarkColor text-white rounded-md shadow-md flex items-center justify-center"
          onClick={() => searchTimeForLocation()}
        >
          <TbPlus className="mr-2"></TbPlus>
          Add
        </button>
      </div>
    );
  };

  return (
    <section
      id="world-clock"
      className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-start relative"
    >
      <section className="world-map-container w-[60%] sm:w-[60%] md:w-[100%] lg:w-[60%] hidden sm:hidden md:block">
        <WorldMap></WorldMap>
      </section>
      <section className="location-time-list w-full sm:w-full md:w-[80%] lg:w-[40%] mx-auto mt-2 sm:mt-2 md:mt-0 lg:mt-5 p-4">
        {worldTime.map((locationTime, index) => {
          return (
            <React.Fragment key={index}>
              <LocationTimestamp
                editMode={editMode}
                locationTime={locationTime}
              ></LocationTimestamp>
            </React.Fragment>
          );
        })}
      </section>

      <div className="action-btn-container fixed bottom-[100px] right-[20px] sm:bottom-[100px] md:bottom-[30px] py-3 px-4 bg-white shadow-lg rounded-lg">
        <button
          type="button"
          className="px-3 py-1"
          onClick={() =>
            editMode ? updateEditedLocations() : setEditMode(true)
          }
        >
          {editMode ? <BsCheckAll /> : <AiOutlineEdit />}
        </button>
        <button
          type="button"
          className="px-3 py-1"
          onClick={() => setdisplayAddLocation(true)}
        >
          <AiOutlinePlus></AiOutlinePlus>
        </button>
      </div>

      <Dialog
        header="Add New Location"
        closable={false}
        visible={displayAddLocation}
        footer={renderFooter}
        onHide={() => setdisplayAddLocation(false)}
        className="add-location-dialog"
      >
        <div className="dialog-container pt-3">
          <span className="p-input-icon-right">
            {searching ? (
              <i className="pi pi-spin pi-spinner" />
            ) : (
              <i className="pi pi-search" />
            )}

            <InputText
              placeholder="Enter a location"
              id="search-location-field"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </span>
        </div>

        <OverlayPanel
          ref={op}
          showCloseIcon
          id="overlay_panel"
          style={{ width: "400px" }}
          className="overlaypanel-demo"
        >
          <ul className="list-group">
            {locationSearchResult.length ? (
              locationSearchResult.map((result, index) => {
                return (
                  <li
                    className="list-group-item cursor-pointer hover:bg-gray-200 p-3 text-sm hover:font-bold"
                    key={index}
                    onClick={(e) => setSelectedLocation(e, result)}
                  >
                    {result.name}, {result.country}
                  </li>
                );
              })
            ) : (
              <li className="list-group-item cursor-pointer hover:bg-gray-200 p-3 text-sm hover:font-bold">
                Unavailable. Try a larger city nearby!
              </li>
            )}
          </ul>
        </OverlayPanel>
      </Dialog>
    </section>
  );
};

export default WorldClock;
