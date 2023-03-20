import Image from "next/image";

async function getMovie(movieID) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}`);
    return await res.json();
}
export default async function MoviePage({ params }) {
    const movieID = params.id;
    const movie = await getMovie(movieID)
    return (
        <div className="max-w-6xl p-4 md:pt-8 flex flex-col md:flex-row items-center md:space-x-6">
            <Image className="rounded-md" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path
                }`} width={500} height={300} placeholder="blur" blurDataURL="/image-spinner.svg" alt="Image not available." style={{ maxwidth: "100%", height: "auto", }}></Image>
            <div className="p-2">
                <h2 className="font-mono text-xl mb-3 font-bold">{movie.name || movie.title}</h2>
                <p className="text-md mb-3 font-mono text-[17px]"><span className="font-bold text-lg mr-2">Overview:</span>{movie.overview}</p>
                <p className="mb-3"><span className="mr-2 font-mono text-lg font-bold">Date Released:</span>{movie.release_date || movie.first_air_date}</p>
                <p className="mb-3"><span className="mr-2 font-mono text-lg font-bold">Rating:</span>{movie.vote_count}</p>
            </div>
        </div>
    )
}
