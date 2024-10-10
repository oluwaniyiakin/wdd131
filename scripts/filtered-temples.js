// Temple Data Array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here (3+ additional objects).
  ];
  
  // DOM references
  const templeContainer = document.querySelector('#temple-container');
  
  // Function to generate temple cards
  function generateTempleCards(temples) {
      templeContainer.innerHTML = ''; // Clear the container
  
      temples.forEach(temple => {
          // Create card elements
          let card = document.createElement('div');
          card.classList.add('temple-card');
  
          let img = document.createElement('img');
          img.src = temple.imageUrl;
          img.alt = temple.templeName;
          img.loading = "lazy"; // Add lazy loading
  
          let name = document.createElement('h2');
          name.textContent = temple.templeName;
  
          let location = document.createElement('p');
          location.textContent = `Location: ${temple.location}`;
  
          let dedicated = document.createElement('p');
          dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
          let area = document.createElement('p');
          area.textContent = `Area: ${temple.area} sq ft`;
  
          // Append all elements to the card
          card.appendChild(img);
          card.appendChild(name);
          card.appendChild(location);
          card.appendChild(dedicated);
          card.appendChild(area);
  
          // Append card to the container
          templeContainer.appendChild(card);
      });
  }
  
  // Filter functions
  function filterOldTemples() {
      const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      generateTempleCards(oldTemples);
  }
  
  function filterNewTemples() {
      const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      generateTempleCards(newTemples);
  }
  
  function filterLargeTemples() {
      const largeTemples = temples.filter(temple => temple.area > 90000);
      generateTempleCards(largeTemples);
  }
  
  function filterSmallTemples() {
      const smallTemples = temples.filter(temple => temple.area < 10000);
      generateTempleCards(smallTemples);
  }
  
  // Event Listeners for navigation buttons
  document.querySelector('#home').addEventListener('click', () => generateTempleCards(temples));
  document.querySelector('#old').addEventListener('click', filterOldTemples);
  document.querySelector('#new').addEventListener('click', filterNewTemples);
  document.querySelector('#large').addEventListener('click', filterLargeTemples);
  document.querySelector('#small').addEventListener('click', filterSmallTemples);
  
  // Display all temples on page load
  generateTempleCards(temples);
  
  // Footer update for current year and last modified date
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
  