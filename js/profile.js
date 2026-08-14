const profileForm = document.querySelector("#profileForm");

const studentName = document.querySelector("#studentName");
const department = document.querySelector("#department");
const subject = document.querySelector("#subject");
const level = document.querySelector("#level");
const preferredLocation = document.querySelector("#preferredLocation");
const about = document.querySelector("#about");


profileForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Name validation
    if (studentName.value.trim() === "") {

        alert("Please enter your name");

        studentName.focus();

        return;
    }


    // Department validation
    if (department.value.trim() === "") {

        alert("Please enter your department");

        department.focus();

        return;
    }


    // Subject validation
    if (subject.value === "") {

        alert("Please select a subject");

        subject.focus();

        return;
    }


    // Level validation
    if (level.value === "") {

        alert("Please select your study level");

        level.focus();

        return;
    }


    // Location validation
    if (preferredLocation.value === "") {

        alert("Please select your preferred study location");

        preferredLocation.focus();

        return;
    }


    // About validation
    if (about.value.trim() === "") {

        alert("Please tell us something about yourself");

        about.focus();

        return;
    }


    // Profile object
    const profile = {

        name: studentName.value.trim(),

        department: department.value.trim(),

        subject: subject.value,

        level: level.value,

        location: preferredLocation.value,

        about: about.value.trim()

    };


    // Save profile in Local Storage
    localStorage.setItem(
        "studyProfile",
        JSON.stringify(profile)
    );


    alert("Study profile created successfully!");


    // Form clear
    profileForm.reset();

});