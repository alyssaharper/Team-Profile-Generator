const employeeEl = document.getElementById('employee');

const getPets = () =>
  fetch('/api/pets', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data);

const employeeCard = (info) => {
  const cardEl = document.createElement('div');
  const cardImageEl = document.createElement('img');
  const cardBodyEl = document.createElement('div');
  const cardBodyTitle = document.createElement('div');

  cardImageEl.classList.add('image', 'p-5');
  cardEl.classList.add('card', 'p-5');
  cardBodyEl.classList.add('card-body', 'p-5');
  cardBodyTitle.classList.add('card-header', 'card-title', 'link');

  cardImageEl.setAttribute('src', pet.image_url);
  cardBodyTitle.innerHTML = info.name;
  cardBodyEl.innerText = pet.description;
  employeeEl.appendChild(cardBodyTitle);
  employeeEl.appendChild(cardBodyEl);
  employeeEl.appendChild(cardImageEl);
};
