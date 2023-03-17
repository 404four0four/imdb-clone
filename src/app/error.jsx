"use client";
import { useEffect } from "react";
import { TbReload } from "react-icons/tb";
export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div className="text-center mt-10 inline-flex flex-col ml-3 border-[3px] p-3 rounded border-black dark:border-white w-[245px]">
            <h1 className="mb-2 font-semibold uppercase text-md font-mono tracking-wider">Something went wrong!</h1>
            <button onClick={() => reset()} className="w-[100px] bg-amber-400 text-black flex justify-center items-center px-3 py-1 rounded-sm hover:text-white font-extrabold uppercase text-sm font-mono"><TbReload className="mr-2 text-lg" />Retry</button>
        </div>
    );
};
