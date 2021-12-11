class NewList {
  constructor(todo, mainContainer) {
    const todoDiv = document.createElement('div');
    const todoItem = document.createElement('p');
    todoItem.innerHTML = todo.data.todoItem;

    mainContainer.appendChild(todoDiv);
    todoDiv.appendChild(todoItem);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    todoDiv.appendChild(editButton);

    const editInput = document.createElement('input');
    todoDiv.appendChild(editInput);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    todoDiv.appendChild(deleteButton);

    editButton.addEventListener('click', () => {
      const edit = editInput.value;
      editInput.value = '';
      axios
        .put(`http://localhost:3000/api/update/${todo.data._id}`, {
          todoItem: edit,
        })
        .then((response) => {
          console.log(response);
        })
        .then(() => {
          window.location.reload();
        })
        .catch((err) =>
          console.log('addButton event listener post request: ', err)
        );
    });

    deleteButton.addEventListener('click', () => {
      axios
        .delete(`http://localhost:3000/api/delete/${todo.data._id}`)
        .then((response) => {})
        .then(() => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}
