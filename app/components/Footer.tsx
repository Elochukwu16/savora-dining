import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#120807] text-white">
      {/* Footer Content */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 md:px-12">
        
        {/* Logo */}
        <div>
          <Link href="/" className="inline-flex flex-col leading-none">
            <span className="font-serif text-3xl font-bold tracking-wide">
              SAVORA
            </span>

            <span className="mt-1 text-[9px] tracking-[0.35em] text-orange-500">
              RESTAURANT
            </span>
          </Link>

          <p className="mt-5 text-gray-400">
            Fine dining, unforgettable moments.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="mb-5 font-serif text-xl text-white">
            Explore
          </h4>

          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-gray-400 transition hover:text-orange-500"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-400 transition hover:text-orange-500"
            >
              About
            </Link>

            <Link
              href="/gallery"
              className="text-gray-400 transition hover:text-orange-500"
            >
              Gallery
            </Link>

            <Link
              href="/booking"
              className="text-gray-400 transition hover:text-orange-500"
            >
              Booking
            </Link>

            <Link
              href="/contact"
              className="text-gray-400 transition hover:text-orange-500"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-5 font-serif text-xl text-white">
            Contact
          </h4>

          <div className="space-y-3 text-gray-400">
            <p>12 Independence Avenue</p>
            <p>Enugu, Nigeria</p>
            <p>+234 800 123 4567</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-gray-500">
        © 2026 Savora Restaurant. All rights reserved.
      </div>
    </footer>
  );
}