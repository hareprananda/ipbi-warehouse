import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import action from "@/redux/reduceraction";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const scriptArr: string[] = [
      // "/assets/js/sidebarmenu.js",
      // "/assets/js/app.min.js",
      // "/assets/js/app.init.js",
      // "/assets/js/app-style-switcher.js",
      // "/assets/js/jquery.sparkline.min.js",
      // "/assets/js/waves.js",
      // "/assets/js/feather.min.js",
      // "/assets/js/custom.min.js",
      // "/assets/js/apexcharts.min.js",
    ];
    const wrapper = document.createElement("div");
    scriptArr.forEach((v) => {
      const script = document.createElement("script");
      script.defer = true;
      script.src = v;
      wrapper.appendChild(script);
    });
    document.body.appendChild(wrapper);

    return () => {
      wrapper.remove();
    };
  }, []);

  return <div></div>;
};

export default Home;
