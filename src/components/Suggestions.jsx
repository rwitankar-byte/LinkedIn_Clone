import { useState } from "react";
import users from "../data/users.json";

export default function Suggestions() {
  const [followedIds, setFollowedIds] = useState([]);
  const suggestions = users.slice(0, 4);

  function toggleFollow(id) {
    setFollowedIds((prev) =>
      prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]
    );
  }

  return (
    <aside className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">People you may know</h3>

      <div className="space-y-3">
        {suggestions.map((person) => {
          const followed = followedIds.includes(person.id);
          return (
            <div key={person.id} className="flex items-start gap-3">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                <p className="text-xs text-gray-500 line-clamp-2">{person.headline}</p>
                <button
                  onClick={() => toggleFollow(person.id)}
                  className={`mt-2 px-3 py-1 rounded-full text-xs font-semibold border ${
                    followed
                      ? "text-gray-600 border-gray-300 bg-gray-100"
                      : "text-linkedin-600 border-linkedin-500 hover:bg-linkedin-50"
                  }`}
                >
                  {followed ? "Following" : "+ Follow"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}