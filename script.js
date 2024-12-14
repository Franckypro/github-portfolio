async function fetchGitHubProjects() {
  const username = "Franckypro";
  const projectsContainer = document.getElementById("github-projects");

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    repos.forEach(repo => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("details-container", "color-container");
      projectElement.innerHTML = `
        <h2>${repo.name}</h2>
        <p>${repo.description || "Aucune description disponible."}</p>
        <div class="btn-container">
          <button class="btn btn-color-2 project-btn" onclick="window.open('${repo.html_url}')">
            Voir le Projet
          </button>
        </div>
      `;
      projectsContainer.appendChild(projectElement);
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des projets GitHub :", error);
    projectsContainer.innerHTML = "<p>Impossible de charger les projets.</p>";
  }
}

document.addEventListener("DOMContentLoaded", fetchGitHubProjects);
