// 1. Grab our HTML elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 2. Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim();
    
    // Don't add empty tasks
    if (taskText === "") return;

    // Create the HTML list item (li)
    const li = document.createElement('li');
    li.innerText = taskText;

    // Create the delete button inside the li
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);

    // Event Listener: Toggle completed status when clicking the text
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Event Listener: Delete the task when clicking the 'X'
    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the 'li' click event from firing
        li.remove();
    });

    // Append the new task to the main list
    todoList.appendChild(li);

    // Clear the input box for the next task
    todoInput.value = "";
}

// 3. Hook up the function to the Add button click
addBtn.addEventListener('click', addTask);

// 4. Allow pressing "Enter" key to add a task too
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
