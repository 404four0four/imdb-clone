import Link from "next/link";

export default function MenuItem({ address, Icon }) {
    return (
        <div>
            <Link href={address} className="transition ease-in-out duration-100 hover:text-amber-400 flex flex-col justify-center items-center">
                <Icon className="text-3xl mx-4" />
            </Link>
        </div>
    );
};
