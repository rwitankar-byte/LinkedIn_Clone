// JobsPage.jsx
//
// WHAT IT DOES:
// Shows a list of job listings from jobs.json
// Has a search filter bar — filters by job title or company name
// Renders one <JobCard /> per job using .map()
//
// REACT CONCEPTS USED:
// - useState       : search input value
// - .filter()      : filters jobs based on search query
// - .map()         : renders one JobCard per filtered job
// - Props          : passes each job object down to JobCard

import { useState } from "react";
import jobs from "../data/jobs.json";
import JobCard from "../components/JobCard";

function JobsPage() {
  // searchQuery holds whatever the user types in the search bar
  const [searchQuery, setSearchQuery] = useState("");

  // Filter jobs where title OR company matches the search query (case-insensitive)
  const filteredJobs = jobs.filter((job) => {
    const query = searchQuery.toLowerCase();
    return (
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen pt-16 pb-10">
      <div className="max-w-3xl mx-auto px-4">

        {/* Page header */}
        <div className="mt-6 mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Jobs</h1>
          <p className="text-sm text-gray-500 mt-1">
            {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {/* Search bar */}
        <div className="relative mb-5">
          {/* Search icon */}
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search by title, company, or skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {/* Clear button */}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* Job cards grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          // Empty state
          <div className="text-center mt-20 text-gray-400">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-lg font-medium text-gray-600">No jobs found</p>
            <p className="text-sm mt-1">Try searching for a different title or skill</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-blue-600 text-sm hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default JobsPage;