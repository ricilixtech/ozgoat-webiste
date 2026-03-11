'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Space_Grotesk } from "next/font/google";
import MobileMenu from './MobileMenu';

import { Linkedin } from "lucide-react";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export interface NavLink {
    label: string;
    href?: string;
    submenu?: {
        href: string;
        label: string;
    }[];
}

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const pathname = usePathname();
    const router = useRouter();
    const lastScrollY = useRef(0);
    const navRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50) setShowNavbar(true);
            else if (currentScrollY > lastScrollY.current) setShowNavbar(false);
            else setShowNavbar(true);

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinks: NavLink[] = [
        { href: '/', label: 'Home' },

        {
            label: 'Services',
            submenu: [
                { href: '/services', label: 'All Services →' },
                { href: '/services#automation', label: 'Business Process Automation' },
                { href: '/services#software', label: 'Software Development' },
                { href: '/services#crm', label: 'CRM Integration' },
                { href: '/services#apps', label: 'Mobile & Web App Development' },
            ],
        },

        { href: '/about', label: 'About' },

        { href: '/contact', label: 'Contact' },
        { href: '/portfolio', label: 'Blog' },
    ];

    const handleDropdownClick = (label: string) => {
        setOpenDropdown(prev => (prev === label ? null : label));
    };

    const mobileMenuLinks = navLinks.map(link => {
        if (link.submenu) {
            return { label: link.label, href: link.submenu[0].href, submenu: link.submenu };
        }
        return { label: link.label, href: link.href! };
    });

    return (
        <>
            <div
                ref={navRef}
                className={`sticky top-0 z-50 font-body shadow-[8px_8px_20px_rgba(59,130,246,0.35)]
        transition-transform duration-300
        ${showNavbar ? "translate-y-0" : "-translate-y-28"}`}
            >
                <nav className="mx-auto bg-white border border-blue-900 rounded-xl shadow-sm">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">

                            <Link href="/" className="flex items-center space-x-2">
                                <Image
                                    src="/pictures/HomePage/logo.png"
                                    alt="Ozgoat Logo"
                                    width={160}
                                    height={44}
                                    priority
                                    className="h-12 w-auto"
                                />
                                <span className="text-blue-600 font-bold text-2xl">
                                    OZ<span className="text-orange-500">GOAT</span>
                                </span>
                            </Link>

                            <div className="hidden md:flex space-x-8 items-center relative">
                                {navLinks.map(link => {

                                    if (link.submenu) {
                                        return (
                                            <div key={link.label} className="relative">

                                                <button
                                                    onClick={() => handleDropdownClick(link.label)}
                                                    className="flex items-center gap-1 text-black hover:text-blue-500 font-medium"
                                                >
                                                    {link.label}
                                                </button>

                                                {openDropdown === link.label && (
                                                    <div className="absolute font-body left-0 top-10 w-56 bg-white border rounded-lg shadow-lg py-2">
                                                        {link.submenu.map(sub => {
                                                            const hash = typeof window !== "undefined" ? window.location.hash : "";
                                                            const isActive = sub.href.includes(hash);

                                                            let textColor = "text-blue-400";

                                                            if (sub.href === "/services") {
                                                                textColor = "text-black";
                                                            } else if (isActive) {
                                                                textColor = "text-blue-600";
                                                            }

                                                            return (
                                                                <Link
                                                                    key={sub.href}
                                                                    href={sub.href}
                                                                    className={`font-body block px-4 py-2 hover:bg-blue-50 ${textColor}`}
                                                                    onClick={() => setOpenDropdown(null)}
                                                                >
                                                                    {sub.label}
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                )}

                                            </div>
                                        );
                                    }

                                    const isActive = pathname === link.href;

                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href!}
                                            className={isActive ? "text-blue-700 font-medium" : "text-black hover:text-blue-500"}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </div>

                            
                                    {/* LinkedIn Button */}
                                    <a
                                        href="https://www.linkedin.com/company/ozgoat/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-bold px-4 py-2 rounded-md transition"
                                    >
                                        <Linkedin size={18} className="bg-white text-[#0A66C2] rounded-sm p-[2px]" />
                                        Follow on LinkedIn
                                    </a>
                               

                            <button
                                className="md:hidden text-2xl"
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                ☰
                            </button>

                        </div>
                    </div>
                </nav>
            </div>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navLinks={mobileMenuLinks}
            />
        </>
    );
};

export default Navbar;