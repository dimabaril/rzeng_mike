import Image from "next/image";

export default function Home() {
  return (
    <main className="row-start-2 flex flex-col items-center gap-8 bg-red-200 sm:items-start">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <div>HOME MAIN</div>
      <div>HOME MAIN</div>
      <div>HOME MAIN</div>
      <div>HOME MAIN</div>
      <div>HOME MAIN</div>
    </main>
  );
}
