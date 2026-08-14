const searchInput = document.querySelector("#eventsearch");
const categorySelect = document.querySelector("#categoryFilter");
const eventCards = document.querySelectorAll(".event-card");


function filterEvents() {

    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    const selectedCategory = categorySelect.value.trim();


    eventCards.forEach(card => {

        const title = card.querySelector("h2")
            .textContent
            .toLowerCase();

        const description = card.querySelector(".event-description")
            .textContent
            .toLowerCase();

        const category = card.querySelector("#text-span")
            .textContent
            .trim();


        const searchMatch =
            searchText === "" ||
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

categorySelect.addEventListener("change", filterEvents);