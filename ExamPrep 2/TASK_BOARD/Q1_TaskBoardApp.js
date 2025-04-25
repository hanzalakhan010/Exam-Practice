"use strict";
class TODOS {
    todos;
    constructor() {
        this.todos = [];
        this.loadTodos();
    }
    addTodo() {
        let task = document.getElementById("task");
        if (task?.value) {
            let _id = crypto.randomUUID();
            this.todos.push({
                _id,
                task: task.value,
                status: "Todo",
            });
        }
        this.renderTodos();
    }
    renderTodos() {
        let todoDiv = document.getElementById("todo");
        let doneDiv = document.getElementById("done");
        if (todoDiv && doneDiv) {
            todoDiv.innerHTML = "";
            doneDiv.innerHTML = "";
            this.todos.forEach((todo) => {
                let options = ["Todo", "Done"];
                let html = `
            <div class="card todo">
                <p>task todotask todotask</p>
                <div>
                    ${options
                    .filter((option) => option != todo.status)
                    .map((option) => `<button value='${option}'>${option}</button>`)
                    .join("")}
                      </div>
            </div>
        `;
                if (todo.status == "Done")
                    doneDiv.insertAdjacentHTML("beforeend", html);
                if (todo.status == "Todo")
                    todoDiv.insertAdjacentHTML("beforeend", html);
            });
        }
    }
    loadTodos() {
        let rawData = localStorage.getItem("todo");
        if (rawData) {
            this.todos = JSON.parse(rawData);
        }
    }
}
[...document.querySelectorAll("select")].forEach((select) => {
    select.addEventListener("onchange", function (event) { });
});
let todos = new TODOS();
