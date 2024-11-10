import Image from "next/image";
import styles from "./PhotoText.module.css";

export default function PhotoText() {
  return (
    <div className="flex flex-col gap-4 px-4">
      <Image
        src="/images/photo_duo.png"
        alt="photo duo"
        width={1000}
        height={0}
        // className="self-center"
      />

      <div className="text-xl leading-relaxed text-white">
        Rzeng & Mike Iv are a duo of intermedia artists engaged in creation of
        an intense abstraction - audio-visual (psychically charged) space with
        cross-roads where different ideas and forces, visual and sonic images
        and approaches to them meet together in a weird dance of unobvious
        interconnections. Stylistically, their routes are mixed and broad - It
        can come out in a spectrum from atmospheric sound-scape to idm, broken
        beat, post-industrial, noise, experimental and so - an alternative club
        music.Their artistic background allows them to be involved in various
        creative practices such as live-sets, concerts, theatrical performances
        and audio-visual installations.
      </div>

      <Image
        src="/images/ring.png"
        alt="ring"
        width={300}
        height={300}
        className={`${styles.shake} self-center object-contain p-6`}
      />
    </div>
  );
}
