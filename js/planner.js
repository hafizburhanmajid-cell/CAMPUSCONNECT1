const taskForm = document.querySelector("#taskForm");

const taskInput = document.querySelector("#taskInput");
const subjectInput = document.querySelector("#subjectInput");
const deadlineInput = document.querySelector("#deadlineInput");

const tasksContainer = document.querySelector("#tasksContainer");
const taskCount = document.querySelector("#taskCount");


// =====================================
// LOCAL STORAGE SE TASKS LOAD
// =====================================

let tasks = JSON.parse(localStorage.getItem("campusTasks")) || [];


// =====================================
// PAGE LOAD PAR TASKS SHOW
// =====================================

tasks.forEach(function (task) {

    addTaskToScreen(task);

});

updateTaskCount();


// =====================================
// ADD TASK
// =====================================

taskForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const taskName = taskInput.value.trim();
    const subject = subjectInput.value;
    const deadline = deadlineInput.value;


    // Validation
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


    // =================================
    // NEW TASK
    // =================================

    const newTask = {

        id: Date.now(),

        name: taskName,

        subject: subject,

        deadline: deadline,

        completed: false

    };


    // Array mein add
    tasks.push(newTask);


    // =================================
    // LOCAL STORAGE MEIN SAVE
    // =================================

    localStorage.setItem(
        "campusTasks",
        JSON.stringify(tasks)
    );


    // Screen par show
    addTaskToScreen(newTask);


    // Count update
    updateTaskCount();


    // Form clear
    taskForm.reset();


    alert("Task added successfully!");

});


// =====================================
// ADD TASK TO SCREEN
// =====================================

function addTaskToScreen(task) {

    const taskCard = document.createElement("div");


    taskCard.className =
        "task-card bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-300";


    taskCard.innerHTML = `

        <div class="flex items-start gap-4">

            <input
                type="checkbox"
                class="taskCheckbox mt-1 w-5 h-5 accent-indigo-600 cursor-pointer"
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


    // =================================
    // CHECKBOX
    // =================================

    const checkbox =
        taskCard.querySelector(".taskCheckbox");


    const title =
        taskCard.querySelector("h3");


    // Agar task pehle completed tha
    if (task.completed === true) {

        checkbox.checked = true;

        title.classList.add(
            "line-through",
            "text-slate-400"
        );

    }


    checkbox.addEventListener("change", function () {

        task.completed = checkbox.checked;


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


        // Updated task localStorage mein save
        localStorage.setItem(
            "campusTasks",
            JSON.stringify(tasks)
        );

    });


    // =================================
    // DELETE BUTTON
    // =================================

    const deleteBtn =
        taskCard.querySelector(".deleteBtn");


    deleteBtn.addEventListener("click", function () {

        // Screen se remove
        taskCard.remove();


        // Array se remove
        tasks = tasks.filter(function (item) {

            return item.id !== task.id;

        });


        // LocalStorage update
        localStorage.setItem(
            "campusTasks",
            JSON.stringify(tasks)
        );


        // Count update
        updateTaskCount();

    });


    // =================================
    // MY TASKS MEIN ADD
    // =================================

    tasksContainer.appendChild(taskCard);

}


// =====================================
// TASK COUNT
// =====================================

function updateTaskCount() {

    const totalTasks =
        tasks.length;


    taskCount.textContent =
        `${totalTasks} Tasks`;

}