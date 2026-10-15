export default function Gallery() {
  const images = [
    {
      src: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      alt: "Savora restaurant interior",
    },
    {
      src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
      alt: "Fine dining dish",
    },
    {
      src: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      alt: "Beautiful restaurant meal",
    },
    {
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      alt: "Gourmet food",
    },
    {
      src: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
      alt: "Restaurant dish",
    },
    {
      src: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
      alt: "Fine dining experience",
    },
  ];

  return (
    <main className="bg-[#120807] text-white">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
          alt="Savora restaurant"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 md:px-12">
          <p className="mb-4 text-sm tracking-[0.3em] text-orange-500">
            SAVORA GALLERY
          </p>

          <h1 className="font-serif text-5xl font-semibold sm:text-6xl md:text-7xl">
            A feast for the <span className="text-orange-500">eyes.</span>
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#120807] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm tracking-[0.3em] text-orange-500">
              OUR GALLERY
            </p>

            <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl">
              Taste the experience.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden bg-[#1d0d0a]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}