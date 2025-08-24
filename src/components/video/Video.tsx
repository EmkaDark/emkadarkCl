"use client";
import React, { useEffect, useState } from "react";
import styles from "./Video.module.scss";
const Video = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useEffect(() => {
    var vid = document.getElementById("myVideo");
    if (vid instanceof HTMLVideoElement) {
      vid.playbackRate = 1;
    }
  }, []);
  return (
    <>
      {!isMobile && (
        <video
          muted
          autoPlay
          loop
          src={"/ferage.mp4"}
          className={styles.video}
        ></video>
      )}
    </>
  );
};

export default Video;
