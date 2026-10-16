# Planet Explorer - Capstone Web Application

[![Netlify Status](https://api.netlify.com/api/v1/badges/f3868c3b-2bc3-481d-b6bc-a9371eca22c8/deploy-status)](https://app.netlify.com/projects/capstone-planetary/deploys)

A responsive Solar System explorer built with **semantic HTML5**, **modern CSS3**, and **vanilla JavaScript** using the **Fetch API**. This application fetches and displays planetary data, supports dark and light appearance modes with persistence, and features a comparative NASA planetary facts table.

---

## 🚀 Live Demo
- **Deployment URL**: [https://capstone-planetary.netlify.app](https://capstone-planetary.netlify.app)
- **Repository**: [https://github.com/linoawt/capstoneProject](https://github.com/linoawt/capstoneProject)

---

## 🛠️ Features & Requirements Implemented
1. **Semantic HTML5 Structure**:
   - Proper use of `<header>`, `<main>`, `<section>`, `<article>`, `<table>`, `<thead>`, `<tbody>`, and `<footer>`.
2. **Fetch API & Promises**:
   - Asynchronously loads planet data from `planets.json`.
   - Built-in fallback ensuring seamless offline/local file review.
   - Initial default view loads **Earth** as specified in the design mockup.
3. **Interactive Search & Error States**:
   - Case-insensitive search by planet name.
   - Inline `"No results"` warning inside the search container.
   - Dedicated centered `"No results found!"` error card.
4. **Theme Switcher (Dark & Light Mode)**:
   - Toggles between Dark and Light mode.
   - Dynamic icon (`<i class="fa-solid fa-moon"></i>` and `<i class="fa-solid fa-sun"></i>`) and button text (`DARK` / `LIGHT`).
   - Theme state persisted in browser `localStorage`.
5. **NASA Comparative Planetary Facts Table**:
   - Structured comparative table highlighting physical properties.
   - Categorized groupings using `rowspan` and `colspan` (Terrestrial Planets, Jovian Planets with Gas Giants & Ice Giants, and Dwarf Planets).
6. **Fully Responsive Design**:
   - Mobile, Tablet, and Desktop layouts honoring the provided Figma mockups.
   - Smooth hover, active, and focus states.

---

## 📁 Project Structure
```text
capstoneProject/
├── index.html        # Semantic HTML layout and templates
├── style.css         # CSS design system, CSS variables & media queries
├── script.js         # JavaScript Fetch API logic, search & theme toggle
├── planets.json      # Planet data source
└── README.md         # Project documentation & team guidelines
```

---

## 💻 Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/linoawt/capstoneProject.git
   cd capstoneProject
   ```

2. **Run locally using any static web server:**
   - **VS Code Live Server:** Right-click `index.html` and click **"Open with Live Server"**.
   - **Python:**
     ```bash
     python3 -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.
   - **Node.js (serve / npx http-server):**
     ```bash
     npx serve .
     ```

---

## 🌿 Git & Collaboration Workflow
1. **Branching Strategy:**
   - Always branch off `main`:
     ```bash
     git checkout -b feature/planet-search
     ```
2. **Pull Request Protocol:**
   - Work should be submitted through Pull Requests (PRs).
   - Review requirements: The author who opens a PR must not be the one who reviews and merges it.
   - Peer reviews ensure code quality, semantic compliance, and design fidelity before merging into `main`.

---

## 👥 Contributors & Credits
- **Team Lead:** Azibapu Success ([GitHub Profile](https://github.com/linoawt))
- **Design:** [Amaka N](https://amakandukwu.com)
- **Institution:** [TSAcademy Online](https://tsacademyonline.com/)
