import { BsFillPlayFill } from "react-icons/bs";

const PlaylistMix = () => {
  return (
    <div className="playlist-mix p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
      <div
        className="album-cover relative w-full min-h-[120px] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1967&q=80)`,
        }}
      >
        <button
          type="button"
          className="bg-primaryColor w-[35px] h-[35px] rounded-full absolute bottom-0 right-3 z-10 flex opacity-0 items-center justify-center shadow-md play-btn"
        >
          <BsFillPlayFill className="text-white text-xl"></BsFillPlayFill>
        </button>
      </div>
      <div className="px-1 py-2">
        <h6 className="font-black text-sm leading-none">2000s Mix</h6>
        <span className="text-[10px] mt-1 block">
          Keep calm and focus with ambient and...
        </span>
      </div>
    </div>
  );
};

export default PlaylistMix;
