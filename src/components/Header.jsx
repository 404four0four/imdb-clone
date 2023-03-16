import MenuItem from "./MenuItem";;
import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
    return (
        <div className="flex justify-between mx-2 items-center py-6">
            <div className="flex w-full">
                <MenuItem address="/" Icon={AiFillHome} />
                <MenuItem address="/about" Icon={AiFillInfoCircle} />
            </div>
            <div className="flex justify-center items-center space-x-5">
                <DarkModeSwitch />
                <Link href="/" className="cursor-pointer">
                    <h2 className="text-2xl">
                        <span className="font-bold bg-amber-400 py-1.5 px-1.5 rounded mr-4 text-black">IMDb</span>
                    </h2>
                </Link>
            </div>
        </div>
    );
};
