export default function SkillBadge({ skill }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors duration-150 cursor-default">
      {skill}
    </span>
  );
}
