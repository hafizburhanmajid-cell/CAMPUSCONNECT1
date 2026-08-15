let form = document.getElementById("registrationForm");

let successMessage = document.getElementById("successMessage");

let studentName = document.getElementById("studentName");

let email = document.getElementById("email");

let department = document.getElementById("department");


// Show Error

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


// Remove Error

function removeError(input) {

    input.classList.remove("border-red-500");

    input.classList.add("border-slate-300");


    let error = input.parentElement.querySelector(".error-message");


    if (error) {
        error.remove();
    }

}


// Form Submit

form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Hide previous success message

    successMessage.classList.add("hidden");


    let firstError = null;


    // Student Name

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


    // Email

    if (email.value.trim() === "") {

        showError(
            email,
            "Please enter your email."
        );

        if (!firstError) {
            firstError = email;
        }

    } else {

        removeError(email);

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


    // Agar koi field blank hai

    if (firstError) {

        firstError.focus();

        return;
    }


    // Sab fields filled hain

    successMessage.classList.remove("hidden");


    // Form clear

    form.reset();

});