const profileForm = document.querySelector("#profileForm");

const studentName = document.querySelector("#studentName");
const department = document.querySelector("#department");
const subject = document.querySelector("#subject");
const level = document.querySelector("#level");
const preferredLocation = document.querySelector("#preferredLocation");
const about = document.querySelector("#about");

const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");


// ===============================
// Mobile Menu
// ===============================

menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("hidden");

});


// ===============================
// Show Error
// ===============================

function showError(input, message) {

    input.classList.remove("border-slate-300");
    input.classList.add("border-red-500");

    let error = input.parentElement.querySelector(".error-message");

    if (!error) {

        error = document.createElement("p");

        error.classList.add(
            "error-message",
            "text-red-500",
            "text-sm",
            "mt-2"
        );

        input.parentElement.appendChild(error);
    }

    error.textContent = message;
}


// ===============================
// Remove Error
// ===============================

function removeError(input) {

    input.classList.remove("border-red-500");
    input.classList.add("border-slate-300");

    const error =
        input.parentElement.querySelector(".error-message");

    if (error) {
        error.remove();
    }

}


// ===============================
// Form Submit
// ===============================

profileForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let firstError = null;


    // Name
    if (studentName.value.trim() === "") {

        showError(
            studentName,
            "Please enter your name."
        );

        if (!firstError) {
            firstError = studentName;
        }

    } else {

        removeError(studentName);

    }


    // Department
    if (department.value.trim() === "") {

        showError(
            department,
            "Please enter your department."
        );

        if (!firstError) {
            firstError = department;
        }

    } else {

        removeError(department);

    }


    // Subject
    if (subject.value === "") {

        showError(
            subject,
            "Please select a subject."
        );

        if (!firstError) {
            firstError = subject;
        }

    } else {

        removeError(subject);

    }


    // Level
    if (level.value === "") {

        showError(
            level,
            "Please select your study level."
        );

        if (!firstError) {
            firstError = level;
        }

    } else {

        removeError(level);

    }


    // Preferred Location
    if (preferredLocation.value === "") {

        showError(
            preferredLocation,
            "Please select your preferred study location."
        );

        if (!firstError) {
            firstError = preferredLocation;
        }

    } else {

        removeError(preferredLocation);

    }


    // About
    if (about.value.trim() === "") {

        showError(
            about,
            "Please tell us something about yourself."
        );

        if (!firstError) {
            firstError = about;
        }

    } else {

        removeError(about);

    }


    // ===============================
    // Stop if there is an error
    // ===============================

    if (firstError) {

        firstError.focus();

        return;
    }


    // ===============================
    // Profile Object
    // ===============================

    const profile = {

        name: studentName.value.trim(),

        department: department.value.trim(),

        subject: subject.value,

        level: level.value,

        location: preferredLocation.value,

        about: about.value.trim()

    };


    // ===============================
    // Save in Local Storage
    // ===============================

    localStorage.setItem(
        "studyProfile",
        JSON.stringify(profile)
    );


    // Success message
    alert("Study profile created successfully!");


    // Clear form
    profileForm.reset();

});