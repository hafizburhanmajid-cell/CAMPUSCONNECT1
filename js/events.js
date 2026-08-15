const searchInput = document.querySelector("#eventsearch");
const categoryFilter = document.querySelector("#categoryFilter");

const eventCards = document.querySelectorAll(".event-card");

const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");


// ===============================
// Mobile Menu
// ===============================

menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("hidden");

});


// ===============================
// Search + Category Filter
// ===============================

function filterEvents() {

    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    eventCards.forEach(function (card) {

        const title = card.querySelector("h2").textContent.toLowerCase();

        const description = card.querySelector(".event-description")
            .textContent
            .toLowerCase();

        const category = card.querySelector("span").textContent.trim();


        const searchMatch =
            title.includes(searchText) ||
            description.includes(searchText);


        const categoryMatch =
            selectedCategory === "All Categories" ||
            category === selectedCategory;


        if (searchMatch && categoryMatch) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}

searchInput.addEventListener("input", filterEvents);

categoryFilter.addEventListener("change", filterEvents);


// ===============================
// View Event Buttons
// ===============================

const viewEventButtons =
    document.querySelectorAll(".viewEventBtn");


viewEventButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        window.location.href =
            `event-details.html?id=${index}`;

    });

});