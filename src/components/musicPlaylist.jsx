import { useState, useEffect } from "react";
import { TbDots } from "react-icons/tb";
import { BsSpotify, BsArrowLeftShort } from "react-icons/bs";
import MusicOverview from "../components/musicOverview";
import AllMusicPlaylist from "../components/allMusicPlalist";
import ViewPlaylist from "../components/ViewPlaylist";

const MusicPlaylist = () => {
  const [pageState, setPageState] = useState("viewPlaylist");
  const [playlistType, setPlaylistType] = useState(null);

  const viewAllPlaylist = (playlistType, page) => {
    setPlaylistType(playlistType);
    setPageState(page);
  };

  const renderMusicPage = () => {
    switch (pageState) {
      case "overview":
        return (
          <MusicOverview viewAllPlaylist={viewAllPlaylist}></MusicOverview>
        );
      case "allPage":
        return (
          <AllMusicPlaylist playlistType={playlistType}></AllMusicPlaylist>
        );
      case "viewPlaylist":
        return <ViewPlaylist></ViewPlaylist>;

      // default:
      //   return (
      //     <MusicOverview viewAllPlaylist={viewAllPlaylist}></MusicOverview>
      //   );
    }
  };

  useEffect(() => {
    renderMusicPage();
  }, [pageState]);

  return (
    <section id="music-playlist" className="overflow-hidden">
      <div className="playlist-header flex items-center justify-between">
        <div className="flex items-center">
          {pageState !== "overview" ? (
            <button
              type="button"
              className="mr-2"
              onClick={() => setPageState("overview")}
            >
              <BsArrowLeftShort className="text-2xl"></BsArrowLeftShort>
            </button>
          ) : null}

          <BsSpotify className="mr-2 text-xl"></BsSpotify>
          <h6 className="text-sm font-bold">Spotify</h6>
        </div>

        <button type="button" className="p-2">
          <TbDots></TbDots>
        </button>
      </div>

      {renderMusicPage()}
    </section>
  );
};

export default MusicPlaylist;
