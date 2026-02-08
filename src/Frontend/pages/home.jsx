import bgPattern from "../assets/background dog.jpg";
import shelterImg from "../assets/dog food.jpg";
import featuredDog from "../assets/small dog.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO (pattern background) */}
      <section
        className="relative"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "420px",
        }}
      >
        {/* soft overlay so pattern is subtle */}
        <div className="absolute inset-0 bg-white/80" />

        <div className="relative mx-auto max-w-6xl px-4 pt-6 pb-16">
          {/* ✅ NAVBAR */}
          <Navbar />

          {/* HERO CONTENT */}
          <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center text-center">
            <img
              src={shelterImg}
              alt="Adoption shelter scene"
              className="w-full max-w-3xl rounded-2xl"
            />

            <h1 className="mt-10 text-4xl font-semibold tracking-tight md:text-5xl">
              Find a loving pet that&apos;s right for you
            </h1>

            <p className="mt-4 max-w-2xl text-base text-slate-700 md:text-lg">
              Helping pets find homes— and people find companions.
            </p>

            <button className="mt-8 rounded-full bg-violet-700 px-10 py-4 text-base font-semibold text-white shadow-sm hover:bg-violet-800">
              Meet them
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED FRIEND SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Meet today&apos;s <br className="hidden md:block" />
              featured friend
            </h2>

            <p className="mt-4 max-w-md text-base text-slate-700">
              Calm, friendly, and ready for a home.
            </p>

            <Link
              to="/find"
              className="mt-6 inline-block text-base font-medium text-violet-700 hover:text-violet-800"
            >
              Browse all pets
            </Link>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={featuredDog}
              alt="Featured dog"
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-4 text-sm text-slate-500 md:flex-row">
          <span>© 2026 PetMatch</span>
          <span className="hidden md:inline">·</span>
          <a href="#" className="hover:text-slate-700">About</a>
          <span className="hidden md:inline">·</span>
          <a href="#" className="hover:text-slate-700">Contact</a>
        </div>
      </footer>
    </div>
  );
}
