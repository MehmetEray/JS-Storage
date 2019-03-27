// Session Storage
// Butonları seçmek
// const add = document.querySelector("#add");
// const del = document.querySelector("#delete");
// const clear = document.querySelector("#clear");

// // Inputlar

// const addkey = document.querySelector("#addkey");
// const addvalue = document.querySelector("#addvalue");
// const deletekey = document.querySelector("#deletekey");

// add.addEventListener("click",addItems);
// del.addEventListener("click",deleteItems);
// clear.addEventListener("click",clearItems);

// function addItems(e){
//     sessionStorage.setItem(addkey.value,addvalue.value);
// }
// function deleteItems(e){
//     sessionStorage.removeItem(deletekey.value);
// }
// function clearItems(e){
//     sessionStorage.clear();
// }

// Local Storage

// SetItem

// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50);
// GetItem

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);
// Clear local storage

// console.log(localStorage.getItem("sport"));
// if(localStorage.getItem("hareket") != null){
//     console.log("Sorguladığınız veri bulunuyor");
// }
// else{
//     console.log("Sorguladığınız veri bulunamıyor");
// }

// Local storage array yazma

// const todos = ["one","two","three"];
// localStorage.setItem("todos",JSON.stringify(todos));
// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
form.addEventListener("submit",addTodo);
function addTodo(e){
    const value = todoInput.value;
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));
    e.preventDefault();
}