import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "IWgH1Gl+paGhQey28wnFNg==5LVw3Qd8aeA5Enkd";

export const fetchUserLocation = createAsyncThunk(
  "worldClock/fetchUserLocation",
  async (geoLocation) => {
    const response = await axios({
      method: "GET",
      url: `https://api.api-ninjas.com/v1/reversegeocoding?lat=${geoLocation.latitude}&lon=${geoLocation.longitude}`,
      headers: { "X-Api-Key": API_KEY },
      contentType: "application/json",
    });
    return response.data;
  }
);

export const fetchUserTime = createAsyncThunk(
  "worldClock/fetchUserTime",
  async (location) => {
    const response = await axios({
      method: "GET",
      url: `https://api.api-ninjas.com/v1/worldtime?city=${location}`,
      headers: { "X-Api-Key": API_KEY },
      contentType: "application/json",
    });

    return {
      ...response.data,
      location,
    };
  }
);

export const searchLocation = createAsyncThunk(
  "worldClock/searchLocation",
  async (location) => {
    const response = await axios({
      method: "GET",
      url: "https://api.api-ninjas.com/v1/city?name=" + location,
      headers: { "X-Api-Key": API_KEY },
      contentType: "application/json",
    });

    return response.data;
  }
);
