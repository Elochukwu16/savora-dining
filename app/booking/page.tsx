"use client";

import { FormEvent, useState } from "react";

export default function Booking() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    alert(
      `Thank you ${name}! Your table request for ${date} has been received.`
    );

    e.currentTarget.reset();
    setName("");
    setDate("");
  };

  return (
    <main className="bg-[#120807] text-white">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
          alt="Savora restaurant dining"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 md:px-12">
          <p className="mb-4 text-sm tracking-[0.3em] text-orange-500">
            RESERVATIONS
          </p>

          <h1 className="font-serif text-5xl font-semibold sm:text-6xl md:text-7xl">
            Reserve your{" "}
            <span className="text-orange-500">table.</span>
          </h1>
        </div>
      </section>

      {/* Booking Form */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm tracking-[0.3em] text-orange-500">
              BOOKING
            </p>

            <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl">
              Make a Reservation
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-5 md:grid-cols-2"
          >
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-white/10 bg-[#1d0d0a] px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full border border-white/10 bg-[#1d0d0a] px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full border border-white/10 bg-[#1d0d0a] px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500"
            />

            {/* Date */}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full border border-white/10 bg-[#1d0d0a] px-5 py-4 text-white outline-none transition focus:border-orange-500"
            />

            {/* Guests */}
            <select
              defaultValue=""
              className="w-full border border-white/10 bg-[#1d0d0a] px-5 py-4 text-gray-300 outline-none transition focus:border-orange-500"
            >
              <option value="" disabled>
                Number of Guests
              </option>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
              <option>6+ Guests</option>
            </select>

            {/* Time */}
            <select
              defaultValue=""
              className="w-full border border-white/10 bg-[#1d0d0a] px-5 py-4 text-gray-300 outline-none transition focus:border-orange-500"
            >
              <option value="" disabled>
                Preferred Time
              </option>
              <option>12:00 PM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
              <option>9:00 PM</option>
            </select>

            {/* Special Request */}
            <textarea
              placeholder="Special Request"
              rows={6}
              className="w-full resize-none border border-white/10 bg-[#1d0d0a] px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500 md:col-span-2"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="bg-red-600 px-7 py-4 text-sm font-medium text-white transition duration-300 hover:bg-orange-500 md:col-span-2"
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}