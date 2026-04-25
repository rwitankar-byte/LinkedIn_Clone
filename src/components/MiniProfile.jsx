import users from "../data/users.json";

export default function MiniProfile({ setCurrentPage, setSelectedUserId }) {
  const user = users[0];

  return (
    <aside className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <img src={user.cover} alt="cover" className="h-16 w-full object-cover" />
      <div className="px-4 pb-4">
        <div className="-mt-8 mb-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full border-2 border-white object-cover"
          />
        </div>
        <h3 className="text-sm font-semibold text-gray-900">{user.name}</h3>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{user.headline}</p>
        <p className="text-xs text-gray-400 mt-2">{user.connections} connections</p>

        <button
          onClick={() => {
            setSelectedUserId(user.id);
            setCurrentPage("profile");
          }}
          className="mt-3 w-full text-sm font-semibold text-linkedin-600 border border-linkedin-500 rounded-full py-1.5 hover:bg-linkedin-50"
        >
          View profile
        </button>
      </div>
    </aside>
  );
}