// Student data with corresponding picture paths
const students = [
    { name: "Student 1", dob: "2015-05-15", height: "120 cm", about: "Loves painting and reading.", imgSrc: "images/picture1.jpg" },
    { name: "Student 2", dob: "2014-08-20", height: "125 cm", about: "Enjoys soccer and playing with friends.", imgSrc: "images/picture2.jpg" },
    { name: "Student 3", dob: "2015-12-10", height: "119 cm", about: "Favorite subjects are math and science.", imgSrc: "images/picture3.jpg" },
    { name: "Student 4", dob: "2014-04-02", height: "122 cm", about: "Avid reader and puzzle solver.", imgSrc: "images/picture4.jpg" },
    { name: "Student 5", dob: "2015-09-28", height: "118 cm", about: "Loves drawing and sports.", imgSrc: "images/picture5.jpg" },
    { name: "Student 6", dob: "2014-06-18", height: "124 cm", about: "Plays piano and loves music.", imgSrc: "images/picture6.jpg" },
    { name: "Student 7", dob: "2015-03-22", height: "121 cm", about: "Great at storytelling.", imgSrc: "images/picture7.jpg" },
    { name: "Student 8", dob: "2014-11-30", height: "126 cm", about: "Enjoys arts and crafts.", imgSrc: "images/picture8.jpg" },
    { name: "Student 9", dob: "2015-07-19", height: "123 cm", about: "Soccer player and runner.", imgSrc: "images/picture9.jpg" },
    { name: "Student 10", dob: "2014-02-14", height: "127 cm", about: "Loves to sing and dance.", imgSrc: "images/picture10.jpg" }
];

// Function to load student data
function loadStudents() {
    const gallery = document.getElementById('gallery');
    students.forEach(student => {
        // Create student card
        const card = document.createElement('div');
        card.classList.add('student-card');
        
        // Add student image
        const img = document.createElement('img');
        img.src = student.imgSrc;
        img.alt = `${student.name}'s Picture`;
        card.appendChild(img);

        // Add student name
        const name = document.createElement('h2');
        name.textContent = student.name;
        card.appendChild(name);

        // Add student details
        const details = document.createElement('p');
        details.innerHTML = `<strong>DOB:</strong> ${student.dob}<br><strong>Height:</strong> ${student.height}`;
        card.appendChild(details);

        // Add about section
        const about = document.createElement('p');
        about.textContent = student.about;
        card.appendChild(about);

        // Append card to gallery
        gallery.appendChild(card);
    });
}

// Function to display today's date
function displayDate() {
    const dateElement = document.getElementById('date');
    const today = new Date().toLocaleDateString();
    dateElement.textContent = today;
}

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    loadStudents();
    displayDate();
});
