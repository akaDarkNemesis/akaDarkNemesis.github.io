function newtask(){
    var todo = document.getElementById('task').value;
    if(
        todo==""
    ){
        alert('Add Task!');
        return false;
    }
    var existingtask = document.getElementById(todo);
    if(existingtask){
        alert('This task already exists');
        return false;
    }
    var mainlist = document.getElementById('todo');
    var li = document.createElement('li');
    li.setAttribute('id', todo);
    li.setAttribute('class', 'alert alert-success');
    li.appendChild(document.createTextNode(todo));
    mainlist.appendChild(li);
}
function endtask(){
    var todo = document.getElementById('task').value;
    if(
        todo==""
    ){
        alert('Add Task!');
        return false;
    }
    var mainlist = document.getElementById('todo');
    var li = document.getElementById(todo);
    mainlist.removeChild(li);
}