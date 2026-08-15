const events = [
    {
        title: "Web Development Workshop",
        category: "Technology",
        description: "Learn modern web development techniques from experienced developers.",
        date: "August 15, 2026",
        time: "10:00 AM",
        location: "Computer Lab",
        icon: "💻"
    },

    {
        title: "Career & Skills Seminar",
        category: "Education",
        description: "Get valuable career advice and learn skills that employers are looking for.",
        date: "August 18, 2026",
        time: "2:00 PM",
        location: "Main Auditorium",
        icon: "🎤"
    },

    {
        title: "Inter-University Football",
        category: "Sports",
        description: "Support your university team in the upcoming championship match.",
        date: "August 22, 2026",
        time: "4:00 PM",
        location: "University Stadium",
        icon: "⚽"
    },

    {
        title: "AI & Future of Education",
        category: "Education",
        description: "Explore how artificial intelligence is changing the way students learn and study.",
        date: "August 19, 2026",
        time: "2:00 PM",
        location: "Main Auditorium",
        icon: "📚"
    }
];


// URL se id lena
const params = new URLSearchParams(window.location.search);
const eventId = Number(params.get("id"));


// Selected event
const selectedEvent = events[eventId];


// Agar valid event hai
if (selectedEvent) {

    document.querySelector("#eventIcon").textContent =
        selectedEvent.icon;

    document.querySelector("#eventCategory").textContent =
        selectedEvent.category;

    document.querySelector("#eventTitle").textContent =
        selectedEvent.title;

    document.querySelector("#eventDescription").textContent =
        selectedEvent.description;

    document.querySelector("#eventDate").textContent =
        selectedEvent.date;

    document.querySelector("#eventTime").textContent =
        selectedEvent.time;

    document.querySelector("#eventLocation").textContent =
        selectedEvent.location;


    // Register button ko event id ke sath register page par bhejna
    document.querySelector("#registerButton").href =
        `register.html?id=${eventId}`;

} else {

    // Agar id galat ho
    document.querySelector("#eventTitle").textContent =
        "Event Not Found";

    document.querySelector("#eventDescription").textContent =
        "The event you are looking for does not exist.";

    document.querySelector("#registerButton").style.display =
        "none";
}