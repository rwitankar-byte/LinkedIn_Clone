import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import users from "../data/users.json";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import SkillBadge from "../components/SkillBadge";

export default function ProfilePage() {
  const { id } = useParams();
  const user = users.find((u) => u.id === id);
  const [connected, setConnected] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">User not found.</p>
        <Link
          to="/"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          ← Back to Feed
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ── Navbar ── */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-3">
          <svg className="w-8 h-8 text-blue-600" viewBox="0 0 34 34" fill="currentColor" aria-label="LinkedIn">
            <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5ZM7.5,11A2.5,2.5,0,1,0,5,8.5,2.5,2.5,0,0,0,7.5,11ZM29,19.28C29,14.37,26.07,13,23.31,13a4.65,4.65,0,0,0-4.1,2.24H19V13H14V29h5V20.57c0-2.17,1.17-3.41,2.94-3.41S24.5,18,24.5,20.34V29H29Z" />
          </svg>
          <span className="font-semibold text-gray-800 text-lg">LinkedIn</span>
          <Link to="/" className="ml-auto text-sm text-blue-600 hover:underline font-medium">
            ← Feed
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-6 flex flex-col gap-4">
        {/* ── Profile Card ── */}
        <section className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Cover Photo */}
          <div className="relative h-40 bg-gradient-to-r from-blue-400 to-indigo-600">
            {user.cover && (
              <img
                src={user.cover}
                alt="Cover"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Avatar + Info */}
          <div className="px-6 pb-5">
            <div className="relative -mt-12 mb-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
              />
            </div>
            <h1 className="text-xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-600 text-sm mt-0.5">{user.headline}</p>
            <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {user.location}
            </div>
            <p className="text-blue-600 text-sm mt-1 font-medium cursor-pointer hover:underline">
              {user.connections} connections
            </p>

            {/* Connect Button */}
            <div className="mt-4">
              <button
                id="connect-btn"
                onClick={() => setConnected((prev) => !prev)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                  connected
                    ? "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                }`}
              >
                {connected ? "✓ Connected" : "+ Connect"}
              </button>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        {user.about && (
          <section className="bg-white rounded-xl shadow-sm px-6 py-5">
            <h2 className="text-base font-bold text-gray-900 mb-2">About</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{user.about}</p>
          </section>
        )}

        {/* ── Experience ── */}
        {user.experience && user.experience.length > 0 && (
          <section className="bg-white rounded-xl shadow-sm px-6 py-5">
            <h2 className="text-base font-bold text-gray-900 mb-1">Experience</h2>
            <div>
              {user.experience.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </section>
        )}

        {/* ── Education ── */}
        {user.education && user.education.length > 0 && (
          <section className="bg-white rounded-xl shadow-sm px-6 py-5">
            <h2 className="text-base font-bold text-gray-900 mb-1">Education</h2>
            <div>
              {user.education.map((edu) => (
                <EducationCard key={edu.id} education={edu} />
              ))}
            </div>
          </section>
        )}

        {/* ── Skills ── */}
        {user.skills && user.skills.length > 0 && (
          <section className="bg-white rounded-xl shadow-sm px-6 py-5">
            <h2 className="text-base font-bold text-gray-900 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
