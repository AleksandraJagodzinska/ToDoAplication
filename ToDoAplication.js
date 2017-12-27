function Task (title,description) {
    this.title = title;
    this.description = description
}
var toDoList = new Array();
toDoList.pop(new Task("kanapki","zrobić kanapki"));
toDoList.pop(new Task("kanapki2","zrobić kanapki33"));
toDoList.pop(new Task("kanapki3","zrobić kanapki33"));

var nextRow = null; //= document.createElement("row");
var table = null;

$("button.add").click(function(){
    nextRow = document.createElement('row task');
    nextRow.innerHTML = "<h1> dupsko</h1>";

    table = document.getElementsByClassName('content');
    document.body.insertBefore(nextRow,table);
    alert("dupa!");

    return nextRow; //new Task(#exampleInputEmail3,#exampleInputPassword3);
});