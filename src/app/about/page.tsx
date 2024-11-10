// import Image from "next/image";

import Aside from "@/components/aside/Aside";
import VerticalBw from "@/components/vertical_bw/VerticalBw";
import VerticalWhite from "@/components/vertical_white/VerticalWhite";
import Main from "@/components/main/Main";
import PhotoText from "@/components/photo_text/PhotoText";
import TitleMain from "@/components/title_main/TitleMain";

export default function About() {
  return (
    <main className="flex h-screen w-full bg-black">
      <div className="fixed right-1/3 top-20 z-30 translate-x-1/2">
        <TitleMain />
      </div>
      <div className="fixed right-1/4 top-10 z-10 w-1/3">
        <PhotoText />
      </div>
      <div className="w-8/12">
        <Main />
      </div>
      <div className="z-10 w-1/12 overflow-hidden opacity-50">
        <VerticalWhite />
      </div>
      <div className="w-1/12 overflow-hidden">
        <VerticalBw />
      </div>
      <div className="w-2/12">
        <Aside />
      </div>
    </main>
  );
}
