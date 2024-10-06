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
