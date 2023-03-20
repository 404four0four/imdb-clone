import Image from "next/image";
import Link from "next/link";
import { IoMdThumbsUp } from "react-icons/io";

export default function Card({ result }) {
    return (
        <div className="cursor-pointer px-3 sm:p-3 rounded-md sm:border sm:border-black dark:sm:border-white sm:m-3 transition duration-200 ease-in-out">
            <Link href={`/movie/${result.id}`}>
                <Image className="rounded-md hover:opacity-80 transition-opacity duration-200" src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path
                    }`} width={500} height={300} placeholder="blur" blurDataURL="/image-spinner.svg" alt="Image not available." style={{ maxwidth: "100%", height: "auto", }}></Image>
                <div className="p-3">
                    <p className="line-clamp-2 text-md opacity-90">{result.overview}</p>
                    <h2 className="truncate text-xl font-bold mt-1 opacity-90 font-mono">{result.title || result.name}</h2>
                    <p className="opacity-100 text-md mt-1 flex items-center">{result.release_date || result.first_air_date}
                        <IoMdThumbsUp className="mr-1 ml-3" />{result.vote_count}</p>
                </div>
            </Link>
        </div >
    );
};
