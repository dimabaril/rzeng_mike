"use client";

import Image from "next/image";

import { useEffect, useRef } from "react";
import styles from "./Main.module.css";

export default function Main() {
  const frontLayerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frontLayer = frontLayerRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer || !frontLayer) {
      return;
    }

    const handleScroll = () => {
      const scroll = scrollContainer.scrollTop / 1.5;
      frontLayer.style.transform = `translateY(-${scroll}px)`;
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className={`${styles.hide_scrollbar} overflow-auto h-full`}
    >
      <div className={`${styles.parallax} h-full`}>
        <div className="bg-main h-full bg-cover"></div>

        {/* <div className="bg-photo_duo_bottom h-full bg-cover"></div> */}
        <Image
          src="/images/photo_duo_bottom.png"
          alt="photo duo bottom"
          width={500}
          height={500}
          className="w-full"
        />

        <div
          ref={frontLayerRef}
          className={`${styles.parallax__layer} absolute top-1/4 left-1/3 w-3/12 bg-center_line bg-contain opacity-70`}
        ></div>
      </div>
    </div>
  );
}

// // old version
//   return (
//     <div className={`${styles.hide_scrollbar} overflow-auto h-full`}>
//       <div className="bg-main h-full bg-cover"></div>
//       <div className="bg-main h-full bg-cover"></div>
//     </div>
//   );
