import MenuItem from "./MenuItem";;
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-between mx-2 items-center py-6">
            <div className="flex w-full">
                <MenuItem address="/" Icon={AiFillHome} />
                <MenuItem address="/about" Icon={BsInfoCircleFill} />
            </div>
            <div>
                <Link href="/" className="cursor-pointer">
                    <h2 className="text-2xl">
                        <span className="font-bold bg-amber-400 py-1.5 px-1.5 rounded mr-4">IMDb</span>
                    </h2>
                </Link>
            </div>
        </div>
    );
};
