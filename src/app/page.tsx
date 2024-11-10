import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-red-200">
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
