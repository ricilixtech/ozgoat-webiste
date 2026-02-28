'use client';
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Space_Grotesk } from "next/font/google";
import MobileMenu from './MobileMenu';

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);

    const pathname = usePathname();
    const router = useRouter();
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 50) {
                setShowNavbar(true);
            } else if (currentScrollY > lastScrollY.current) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <div
                className={`sticky top-0 z-50 shadow-[8px_8px_20px_rgba(59,130,246,0.35)] 
                transition-transform duration-300 ease-in-out
                ${showNavbar ? "translate-y-0" : "-translate-y-28"}`}
            >
                <nav className="mx-auto bg-gray-900 border border-blue-900 rounded-xl shadow-sm text-white ">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">

                            {/* Logo + Text */}
                            <Link href="/" className="flex items-center space-x-2">
                                <Image
                                    src="/pictures/HomePage/logo.png"
                                    alt="Ozgoat Logo"
                                    width={160}
                                    height={44}
                                    priority
                                    className="h-12 w-auto object-contain"
                                />
                                <span className="text-white font-bold text-xl">OzGoat</span>
                            </Link>

                            {/* Desktop Links */}
                            <div className="hidden md:flex space-x-8">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`font-medium transition 
                                                ${isActive
                                                    ? 'text-blue-400'
                                                    : 'text-white hover:text-blue-400'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* CTA */}
                            <div className="hidden md:block">
                                <button
                                    onClick={() => router.push('/contact')}
                                    className="bg-blue-600 font-bold text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Book a Consultation
                                </button>
                            </div>

                            {/* Mobile Menu */}
                            <button
                                className="md:hidden text-white"
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </nav>
            </div>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navLinks={navLinks}
            />
        </>
    );
};

export default Navbar;