import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUserLocation,
  fetchUserTime,
  searchLocation,
} from "./worldClock.thunk";

export const worldClockSlice = createSlice({
  name: "worldClock",
  initialState: {
    loading: false,
    geoLocation: null,
    locationMarkers: [],
    error: null,
    worldTime: [],
    locationSearchResult: [],
    locationSearching: false,
    userLocation: null,
  },
  reducers: {
    saveGeoLocation: (state, action) => {
      state.geoLocation = action.payload;
    },
    clearSearchResults: (state) => {
      state.locationSearchResult = [];
    },
    updateLocationMarker: (state, action) => {
      const currentMarkers = [...state.locationMarkers];

      const markerExist = currentMarkers.findIndex(
        (curr) => curr.name === action.payload.name
      );

      markerExist === -1 && currentMarkers.push(action.payload);

      state.locationMarkers = currentMarkers;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserLocation.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchUserLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userLocation = action.payload[0];

        const currentMarkers = [...state.locationMarkers];

        const userMarkerLocation = {
          ...state.geoLocation,
          name: action.payload[0].name,
          country: action.payload[0].country,
        };
        const markerExist = currentMarkers.findIndex(
          (curr) => curr.name === userMarkerLocation.name
        );

        markerExist === -1 && currentMarkers.push(userMarkerLocation);

        state.locationMarkers = currentMarkers;
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
      }),
      builder.addCase(searchLocation.pending, (state) => {
        state.locationSearching = true;
      }),
      builder.addCase(searchLocation.fulfilled, (state, action) => {
        state.locationSearching = false;
        state.locationSearchResult = action.payload;
      }),
      builder.addCase(searchLocation.rejected, (state, action) => {
        state.locationSearching = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { saveGeoLocation, clearSearchResults, updateLocationMarker } =
  worldClockSlice.actions;
export default worldClockSlice.reducer;
