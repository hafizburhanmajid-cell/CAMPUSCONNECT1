// ===============================
// Form Submit
// ===============================

connectionForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Reset previous errors
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
        return;
    }


    // ===============================
    // Success
    // ===============================

    successMessage.classList.remove("hidden");

    console.log(
        "Connection request sent to:",
        students[studentIndex]?.name
    );

    connectionForm.reset();

    successMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});