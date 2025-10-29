let input = document.querySelector('[name="task"]');
let btn = document.querySelector("button");
let result = document.querySelector(".result");

let toDoList;
// localStorage.clear();

if (window.localStorage.getItem("tasks")) {
    toDoList = JSON.parse(localStorage.getItem("tasks"));

    console.log(JSON.parse(localStorage.getItem("tasks"))[0].title)
    for (let i = 0; i < JSON.parse(localStorage.getItem("tasks")).length; i++) {
        // console.log(JSON.parse(localStorage.getItem("tasks"))[i])

        let div = document.createElement("div");
        let task = document.createTextNode(JSON.parse(localStorage.getItem("tasks"))[i].title);
        let deleteBtn = document.createElement("button");
        let deleteTxt = document.createTextNode("Delete");
        let parent = document.createElement("div");

        parent.classList.add("parent");

        div.classList.add("task");
        deleteBtn.classList.add("delete-btn");

        deleteBtn.appendChild(deleteTxt);
        div.appendChild(task);
        // result.appendChild(div);
        // result.appendChild(deleteBtn);
        parent.appendChild(div);
        parent.appendChild(deleteBtn);
        result.appendChild(parent);

        // console.log(JSON.parse(localStorage.getItem("tasks"))[i].id);
        parent.id = JSON.parse(localStorage.getItem("tasks"))[i].id;
    }
} else {
    toDoList = [];
}


btn.addEventListener("click", function (e) {
    if (input.value !== "") {
        addTask(input.value);
        input.value = "";
    }

    e.preventDefault();
});

// function to add task
function addTask(value) {
    let div = document.createElement("div");
    let task = document.createTextNode(value);
    let deleteBtn = document.createElement("button");
    let deleteTxt = document.createTextNode("Delete");
    let parent = document.createElement("div");

    parent.classList.add("parent");

    div.classList.add("task");
    deleteBtn.classList.add("delete-btn");

    deleteBtn.appendChild(deleteTxt);
    div.appendChild(task);
    parent.appendChild(div);
    parent.appendChild(deleteBtn);
    result.appendChild(parent);


    toDoList.push({ id: Math.random(), title: value });
    window.localStorage.setItem("tasks", JSON.stringify(toDoList));
}

document.addEventListener("click", function (e) {
    if (e.target.className === "delete-btn") {
        let removedElement = +e.target.parentElement.id;
        let tasks = JSON.parse(localStorage.getItem("tasks"));

        let updatedTasks = tasks.filter(ele => ele.id !== removedElement);

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        e.target.parentElement.remove();
    }
})


