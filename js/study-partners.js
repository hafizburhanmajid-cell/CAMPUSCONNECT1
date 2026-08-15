const searchInput = document.querySelector("#partnerSearch");
const levelFilter = document.querySelector("#levelFilter");
const subjectFilter = document.querySelector("#subjectFilter");

const partnerCards = document.querySelectorAll(".partner-card");

const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");


// ===============================
// Mobile Menu
// ===============================

menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("hidden");

});


// ===============================
// Search + Filters
// ===============================

function filterPartners() {

    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    const selectedLevel = levelFilter.value;
    const selectedSubject = subjectFilter.value;


    partnerCards.forEach(function (card) {

        const cardText = card.textContent.toLowerCase();


        const levelMatch =
            selectedLevel === "All Levels" ||
            cardText.includes(selectedLevel.toLowerCase());


        const subjectMatch =
            selectedSubject === "All Subjects" ||
            cardText.includes(selectedSubject.toLowerCase());


        const searchMatch =
            searchText === "" ||
            cardText.includes(searchText);


        if (levelMatch && subjectMatch && searchMatch) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


// Search
searchInput.addEventListener("input", filterPartners);


// Level Filter
levelFilter.addEventListener("change", filterPartners);


// Subject Filter
subjectFilter.addEventListener("change", filterPartners);


// ===============================
// Connect Buttons
// ===============================

const connectButtons =
    document.querySelectorAll(".partner-card button");


connectButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        window.location.href =
            `connect.html?id=${index}`;

    });

});