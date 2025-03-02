// Alert + Disabled
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

// Decrease Task Remaining
document.querySelectorAll('button[id^="completed_task"]').forEach(button => {button.addEventListener('click', function (){
    let remainingTasks = document.querySelector('#remaining_tasks span');
    let currentValue = parseInt(remainingTasks.textContent)

    if (currentValue > 0) {
        remainingTasks.textContent = currentValue - 1;
    }
})})

// Increase Total Task Completed
document.querySelectorAll('button[id^="completed_task"]').forEach(button => {button.addEventListener('click', function (){
    let totalTasks = document.getElementById('total_completed_task');
    let currentTotalTasks = parseInt(totalTasks.textContent)
    totalTasks.textContent = currentTotalTasks + 1;
})})

// Task Completed Message
document.getElementById('completed_task-1').addEventListener('click', function() {
    let issueTitle = document.getElementById('issue-title-1').textContent;
    document.getElementById('task_done-1').innerHTML = `You have completed the task ${issueTitle} at ${new Date().toLocaleTimeString()}`;
});

document.getElementById('completed_task-2').addEventListener('click', function() {
    let issueTitle = document.getElementById('issue-title-2').textContent;
    document.getElementById('task_done-2').innerHTML = `You have completed the task ${issueTitle} at ${new Date().toLocaleTimeString()}`;
});

document.getElementById('completed_task-3').addEventListener('click', function() {
    let issueTitle = document.getElementById('issue-title-3').textContent;
    document.getElementById('task_done-3').innerHTML = `You have completed the task ${issueTitle} at ${new Date().toLocaleTimeString()}`;
});

document.getElementById('completed_task-4').addEventListener('click', function() {
    let issueTitle = document.getElementById('issue-title-4').textContent;
    document.getElementById('task_done-4').innerHTML = `You have completed the task ${issueTitle} at ${new Date().toLocaleTimeString()}`;
});

document.getElementById('completed_task-5').addEventListener('click', function() {
    let issueTitle = document.getElementById('issue-title-5').textContent;
    document.getElementById('task_done-5').innerHTML = `You have completed the task ${issueTitle} at ${new Date().toLocaleTimeString()}`;
});

document.getElementById('completed_task-6').addEventListener('click', function() {
    let issueTitle = document.getElementById('issue-title-6').textContent;
    document.getElementById('task_done-6').innerHTML = `You have completed the task ${issueTitle} at ${new Date().toLocaleTimeString()}`;
});