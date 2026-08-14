const taskInput = document.querySelector("#taskInput");
const subjectInput = document.querySelector("#subjectInput");
const deadlineInput = document.querySelector("#deadlineInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskCount = document.querySelector("#taskCount");

const checkboxes = document.querySelectorAll('input[type="checkbox"]');


// Add Task Button
addTaskBtn.addEventListener("click", function () {

    if (
        taskInput.value === "" ||
        subjectInput.value === "Select Subject" ||
        deadlineInput.value === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    console.log("Task:", taskInput.value);
    console.log("Subject:", subjectInput.value);
    console.log("Deadline:", deadlineInput.value);

    alert("Task added successfully!");

    taskInput.value = "";
    subjectInput.value = "Select Subject";
    deadlineInput.value = "";
});


// Checkbox
checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {

        const task = checkbox.parentElement.querySelector("h3");

        if (checkbox.checked) {
            task.classList.add("line-through", "text-slate-400");
        } else {
            task.classList.remove("line-through", "text-slate-400");
        }

    });

});