const input = document.querySelector('.input');
const subButton = document.querySelector('.button');

let tasks = [
    {
        task: "omlet",
        done: false,
    },
];


const markAsDoneBtn = document.querySelector('.markAllAsDone');
let hideTask = false;
const showButtons = () => {

    const buttons = document.querySelector('.buttons');
    !tasks.length == 0 ? buttons.style.display = "block" : buttons.style.display = "none";

    if (tasks.every(({ done }) => done == true)) {
        markAsDoneBtn.classList.add('disabledButton')
       
        markAsDoneBtn.disabled = true;
       
    }
    else {
        markAsDoneBtn.classList.remove('disabledButton')
        markAsDoneBtn.disabled = false;
    }
}
const render = () => {
    showTasks();
    addNewTaskToList();
    markAllAsDone()
    showButtons();

}


const showTasks = () => {
    let tasksList = document.querySelector('.itemsList');
    let result = "";

    for (const { task, done } of tasks) {
        result += `
        <li style="display:${hideTask && done ? 'none' : 'flex'}"><button class='js-doneButton'>${!done ? "👌" : "👎"}</button>
        <span><p style='${done ? "text-decoration: line-through" : "text-decoration: none"}'>${task}</p></span>
        <button class='js-delButton'>🗑️</button></li>
        `
    }
    return tasksList.innerHTML = result;
}



const removeTask = () => {
    const remBttn = document.querySelectorAll('.js-delButton');
    remBttn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            tasks = [
                ...tasks.splice(0, index),
                ...tasks.splice(index + 1)
            ];
            render();
        });
    });

};


const toggleDoneTask = () => {
    const donBttn = document.querySelectorAll('.js-doneButton');
    donBttn.forEach((btn, index) => {

        btn.addEventListener("click", () => {

            tasks[index].done = !tasks[index].done;

            render();
        });
    });

};

const viewDoneTasks = () => {
    const bttn = document.querySelector('.hideDone')
    bttn.addEventListener('click', () => {
        hideTask = !hideTask;
        !hideTask ? bttn.innerText = "Ukryj ukończone" : bttn.innerText = "Pokaż ukończone";
        render()
    })
}

const markAllAsDone = () => {


    markAsDoneBtn.addEventListener('click', () => {
        tasks.forEach(task => {
            task.done = true;
        });
        render();
    });
};

const addNewTaskToList = () => {
    subButton.addEventListener('click', () => {
        if (input.value.trim() == "") {
            input.focus();
            return false;
        };
        tasks = [
            ...tasks,
            {
                task: input.value.trim(),
                done: false
            }];
        input.value = "";
        input.focus();
        render();

    });
    removeTask()
    toggleDoneTask()


};
viewDoneTasks()


const init = () => {
    render()
};
init();