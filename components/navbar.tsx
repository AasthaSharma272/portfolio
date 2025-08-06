"use client";

import Link from "next/link";
import { useRouter } from 'next/router';

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" }
];

export default function Navbar() {
    const router = useRouter();

    return (
        <nav className="w-full font-mont px-6 py-6 flex justify-between items-center bg-white fixed top-0 z-50">
            <Link
                href="/"
                className="text-3xl font-bold text-gray-800 hover:text-indigo-400 transition-colors"
                style={{ marginLeft: '4rem' }}
            >
                Aastha
            </Link>
            <div className="flex space-x-12" style={{ marginRight: '4rem' }}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`px-4 py-2 rounded-full font-bold text-gray-700 hover:text-indigo-400 hover:bg-indigo-50 transition-all`}
                    >
                        {link.name}
                    </Link>
                ))}

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" font-bold px-4 py-2 rounded-full text-gray-700 hover:text-indigo-400 hover:bg-indigo-50 transition-all"
                >
                    Resume
                </a>
            </div>
        </nav>
    );
}