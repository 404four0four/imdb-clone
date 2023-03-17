import MenuItem from "./MenuItem";;
import { MdHome } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
    return (
        <div className="flex mx-2 items-center justify-center mt-6">
            <div className="flex justify-center items-center space-x-2">
                <Link href="/" className="cursor-pointer ml-2">
                    <h2 className="text-2xl">
                        <span className="font-bold bg-amber-400 py-2 px-2 rounded mr-4 text-black">IMDb</span>
                    </h2>
                </Link>
                <DarkModeSwitch />
            </div>
            <div className="flex w-full ml-3">
                <MenuItem address="/" Icon={MdHome} />
                <MenuItem address="/about" Icon={AiFillInfoCircle} />
            </div>
        </div>
    );
};
