// Add any JavaScript functionalities if necessary
// For example, handling the "CONTACT ME" button click or project actions
  

  document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.querySelector('nav button');
    const modal = document.getElementById('contactModal');

    contactButton.addEventListener('click', function () {
      modal.classList.remove('hidden');
    });
  });

  const username = "tareqnidal"; // your GitHub username
  const projectGrid = document.getElementById("projectGrid");

  fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    .then(response => response.json())
    .then(repos => {
      repos.slice(0, 6).forEach(repo => {
        const card = document.createElement('div');
        card.className = "relative group overflow-hidden rounded-lg aspect-video bg-gray-800";

        card.innerHTML = `
          <div class="w-full h-full flex flex-col justify-center items-center p-4 text-center text-white">
            <h4 class="text-lg font-semibold mb-2">${repo.name}</h4>
            <p class="text-sm text-gray-400 mb-4">${repo.description || "No description provided."}</p>
            <a href="${repo.html_url}" target="_blank" class="bg-white text-black px-4 py-2 rounded-full font-medium">View on GitHub</a>
          </div>
        `;

        projectGrid.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error fetching GitHub projects:", error);
    });

