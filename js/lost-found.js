const searchInput = document.querySelector("#inputSearch");
const reportButton = document.querySelector("#reportButton");
const itemCards = document.querySelectorAll(".item-card");
const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");

menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("hidden");

});
function searchItems() {
    const searchText = searchInput.value .toLowerCase() .trim();
    itemCards.forEach(card => {
        const title = card.querySelector("h2") .textContent .toLowerCase();
        const description = card.querySelector(".text-slate-500") .textContent .toLowerCase();
        const matchesSearch = searchText === "" || title.includes(searchText) || description.includes(searchText);
        if (matchesSearch) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
searchInput.addEventListener("input", searchItems);
reportButton.addEventListener("click", function () {
    alert("Report Item feature coming soon!");
});