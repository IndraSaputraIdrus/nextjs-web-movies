import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const getDetail = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=59d036c0&i=${id}`
      );
      const detail = await response.json();
      setLoading(false);
      setMovie(detail);
    };
    getDetail();
  });
  if (!id) {
    return (
      <div className="text-center mt-10">
        <h1 className="font-bold text-3xl">Halaman Tidak Ditemukan :(</h1>
        <Link className="text-blue-500 underline my-10 block" href="/">
          {"back <"}
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full flex gap-10 justify-center items-center p-10 flex-col md:flex-row lg:pr-40 xl:pr-52uuu">
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <>
          <div className="md:w-3/6 flex justify-center items-center lg:justify-end">
            <img
              src={movie.Poster}
              alt="poster"
              className="w-full lg:max-w-sm"
            />
          </div>
          <div className="md:w-3/6 lg:w-3/5 flex items-start justify-center flex-col gap-3 font-semibold">
            <h1>Detail Film</h1>
            <h2>
              title: <span className="value">{movie.Title}</span>
            </h2>
            <p>
              year: <span className="value">{movie.Year}</span>
            </p>
            <p>
              genre: <span className="value">{movie.Genre}</span>
            </p>
            <p>
              writer: <span className="value">{movie.Writer}</span>
            </p>
            <p>
              actors: <span className="value">{movie.Actors}</span>
            </p>
            <p>
              plot: <span className="value">{movie.Plot}</span>
            </p>

            <Link
              href="/"
              className="inline-block py-3 px-10 font-normal bg-blue-500 text-white hover:bg-blue-400 rounded-lg"
            >
              Back
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
