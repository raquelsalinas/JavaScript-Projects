/*Function gets task from input*/
function get_todos() {
    /*Creates an array of tasks that are inputed*/
    var todos = new Array;
    /*Pulls task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*If the input is not null then JSON.parse will communicate with the web browser to make the task a JavaScript object*/
    if (todos_str != null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/*Function adds the inputed task to get the get_todos function array*/
function add() {
    /*This takes the inputed task and creates a variable of it*/
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*This adds a new task the end of the array*/
    todos.push(task);
    /*This converts the task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}
/*Function keeps the tasks permanetly displayed on the screen*/
function show() {
    /*Sets the task that was retrieved as a variable*/
    var todos = get_todos();

    /*Sets up each task as an unordered list*/
    var html = '<ul>';
    /*Displays a task to the list in the order that is it inputed*/
    for (var i = 0; i < todos.length; i++) {
        /*Also displays the task as a list and creates the button with the "x"*/
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    /*Displays the task as a list*/
    document.getElementById('todos').innerHTML = html;

    /*Tells browser how to display the todo array after an item has been removed*/
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }

}
/*Displays inputed task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*This will keep the inputs displayed permanently on the screen*/
show();

/*Creates functionality of removing a todo item from array*/
function remove() {
    var id= this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*This looks in the show() how to display a removed item on screen*/
    show();

    return false;
}