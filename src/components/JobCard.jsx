// JobCard.jsx
//
// WHAT IT DOES:
// Shows one job listing card — company, role, location, salary, tags
// Has a Save toggle button (saved / not saved)
//
// HOW TO USE IT:
// <JobCard job={jobObject} />
//
// WHERE IT'S USED:
// JobsPage.jsx — rendered once per job using .map()

import { useState } from "react";

function JobCard({ job }) {
  // Save toggle — false = not saved, true = saved
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
      
      {/* Top row: logo + title + save button */}
      <div className="flex items-start justify-between gap-3">
        
        {/* Company logo (letter avatar) */}
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0 ${job.logoColor}`}>
          {job.logo}
        </div>

        {/* Job title + company */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-base leading-tight">{job.title}</h3>
          <p className="text-gray-600 text-sm mt-0.5">{job.company}</p>
        </div>

        {/* Save button */}
        <button
          onClick={() => setIsSaved(!isSaved)}
          title={isSaved ? "Unsave job" : "Save job"}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isSaved
              ? "bg-blue-100 text-blue-600"
              : "bg-gray-100 text-gray-400 hover:bg-gray-200"
          }`}
        >
          {/* Bookmark icon */}
          <svg className="w-4 h-4" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      {/* Location + type + level */}
      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 text-sm text-gray-500">
        <span>📍 {job.location}</span>
        <span>· {job.type}</span>
        <span>· {job.level}</span>
      </div>

      {/* Salary + posted */}
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm font-medium text-green-700">{job.salary}</span>
        <span className="text-xs text-gray-400">{job.posted}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-2">
        {job.description}
      </p>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Apply button */}
      <button className="mt-4 w-full py-2 rounded-full text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
        Easy Apply
      </button>

    </div>
  );
}

export default JobCard;