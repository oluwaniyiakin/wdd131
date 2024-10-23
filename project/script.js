// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form data
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Store form data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    // Display success message
    alert(`Thank you, ${name}! Your message has been received.`);
});

// Dynamic content example
const featureList = document.querySelector('.features ul');
const additionalFeature = document.createElement('li');
additionalFeature.textContent = 'JavaScript-powered dynamic content.';
featureList.appendChild(additionalFeature);

// Event listener and DOM interaction
document.querySelectorAll('.image-grid img').forEach(img => {
    img.addEventListener('click', function() {
        alert(`You clicked on ${this.alt}`);
    });
});
