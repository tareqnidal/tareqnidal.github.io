// Add any JavaScript functionalities if necessary
// For example, handling the "CONTACT ME" button click or project actions
  

  document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.querySelector('nav button');
    const modal = document.getElementById('contactModal');

    contactButton.addEventListener('click', function () {
      modal.classList.remove('hidden');
    });
  });

