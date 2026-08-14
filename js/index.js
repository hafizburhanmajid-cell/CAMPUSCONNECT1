const exploreEvents = document.querySelector("#exploreEvents");

const getStarted = document.querySelector("#getStarted");

const eventsCard = document.querySelector("#eventsCard");

const plannerCard = document.querySelector("#plannerCard");

const lostFoundCard = document.querySelector("#lostFoundCard");

const partnersCard = document.querySelector("#partnersCard");

const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");

menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("hidden");

});
// Explore Events
exploreEvents.addEventListener("click", function () {

    console.log("Opening Events page...");

});


// Get Started
getStarted.addEventListener("click", function () {

    console.log("Getting Started...");

});


// Events Card
eventsCard.addEventListener("click", function () {

    window.location.href = "events.html";

});


// Planner Card
plannerCard.addEventListener("click", function () {

    window.location.href = "planner.html";

});


// Lost & Found Card
lostFoundCard.addEventListener("click", function () {

    window.location.href = "lost-found.html";

});


// Study Partners Card
partnersCard.addEventListener("click", function () {

    window.location.href = "study-partners.html";

});