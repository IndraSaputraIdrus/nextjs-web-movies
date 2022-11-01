import Image from "next/image";
import Link from "next/link";

export default function Card({ poster, title, year, imdbID }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Image
        src={poster}
        alt="poster"
        width={500}
        height={500}
        className="border-b w-full"
      />

      <div className="p-5">
        <div className="w-full">
          <h2 className="text-xl font-semibold break-words">{title}</h2>
          <p className="text-md text-slate-500">({year})</p>
        </div>
        <Link
          href={`detail?id=${imdbID}`}
          className="bg-cyan-500 w-full mt-3 py-2 rounded-lg text-white hover:bg-cyan-400 block text-center"
        >
          Detail
        </Link>
      </div>
    </div>
  );
}
