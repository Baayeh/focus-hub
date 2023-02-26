import { BsFillPlayFill } from "react-icons/bs";

const ViewPlaylist = () => {
  return (
    <section
      id="viewPlaylist"
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-2"
    >
      <div
        className="album-cover relative w-full min-h-[300px] md:min-h-[250px] bg-cover overflow-hidden bg-center rounded-lg"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1967&q=80)`,
        }}
      >
        <button
          type="button"
          className="bg-primaryColor hover:bg-red-700 w-[60px] h-[60px] rounded-full absolute bottom-9 right-3 z-10 flex items-center justify-center shadow-md play-btn"
        >
          <BsFillPlayFill className="text-white text-3xl"></BsFillPlayFill>
        </button>
        <div className="album-overlay absolute bottom-0 left-0 w-full h-17 bg-black py-2 px-4">
          <h6 className="text-white text-sm font-bold">Daily Mix 1</h6>
          <button
            type="button"
            className="border border-primaryColor bg-transparent text-primaryColor hover:bg-primaryColor hover:text-white text-[10px] px-4 py-[3px] mt-1 rounded-[30px]"
          >
            Follow
          </button>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default ViewPlaylist;
