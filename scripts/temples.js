// Set current year dynamically in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Set last modified date dynamically in footer
document.getElementById('lastModified').textContent = document.lastModified;

// Toggle mobile navigation menu
function toggleMenu() {
    const navList = document.getElementById('navList');
    navList.classList.toggle('visible');
}
