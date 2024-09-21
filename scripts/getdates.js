// Dynamically insert the current year into the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Dynamically insert the last modified date of the document
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;
