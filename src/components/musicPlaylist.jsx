import { useState } from "react";
import { TbDots } from "react-icons/tb";
import { BsSpotify } from "react-icons/bs";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import PlaylistMix from "../components/PlaylistMix";

const MusicPlaylist = () => {
  const [recentSwiper, setRecentSwiperInstance] = useState(null);
  const [focusSwiper, setFocusSwiperInstance] = useState(null);

  console.log(window.innerWidth);

  return (
    <section id="music-playlist">
      <div className="playlist-header flex items-center justify-between">
        <div className="flex items-center">
          <BsSpotify className="mr-2 text-xl"></BsSpotify>
          <h6 className="text-sm font-bold">Spotify</h6>
        </div>

        <button type="button" className="p-2">
          <TbDots></TbDots>
        </button>
      </div>

      <div className="playlist-content mt-3 px-3">
        <div className="recent-played mb-4">
          <div className="items-center flex justify-between">
            <span className="font-bold block text-sm">Recently Played</span>

            <a href="" className="text-xs">
              See all
            </a>
          </div>

          <div className="music-list relative mt-2">
            <button
              type="button"
              className="swiper-nav-btn left"
              onClick={() => recentSwiper.slidePrev()}
            >
              <FaAngleLeft></FaAngleLeft>
            </button>
            <button
              type="button"
              className="swiper-nav-btn right"
              onClick={() => recentSwiper.slideNext()}
            >
              <FaAngleRight></FaAngleRight>
            </button>
            <Swiper
              spaceBetween={10}
              slidesPerView={window.innerWidth > 1200 ? 3 : 2}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => setRecentSwiperInstance(swiper)}
              ref={recentSwiper}
            >
              <SwiperSlide>
                <PlaylistMix></PlaylistMix>
              </SwiperSlide>
              <SwiperSlide>
                <PlaylistMix></PlaylistMix>
              </SwiperSlide>
              <SwiperSlide>
                <PlaylistMix></PlaylistMix>
              </SwiperSlide>
              <SwiperSlide>
                <PlaylistMix></PlaylistMix>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="recent-played">
          <div className="items-center flex justify-between">
            <span className="font-bold block text-sm">Focus</span>

            <a href="" className="text-xs">
              See all
            </a>
          </div>

          <div className="music-list relative mt-2">
            <button
              type="button"
              className="swiper-nav-btn left"
              onClick={() => focusSwiper.slidePrev()}
            >
              <FaAngleLeft></FaAngleLeft>
            </button>
            <button
              type="button"
              className="swiper-nav-btn right"
              onClick={() => focusSwiper.slideNext()}
            >
              <FaAngleRight></FaAngleRight>
            </button>
            <Swiper
              spaceBetween={10}
              slidesPerView={window.innerWidth > 1200 ? 3 : 2}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => setFocusSwiperInstance(swiper)}
              ref={focusSwiper}
            >
              <SwiperSlide>
                <PlaylistMix></PlaylistMix>
              </SwiperSlide>
              <SwiperSlide>
                <PlaylistMix></PlaylistMix>
              </SwiperSlide>
              <SwiperSlide>
                <PlaylistMix></PlaylistMix>
              </SwiperSlide>
              <SwiperSlide>
                <PlaylistMix></PlaylistMix>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlaylist;
