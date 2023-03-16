import Link from "next/link"
import { ImNewTab } from "react-icons/im"
export default function page() {
    return (
        <div>
            <h2 className="text-2xl ml-3 font-bold text-amber-400 border-b-[3px] border-amber-400 inline py-[2px] px-[2px]">About</h2>
            <span className="ml-1 flex items-center mt-6 font-mono text-lg max-w-2xl px-2">Hello, this is not an official IMDb website, and just a clone website created by Samagra Khanna to learn Next.js and for personal usage, though it is free for everyone to use if they want to.</span>
        </div>
    )
}
