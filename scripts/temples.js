// Function to update the copyright year and last modified date
function updateFooter() {
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    const lastModifiedElement = document.getElementById("lastModified");
    const lastModified = document.lastModified;
    lastModifiedElement.textContent = lastModified;
}

// Function to toggle the hamburger menu in mobile view
function setupHamburgerMenu() {
    const hamburgerButton = document.createElement("button");
    hamburgerButton.textContent = "☰"; // Hamburger icon

    const navMenu = document.querySelector("nav ul");

    hamburgerButton.addEventListener("click", function () {
        navMenu.classList.toggle("visible");
        if (navMenu.classList.contains("visible")) {
            hamburgerButton.textContent = "X"; // Change to X when menu is open
        } else {
            hamburgerButton.textContent = "☰"; // Change back to hamburger icon
        }
    });

    const header = document.querySelector("header");
    header.appendChild(hamburgerButton);
}

// Initialize functions on load
updateFooter();
setupHamburgerMenu();
