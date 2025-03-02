// Alert
let taskButtons = document.querySelectorAll("button[id^='completed_task-']");
let completedCount = 0;

taskButtons.forEach(taskButton => {
    taskButton.addEventListener("click", function() {
        alert("Board updated successfully");

        taskButton.disabled = true;

        completedCount++;

        if (completedCount === taskButtons.length) {
            alert("Congratulations! You have completed all the current tasks");
        }
    });
});