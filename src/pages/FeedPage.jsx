import posts from "../data/posts.json";
import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";
import MiniProfile from "../components/MiniProfile";
import Suggestions from "../components/Suggestions";

export default function FeedPage({ setCurrentPage, setSelectedUserId }) {
  return (
    <div className="bg-gray-100 min-h-screen pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="hidden lg:block lg:col-span-3 sticky top-20">
          <MiniProfile
            setCurrentPage={setCurrentPage}
            setSelectedUserId={setSelectedUserId}
          />
        </div>

        <main className="lg:col-span-6">
          <CreatePost />
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </main>

        <div className="hidden lg:block lg:col-span-3 sticky top-20">
          <Suggestions />
        </div>
      </div>
    </div>
  );
}