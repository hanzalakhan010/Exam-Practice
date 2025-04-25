"use strict";
class TODOS {
    todos;
    constructor() {
        this.todos = [];
        this.loadTodos();
        this.renderTodos();
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
        this.saveState();
        this.renderTodos();
    }
    chageStatus(_id, status) {
        for (let todo of this.todos) {
            if (todo._id == _id) {
                todo.status = status;
                break;
            }
        }
        this.saveState();
        this.renderTodos();
    }
    renderTodos() {
        let todoDiv = document.getElementById("todo");
        let doneDiv = document.getElementById("done");
        if (todoDiv && doneDiv) {
            todoDiv.innerHTML = "";
            doneDiv.innerHTML = "";
            this.todos.forEach((todo) => {
                let html = `
            <div class="card ${todo.status.toLocaleLowerCase()}">
                <p>${todo.task}</p>
                <button onclick= 'todos.chageStatus("${todo._id}","${todo.status == "Done" ? "Todo" : "Done"}")' '>${todo.status == "Done" ? "Todo" : "Done"}</button>
            </div>
        `;
                if (todo.status == "Done")
                    doneDiv.insertAdjacentHTML("beforeend", html);
                if (todo.status == "Todo")
                    todoDiv.insertAdjacentHTML("beforeend", html);
            });
        }
    }
    saveState() {
        localStorage.setItem("todo", JSON.stringify(this.todos));
    }
    loadTodos() {
        let rawData = localStorage.getItem("todo");
        console.log(rawData);
        if (rawData) {
            this.todos = JSON.parse(rawData);
        }
    }
}
[...document.querySelectorAll("select")].forEach((select) => {
    select.addEventListener("onchange", function (event) { });
});
let todos = new TODOS();
