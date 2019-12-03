function newList(inputValue) {
  var newItem = document.createElement('li');
  newItem.setAttribute('id', 'mylist');
  
  if (inputValue === '') {
    alert("can't enter an empty data!");
    return;
  }
  else {
    var text = document.createTextNode(inputValue);
    newItem.appendChild(text);
    document.getElementById('myUl').appendChild(newItem)
    
  }
  document.getElementById('input').value = '';

  //add a checkbox
  var checkSpan = document.createElement('span');
  var checkInput = document.createElement('input');
  checkSpan.setAttribute('class', 'check-dom');
  checkInput.setAttribute('type', 'checkbox');
  checkSpan.appendChild(checkInput);

  //add eventlistener
  checkInput.onchange = ($event) => {
  
    if ($event.target.checked) {
      console.log( $event.target.parentElement.parentElement)
      $event.target.parentElement.parentElement.classList.add('line');
    }
  }

  // delete list
  var deleteSpan = document.createElement('span');
  deleteSpan.className = "fa fa-remove";
  deleteSpan.style.color = "red";
  deleteSpan.style.fontSize = "18px";
  deleteSpan.style.cssFloat = "right";
  newItem.appendChild(checkSpan);
  newItem.appendChild(deleteSpan);

  deleteSpan.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function createNewList() {
  const inputValue = document.getElementById('input').value;
  updateTodo(inputValue);
  return newList(inputValue);

}

function updateTodo(todo) {
  let todos = JSON.parse(localStorage.getItem('todos'));
  if(todos) {
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  } else {
    localStorage.setItem('todos', JSON.stringify([todo]));
  }
}
// Retrieve the todos from localStorage

(function loadTodos() {
  const todosArray = JSON.parse(localStorage.getItem('todos'));
  if(todosArray) {
    todosArray.forEach(todo => {
      newList(todo);
    });
  }
})()
