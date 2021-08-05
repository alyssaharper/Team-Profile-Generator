function generateMangCard(newManager) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-header">
    ${newManager.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${newManager.id}</li>
    <li class="list-group-item">Email: ${newManager.email}</li>
    <li class="list-group-item">Office Number: ${newManager.officeNumber}</li>
  </ul>
</div>`
};

function generateHTML(data) {
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

      <div id="manager"></div>
      <div id="engineer"></div>
      <div id="intern"></div>
   
  <script src="index.js"></script> 
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</html>
    `
}

module.exports = generateHTML;