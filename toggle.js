// Toggle Dark/Light Mode
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Update icon based on mode
  if (body.classList.contains('dark-mode')) {
    modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

// Toggle Menu for Mobile
function toggleMenu() {
  const navbarLinks = document.querySelector('.navbar-links');
  navbarLinks.classList.toggle('mobile-active');
}
