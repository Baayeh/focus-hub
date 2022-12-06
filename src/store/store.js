import { configureStore } from "@reduxjs/toolkit";
import worldClockSlice from "./world-clock/worldClock.slice";

export default configureStore({
  reducer: {
    worldClock: worldClockSlice,
  },
});
