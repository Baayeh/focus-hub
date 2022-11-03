import { BsMoon } from "react-icons/bs";

const LocationTimestamp = () => {
  return (
    <div className="card card-custom shadow-white-shadow rounded-md bg-white cursor-pointer hover:bg-slate-100 mb-3">
      <div className="card-body flex items-center justify-start py-3 px-7">
        <BsMoon className="mr-8"></BsMoon>
        <div className="flex items-end mr-8">
          <h5 className="font-extrabold text-xl">6:59</h5>
          <span className="text-gray-400 font-medium text-sm">PM</span>
        </div>
        <div className="text-right">
          <h6 className="font-medium text-sm">Belo Horizonte</h6>
          <span className="text-gray-400 font-medium text-xs">
            03-Nov-22, -3hrs
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocationTimestamp;
