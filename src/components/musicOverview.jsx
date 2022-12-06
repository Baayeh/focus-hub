import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import PlaylistMix from "../components/PlaylistMix";
import { motion } from "framer-motion";

const MusicOverview = ({ viewAllPlaylist }) => {
  const [recentSwiper, setRecentSwiperInstance] = useState(null);
  const [focusSwiper, setFocusSwiperInstance] = useState(null);

  return (
    <motion.div
      className="playlist-content mt-3 px-3"
      initial={{ x: 200 }}
      animate={{ x: 0 }}
    >
      <div className="recent-played mb-4">
        <div className="items-center flex justify-between">
          <span className="font-bold block text-sm">Recently Played</span>

          <button
            type="button"
            className="text-xs"
            onClick={() => viewAllPlaylist("recent", "allPage")}
          >
            See all
          </button>
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

          <button
            type="button"
            className="text-xs"
            onClick={() => viewAllPlaylist("focus", "allPage")}
          >
            See all
          </button>
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
    </motion.div>
  );
};

export default MusicOverview;
