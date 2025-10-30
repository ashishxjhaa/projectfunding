'use client'

import Image from "next/image";
import { HoverBorderGradient } from "./ui/hover-border-gradient";


export default function HeroSection() {

    return (
        <div className="flex flex-col items-center justify-center pt-25 sm:pt-35">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-neutral-800 hover:dark:bg-neutral-900 hover:bg-gray-50 bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
            >
                <BackitLogo />
                <span>Ideas deserve funding</span>
            </HoverBorderGradient>
            <h1 className="text-black dark:text-white font-medium tracking-wide text-2xl sm:text-4xl md:text-6xl text-center pt-10 sm:pt-15">Every project funded, <br /> one click away.</h1>
            <p></p>
        </div>
    )
}



const BackitLogo = () => {
    return (
        <Image 
            src="/home.png"
            alt="Back It Logo"
            width={100}
            height={100}
            className="object-cover h-4 w-4"
        />
    );
};
