const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Write someting!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//we want to store the task on web browser

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//when we display data when open browser.

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

































// let todo = [];

// let req = prompt("Enter your request");
// while (true) {
//     if(req == "quit") {
//         console.log("quitting app");
//         break;
//     }

//     if (req == "list") {
//         console.log(".....................");
//         for(let i=0; i<todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("..................");
//     }else if(req == "add") {
//       let task = prompt("please enter the task you want to add");
//       todo.push(task);
//       console.log("task added")
//     }else if(req == "delete") {
//         let idx = prompt("please enter the task index you want to delete");
//         todo.splice(idx, 1);
//         console.log("task is deleted");
//     }else {
//         console.log("wrong request");
//     }

//     req = prompt("Enter your request");
// }


// let todo = [];
// let req = prompt("enter your request");
// while(true) {
//     if(req == "quit") {
//         console.log("quiting app");
//         break;
//     }
    
//     if(req == "list") {
//         console.log(",,,,,,,,,,,,,,,,,,,,,,,,");
//         for(let i=0; i<todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log(",,,,,,,,,,,,,,,,,,,,,,,,");
        
//     }
//     else if(req == "add") {
//         let task = prompt("enter your task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }
//     else if(req == "delete") {
//         let idx = prompt("please enter the task index you want to delete");
//         todo.splice(idx, 1);
//         console.log("task is deleted")
//     }
//     else {
//         console.log("wrong entery");
//     }

//     req = prompt("enter your request");
