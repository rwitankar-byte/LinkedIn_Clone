# LinkedIn Clone

A frontend clone of LinkedIn built with React, React Router v6, and Tailwind CSS as a WAP Group Project.

---

## 🔗 Links

| | |
|---|---|
| 🚀 Live Demo | *(paste Vercel URL here)* |
| 🐙 GitHub Repo | https://github.com/rwitankar-byte/LinkedIn_Clone |
| 🎥 Presentation Video | *(paste video link here)* |

---

## 👥 Team

| Name | Branch | Responsibility |
|---|---|---|
| Ayush | `member1-feed` | Navbar, Feed Page, MiniProfile, Suggestions |
| Kunal | `member2-posts` | PostCard, CreatePost, posts.json |
| Rwitankar | `Rwitankar` | Profile Page, ExperienceCard, EducationCard, SkillBadge, users.json |

---

## ✨ Features

- Browse posts on the Feed with like/unlike toggle
- Create new posts via the post input box
- View detailed user Profile with experience, education, and skills
- Connect button toggle on profile page
- Navigate between pages using React Router
- Fully responsive layout with Tailwind CSS
- Static JSON data — no backend required

---

## 🛠️ Tech Stack

| Technology | Use |
|---|---|
| React 19 + Vite 8 | Frontend framework & build tool |
| React Router v6 | Client-side routing |
| Tailwind CSS (Vite plugin) | Styling & responsiveness |
| Static JSON | Mock data for posts and users |
| Vercel | Deployment |

---

## 📁 Project Structure

```
linkedin-clone/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── PostCard.jsx
│   │   ├── CreatePost.jsx
│   │   ├── MiniProfile.jsx
│   │   ├── Suggestions.jsx
│   │   ├── ExperienceCard.jsx
│   │   ├── EducationCard.jsx
│   │   └── SkillBadge.jsx
│   ├── pages/
│   │   ├── FeedPage.jsx
│   │   └── ProfilePage.jsx
│   ├── context/
│   │   └── UserContext.jsx
│   ├── data/
│   │   ├── posts.json
│   │   └── users.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚛️ React Concepts Used

| Concept | Where |
|---|---|
| `useState` | Like toggle, Connect button, Create post |
| `useContext` | Logged-in user data via UserContext |
| `useParams` | Dynamic `/profile/:id` route |
| `React Router v6` | `/feed` and `/profile/:id` pages |
| Props | PostCard, ExperienceCard, SkillBadge |
| Component reuse | Cards reused across pages |
| Array `.map()` | Rendering posts, skills, experience lists |

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/rwitankar-byte/LinkedIn_Clone.git

# 2. Move into the project
cd LinkedIn_Clone

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📄 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Redirect | Redirects to `/feed` |
| `/feed` | Feed Page | Posts feed with like and create post |
| `/profile/:id` | Profile Page | User profile with experience, education, skills |

---

## ☁️ Deployment (Vercel)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Set **Build Command:** `npm run build`
5. Set **Output Directory:** `dist`
6. Click **Deploy**

---

## 📸 Screenshots

*(Add screenshots here after UI is complete)*

---

## 📝 Acknowledgements

- UI inspired by [LinkedIn](https://linkedin.com)
- Built as WAP Group Project — Academic Year 2025–26
- Deployed on Vercel