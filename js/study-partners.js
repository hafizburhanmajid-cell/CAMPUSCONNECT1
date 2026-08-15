// ===============================
// Study Partners Data
// ===============================

const students = [

    {
        name: "Ayesha",
        department: "Computer Science",
        subject: "Web Development",
        level: "Intermediate",
        preferred: "Library",
        avatar: "👩🏻‍💻",
        about: "Ayesha is a Computer Science student who enjoys building websites and learning modern web technologies.",
        goals: "Improve frontend development skills and work on real-world web development projects."
    },

    {
        name: "Hamza",
        department: "Software Engineering",
        subject: "Data Structures",
        level: "Advanced",
        preferred: "Study Room",
        avatar: "👨🏻‍💻",
        about: "Hamza is a Software Engineering student who enjoys solving programming problems and learning algorithms.",
        goals: "Become stronger in data structures and algorithms and prepare for technical interviews."
    },

    {
        name: "Ali",
        department: "Computer Science",
        subject: "Artificial Intelligence",
        level: "Intermediate",
        preferred: "Online",
        avatar: "👨🏻‍🎓",
        about: "Ali is a Computer Science student interested in artificial intelligence and machine learning.",
        goals: "Learn more about AI and build practical machine learning projects."
    }

];


// ===============================
// Navbar Mobile Menu
// ===============================

const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("hidden");

    });

}


// ===============================
// Search & Filters
// ===============================

const searchInput = document.querySelector("#partnerSearch");
const levelFilter = document.querySelector("#levelFilter");
const subjectFilter = document.querySelector("#subjectFilter");

const partnerCards = document.querySelectorAll(".partner-card");


function filterPartners() {

    const searchValue = searchInput.value.toLowerCase().trim();

    const levelValue = levelFilter.value;
    const subjectValue = subjectFilter.value;


    partnerCards.forEach(function (card) {

        const cardText = card.textContent.toLowerCase();

        const searchMatch =
            cardText.includes(searchValue);

        const levelMatch =
            levelValue === "All Levels" ||
            cardText.includes(levelValue.toLowerCase());

        const subjectMatch =
            subjectValue === "All Subjects" ||
            cardText.includes(subjectValue.toLowerCase());


        if (
            searchMatch &&
            levelMatch &&
            subjectMatch
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


// ===============================
// Search Event
// ===============================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterPartners
    );

}


// ===============================
// Level Filter Event
// ===============================

if (levelFilter) {

    levelFilter.addEventListener(
        "change",
        filterPartners
    );

}


// ===============================
// Subject Filter Event
// ===============================

if (subjectFilter) {

    subjectFilter.addEventListener(
        "change",
        filterPartners
    );

}


// ===============================
// Connect Buttons
// ===============================

const connectButtons =
    document.querySelectorAll(".connect-btn");


connectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Button se student ka index lena
        const studentIndex =
            Number(button.dataset.index);


        // Check karna ke student exist karta hai
        if (
            studentIndex >= 0 &&
            studentIndex < students.length
        ) {

            // Connect page par correct student bhejna
            window.location.href =
                `connect.html?student=${studentIndex}`;

        }

    });

});