function Task (title,description) {
    this.title = title;
    this.description = description
}
var toDoList = new Array();
toDoList.pop(new Task("kanapki","zrobić kanapki"));
toDoList.pop(new Task("kanapki2","zrobić kanapki33"));
toDoList.pop(new Task("kanapki3","zrobić kanapki33"));


$("button.add").click(function(){

    var list = document.querySelector("#list")
    var listItem = document.createElement("li");
    var text = document.createTextNode("treść");

    listItem.appendChild(text);
    list.appendChild(listItem)

}

//     nextRow = document.createElement('row task');
//     nextRow.innerHTML = "<h1> dupsko</h1>";
//
//     table = document.getElementsByClassName('content');
//     document.body.insertBefore(nextRow,table);
//     alert("dupa!");
//
//     return nextRow; //new Task(#exampleInputEmail3,#exampleInputPassword3);
// });