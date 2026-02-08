import bg from "../assets/FindApetBackground.png";
import Navbar from "../components/Navbar";

// temporary fake pets (replace later with backend)
const PETS = [
  { id: 1, name: "Bella", age: "1 Year", tags: ["Budget", "Energy"] },
  { id: 2, name: "Buddy", age: "1 Year", tags: ["Friendly", "Energy"] },
  { id: 3, name: "Daisy", age: "3 Year", tags: ["Shoes", "Goods"] },
  { id: 4, name: "Daisy", age: "3 Year", tags: ["Friendly", "Energy"] },
];

export default function FindAPet() {
  return (
    <main
      className="relative min-h-screen w-full bg-slate-50"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "420px",
      }}
    >
      {/* soft wash so bg is subtle */}
      <div className="absolute inset-0 bg-white/65" />

      {/* ✅ NAVBAR */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex items-start justify-center p-10">
        {/* Outer App Frame */}
        <div className="w-full max-w-6xl rounded-[32px] border-2 border-slate-200 bg-white/70 shadow-xl backdrop-blur p-6">
          {/* Top Bar */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                ♥
              </span>
              <h1 className="text-lg font-semibold text-slate-900">
                Find a Pet
              </h1>
            </div>

            {/* Search */}
            <div className="flex-1">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <span className="text-slate-400">🔎</span>
                <input
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  placeholder="Search by name or breed..."
                />
              </div>
            </div>

            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              Sort
            </button>

            <button className="text-sm font-medium text-slate-500 hover:text-slate-700">
              Reset
            </button>
          </div>

          {/* Rest of your page stays EXACTLY the same */}
          {/* Filters + Grid */}
        </div>
      </div>
    </main>
  );
}
