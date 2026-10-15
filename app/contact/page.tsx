import Link from "next/link";

export default function Contact() {
  return (
    <main className="bg-[#120807] text-white">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
          alt="Restaurant"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 md:px-12">
          <p className="mb-4 text-sm tracking-[0.3em] text-orange-500">
            GET IN TOUCH
          </p>

          <h1 className="font-serif text-5xl font-semibold sm:text-6xl md:text-7xl">
            Visit <span className="text-orange-500">us.</span>
          </h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-[#120807] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm tracking-[0.3em] text-orange-500">
              CONTACT
            </p>

            <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl">
              We&apos;d love to hear from you.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Address */}
            <div className="border border-white/10 bg-[#1d0d0a] p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-orange-500">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-orange-500 text-sm text-orange-500">
                01
              </div>

              <h3 className="font-serif text-2xl text-white">
                Address
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                12 Independence Avenue
                <br />
                Enugu, Nigeria
              </p>
            </div>

            {/* Phone */}
            <div className="border border-white/10 bg-[#1d0d0a] p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-orange-500">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-orange-500 text-sm text-orange-500">
                02
              </div>

              <h3 className="font-serif text-2xl text-white">
                Phone
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                +234 800 123 4567
              </p>
            </div>

            {/* Opening Hours */}
            <div className="border border-white/10 bg-[#1d0d0a] p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-orange-500">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-orange-500 text-sm text-orange-500">
                03
              </div>

              <h3 className="font-serif text-2xl text-white">
                Opening Hours
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Monday – Sunday
                <br />
                12:00 PM – 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1d0d0a] px-6 py-24 text-center md:px-12">
        <p className="mb-5 text-sm tracking-[0.3em] text-orange-500">
          CONTACT US
        </p>

        <h2 className="mx-auto max-w-4xl font-serif text-3xl leading-relaxed text-white md:text-5xl">
          Ready for a memorable dining experience?
        </h2>

        <Link
          href="/booking"
          className="mt-8 inline-block bg-red-600 px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-orange-500"
        >
          Book Your Table
        </Link>
      </section>
    </main>
  );
}