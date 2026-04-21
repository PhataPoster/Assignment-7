'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { GoGraph } from 'react-icons/go';
import { RiHome2Line, RiStackLine, RiTimeLine } from 'react-icons/ri';


const Navbar = () => {
    const pathName = usePathname();

    const navLinkClass = (href) =>
        `inline-flex items-center gap-2 rounded-btn px-3 py-2 font-medium transition-colors ${
            pathName === href
                ? 'bg-[#244d3f] text-primary-content'
                : 'text-base-content/70 hover:bg-base-200 hover:text-base-content'
        }`;

    return (
        <div className="navbar bg-base-100 border-b border-gray-200 lg:px-20 px-2">
            <div className="flex-1">
                <Link href="/" className="text-xl font-bold text-[#1f2937]">
                    <span className="font-extrabold">Keen</span>Keeper
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/" className={navLinkClass("/")}>
                            <RiHome2Line className="text-lg" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/timeline" className={navLinkClass("/timeline")}>
                            <RiTimeLine className="text-lg" />
                            Timeline
                        </Link>
                    </li>
                    <li>
                        <Link href="/states" className={navLinkClass("/states")}>
                            <GoGraph className="text-lg" />
                            States
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;