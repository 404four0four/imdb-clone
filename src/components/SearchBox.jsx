"use client";
import { useState } from "react";
import { TbSearch } from "react-icons/tb";
import { useRouter } from "next/navigation";
export default function SearchBox() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    function handleSubmit(e) {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
    }
    return (
        <form onSubmit={handleSubmit} className="mt-6 flex items-center ml-3">
            <input className="text-[18px] placeholder:font-medium w-[200px] h-[47px] py-2.5 p-3 outline-none rounded-tl rounded-bl opacity-100 placeholder:text-white placeholder:dark:text-black dark:bg-white bg-[#000000] text-white dark:text-black" type="text" placeholder="Search for movies..." id="search" onChange={(e) => setSearch(e.target.value)} value={search} />
            <button disabled={!search} type="submit" className="border-[3px] dark:border-amber-400 border-l-[0px] py-2.5 h-[47px] px-2 rounded-tr rounded-br border-black"><TbSearch className="text-2xl text-amber-400" /></button>
        </form>
    )
}
