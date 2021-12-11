const axios = require('axios');

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');

  const app = document.createElement('div');

  const header = document.createElement('h1');
  header.innerText = 'Todo list';
  app.appendChild(header);

  const menubar = document.createElement('nav');
  app.insertBefore(menubar, header);

  app.classList.add('wrapper');
  app.id = 'app';

  body.appendChild(app);

  const mainContainer = document.createElement('div');

  const inputField = document.createElement('input');
  inputField.classList.add('todoItem');

  mainContainer.appendChild(inputField);

  app.appendChild(mainContainer);

  const addButton = document.createElement('button');
  addButton.textContent = 'Save';

  // const allTodoItems = [];
  function loadDB() {
    axios.get('http://localhost:3000/api/all').then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        const todoDiv = document.createElement('div');
        const todoItem = document.createElement('p');
        todoItem.innerHTML = response.data.todoItem;

        mainContainer.appendChild(todoDiv);
        todoDiv.appendChild(todoItem);

        todoItem.innerText = response.data[i].todoItem;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        todoDiv.appendChild(editButton);

        const editInput = document.createElement('input');
        todoDiv.appendChild(editInput);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        todoDiv.appendChild(deleteButton);

        editButton.addEventListener('click', () => {
          console.log('LINE 34 response ', response.data[i]);
          const edit = editInput.value;
          editInput.value = '';
          axios
            .put(`http://localhost:3000/api/update/${response.data[i]._id}`, {
              todoItem: edit,
            })
            .then((response) => {
              // console.log('RESPONE FROM EDIT', response);
              // console.log('RESPONSE DATA I', response.data);
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
            .delete(`http://localhost:3000/api/delete/${response.data[i]._id}`)
            .then((response) => {
              console.log('DELETE', response);
            })
            .then(() => {
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }
    });
  }

  loadDB();

  addButton.addEventListener('click', () => {
    const sendingInput = inputField.value;
    inputField.value = '';
    axios
      .post('http://localhost:3000/api/add', {
        data: sendingInput,
      })
      .then((response) => {
        console.log('FRONTEND', response);
        const addList = new NewList(response, mainContainer);
      })
      .catch((err) =>
        console.log('addButton event listener post request: ', err)
      );
  });

  mainContainer.appendChild(addButton);
});
