const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

alert("Don't Delay . Start today !!");

function addTask() {
    if (inputBox.value === '') {
        alert('Please enter a task');
    }
    else {
        let li = document.createElement("li"); // create new element <li>
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);  // append the newly created LI to container div
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; /*code for cross icon */
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
// when we click on task it should show checked/unchecked 
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    // when we click on cross sign the task should disappear. Here parent element is LI
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// to protect/store the data due to  Page refreshing and  window closed 

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
// to Display the data whenever we open the app
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


// adding the function of enter key in app
inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});