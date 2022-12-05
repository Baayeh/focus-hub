import { createSlice } from "@reduxjs/toolkit";
import { fetchUserLocation, fetchUserTime } from "./worldClock.thunk";

export const worldClockSlice = createSlice({
  name: "worldClock",
  initialState: {
    loading: false,
    geoLocation: null,
    userLocation: null,
    error: null,
    worldTime: [],
  },
  reducers: {
    saveGeoLocation: (state, action) => {
      state.geoLocation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserLocation.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchUserLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userLocation = {
          ...action.payload[0],
          ...state.geoLocation,
        };
      }),
      builder.addCase(fetchUserLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
    builder.addCase(fetchUserTime.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchUserTime.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;

        const currentTimeStamps = [...state.worldTime];
        const index = currentTimeStamps.findIndex(
          (curr) => curr.location === action.payload.location
        );

        index === -1
          ? currentTimeStamps.push(action.payload)
          : currentTimeStamps.splice(index, 1, action.payload);
        state.worldTime = currentTimeStamps;
      }),
      builder.addCase(fetchUserTime.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { saveGeoLocation } = worldClockSlice.actions;
export default worldClockSlice.reducer;
