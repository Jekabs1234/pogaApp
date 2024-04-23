const inputLauks =  document.querySelector(".taskInput");
const addButton = document.querySelector(".addButton");
const taskContainer = document.querySelector(".taskContainer");

const taskArray = [];

addButton.addEventListener("click", () => {
    taskArray.push(inputLauks.value)

    inputLauks.value = ""

    showTasks()
})

const showTasks = () => {
    const uzdevumuSaraksts = taskArray.map((uzdevums) => {
        return `<div>${uzdevums}</div>`
    })

    taskContainer.innerHTML = uzdevumuSaraksts.join("")
}