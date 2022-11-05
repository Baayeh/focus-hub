import { useState } from "react";
import WorldMap from "../components/World-map";
import LocationTimestamp from "../components/Location-timestamp";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { TbPlus } from "react-icons/tb";
import { BsCheckAll } from "react-icons/bs";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

const WorldClock = () => {
  const [displayAddLocation, setdisplayAddLocation] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const updateEditedLocations = () => {
    setEditMode(false);
    console.log("locations updated");
  };

  const renderFooter = () => {
    return (
      <div className="flex items-center space-x-4 pt-3">
        <button
          onClick={() => setdisplayAddLocation(false)}
          type="button"
          className="w-[100%] py-3 bg-gray-200 hover:bg-gray-300 text-secondaryColor rounded-md shadow-md flex items-center justify-center"
        >
          <FaTimes className="mr-2"></FaTimes>
          Cancel
        </button>
        <button
          type="button"
          className="w-[100%] py-3 bg-primaryColor hover:bg-primaryDarkColor text-white rounded-md shadow-md flex items-center justify-center"
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
        <LocationTimestamp editMode={editMode}></LocationTimestamp>
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
        style={{ width: "50vw" }}
        footer={renderFooter}
        onHide={() => setdisplayAddLocation(false)}
        className="add-location-dialog"
      >
        <div className="dialog-container pt-3">
          <span className="p-input-icon-right">
            <i className="pi pi-search" />
            <InputText placeholder="Enter a location" />
          </span>
        </div>
      </Dialog>
    </section>
  );
};

export default WorldClock;
