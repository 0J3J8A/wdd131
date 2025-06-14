// Current Year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastmodification").textContent = lastModified;

// Product Array / Copy Information of the Assignment
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function populateProductSelect() {
    const select = document.getElementById('productSelect');
    if (select) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            select.appendChild(option);
        });
    }
}

function handleReviewCounter() {
    if (window.location.pathname.includes('review.html')) {
        let count = localStorage.getItem('reviewCount') || 0;
        count = parseInt(count) + 1;
        localStorage.setItem('reviewCount', count);

        const counter = document.getElementById('reviewCounter');
        if (counter) counter.textContent = `Total Reviews: ${count}`;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    populateProductSelect();
    handleReviewCounter();
});