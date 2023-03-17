import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
        <div className="items-center bg-[#000000] text-white dark:bg-white dark:text-black py-2.5 px-4 space-x-5 font-semibold text-lg tracking-wider inline-flex ml-3 rounded w-[243px] mt-6 mx-2">
            <NavbarItem title="Trending" param="fetchTrending" />
            <NavbarItem title="Top Rated" param="fetchTopRated" />
        </div>
    );
};
