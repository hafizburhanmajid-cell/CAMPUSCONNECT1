// ===============================
// Get Elements
// ===============================

const connectionForm = document.querySelector("#connectionForm");

const senderName = document.querySelector("#senderName");
const senderEmail = document.querySelector("#senderEmail");
const message = document.querySelector("#message");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");

const successMessage = document.querySelector("#successMessage");

const studentName = document.querySelector("#studentName");
const studentLevel = document.querySelector("#studentLevel");
const studentSubject = document.querySelector("#studentSubject");
const studentAbout = document.querySelector("#studentAbout");
const studentGoals = document.querySelector("#studentGoals");
const studentAvatar = document.querySelector("#studentAvatar");


// ===============================
// Students Data
// ===============================

const students = [

    {
        name: "Ayesha",
        level: "Intermediate",
        subject: "Web Development",
        about: "Ayesha is a Computer Science student who enjoys building websites and learning modern web technologies. She is looking for a study partner to practice frontend development together.",
        goals: "Improve JavaScript skills, build real-world web projects, and practice DOM manipulation and responsive web design.",
        avatar: "A",
        avatarColor: "bg-indigo-100",
        textColor: "text-indigo-600"
    },

    {
        name: "Hamza",
        level: "Advanced",
        subject: "Data Structures",
        about: "Hamza is a Software Engineering student who enjoys solving programming problems and understanding complex data structures and algorithms.",
        goals: "Practice algorithms, improve problem-solving skills, and prepare for technical programming interviews.",
        avatar: "H",
        avatarColor: "bg-purple-100",
        textColor: "text-purple-600"
    },

    {
        name: "Ali",
        level: "Intermediate",
        subject: "Artificial Intelligence",
        about: "Ali is a Computer Science student interested in artificial intelligence and machine learning. He enjoys learning new concepts and working on practical projects.",
        goals: "Learn machine learning concepts, work on AI projects, and improve Python and problem-solving skills.",
        avatar: "A",
        avatarColor: "bg-indigo-100",
        textColor: "text-indigo-600"
    }

];


// ===============================
// Get Student From URL
// ===============================

const urlParams = new URLSearchParams(window.location.search);

const studentIndex = Number(urlParams.get("student"));


// ===============================
// Show Selected Student
// ===============================

if (
    !isNaN(studentIndex) &&
    students[studentIndex]
) {

    const student = students[studentIndex];

    studentName.textContent = student.name;

    studentLevel.textContent = student.level;

    studentSubject.textContent = student.subject;

    studentAbout.textContent = student.about;

    studentGoals.textContent = student.goals;

    studentAvatar.textContent = student.avatar;

    studentAvatar.className =
        `w-24 h-24 rounded-full ${student.avatarColor} ${student.textColor} flex items-center justify-center text-3xl font-bold transition-transform duration-300 hover:scale-110`;

} else {

    // Default student
    const student = students[0];

    studentName.textContent = student.name;
    studentLevel.textContent = student.level;
    studentSubject.textContent = student.subject;
    studentAbout.textContent = student.about;
    studentGoals.textContent = student.goals;
    studentAvatar.textContent = student.avatar;

}


// ===============================
// Form Submit
// ===============================

connectionForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // ===============================
    // Reset Errors
    // ===============================

    nameError.classList.add("hidden");
    emailError.classList.add("hidden");
    messageError.classList.add("hidden");


    // Reset Borders

    senderName.style.borderColor = "";
    senderEmail.style.borderColor = "";
    message.style.borderColor = "";


    let isValid = true;


    // ===============================
    // Name Validation
    // ===============================

    if (senderName.value.trim() === "") {

        nameError.classList.remove("hidden");

        senderName.style.borderColor = "red";

        isValid = false;
    }


    // ===============================
    // Email Validation
    // ===============================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
        senderEmail.value.trim() === "" ||
        !emailPattern.test(senderEmail.value.trim())
    ) {

        emailError.classList.remove("hidden");

        senderEmail.style.borderColor = "red";

        isValid = false;
    }


    // ===============================
    // Message Validation
    // ===============================

    if (message.value.trim() === "") {

        messageError.classList.remove("hidden");

        message.style.borderColor = "red";

        isValid = false;
    }


    // ===============================
    // Stop if Invalid
    // ===============================

    if (!isValid) {

        // Pehle invalid field par le jao

        if (senderName.value.trim() === "") {

            senderName.focus();

        } else if (
            senderEmail.value.trim() === "" ||
            !emailPattern.test(senderEmail.value.trim())
        ) {

            senderEmail.focus();

        } else if (message.value.trim() === "") {

            message.focus();

        }

        return;
    }


    // ===============================
    // Success
    // ===============================

    successMessage.classList.remove("hidden");


    console.log(
        "Connection request sent to:",
        students[studentIndex]?.name || students[0].name
    );


    // Form clear

    connectionForm.reset();


    // Scroll to success message

    successMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


// ===============================
// Clear Error When User Types
// ===============================

senderName.addEventListener("input", function () {

    if (senderName.value.trim() !== "") {

        nameError.classList.add("hidden");

        senderName.style.borderColor = "";
    }

});


senderEmail.addEventListener("input", function () {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        senderEmail.value.trim() !== "" &&
        emailPattern.test(senderEmail.value.trim())
    ) {

        emailError.classList.add("hidden");

        senderEmail.style.borderColor = "";
    }

});


message.addEventListener("input", function () {

    if (message.value.trim() !== "") {

        messageError.classList.add("hidden");

        message.style.borderColor = "";
    }

});


// ===============================
// Mobile Navbar
// ===============================

const menuButton = document.querySelector("#menuButton");

const mobileMenu = document.querySelector("#mobileMenu");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("hidden");

    });

}