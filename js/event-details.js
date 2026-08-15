const events = [
    {
        icon: "💻",
        category: "Technology",
        title: "Web Development Workshop",
        description: "Learn modern web development techniques from experienced developers.",
        date: "August 15, 2026",
        time: "10:00 AM",
        location: "Computer Lab"
    },

    {
        icon: "🎤",
        category: "Education",
        title: "Career & Skills Seminar",
        description: "Get valuable career advice and learn skills that employers are looking for.",
        date: "August 18, 2026",
        time: "2:00 PM",
        location: "Main Auditorium"
    },

    {
        icon: "⚽",
        category: "Sports",
        title: "Inter-University Football",
        description: "Support your university team in the upcoming championship match.",
        date: "August 22, 2026",
        time: "4:00 PM",
        location: "University Stadium"
    },

    {
        icon: "📚",
        category: "Education",
        title: "AI & Future of Education",
        description: "Explore how artificial intelligence is changing the way students learn and study.",
        date: "August 19, 2026",
        time: "2:00 PM",
        location: "Main Auditorium"
    }
];


// URL se event ID lena
const urlParams = new URLSearchParams(window.location.search);

const eventId = Number(urlParams.get("id"));


// Selected event
const selectedEvent = events[eventId];


// Page par details show karna
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