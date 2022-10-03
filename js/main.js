const apiUrl = 'http://localhost:3000/api';

fetch(`${apiUrl}`, {
  method: 'GET',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });

const modalForm = document.querySelector('.modal-form');

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  //fetch()

  console.log(123);
});
