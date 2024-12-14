// Remplacez par votre nom d'utilisateur GitHub
const GITHUB_USERNAME = "Franckypro";

// Fonction pour récupérer les projets GitHub
async function fetchGitHubProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
        if (!response.ok) throw new Error("Erreur lors du chargement des projets.");
        const projects = await response.json();

        displayProjects(projects);
    } catch (error) {
        document.getElementById("project-list").innerHTML = `<p>${error.message}</p>`;
    }
}

// Fonction pour afficher les projets dans le DOM
function displayProjects(projects) {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = ""; // Effacer le contenu précédent

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.className = "project";

        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description || "Aucune description disponible."}</p>
            <a href="${project.html_url}" target="_blank">Voir le projet</a>
        `;

        projectList.appendChild(projectElement);
    });
}

// Charger les projets au chargement de la page
window.addEventListener("DOMContentLoaded", fetchGitHubProjects);
