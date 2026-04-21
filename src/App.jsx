// App.jsx
//
// WHAT IT DOES:
// Controls which page to show using a simple useState.
// No React Router needed.
//
// HOW IT WORKS:
// - currentPage is a state variable
// - When user clicks a nav link, currentPage changes
// - Based on currentPage, we show a different page component

import { useState } from "react";
import Navbar from "./components/Navbar";
import FeedPage from "./pages/FeedPage";
import ProfilePage from "./pages/ProfilePage";
import JobsPage from "./pages/JobsPage";

function App() {

  // currentPage tells us which page to show
  // Default is "feed" so Feed page shows first
  const [currentPage, setCurrentPage] = useState("feed");

  // selectedUserId is used when clicking a profile
  // Default is 1 so it shows the first user
  const [selectedUserId, setSelectedUserId] = useState(1);

  // This function decides which page component to render
  function renderPage() {
    if (currentPage === "feed") {
      return <FeedPage setCurrentPage={setCurrentPage} setSelectedUserId={setSelectedUserId} />;
    }
    if (currentPage === "profile") {
      return <ProfilePage userId={selectedUserId} setCurrentPage={setCurrentPage} />;
    }
    if (currentPage === "jobs") {
      return <JobsPage />;
    }
  }

  return (
    <div>
      {/* Navbar gets setCurrentPage so clicking nav links changes the page */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Render whichever page is currently active */}
      {renderPage()}
    </div>
  );
}

export default App;