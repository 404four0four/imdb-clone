"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function NavbarItem({ title, param }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
    return (
        <div>
            <Link className={`py-[4px] px-[2px] cursor-pointe transition ease-in-out duration-150 ${genre === param && (`border-b-[3px] border-amber-400`)}`} href={`/?genre=${param}`}>{title}</Link>
        </div>
    )
}
