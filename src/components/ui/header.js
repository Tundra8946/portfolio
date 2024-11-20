"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="pt-4">
            <header className="bg-zinc-800 max-w-3xl rounded-xl mx-auto text-gray-100 shadow-xl border border-zinc-900 border-w-12">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="flex-shrink-0 flex items-center space-x-3"
                            >
                                <Image
                                    src="https://cdn.stratostech.xyz/images/Tundra/TundraV2.png"
                                    alt="Tundra Profile"
                                    width={40}
                                    height={40}
                                    className="rounded-full border-2 border-gray-700"
                                />
                                <span className="text-2xl font-semibold text-gray-100">
                                    Tundra
                                </span>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <NavLink href="/" active={pathName === "/"}>
                                Home
                            </NavLink>
                            <NavLink href="/projects" active={pathName === "/projects"}>
                                Projects
                            </NavLink>
                            <NavLink href="/about" active={pathName === "/about"}>
                                About
                            </NavLink>
                            <NavLink href="/contact" active={pathName === "/contact"}>
                                Contact
                            </NavLink>
                        </div>
                        <div className="sm:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </nav>
                {isMenuOpen && (
                    <div className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
                            <MobileNavLink href="/" active={pathName === "/"}>
                                Home
                            </MobileNavLink>
                            <MobileNavLink href="/projects" active={pathName === "/projects"}>
                                Projects
                            </MobileNavLink>
                            <MobileNavLink href="/contact" active={pathName === "/contact"}>
                                Contact
                            </MobileNavLink>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}

function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={`${active
                ? "border-blue-600 text-blue-500"
                : "border-transparent text-gray-300 hover:border-gray-500 hover:text-gray-100"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition duration-150 ease-in-out`}
        >
            {children}
        </Link>
    );
}

function MobileNavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={`${active
                ? "bg-gray-900 text-blue-400"
                : "text-gray-300 hover:bg-gray-700 hover:text-gray-100"
                } block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out`}
        >
            {children}
        </Link>
    );
}
