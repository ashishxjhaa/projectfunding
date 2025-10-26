import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IconArrowUpRight } from "@tabler/icons-react";
import { ThemeToggle } from "./ui/Theme-toggle";


export default function Navbar() {

    return (
        <div className="w-full h-fit fixed top-0 right-0 border-b dark:border-gray-600 bg-white/10 dark:bg-black/10 backdrop-blur-sm dark:backdrop-blur-md z-50">
            <div className="flex justify-between items-center py-4 px-10">
                <Link href='/' className="flex items-center gap-2">
                    <Image 
                        src="/BackIt.png"
                        alt="Back It Logo"
                        width={40}
                        height={40}
                        className="object-cover"
                    />
                    <div className="text-black opacity-80 dark:text-white text-xl font-semibold tracking-wide cursor-default">
                        BackIt
                    </div>
                </Link>
                <div className="hidden md:flex items-center gap-6 text-black dark:text-white font-light cursor-default">
                    <div className="opacity-100 hover:opacity-65">Features</div>
                    <div className="opacity-100 hover:opacity-65">How to use</div>
                    <div className="opacity-100 hover:opacity-65">Updates</div>
                </div>
                <div className="flex items-center gap-3">
                    <Link 
                        href="https://github.com/ashishxjhaa/BackIt" 
                        target="_blank" 
                        className="opacity-65 hidden md:flex items-center gap-2 mx-4 relative group transition-opacity hover:opacity-100"
                    >
                        <span className="flex items-center font-semibold gap-2 transition-transform duration-500 ease-in-out group-hover:-translate-x-2">
                            <FaGithub />
                            <div className="text-black dark:text-white tracking-wide">Star me on GitHub</div>
                        </span>
                        <IconArrowUpRight size={48} strokeWidth={1.25} className="absolute h-[22px] -right-8 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-black dark:text-white" />
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}