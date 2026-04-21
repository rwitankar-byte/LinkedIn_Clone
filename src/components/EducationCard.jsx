// EducationCard.jsx
//
// WHAT IT DOES:
// Shows one education entry — school name, degree, duration
//
// HOW TO USE IT:
// <EducationCard education={eduObject} />
//
// WHERE IT'S USED:
// ProfilePage.jsx — inside the Education section
// It gets called once for EACH entry in the education array using .map()

function EducationCard({ education }) {
  return (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-b-0">
      <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
        <span className="text-2xl">🎓</span>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{education.school}</h3>
        <p className="text-gray-700 text-sm">{education.degree}</p>
        <p className="text-gray-500 text-sm">{education.years || education.duration}</p>
      </div>
    </div>
  );
}

export default EducationCard;