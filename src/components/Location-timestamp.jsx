import { BsMoon, BsTrash, BsSun } from "react-icons/bs";
import PropTypes from "prop-types";
import { format } from "date-fns";

const LocationTimestamp = ({ editMode, locationTime }) => {
  const getMeridian = () => {
    return format(new Date(locationTime.datetime), "aa");
  };

  const getCurrentDate = () => {
    return format(new Date(locationTime.datetime), "dd-MMM-yy");
  };

  const getDayType = () => {
    const hour = locationTime.hour;
    if (Number(locationTime.hour) < 18) {
      return <BsSun className="mr-8"></BsSun>;
    } else {
      return <BsMoon className="mr-8"></BsMoon>;
    }
  };

  return (
    <div className="card card-custom shadow-white-shadow rounded-md bg-white cursor-pointer hover:bg-slate-100 mb-3">
      <div className="card-body flex items-center justify-start py-3 px-7">
        {editMode ? (
          <button type="button" className="">
            <BsTrash className="mr-8 stroke-[0.5px] text-lg stroke-red-500"></BsTrash>
          </button>
        ) : (
          getDayType()
        )}

        <div className="flex items-end mr-8">
          <h5 className="font-extrabold text-xl">
            {locationTime.hour}:{locationTime.minute}
          </h5>
          <span className="text-gray-400 font-medium text-sm">
            {getMeridian()}
          </span>
        </div>
        <div className="text-left">
          <h6 className="font-medium text-sm">{locationTime.location}</h6>
          <span className="text-gray-400 font-medium text-xs">
            {getCurrentDate()},
          </span>
        </div>
      </div>
    </div>
  );
};

LocationTimestamp.propTypes = {
  editMode: PropTypes.bool.isRequired,
  locationTime: PropTypes.exact({
    timezone: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    minute: PropTypes.string.isRequired,
    second: PropTypes.string.isRequired,
    day_of_week: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default LocationTimestamp;
