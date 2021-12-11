const axios = require('axios');

/*
<body>
<div class='wrapper' id='app'>
HI BRYAN!
<nav></nav>
<h1>HI KEVIN!</h1>
</div>
</body>
*/

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');

  const app = document.createElement('div');

  app.innerText = 'HI BRYAN!';

  const header = document.createElement('h1');
  header.innerText = 'HI KEVIN!';
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

  addButton.addEventListener('click', () => {
    console.log('hello');
  });
  mainContainer.appendChild(addButton);
  // let button = document.querySelector('#send-message');
  // button.addEventListener('click', () => {
  //   fetch('https://curriculum-api.codesmith.io/messages', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       created_by: document.getElementsByClassName('name')[0].value,
  //       message: document.getElementsByClassName('message')[0].value,
  //     }),
  //   })
  //     .then((data) => data.json())
  //     .then((data) => console.log(data))
  //     .then(() => {
  //       window.location.reload();
  //     });
  // });

  console.log(body);
});
