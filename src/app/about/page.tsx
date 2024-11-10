// import Image from "next/image";

import Aside from "@/components/aside/Aside";
import VerticalBw from "@/components/vertical_bw/VerticalBw";
import VerticalWhite from "@/components/vertical_white/VerticalWhite";
import Main from "@/components/main/Main";
import PhotoText from "@/components/photo_text/PhotoText";
import TitleMain from "@/components/title_main/TitleMain";

export default function About() {
  return (
    <main className="flex w-full h-screen bg-black">
      <div className="fixed z-30 top-20 right-1/3 translate-x-1/2">
        <TitleMain />
      </div>
      <div className="fixed z-10 top-10 w-1/3 right-1/4">
        <PhotoText />
      </div>
      <div className="w-8/12">
        <Main />
      </div>
      <div className="w-1/12 overflow-hidden z-10 opacity-50">
        <VerticalWhite />
      </div>
      <div className="w-1/12 overflow-hidden">
        <VerticalBw />
      </div>
      <div className="w-2/12 ">
        <Aside />
      </div>
    </main>
  );
}
