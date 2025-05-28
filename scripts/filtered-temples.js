// Current Year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastmodification").textContent = lastModified;


// Store the selected elements that we are going to use.
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#h_menu');  // using my id name

// Add a click event listener to the hamburger button
hambutton.addEventListener('click', (e) => {
    e.preventDefault();  
    mainnav.classList.toggle('open');  
    hambutton.classList.toggle('open');  
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Mérida Mexico Temple",
    location: "Mérida, Yucatan Mexico",
    dedicated: "2000, July, 8",
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/merida-mexico/800x500/merida-mexico-temple-lds-643985-wallpaper.jpg"
  },
  {
    templeName: "Barranquilla ColombiaTemple",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 25349,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/800x500/3-Barranquilla-Columblia-Temple-2135198.jpg"
  },
  {
    templeName: "Nauvoo Temple",
    location: "Nauvoo, Illinois United States",
    dedicated: "1846, May, 3",
    area: 50000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/800x500/nauvoo-temple-756499-wallpaper.jpg"
  },
  {
    templeName: "McAllen Texas Temple",
    location: "MacAllen, Texas United States",
    dedicated: "2023, October, 8",
    area: 27897,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/51edc593152e11ee90afeeeeac1ef99dfe5ba797/full/640%2C/0/default"
  },
  {
    templeName: "Bogotá Colombia Temple",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 25",
    area: 53500,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/89b209718a7ed41649a497893e240972b7cfd036/full/640%2C/0/default"
  },

  // Add more temple objects here...
];

createTempleCard(temples);

//HOMELINK
const HomeLink = document.querySelector("#Home");
HomeLink.addEventListener("click", (e) => {
  e.preventDefault();
  createTempleCard(temples);
   });


//OLDLINK
const OldLink = document.querySelector("#Old");
OldLink.addEventListener("click", (e) => {
  e.preventDefault();
  createTempleCard(temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0].trim());
    return year < 1900; 
  }));
});

//NEWLINK
const NewLink = document.querySelector("#New");
NewLink.addEventListener("click", (e) => {
  e.preventDefault();
  createTempleCard(temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0].trim());
    return year > 2000; 
  }));
});

//LARGELINK
const LargeLink = document.querySelector("#Large");
LargeLink.addEventListener("click", (e) => {
  e.preventDefault();
  createTempleCard(temples.filter(temple=> temple.area > 89999))
});

//SMALLLINK
const SmallLink = document.querySelector("#Small");
SmallLink.addEventListener("click", (e) => {
  e.preventDefault();
  createTempleCard(temples.filter(temple=> temple.area < 10001))
});


function createTempleCard(filteredTemples){
  document.querySelector(".res-grid").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Area:</span> ${temple.area}`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);
  });
}
