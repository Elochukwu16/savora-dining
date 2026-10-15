import Link from "next/link";

export default function About() {
  return (
    <main className="bg-[#120807] text-white">

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden">

        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/video/PinGrab_1789570144700.mp4"
            type="video/mp4"
          />
        </video>

        {/* Lighter overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 md:px-12">

          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-orange-500">
            ABOUT SAVORA
          </p>

          <h1 className="font-serif text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">
            Our <span className="text-orange-500">Story</span>
          </h1>

        </div>
      </section>


      {/* ================= PHILOSOPHY ================= */}
      <section className="bg-[#120807] px-6 py-24 md:px-12 md:py-32">

        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          {/* Image */}
          <div className="group overflow-hidden">
            <img
              src="/images/food4.jpg"
              alt="Savora food"
              className="h-[480px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div>

            <p className="mb-4 text-sm font-medium tracking-[0.3em] text-orange-500">
              OUR PHILOSOPHY
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Food made with{" "}
              <span className="text-orange-500">
                purpose.
              </span>
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-gray-300">
              Savora was created from a simple belief:
              great food has the power to bring people
              together.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-gray-300">
              Our kitchen celebrates fresh ingredients,
              creative cooking and the traditions that make
              food meaningful.
            </p>

          </div>

        </div>
      </section>


      {/* ================= PROMISE ================= */}
      <section className="bg-[#1d0d0a] px-6 py-28 md:px-12 md:py-36">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-6 text-sm font-medium tracking-[0.3em] text-orange-500">
            OUR PROMISE
          </p>

          <h2 className="font-serif text-3xl leading-relaxed text-white sm:text-4xl md:text-5xl">
            &quot;Every guest deserves an unforgettable
            experience.&quot;
          </h2>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-amber-900 px-6 py-24 text-center md:px-12 md:py-32">

        <div className="mx-auto max-w-4xl">

          <p className="mb-5 text-sm tracking-[0.3em] text-orange-500">
            EXPERIENCE SAVORA
          </p>

          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Ready for your next dining experience?
          </h2>

          <Link
            href="/booking"
            className="mt-9 inline-block bg-red-600 px-8 py-4 text-sm font-medium text-white transition duration-300 hover:bg-orange-500"
          >
            Book Your Table
          </Link>

        </div>
      </section>

    </main>
  );
}