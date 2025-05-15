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