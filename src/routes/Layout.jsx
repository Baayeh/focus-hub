import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => {
  const navBar = useRef();
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    setCurrent(navBar.current);
  }, [current]);

  return (
    <div className="flex align-items-center min-h-screen relative">
      <NavBar navBar={navBar} />
      <main className="md:ml-[15%] xl:ml-[10%] 2xl:w-[10%] ml-0 sm:ml-0 w-full overflow-hidden">
        <Outlet context={current} />
      </main>
    </div>
  );
};

export default Layout;
