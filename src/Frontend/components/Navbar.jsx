import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      {/* LOGO */}
      <div className="text-2xl font-semibold tracking-tight">
        PetMatch
      </div>

      {/* DESKTOP NAV */}
      <nav className="hidden items-center gap-8 md:flex">
        <Link
          to="/"
          className="text-sm text-slate-700 hover:text-slate-900"
        >
          Home
        </Link>

        <Link
          to="/find"
          className="text-sm text-slate-700 hover:text-slate-900"
        >
          Find a Pet
        </Link>

        <Link
          to="/about"
          className="text-sm text-slate-700 hover:text-slate-900"
        >
          About
        </Link>

        <Link
          to="/login"
          className="text-sm text-slate-700 hover:text-slate-900"
        >
          Log in
        </Link>

        <Link
          to="/signup"
          className="rounded-full bg-violet-700 px-5 py-2 text-sm font-medium text-white hover:bg-violet-800"
        >
          Sign up
        </Link>
      </nav>

      {/* MOBILE MENU BUTTON */}
      <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm md:hidden">
        Menu
      </button>
    </header>
  );
}
        