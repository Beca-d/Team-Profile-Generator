function pageTemplate(data) {

    var teamHtml = "";

    data.forEach(element => {
        let type = element.getRole();

         teamHtml += type === "Manager" ? createManager(element) : 
         type === "Engineer" ? createEngineer(element) :
          createIntern(element);

         });
          
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../src/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Saira+Condensed&family=Tiro+Gurmukhi&display=swap" rel="stylesheet">
        
        <title>Team Members</title>
      </head>
      <body>
        <header>
          <p>My Team</p>
        </header>
        <section class="container d-md-flex flex-row flex-wrap">${teamHtml}</section>
      </body>
    </html>
    `
}

//manager
function createManager(data) {

    return `
    <div class="card  m-3">
    <div class="card-header text-center">
      <p>${data.getName()}</p>
      <p>
      <i class="fa-sharp fa-solid fa-user-tie"></i> ${data.getRole()}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <label>Employee ID: </label><span class="employee-id"> ${data.getId()}</span>
      </li>
      <li class="list-group-item">
        <label class="email">Email: </label>
        <a class="link" href="mailto:${data.getEmail()}">${data.getEmail()}</a>
      </li>
      <li class="list-group-item">
        <label> Office Number: </label><span> ${data.getOfficeNum()}</span>
      </li>
    </ul>
  </div>
    `
}
//engineer
function createEngineer(data) {
    return `
    <div class="card  m-3">
    <div class="card-header text-center">
      <p>${data.getName()}</p>
      <p>
      <i class="fa-solid fa-user-gear"></i> ${data.getRole()}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <label>Employee ID: </label><span class="employee-id"> ${data.getId()}</span>
      </li>
      <li class="list-group-item">
        <label class="email">Email: </label>
        <a class="link" href="mailto:${data.getEmail()}">${data.getEmail()}</a>
      </li>
      <li class="list-group-item">
        <label>Github: </label>
        <a class="link" href="https://github.com/${data.getGithub()}">${data.getGithub()}</a>
      </li>
    </ul>
  </div>
  `
}
//intern
function createIntern(data) {
    return `
    <div class="card  m-3">
  <div class="card-header text-center">
    <p>${data.getName()}</p>
    <p>
      <i class="fa-solid fa-user-graduate"></i> ${data.getRole()}
    </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <label>Employee ID: </label><span class="employee-id"> ${data.getId()}</span>
    </li>
    <li class="list-group-item">
      <label class="email">Email: </label>
      <a class="link" href="mailto:${data.getEmail()}">${data.getEmail()}</a>
    </li>
    <li class="list-group-item">
      <label>School: </label> ${data.getSchool()}
    </li>
  </ul>
</div>    
    `
}



module.exports = pageTemplate;