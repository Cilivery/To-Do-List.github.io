document.getElementById('add-btn').addEventListener('click',function(){
    let taskInput = document.getElementById('task-input');
    let taskvalue = taskInput.value.trim();

    if(taskvalue){
        addTask(taskvalue);
        taskInput.value = "";
    }
});

function addTask(task) {
    let taskList = document.getElementById('task-list');

    let listItem = document.createElement('li');
    let taskText = document.createElement('span');
    taskText.textContent = task;

    //delete button
    let delB = document.createElement('button');
    delB.textContent = 'Delete';
    delB.classList.add('delete-btn');
    delB.addEventListener('click' , function(){
        taskList.removeChild(listItem);
    });


    listItem.appendChild(taskText);
    listItem.appendChild(delB);

    taskList.appendChild(listItem);
}
const background = document.querySelector('.background');
let direction = 1;
const moveAmount = 1; // Amount of movement per interval

// Generate "To-Do..." texts across the screen
function generateToDoGrid() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const textSize = 120; // Adjust this to control spacing
    const columns = Math.ceil(windowWidth / textSize);
    const rows = Math.ceil(windowHeight / textSize);

    // Clear any existing content
    background.innerHTML = '';

    // Generate a grid of "To-Do..." texts
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const div = document.createElement('div');
            div.classList.add('background-text');
            div.textContent = 'To-Do...';
            div.style.left = `${col * textSize}px`;
            div.style.top = `${row * textSize}px`;

            // Store the initial positions
            div.dataset.baseX = col * textSize;
            div.dataset.baseY = row * textSize;

            background.appendChild(div);
        }
    }
}

// Move the text diagonally in sync
function moveText() {
    const texts = document.querySelectorAll('.background-text');
    texts.forEach((text) => {
        let xPos = parseFloat(text.style.left);
        let yPos = parseFloat(text.style.top);

        // Move diagonally
        xPos += direction * moveAmount;
        yPos += direction * moveAmount;

        // Reverse direction if the text hits the screen edges
        if (xPos > window.innerWidth - 100 || yPos > window.innerHeight - 100 || xPos < 0 || yPos < 0) {
            direction *= -1;
        }

        // Apply the updated position
        text.style.left = `${xPos}px`;
        text.style.top = `${yPos}px`;
    });
}

// Initialize the grid and start movement
generateToDoGrid();
setInterval(moveText, 50);

// Regenerate grid when the window is resized to ensure coverage
window.addEventListener('resize', generateToDoGrid);
