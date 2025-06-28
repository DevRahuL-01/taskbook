const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function validInputCheck(input) {
    processedInput = "";
    for (i = 0; i < input.length; i++) {
        if (input.charAt(i) === " ") continue;
        processedInput += input.charAt(i);
    }
    return processedInput;
}

function addTask() {
    if (validInputCheck(inputBox.value) === "") {
        alert("Please! write something to add...")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

inputBox.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { // 13 is the keycode for "Enter"
        event.preventDefault();
        addTask();
    }
});


    listContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData()

        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData()
        }
    });

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showData() {
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showData();