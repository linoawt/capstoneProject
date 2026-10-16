// Global state
let planetsData = [];

// DOM Elements
const themeToggleBtn = document.getElementById("theme-toggle");
const themeText = document.getElementById("theme-text");
const themeIcon = document.getElementById("theme-icon");

const searchForm = document.getElementById("search-form");
const planetInput = document.getElementById("planet-input");
const searchError = document.getElementById("search-error");

const planetCard = document.getElementById("planet-card");
const errorCard = document.getElementById("error-card");

const planetImage = document.getElementById("planet-image");
const planetName = document.getElementById("planet-name");
const planetType = document.getElementById("planet-type");
const planetDescription = document.getElementById("planet-description");

const statGravity = document.getElementById("stat-gravity");
const statMass = document.getElementById("stat-mass");
const statPeriod = document.getElementById("stat-period");

const detailTemp = document.getElementById("detail-temp");
const detailMoons = document.getElementById("detail-moons");
const detailDiameter = document.getElementById("detail-diameter");
const detailDistance = document.getElementById("detail-distance");

/**
 * Theme Management (Persisted via localStorage)
 */
function initTheme() {
  const savedTheme = localStorage.getItem("planet-theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    themeText.textContent = "LIGHT";
    themeIcon.className = "fa-solid fa-sun";
    localStorage.setItem("planet-theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    themeText.textContent = "DARK";
    themeIcon.className = "fa-solid fa-moon";
    localStorage.setItem("planet-theme", "light");
  }
}

themeToggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-theme");
  applyTheme(isDark ? "light" : "dark");
});

/**
 * Fetch API with Promises
 */
function loadPlanetData() {
  fetch("planets.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      planetsData = data;
      // Default to Earth on initial load as shown in the mockup
      displayPlanet("Earth");
    })
    .catch((error) => {
      console.error("Failed to load planet data:", error);
    });
}

/**
 * Display Planet Details
 */
function displayPlanet(nameOrQuery) {
  if (!planetsData || planetsData.length === 0) return;

  const found = planetsData.find(
    (planet) =>
      planet.name.trim().toLowerCase() === nameOrQuery.trim().toLowerCase(),
  );

  if (found) {
    planetImage.src = found.image;
    planetImage.alt = `${found.name} avatar`;
    planetName.textContent = found.name;
    planetType.textContent = found.type;
    planetDescription.textContent = found.description;

    statGravity.textContent = found.gravity;
    statMass.textContent = found.mass;
    statPeriod.textContent = found.period;

    detailTemp.textContent = found.temperature;
    detailMoons.textContent = found.moons;
    detailDiameter.textContent = found.diameter.toLocaleString();
    detailDistance.textContent = found.distanceFromSun;

    // Toggle card visibility
    planetCard.classList.remove("hidden");
    errorCard.classList.add("hidden");
    searchError.classList.add("hidden");
  } else {
    // Show error card and search bar error
    planetCard.classList.add("hidden");
    errorCard.classList.remove("hidden");
    searchError.classList.remove("hidden");
  }
}

/**
 * Search Event Listeners
 */
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = planetInput.value.trim();
  if (!query) return;

  displayPlanet(query);
});

planetInput.addEventListener("input", () => {
  searchError.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadPlanetData();
});
