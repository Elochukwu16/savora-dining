import Link from "next/link";

export default function Home() {
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
          <source src="/video/video2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 md:px-12">
          <p className="mb-4 text-sm tracking-[0.3em] text-orange-500">
            WELCOME TO SAVORA
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">
            Taste the art of{" "}
            <span className="text-orange-500">fine dining.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
            Exceptional ingredients, unforgettable flavors and an
            atmosphere created for beautiful moments.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="bg-red-600 px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-orange-500"
            >
              Reserve a Table
            </Link>

            <Link
              href="/gallery"
              className="border border-orange-500 px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-orange-500"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-[#120807] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div className="overflow-hidden">
            <img
              src="/images/food1.jpg"
              alt="Restaurant interior"
              className="h-[450px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div>
            <p className="mb-4 text-sm tracking-[0.3em] text-orange-500">
              OUR STORY
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Where passion meets{" "}
              <span className="text-orange-500">the plate.</span>
            </h2>

            <p className="mt-6 leading-7 text-gray-300">
              At Savora, we believe dining should be more than
              simply eating. It should be an experience that
              engages every sense.
            </p>

            <p className="mt-4 leading-7 text-gray-300">
              Our chefs combine traditional techniques with
              modern creativity to create dishes that are
              beautiful, memorable and full of flavor.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-block border-b border-orange-500 pb-2 text-sm font-medium transition hover:text-orange-500"
            >
              Discover Our Story →
            </Link>
          </div>

        </div>
      </section>

      {/* ================= SIGNATURE DISHES ================= */}
      <section className="bg-[#1d0d0a] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="mb-3 text-sm tracking-[0.3em] text-orange-500">
              FROM OUR KITCHEN
            </p>

            <h2 className="font-serif text-4xl font-semibold md:text-5xl">
              Our Signature Dishes
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              A selection of dishes carefully prepared by our chefs.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">

            {/* Dish 1 */}
            <div className="group overflow-hidden border border-white/10 bg-[#120807] transition duration-300 hover:-translate-y-2 hover:border-orange-500">

              <div className="h-[300px] overflow-hidden">
                <img
                  src="/images/food1.jpg"
                  alt="Truffle Pasta"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <h3 className="font-serif text-2xl">
                  Truffle Pasta
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  Fresh pasta, parmesan and black truffle.
                </p>

                <p className="mt-5 text-lg font-medium text-orange-500">
                  ₦12,500
                </p>
              </div>

            </div>

            {/* Dish 2 */}
            <div className="group overflow-hidden border border-white/10 bg-[#120807] transition duration-300 hover:-translate-y-2 hover:border-orange-500">

              <div className="h-[300px] overflow-hidden">
                <img
                  src="/images/food2.jpg"
                  alt="Golden Pancakes"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <h3 className="font-serif text-2xl">
                  Golden Pancakes
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  Fluffy pancakes with berries and honey.
                </p>

                <p className="mt-5 text-lg font-medium text-orange-500">
                  ₦8,500
                </p>
              </div>

            </div>

            {/* Dish 3 */}
            <div className="group overflow-hidden border border-white/10 bg-[#120807] transition duration-300 hover:-translate-y-2 hover:border-orange-500">

              <div className="h-[300px] overflow-hidden">
                <img
                  src="/images/food3.jpg"
                  alt="Chef's Special"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <h3 className="font-serif text-2xl">
                  Chef&apos;s Special
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  A seasonal creation from our kitchen.
                </p>

                <p className="mt-5 text-lg font-medium text-orange-500">
                  ₦18,000
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= SAVORA EXPERIENCE ================= */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden">

        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/video3.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center md:px-12">

          <p className="mb-5 text-sm tracking-[0.3em] text-orange-500">
            THE SAVORA EXPERIENCE
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            More than a meal.
            <br />
            <span className="text-orange-500">
              It&apos;s a memory.
            </span>
          </h2>

          <Link
            href="/booking"
            className="mt-8 inline-block bg-red-600 px-7 py-3 text-sm font-medium transition duration-300 hover:bg-orange-500"
          >
            Experience Savora
          </Link>

        </div>
      </section>

      {/* ================= WHY SAVORA ================= */}
      <section className="bg-[#120807] px-6 py-20 md:px-12 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="mb-3 text-sm tracking-[0.3em] text-orange-500">
              WHY SAVORA
            </p>

            <h2 className="font-serif text-4xl font-semibold md:text-5xl">
              Made with passion
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Feature 1 */}
            <div className="border border-white/10 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-orange-500">

              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-orange-500 text-sm text-orange-500">
                01
              </div>

              <h3 className="font-serif text-2xl">
                Fresh Ingredients
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                We carefully select fresh and quality
                ingredients for every dish.
              </p>

            </div>

            {/* Feature 2 */}
            <div className="border border-white/10 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-orange-500">

              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-orange-500 text-sm text-orange-500">
                02
              </div>

              <h3 className="font-serif text-2xl">
                Expert Chefs
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Our chefs bring creativity and experience
                to every plate.
              </p>

            </div>

            {/* Feature 3 */}
            <div className="border border-white/10 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-orange-500">

              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-orange-500 text-sm text-orange-500">
                03
              </div>

              <h3 className="font-serif text-2xl">
                Beautiful Atmosphere
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Enjoy your meal in an elegant and welcoming
                environment.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="bg-[#1d0d0a] px-6 py-24 text-center md:px-12">

        <div className="mx-auto max-w-4xl">

          <p className="mb-5 text-sm tracking-[0.3em] text-orange-500">
            GUEST EXPERIENCE
          </p>

          <h2 className="font-serif text-3xl leading-relaxed md:text-5xl">
            &quot;Every dish tells a story,
            and Savora tells it beautifully.&quot;
          </h2>

          <p className="mt-6 text-gray-400">
            — Daniel Okafor
          </p>

        </div>

      </section>

    </main>
  );
}