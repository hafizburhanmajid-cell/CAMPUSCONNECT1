const taskForm = document.querySelector("#taskForm");

const taskInput = document.querySelector("#taskInput");
const subjectInput = document.querySelector("#subjectInput");
const deadlineInput = document.querySelector("#deadlineInput");

const tasksContainer = document.querySelector("#tasksContainer");
const taskCount = document.querySelector("#taskCount");


// ======================================
// EXISTING CHECKBOXES
// ======================================

const existingCheckboxes =
    document.querySelectorAll(".taskCheckbox");


existingCheckboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {

        const taskTitle =
            checkbox.parentElement.querySelector("h3");


        if (checkbox.checked) {

            taskTitle.classList.add(
                "line-through",
                "text-slate-400"
            );

        } else {

            taskTitle.classList.remove(
                "line-through",
                "text-slate-400"
            );

        }

    });

});


// ======================================
// ADD TASK
// ======================================

taskForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const taskName =
        taskInput.value.trim();

    const subject =
        subjectInput.value;

    const deadline =
        deadlineInput.value;


    // ==================================
    // VALIDATION
    // ==================================

    if (taskName === "") {

        alert("Please enter task name");

        taskInput.focus();

        return;
    }


    if (subject === "") {

        alert("Please select subject");

        subjectInput.focus();

        return;
    }


    if (deadline === "") {

        alert("Please select deadline");

        deadlineInput.focus();

        return;
    }


    // ==================================
    // CREATE TASK CARD
    // ==================================

    const taskCard =
        document.createElement("div");


    taskCard.className =
        "task-card bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-300";


    taskCard.innerHTML = `

        <div class="flex items-start gap-4">

            <input
                type="checkbox"
                class="taskCheckbox mt-1 w-5 h-5 accent-indigo-600 transition-transform duration-200 hover:scale-110"
            >

            <div>

                <h3 class="font-bold">
                    ${taskName}
                </h3>

                <p class="text-sm text-slate-500 mt-1">
                    ${subject}
                </p>

                <p class="text-sm text-indigo-500 mt-2">
                    📅 Due: ${deadline}
                </p>

            </div>

        </div>


        <button
            type="button"
            class="deleteBtn bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-red-200 cursor-pointer"
        >
            Delete
        </button>

    `;


    // ==================================
    // SCREEN PAR ADD
    // ==================================

    tasksContainer.appendChild(taskCard);


    // ==================================
    // NEW TASK CHECKBOX
    // ==================================

    const checkbox =
        taskCard.querySelector(".taskCheckbox");


    checkbox.addEventListener("change", function () {

        const taskTitle =
            taskCard.querySelector("h3");


        if (checkbox.checked) {

            taskTitle.classList.add(
                "line-through",
                "text-slate-400"
            );

        } else {

            taskTitle.classList.remove(
                "line-through",
                "text-slate-400"
            );

        }

    });


    // ==================================
    // DELETE BUTTON
    // ==================================

    const deleteBtn =
        taskCard.querySelector(".deleteBtn");


    deleteBtn.addEventListener("click", function () {

        taskCard.remove();

        updateTaskCount();

    });


    // ==================================
    // UPDATE COUNT
    // ==================================

    updateTaskCount();


    // ==================================
    // CLEAR FORM
    // ==================================

    taskForm.reset();


    // ==================================
    // SUCCESS MESSAGE
    // ==================================

    alert("Task added successfully!");

});


// ======================================
// UPDATE TASK COUNT
// ======================================

function updateTaskCount() {

    const totalTasks =
        tasksContainer.querySelectorAll(".task-card").length;


    taskCount.textContent =
        `${totalTasks} Tasks`;

}