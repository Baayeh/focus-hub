const PlaylistMix = () => {
  return (
    <div className="playlist-mix p-2 bg-gray-100 rounded-lg">
      <div
        className="album-cover relative w-full min-h-[120px] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1967&q=80)`,
        }}
      ></div>
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
