const form = document.querySelector("#contactForm");

const contactName = document.querySelector("#contactName");
const contactEmail = document.querySelector("#contactEmail");
const contactMessage = document.querySelector("#contactMessage");


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


function removeError(input) {

    input.classList.remove("border-red-500");
    input.classList.add("border-slate-300");

    const error =
        input.parentElement.querySelector(".error-message");

    if (error) {
        error.remove();
    }
}


form.addEventListener("submit", function (event) {

    event.preventDefault();

    let firstError = null;


    // Name
    if (contactName.value.trim() === "") {

        showError(
            contactName,
            "Please enter your name."
        );

        if (!firstError) {
            firstError = contactName;
        }

    } else {

        removeError(contactName);

    }


    // Email
    if (contactEmail.value.trim() === "") {

        showError(
            contactEmail,
            "Please enter your email."
        );

        if (!firstError) {
            firstError = contactEmail;
        }

    } else {

        removeError(contactEmail);

    }


    // Message
    if (contactMessage.value.trim() === "") {

        showError(
            contactMessage,
            "Please enter your message."
        );

        if (!firstError) {
            firstError = contactMessage;
        }

    } else {

        removeError(contactMessage);

    }


    // Agar koi field empty hai
    if (firstError) {

        firstError.focus();

        return;
    }


    // Sab fields correct hain
    alert("Your message has been sent successfully!");

    form.reset();

});