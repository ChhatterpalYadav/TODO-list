document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskDeadline = document.getElementById('taskDeadline');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const searchInput = document.getElementById('searchInput');
    const taskList = document.getElementById('taskList');
    const searchButton = document.getElementById('searchButton');
    

    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        const taskDueDate = taskDeadline.value;

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <span class="dueDate">Due Date: ${taskDueDate}</span>
                <button class="btn btn-primary completeBtn">Complete</button>
                <button class="btn btn-danger deleteBtn">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';
            taskDeadline.value = '';
        }
    });

    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('completeBtn')) {
            e.target.parentElement.querySelector('span').classList.toggle('completed');
            // e.target.parentElement.remove();
        }
        if (e.target.classList.contains('deleteBtn')) {
            e.target.parentElement.remove();
        }
    });

    // seraching
    searchButton.addEventListener('click', function () {
        performSearch();
    });
    searchInput.addEventListener('input', function () {
        performSearch();
    });


    function performSearch() {
        const searchValue = searchInput.value.toLowerCase();

        // Iterate through tasks and show/hide based on the search term
        for (const taskItem of taskList.children) {
            const taskText = taskItem.querySelector('span').textContent.toLowerCase();
            if (taskText.includes(searchValue)) {
                taskItem.style.display = 'block';
            } else {
                taskItem.style.display = 'none';
            }
        }
    }
    
});
