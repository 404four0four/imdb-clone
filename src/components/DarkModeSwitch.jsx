"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function DarkModeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const currentTheme = theme === "system" ? systemTheme : theme;
    return (
        <>
            {mounted && (currentTheme === "dark" ? (
                <MdLightMode className="cursor-pointer text-2xl hover:text-amber-400 duration-100 transition ease-in-out" onClick={() => setTheme("light")} />
            ) : (
                <BsFillMoonFill className="cursor-pointer text-xl hover:text-amber-400 duration-100 transition ease-in-out" onClick={() => setTheme("dark")} />
            ))}
        </>
    )
}
