import linkedinLogo from "../assets/linkedin-logo.svg";

const navItems = [
  { id: "feed", label: "Home", icon: "🏠" },
  { id: "jobs", label: "Jobs", icon: "💼" },
];

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded overflow-hidden bg-linkedin-500 flex items-center justify-center">
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </div>
          <div className="hidden sm:flex items-center bg-gray-100 px-3 py-1.5 rounded-md min-w-48">
            <span className="text-gray-400 text-sm mr-2">🔎</span>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder:text-gray-500"
            />
          </div>
        </div>

        <nav className="flex items-center gap-1 sm:gap-3">
          {navItems.map((item) => {
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm transition-colors ${
                  active
                    ? "text-linkedin-600 bg-linkedin-50 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => setCurrentPage("profile")}
            className={`px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm transition-colors ${
              currentPage === "profile"
                ? "text-linkedin-600 bg-linkedin-50 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            👤 Profile
          </button>
        </nav>
      </div>
    </header>
  );
}