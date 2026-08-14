const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const subjectInput = document.querySelector("#subjectInput");
const deadlineInput = document.querySelector("#deadlineInput");

const tasksContainer = document.querySelector("#tasksContainer");
const taskCount = document.querySelector("#taskCount");


// Local Storage se tasks
let tasks = JSON.parse(localStorage.getItem("campusTasks")) || [];


// Page load par saved tasks show
tasks.forEach(function (task) {
    addTaskToScreen(task);
});


// Task count update
updateTaskCount();


// Form submit
taskForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const taskName = taskInput.value.trim();
    const subject = subjectInput.value;
    const deadline = deadlineInput.value;


    // Task validation
    if (taskName === "") {
        alert("Please enter task name");
        taskInput.focus();
        return;
    }


    // Subject validation
    if (subject === "") {
        alert("Please select subject");
        subjectInput.focus();
        return;
    }


    // Deadline validation
    if (deadline === "") {
        alert("Please select deadline");
        deadlineInput.focus();
        return;
    }


    // New task object
    const newTask = {
        id: Date.now(),
        name: taskName,
        subject: subject,
        deadline: deadline,
        completed: false
    };


    // Array mein add
    tasks.push(newTask);


    // Local Storage mein save
    localStorage.setItem(
        "campusTasks",
        JSON.stringify(tasks)
    );


    // Screen par directly show
    addTaskToScreen(newTask);


    // Count update
    updateTaskCount();


    // Form clear
    taskForm.reset();


    alert("Task added successfully!");

});


// ===============================
// ADD TASK TO SCREEN
// ===============================

function addTaskToScreen(task) {

    const taskCard = document.createElement("div");

    taskCard.className =
        "dynamic-task task-card bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-300";


    taskCard.innerHTML = `

        <div class="flex items-start gap-4">

            <input
                type="checkbox"
                class="taskCheckbox mt-1 w-5 h-5 accent-indigo-600"
            >

            <div>

                <h3 class="font-bold">
                    ${task.name}
                </h3>

                <p class="text-sm text-slate-500 mt-1">
                    ${task.subject}
                </p>

                <p class="text-sm text-indigo-500 mt-2">
                    📅 Due: ${task.deadline}
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


    // ===============================
    // CHECKBOX
    // ===============================

    const checkbox =
        taskCard.querySelector(".taskCheckbox");

    checkbox.addEventListener("change", function () {

        task.completed = checkbox.checked;


        const title =
            taskCard.querySelector("h3");


        if (checkbox.checked) {

            title.classList.add(
                "line-through",
                "text-slate-400"
            );

        } else {

            title.classList.remove(
                "line-through",
                "text-slate-400"
            );

        }


        // Local Storage update
        localStorage.setItem(
            "campusTasks",
            JSON.stringify(tasks)
        );

    });


    // ===============================
    // DELETE
    // ===============================

    const deleteBtn =
        taskCard.querySelector(".deleteBtn");


    deleteBtn.addEventListener("click", function () {

        // Screen se remove
        taskCard.remove();


        // Array se remove
        tasks = tasks.filter(function (item) {

            return item.id !== task.id;

        });


        // Local Storage update
        localStorage.setItem(
            "campusTasks",
            JSON.stringify(tasks)
        );


        // Count update
        updateTaskCount();

    });


    // ===============================
    // MY TASKS MEIN ADD
    // ===============================

    tasksContainer.appendChild(taskCard);


    // Agar task pehle se completed tha
    if (task.completed) {

        checkbox.checked = true;

        taskCard
            .querySelector("h3")
            .classList.add(
                "line-through",
                "text-slate-400"
            );

    }

}


// ===============================
// TASK COUNT
// ===============================

function updateTaskCount() {

    const totalTasks =
        tasksContainer.querySelectorAll(".task-card").length;

    taskCount.textContent =
        `${totalTasks} Tasks`;

}