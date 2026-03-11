import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <div className="relative w-[200px] h-[70px] sm:w-[240px] sm:h-[80px] md:w-[280px] md:h-[90px] lg:w-[320px] lg:h-[100px]">
            <Image
              src="/pictures/HomePage/logo.png"
              alt="OZGOAT Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-10 text-center md:text-left">

          {/* Company Intro */}
          <div className="px-5">
            <div className="text-center">
              <h1 className="text-orange-500 pb-4">
                OZ<span className="text-blue-500">GOAT</span>
              </h1>
            </div>

            <p className="text-neutral-300 text-sm leading-relaxed">
              Strategy-led software development. We help businesses Build,
              Automate, and Scale using technology that actually works.
              Melbourne, Australia. Est. 2022.
            </p>
          </div>

          {/* Services (Same as Navbar) */}
          <div>
            <h4 className="font-heading text-orange-500 font-semibold mb-4">
              Services
            </h4>

            <ul className="space-y-2 text-sm">

              <li>
                <Link href="/services" className="hover:text-white transition">
                  All Services
                </Link>
              </li>

              <li>
                <Link
                  href="/services#automation"
                  className="hover:text-white transition"
                >
                  Business Process Automation
                </Link>
              </li>

              <li>
                <Link
                  href="/services#software"
                  className="hover:text-white transition"
                >
                  Software Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services#crm"
                  className="hover:text-white transition"
                >
                  CRM Integration
                </Link>
              </li>

              <li>
                <Link
                  href="/services#apps"
                  className="hover:text-white transition"
                >
                  Mobile & Web App Development
                </Link>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-orange-500 font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-2 text-sm">

              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/portfolio" className="hover:text-white transition">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-orange-500 font-semibold mb-4">
              Connect
            </h4>

            <div className="flex justify-center md:justify-start gap-5">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/ozgoat/"
                className="text-blue-500 hover:text-purple-500 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.75-2.2 3.6-2.2C19 8 21 10.2 21 14v10h-4v-8.9c0-2.1-.75-3.5-2.6-3.5-1.4 0-2.2.95-2.6 1.85-.15.35-.2.85-.2 1.35V24H8V8z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="text-blue-500 hover:text-purple-500 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11.63 9.88v-6.99H7.9V12h2.47V9.8c0-2.44 1.45-3.8 3.67-3.8 1.06 0 2.17.19 2.17.19v2.39H15c-1.21 0-1.59.75-1.59 1.52V12h2.7l-.43 2.89h-2.27v6.99A10 10 0 0022 12z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">

          <p className="text-sm text-neutral-400">
            © 2026 <span className="font-semibold text-white">OZGOAT</span>. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="text-sm hover:text-white transition">
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;