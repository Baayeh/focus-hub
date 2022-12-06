import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { saveGeoLocation } from "../store/world-clock/worldClock.slice";
import {
  fetchUserLocation,
  fetchUserTime,
} from "../store/world-clock/worldClock.thunk";

const Layout = () => {
  const navBar = useRef();
  const [current, setCurrent] = useState(null);
  const dispatch = useDispatch();
  const userGeoLocation = useSelector((state) => state.worldClock.geoLocation);

  useEffect(() => {
    setCurrent(navBar.current);
  }, [current]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const geoLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      dispatch(saveGeoLocation(geoLocation));
    });
  }, []);

  useEffect(() => {
    if (userGeoLocation) {
      dispatch(fetchUserLocation(userGeoLocation))
        .unwrap()
        .then((response) => {
          dispatch(fetchUserTime(response[0].name));
        });
    }
  }, [userGeoLocation]);

  return (
    <div className="flex align-items-center min-h-screen relative">
      <NavBar navBar={navBar} />
      <main className="md:ml-[15%] xl:ml-[10%] ml-0 sm:ml-0 w-full overflow-hidden">
        <Outlet context={current} />
      </main>
    </div>
  );
};

export default Layout;
