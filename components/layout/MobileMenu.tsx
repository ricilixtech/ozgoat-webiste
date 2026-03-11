'use client';
import { Linkedin } from "lucide-react";
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface SubmenuItem {
  href: string;
  label: string;
}

interface NavLink {
  href?: string;
  label: string;
  submenu?: SubmenuItem[]; // optional
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // ESC key closes menu
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
        setOpenSubmenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50 md:hidden" />

      {/* Menu */}
      <div
        ref={menuRef}
        className="fixed top-4 right-4 w-64 bg-white border border-blue-500 rounded-2xl shadow-lg z-50 md:hidden"
      >
        <div className="p-6 relative">

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-blue-700 cursor-pointer"
            onClick={() => { setOpenSubmenu(null); onClose(); }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Links */}
          <div className="mt-8 space-y-5">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              const hasSubmenu = link.submenu?.length && link.submenu.length > 0;

              return (
                <div key={link.label}>
                  {/* Main Link / Parent */}
                  <div
                    className={`flex justify-between items-center font-medium text-lg cursor-pointer transition ${isActive ? 'text-blue-600 font-bold' : 'text-black hover:text-blue-400'
                      }`}
                    onClick={() => {
                      if (hasSubmenu) {
                        setOpenSubmenu(openSubmenu === link.label ? null : link.label);
                      } else if (link.href) {
                        onClose();
                        router.push(link.href);
                      }
                    }}
                  >
                    {link.label}
                    {hasSubmenu && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${openSubmenu === link.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>

                  {/* Submenu */}
                  {hasSubmenu && openSubmenu === link.label && (
                    <div className="ml-4 mt-3 space-y-3">
                      {link.submenu?.map(sub => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => { setOpenSubmenu(null); onClose(); }}
                          className="block text-sm text-gray-600 hover:text-blue-600"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* CTA */}
            <button
  onClick={() => {
    window.open("https://www.linkedin.com/company/ozgoat/", "_blank");
    setOpenSubmenu(null);
    onClose();
  }}
  className="w-full flex items-center justify-center gap-2 bg-[#0A66C2] font-bold text-white px-6 py-2 rounded-lg hover:bg-[#004182] transition cursor-pointer mt-6"
>
  <Linkedin size={18} className="bg-white text-[#0A66C2] rounded-sm p-[2px]" />
  LinkedIn
</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;