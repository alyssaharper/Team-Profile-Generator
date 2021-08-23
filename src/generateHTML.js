function generateMangCard(newManager) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-header">${newManager.name}</div>
  <div class="card-subheader">Manager</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${newManager.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${newManager.email}">${newManager.email}</a></li>
    <li class="list-group-item">Office Number: ${newManager.officeNumber}</li>
  </ul>
</div>`;
};

function generateEngCard(newEngineer) {
  return `
  <div class="card" style="width: 18rem;">
<div class="card-header">${newEngineer.name}</div>
<div class="card-subheader">Engineer</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${newEngineer.id}</li>
  <li class="list-group-item">Email: <a href="mailto:${newEngineer.email}">${newEngineer.email}</a></li>
  <li class="list-group-item">Github: <a href="https://github.com/${newEngineer.github}">${newEngineer.github}</a></li>
</ul>
</div>`;
};

function generateInternCard(newIntern) {
  return `
  <div class="card" style="width: 18rem;">
<div class="card-header">${newIntern.name}</div>
<div class="card-subheader">Intern</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${newIntern.id}</li>
  <li class="list-group-item">Email: <a href="mailto:${newIntern.email}">${newIntern.email}</a></li>
  <li class="list-group-item">School: ${newIntern.school}</li>
</ul>
</div>`;
};

const createTeamCards = (data) => {
  teamCards = [];
  for(let i =0; i < data.length; i++) {
    const teamMember = data[i];
    const role = teamMember.getRole();

    if (role === 'Manager') {
      const createManagerCard = generateMangCard(teamMember);
      teamCards.push(createManagerCard);
    }

    if (role === 'Engineer') {
      const createEngineerCard = generateEngCard(teamMember);
      teamCards.push(createEngineerCard);
    }

    if (role === 'Intern') {
      const createInternCard = generateInternCard(teamMember);
      teamCards.push(createInternCard);
    }

  };

  const finalCards = teamCards.join('')
  const finalTeam = createHTML(finalCards);
  return finalTeam;
}

function createHTML(finalCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Team Profile Generator</title>
</head>
<body>
    <nav class="navbar navbar-light bg-danger">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 text-white" style="justify-content: center;">My Team</span>
        </div>
      </nav>

      <div class="container">${finalCards}</div>
   
  <script src="index.js"></script> 
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</html>
    `
}

module.exports = createTeamCards;