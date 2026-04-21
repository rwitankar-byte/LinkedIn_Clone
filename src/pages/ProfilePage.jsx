// ProfilePage.jsx
//
// WHAT IT DOES:
// Shows a user's full profile.
// Receives userId as a prop from App.jsx
// Finds the matching user from users.json
// Renders their info in clean white cards
//
// PROPS RECEIVED:
// - userId       : which user to show (1, 2, or 3)
// - setCurrentPage : to go back to feed when back button clicked

import { useState } from "react";
import users from "../data/users.json";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import SkillBadge from "../components/SkillBadge";

function ProfilePage({ userId, setCurrentPage }) {

  // Find the user from the JSON array whose id matches userId
  const user = users.find((u) => String(u.id) === String(userId));

  // Connect button toggle — false = not connected, true = connected
  const [isConnected, setIsConnected] = useState(false);

  // If no user found, show error
  if (!user) {
    return (
      <div className="text-center mt-20 text-gray-500">
        <p className="text-xl">User not found.</p>
        <button
          onClick={() => setCurrentPage("feed")}
          className="text-blue-600 hover:underline mt-2"
        >
          ← Back to Feed
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pt-16 pb-10">
      <div className="max-w-2xl mx-auto px-4 space-y-4">

        {/* Back button */}
        <button
          onClick={() => setCurrentPage("feed")}
          className="text-blue-600 text-sm hover:underline"
        >
          ← Back to Feed
        </button>

        {/* ── CARD 1: Header ── */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <img src={user.cover} alt="cover" className="w-full h-32 object-cover" />

          <div className="px-6 pb-5">
            <div className="flex justify-between items-end -mt-10 mb-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />

              <div className="flex gap-2 mt-12">
                <button
                  onClick={() => setIsConnected(!isConnected)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                    isConnected
                      ? "bg-white text-gray-700 border-gray-400"
                      : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isConnected ? "✓ Connected" : "Connect"}
                </button>
                <button className="px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-600 text-blue-600 hover:bg-blue-50">
                  Message
                </button>
              </div>
            </div>

            <h1 className="text-xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-700 text-sm mt-0.5">{user.headline}</p>
            <p className="text-gray-500 text-sm mt-1">
              📍 {user.location} &nbsp;·&nbsp;
              <span className="text-blue-600 font-medium">{user.connections} connections</span>
            </p>
          </div>
        </div>

        {/* ── CARD 2: About ── */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">About</h2>
          <p className="text-gray-700 text-sm leading-relaxed">{user.about}</p>
        </div>

        {/* ── CARD 3: Experience ── */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Experience</h2>
          {user.experience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>

        {/* ── CARD 4: Education ── */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Education</h2>
          {user.education.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>

        {/* ── CARD 5: Skills ── */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;