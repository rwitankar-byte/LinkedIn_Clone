// SkillBadge.jsx
//
// WHAT IT DOES:
// Shows one skill as a small blue pill/badge
//
// HOW TO USE IT:
// <SkillBadge skill="React" />
//
// WHERE IT'S USED:
// ProfilePage.jsx — inside the Skills section

function SkillBadge({ skill }) {
  return (
    <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full border border-blue-200">
      {skill}
    </span>
  );
}

export default SkillBadge;