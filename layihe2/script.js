
// const inputWrapper = document.getElementById("input-wrapper");
// const inputBox = document.getElementById("taskInput");
// const listContainer = document.getElementById("list-container");
// const listBlock = document.querySelector(".block3");
// const clearbutton1 = document.querySelector(".clear-btn");
// const showInputBtn = document.getElementById("showInputBtn");
// const addTaskBtn = document.getElementById("addTaskBtn");

// const sortBtn = document.querySelector(".sort-btn");
// const sortIcon = document.querySelector(".sort-icon");

// let isAscending = true;
// sortBtn.addEventListener("click", function () {
//     sortTasks();
//     toggleSortIcon();
// });  

//  function sortTasks() {
//      let tasks = Array.from(listContainer.querySelectorAll("li"));

//      tasks.sort((a, b) => {
//          let textA = a.textContent.trim().toLowerCase();
//          let textB = b.textContent.trim().toLowerCase();

//          return isAscending ? textA.localeCompare(textB) : textB.localeCompare(textA);
//      });

//     tasks.forEach(task => listContainer.appendChild(task));
//     isAscending = !isAscending;

// }
//  function toggleSortIcon() {
//     sortIcon.src = isAscending ? "./Group 34.svg" : "./Group 90.svg";
//  }


// inputWrapper.classList.remove("hidden"); 
// addTaskBtn.style.display = "block";    


// showInputBtn.addEventListener("click", function () {
//     inputWrapper.classList.remove("hidden");
//     inputBox.focus();
// });


// addTaskBtn.addEventListener("click", function () {
//      if (inputBox.value.trim() === "") {
//          alert("Her hansi birsey daxil edin!");
//         return;
//      }

//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;

//     let span = document.createElement("span");
//     span.innerHTML = "×";
//     li.appendChild(span);

//     listContainer.appendChild(li);

//     inputBox.value = "";

    
//     inputWrapper.classList.add("hidden");

    
//     listBlock.style.display = "block";
    

// });


// listContainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();

//         if (listContainer.children.length === 0) {
//             listBlock.style.display = "none";
//         }
//     } 

// });

// clearbutton1.addEventListener("click", function () {
//   inputBox.value = "";
//    inputBox.focus();
//  });



const inputWrapper = document.getElementById("input-wrapper");
const inputBox = document.getElementById("taskInput");
const listContainer = document.getElementById("list-container");
const listBlock = document.querySelector(".block3");
const clearbutton1 = document.querySelector(".clear-btn");
const showInputBtn = document.getElementById("showInputBtn");
const addTaskBtn = document.getElementById("addTaskBtn");

const sortBtn = document.querySelector(".sort-btn");
const sortIcon = document.querySelector(".sort-icon");

let isAscending = true;
let taskId = 1; 
sortBtn.addEventListener("click", function () {
    sortTasks();
    toggleSortIcon();
});

function sortTasks() {
    let tasks = Array.from(listContainer.querySelectorAll("li"));
    tasks.sort((a, b) => {
        let textA = a.dataset.text.toLowerCase();
        let textB = b.dataset.text.toLowerCase();

        return isAscending ? textA.localeCompare(textB) : textB.localeCompare(textA);
    });

    tasks.forEach(task => listContainer.appendChild(task));

    isAscending = !isAscending;
}

function toggleSortIcon() {
    sortIcon.src = isAscending ? "./Group 34.svg" : "./Group 90.svg";
}
inputWrapper.classList.remove("hidden");
addTaskBtn.style.display = "block";

showInputBtn.addEventListener("click", function () {
    inputWrapper.classList.remove("hidden");
    inputBox.focus();
});

addTaskBtn.addEventListener("click", function () {
    if (inputBox.value.trim() === "") {
        alert("Her hansi birsey daxil edin!");
        return;
    }

    let li = document.createElement("li");

    li.dataset.text = inputBox.value.trim();
    li.dataset.id = taskId;
    li.innerHTML = `${taskId}. ${inputBox.value.trim()} `;
    let span = document.createElement("span");
    span.innerHTML = "×";
    li.appendChild(span);

    listContainer.appendChild(li);

    taskId++; 

    inputBox.value = "";
    inputWrapper.classList.add("hidden");
    listBlock.style.display = "block";
});


listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();

        if (listContainer.children.length === 0) {
            listBlock.style.display = "none";
        }
    }
});

clearbutton1.addEventListener("click", function () {
    inputBox.value = "";
    inputBox.focus();
});
