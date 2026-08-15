const items = [
    {
        icon: "👛",
        title: "Black Wallet",
        status: "Lost",
        description: "Black leather wallet lost near the university library.",
        location: "Library",
        date: "August 8, 2026"
    },

    {
        icon: "🎧",
        title: "Wireless Headphones",
        status: "Found",
        description: "Wireless headphones found near the student cafeteria.",
        location: "Student Cafeteria",
        date: "August 7, 2026"
    },

    {
        icon: "🎒",
        title: "Blue Backpack",
        status: "Lost",
        description: "Blue backpack with university logo lost near the computer lab.",
        location: "Computer Lab",
        date: "August 6, 2026"
    }
];


// URL se item ID lena
const urlParams = new URLSearchParams(window.location.search);

const itemId = Number(urlParams.get("id"));


// Selected item
const selectedItem = items[itemId];


// Details page par data show karna
document.querySelector("#itemIcon").textContent =
    selectedItem.icon;

document.querySelector("#itemTitle").textContent =
    selectedItem.title;

document.querySelector("#itemStatus").textContent =
    selectedItem.status;

document.querySelector("#itemDescription").textContent =
    selectedItem.description;

document.querySelector("#itemLocation").textContent =
    selectedItem.location;

document.querySelector("#itemDate").textContent =
    selectedItem.date;