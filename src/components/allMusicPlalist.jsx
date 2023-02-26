import PlaylistMix from "../components/PlaylistMix";
import { motion } from "framer-motion";

const AllMusicPlaylist = ({ playlistType }) => {
  return (
    <motion.div
      className="playlist-content mt-3 px-3"
      initial={{ x: 200 }}
      animate={{ x: 0 }}
    >
      <div className="recent-played">
        <div className="items-center flex justify-between">
          <span className="font-bold block text-sm">
            {playlistType === "recent" ? "Recently Played" : "Focus"}
          </span>
        </div>

        <div className="music-list grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-2 gap-3">
          <PlaylistMix></PlaylistMix>
          <PlaylistMix></PlaylistMix>
          <PlaylistMix></PlaylistMix>
          <PlaylistMix></PlaylistMix>
          <PlaylistMix></PlaylistMix>
          <PlaylistMix></PlaylistMix>
        </div>
      </div>
    </motion.div>
  );
};

export default AllMusicPlaylist;
