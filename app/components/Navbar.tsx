"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#120807]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* LOGO */}
        <Link
          href="/"
          className="flex flex-col leading-none"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-serif text-3xl font-bold tracking-wide text-white">
            SAVORA
          </span>

          <span className="mt-1 text-[9px] tracking-[0.35em] text-orange-500">
            RESTAURANT
          </span>
        </Link>


        {/* DESKTOP NAVIGATION */}
        <ul className="hidden items-center gap-8 md:flex">

          <li>
            <Link
              href="/"
              className="text-sm text-white transition hover:text-orange-500"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-sm text-white transition hover:text-orange-500"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/gallery"
              className="text-sm text-white transition hover:text-orange-500"
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link
              href="/booking"
              className="text-sm text-white transition hover:text-orange-500"
            >
              Booking
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-sm text-white transition hover:text-orange-500"
            >
              Contact
            </Link>
          </li>

        </ul>


        {/* BOOK TABLE BUTTON */}
        <Link
          href="/booking"
          className="hidden border border-orange-500 px-5 py-3 text-sm text-white transition hover:bg-orange-500 md:block"
        >
          Book a Table
        </Link>


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <span className="h-0.5 w-7 bg-white"></span>
          <span className="h-0.5 w-7 bg-white"></span>
          <span className="h-0.5 w-7 bg-white"></span>
        </button>

      </nav>


      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#120807] md:hidden">

          <ul className="flex flex-col px-6 py-5">

            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-4 text-white hover:text-orange-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-4 text-white hover:text-orange-500"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-4 text-white hover:text-orange-500"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/booking"
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-4 text-white hover:text-orange-500"
              >
                Booking
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block py-4 text-white hover:text-orange-500"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>
      )}

    </header>
  );
}