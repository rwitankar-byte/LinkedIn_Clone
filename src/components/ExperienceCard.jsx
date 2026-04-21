// ExperienceCard.jsx
//
// WHAT IT DOES:
// Shows one job experience entry — company, role, dates, description
//
// HOW TO USE IT:
// <ExperienceCard experience={expObject} />
//
// WHERE IT'S USED:
// ProfilePage.jsx — inside the Experience section
// It gets called once for EACH job in the experience array using .map()

function ExperienceCard({ experience }) {
  return (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-b-0">

      {/* Company logo — just shows first letter of company name */}
      <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
        <span className="text-gray-600 text-lg font-bold">
          {experience.company.charAt(0)}
        </span>
      </div>

      {/* Job details */}
      <div>
        <h3 className="font-semibold text-gray-900">{experience.role}</h3>
        <p className="text-gray-700 text-sm">{experience.company}</p>
        <p className="text-gray-500 text-sm">{experience.duration} · {experience.location}</p>
        <p className="text-gray-600 text-sm mt-1">{experience.description}</p>
      </div>

    </div>
  );
}

export default ExperienceCard;