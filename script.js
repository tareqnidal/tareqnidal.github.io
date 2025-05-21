// Add any JavaScript functionalities if necessary
  

  document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.querySelector('nav button');
    const modal = document.getElementById('contactModal');

    contactButton.addEventListener('click', function () {
      modal.classList.remove('hidden');
    });
  });


