// ===============================
// Student Data
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
// Get Student Index From URL
// ===============================

const urlParams =
    new URLSearchParams(window.location.search);

const studentIndex =
    Number(urlParams.get("student"));


// ===============================
// Get Selected Student
// ===============================

const student =
    students[studentIndex];


// ===============================
// Select Profile Elements
// ===============================

const studentAvatar =
    document.querySelector("#studentAvatar");

const studentName =
    document.querySelector("#studentName");

const studentLevel =
    document.querySelector("#studentLevel");

const studentSubject =
    document.querySelector("#studentSubject");

const studentAbout =
    document.querySelector("#studentAbout");

const studentGoals =
    document.querySelector("#studentGoals");


// ===============================
// Show Student Information
// ===============================

if (student) {

    studentAvatar.textContent =
        student.avatar;

    studentName.textContent =
        student.name;

    studentLevel.textContent =
        `${student.level} • ${student.department}`;

    studentSubject.textContent =
        student.subject;

    studentAbout.textContent =
        student.about;

    studentGoals.textContent =
        student.goals;

}


// ===============================
// Form Elements
// ===============================

const connectionForm =
    document.querySelector("#connectionForm");

const senderName =
    document.querySelector("#senderName");

const senderEmail =
    document.querySelector("#senderEmail");

const message =
    document.querySelector("#message");

const nameError =
    document.querySelector("#nameError");

const emailError =
    document.querySelector("#emailError");

const messageError =
    document.querySelector("#messageError");

const successMessage =
    document.querySelector("#successMessage");


// ===============================
// Form Submit
// ===============================

connectionForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        // Reset errors

        nameError.classList.add("hidden");

        emailError.classList.add("hidden");

        messageError.classList.add("hidden");


        // Reset borders

        senderName.style.borderColor = "";

        senderEmail.style.borderColor = "";

        message.style.borderColor = "";


        let isValid = true;


        // ===============================
        // Name Validation
        // ===============================

        if (
            senderName.value.trim() === ""
        ) {

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
            !emailPattern.test(
                senderEmail.value.trim()
            )
        ) {

            emailError.classList.remove("hidden");

            senderEmail.style.borderColor = "red";

            isValid = false;

        }


        // ===============================
        // Message Validation
        // ===============================

        if (
            message.value.trim() === ""
        ) {

            messageError.classList.remove("hidden");

            message.style.borderColor = "red";

            isValid = false;

        }


        // ===============================
        // Stop If Invalid
        // ===============================

        if (!isValid) {

            return;

        }


        // ===============================
        // Success
        // ===============================

        successMessage.classList.remove("hidden");


        console.log(
            "Connection request sent to:",
            student ? student.name : "Unknown Student"
        );


        connectionForm.reset();


        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);