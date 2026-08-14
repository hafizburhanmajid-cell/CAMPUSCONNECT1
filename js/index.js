const exploreEvents = document.querySelector("#exploreEvents");
const getStarted = document.querySelector("#getStarted");
const eventsCard = document.querySelector("#eventsCard");
const plannerCard = document.querySelector("#plannerCard");
const lostFoundCard = document.querySelector("#lostFoundCard");
const partnersCard = document.querySelector("#partnersCard");
exploreEvents.addEventListener("click", function () {
    console.log("Opening Events page...");
});
getStarted.addEventListener("click", function () {
    console.log("Getting Started...");
});
eventsCard.addEventListener("click", function () {
    window.location.href = "events.html";
});
plannerCard.addEventListener("click", function () {
    window.location.href = "planner.html";
});
lostFoundCard.addEventListener("click", function () {
    window.location.href = "lost-found.html";
});
partnersCard.addEventListener("click", function () {
    window.location.href = "study-partners.html";
});