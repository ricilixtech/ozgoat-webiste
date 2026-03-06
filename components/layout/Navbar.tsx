'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Space_Grotesk } from "next/font/google";
import MobileMenu from './MobileMenu';

/* ---------- Font ---------- */
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

/* ---------- NavLink Type ---------- */
export interface NavLink {
    label: string;
    href?: string; // optional for desktop dropdown parent
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

    /* ---------- Scroll Hide ---------- */
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

    /* ---------- Outside Click Close ---------- */
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    /* ---------- Navigation Data ---------- */
    const navLinks: NavLink[] = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        {
            label: 'Services',
            submenu: [
                { href: '/services/web-development', label: 'Web Development' },
                { href: '/services/mobile-app', label: 'Mobile-App Development' },
                { href: '/services/crm-integration', label: 'CRM integration' },
                { href: '/services/automation', label: 'Automation Solutions' },
            ],
        },
      
        { href: '/contact', label: 'Contact' },
        { href: '/portfolio', label: 'Blog' },
    ];

    const handleDropdownClick = (label: string) => {
        setOpenDropdown(prev => (prev === label ? null : label));
    };

    /* ---------- Prepare links for MobileMenu ---------- */
    // Every link passed to MobileMenu must have href
    const mobileMenuLinks: { href: string; label: string; submenu?: { href: string; label: string }[] }[] =
        navLinks.map(link => {
            if (link.submenu) {
                // use first submenu href as fallback
                return { label: link.label, href: link.submenu[0].href, submenu: link.submenu };
            }
            return { label: link.label, href: link.href! };
        });

    return (
        <>
            <div
                ref={navRef}
                className={`sticky top-0 z-50 shadow-[8px_8px_20px_rgba(59,130,246,0.35)] 
                transition-transform duration-300 ease-in-out
                ${showNavbar ? "translate-y-0" : "-translate-y-28"}`}
            >
                <nav className="mx-auto bg-white border border-blue-900 rounded-xl shadow-sm">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">

                            {/* Logo */}
                            <Link href="/" className="flex items-center space-x-2">
                                <Image
                                    src="/pictures/HomePage/logo.png"
                                    alt="Ozgoat Logo"
                                    width={160}
                                    height={44}
                                    priority
                                    className="h-12 w-auto object-contain"
                                />
                                <span className="text-blue-600 font-bold text-2xl">
                                    OZ<span className="text-orange-500">GOAT</span>
                                </span>
                            </Link>

                            {/* Desktop Links */}
                            <div className="hidden md:flex space-x-8 items-center relative">
                                {navLinks.map(link => {
                                    if (link.submenu) {
                                        return (
                                            <div key={link.label} className="relative">
                                                <button
                                                    onClick={() => handleDropdownClick(link.label)}
                                                    className="flex items-center gap-1 text-black hover:text-blue-500 transition font-medium"
                                                >
                                                    {link.label}
                                                    <svg
                                                        className={`w-4 h-4 transition-transform duration-200 ${
                                                            openDropdown === link.label ? "rotate-180" : ""
                                                        }`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                </button>

                                                {openDropdown === link.label && (
                                                    <div className="absolute left-0 top-10 w-56 bg-white border rounded-lg shadow-lg py-2 z-50">
                                                        {link.submenu.map(sub => (
                                                            <Link
                                                                key={sub.href}
                                                                href={sub.href}
                                                                className="block px-4 py-2 text-black hover:bg-blue-50 hover:text-blue-600 transition"
                                                                onClick={() => setOpenDropdown(null)}
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }

                                    const isActive = link.href ? pathname === link.href : false;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href!}
                                            className={`font-medium transition ${
                                                isActive ? 'text-blue-700' : 'text-black hover:text-blue-500'
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* CTA */}
                            <div className="hidden md:flex items-center">
                                <button
                                    onClick={() => router.push('/contact')}
                                    className="bg-blue-600 font-bold text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Contact Us
                                </button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                className="md:hidden text-black text-2xl font-bold"
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                ☰
                            </button>

                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navLinks={mobileMenuLinks} // ✅ Pass only fully-typed href links
            />
        </>
    );
};

export default Navbar;