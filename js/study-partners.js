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
// Filter Partners
// ===============================

function filterPartners() {

    const searchValue = searchInput.value.toLowerCase();
    const selectedLevel = levelFilter.value;
    const selectedSubject = subjectFilter.value;


    partnerCards.forEach(function (card) {

        const cardText = card.innerText.toLowerCase();

        const levelText = card.innerText;
        const subjectText = card.innerText;


        const searchMatch =
            cardText.includes(searchValue);


        const levelMatch =
            selectedLevel === "All Levels" ||
            levelText.includes(selectedLevel);


        const subjectMatch =
            selectedSubject === "All Subjects" ||
            subjectText.includes(selectedSubject);


        if (searchMatch && levelMatch && subjectMatch) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


// ===============================
// Search Event
// ===============================

searchInput.addEventListener("input", filterPartners);


// ===============================
// Level Filter Event
// ===============================

levelFilter.addEventListener("change", filterPartners);


// ===============================
// Subject Filter Event
// ===============================

subjectFilter.addEventListener("change", filterPartners);


// ===============================
// Connect Buttons
// ===============================

const connectButtons =
    document.querySelectorAll(".partner-card button");


connectButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        window.location.href = `connect.html?id=${index}`;

    });

});