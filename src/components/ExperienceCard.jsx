export default function ExperienceCard({ experience }) {
  return (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
      {/* Company icon placeholder */}
      <div className="w-12 h-12 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 text-sm">{experience.role}</h4>
        <p className="text-gray-600 text-sm">{experience.company}</p>
        <p className="text-gray-400 text-xs mt-0.5">{experience.duration}</p>
        {experience.description && (
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">{experience.description}</p>
        )}
      </div>
    </div>
  );
}
