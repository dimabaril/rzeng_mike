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

      <div className="text-2xl text-black">
        <p>
          <span className="bg-white p-1 leading-snug">
            Rzeng & Mike Iv are a duo of intermedia artists engaged in the
            creation of an intense abstraction - audiovisual (psychically
            charged) space (outplace)
          </span>
        </p>
        <p>
          <span className="bg-white bg-opacity-80 p-1 leading-snug">
            Inheriting a counting system of “Arabian Nights,” Zero Night would
            be that of an untold story. Zero as a prehistoric or non-historic
            one, a parallel landscape, escaping grids, and mapping.
          </span>
        </p>
        <p>
          <span className="bg-white bg-opacity-60 p-1 leading-snug">
            Within the flows of this hypothetical outplace we bring to pass an
            attempt at cutting through borders of genres and discourses,
            cultural codes, and identity policies in a perceptual transmutation.
          </span>
        </p>
        <p>
          <span className="bg-white bg-opacity-40 p-1 leading-snug">
            Technically it appears as signal transmission of analogue and
            digitally synthesised sound sources through algorithms of
            sensitivity to the entire spectrogram with various processing,
            resampling, and sequencing sonic and image-ing techniques in
            experimental cross-media improvisation.
          </span>
        </p>
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
